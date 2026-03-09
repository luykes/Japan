"use client";

import { useState } from "react";
import { useEdit } from "@/context/EditContext";
import type { Day } from "@/data/itinerary";
import { cityAccentColors } from "@/data/itinerary";

type Props = { day: Day };

const unsplashBase = "https://images.unsplash.com/photo-";
const dayImages: Record<number, string> = {
  1: "1540959733332-eab4deabeeaf?w=800&q=80",
  2: "1528360983277-13d401cdc186?w=800&q=80",
  3: "1493997181344-712f2f19d87a?w=800&q=80",
  4: "1540959733332-eab4deabeeaf?w=800&q=80",
  5: "1519682337058-a94d519337bc?w=800&q=80",
  6: "1536098561742-ca998e48cbcc?w=800&q=80",
  7: "1542051841857-5f90071e7fc2?w=800&q=80",
  8: "1478436127897-769e1b3f0f36?w=800&q=80",
  9: "1493976040374-85c8e12f0c0e?w=800&q=80",
  10: "1570459027475-9a3b53c7e26a?w=800&q=80",
  11: "1513407030348-c983a97b98d8?w=800&q=80",
  12: "1598132787779-f1a4b611eeae?w=800&q=80",
  13: "1573383579-15de68a2f9c1?w=800&q=80",
  14: "1583416750470-965b2707b531?w=800&q=80",
  15: "1590559899731-a382839e5549?w=800&q=80",
  16: "1553361371-9b22f78e8b1d?w=800&q=80",
  17: "1436491865332-7a61a109cc05?w=800&q=80",
};

const dailyCosts: Record<number, string> = {
  1: "~¥2,000", 2: "~¥3,000", 3: "~¥2,500", 4: "~¥4,000",
  5: "~¥5,000+", 6: "~¥3,500", 7: "~¥3,000", 8: "~¥2,000",
  9: "~¥3,500", 10: "~¥4,000", 11: "~¥3,000", 12: "~¥2,500",
  13: "~¥3,000", 14: "~¥4,500", 15: "~¥5,000", 16: "~¥8,000+",
  17: "~¥2,000",
};

const dayMapQueries: Record<number, string> = {
  1: "Narita Airport Japan",
  2: "Senso-ji Temple Asakusa Tokyo",
  3: "Ueno Park Tokyo Japan",
  4: "Shibuya Crossing Tokyo",
  5: "Akihabara Electric Town Tokyo",
  6: "Shimokitazawa Tokyo Japan",
  7: "Kyoto Station Japan",
  8: "Fushimi Inari Shrine Kyoto",
  9: "Higashiyama District Kyoto",
  10: "Nara Deer Park Japan",
  11: "Arashiyama Bamboo Grove Kyoto",
  12: "Hiroshima Peace Memorial Park",
  13: "Miyajima Island Itsukushima Shrine",
  14: "Dotonbori Osaka Japan",
  15: "Namba Osaka Japan",
  16: "Universal Studios Japan Osaka",
  17: "Kansai International Airport",
};

function activityEmoji(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("temple") || t.includes("shrine") || t.includes("jingu") || t.includes("senso") || t.includes("inari")) return "⛩️";
  if (t.includes("ramen") || t.includes("sushi") || t.includes("food") || t.includes("dinner") || t.includes("lunch") || t.includes("eat") || t.includes("konbini") || t.includes("snack") || t.includes("café") || t.includes("cafe")) return "🍜";
  if (t.includes("shinkansen") || t.includes("train") || t.includes("bus") || t.includes("airport") || t.includes("narita") || t.includes("kansai") || t.includes("land")) return "🚄";
  if (t.includes("ferry") || t.includes("boat") || t.includes("miyajima")) return "⛴️";
  if (t.includes("arcade") || t.includes("game") || t.includes("akihabara") || t.includes("usj") || t.includes("universal")) return "🎮";
  if (t.includes("shop") || t.includes("market") || t.includes("harajuku") || t.includes("takeshita") || t.includes("figure")) return "🛍️";
  if (t.includes("park") || t.includes("garden") || t.includes("bamboo") || t.includes("arashiyama") || t.includes("nara") || t.includes("deer") || t.includes("yoyogi")) return "🌿";
  if (t.includes("museum") || t.includes("peace") || t.includes("memorial") || t.includes("history")) return "🏛️";
  if (t.includes("view") || t.includes("skyline") || t.includes("tower") || t.includes("deck") || t.includes("skytree")) return "🌆";
  if (t.includes("onsen") || t.includes("bath") || t.includes("sento")) return "♨️";
  if (t.includes("walk") || t.includes("stroll") || t.includes("wander") || t.includes("street") || t.includes("backstreet")) return "🚶";
  if (t.includes("check") || t.includes("airbnb") || t.includes("hotel") || t.includes("rest") || t.includes("sleep")) return "🏠";
  return "📍";
}

