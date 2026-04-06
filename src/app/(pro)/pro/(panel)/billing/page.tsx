"use client";

import { useProContext } from "@/lib/pro/context";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Card } from "@/components/pro/ui/Card";
import {
  Check,
  Zap,
  Fingerprint,
  Eye,
  Route,
  ShieldAlert,
  Layers,
  ScanSearch,
} from "lucide-react";
import { toast } from "sonner";

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

const PACKAGE_FEATURES = [
  "Karaktere Özel Sorular",
  "Hibrit İnsan Analizi",
  "Tam kapsamlı Hibrit Rapor",
];

export default function BillingPage() {
  const { creditBalance } = useProContext();

  return (
    <>
      <TopBar title="Satın Al" />
      <main className="flex-1 p-3 sm:p-5 lg:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#5B7B6A]/20 to-[#5B7B6A]/8 rounded-2xl p-4 sm:p-5 space-y-4">

            {/* Top Info Card — clean feature list */}
            <Card padding="lg" variant="elevated">
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-pro-border">
                {/* Left column */}
                <div className="space-y-4 sm:pr-6 pb-4 sm:pb-0">
                  {OUTPUTS.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-pro-primary-light flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="h-[15px] w-[15px] text-pro-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-pro-text">{item.title}</p>
                        <p className="text-xs text-pro-text-tertiary leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Right column */}
                <div className="space-y-4 sm:pl-6 pt-4 sm:pt-0">
                  {OUTPUTS.slice(3).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-pro-primary-light flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="h-[15px] w-[15px] text-pro-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-pro-text">{item.title}</p>
                        <p className="text-xs text-pro-text-tertiary leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Technology strip */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-pro-border" />
              <p className="text-[10px] text-pro-text-tertiary uppercase tracking-widest shrink-0">Teknoloji</p>
              <div className="h-px flex-1 bg-pro-border" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.orbiralabs.com/engines/aqe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-pro-border bg-white hover:border-pro-primary/50 hover:shadow-md transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-pro-primary-light flex items-center justify-center shrink-0 group-hover:bg-pro-primary transition-colors">
                  <span className="text-[10px] font-bold text-pro-primary group-hover:text-white transition-colors">AQE</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-pro-text">Adaptive Question Engine</p>
                  <p className="text-[10px] text-pro-text-tertiary">Kişiye özel adaptif sorular</p>
                </div>
                <svg className="h-3.5 w-3.5 text-pro-text-tertiary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="https://www.orbiralabs.com/engines/hae"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-pro-border bg-white hover:border-pro-primary/50 hover:shadow-md transition-all"
              >
                <div className="h-8 w-8 rounded-lg bg-pro-primary-light flex items-center justify-center shrink-0 group-hover:bg-pro-primary transition-colors">
                  <span className="text-[10px] font-bold text-pro-primary group-hover:text-white transition-colors">HAE</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-pro-text">Human Analysis Engine</p>
                  <p className="text-[10px] text-pro-text-tertiary">İnsanı gerçekten anlayan analiz</p>
                </div>
                <svg className="h-3.5 w-3.5 text-pro-text-tertiary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* White card — 5 adet */}
              <div className="rounded-2xl border-2 border-pro-border bg-white overflow-hidden flex flex-col">
                <div className="bg-gradient-to-br from-[#EDF5F0] to-[#E0EDE4] px-6 py-5">
                  <p className="text-xs font-semibold text-pro-primary uppercase tracking-wide mb-2">Başlangıç</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-pro-text">₺164</span>
                    <span className="text-xl font-semibold text-pro-text-secondary mb-1">,95</span>
                  </div>
                  <p className="text-xs text-pro-text-tertiary mt-1">5 analiz kredisi · analiz başına ₺32,99</p>
                </div>
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <ul className="space-y-2.5 flex-1">
                    {PACKAGE_FEATURES.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-pro-text-secondary">
                        <Check className="h-4 w-4 text-pro-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                    className="mt-5 w-full py-3 rounded-xl border-2 border-pro-primary text-pro-primary font-semibold hover:bg-pro-primary hover:text-white transition-all active:scale-[0.98]"
                  >
                    Satın Al
                  </button>
                </div>
              </div>

              {/* Gold card — 20 adet */}
              <div className="rounded-2xl overflow-hidden flex flex-col relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] via-[#E8C963] to-[#A67C34]" />
                <div className="absolute top-0 right-0 w-[140px] h-[140px] rounded-full bg-white opacity-[0.08] blur-[50px]" />

                {/* Diagonal ribbon — top right */}
                <div className="absolute -right-[30px] top-[18px] z-10 rotate-45 bg-white shadow-md px-8 py-1">
                  <span className="text-[11px] font-bold text-[#8B6914] tracking-wide">%18 tasarruf</span>
                </div>

                <div className="relative px-6 py-5">
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-wide mb-2">Profesyonel</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">₺540</span>
                    <span className="text-xl font-semibold text-white/70 mb-1">,00</span>
                  </div>
                  <p className="text-xs text-white/55 mt-1">20 analiz kredisi · analiz başına ₺27,00</p>
                </div>

                <div className="relative px-6 py-5 flex-1 flex flex-col">
                  <ul className="space-y-2.5 flex-1">
                    {PACKAGE_FEATURES.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                        <Check className="h-4 w-4 text-white shrink-0" />
                        {item}
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-sm text-white font-medium">
                      <Zap className="h-4 w-4 text-white shrink-0" />
                      Analiz başına ₺5,99 daha ucuz
                    </li>
                  </ul>
                  <button
                    onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                    className="mt-5 w-full py-3 rounded-xl bg-white text-[#8B6914] font-semibold shadow-lg hover:bg-white/95 transition-all active:scale-[0.98]"
                  >
                    Satın Al
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom trust row */}
            <div className="flex flex-wrap items-center justify-center gap-5 py-1 text-xs text-pro-text-tertiary">
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-pro-success" />
                Güvenli ödeme
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-pro-success" />
                Anında kredi yükleme
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-pro-success" />
                Sınırsız geçerlilik
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
