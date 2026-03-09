"use client";

import { useState } from "react";
import { cityBudgets, overallCategories, japanPrices, optionalUpgrades, budgetTraps, EXCHANGE_RATE } from "@/data/budget";

type Currency = "AUD" | "JPY";

function fmt(val: number, currency: Currency) {
  if (currency === "AUD") return `$${val.toLocaleString()}`;
  return `¥${Math.round(val * EXCHANGE_RATE).toLocaleString()}`;
}

const cityColors: Record<string, string> = {
  Tokyo: "from-red-900/50 to-red-800/30 border-red-500/30",
  Kyoto: "from-purple-900/50 to-purple-800/30 border-purple-500/30",
  Hiroshima: "from-orange-900/50 to-orange-800/30 border-orange-500/30",
  Osaka: "from-emerald-900/50 to-emerald-800/30 border-emerald-500/30",
};

const cityAccents: Record<string, string> = {
  Tokyo: "text-red-400",
  Kyoto: "text-purple-400",
  Hiroshima: "text-orange-400",
  Osaka: "text-emerald-400",
};

export default function BudgetDashboard() {
  const [currency, setCurrency] = useState<Currency>("AUD");

  return (
    <section id="budget" className="py-20 bg-[#080816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Money Talk</p>
          <h2 className="font-display text-4xl text-white mb-2">Budget Breakdown</h2>
          <div className="section-divider" />
          <p className="text-white/50 mt-4">Family of 4 · Exchange rate: A$1 ≈ ¥{EXCHANGE_RATE}</p>
        </div>

        {/* Currency toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1 flex gap-1">
            {(["AUD", "JPY"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  currency === c
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {c === "AUD" ? "🇦🇺 AUD" : "🇯🇵 JPY"}
              </button>
            ))}
          </div>
        </div>

        {/* Total range */}
        <div className="glass rounded-3xl p-8 mb-8 text-center bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-3">Expected Total (on-ground)</p>
          <div className="font-display text-5xl font-bold text-white mb-2">
            {fmt(6500, currency)} – {fmt(7500, currency)}
          </div>
          <p className="text-white/50">Most likely spend for the whole trip</p>
          <div className="flex gap-4 justify-center mt-4 flex-wrap">
            <div className="glass rounded-xl px-5 py-3">
              <div className="text-sm text-white/50">Low budget</div>
              <div className="font-bold text-green-400">{fmt(5450, currency)}</div>
            </div>
            <div className="glass rounded-xl px-5 py-3">
              <div className="text-sm text-white/50">Comfortable</div>
              <div className="font-bold text-yellow-400">{fmt(9150, currency)}</div>
            </div>
          </div>
        </div>

        {/* Overall breakdown */}
        <div className="glass rounded-3xl p-6 mb-8">
          <h3 className="font-display text-xl text-white mb-4">Total by Category</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white/40 border-b border-white/10">
                  <th className="text-left py-2 font-medium">Category</th>
                  <th className="text-right py-2 font-medium">Low</th>
                  <th className="text-right py-2 font-medium">Comfortable</th>
                </tr>
              </thead>
              <tbody>
                {overallCategories.map((row) => (
                  <tr key={row.category} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 text-white/80">{row.category}</td>
                    <td className="py-3 text-right text-green-400 font-mono">{fmt(row.low, currency)}</td>
                    <td className="py-3 text-right text-yellow-400 font-mono">{fmt(row.comfortable, currency)}</td>
                  </tr>
                ))}
                <tr className="bg-white/5">
                  <td className="py-3 font-bold text-white">TOTAL</td>
                  <td className="py-3 text-right font-bold text-green-400 font-mono">{fmt(5450, currency)}</td>
                  <td className="py-3 text-right font-bold text-yellow-400 font-mono">{fmt(9150, currency)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Per-city cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {cityBudgets.map((cb) => {
            const total = { low: cb.rows.reduce((s, r) => s + r.low, 0), comfortable: cb.rows.reduce((s, r) => s + r.comfortable, 0) };
            return (
              <div
                key={cb.city}
                className={`rounded-2xl border p-5 bg-gradient-to-br ${cityColors[cb.city]}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`font-display text-xl font-bold ${cityAccents[cb.city]}`}>{cb.city}</h3>
                    <p className="text-white/40 text-sm">{cb.nights} nights</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{fmt(total.low, currency)}–{fmt(total.comfortable, currency)}</div>
                    <div className="text-white/40 text-xs">total range</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {cb.rows.map((row) => (
                    <div key={row.category} className="flex justify-between items-center text-sm">
                      <span className="text-white/60">{row.category}</span>
                      <span className="text-white/80 font-mono">
                        {fmt(row.low, currency)}–{fmt(row.comfortable, currency)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Three info columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Japan prices */}
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>🍜</span> Typical Japan Prices
            </h3>
            {japanPrices.map((p) => (
              <div key={p.item} className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-white/60">{p.item}</span>
                <span className="text-green-400">{p.price}</span>
              </div>
            ))}
          </div>

          {/* Optional upgrades */}
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>⭐</span> Optional Upgrades
            </h3>
            {optionalUpgrades.map((u) => (
              <div key={u.item} className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-white/60">{u.item}</span>
                <span className="text-yellow-400">{u.price}</span>
              </div>
            ))}
          </div>

          {/* Budget traps */}
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>⚠️</span> Budget Traps
            </h3>
            {budgetTraps.map((t) => (
              <div key={t.trap} className="flex justify-between text-sm py-2 border-b border-white/5">
                <span className="text-white/60">{t.trap}</span>
                <span className="text-red-400">{t.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
