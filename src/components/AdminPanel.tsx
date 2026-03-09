"use client";

import { useEdit } from "@/context/EditContext";
import { useState } from "react";

export default function AdminPanel() {
  const { isEditMode, toggleEditMode, resetEdits, checkedDays } = useEdit();
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {/* Floating pencil button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
        {/* Edit mode panel */}
        {isEditMode && (
          <div className="glass-dark rounded-2xl p-4 border border-yellow-500/40 text-sm w-56 shadow-2xl">
            <div className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
              <span>✏️</span> Edit Mode ON
            </div>
            <p className="text-white/50 text-xs mb-3">
              Click any text on the page to edit it. Changes are saved automatically.
            </p>
            <div className="text-white/40 text-xs mb-3">
              {checkedDays.size} days checked off
            </div>
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="w-full text-xs py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 hover:bg-red-500/30 transition-all"
              >
                Reset all edits
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-red-300 text-xs">Are you sure? This clears all edits.</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => { resetEdits(); setShowConfirm(false); }}
                    className="flex-1 text-xs py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-400 transition-all"
                  >
                    Yes, reset
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 text-xs py-1.5 rounded-lg glass text-white hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={toggleEditMode}
          title={isEditMode ? "Exit edit mode" : "Enter edit mode"}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all hover:scale-110 ${
            isEditMode
              ? "bg-yellow-500 text-black shadow-yellow-500/40"
              : "glass-dark text-white/60 hover:text-white border border-white/20"
          }`}
        >
          {isEditMode ? "✓" : "✏️"}
        </button>
      </div>
    </>
  );
}
