"use client";

import { useState } from "react";
import { phraseCategories } from "@/data/phrases";

export default function PhrasesSection() {
  const [activeTab, setActiveTab] = useState("basics");
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);

  const activeCategory = phraseCategories.find((c) => c.id === activeTab)!;

  const copyPhrase = (japanese: string, idx: string) => {
    navigator.clipboard.writeText(japanese).catch(() => {});
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <section id="phrases" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Speak Like a Local</p>
          <h2 className="font-display text-4xl text-white mb-2">Japanese Phrases 🗣</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">
            Tap any card to copy the Japanese text to your clipboard
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {phraseCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeTab === cat.id
                  ? "bg-pink-500/20 text-pink-300 border-pink-500/30"
                  : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Phrase cards */}
        <div className="space-y-3">
          {activeCategory.phrases.map((phrase, i) => {
            const key = `${activeTab}-${i}`;
            const isCopied = copiedIdx === key;
            return (
              <button
                key={key}
                onClick={() => copyPhrase(phrase.japanese, key)}
                className="w-full glass rounded-2xl p-4 text-left transition-all hover:bg-white/5 active:scale-[0.99] group border border-white/5 hover:border-white/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Japanese */}
                    <div className="text-xl text-white font-medium mb-1 tracking-wide">
                      {phrase.japanese}
                    </div>
                    {/* Romaji */}
                    <div className="text-pink-300/80 text-sm font-medium mb-0.5">
                      {phrase.romaji}
                    </div>
                    {/* English */}
                    <div className="text-white/50 text-sm">
                      {phrase.english}
                    </div>
                    {/* Tip */}
                    {phrase.tip && (
                      <div className="mt-2 text-xs text-white/30 italic border-l-2 border-pink-500/30 pl-2">
                        {phrase.tip}
                      </div>
                    )}
                  </div>

                  {/* Copy indicator */}
                  <div className={`flex-shrink-0 text-xs px-2 py-1 rounded-full transition-all ${
                    isCopied
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-white/20 opacity-0 group-hover:opacity-100"
                  }`}>
                    {isCopied ? "Copied!" : "Copy"}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Emergency note */}
        {activeTab === "emergency" && (
          <div className="mt-6 glass rounded-2xl p-5 border border-red-500/20 bg-gradient-to-br from-red-900/10 to-transparent">
            <p className="text-red-300 font-semibold text-sm mb-2">🆘 Japan Emergency Numbers</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-white/40 text-xs">Ambulance / Fire:</span>
                <div className="text-white font-bold text-lg">119</div>
              </div>
              <div>
                <span className="text-white/40 text-xs">Police:</span>
                <div className="text-white font-bold text-lg">110</div>
              </div>
              <div>
                <span className="text-white/40 text-xs">Australian Embassy (Tokyo):</span>
                <div className="text-white font-mono text-sm">+81-3-5232-4111</div>
              </div>
              <div>
                <span className="text-white/40 text-xs">Police (English help):</span>
                <div className="text-white font-mono text-sm">#9110</div>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-white/20 text-xs mt-8">
          Show the Japanese text on your phone — locals appreciate the effort even if your pronunciation is off
        </p>
      </div>
    </section>
  );
}
