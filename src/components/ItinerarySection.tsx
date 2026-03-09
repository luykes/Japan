"use client";

import { useState } from "react";
import DayCard from "./DayCard";
import { itinerary, cities, cityDays, cityColors, cityNights } from "@/data/itinerary";

// Verified Unsplash photo IDs per city
const cityPhotos: Record<string, string> = {
  Tokyo: "1540959733332-eab4deabeeaf",      // Tokyo skyline at night
  Kyoto: "1478436127897-769e1b3f0f36",       // Fushimi Inari torii gates
  Hiroshima: "1598132787779-f1a4b611eeae",   // Hiroshima Peace Park
  Osaka: "1583416750470-965b2707b531",        // Dotonbori Osaka
};
import type { City } from "@/data/itinerary";

const cityEmojis: Record<City, string> = {
  Tokyo: "🗼",
  Kyoto: "⛩️",
  Hiroshima: "🕊️",
  Osaka: "🏯",
};

const cityDescriptions: Record<City, string> = {
  Tokyo: "Mega-city energy, arcades, temples, and the world's best convenience stores.",
  Kyoto: "Ancient Japan — temples, bamboo, deer parks, and quiet backstreets.",
  Hiroshima: "History, peace, and Miyajima's floating torii gate.",
  Osaka: "Japan's food capital. Eat everything. Regret nothing.",
};

export default function ItinerarySection() {
  const [activeCity, setActiveCity] = useState<City>("Tokyo");

  const days = cityDays[activeCity].map((d) => itinerary[d - 1]);
  const transitDays = itinerary.filter((d) => d.city === "Transit");

  return (
    <section id="itinerary" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Day by Day</p>
          <h2 className="font-display text-4xl text-white mb-2">17-Day Itinerary</h2>
          <div className="section-divider" />
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Every day has an A plan, B plan, and a low-cost fallback. Flexible by design.
          </p>
        </div>

        {/* City tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeCity === city
                  ? `bg-gradient-to-r ${cityColors[city]} text-white shadow-lg scale-105`
                  : "glass text-white/60 hover:text-white"
              }`}
            >
              <span>{cityEmojis[city]}</span>
              {city}
              <span className="text-xs opacity-70">{cityNights[city]}n</span>
            </button>
          ))}
        </div>

        {/* City hero banner */}
        <div className={`relative rounded-3xl overflow-hidden mb-8 h-48 bg-gradient-to-r ${cityColors[activeCity]}`}>
          <img
            key={activeCity}
            src={`https://images.unsplash.com/photo-${cityPhotos[activeCity]}?w=1200&q=80&fit=crop`}
            alt={activeCity}
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <div className="text-4xl mb-2">{cityEmojis[activeCity]}</div>
            <h3 className="font-display text-3xl font-bold text-white">{activeCity}</h3>
            <p className="text-white/70 text-sm">{cityDescriptions[activeCity]}</p>
          </div>
        </div>

        {/* Day cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {days.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>

        {/* Transit days */}
        <div className="mt-12">
          <h3 className="font-display text-xl text-white/50 mb-4 text-center">Travel Days</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {transitDays.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
