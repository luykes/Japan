"use client";

import { useEffect, useState } from "react";

const DEPARTURE = new Date("2026-05-18T17:30:00+09:00");

// Verified Unsplash photo IDs — reliable Japan imagery
const HERO_PHOTOS = [
  "1528360983277-13d401cdc186", // Senso-ji temple, Asakusa
  "1478436127897-769e1b3f0f36", // Fushimi Inari torii gates
  "1583416750470-965b2707b531", // Dotonbori Osaka at night
  "1513407030348-c983a97b98d8", // Arashiyama bamboo grove
  "1570459027475-9a3b53c7e26a", // Nara deer
  "1542051841857-5f90071e7fc2", // Shinkansen
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [departed, setDeparted] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = DEPARTURE.getTime() - now.getTime();
      if (diff <= 0) {
        setDeparted(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (departed) {
    return (
      <div className="text-2xl font-bold text-pink-300 animate-pulse">
        Adventure is happening NOW!
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="glass rounded-2xl px-5 py-3 text-center min-w-[80px]">
          <div className="text-3xl font-bold font-display text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-widest text-pink-300 mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}

type PetalData = { left: string; duration: string; delay: string; size: string; symbol: string };

function SakuraPetals() {
  const [petals, setPetals] = useState<PetalData[]>([]);
  const symbols = ["🌸", "🌺", "✿", "❀"];

  useEffect(() => {
    setPetals(
      Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        duration: `${6 + Math.random() * 8}s`,
        delay: `${Math.random() * 10}s`,
        size: `${0.8 + Math.random() * 1.2}rem`,
        symbol: symbols[i % symbols.length],
      }))
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {petals.map((p, i) => (
        <span
          key={i}
          className="sakura-petal select-none"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // Crossfade slideshow every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPhotoIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
        setNextIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
        setFading(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const photoUrl = (id: string) =>
    `https://images.unsplash.com/photo-${id}?w=1920&q=85&fit=crop`;

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {/* Current photo — Ken Burns zoom */}
        <div
          key={photoIdx}
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{ backgroundImage: `url(${photoUrl(HERO_PHOTOS[photoIdx])})` }}
        />
        {/* Next photo fading in */}
        <div
          key={`next-${nextIdx}`}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${photoUrl(HERO_PHOTOS[nextIdx])})`,
            opacity: fading ? 1 : 0,
          }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Japanese stripe pattern overlay */}
      <div className="absolute inset-0 jp-stripe z-10 opacity-30" />

      {/* Sakura petals */}
      <div className="z-20">
        <SakuraPetals />
      </div>

      {/* Content */}
      <div
        className={`relative z-30 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Japanese characters decoration */}
        <div className="text-pink-300/60 text-sm tracking-[0.5em] mb-4 font-light">
          日本 ・ 家族旅行 ・ 2026
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          Our Japan
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-300">
            Adventure
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-3 font-light">
          Family of 4 · 18 May – 3 June 2026 · 17 Days
        </p>

        <p className="text-base text-white/60 mb-10">
          Tokyo → Kyoto → Hiroshima → Osaka
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-4">
            Countdown to departure
          </p>
          <Countdown />
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#itinerary"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:from-pink-400 hover:to-rose-400 transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
          >
            View Itinerary
          </a>
          <a
            href="#budget"
            className="px-8 py-3 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Budget Breakdown
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent z-20" />
    </section>
  );
}
