"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const CAPABILITIES = [
  {
    title: "Dynamic Routing",
    description: "Her yanıt conditional branching tetikler. Question graph, inferred user state vector'lerine göre real-time yeniden şekillenir.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Entropy Minimization",
    description: "Redundant query'ler execution'dan önce prune edilir. Soru başına maksimum information gain. Zamanının bir cost function'ı var.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Context Awareness",
    description: "Sadece yanıt değil, arkasındaki latent context. Aynı response, farklı timestamp — farklı meaning vector.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Cross-Engine Feedback",
    description: "HAE ile tight coupling. Her AQE output'u HAE inference'ı besler. Bidirectional gradient flow. İki motor, tek loss function.",
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
    name: "Base Layer", 
    desc: "Temel query'ler. Profile initialization için universal giriş noktaları.", 
    count: "Tier 1",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    dotColor: "bg-emerald-400"
  },
  { 
    name: "Adaptive Layer", 
    desc: "Response vector'lerine göre conditionally tetiklenir. Dynamic depth expansion.", 
    count: "Tier 2",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    dotColor: "bg-violet-400"
  },
  { 
    name: "Discovery Layer", 
    desc: "Belirli pattern'lar ortaya çıkınca unlock olur. High-signal, low-frequency probe'lar.", 
    count: "Tier 3",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    dotColor: "bg-amber-400"
  },
];

const FLOW_STEPS = [
  { label: "Initialize", sublabel: "Profile seeding" },
  { label: "Adapt", sublabel: "Dinamik yönlendirme" },
  { label: "Explore", sublabel: "Pattern-triggered derinlik" },
  { label: "Converge", sublabel: "Optimal sonlandırma" },
];

const STATS = [
  { value: "Massive", label: "Question Pool", desc: "Kapsamlı query kütüphanesi" },
  { value: "Optimized", label: "Per User", desc: "Pruning sonrası kişiye özel" },
  { value: "3-Tier", label: "Depth", desc: "Base → Adaptive → Discovery" },
  { value: "∞", label: "Paths", desc: "Unique flow kombinasyonları" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Cold Start Protocol", desc: "Universal base query'ler initial state vector'leri oluşturur. Routing kararları için minimum viable profile." },
  { step: "02", title: "Response-Driven Branching", desc: "Her cevap question graph'ı modifiye eder. Response embedding'lerine göre conditional path'ler aktive olur." },
  { step: "03", title: "Pattern-Triggered Expansion", desc: "Latent yapılar tespit edildiğinde, specialized query zincirleri unlock olur. Noise yerine signal." },
  { step: "04", title: "Optimal Stopping", desc: "Information gain threshold'un altına düşer — akış sonlanır. Boşa harcanan query yok. Maksimum extraction efficiency." },
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
              <div className="flex items-center justify-center gap-2 text-sm text-foreground-muted mb-8">
                <Link href="/engines" className="hover:text-foreground transition-colors">Engines</Link>
                <span className="text-foreground-subtle">/</span>
                <span className="text-violet-400">AQE</span>
              </div>

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

              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight">AQE</h1>
                <span className="text-xs sm:text-sm font-mono text-foreground-subtle bg-white/5 px-2 py-1 rounded border border-white/10">v1.0</span>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">Adaptive Question Engine</p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                Sana{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  adapte olan
                </span>{" "}
                sorular.
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Geleneksel anketler herkese aynı soruları sorar. AQE farklı. 
                Yanıtlarına göre yeniden şekillenen dynamic question graph. 
                Redundant path'ler prune edilir. High-signal branch'ler expand edilir. Minimum query, maksimum insight.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
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

                <div className="p-6 sm:p-10 lg:p-14">
                  {/* Flow Steps */}
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Adaptif Akış</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="relative">
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

                  {/* Question Tiers */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Soru Katmanları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {QUESTION_TIERS.map((tier, index) => (
                        <motion.div
                          key={tier.name}
                          className={`p-4 sm:p-5 rounded-xl bg-gradient-to-b ${tier.color} border ${tier.borderColor}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full ${tier.dotColor}`} />
                            <span className="text-sm font-semibold text-foreground">{tier.name}</span>
                            <span className="text-xs font-mono text-foreground-muted ml-auto">{tier.count}</span>
                          </div>
                          <p className="text-xs text-foreground-muted">{tier.desc}</p>
                        </motion.div>
                      ))}
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
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Routing Core</h3>
                        <p className="text-sm text-foreground-muted mb-4">Dynamic query seçimi. Context awareness. Intelligent sonlandırma.</p>
                        
                        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-foreground-muted">Min query</span>
                          </div>
                          <span className="text-foreground-subtle">•</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-violet-400" />
                            <span className="text-foreground-muted">Max signal</span>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Flow Architecture</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">
                Statik anketlerin aksine, AQE her kullanıcı için unique bir path üretir.
              </p>
            </motion.div>

            <div className="space-y-6">
              {HOW_IT_WORKS.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex gap-4 sm:gap-6"
                  {...fadeInUp(index * 0.1)}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-base font-mono font-bold text-violet-400">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-foreground-muted">{item.desc}</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Core Capabilities</h2>
              <p className="text-foreground-muted max-w-xl mx-auto">Geleneksel anketlerin ötesinde. Intelligent query orchestration.</p>
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
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">{cap.description}</p>
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
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold">AQE</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <svg className="w-6 h-6 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="text-[10px] text-foreground-subtle">veri akışı</span>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7A8471] to-[#5C6455] flex items-center justify-center">
                    <span className="text-white font-bold">HAE</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Closed-Loop Integration</h3>
                <p className="text-foreground-muted max-w-md mx-auto mb-4">
                  Her AQE response'u bir HAE input'u olur. Bidirectional data flow. 
                  Tek bir objective function'a doğru optimize eden iki motor.
                </p>
                <p className="text-sm text-foreground-subtle font-mono">
                  query → response → embedding → inference → personalization
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
