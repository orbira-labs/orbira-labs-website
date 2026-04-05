"use client";

import { useProContext } from "@/lib/pro/context";
import { TopBar } from "@/components/pro/layout/TopBar";
import {
  Sparkles,
  Check,
  Zap,
  FlaskConical,
  Cpu,
  FileText,
  Fingerprint,
  Eye,
  Route,
  ShieldAlert,
  Layers,
  ScanSearch,
} from "lucide-react";
import { toast } from "sonner";

const CAPABILITIES = [
  {
    icon: FlaskConical,
    text: "AQE hibrid motoru ile adaptif sorular",
  },
  {
    icon: Cpu,
    text: "HAE hibrid motoru ile karakter analizi",
  },
  {
    icon: FileText,
    text: "Gelişmiş rapor sistemi ile çok yönlü çıktı",
  },
];

const OUTPUTS = [
  {
    icon: Fingerprint,
    title: "Karakter Haritası",
    desc: "350+ psikolojik özellik üzerinden kişinin derinlemesine profili",
  },
  {
    icon: ShieldAlert,
    title: "Danışana Özel Kritik Rapor",
    desc: "Güçlü yönler, risk alanları ve çelişkileri tek bir bakışta",
  },
  {
    icon: Eye,
    title: "Gizli Katman — Kör Noktalar",
    desc: "Kişinin farkında olmadığı dinamikler, çıkarım motoru ile tespit edilir",
  },
  {
    icon: Route,
    title: "Koçluk Yol Haritası",
    desc: "Acil, kısa ve orta vadeli somut müdahale adımları",
  },
  {
    icon: Layers,
    title: "10 Boyutlu Karakter Skoru",
    desc: "Her boyut ayrı ayrı puanlanır — stres, uyku, empati, enerji ve dahası",
  },
  {
    icon: ScanSearch,
    title: "Davranış Kalıpları & Çıkarımlar",
    desc: "Tekrarlayan örüntüler, gizli güçler ve tutarsızlık bayrakları",
  },
];

function CubeDNA({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120 40 C200 80, 280 120, 200 160 S120 240, 200 280 S280 360, 200 400 S120 480, 200 520"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M280 40 C200 80, 120 120, 200 160 S280 240, 200 280 S120 360, 200 400 S280 480, 200 520"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {[
        { x: 120, y: 40 },
        { x: 260, y: 80 },
        { x: 200, y: 160 },
        { x: 140, y: 240 },
        { x: 260, y: 280 },
        { x: 200, y: 360 },
        { x: 140, y: 400 },
        { x: 260, y: 480 },
        { x: 200, y: 520 },
      ].map((pos, i) => {
        const s = 12 + (i % 3) * 4;
        return (
          <g key={i} transform={`translate(${pos.x - s / 2}, ${pos.y - s / 2})`}>
            <rect x={s * 0.25} y={0} width={s * 0.75} height={s * 0.75} fill="currentColor" opacity="0.15" />
            <rect x={0} y={s * 0.25} width={s * 0.75} height={s * 0.75} fill="currentColor" opacity="0.3" />
            <line x1={0} y1={s * 0.25} x2={s * 0.25} y2={0} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={s * 0.75} y1={s * 0.25} x2={s} y2={0} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={0} y1={s} x2={s * 0.25} y2={s * 0.75} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={s * 0.75} y1={s} x2={s} y2={s * 0.75} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          </g>
        );
      })}
      {[100, 220, 340, 460].map((y, i) => (
        <line key={i} x1={150 + (i % 2) * 20} y1={y} x2={250 - (i % 2) * 20} y2={y} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      ))}
    </svg>
  );
}

