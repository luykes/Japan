#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Japan Travel — VPS Setup Script
# Run as root on a fresh Ubuntu 22.04 / 24.04 server
# Usage: bash setup-vps.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

DOMAIN="japan-luyke.duckdns.org"
APP_DIR="/opt/japan-travel"
APP_USER="japanapp"

echo ""
echo "══════════════════════════════════════════════"
echo "  Japan Travel — VPS Setup"
echo "  Domain : $DOMAIN"
echo "══════════════════════════════════════════════"
echo ""

# ── 1. System updates ──────────────────────────────────────────────────────
echo "[1/9] Updating system..."
apt-get update -qq && apt-get upgrade -y -qq

# ── 2. Essential packages ──────────────────────────────────────────────────
echo "[2/9] Installing packages..."
apt-get install -y -qq \
    curl git ufw fail2ban \
    nginx certbot python3-certbot-nginx \
    unattended-upgrades

# ── 3. Docker ──────────────────────────────────────────────────────────────
echo "[3/9] Installing Docker..."
if ! command -v docker &>/dev/null; then
    curl -fsSL https://get.docker.com | sh
fi

# ── 4. Create app user ─────────────────────────────────────────────────────
echo "[4/9] Creating app user..."
if ! id "$APP_USER" &>/dev/null; then
    useradd --system --shell /bin/bash --create-home "$APP_USER"
    usermod -aG docker "$APP_USER"
fi

# ── 5. Clone / update repo ─────────────────────────────────────────────────
echo "[5/9] Cloning repo..."
git config --global --add safe.directory "$APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
    git -C "$APP_DIR" pull origin main
else
    git clone https://github.com/luykes/Japan "$APP_DIR"
fi

# Keep repo owned by root so git pulls work without permission issues
# Only the env file is owned by the app user
chmod -R 755 "$APP_DIR"

# Write env file placeholder — add ANTHROPIC_API_KEY manually after setup
if [ ! -f "$APP_DIR/.env.local" ]; then
    cat > "$APP_DIR/.env.local" <<'EOF'
# Add your Anthropic API key here, then run:
# docker compose -f /opt/japan-travel/docker-compose.yml up -d --build
ANTHROPIC_API_KEY=
EOF
    chmod 600 "$APP_DIR/.env.local"
fi

# ── 6. Firewall (UFW) ──────────────────────────────────────────────────────
echo "[6/9] Configuring firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ── 7. Fail2ban ────────────────────────────────────────────────────────────
echo "[7/9] Configuring fail2ban..."
cat > /etc/fail2ban/jail.local <<'EOF'
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true

[nginx-http-auth]
enabled = true

[nginx-limit-req]
enabled  = true
filter   = nginx-limit-req
logpath  = /var/log/nginx/japan-error.log
maxretry = 10
EOF
systemctl enable fail2ban --quiet
systemctl restart fail2ban

# ── 8. Nginx + Certbot ─────────────────────────────────────────────────────
echo "[8/9] Configuring Nginx and SSL..."

mkdir -p /var/www/certbot

# Install Nginx config with domain baked in
sed "s/YOUR_DOMAIN/$DOMAIN/g" "$APP_DIR/nginx/japan.conf" \
    > /etc/nginx/sites-available/japan

rm -f /etc/nginx/sites-enabled/default

# Bootstrap: serve HTTP only so certbot ACME challenge can complete
cat > /etc/nginx/sites-available/japan-bootstrap <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    location /.well-known/acme-challenge/ { root /var/www/certbot; }
    location / { return 200 'ok'; add_header Content-Type text/plain; }
}
EOF
ln -sf /etc/nginx/sites-available/japan-bootstrap /etc/nginx/sites-enabled/japan-bootstrap
rm -f /etc/nginx/sites-enabled/japan
nginx -t && systemctl reload nginx

# Obtain certificate (register-unsafely skips email requirement)
certbot certonly --webroot \
    -w /var/www/certbot \
    -d "$DOMAIN" \
    --register-unsafely-without-email \
    --agree-tos \
    --non-interactive

# Switch to full HTTPS config
rm -f /etc/nginx/sites-enabled/japan-bootstrap
ln -sf /etc/nginx/sites-available/japan /etc/nginx/sites-enabled/japan
nginx -t && systemctl reload nginx

# Auto-renew cron (twice daily)
(crontab -l 2>/dev/null; echo "0 3,15 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -

# ── 9. Build and start Docker ──────────────────────────────────────────────
echo "[9/9] Building and starting app..."
cd "$APP_DIR"
docker compose down --remove-orphans 2>/dev/null || true
docker compose build --no-cache
docker compose up -d
docker image prune -f

# ── Done ───────────────────────────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════════════"
echo "  Setup complete!"
echo ""
echo "  Site : https://$DOMAIN"
echo ""
echo "  !! Add your Anthropic API key then restart:"
echo "     nano $APP_DIR/.env.local"
echo "     docker compose -f $APP_DIR/docker-compose.yml up -d --build"
echo ""
echo "  Logs : docker compose -f $APP_DIR/docker-compose.yml logs -f"
echo ""
echo "  Auto-deploy GitHub secrets:"
echo "    VPS_HOST=$(curl -s ifconfig.me 2>/dev/null || echo '<your-server-ip>')"
echo "    VPS_USER=root"
echo "    VPS_SSH_KEY=<paste contents of ~/.ssh/id_rsa>"
echo "    ANTHROPIC_API_KEY=<your key>"
echo "══════════════════════════════════════════════"
