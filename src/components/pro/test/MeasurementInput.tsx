"use client";

import { clsx } from "clsx";
import type { MeasurementField } from "@/lib/pro/engine-api";

interface MeasurementInputProps {
  field: MeasurementField;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function MeasurementInput({ field, value, onChange }: MeasurementInputProps) {
  if (field.type === "number") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.unit && <span className="text-gray-400 font-normal ml-1">({field.unit})</span>}
        </label>
        <div className="relative">
          <input
            type="number"
            min={field.min}
            max={field.max}
            value={(value as number) || ""}
            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#5B7B6A] focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder={field.min && field.max ? `${field.min} - ${field.max}` : undefined}
          />
          {field.unit && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              {field.unit}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (field.type === "select" && field.options) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
        <div className="grid grid-cols-1 gap-1.5">
          {field.options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={clsx(
                "px-4 py-2 rounded-lg border text-sm font-medium text-left transition-all",
                value === option.value
                  ? "bg-[#5B7B6A] border-[#5B7B6A] text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#5B7B6A]/50 hover:bg-[#5B7B6A]/5"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
