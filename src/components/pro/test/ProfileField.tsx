"use client";

import { clsx } from "clsx";
import type { ProfileField as ProfileFieldType } from "@/lib/pro/engine-api";

interface ProfileFieldProps {
  field: ProfileFieldType;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function ProfileField({ field, value, onChange }: ProfileFieldProps) {
  if (field.answer_type === "single_choice" && field.options) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.text}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {field.options.map((option) => (
            <button
              key={String(option.value)}
              type="button"
              onClick={() => onChange(option.value)}
              className={clsx(
                "px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all",
                value === option.value
                  ? "bg-[#5B7B6A] border-[#5B7B6A] text-white shadow-md"
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

  if (field.answer_type === "boolean" && field.options) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.text}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex gap-3">
          {field.options.map((option) => (
            <button
              key={String(option.value)}
              type="button"
              onClick={() => onChange(option.value)}
              className={clsx(
                "flex-1 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all",
                value === option.value
                  ? "bg-[#5B7B6A] border-[#5B7B6A] text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#5B7B6A]/50"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (field.answer_type === "text") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.text}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#5B7B6A] focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/20 transition-all"
          placeholder={`${field.text} giriniz...`}
        />
      </div>
    );
  }

  return null;
}
