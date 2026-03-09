"use client";

import { useState } from "react";
import { tipCategories, ticketSources, youtubeVideos } from "@/data/tips";

function YoutubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 group cursor-pointer"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
        </div>
      </div>
    </button>
  );
}

export default function TipsSection() {
  const [activeCategory, setActiveCategory] = useState("money");

  const active = tipCategories.find((c) => c.id === activeCategory) ?? tipCategories[0];

  return (
    <section id="tips" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Practical Knowledge</p>
          <h2 className="font-display text-4xl text-white mb-2">Tips, Tricks & Deals</h2>
          <div className="section-divider" />
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Everything we wish we knew before the first Japan trip.
          </p>
        </div>

        {/* YouTube videos */}
        <div className="mb-14">
          <h3 className="font-display text-xl text-white mb-5">Watch Before You Go</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {youtubeVideos.map((v) => (
              <div key={v.videoId} className="glass rounded-2xl overflow-hidden">
                <YoutubeEmbed videoId={v.videoId} title={v.title} />
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                      {v.tag}
                    </span>
                  </div>
                  <div className="text-white text-sm font-semibold leading-tight">{v.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{v.channel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips by category */}
        <div className="mb-14">
          <h3 className="font-display text-xl text-white mb-5">Need-to-Know Tips</h3>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tipCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active tips */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{active.icon}</span>
              <h4 className="font-display text-xl text-white">{active.label} Tips</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 glass-dark rounded-xl p-3">
                  <span className="text-pink-400 font-bold text-sm mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/80 text-sm leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cheaper tickets */}
        <div>
          <h3 className="font-display text-xl text-white mb-2">Where to Buy Cheaper</h3>
          <p className="text-white/40 text-sm mb-5">Avoid gate prices — these platforms save real money on tickets and passes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ticketSources.map((src) => (
              <a
                key={src.platform}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{src.logo}</span>
                    <span className="font-bold text-white text-base group-hover:text-pink-300 transition-colors">
                      {src.platform}
                    </span>
                  </div>
                  <span className="text-white/30 group-hover:text-pink-400 transition-colors text-sm">↗</span>
                </div>

                <p className="text-white/50 text-xs leading-relaxed">{src.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {src.bestFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2 border-t border-white/10">
                  <span className="text-xs font-semibold text-green-400">{src.savingsNote}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
