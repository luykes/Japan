"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

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

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [edits, setEdits] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem("japan-edits") || "{}");
    } catch {
      return {};
    }
  });
  const [checkedDays, setCheckedDays] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const stored = JSON.parse(localStorage.getItem("japan-checked-days") || "[]");
      return new Set(stored);
    } catch {
      return new Set();
    }
  });
  const [bookedItems, setBookedItems] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const stored = JSON.parse(localStorage.getItem("japan-booked") || "[]");
      return new Set(stored);
    } catch {
      return new Set();
    }
  });

  const toggleEditMode = useCallback(() => setIsEditMode((v) => !v), []);

  const setEdit = useCallback((key: string, value: string) => {
    setEdits((prev) => {
      const next = { ...prev, [key]: value };
      if (typeof window !== "undefined") {
        localStorage.setItem("japan-edits", JSON.stringify(next));
      }
      return next;
    });
  }, []);

  const resetEdits = useCallback(() => {
    setEdits({});
    if (typeof window !== "undefined") {
      localStorage.removeItem("japan-edits");
    }
  }, []);

  const toggleDayChecked = useCallback((day: number) => {
    setCheckedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      if (typeof window !== "undefined") {
        localStorage.setItem("japan-checked-days", JSON.stringify([...next]));
      }
      return next;
    });
  }, []);

  const toggleBooked = useCallback((item: string) => {
    setBookedItems((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      if (typeof window !== "undefined") {
        localStorage.setItem("japan-booked", JSON.stringify([...next]));
      }
      return next;
    });
  }, []);

  return (
    <EditContext.Provider
      value={{ isEditMode, toggleEditMode, edits, setEdit, resetEdits, checkedDays, toggleDayChecked, bookedItems, toggleBooked }}
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