export default function BillingPage() {
  const { creditBalance } = useProContext();

  return (
    <>
      <TopBar title="Satın Al" />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Background cube DNA */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <CubeDNA className="absolute -left-16 top-0 w-[280px] h-auto text-pro-primary opacity-[0.07]" />
          <CubeDNA className="absolute -right-10 top-20 w-[240px] h-auto text-pro-primary opacity-[0.05] scale-x-[-1]" />
        </div>

        <div className="mx-auto max-w-3xl relative space-y-6">
          {/* Main elevated pricing card */}
          <div className="rounded-3xl bg-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12),0_2px_12px_-2px_rgba(0,0,0,0.06)] border border-gray-100/80 overflow-hidden">
            {/* Header — capabilities */}
            <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-6">
              <div className="inline-flex items-center gap-2 bg-pro-primary-light text-pro-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Karakter Analiz Testi
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-pro-text mb-1">
                Danışanlarınız için derinlemesine analiz
              </h2>
              <p className="text-sm text-pro-text-tertiary mb-6">
                Her test, uçtan uca yapay zeka destekli bir karakter analiz sürecidir.
              </p>

              <div className="flex flex-col gap-3">
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-pro-primary-light flex items-center justify-center shrink-0">
                      <cap.icon className="h-4 w-4 text-pro-primary" />
                    </div>
                    <p className="text-sm font-medium text-pro-text">{cap.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-6 sm:mx-10 border-t border-gray-100" />

            {/* Pricing cards */}
            <div className="p-6 sm:p-10 grid sm:grid-cols-2 gap-4">
              {/* Tek Test */}
              <div className="rounded-2xl border border-pro-border overflow-hidden flex flex-col">
                <div className="bg-gradient-to-br from-[#EDF5F0] to-[#E0EDE4] px-5 py-4">
                  <p className="text-xs font-semibold text-pro-primary uppercase tracking-wide">Tek Test</p>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-pro-text">₺32</span>
                    <span className="text-lg font-semibold text-pro-text-secondary">,99</span>
                  </div>
                  <p className="text-xs text-pro-text-tertiary mt-0.5">tek seferlik</p>
                </div>
                <div className="px-5 py-4 flex-1 flex flex-col bg-white">
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-center gap-2 text-xs text-pro-text-secondary">
                      <Check className="h-3.5 w-3.5 text-pro-success shrink-0" />
                      Tam kapsamlı karakter analizi
                    </li>
                    <li className="flex items-center gap-2 text-xs text-pro-text-secondary">
                      <Check className="h-3.5 w-3.5 text-pro-success shrink-0" />
                      AI destekli kritik rapor
                    </li>
                    <li className="flex items-center gap-2 text-xs text-pro-text-secondary">
                      <Check className="h-3.5 w-3.5 text-pro-success shrink-0" />
                      WhatsApp / Email gönderim
                    </li>
                  </ul>
                  <button
                    onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                    className="mt-4 w-full py-2.5 rounded-xl border-2 border-pro-primary text-pro-primary text-sm font-semibold hover:bg-pro-primary hover:text-white transition-all active:scale-[0.98]"
                  >
                    Satın Al
                  </button>
                </div>
              </div>

              {/* 10'lu Paket — gold */}
              <div className="rounded-2xl overflow-hidden flex flex-col relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] via-[#E8C963] to-[#A67C34]" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)",
                    animation: "shine 3s ease-in-out infinite",
                  }}
                />
                <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-white opacity-[0.08] blur-[40px]" />

                {/* Diagonal ribbon */}
                <div className="absolute -right-[30px] top-[18px] z-10 rotate-45 bg-white shadow-md px-8 py-1">
                  <span className="text-[11px] font-bold text-[#8B6914] tracking-wide">%9 tasarruf</span>
                </div>

                <div className="relative px-5 py-4">
                  <p className="text-xs font-semibold text-white/90 uppercase tracking-wide">10 Test Paketi</p>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-white">₺299</span>
                    <span className="text-lg font-semibold text-white/70">,90</span>
                  </div>
                  <p className="text-xs text-white/55 mt-0.5">test başına ₺29,99</p>
                </div>

                <div className="relative px-5 py-4 flex-1 flex flex-col">
                  <ul className="space-y-2 flex-1">
                    <li className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="h-3.5 w-3.5 text-white shrink-0" />
                      Tam kapsamlı karakter analizi
                    </li>
                    <li className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="h-3.5 w-3.5 text-white shrink-0" />
                      AI destekli kritik rapor
                    </li>
                    <li className="flex items-center gap-2 text-xs text-white/80">
                      <Check className="h-3.5 w-3.5 text-white shrink-0" />
                      WhatsApp / Email gönderim
                    </li>
                  </ul>
                  <button
                    onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                    className="mt-4 w-full py-2.5 rounded-xl bg-white text-[#8B6914] text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:bg-white/95 transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
                  >
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs card */}
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B6A] via-[#6B8D7A] to-[#5B7B6A]" />

            {/* Ambient glow */}
            <div className="absolute top-[-40px] right-[10%] w-[200px] h-[200px] rounded-full bg-white opacity-[0.06] blur-[80px]" />
            <div className="absolute bottom-[-30px] left-[15%] w-[160px] h-[160px] rounded-full bg-[#E8C963] opacity-[0.04] blur-[60px]" />

            <div className="relative px-6 sm:px-10 py-8 sm:py-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">Her analizde elde ettiğiniz</p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>

              <h3 className="text-center text-xl sm:text-2xl font-bold text-white mt-3 mb-1">
                Tek testle ortaya çıkan katmanlar
              </h3>
              <p className="text-center text-sm text-white/50 mb-8 max-w-md mx-auto">
                Yüzeyde görünenden çok daha fazlası var. Her katman, danışanınızı anlamanın farklı bir boyutunu açar.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {OUTPUTS.map((item, i) => (
                  <div
                    key={i}
                    className="group/item flex items-start gap-3.5 p-4 rounded-2xl bg-[#3D5A4C] border border-[#4A6A59] shadow-[0_4px_16px_-2px_rgba(0,0,0,0.25),0_1px_4px_-1px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_-2px_rgba(0,0,0,0.3),0_2px_8px_-1px_rgba(0,0,0,0.2)] hover:bg-[#3A5749] hover:border-[#5B7B6A] transition-all duration-300"
                  >
                    <div className="h-9 w-9 rounded-xl bg-[#4A6A59] flex items-center justify-center shrink-0 mt-0.5 shadow-inner group-hover/item:bg-[#5B7B6A] transition-colors">
                      <item.icon className="h-[18px] w-[18px] text-white/70 group-hover/item:text-white/90 transition-colors" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white/95">{item.title}</p>
                      <p className="text-[11px] text-white/45 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
                <div className="flex -space-x-1">
                  {[0.2, 0.35, 0.5, 0.65, 0.8].map((opacity, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full border border-white/15"
                      style={{ backgroundColor: `rgba(232, 201, 99, ${opacity})` }}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-white/30 italic">
                  9 analiz katmanı · 4 yapay zeka denetimi · 1 rapor
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%); opacity: 0; }
            10% { opacity: 1; }
            50% { transform: translateX(100%); opacity: 1; }
            51% { opacity: 0; }
            100% { opacity: 0; transform: translateX(100%); }
          }
        `}</style>
      </main>
    </>
  );
}
