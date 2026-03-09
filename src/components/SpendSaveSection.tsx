import { spendOn, saveOn } from "@/data/transport";

export default function SpendSaveSection() {
  return (
    <section id="spend-save" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Money Strategy</p>
          <h2 className="font-display text-4xl text-white mb-2">Spend vs Save</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spend */}
          <div className="glass rounded-3xl p-8 border border-green-500/20 bg-gradient-to-br from-green-900/10 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-xl">💚</div>
              <h3 className="font-display text-2xl font-bold text-green-400">Spend On</h3>
            </div>
            <ul className="space-y-3">
              {spendOn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Save */}
          <div className="glass rounded-3xl p-8 border border-red-500/20 bg-gradient-to-br from-red-900/10 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-xl">⛔</div>
              <h3 className="font-display text-2xl font-bold text-red-400">Save On</h3>
            </div>
            <ul className="space-y-3">
              {saveOn.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Philosophy note */}
        <div className="mt-8 glass rounded-2xl p-6 text-center border border-pink-500/20">
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Japan is actually affordable if you follow the locals. Street food, trains, and free temples beat packaged tours every time.
            The money you save on tourist traps pays for better Airbnbs and memorable dinners.
          </p>
        </div>
      </div>
    </section>
  );
}
