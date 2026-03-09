"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        const from = params.get("from") || "/";
        router.push(from);
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Falling sakura */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["🌸","🌸","✿","🌺","🌸"].map((s, i) => (
            <span
              key={i}
              className="sakura-petal"
              style={{
                left: `${15 + i * 18}%`,
                animationDuration: `${8 + i * 2}s`,
                animationDelay: `${i * 1.5}s`,
                fontSize: "1rem",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🇯🇵</div>
          <h1 className="font-display text-3xl font-bold text-white mb-1">Japan 2026</h1>
          <p className="text-white/40 text-sm">Family Adventure Planner</p>
          <div className="section-divider mt-4" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 border border-white/10 space-y-5"
        >
          <div>
            <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-pink-500/50 focus:bg-white/8 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-pink-500/50 focus:bg-white/8 transition-all"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !username || !password}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 disabled:opacity-40 text-white font-semibold rounded-xl transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99]"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-white/20 text-xs mt-6">
          Tokyo · Kyoto · Hiroshima · Osaka · 18 May – 3 Jun 2026
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
