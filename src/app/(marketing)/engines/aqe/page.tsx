"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, QuestionPulseAnimation, AQELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const CAPABILITIES = [
  {
    title: "Adaptive Routing Engine",
    description: "Her yanıt yüzlerce koşul kuralını tetikler. Akış gerçek zamanlı yeniden hesaplanır.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Entropy Minimization",
    description: "Her soru bilgi kazancını maksimize eder. Gereksiz soru yok, her yanıt bir karar besler.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Context-Aware Selection",
    description: "Yaş, cinsiyet, yaşam koşulları — yüzlerce koşullu soru. Her birey için farklı derinleşme.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "AI Pipeline Fusion",
    description: "Çıktılar doğrudan çok katmanlı analiz pipeline'ına akar. Tek istek, tam analiz, AI-generated rapor.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const QUESTION_TIERS = [
  { 
    name: "Core Layer", 
    count: "L1",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    dotColor: "bg-emerald-400"
  },
  { 
    name: "Routing Layer", 
    count: "L2",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    dotColor: "bg-violet-400"
  },
  { 
    name: "Deep Dive Layer", 
    count: "L3",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    dotColor: "bg-amber-400"
  },
];

const FLOW_STEPS = [
  { label: "Profil", sublabel: "Universal baseline" },
  { label: "Core", sublabel: "Temel sinyal toplama" },
  { label: "AI Gate", sublabel: "Coherence + Anomaly" },
  { label: "Route", sublabel: "Havuz aktivasyonu" },
  { label: "Deep Dive", sublabel: "Odaklı keşif" },
  { label: "Pipeline", sublabel: "HAE + AI Rapor" },
];

