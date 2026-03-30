"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const CAPABILITIES = [
  {
    title: "Intelligent Adaptation",
    description: "Seni tanıdıkça sorular değişir. Her yanıt, bir sonraki adımı şekillendirir.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Minimal Friction",
    description: "Gereksiz soru yok. Her adım bir amaca hizmet eder. Zamanına saygı duyar.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Deep Understanding",
    description: "Yüzeysel yanıtların ötesine geçer. Asıl meseleyi, satır aralarından okur.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "HAE Synergy",
    description: "Human Analysis Engine ile tam entegrasyon. Toplanan veri, anlamlı profile dönüşür.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const FLOW_STEPS = [
  { label: "Başlangıç", sublabel: "Temel sorular" },
  { label: "Adaptasyon", sublabel: "Dinamik yönlendirme" },
  { label: "Derinleşme", sublabel: "Bağlamsal sorular" },
  { label: "Tamamlanma", sublabel: "Optimal profil verisi" },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function AQEPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
          
          {/* Animated background */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}

          <Container className="relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-foreground-muted mb-8">
                <Link href="/engines" className="hover:text-foreground transition-colors">
                  Engines
                </Link>
                <span className="text-foreground-subtle">/</span>
                <span className="text-violet-400">AQE</span>
              </div>

              {/* Icon */}
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-500/30"
                animate={isMobile ? {} : { 
                  boxShadow: [
                    "0 25px 50px -12px rgba(139,92,246,0.3)",
                    "0 25px 50px -12px rgba(139,92,246,0.5)",
                    "0 25px 50px -12px rgba(139,92,246,0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>

              {/* Title */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                  AQE
                </h1>
                <span className="text-xs sm:text-sm font-mono text-foreground-subtle bg-white/5 px-2 py-1 rounded border border-white/10">
                  v1.0
                </span>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">
                Adaptive Question Engine
              </p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Sorular{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  sana uyum sağlar.
                </span>
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Herkese aynı soruları sormak yerine, seni tanıdıkça değişen, 
                her adımda optimize olan akıllı soru akışı.
              </p>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-sm font-mono text-violet-400">Production Ready</span>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Flow Visualization */}
        <section className="section-padding relative">
          <Container>
            <motion.div {...fadeInUp()}>
              {/* Terminal Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">aqe.flow.engine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-mono text-violet-400/80">running</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-16">
                  {/* Flow Steps */}
                  <div className="mb-10 sm:mb-16">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Adaptive Flow</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    {/* Steps */}
                    <div className="relative">
                      {/* Connection line */}
                      <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20 hidden sm:block" />
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {FLOW_STEPS.map((step, index) => (
                          <motion.div
                            key={step.label}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="relative z-10 w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 flex items-center justify-center">
                              <span className="text-lg font-bold text-violet-400">{index + 1}</span>
                            </div>
                            <p className="text-sm font-semibold text-foreground mb-1">{step.label}</p>
                            <p className="text-xs text-foreground-muted">{step.sublabel}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Core Engine */}
                  <motion.div
                    className="relative max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="relative p-6 sm:p-10 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent overflow-hidden">
                      {/* Animated border */}
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ 
                            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)",
                            backgroundSize: "200% 100%",
                          }}
                          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      {/* Pattern */}
                      {!isMobile && (
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,1) 1px, transparent 0)`,
                          backgroundSize: '24px 24px'
                        }} />
                      )}

                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                          Adaptive Core
                        </h3>
                        <p className="text-sm sm:text-base text-foreground-muted mb-6">
                          Dinamik soru seçimi • Bağlam farkındalığı • Akıllı durdurma
                        </p>

                        <div className="flex items-center justify-center gap-4 sm:gap-6">
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-violet-400">200+</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Soru Havuzu</div>
                          </div>
                          <div className="w-px h-8 bg-white/10" />
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-violet-400">3</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Tier</div>
                          </div>
                          <div className="w-px h-8 bg-white/10" />
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-violet-400">∞</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Kombinasyon</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Result */}
                  <motion.div
                    className="mt-8 sm:mt-12 max-w-xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-3 text-sm text-foreground-muted">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Minimum soru</span>
                      </div>
                      <span className="text-foreground-subtle">•</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span>Maksimum veri</span>
                      </div>
                      <span className="text-foreground-subtle">•</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        <span>Optimal deneyim</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Capabilities */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Neden farklı?
              </h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Geleneksel anketlerin ötesinde, akıllı bir deneyim.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {CAPABILITIES.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300"
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -3 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:bg-violet-500/15 transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Integration Highlight */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div
              className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-[#7A8471]/10 border border-white/[0.08] text-center overflow-hidden"
              {...fadeInUp()}
            >
              {!isMobile && (
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: `linear-gradient(45deg, rgba(139,92,246,0.5) 25%, transparent 25%), linear-gradient(-45deg, rgba(139,92,246,0.5) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(122,132,113,0.5) 75%), linear-gradient(-45deg, transparent 75%, rgba(122,132,113,0.5) 75%)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }} />
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold">AQE</span>
                  </div>
                  <svg className="w-6 h-6 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center">
                    <span className="text-white font-bold">HAE</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Tam Entegrasyon
                </h3>
                <p className="text-foreground-muted max-w-md mx-auto">
                  AQE toplar, HAE analiz eder. İki motor birlikte çalışarak 
                  sana özel, derinlemesine içgörüler üretir.
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Used In */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center" {...fadeInUp()}>
              <p className="text-sm text-foreground-subtle mb-4">Şu anda kullanılıyor</p>
              <div className="flex justify-center">
                <Link
                  href="/products/moodumuz"
                  className="group px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <span className="text-xl font-semibold text-foreground group-hover:text-violet-400 transition-colors">
                    Moodumuz
                  </span>
                  <p className="text-sm text-foreground-muted mt-1">Döngü & Ruh Hali Takibi</p>
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Back */}
        <section className="pb-12 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link
                href="/engines"
                className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base py-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Tüm motorlar
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
