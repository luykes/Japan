"use client";

import { useState, useEffect, useCallback } from "react";
import type { WishlistItem } from "@/app/api/wishlist/route";

type Kid = "Kaylene" | "Kayleb" | "Marieta";

const KID_META: Record<Kid, { color: string; border: string; bg: string; emoji: string }> = {
  Kaylene: { color: "text-pink-300",   border: "border-pink-500/30",   bg: "from-pink-900/10",   emoji: "🌸" },
  Kayleb:  { color: "text-blue-300",   border: "border-blue-500/30",   bg: "from-blue-900/10",   emoji: "⚡" },
  Marieta: { color: "text-purple-300", border: "border-purple-500/30", bg: "from-purple-900/10", emoji: "🌺" },
};

const KIDS: Kid[] = ["Kaylene", "Kayleb", "Marieta"];

export default function KidsWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [inputs, setInputs] = useState<Record<Kid, string>>({ Kaylene: "", Kayleb: "", Marieta: "" });
  const [saving, setSaving] = useState<Record<Kid, boolean>>({ Kaylene: false, Kayleb: false, Marieta: false });
  const [loading, setLoading] = useState(true);

  const loadItems = useCallback(async () => {
    try {
      const res = await fetch("/api/wishlist");
      if (res.ok) setItems(await res.json());
    } catch { /* silent */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { loadItems(); }, [loadItems]);

  const addItem = async (kid: Kid) => {
    const text = inputs[kid].trim();
    if (!text) return;
    setSaving((p) => ({ ...p, [kid]: true }));
    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kid, text }),
      });
      if (res.ok) {
        const created: WishlistItem = await res.json();
        setItems((prev) => [...prev, created]);
        setInputs((p) => ({ ...p, [kid]: "" }));
      }
    } finally {
      setSaving((p) => ({ ...p, [kid]: false }));
    }
  };

  const deleteItem = async (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    await fetch("/api/wishlist", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <section id="wishlist" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Everyone&apos;s Lists</p>
          <h2 className="font-display text-4xl text-white mb-2">Wishlist 🛍</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">
            Add anything you want to do, see, eat, or buy in Japan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KIDS.map((kid) => {
            const meta = KID_META[kid];
            const kidItems = items.filter((i) => i.kid === kid);

            return (
              <div
                key={kid}
                className={`glass rounded-3xl p-6 border ${meta.border} bg-gradient-to-br ${meta.bg} to-transparent`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl`}>
                    {meta.emoji}
                  </div>
                  <div>
                    <h3 className={`font-display text-xl font-bold ${meta.color}`}>{kid}&apos;s Wishlist</h3>
                    <p className="text-white/30 text-xs">{kidItems.length} item{kidItems.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>

                {/* Add input */}
                <div className="flex gap-2 mb-5">
                  <input
                    value={inputs[kid]}
                    onChange={(e) => setInputs((p) => ({ ...p, [kid]: e.target.value }))}
                    onKeyDown={(e) => e.key === "Enter" && addItem(kid)}
                    placeholder={`Add something for ${kid}…`}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/25 focus:outline-none focus:border-pink-500/40"
                  />
                  <button
                    onClick={() => addItem(kid)}
                    disabled={saving[kid] || !inputs[kid].trim()}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all disabled:opacity-40 ${meta.color} bg-white/10 hover:bg-white/20`}
                  >
                    {saving[kid] ? "…" : "+"}
                  </button>
                </div>

                {/* Items */}
                {loading ? (
                  <p className="text-white/20 text-sm text-center py-4">Loading…</p>
                ) : kidItems.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-white/20 text-sm">Nothing on the list yet!</p>
                    <p className="text-white/15 text-xs mt-1">Add something above ↑</p>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {kidItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 group hover:bg-white/8 transition-all"
                      >
                        <span className={`text-lg flex-shrink-0`}>{meta.emoji}</span>
                        <span className="flex-1 text-white/80 text-sm">{item.text}</span>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="text-white/15 hover:text-red-400 transition-colors text-lg leading-none opacity-0 group-hover:opacity-100"
                          title="Remove"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Wishlist syncs across all devices — add from any browser
        </p>
      </div>
    </section>
  );
}
