"use client";

import { useEdit } from "@/context/EditContext";
import { transportLegs, cityTransport, prebookChecklist } from "@/data/transport";

const statusColors = {
  early: "bg-red-500/20 text-red-300 border-red-500/40",
  later: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  flexible: "bg-green-500/20 text-green-300 border-green-500/40",
};

const statusLabels = {
  early: "Book Early",
  later: "Book Later",
  flexible: "Flexible",
};

export default function TransportSection() {
  const { bookedItems, toggleBooked } = useEdit();

  return (
    <section id="transport" className="py-20 bg-[#080816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">Getting Around</p>
          <h2 className="font-display text-4xl text-white mb-2">Transport Plan</h2>
          <div className="section-divider" />
        </div>

        {/* Intercity legs */}
        <div className="mb-12">
          <h3 className="font-display text-xl text-white mb-4">Intercity Journeys</h3>
          <div className="space-y-3">
            {transportLegs.map((leg, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-white font-semibold">{leg.from}</span>
                      <span className="text-pink-400">→</span>
                      <span className="text-white font-semibold">{leg.to}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[leg.bookingStatus]}`}>
                        {statusLabels[leg.bookingStatus]}
                      </span>
                    </div>
                    <div className="text-pink-300 text-sm font-medium">{leg.method}</div>
                    <div className="text-white/50 text-sm mt-1">{leg.notes}</div>
                    {leg.bookingUrl && (
                      <a
                        href={leg.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-pink-300 hover:text-pink-200 underline underline-offset-2 transition-colors"
                      >
                        {leg.bookingUrlLabel} ↗
                      </a>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-white font-bold">{leg.familyCost}</div>
                    <div className="text-white/40 text-xs">family total</div>
                    <div className="text-white/50 text-xs">{leg.costPerPerson} / person</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* City transport */}
        <div className="mb-12">
          <h3 className="font-display text-xl text-white mb-4">City Transport</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityTransport.map((ct) => (
              <div key={ct.city} className="glass rounded-2xl p-4">
                <div className="font-bold text-white mb-1">{ct.city}</div>
                <div className="text-pink-300 text-sm">{ct.pass}</div>
                <div className="text-white/60 text-sm mt-1">{ct.cost}</div>
                <div className="text-white/40 text-xs mt-2 border-t border-white/10 pt-2">{ct.tip}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prebook checklist */}
        <div>
          <h3 className="font-display text-xl text-white mb-4">Booking Checklist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prebookChecklist.map((item) => {
              const isBooked = bookedItems.has(`checklist-${item.item}`);
              return (
                <div
                  key={item.item}
                  className={`glass rounded-xl p-4 flex items-start gap-3 transition-all ${isBooked ? "opacity-60" : ""}`}
                >
                  {/* Tick button */}
                  <button
                    onClick={() => toggleBooked(`checklist-${item.item}`)}
                    className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold transition-all ${
                      isBooked ? "bg-green-500 text-white" : "border border-white/30 hover:border-white/60"
                    }`}
                    title={isBooked ? "Mark as not booked" : "Mark as booked"}
                  >
                    {isBooked ? "✓" : ""}
                  </button>

                  {/* Text + link */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium ${isBooked ? "line-through text-white/30" : "text-white"}`}>
                      {item.item}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{item.timing}</div>
                    {"url" in item && item.url && (
                      <a
                        href={item.url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold text-pink-300 hover:text-pink-200 underline underline-offset-2 transition-colors"
                      >
                        {(item as { urlLabel?: string }).urlLabel ?? "Open"} ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
