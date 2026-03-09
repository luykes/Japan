"use client";

import { useState, useEffect, useCallback } from "react";
import { useEdit } from "@/context/EditContext";
import { bookings, categoryMeta, type BookingCategory } from "@/data/bookings";
import type { CustomBooking } from "@/app/api/custom-bookings/route";

const CATEGORIES: BookingCategory[] = ["flights", "stays", "transport", "experiences"];

const BLANK_FORM = {
  title: "", date: "", time: "", location: "",
  reference: "", cost: "", bookedVia: "", notes: "",
};

export default function BookingsSection() {
  const { bookedItems, toggleBooked } = useEdit();
  const [activeTab, setActiveTab] = useState<BookingCategory>("flights");
  const [customBookings, setCustomBookings] = useState<CustomBooking[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(BLANK_FORM);
  const [saving, setSaving] = useState(false);

  // Load custom bookings on mount
  const loadCustom = useCallback(async () => {
    try {
      const res = await fetch("/api/custom-bookings");
      if (res.ok) setCustomBookings(await res.json());
    } catch { /* silent */ }
  }, []);

  useEffect(() => { loadCustom(); }, [loadCustom]);

  const handleAdd = async () => {
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      const res = await fetch("/api/custom-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, category: activeTab }),
      });
      if (res.ok) {
        const created: CustomBooking = await res.json();
        setCustomBookings((prev) => [...prev, created]);
        setForm(BLANK_FORM);
        setShowForm(false);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setCustomBookings((prev) => prev.filter((b) => b.id !== id));
    await fetch("/api/custom-bookings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  const filteredStatic = bookings.filter((b) => b.category === activeTab);
  const filteredCustom = customBookings.filter((b) => b.category === activeTab);
  const meta = categoryMeta[activeTab];

  const totalStatic = bookings.length;
  const totalConfirmed = bookings.filter((b) => bookedItems.has(`booking-${b.id}`)).length
    + customBookings.filter((b) => bookedItems.has(`booking-${b.id}`)).length;
  const totalAll = totalStatic + customBookings.length;

  return (
    <section id="bookings" className="py-20 bg-[#080816]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm uppercase tracking-widest mb-2">What We&apos;ve Booked</p>
          <h2 className="font-display text-4xl text-white mb-2">Bookings Registry</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm mt-4">{totalConfirmed} of {totalAll} confirmed</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => {
            const m = categoryMeta[cat];
            const staticInCat = bookings.filter((b) => b.category === cat);
            const customInCat = customBookings.filter((b) => b.category === cat);
            const confirmedInCat = staticInCat.filter((b) => bookedItems.has(`booking-${b.id}`)).length
              + customInCat.filter((b) => bookedItems.has(`booking-${b.id}`)).length;
            const totalInCat = staticInCat.length + customInCat.length;
            return (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setShowForm(false); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === cat
                    ? `bg-white/15 ${m.color} border border-white/20`
                    : "text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20"
                }`}
              >
                <span>{m.emoji}</span>
                <span>{m.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${confirmedInCat === totalInCat && totalInCat > 0 ? "bg-green-500/30 text-green-300" : "bg-white/10 text-white/40"}`}>
                  {confirmedInCat}/{totalInCat}
                </span>
              </button>
            );
          })}
        </div>

        {/* Booking cards */}
        <div className="space-y-4">
          {/* Static bookings */}
          {filteredStatic.map((booking) => {
            const isConfirmed = bookedItems.has(`booking-${booking.id}`);
            return (
              <BookingCard
                key={booking.id}
                id={`booking-${booking.id}`}
                title={booking.title}
                date={booking.date}
                time={booking.time}
                location={booking.location}
                reference={booking.reference}
                cost={booking.cost}
                bookedVia={booking.bookedVia}
                notes={booking.notes}
                isConfirmed={isConfirmed}
                meta={meta}
                onToggle={() => toggleBooked(`booking-${booking.id}`)}
              />
            );
          })}

          {/* Custom bookings */}
          {filteredCustom.map((booking) => {
            const isConfirmed = bookedItems.has(`booking-${booking.id}`);
            return (
              <BookingCard
                key={booking.id}
                id={`booking-${booking.id}`}
                title={booking.title}
                date={booking.date}
                time={booking.time}
                location={booking.location}
                reference={booking.reference}
                cost={booking.cost}
                bookedVia={booking.bookedVia}
                notes={booking.notes}
                isConfirmed={isConfirmed}
                meta={meta}
                onToggle={() => toggleBooked(`booking-${booking.id}`)}
                onDelete={() => handleDelete(booking.id)}
                isCustom
              />
            );
          })}

          {/* Add custom booking */}
          {showForm ? (
            <div className="glass rounded-2xl p-5 border border-pink-500/30 bg-gradient-to-br from-pink-900/10 to-transparent">
              <p className="text-pink-300 text-sm font-semibold mb-4">
                Add booking to {meta.emoji} {meta.label}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <input
                  placeholder="Title *"
                  value={form.title}
                  onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                  className="col-span-1 sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50"
                />
                <input placeholder="Date (e.g. 20 May 2026)" value={form.date} onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Time (e.g. 14:30)" value={form.time} onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Location" value={form.location} onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} className="col-span-1 sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Ref / Booking #" value={form.reference} onChange={(e) => setForm((p) => ({ ...p, reference: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Cost (e.g. ¥3,200)" value={form.cost} onChange={(e) => setForm((p) => ({ ...p, cost: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Booked via (e.g. Klook)" value={form.bookedVia} onChange={(e) => setForm((p) => ({ ...p, bookedVia: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
                <input placeholder="Notes" value={form.notes} onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-500/50" />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  disabled={saving || !form.title.trim()}
                  className="px-5 py-2 bg-pink-500 hover:bg-pink-400 disabled:opacity-40 text-white rounded-xl text-sm font-semibold transition-all"
                >
                  {saving ? "Saving…" : "Add Booking"}
                </button>
                <button onClick={() => { setShowForm(false); setForm(BLANK_FORM); }} className="px-5 py-2 glass text-white/60 hover:text-white rounded-xl text-sm transition-all">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="w-full glass rounded-2xl p-4 border border-dashed border-white/20 hover:border-pink-500/40 text-white/40 hover:text-pink-300 text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span className="text-lg">+</span> Add custom {meta.label.toLowerCase()} booking
            </button>
          )}
        </div>

        {/* Progress summary */}
        <div className="mt-8 glass rounded-2xl p-5 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm">Overall confirmation progress</span>
            <span className="text-white font-semibold text-sm">{totalConfirmed} / {totalAll}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: totalAll > 0 ? `${(totalConfirmed / totalAll) * 100}%` : "0%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCard({
  id, title, date, time, location, reference, cost, bookedVia, notes,
  isConfirmed, meta, onToggle, onDelete, isCustom,
}: {
  id: string; title: string; date: string; time?: string; location?: string;
  reference?: string; cost?: string; bookedVia?: string; notes?: string;
  isConfirmed: boolean;
  meta: { border: string; bg: string; color: string };
  onToggle: () => void;
  onDelete?: () => void;
  isCustom?: boolean;
}) {
  return (
    <div className={`glass rounded-2xl p-5 border transition-all ${isConfirmed ? `${meta.border} bg-gradient-to-r ${meta.bg} to-transparent` : "border-white/5"}`}>
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          className={`mt-0.5 w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all ${isConfirmed ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : "border border-white/20 text-white/20 hover:border-white/50 hover:text-white/50"}`}
          title={isConfirmed ? "Mark as unconfirmed" : "Mark as confirmed"}
        >
          {isConfirmed ? "✓" : ""}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className={`font-semibold text-base ${isConfirmed ? "text-white" : "text-white/80"}`}>{title}</h3>
            {isConfirmed && <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">Confirmed</span>}
            {isCustom && <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">Custom</span>}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5 mb-3">
            <DetailRow icon="📅" label="Date" value={date} />
            {time && <DetailRow icon="🕐" label="Time" value={time} />}
            {location && <DetailRow icon="📍" label="Location" value={location} colSpan />}
            {reference && <DetailRow icon="🔖" label="Ref #" value={reference} />}
            {cost && <DetailRow icon="💴" label="Cost" value={cost} />}
            {bookedVia && <DetailRow icon="🌐" label="Via" value={bookedVia} />}
          </div>
          {notes && <p className="text-white/40 text-xs leading-relaxed border-t border-white/5 pt-2">{notes}</p>}
        </div>
        {isCustom && onDelete && (
          <button
            onClick={onDelete}
            className="flex-shrink-0 text-white/20 hover:text-red-400 transition-colors text-lg leading-none"
            title="Delete booking"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value, colSpan }: { icon: string; label: string; value: string; colSpan?: boolean }) {
  if (!value) return null;
  return (
    <div className={colSpan ? "col-span-2 sm:col-span-3" : ""}>
      <span className="text-white/30 text-xs">{icon} {label}: </span>
      <span className="text-white/70 text-xs">{value}</span>
    </div>
  );
}
