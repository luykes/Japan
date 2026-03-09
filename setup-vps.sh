#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Japan Travel — VPS Setup Script
# Run as root on a fresh Ubuntu 22.04 / 24.04 server
# Usage: bash setup-vps.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

DOMAIN="japan-luyke.duckdns.org"
APP_DIR="/opt/japan-travel"

echo ""
echo "══════════════════════════════════════════════"
echo "  Japan Travel — VPS Setup"
echo "  Domain : $DOMAIN"
echo "══════════════════════════════════════════════"
echo ""

# ── 1. System updates ──────────────────────────────────────────────────────
echo "[1/8] Updating system..."
apt-get update -qq && apt-get upgrade -y -qq

# ── 2. Essential packages ──────────────────────────────────────────────────
echo "[2/8] Installing packages..."
apt-get install -y -qq \
    curl git ufw fail2ban \
    nginx certbot python3-certbot-nginx \
    unattended-upgrades

# ── 3. Docker ──────────────────────────────────────────────────────────────
echo "[3/8] Installing Docker..."
if ! command -v docker &>/dev/null; then
    curl -fsSL https://get.docker.com | sh
fi

# ── 4. Clone repo ──────────────────────────────────────────────────────────
echo "[4/8] Cloning repo..."
git config --global --add safe.directory "$APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
    git -C "$APP_DIR" fetch origin
    git -C "$APP_DIR" reset --hard origin/main
else
    git clone https://github.com/luykes/Japan "$APP_DIR"
fi
chmod -R 755 "$APP_DIR"

# Write env file placeholder
if [ ! -f "$APP_DIR/.env.local" ]; then
    cat > "$APP_DIR/.env.local" <<'EOF'
ANTHROPIC_API_KEY=
EOF
    chmod 600 "$APP_DIR/.env.local"
fi

# ── 5. Firewall ────────────────────────────────────────────────────────────
echo "[5/8] Configuring firewall..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ── 6. Fail2ban ────────────────────────────────────────────────────────────
echo "[6/8] Configuring fail2ban..."
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

# ── 7. Nginx + SSL ─────────────────────────────────────────────────────────
echo "[7/8] Configuring Nginx and SSL..."

mkdir -p /var/www/certbot
rm -f /etc/nginx/sites-enabled/default

# Step 1: Bootstrap HTTP-only config so certbot ACME challenge works
cat > /etc/nginx/sites-available/japan <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;
    location /.well-known/acme-challenge/ { root /var/www/certbot; }
    location / { return 200 'setting up...'; add_header Content-Type text/plain; }
}
EOF
ln -sf /etc/nginx/sites-available/japan /etc/nginx/sites-enabled/japan
nginx -t && systemctl reload nginx

# Step 2: Obtain SSL certificate
certbot certonly --webroot \
    -w /var/www/certbot \
    -d "$DOMAIN" \
    --register-unsafely-without-email \
    --agree-tos \
    --non-interactive

# Step 3: Download certbot helper files that are required by nginx ssl config
if [ ! -f /etc/letsencrypt/options-ssl-nginx.conf ]; then
    curl -fsSL https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf \
        -o /etc/letsencrypt/options-ssl-nginx.conf
fi
if [ ! -f /etc/letsencrypt/ssl-dhparams.pem ]; then
    curl -fsSL https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem \
        -o /etc/letsencrypt/ssl-dhparams.pem
fi

# Step 4: Switch to full HTTPS config
cp "$APP_DIR/nginx/japan.conf" /etc/nginx/sites-available/japan
nginx -t && systemctl reload nginx

# Auto-renew cron (twice daily)
(crontab -l 2>/dev/null | grep -v certbot; echo "0 3,15 * * * certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -

# ── 8. Build and start Docker ──────────────────────────────────────────────
echo "[8/8] Building and starting app..."
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
echo "     docker compose -f $APP_DIR/docker-compose.yml up -d"
echo ""
echo "  Logs : docker compose -f $APP_DIR/docker-compose.yml logs -f"
echo ""
echo "  GitHub Actions secrets to add:"
echo "    VPS_HOST=$(curl -s ifconfig.me 2>/dev/null || echo '<your-server-ip>')"
echo "    VPS_USER=root"
echo "    VPS_SSH_KEY=<contents of ~/.ssh/id_rsa>"
echo "    ANTHROPIC_API_KEY=<your key>"
echo "══════════════════════════════════════════════"
