"use client";

import { useState } from "react";
import { useEdit } from "@/context/EditContext";
import { foodBucketList, FOOD_CITIES, cityMeta, type FoodCity } from "@/data/foods";

export default function FoodBucketList() {
  const { bookedItems, toggleBooked } = useEdit();
  const [activeCity, setActiveCity] = useState<FoodCity>("All Cities");

  const filtered = activeCity === "All Cities"
    ? foodBucketList
    : foodBucketList.filter((f) => f.city === activeCity || f.city === "All Cities");

  const triedCount = foodBucketList.filter((f) => bookedItems.has(f.id)).length;

  return (
    <section id="food-bucket" className="py-20 bg-[#080816]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">The Eat List</p>
          <h2 className="font-display text-4xl text-white mb-2">Food Bucket List 🍜</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">Tick them off as you eat them</p>
        </div>

        {/* Progress */}
        <div className="glass rounded-2xl p-5 border border-white/5 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm">Foods tried</span>
            <span className="text-white font-bold text-lg">
              {triedCount} <span className="text-white/30 font-normal text-sm">/ {foodBucketList.length}</span>
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${(triedCount / foodBucketList.length) * 100}%` }}
            />
          </div>
          {triedCount === foodBucketList.length && (
            <p className="text-orange-400 text-sm font-semibold text-center mt-3">🏆 Complete foodie! You nailed it!</p>
          )}
          {triedCount > 0 && triedCount < foodBucketList.length && (
            <p className="text-white/40 text-xs text-center mt-2">{foodBucketList.length - triedCount} still to go — keep eating!</p>
          )}
        </div>

        {/* City filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {FOOD_CITIES.map((city) => {
            const m = cityMeta[city];
            const cityItems = city === "All Cities"
              ? foodBucketList
              : foodBucketList.filter((f) => f.city === city || f.city === "All Cities");
            const triedInCity = cityItems.filter((f) => bookedItems.has(f.id)).length;
            return (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border flex items-center gap-1.5 ${
                  activeCity === city
                    ? `${m.color} bg-white/10 border-white/20`
                    : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
                }`}
              >
                <span>{m.emoji}</span>
                <span>{city}</span>
                <span className="text-xs text-white/30">{triedInCity}/{cityItems.length}</span>
              </button>
            );
          })}
        </div>

        {/* Food grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((food) => {
            const isTried = bookedItems.has(food.id);
            const cm = cityMeta[food.city];
            return (
              <button
                key={food.id}
                onClick={() => toggleBooked(food.id)}
                className={`glass rounded-2xl p-4 text-left transition-all hover:scale-[1.01] active:scale-[0.99] border group ${
                  isTried
                    ? "border-orange-500/30 bg-gradient-to-br from-orange-900/10 to-transparent"
                    : "border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Emoji + check */}
                  <div className="relative flex-shrink-0 mt-0.5">
                    <span className={`text-2xl transition-all ${isTried ? "opacity-30" : ""}`}>{food.emoji}</span>
                    {isTried && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-base">✓</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* City badge + title */}
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded-full bg-white/5 ${cm.color}`}>
                        {cm.emoji} {food.city}
                      </span>
                      {isTried && <span className="text-xs text-green-400/70">Tried it ✓</span>}
                    </div>
                    <h3 className={`font-semibold text-sm mb-1 ${isTried ? "line-through text-white/30" : "text-white"}`}>
                      {food.name}
                    </h3>

                    {/* Where */}
                    <p className="text-white/50 text-xs mb-1 leading-relaxed">{food.where}</p>

                    {/* Address */}
                    <p className="text-white/25 text-xs leading-relaxed flex items-start gap-1">
                      <span className="flex-shrink-0">📍</span>
                      <span>{food.address}</span>
                    </p>

                    {/* Teen note */}
                    <p className={`text-xs mt-2 leading-relaxed italic ${isTried ? "text-white/15" : "text-orange-300/60"}`}>
                      {food.teenNote}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Tap a card to mark as tried — syncs across all devices
        </p>
      </div>
    </section>
  );
}
