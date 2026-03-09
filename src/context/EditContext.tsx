"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type EditContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
  edits: Record<string, string>;
  setEdit: (key: string, value: string) => void;
  resetEdits: () => void;
  checkedDays: Set<number>;
  toggleDayChecked: (day: number) => void;
  bookedItems: Set<string>;
  toggleBooked: (item: string) => void;
};

const EditContext = createContext<EditContextType | null>(null);

// ── localStorage helpers (instant local cache) ──────────────────────────────
function lsGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
function lsSet(key: string, value: unknown) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

// ── API helpers ──────────────────────────────────────────────────────────────
async function fetchChecklist(): Promise<Record<string, boolean>> {
  try {
    const res = await fetch("/api/checklist");
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

async function postChecklist(id: string, checked: boolean) {
  try {
    await fetch("/api/checklist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, checked }),
    });
  } catch {
    // silent — local state already updated
  }
}

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  // ── Text edits (localStorage only — device-specific) ─────────────────────
  const [edits, setEdits] = useState<Record<string, string>>(() =>
    lsGet("japan-edits", {})
  );

  // ── Checked days — initialise from localStorage, then sync from API ───────
  const [checkedDays, setCheckedDays] = useState<Set<number>>(() => {
    const stored: number[] = lsGet("japan-checked-days", []);
    return new Set(stored);
  });

  // ── Booked items — initialise from localStorage, then sync from API ───────
  const [bookedItems, setBookedItems] = useState<Set<string>>(() => {
    const stored: string[] = lsGet("japan-booked", []);
    return new Set(stored);
  });

  // ── On mount: hydrate both sets from the server DB ────────────────────────
  useEffect(() => {
    fetchChecklist().then((data) => {
      const days = new Set<number>();
      const booked = new Set<string>();

      for (const [id, checked] of Object.entries(data)) {
        if (!checked) continue;
        if (id.startsWith("day-")) {
          const n = parseInt(id.replace("day-", ""), 10);
          if (!isNaN(n)) days.add(n);
        } else {
          booked.add(id);
        }
      }

      setCheckedDays(days);
      setBookedItems(booked);

      // Keep localStorage in sync for next instant load
      lsSet("japan-checked-days", [...days]);
      lsSet("japan-booked", [...booked]);
    });
  }, []);

  // ── Mutations ─────────────────────────────────────────────────────────────
  const toggleEditMode = useCallback(() => setIsEditMode((v) => !v), []);

  const setEdit = useCallback((key: string, value: string) => {
    setEdits((prev) => {
      const next = { ...prev, [key]: value };
      lsSet("japan-edits", next);
      return next;
    });
  }, []);

  const resetEdits = useCallback(() => {
    setEdits({});
    lsSet("japan-edits", {});
  }, []);

  const toggleDayChecked = useCallback((day: number) => {
    setCheckedDays((prev) => {
      const next = new Set(prev);
      const nowChecked = !next.has(day);
      if (nowChecked) next.add(day);
      else next.delete(day);
      lsSet("japan-checked-days", [...next]);
      postChecklist(`day-${day}`, nowChecked);
      return next;
    });
  }, []);

  const toggleBooked = useCallback((item: string) => {
    setBookedItems((prev) => {
      const next = new Set(prev);
      const nowChecked = !next.has(item);
      if (nowChecked) next.add(item);
      else next.delete(item);
      lsSet("japan-booked", [...next]);
      postChecklist(item, nowChecked);
      return next;
    });
  }, []);

  return (
    <EditContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        edits,
        setEdit,
        resetEdits,
        checkedDays,
        toggleDayChecked,
        bookedItems,
        toggleBooked,
      }}
    >
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const ctx = useContext(EditContext);
  if (!ctx) throw new Error("useEdit must be used within EditProvider");
  return ctx;
}