const STATS = [
  { value: "∞", label: "Soru Akışı", desc: "Sonsuz kombinasyon" },
  { value: "3.500+", label: "Soru Kütüphanesi", desc: "Klinik tasarımlı" },
  { value: "<0.5sn", label: "Yanıt Süresi", desc: "Gerçek zamanlı" },
  { value: "1B+", label: "Benzersiz Yol", desc: "Aynı test yok" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Profil Oluşturma", desc: "Demografik, yaşamsal ve biyometrik veriler toplanır. Hiçbir ön bilgi olmadan universal baseline oluşturulur." },
  { step: "02", title: "Adaptive Routing", desc: "Yüzlerce koşul kuralı, çoklu severity band. Yanıtlarına göre benzersiz derinleşme yolu açılır." },
  { step: "03", title: "Deep Exploration", desc: "Binlerce sorudan seçilen optimal set ile derinleşme. Anchor-first, severity-matched, priority-sorted algoritma." },
  { step: "04", title: "AI Pipeline Trigger", desc: "Çok katmanlı analiz pipeline'ı otomatik tetiklenir. Deterministik kurallar + çoklu AI doğrulama. Profesyonel rapor." },
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
              <div className="mb-6 flex items-center justify-center gap-2 text-xs text-foreground-muted sm:mb-8 sm:text-sm">
                <Link href="/engines" className="hover:text-foreground transition-colors">Engines</Link>
                <span className="text-foreground-subtle">/</span>
                <span className="text-violet-400">AQE</span>
              </div>

              <QuestionPulseAnimation size="lg" className="mx-auto mb-4" animate={!isMobile} />

              <AQELogo size="lg" className="mb-4" />

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">Adaptive Question Engine</p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Her kullanıcıya{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  farklı bir yol
                </span>
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Deterministik algoritmalar ve yapay zeka birlikte çalışır.
                %95 daha düşük maliyetle, daha yüksek doğruluk.
                Hiç kimse aynı testi almaz.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-sm font-mono text-violet-400">Production Ready</span>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-8 sm:py-12 relative">
          <Container>
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-violet-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground-muted">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Flow Visualization */}
        <section className="section-padding relative">
          <Container>
            <motion.div {...fadeInUp()}>
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0a0a0c] overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3 sm:px-6 sm:py-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="order-3 flex w-full justify-start sm:order-none sm:w-auto sm:flex-1 sm:justify-center">
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">aqe.flow.engine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-xs font-mono text-violet-400/80">running</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14">
                  {/* Flow Steps */}
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Akış Süreci</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="relative">
                      <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20 hidden sm:block" />
                      
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
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

                  {/* Question Tiers */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Soru Katmanları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {QUESTION_TIERS.map((tier, index) => (
                        <motion.div
                          key={tier.name}
                          className={`rounded-xl border bg-gradient-to-b p-2.5 sm:p-5 ${tier.color} ${tier.borderColor}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${tier.dotColor} flex-shrink-0`} />
                            <span className="text-[10px] sm:text-sm font-semibold text-foreground truncate">{tier.name}</span>
                            <span className="text-[9px] sm:text-xs font-mono text-foreground-muted ml-auto flex-shrink-0">{tier.count}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI Gate Layer */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">AI Doğrulama Katmanı</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <motion.div
                        className="relative rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-4 sm:p-6 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {!isMobile && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)", backgroundSize: "200% 100%" }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-[9px] sm:text-xs font-mono text-amber-400 uppercase tracking-wider">AI Layer</span>
                          </div>
                          <h4 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2">Coherence Shield</h4>
                          <p className="text-[10px] sm:text-sm text-foreground-muted leading-relaxed">Tutarlılık kontrolü. Çelişen yanıtları tespit eder, eksik havuzları açar, yanlış yönlendirmeleri düzeltir.</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative rounded-xl border border-rose-500/30 bg-gradient-to-b from-rose-500/10 to-transparent p-4 sm:p-6 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {!isMobile && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.15), transparent)", backgroundSize: "200% 100%" }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                          />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-[9px] sm:text-xs font-mono text-rose-400 uppercase tracking-wider">AI Layer</span>
                          </div>
                          <h4 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2">Anomaly Interceptor</h4>
                          <p className="text-[10px] sm:text-sm text-foreground-muted leading-relaxed">Tutarsızlık tespiti. Sinyal çelişkilerini yakalar, doğrulama soruları enjekte eder, hata payını minimize eder.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Core */}
                  <motion.div
                    className="relative max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="relative p-6 sm:p-8 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent overflow-hidden">
                      {!isMobile && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)", backgroundSize: "200% 100%" }}
                          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      <div className="relative z-10 text-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Routing Kernel</h3>
                        <p className="text-sm text-foreground-muted mb-4">AI doğrulamasından geçen verilerle optimal yol hesaplanır. Entropy minimization + probabilistic routing.</p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-foreground-muted">Minimum soru</span>
                          </div>
                          <span className="text-foreground-subtle">•</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-violet-400" />
                            <span className="text-foreground-muted">Maksimum bilgi</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* How it works */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Nasıl Çalışır?</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Her adım bir sonrakini şekillendirir. Algoritma + AI, birlikte.
              </p>
            </motion.div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-1 sm:gap-0 sm:space-y-6">
              {HOW_IT_WORKS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-1.5 sm:gap-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 sm:border-0 sm:bg-transparent sm:p-0 sm:rounded-none"
                  {...fadeInUp(index * 0.1)}
                >
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] sm:text-base font-mono font-bold text-violet-400">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-[11px] sm:text-lg font-semibold text-foreground sm:mb-1">{item.title}</h3>
                    <p className="hidden sm:block text-base text-foreground-muted leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Capabilities */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Temel Yetenekler</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">Sadece AI değil. Sadece algoritma değil. İkisinin gücü, birlikte.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {CAPABILITIES.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-violet-500/30 sm:rounded-2xl sm:p-8"
                  {...fadeInUp(index * 0.1)}
                  whileHover={isMobile ? {} : { y: -3 }}
                >
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-2 sm:mb-4 group-hover:bg-violet-500/15 transition-colors [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">{cap.title}</h3>
                  <p className="text-[10px] sm:text-base text-foreground-muted leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Integration */}
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
                <div className="mb-6 flex flex-row items-center justify-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">AQE</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="text-[9px] sm:text-[10px] text-foreground-subtle">veri akışı</span>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">HAE</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Hybrid Intelligence</h3>
                <p className="text-foreground-muted max-w-md mx-auto mb-6">
                  Neden sadece AI değil? Yüksek hata payı ve yoğun maliyet.
                  Deterministik algoritmalar hassasiyeti sağlar, AI derinliği katar.
                  Sonuç: %95 daha düşük maliyet, daha yüksek doğruluk.
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
              <Link href="/products/moodumuz" className="group inline-block px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300">
                <span className="text-xl font-semibold text-foreground group-hover:text-violet-400 transition-colors">Moodumuz</span>
                <p className="text-sm text-foreground-muted mt-1">Döngü & Ruh Hali Takibi</p>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Back */}
        <section className="pb-12 sm:pb-20">
          <Container>
            <div className="flex justify-center">
              <Link href="/engines" className="text-brand-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base py-2">
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
