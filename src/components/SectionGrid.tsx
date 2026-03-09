import Link from "next/link";

const SECTIONS = [
  {
    href: "/route",
    emoji: "🗺",
    label: "Route Overview",
    desc: "Tokyo → Kyoto → Hiroshima → Osaka",
    color: "from-sky-900/20 border-sky-500/20 hover:border-sky-400/40",
    tag: "6 stops · 17 days",
  },
  {
    href: "/itinerary",
    emoji: "📅",
    label: "Itinerary",
    desc: "Day-by-day plans with A/B/C options",
    color: "from-pink-900/20 border-pink-500/20 hover:border-pink-400/40",
    tag: "17 days planned",
  },
  {
    href: "/budget",
    emoji: "💴",
    label: "Budget",
    desc: "Per-city costs in JPY & AUD",
    color: "from-yellow-900/20 border-yellow-500/20 hover:border-yellow-400/40",
    tag: "¥715k–¥825k est.",
  },
  {
    href: "/bookings",
    emoji: "✅",
    label: "Bookings Registry",
    desc: "Track every confirmed booking",
    color: "from-green-900/20 border-green-500/20 hover:border-green-400/40",
    tag: "Flights · Stays · Transport",
  },
  {
    href: "/accommodation",
    emoji: "🏨",
    label: "Accommodation",
    desc: "Suburb shortlists + booking status",
    color: "from-purple-900/20 border-purple-500/20 hover:border-purple-400/40",
    tag: "4 cities",
  },
  {
    href: "/transport",
    emoji: "🚄",
    label: "Transport",
    desc: "JR Pass, intercity legs & prebook checklist",
    color: "from-orange-900/20 border-orange-500/20 hover:border-orange-400/40",
    tag: "Shinkansen + local",
  },
  {
    href: "/wishlist",
    emoji: "🛍",
    label: "Kids Wishlist",
    desc: "Kaylene & Kayleb's want lists",
    color: "from-rose-900/20 border-rose-500/20 hover:border-rose-400/40",
    tag: "Kaylene · Kayleb",
  },
  {
    href: "/packing",
    emoji: "🧳",
    label: "Packing List",
    desc: "Family packing checklist with assignments",
    color: "from-indigo-900/20 border-indigo-500/20 hover:border-indigo-400/40",
    tag: "50 items · 5 categories",
  },
  {
    href: "/food",
    emoji: "🍜",
    label: "Food Bucket List",
    desc: "Must-eat foods by city with addresses",
    color: "from-amber-900/20 border-amber-500/20 hover:border-amber-400/40",
    tag: "25 foods · 4 cities",
  },
  {
    href: "/tips",
    emoji: "💡",
    label: "Tips & Videos",
    desc: "Money, packing, food & culture tips",
    color: "from-teal-900/20 border-teal-500/20 hover:border-teal-400/40",
    tag: "5 categories",
  },
  {
    href: "/phrases",
    emoji: "🗣",
    label: "Japanese Phrases",
    desc: "Tap to copy key phrases for Japan",
    color: "from-cyan-900/20 border-cyan-500/20 hover:border-cyan-400/40",
    tag: "50+ phrases · 5 tabs",
  },
  {
    href: "/spend-save",
    emoji: "💡",
    label: "Spend vs Save",
    desc: "Where to splash out and where to cut back",
    color: "from-emerald-900/20 border-emerald-500/20 hover:border-emerald-400/40",
    tag: "Money strategy",
  },
];

export default function SectionGrid() {
  return (
    <section className="py-20 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Everything in one place</p>
          <h2 className="font-display text-4xl text-white mb-2">Trip Planner</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`glass rounded-2xl p-6 border bg-gradient-to-br ${s.color} to-transparent transition-all hover:scale-[1.02] hover:-translate-y-0.5 group`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform">{s.emoji}</span>
                <span className="text-white/30 text-xs px-2 py-1 rounded-full bg-white/5 border border-white/8">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-pink-100 transition-colors">
                {s.label}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-pink-400/50 group-hover:text-pink-300 transition-colors text-xs font-medium">
                Open <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
