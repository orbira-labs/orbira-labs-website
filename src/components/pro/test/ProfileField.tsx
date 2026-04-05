"use client";

import { clsx } from "clsx";
import type { ProfileField as ProfileFieldType } from "@/lib/pro/engine-api";

interface ProfileFieldProps {
  field: ProfileFieldType;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function ProfileField({ field, value, onChange }: ProfileFieldProps) {
  if (field.type === "single_choice" && field.options) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {field.options.map((option) => (
            <button
              key={option.value}
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

  if (field.type === "boolean") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onChange(true)}
            className={clsx(
              "flex-1 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all",
              value === true
                ? "bg-[#5B7B6A] border-[#5B7B6A] text-white shadow-md"
                : "bg-white border-gray-200 text-gray-700 hover:border-[#5B7B6A]/50"
            )}
          >
            Evet
          </button>
          <button
            type="button"
            onClick={() => onChange(false)}
            className={clsx(
              "flex-1 px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all",
              value === false
                ? "bg-[#5B7B6A] border-[#5B7B6A] text-white shadow-md"
                : "bg-white border-gray-200 text-gray-700 hover:border-[#5B7B6A]/50"
            )}
          >
            Hayır
          </button>
        </div>
      </div>
    );
  }

  if (field.type === "text") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.required !== false && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#5B7B6A] focus:outline-none focus:ring-2 focus:ring-[#5B7B6A]/20 transition-all"
          placeholder={`${field.label} giriniz...`}
        />
      </div>
    );
  }

  return null;
}
