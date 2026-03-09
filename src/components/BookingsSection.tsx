"use client";

import { useState } from "react";
import { useEdit } from "@/context/EditContext";
import { bookings, categoryMeta, type BookingCategory } from "@/data/bookings";

const CATEGORIES: BookingCategory[] = ["flights", "stays", "transport", "experiences"];

export default function BookingsSection() {
  const { bookedItems, toggleBooked } = useEdit();
  const [activeTab, setActiveTab] = useState<BookingCategory>("flights");

  const filtered = bookings.filter((b) => b.category === activeTab);
  const meta = categoryMeta[activeTab];

  const totalConfirmed = bookings.filter((b) => bookedItems.has(`booking-${b.id}`)).length;

  return (
    <section id="bookings" className="py-20 bg-[#080816]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">What We&apos;ve Booked</p>
          <h2 className="font-display text-4xl text-white mb-2">Bookings Registry</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">
            {totalConfirmed} of {bookings.length} confirmed
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => {
            const m = categoryMeta[cat];
            const count = bookings.filter(
              (b) => b.category === cat && bookedItems.has(`booking-${b.id}`)
            ).length;
            const total = bookings.filter((b) => b.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === cat
                    ? `bg-white/15 ${m.color} border border-white/20`
                    : "text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{m.emoji}</span>
                <span>{m.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${count === total ? "bg-green-500/30 text-green-300" : "bg-white/10 text-white/40"}`}>
                  {count}/{total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Booking cards */}
        <div className="space-y-4">
          {filtered.map((booking) => {
            const isConfirmed = bookedItems.has(`booking-${booking.id}`);
            return (
              <div
                key={booking.id}
                className={`glass rounded-2xl p-5 border transition-all ${
                  isConfirmed ? `${meta.border} bg-gradient-to-r ${meta.bg} to-transparent` : "border-white/5"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Confirm toggle */}
                  <button
                    onClick={() => toggleBooked(`booking-${booking.id}`)}
                    className={`mt-0.5 w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all ${
                      isConfirmed
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                        : "border border-white/20 text-white/20 hover:border-white/50 hover:text-white/50"
                    }`}
                    title={isConfirmed ? "Mark as unconfirmed" : "Mark as confirmed"}
                  >
                    {isConfirmed ? "✓" : ""}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className={`font-semibold text-base ${isConfirmed ? "text-white" : "text-white/80"}`}>
                        {booking.title}
                      </h3>
                      {isConfirmed && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                          Confirmed
                        </span>
                      )}
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5 mb-3">
                      <DetailRow icon="📅" label="Date" value={booking.date} />
                      {booking.time && <DetailRow icon="🕐" label="Time" value={booking.time} />}
                      {booking.location && <DetailRow icon="📍" label="Location" value={booking.location} colSpan />}
                      {booking.reference && <DetailRow icon="🔖" label="Ref #" value={booking.reference} />}
                      {booking.cost && <DetailRow icon="💴" label="Cost" value={booking.cost} />}
                      {booking.bookedVia && <DetailRow icon="🌐" label="Via" value={booking.bookedVia} />}
                    </div>

                    {booking.notes && (
                      <p className="text-white/40 text-xs leading-relaxed border-t border-white/5 pt-2">
                        {booking.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress summary */}
        <div className="mt-8 glass rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm">Overall confirmation progress</span>
            <span className="text-white font-semibold text-sm">{totalConfirmed} / {bookings.length}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${(totalConfirmed / bookings.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({
  icon,
  label,
  value,
  colSpan,
}: {
  icon: string;
  label: string;
  value: string;
  colSpan?: boolean;
}) {
  if (!value) return null;
  return (
    <div className={colSpan ? "col-span-2 sm:col-span-3" : ""}>
      <span className="text-white/30 text-xs">{icon} {label}: </span>
      <span className="text-white/70 text-xs">{value}</span>
    </div>
  );
}
