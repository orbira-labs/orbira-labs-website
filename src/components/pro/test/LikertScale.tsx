"use client";

import { clsx } from "clsx";

interface LikertScaleProps {
  value?: number;
  onChange: (value: number) => void;
  labels?: string[];
}

const DEFAULT_LABELS = ["Hiç", "Biraz", "Orta", "Çoğunlukla", "Tamamen"];

const SCALE_COLORS = [
  { bg: "bg-red-100", border: "border-red-300", active: "bg-red-500", text: "text-red-700" },
  { bg: "bg-orange-100", border: "border-orange-300", active: "bg-orange-500", text: "text-orange-700" },
  { bg: "bg-yellow-100", border: "border-yellow-300", active: "bg-yellow-500", text: "text-yellow-700" },
  { bg: "bg-lime-100", border: "border-lime-300", active: "bg-lime-500", text: "text-lime-700" },
  { bg: "bg-green-100", border: "border-green-300", active: "bg-green-500", text: "text-green-700" },
];

export function LikertScale({ value, onChange, labels = DEFAULT_LABELS }: LikertScaleProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map((num) => {
          const isSelected = value === num;
          const colors = SCALE_COLORS[num - 1];

          return (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={clsx(
                "flex-1 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl transition-all duration-200",
                "border-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
                isSelected
                  ? `${colors.active} text-white border-transparent shadow-lg scale-105`
                  : `${colors.bg} ${colors.border} ${colors.text} hover:scale-102 hover:shadow-md`
              )}
            >
              {num}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between px-1">
        {labels.map((label, idx) => (
          <span
            key={idx}
            className={clsx(
              "text-[10px] sm:text-xs transition-colors",
              value === idx + 1 ? SCALE_COLORS[idx].text + " font-semibold" : "text-gray-400"
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
