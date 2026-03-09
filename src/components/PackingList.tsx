"use client";

import { useState } from "react";
import { useEdit } from "@/context/EditContext";
import { packingList, type PackingPerson } from "@/data/packing";

const personColors: Record<PackingPerson, string> = {
  All: "bg-white/10 text-white/60",
  Dad: "bg-blue-500/20 text-blue-300",
  Mum: "bg-purple-500/20 text-purple-300",
  Kaylene: "bg-pink-500/20 text-pink-300",
  Kayleb: "bg-emerald-500/20 text-emerald-300",
};

const PEOPLE: PackingPerson[] = ["All", "Dad", "Mum", "Kaylene", "Kayleb"];

export default function PackingList() {
  const { bookedItems, toggleBooked } = useEdit();
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(["docs"]));
  const [filterPerson, setFilterPerson] = useState<PackingPerson | "All">("All");

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allItems = packingList.flatMap((cat) => cat.items);
  const packedCount = allItems.filter((item) => bookedItems.has(item.id)).length;

  return (
    <section id="packing" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Don&apos;t Forget Anything</p>
          <h2 className="font-display text-4xl text-white mb-2">Packing List 🧳</h2>
          <div className="section-divider" />
        </div>

        {/* Progress bar */}
        <div className="glass rounded-2xl p-5 border border-white/5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm">Packed so far</span>
            <span className="text-white font-bold">{packedCount} / {allItems.length} items</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-500"
              style={{ width: `${(packedCount / allItems.length) * 100}%` }}
            />
          </div>
          {packedCount === allItems.length && (
            <p className="text-green-400 text-sm font-semibold text-center mt-3">
              🎉 All packed! Time to go!
            </p>
          )}
        </div>

        {/* Person filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-white/40 text-sm self-center mr-1">Filter:</span>
          {PEOPLE.map((person) => (
            <button
              key={person}
              onClick={() => setFilterPerson(person)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                filterPerson === person
                  ? `${personColors[person as PackingPerson]} border-white/20 scale-105`
                  : "text-white/30 border-white/10 hover:text-white/60 hover:border-white/20"
              }`}
            >
              {person}
            </button>
          ))}
        </div>

        {/* Category accordions */}
        <div className="space-y-3">
          {packingList.map((cat) => {
            const isOpen = openCategories.has(cat.id);
            const catItems =
              filterPerson === "All"
                ? cat.items
                : cat.items.filter((item) => item.person === filterPerson || item.person === "All");

            if (catItems.length === 0) return null;

            const catPacked = catItems.filter((item) => bookedItems.has(item.id)).length;
            const allCatPacked = catPacked === catItems.length;

            return (
              <div
                key={cat.id}
                className={`glass rounded-2xl border transition-all ${
                  allCatPacked ? "border-green-500/20" : "border-white/5"
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.emoji}</span>
                    <span className={`font-display text-lg font-semibold ${allCatPacked ? "text-green-400" : "text-white"}`}>
                      {cat.title}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${allCatPacked ? "bg-green-500/20 text-green-300" : "bg-white/10 text-white/40"}`}>
                      {catPacked}/{catItems.length}
                    </span>
                  </div>
                  <span className={`text-white/40 transition-transform text-lg ${isOpen ? "rotate-180" : ""}`}>▾</span>
                </button>

                {/* Items */}
                {isOpen && (
                  <div className="px-5 pb-5 space-y-2">
                    {catItems.map((item) => {
                      const isPacked = bookedItems.has(item.id);
                      return (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isPacked ? "opacity-50" : "hover:bg-white/3"
                          }`}
                        >
                          {/* Checkbox */}
                          <button
                            onClick={() => toggleBooked(item.id)}
                            className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold transition-all ${
                              isPacked
                                ? "bg-green-500 text-white"
                                : "border border-white/25 hover:border-white/60 text-transparent"
                            }`}
                          >
                            ✓
                          </button>

                          {/* Label */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`text-sm ${isPacked ? "line-through text-white/30" : "text-white/85"}`}>
                                {item.label}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${personColors[item.person]}`}>
                                {item.person}
                              </span>
                            </div>
                            {item.note && (
                              <p className="text-white/35 text-xs mt-0.5">{item.note}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
