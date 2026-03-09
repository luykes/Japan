"use client";

import { useEdit } from "@/context/EditContext";
import { foodBucketList } from "@/data/foods";

export default function FoodBucketList() {
  const { bookedItems, toggleBooked } = useEdit();

  const triedCount = foodBucketList.filter((f) => bookedItems.has(f.id)).length;

  return (
    <section id="food-bucket" className="py-20 bg-[#080816]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">The Eat List</p>
          <h2 className="font-display text-4xl text-white mb-2">Food Bucket List 🍜</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">
            Tick them off as you eat them during the trip
          </p>
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
            <p className="text-orange-400 text-sm font-semibold text-center mt-3">
              🏆 Complete foodie! You nailed it!
            </p>
          )}
          {triedCount > 0 && triedCount < foodBucketList.length && (
            <p className="text-white/40 text-xs text-center mt-2">
              {foodBucketList.length - triedCount} still to go — keep eating!
            </p>
          )}
        </div>

        {/* Food grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodBucketList.map((food) => {
            const isTried = bookedItems.has(food.id);
            return (
              <button
                key={food.id}
                onClick={() => toggleBooked(food.id)}
                className={`glass rounded-2xl p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.99] border group ${
                  isTried
                    ? "border-orange-500/30 bg-gradient-to-br from-orange-900/10 to-transparent"
                    : "border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Emoji + check overlay */}
                  <div className="relative flex-shrink-0">
                    <span className={`text-3xl transition-all ${isTried ? "opacity-40" : ""}`}>
                      {food.emoji}
                    </span>
                    {isTried && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-green-400 font-bold text-xl">✓</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-semibold text-sm ${isTried ? "line-through text-white/30" : "text-white"}`}>
                        {food.name}
                      </h3>
                    </div>
                    <p className="text-white/40 text-xs mb-2 leading-relaxed">{food.where}</p>
                    <p className={`text-xs leading-relaxed ${isTried ? "text-white/20" : "text-orange-300/70"}`}>
                      {food.teenNote}
                    </p>
                  </div>
                </div>

                {isTried && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-green-400/60">Tried it! ✓</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Tap a card to mark as tried — syncs across all your devices
        </p>
      </div>
    </section>
  );
}
