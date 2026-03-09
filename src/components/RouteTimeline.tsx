"use client";

const stops = [
  { label: "Narita", sub: "Arrive 18 May", icon: "✈️", href: null },
  { label: "Tokyo", sub: "6 nights · 18–24 May", icon: "🗼", href: "#tokyo", color: "from-red-500 to-red-700" },
  { label: "Kyoto", sub: "5 nights · 24–29 May", icon: "⛩️", href: "#kyoto", color: "from-purple-500 to-purple-700" },
  { label: "Hiroshima", sub: "2 nights · 29–31 May", icon: "🕊️", href: "#hiroshima", color: "from-orange-500 to-orange-700" },
  { label: "Osaka", sub: "3 nights · 31 May–3 Jun", icon: "🏯", href: "#osaka", color: "from-emerald-500 to-emerald-700" },
  { label: "Kansai", sub: "Depart 3 Jun", icon: "✈️", href: null },
];

export default function RouteTimeline() {
  return (
    <section className="py-16 px-6 bg-[#0a0a1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">The Route</p>
          <h2 className="font-display text-4xl text-white mb-2">Our Journey</h2>
          <div className="section-divider" />
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 via-orange-500 to-emerald-500 opacity-40" />

          {stops.map((stop, i) => (
            <div key={i} className="flex flex-col items-center z-10 flex-1">
              {stop.href ? (
                <a href={stop.href} className="group flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${stop.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {stop.icon}
                  </div>
                  <div className="mt-3 text-white font-semibold group-hover:text-pink-300 transition-colors">
                    {stop.label}
                  </div>
                  <div className="text-xs text-white/50 text-center mt-1 max-w-[100px]">{stop.sub}</div>
                </a>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl">
                    {stop.icon}
                  </div>
                  <div className="mt-3 text-white/60 font-medium">{stop.label}</div>
                  <div className="text-xs text-white/40 text-center mt-1 max-w-[100px]">{stop.sub}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {stops.map((stop, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                    stop.href
                      ? `bg-gradient-to-br ${stop.color} shadow-lg`
                      : "glass"
                  }`}
                >
                  {stop.icon}
                </div>
                {i < stops.length - 1 && (
                  <div className="w-0.5 h-8 bg-white/20 my-1" />
                )}
              </div>
              <div className="pt-2">
                {stop.href ? (
                  <a href={stop.href} className="font-semibold text-white hover:text-pink-300 transition-colors">
                    {stop.label}
                  </a>
                ) : (
                  <span className="font-medium text-white/60">{stop.label}</span>
                )}
                <p className="text-sm text-white/50">{stop.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Days", value: "17", sub: "18 May – 3 Jun" },
            { label: "Cities", value: "4", sub: "+ Nara day trip" },
            { label: "Budget", value: "$6.5k–$7.5k", sub: "AUD most likely" },
            { label: "Family", value: "4", sub: "2 adults + 2 kids" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-pink-300 text-sm font-medium">{label}</div>
              <div className="text-white/40 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