export default function DayCard({ day }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [activePlan, setActivePlan] = useState<"a" | "b" | "c">("a");
  const { isEditMode, edits, setEdit, checkedDays, toggleDayChecked } = useEdit();
  const accentColor = day.city !== "Transit" ? cityAccentColors[day.city as keyof typeof cityAccentColors] : "text-blue-400";
  const isChecked = checkedDays.has(day.day);
  const imgUrl = `${unsplashBase}${dayImages[day.day] ?? dayImages[1]}`;

  const editKey = (suffix: string) => `day-${day.day}-${suffix}`;
  const getVal = (key: string, fallback: string) => edits[editKey(key)] ?? fallback;

  const availablePlans = (["a", "b", "c"] as const).filter((k) => day.plans[k]);
  const currentPlan = day.plans[activePlan] ?? day.plans.a;

  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(
    dayMapQueries[day.day] ?? `${day.title} ${day.city} Japan`
  )}`;

  const planTabStyle: Record<string, string> = {
    a: "bg-pink-500 text-white shadow-sm shadow-pink-500/40",
    b: "bg-blue-500 text-white shadow-sm shadow-blue-500/40",
    c: "bg-white/20 text-white",
  };
  const planBorderStyle: Record<string, string> = {
    a: "border-pink-500/40 bg-pink-500/5",
    b: "border-blue-500/40 bg-blue-500/5",
    c: "border-white/10 bg-white/5",
  };

  return (
    <div
      className={`glass rounded-2xl overflow-hidden transition-all duration-300 group ${
        isChecked ? "opacity-50 scale-[0.98]" : "hover:shadow-lg hover:shadow-pink-500/10"
      } ${day.isFlexDay ? "border border-yellow-500/30" : ""}`}
    >
      {/* Clickable header */}
      <div
        role="button"
        tabIndex={0}
        className="w-full text-left cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="relative h-36 overflow-hidden">
          <img
            src={imgUrl}
            alt={day.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${expanded ? "scale-105" : "group-hover:scale-103"}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Day badge */}
          <div className="absolute top-3 left-3 glass-dark rounded-full px-3 py-1 text-xs font-bold text-white">
            Day {day.day}
          </div>

          {/* Cost badge */}
          {dailyCosts[day.day] && (
            <div className="absolute top-3 left-16 glass-dark rounded-full px-2 py-1 text-xs text-white/60">
              {dailyCosts[day.day]}/pp
            </div>
          )}

          {/* Flex badge */}
          {day.isFlexDay && (
            <div className="absolute top-3 right-12 bg-yellow-500/80 rounded-full px-2 py-0.5 text-xs font-bold text-black">
              FLEX
            </div>
          )}

          {/* Check button */}
          <button
            onClick={(e) => { e.stopPropagation(); toggleDayChecked(day.day); }}
            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
              isChecked ? "bg-green-500 text-white" : "glass text-white/50 hover:text-white hover:bg-green-500/20"
            }`}
            title={isChecked ? "Mark as not done" : "Mark as done"}
          >
            ✓
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${accentColor}`}>
              {day.date} · {day.city}
            </div>
            <div className="text-white font-bold text-base leading-tight">
              {isEditMode ? (
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setEdit(editKey("title"), e.currentTarget.textContent ?? "")}
                  className="outline-none border-b border-dashed border-white/40"
                  onClick={(e) => e.stopPropagation()}
                >
                  {getVal("title", day.title)}
                </span>
              ) : (
                getVal("title", day.title)
              )}
            </div>
          </div>

          {/* Expand chevron */}
          <div className={`absolute bottom-3 right-3 text-white/40 text-xs transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ▾
          </div>
        </div>
      </div>

      {/* Collapsed preview */}
      {!expanded && (
        <div className="px-4 pb-3 pt-2">
          <p className="text-white/40 text-xs line-clamp-1">{day.objective}</p>
        </div>
      )}

      {/* Expanded content */}
      {expanded && (
        <div className="p-4 space-y-3">
          {/* Objective */}
          <p className="text-white/60 text-sm italic leading-relaxed">
            {isEditMode ? (
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEdit(editKey("objective"), e.currentTarget.textContent ?? "")}
                className="outline-none border-b border-dashed border-white/30"
              >
                {getVal("objective", day.objective)}
              </span>
            ) : (
              getVal("objective", day.objective)
            )}
          </p>

          {/* Plan tabs */}
          {availablePlans.length > 1 && (
            <div className="flex gap-1.5">
              {availablePlans.map((key) => (
                <button
                  key={key}
                  onClick={(e) => { e.stopPropagation(); setActivePlan(key); }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    activePlan === key ? planTabStyle[key] : "glass text-white/40 hover:text-white/70"
                  }`}
                >
                  {day.plans[key]?.label ?? key.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          {/* Active plan items */}
          {currentPlan && (
            <div className={`rounded-xl border p-3 transition-all ${planBorderStyle[activePlan]}`}>
              <ul className="space-y-2">
                {currentPlan.items.map((item, i) => (
                  <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                    <span className="flex-shrink-0 text-base leading-none mt-0.5">{activityEmoji(item)}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer: map link */}
          <div className="flex items-center justify-end pt-1 border-t border-white/5">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold text-pink-300/60 hover:text-pink-300 transition-colors flex items-center gap-1"
            >
              📍 Open in Maps ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
