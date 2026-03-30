"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const CAPABILITIES = [
  {
    title: "Deep Pattern Recognition",
    description: "Yüzeyde görünmeyen bağlantıları keşfeder. Her veri noktası, büyük resmin bir parçası.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Contextual Intelligence",
    description: "Anlık değil, bütünsel değerlendirme. Geçmiş, şimdi ve olası gelecek tek bir perspektifte.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Adaptive Precision",
    description: "Her etkileşimde daha keskin. Zaman geçtikçe seni daha iyi anlayan bir sistem.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Privacy-First Architecture",
    description: "Veriler sende kalır. Analiz sonuçları cihazında işlenir, sunuculara ham veri gitmez.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
];

const SIGNALS = [
  { label: "Biyometrik Sinyaller", delay: 0 },
  { label: "Davranış Haritası", delay: 0.1 },
  { label: "Bağlam Matrisi", delay: 0.2 },
];

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay },
});

export default function HAEPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <main className="pt-20 overflow-hidden">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A8471]/10 via-transparent to-[#5C6455]/10 pointer-events-none" />
          
          {/* Animated background elements */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7A8471]/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
                <span className="text-[#9BA392]">HAE</span>
              </div>

              {/* Icon */}
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center shadow-2xl shadow-[#7A8471]/30"
                animate={isMobile ? {} : { 
                  boxShadow: [
                    "0 25px 50px -12px rgba(122,132,113,0.3)",
                    "0 25px 50px -12px rgba(122,132,113,0.5)",
                    "0 25px 50px -12px rgba(122,132,113,0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </motion.div>

              {/* Title */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                  HAE
                </h1>
                <span className="text-xs sm:text-sm font-mono text-foreground-subtle bg-white/5 px-2 py-1 rounded border border-white/10">
                  v3.0
                </span>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">
                Human Analysis Engine
              </p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                İnsanı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8471] via-[#9BA392] to-[#7A8471]">
                  gerçekten anlayan
                </span>{" "}
                teknoloji.
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Karmaşık insan davranışlarını çözen, görünmeyeni görünür kılan, 
                her bireyi eşsiz bir profil olarak değerlendiren yapay zeka mimarisi.
              </p>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-mono text-emerald-400">Production Ready</span>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Architecture Visualization */}
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
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">hae.engine.core</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400/80">active</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-16">
                  {/* Input Signals */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Input Signals</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {SIGNALS.map((signal, index) => (
                        <motion.div
                          key={signal.label}
                          className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] text-center group"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: signal.delay }}
                          whileHover={isMobile ? {} : { y: -3, borderColor: "rgba(122,132,113,0.3)" }}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-lg bg-[#7A8471]/10 border border-[#7A8471]/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#9BA392] group-hover:animate-pulse" />
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{signal.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Flow indicator */}
                  <div className="flex justify-center mb-6 sm:mb-10">
                    <motion.div
                      className="flex flex-col items-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#7A8471]/50 to-transparent" />
                      <svg className="w-4 h-4 text-[#9BA392]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16l-6-6h12l-6 6z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Core Engine */}
                  <motion.div
                    className="relative max-w-2xl mx-auto mb-6 sm:mb-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="relative p-6 sm:p-10 rounded-2xl border border-[#7A8471]/30 bg-gradient-to-b from-[#7A8471]/10 to-transparent overflow-hidden">
                      {/* Animated border glow */}
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ 
                            background: "linear-gradient(90deg, transparent, rgba(122,132,113,0.3), transparent)",
                            backgroundSize: "200% 100%",
                          }}
                          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      {/* Grid pattern */}
                      {!isMobile && (
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(155,163,146,1) 1px, transparent 0)`,
                          backgroundSize: '24px 24px'
                        }} />
                      )}

                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center shadow-lg shadow-[#7A8471]/30">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                          </svg>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                          Analysis Core
                        </h3>
                        <p className="text-sm sm:text-base text-foreground-muted mb-4">
                          Çok katmanlı işleme • Gerçek zamanlı analiz • Sürekli öğrenme
                        </p>

                        <div className="flex items-center justify-center gap-4 sm:gap-6">
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#9BA392]">8</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Katman</div>
                          </div>
                          <div className="w-px h-8 bg-white/10" />
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#9BA392]">&lt;1s</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Latency</div>
                          </div>
                          <div className="w-px h-8 bg-white/10" />
                          <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#9BA392]">∞</div>
                            <div className="text-[10px] sm:text-xs text-foreground-subtle uppercase tracking-wide">Adaptif</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Flow indicator */}
                  <div className="flex justify-center mb-6 sm:mb-10">
                    <motion.div
                      className="flex flex-col items-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#7A8471]/50 to-transparent" />
                      <svg className="w-4 h-4 text-[#9BA392]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16l-6-6h12l-6 6z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Output */}
                  <motion.div
                    className="max-w-xl mx-auto p-5 sm:p-8 rounded-xl bg-gradient-to-r from-[#7A8471]/10 via-[#7A8471]/5 to-[#7A8471]/10 border border-[#7A8471]/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Output Ready</span>
                    </div>
                    <p className="text-lg sm:text-xl font-semibold text-foreground">
                      Sana özel, benzersiz profil
                    </p>
                    <p className="text-sm text-foreground-muted mt-1">
                      Kimseninkine benzemeyen, sadece sana ait içgörüler
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Capabilities */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ne yapabilir?
              </h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Yılların araştırması, tek bir sistemde.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {CAPABILITIES.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#7A8471]/30 transition-all duration-300"
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -3 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#7A8471]/10 border border-[#7A8471]/20 flex items-center justify-center text-[#9BA392] mb-4 group-hover:bg-[#7A8471]/15 transition-colors">
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

        {/* Quote / Philosophy */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div
              className="text-center py-12 sm:py-20"
              {...fadeInUp()}
            >
              <div className="text-4xl sm:text-5xl mb-6 opacity-20">&ldquo;</div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
                Teknoloji insanı anlamalı,
                <br />
                <span className="text-[#9BA392]">insan teknolojiyi değil.</span>
              </p>
              <p className="text-sm text-foreground-subtle">
                — HAE Felsefesi
              </p>
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
                  className="group px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#7A8471]/30 transition-all duration-300"
                >
                  <span className="text-xl font-semibold text-foreground group-hover:text-[#9BA392] transition-colors">
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
