"use client";

import { useEffect, useState } from "react";

const DEPARTURE = new Date("2026-05-18T17:30:00+09:00");

export default function StickyCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [departed, setDeparted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = DEPARTURE.getTime() - Date.now();
      if (diff <= 0) { setDeparted(true); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/90 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-pink-300 text-xs uppercase tracking-widest font-semibold hidden sm:block">
            ✈ Japan Countdown
          </span>
          <span className="text-pink-300 text-xs sm:hidden">✈</span>
        </div>

        {departed ? (
          <div className="text-pink-300 font-bold text-sm animate-pulse flex-1 text-center">
            🎉 Adventure is happening NOW! Have the best trip!
          </div>
        ) : (
          <div className="flex items-center gap-1 sm:gap-3 flex-1 justify-center">
            {[
              { label: "D", fullLabel: "Days", value: timeLeft.days },
              { label: "H", fullLabel: "Hours", value: timeLeft.hours },
              { label: "M", fullLabel: "Mins", value: timeLeft.minutes },
              { label: "S", fullLabel: "Secs", value: timeLeft.seconds },
            ].map(({ label, fullLabel, value }, i) => (
              <div key={label} className="flex items-center gap-1 sm:gap-3">
                {i > 0 && <span className="text-white/20 font-bold">:</span>}
                <div className="text-center">
                  <span className="text-white font-bold tabular-nums text-sm sm:text-base">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-white/30 text-xs ml-1 hidden sm:inline">{fullLabel}</span>
                  <span className="text-white/30 text-xs ml-0.5 sm:hidden">{label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-white/30 text-xs hidden sm:block whitespace-nowrap">
          18 May 2026
        </div>
      </div>
    </div>
  );
}
