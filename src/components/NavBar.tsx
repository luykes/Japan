"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DEPARTURE = new Date("2026-05-18T17:30:00+09:00");
const RETURN    = new Date("2026-06-03T23:59:00+09:00");

const NAV_LINKS = [
  { label: "Route",      href: "/route",        emoji: "🗺" },
  { label: "Itinerary",  href: "/itinerary",    emoji: "📅" },
  { label: "Budget",     href: "/budget",       emoji: "💴" },
  { label: "Bookings",   href: "/bookings",     emoji: "✅" },
  { label: "Stays",      href: "/accommodation",emoji: "🏨" },
  { label: "Transport",  href: "/transport",    emoji: "🚄" },
  { label: "Wishlist",   href: "/wishlist",     emoji: "🛍" },
  { label: "Packing",    href: "/packing",      emoji: "🧳" },
  { label: "Food",       href: "/food",         emoji: "🍜" },
  { label: "Tips",       href: "/tips",         emoji: "💡" },
  { label: "Phrases",    href: "/phrases",      emoji: "🗣" },
];

type CountdownState =
  | { phase: "before"; days: number; hours: number; minutes: number; seconds: number }
  | { phase: "during"; day: number }
  | { phase: "after" };

function getCountdown(): CountdownState {
  const now = Date.now();
  const diff = DEPARTURE.getTime() - now;
  if (diff > 0) {
    return {
      phase: "before",
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }
  if (now <= RETURN.getTime()) {
    return { phase: "during", day: Math.floor((now - DEPARTURE.getTime()) / 86400000) + 1 };
  }
  return { phase: "after" };
}

export default function NavBar({ onLogout }: { onLogout?: () => void }) {
  const pathname = usePathname();
  const [countdown, setCountdown] = useState<CountdownState>({ phase: "after" });
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCountdown(getCountdown());
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07071a]/95 backdrop-blur-xl shadow-lg shadow-black/30" : "bg-[#0a0a1a]/80 backdrop-blur-md"
      } border-b border-white/8`}>
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-3">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <span className="text-xl group-hover:scale-110 transition-transform">🇯🇵</span>
            <div className="hidden sm:block leading-tight">
              <div className="text-white font-bold text-sm tracking-tight">Japan 2026</div>
              <div className="text-white/30 text-[10px] tracking-widest uppercase">Family Adventure</div>
            </div>
          </Link>

          {/* Countdown */}
          <div className="flex-1 flex justify-center">
            {!mounted ? null : countdown.phase === "before" ? (
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-pink-300/50 text-[10px] uppercase tracking-wider hidden md:block mr-1">✈ departs</span>
                {([
                  { v: countdown.days, u: "D" },
                  { v: countdown.hours, u: "H" },
                  { v: countdown.minutes, u: "M" },
                  { v: countdown.seconds, u: "S" },
                ] as { v: number; u: string }[]).map(({ v, u }, i) => (
                  <div key={u} className="flex items-center gap-1 sm:gap-2">
                    {i > 0 && <span className="text-pink-500/30 font-bold text-xs">:</span>}
                    <div className="bg-white/6 border border-white/10 rounded-lg px-1.5 sm:px-2 py-1 text-center min-w-[32px] sm:min-w-[40px]">
                      <div className="text-white font-bold tabular-nums text-sm sm:text-base leading-none">{String(v).padStart(2, "0")}</div>
                      <div className="text-pink-300/50 text-[9px] uppercase tracking-wider leading-none mt-0.5">{u}</div>
                    </div>
                  </div>
                ))}
                <span className="text-pink-300/50 text-[10px] uppercase tracking-wider hidden md:block ml-1">to go</span>
              </div>
            ) : countdown.phase === "during" ? (
              <div className="flex items-center gap-2">
                <span className="text-pink-300 animate-pulse text-sm">✈</span>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Trip Active!</div>
                  <div className="text-pink-300/60 text-[10px] uppercase tracking-wider">Day {countdown.day} of 17</div>
                </div>
                <span className="text-pink-300 animate-pulse text-sm">✈</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm">✓</span>
                <div className="text-center">
                  <div className="text-white/70 font-semibold text-xs sm:text-sm">Japan 2026 Complete</div>
                  <div className="text-white/30 text-[10px] tracking-wider">18 May – 3 Jun 2026</div>
                </div>
                <span className="text-green-400 text-sm">✓</span>
              </div>
            )}
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-shrink-0">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                    isActive ? "bg-pink-500/20 text-pink-300" : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span className="text-sm">{link.emoji}</span>
                  <span className="hidden xl:inline">{link.label}</span>
                </Link>
              );
            })}
            {onLogout && (
              <button onClick={onLogout} title="Sign out"
                className="ml-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all">
                ⏏
              </button>
            )}
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex-shrink-0 w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
            aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white/70 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-white/8 ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#07071a]/98 backdrop-blur-xl`}>
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl text-center transition-all border ${
                    isActive ? "bg-pink-500/20 border-pink-500/30" : "hover:bg-white/5 border-transparent"
                  }`}
                >
                  <span className="text-xl">{link.emoji}</span>
                  <span className={`text-xs font-medium ${isActive ? "text-pink-300" : "text-white/60"}`}>{link.label}</span>
                </Link>
              );
            })}
          </div>
          {onLogout && (
            <div className="px-4 pb-3">
              <button onClick={onLogout}
                className="w-full py-2 text-sm text-red-400/70 hover:text-red-400 border border-red-500/20 hover:border-red-500/40 rounded-xl transition-all">
                Sign out
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="h-14" />
    </>
  );
}
