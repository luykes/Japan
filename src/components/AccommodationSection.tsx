"use client";

import { useEdit } from "@/context/EditContext";
import { accommodation } from "@/data/accommodation";

const cityAccents: Record<string, string> = {
  Tokyo: "text-red-400 border-red-500/40",
  Kyoto: "text-purple-400 border-purple-500/40",
  Hiroshima: "text-orange-400 border-orange-500/40",
  Osaka: "text-emerald-400 border-emerald-500/40",
};

const cityGradients: Record<string, string> = {
  Tokyo: "from-red-900/20 to-transparent",
  Kyoto: "from-purple-900/20 to-transparent",
  Hiroshima: "from-orange-900/20 to-transparent",
  Osaka: "from-emerald-900/20 to-transparent",
};

export default function AccommodationSection() {
  const { bookedItems, toggleBooked } = useEdit();

  return (
    <section id="accommodation" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Where We Stay</p>
          <h2 className="font-display text-4xl text-white mb-2">Accommodation Strategy</h2>
          <div className="section-divider" />
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Airbnb for longer stays (space + laundry). Hotels for short stops. All near train stations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodation.map((city) => {
            const accent = cityAccents[city.city] ?? "text-pink-400 border-pink-500/40";
            const gradient = cityGradients[city.city] ?? "from-pink-900/20 to-transparent";
            const isBooked = bookedItems.has(city.city);

            return (
              <div
                key={city.city}
                className={`glass rounded-3xl overflow-hidden border ${accent.split(" ")[1]}`}
              >
                {/* City header */}
                <div className={`p-6 bg-gradient-to-br ${gradient}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-display text-2xl font-bold ${accent.split(" ")[0]}`}>
                        {city.city}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="glass-dark rounded-full px-3 py-0.5 text-xs font-semibold text-white">
                          {city.type}
                        </span>
                        <span className="glass-dark rounded-full px-3 py-0.5 text-xs font-semibold text-white/70">
                          {city.nights}n
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="text-xs text-white/80 font-semibold">{city.checkIn}</div>
                        <div className="text-white/30 text-xs">→</div>
                        <div className="text-xs text-white/80 font-semibold">{city.checkOut}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleBooked(city.city)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isBooked
                          ? "bg-green-500 text-white"
                          : "glass text-white/50 hover:text-white"
                      }`}
                    >
                      {isBooked ? "✓ Booked" : "Not Booked"}
                    </button>
                  </div>
                  <p className="text-white/50 text-sm mt-3">{city.reason}</p>
                </div>

                {/* Suburb options */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {city.options.map((opt) => (
                      <a
                        key={opt.suburb}
                        href={opt.searchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-dark rounded-xl p-3 group hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-white text-sm group-hover:text-pink-300 transition-colors">
                            {opt.suburb}
                          </div>
                          <span className="text-white/30 group-hover:text-pink-400 text-xs transition-colors">↗</span>
                        </div>
                        <div className="text-white/40 text-xs mt-0.5">{opt.notes}</div>
                      </a>
                    ))}
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.filters.map((f) => (
                      <span key={f} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Main search CTA */}
                  <a
                    href={city.mainSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      city.type === "Airbnb"
                        ? "bg-[#FF5A5F]/20 border border-[#FF5A5F]/40 text-[#FF5A5F] hover:bg-[#FF5A5F]/30"
                        : "bg-blue-500/20 border border-blue-500/40 text-blue-300 hover:bg-blue-500/30"
                    }`}
                  >
                    <span>{city.type === "Airbnb" ? "🏠" : "🏨"}</span>
                    {city.bookingLabel} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
