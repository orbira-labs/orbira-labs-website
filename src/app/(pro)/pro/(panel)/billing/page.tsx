"use client";

import { useProContext } from "@/lib/pro/context";
import { TopBar } from "@/components/pro/layout/TopBar";
import { Button } from "@/components/pro/ui/Button";
import {
  Sparkles,
  Check,
  Brain,
  Target,
  ShieldCheck,
  BarChart3,
  Heart,
  ArrowRight,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const FEATURES = [
  "AQE adaptif soru motoru",
  "HAE analiz raporu",
  "Detaylı sonuç görüntüleme",
  "WhatsApp / Email gönderim",
];

const BENEFITS = [
  {
    icon: Brain,
    title: "350+ Psikolojik Özellik",
    desc: "Danışanınızın kişilik haritasını en ince detayına kadar görün",
  },
  {
    icon: Target,
    title: "10 Boyutlu Wellness Skoru",
    desc: "Fiziksel, zihinsel ve duygusal denge tek bakışta anlaşılır",
  },
  {
    icon: BarChart3,
    title: "Derin Davranış Kalıpları",
    desc: "Güçlü yönler, risk alanları ve çelişkiler otomatik tespit edilir",
  },
  {
    icon: Heart,
    title: "Kişiye Özel Yönlendirme",
    desc: "Sonuçlar, birlikte çalışmanızı daha etkili kılacak ipuçları sunar",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli ve Gizli",
    desc: "Tüm veriler şifreli, KVKK uyumlu altyapıda saklanır",
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
      {/* Helix strand connecting cubes */}
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
      {/* Cube nodes along the helix */}
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
            {/* Back face */}
            <rect
              x={s * 0.25}
              y={0}
              width={s * 0.75}
              height={s * 0.75}
              fill="currentColor"
              opacity="0.15"
            />
            {/* Front face */}
            <rect
              x={0}
              y={s * 0.25}
              width={s * 0.75}
              height={s * 0.75}
              fill="currentColor"
              opacity="0.3"
            />
            {/* Connecting edges */}
            <line x1={0} y1={s * 0.25} x2={s * 0.25} y2={0} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={s * 0.75} y1={s * 0.25} x2={s} y2={0} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={0} y1={s} x2={s * 0.25} y2={s * 0.75} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1={s * 0.75} y1={s} x2={s} y2={s * 0.75} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          </g>
        );
      })}
      {/* Cross-links between strands */}
      {[100, 220, 340, 460].map((y, i) => (
        <line
          key={i}
          x1={150 + (i % 2) * 20}
          y1={y}
          x2={250 - (i % 2) * 20}
          y2={y}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
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
        {/* Background cube DNA structures */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <CubeDNA className="absolute -left-16 top-0 w-[280px] h-auto text-pro-primary opacity-[0.07]" />
          <CubeDNA className="absolute -right-10 top-20 w-[240px] h-auto text-pro-primary opacity-[0.05] scale-x-[-1]" />
          <CubeDNA className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[200px] h-auto text-pro-primary opacity-[0.04]" />
        </div>

        <div className="mx-auto max-w-5xl space-y-8 relative">
          {/* Two pricing cards side-by-side */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Card 1: Tek Test */}
            <div className="relative overflow-hidden rounded-2xl border border-pro-border bg-pro-surface shadow-[var(--pro-shadow-sm)] flex flex-col">
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 bg-pro-primary-light text-pro-primary text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                  <Sparkles className="h-3.5 w-3.5" />
                  Tek Test
                </div>

                <div className="mt-5">
                  <p className="text-4xl font-bold text-pro-text">
                    ₺32<span className="text-xl text-pro-text-secondary">,99</span>
                  </p>
                  <p className="text-sm text-pro-text-tertiary mt-1">tek seferlik</p>
                </div>

                <p className="text-sm text-pro-text-secondary mt-4 leading-relaxed">
                  Danışanınıza özel, yapay zeka destekli karakter ve wellness analizi.
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-pro-text-secondary">
                      <Check className="h-4 w-4 text-pro-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-6 w-full"
                  onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                >
                  Hemen Al
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Card 2: 10'lu Paket — Gold Gradient with Shine */}
            <div className="relative overflow-hidden rounded-2xl flex flex-col group">
              {/* Gold gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] via-[#E8C963] to-[#A67C34]" />

              {/* Subtle shine sweep animation */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)",
                  animation: "shine 3s ease-in-out infinite",
                }}
              />

              {/* Ambient glow spots */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white opacity-[0.08] blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-[#A67C34] opacity-[0.15] blur-[40px]" />

              <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <Zap className="h-3.5 w-3.5" />
                    En Popüler
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    %9 tasarruf
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-4xl font-bold text-white">
                    ₺299<span className="text-xl text-white/70">,90</span>
                  </p>
                  <p className="text-sm text-white/60 mt-1">10 test · test başına ₺29,99</p>
                </div>

                <p className="text-sm text-white/70 mt-4 leading-relaxed">
                  Toplu alımda her test daha uygun. Danışanlarınızı sürekli takip edin.
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 text-white shrink-0" />
                      {f}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 text-white shrink-0" />
                    Öncelikli destek
                  </li>
                </ul>

                <button
                  onClick={() => toast.info("Ödeme sistemi yakında aktif olacak")}
                  className="mt-6 w-full py-3.5 rounded-xl bg-white text-[#8B6914] font-semibold text-sm shadow-lg shadow-black/10 hover:shadow-xl hover:bg-white/95 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  10 Test Paketi Al
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="rounded-2xl bg-gradient-to-br from-[#4A6A59] via-[#5B7B6A] to-[#4A6A59] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white opacity-[0.04] blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white opacity-[0.03] blur-[50px]" />

            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Her analizde ne elde edersiniz?
              </h3>
              <p className="text-white/60 text-sm mb-8 max-w-lg">
                Danışanlarınızı daha iyi anlamak, doğru yönlendirmek ve güven inşa etmek için ihtiyacınız olan her şey tek raporda.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <b.icon className="h-4.5 w-4.5 text-white/80" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{b.title}</p>
                      <p className="text-xs text-white/55 leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shine keyframe animation */}
        <style jsx>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              transform: translateX(100%);
              opacity: 1;
            }
            51% {
              opacity: 0;
            }
            100% {
              opacity: 0;
              transform: translateX(100%);
            }
          }
        `}</style>
      </main>
    </>
  );
}
