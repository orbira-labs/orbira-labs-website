"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, AtomAnimation, HAELogo } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";







const SIGNALS = [
  { label: "Behavioral Signals", delay: 0 },
  { label: "Pattern Memory", delay: 0.1 },
  { label: "Context Graph", delay: 0.2 },
];


const STATS = [
  { value: "3.000+", label: "Parametre", desc: "Psikolojik faktör" },
  { value: "100+", label: "Analiz Boyutu", desc: "Çok boyutlu profil" },
  { value: "<1sn", label: "İşlem Süresi", desc: "Gerçek zamanlı" },
  { value: "~%96", label: "Doğruluk", desc: "AI-validated" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-700/10 pointer-events-none" />
          
          {!isMobile && (
            <>
              <motion.div
                className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
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
              <AtomAnimation size="lg" className="mx-auto mb-4" animate={!isMobile} />

              <HAELogo size="lg" className="mb-4" />

              <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mb-2">Human Analysis Engine</p>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
                İnsanı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400">
                  gerçekten anlayan
                </span>{" "}
                teknoloji.
              </p>

              <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
                Deterministik algoritmalar hassasiyeti sağlar, yapay zeka derinliği katar.
                Sadece AI kullansak: yüksek hata payı, yoğun maliyet. Sadece algoritma kullansak: yüzeysel.
                İkisini birleştirdik. %95 daha düşük maliyetle, daha yüksek doğruluk.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-mono text-emerald-400">Production Ready</span>
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
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-foreground-muted">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Architecture Visualization */}
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
                    <span className="text-xs font-mono text-foreground-subtle tracking-wider">hae.engine.core</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400/80">active</span>
                  </div>
                </div>

                <div className="p-6 sm:p-10 lg:p-14">
                  {/* Input Signals */}
                  <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">Veri Kaynakları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-4">
                      {SIGNALS.map((signal) => (
                        <motion.div
                          key={signal.label}
                          className="group relative min-w-[220px] snap-start rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:min-w-0 sm:p-5"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: signal.delay }}
                          whileHover={isMobile ? {} : { y: -3, borderColor: "rgba(122,132,113,0.3)" }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-pulse" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{signal.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Processing Layers */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-foreground-subtle">İşleme Katmanları</span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    {/* Row 1: Deterministic layers — different colors */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { name: "Signal Normalization", num: 1, border: "border-emerald-500/20", bg: "bg-emerald-500/10", dot: "text-emerald-400" },
                        { name: "Trait Activation", num: 2, border: "border-violet-500/20", bg: "bg-violet-500/10", dot: "text-violet-400" },
                        { name: "Pattern Detection", num: 3, border: "border-cyan-500/20", bg: "bg-cyan-500/10", dot: "text-cyan-400" },
                      ].map((layer, index) => (
                        <motion.div key={layer.name} className={`p-3 sm:p-4 rounded-lg bg-white/[0.02] border ${layer.border} text-center`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
                          <div className={`w-8 h-8 mx-auto mb-2 rounded-full ${layer.bg} border ${layer.border} flex items-center justify-center`}>
                            <span className={`text-xs font-mono ${layer.dot}`}>{layer.num}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{layer.name}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center py-2">
                      <motion.div className="flex flex-col items-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
                        <div className="w-px h-6 bg-gradient-to-b from-cyan-500/40 to-amber-500/40" />
                        <svg className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                      </motion.div>
                    </div>

                    {/* Row 2: AI Triple Validation — no descriptions */}
                    <div className="mb-1">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/20" />
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/60">AI Multi-Perspective Validation</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/20" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { name: "Coherence Gate" },
                          { name: "Coverage Scan" },
                          { name: "Quality Shield" },
                        ].map((layer, index) => (
                          <motion.div key={layer.name} className="relative rounded-xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-transparent p-3 sm:p-5 overflow-hidden text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                            {!isMobile && (
                              <motion.div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)", backgroundSize: "200% 100%" }} animate={{ backgroundPosition: ["200% 0", "-200% 0"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }} />
                            )}
                            <div className="relative z-10">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-[8px] sm:text-[10px] font-mono text-amber-400 uppercase tracking-wider">AI Layer</span>
                              </div>
                              <h4 className="text-xs sm:text-base font-bold text-amber-200">{layer.name}</h4>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center py-2">
                      <motion.div className="flex flex-col items-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                        <div className="w-px h-6 bg-gradient-to-b from-amber-500/40 to-cyan-500/40" />
                        <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                      </motion.div>
                    </div>

                    {/* Row 3: Inference + AI Guard — different colors */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div className="p-3 sm:p-4 rounded-lg bg-white/[0.02] border border-indigo-500/20 text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }}>
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                          <span className="text-xs font-mono text-indigo-400">4</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-foreground">Inference Engine</p>
                      </motion.div>

                      <motion.div className="relative rounded-xl border border-rose-500/30 bg-gradient-to-b from-rose-500/10 to-transparent p-3 sm:p-4 overflow-hidden text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.68 }}>
                        {!isMobile && (
                          <motion.div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.12), transparent)", backgroundSize: "200% 100%" }} animate={{ backgroundPosition: ["200% 0", "-200% 0"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                        )}
                        <div className="relative z-10">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-[8px] sm:text-[10px] font-mono text-rose-400 uppercase tracking-wider">AI Layer</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-rose-300">Inference Guard</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center py-2">
                      <motion.div className="flex flex-col items-center" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                        <div className="w-px h-6 bg-gradient-to-b from-cyan-500/40 to-transparent" />
                        <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                      </motion.div>
                    </div>

                    {/* Row 4: Final — different colors */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Multi-Dim Scoring", num: 5, border: "border-teal-500/20", bg: "bg-teal-500/10", dot: "text-teal-400" },
                        { name: "Profile Synthesis", num: 6, border: "border-purple-500/20", bg: "bg-purple-500/10", dot: "text-purple-400" },
                      ].map((layer, index) => (
                        <motion.div key={layer.name} className={`p-3 sm:p-4 rounded-lg bg-white/[0.02] border ${layer.border} text-center`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.76 + index * 0.08 }}>
                          <div className={`w-8 h-8 mx-auto mb-2 rounded-full ${layer.bg} border ${layer.border} flex items-center justify-center`}>
                            <span className={`text-xs font-mono ${layer.dot}`}>{layer.num}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{layer.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Flow arrow to core */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Core Engine — Premium with AtomAnimation colors */}
                  <motion.div
                    className="relative max-w-2xl mx-auto mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="relative p-8 sm:p-10 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent overflow-hidden">
                      {!isMobile && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)", backgroundSize: "200% 100%" }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{ background: "radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 70%)" }}
                            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </>
                      )}

                      <div className="relative z-10 text-center">
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/40"
                          animate={isMobile ? {} : { boxShadow: ["0 10px 40px rgba(6,182,212,0.3)", "0 10px 60px rgba(6,182,212,0.5)", "0 10px 40px rgba(6,182,212,0.3)"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                            <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                          </svg>
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 mb-2">Synthesis Core</h3>
                        <p className="text-xs sm:text-sm font-mono text-cyan-400/60">HAE v2.0</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Flow */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div className="flex flex-col items-center" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                      <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                    </motion.div>
                  </div>

                  {/* Output */}
                  <motion.div
                    className="max-w-xl mx-auto p-5 sm:p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 border border-cyan-500/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Output Ready</span>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-foreground mb-1">Çok Boyutlu Bireysel Profil</p>
                    <p className="text-sm text-foreground-muted">Karakter analizi. Gizli dinamikler. Profesyonel yol haritası.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* What You Get */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />
          
          <Container>
            <motion.div className="text-center mb-10 sm:mb-14" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Ne Elde Edersiniz?</h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Danışanınızın doldurduğu sorular, çok katmanlı analizden geçer. 
                Çıktı olarak elinize profesyonel bir rapor ve görsel veriler gelir.
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Karakter Analizi",
                  desc: "Danışanınızın psikolojik profilini çizen bütüncül bir metin. İç dinamikleri, davranış kalıpları ve gizli çelişkileri bir bütün olarak anlatır. Seanstan önce okuyun, danışanınızı tanıyın.",
                  color: "border-cyan-500/20",
                  iconBg: "bg-cyan-500/10",
                  iconColor: "text-cyan-400",
                  icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /></>,
                },
                {
                  title: "Güçlü ve Zayıf Yanlar",
                  desc: "En belirgin 5 güçlü özellik ve 5 gelişim alanı. Her biri için kısa açıklama. Danışanınızla neyi konuşacağınızı bilirsiniz.",
                  color: "border-emerald-500/20",
                  iconBg: "bg-emerald-500/10",
                  iconColor: "text-emerald-400",
                  icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
                },
                {
                  title: "Farkında Olmadığı Dinamikler",
                  desc: "Danışanınızın muhtemelen göremediği döngüler, çelişkiler ve gizli güçler. \"Uyku bozukluğunuz aslında stres değil, iş-yaşam dengesizliğinden kaynaklanıyor\" gibi içgörüler.",
                  color: "border-amber-500/20",
                  iconBg: "bg-amber-500/10",
                  iconColor: "text-amber-400",
                  icon: <><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></>,
                },
                {
                  title: "Koçluk Yol Haritası",
                  desc: "Acil, kısa ve orta vadeli somut adımlar. Nereden başlayacağınız, hangi tekniği kullanacağınız, hangi sırayla ilerleyeceğiniz. Hemen uygulamaya başlayabilirsiniz.",
                  color: "border-violet-500/20",
                  iconBg: "bg-violet-500/10",
                  iconColor: "text-violet-400",
                  icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
                },
                {
                  title: "Çok Boyutlu Puanlama",
                  desc: "Her yaşam alanı ayrı ayrı puanlanır. Stres yönetimi, uyku, duygusal denge, enerji, sosyal bağlantı, öz-bakım, beslenme, iş-yaşam dengesi ve daha fazlası. Görsel dashboard ile takip edin.",
                  color: "border-rose-500/20",
                  iconBg: "bg-rose-500/10",
                  iconColor: "text-rose-400",
                  icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`group flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl border ${item.color} bg-white/[0.02] p-4 sm:p-6 transition-all duration-300 hover:bg-white/[0.04]`}
                  {...fadeInUp(index * 0.08)}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.iconBg} border ${item.color} flex items-center justify-center ${item.iconColor} flex-shrink-0`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-base text-foreground-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Quote */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center py-8 sm:py-12" {...fadeInUp()}>
              <div className="text-4xl sm:text-5xl mb-6 opacity-20">&ldquo;</div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
                Veriyi analiz etmek kolay.<br />
                <span className="text-cyan-400">İnsanı anlamak zor. Biz ikincisini seçtik.</span>
              </p>
              <p className="text-sm text-foreground-subtle">— HAE Felsefesi</p>
            </motion.div>
          </Container>
        </section>

        {/* Used In */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center" {...fadeInUp()}>
              <p className="text-sm text-foreground-subtle mb-4">Şu anda kullanılıyor</p>
              <Link href="/products/moodumuz" className="group inline-block px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <span className="text-xl font-semibold text-foreground group-hover:text-cyan-400 transition-colors">Moodumuz</span>
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
