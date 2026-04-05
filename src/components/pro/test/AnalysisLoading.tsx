"use client";

import { useState, useEffect } from "react";

const LOADING_STEPS = [
  { label: "Analiziniz hazırlanıyor...", duration: 3000 },
  { label: "Trait'ler hesaplanıyor...", duration: 4000 },
  { label: "Pattern'ler tespit ediliyor...", duration: 5000 },
  { label: "AI doğrulama yapılıyor...", duration: 6000 },
  { label: "Raporunuz yazılıyor...", duration: 0 },
];

export function AnalysisLoading() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (stepIndex < LOADING_STEPS.length - 1) {
      const timer = setTimeout(() => {
        setStepIndex((i) => i + 1);
      }, LOADING_STEPS[stepIndex].duration);
      return () => clearTimeout(timer);
    }
  }, [stepIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F9F7] to-[#E8F0EC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-md w-full text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              className="animate-spin origin-center"
              style={{ animationDuration: "1.5s" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B7B6A" />
                <stop offset="100%" stopColor="#7A9A8A" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#5B7B6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {LOADING_STEPS[stepIndex].label}
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Bu işlem 20-30 saniye sürebilir
        </p>

        <div className="space-y-3">
          {LOADING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 ${
                idx < stepIndex
                  ? "bg-green-50"
                  : idx === stepIndex
                  ? "bg-[#5B7B6A]/10"
                  : "bg-gray-50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                  idx < stepIndex
                    ? "bg-green-500"
                    : idx === stepIndex
                    ? "bg-[#5B7B6A]"
                    : "bg-gray-200"
                }`}
              >
                {idx < stepIndex ? (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : idx === stepIndex ? (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                ) : (
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  idx < stepIndex
                    ? "text-green-700"
                    : idx === stepIndex
                    ? "text-[#5B7B6A]"
                    : "text-gray-400"
                }`}
              >
                {step.label.replace("...", "")}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Lütfen sayfayı kapatmayın
          </p>
        </div>
      </div>
    </div>
  );
}
