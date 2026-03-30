"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const HAE_DATA = {
  name: "Human Analysis Engine",
  shortName: "HAE",
  version: "3.0",
  tagline: "İnsanı anlamak için tasarlandı",
  description: `HAE, biyolojik sinyaller, davranış kalıpları ve psikolojik profilleri birleştiren 
    çok katmanlı bir insan analiz motorudur. Hibrit AI-Algoritma mimarisi ile hem hız hem de 
    doğruluk sağlar.`,
  color: "from-[#7A8471] to-[#5C6455]",
  borderColor: "border-[#7A8471]/30",
  stats: [
    { label: "Trait Tanımı", value: "250+" },
    { label: "Pattern", value: "150+" },
    { label: "Analiz Süresi", value: "<1s" },
    { label: "Doğruluk", value: "~95%" },
  ],
};

const ARCHITECTURE_LAYERS = [
  {
    name: "Layer 0: Fact Extraction",
    description: "Ham kullanıcı verilerini yapılandırılmış fact'lere dönüştürür",
    color: "from-slate-500 to-slate-600",
    icon: "📥",
  },
  {
    name: "Layer 1: Parallel Branch Analysis",
    description: "Physical, Psychological ve Behavioral branch'lerde eşzamanlı analiz",
    color: "from-violet-500 to-violet-600",
    icon: "🔀",
    subItems: [
      { name: "Physical Branch", desc: "Beden, uyku, hareket" },
      { name: "Psychological Branch", desc: "Zihin, karakter, duygular" },
      { name: "Behavioral Branch", desc: "Beslenme, sosyal, yaşam tarzı" },
    ],
  },
  {
    name: "Layer 2: AI Trait Enrichment",
    description: "Her branch'te AI ile trait zenginleştirme",
    color: "from-emerald-500 to-emerald-600",
    icon: "🤖",
  },
  {
    name: "Layer 3: Signal Calculation",
    description: "Trait'lerden türetilmiş composite signal'ler",
    color: "from-amber-500 to-amber-600",
    icon: "📊",
  },
  {
    name: "Layer 4: Cross-Branch Synthesis",
    description: "Branch'ler arası pattern eşleştirme ve AI pattern keşfi",
    color: "from-rose-500 to-rose-600",
    icon: "🔗",
  },
  {
    name: "Layer 5: Causal Inference",
    description: "Neden-sonuç ilişkileri ve kök neden analizi",
    color: "from-cyan-500 to-cyan-600",
    icon: "🔍",
  },
  {
    name: "Layer 6: Risk Assessment",
    description: "Algo + AI risk birleştirme ve kritik durum tespiti",
    color: "from-red-500 to-red-600",
    icon: "⚠️",
  },
  {
    name: "Layer 7: Profile Composition",
    description: "Zengin HumanProfileV3 çıktısı ve açıklanabilir rapor",
    color: "from-indigo-500 to-indigo-600",
    icon: "👤",
  },
];

const CORE_CAPABILITIES = [
  {
    title: "Multi-Branch Analysis",
    description: "Paralel çalışan 3 branch ile fiziksel, psikolojik ve davranışsal analiz",
    icon: "🌿",
  },
  {
    title: "Hybrid AI-Algo",
    description: "Deterministik algoritma güvenilirliği + AI esnekliği birlikte",
    icon: "⚡",
  },
  {
    title: "Causal Chains",
    description: "Davranış → Duygu → Kişilik → Temel yapı nedensel zincirleri",
    icon: "🔗",
  },
  {
    title: "Consistency Check",
    description: "Tutarsızlık tespiti ve öz-farkındalık tahmini",
    icon: "✓",
  },
  {
    title: "Risk Assessment",
    description: "Kritik durumlar için otomatik risk değerlendirmesi",
    icon: "🛡️",
  },
  {
    title: "Explainable Output",
    description: "Her trait ve pattern için kanıt zinciri",
    icon: "📋",
  },
];

const DOMAINS = [
  { name: "Physical", count: 45, color: "bg-emerald-500" },
  { name: "Mental", count: 38, color: "bg-violet-500" },
  { name: "Emotional", count: 25, color: "bg-rose-500" },
  { name: "Social", count: 22, color: "bg-cyan-500" },
  { name: "Behavioral", count: 30, color: "bg-amber-500" },
  { name: "Lifestyle", count: 20, color: "bg-indigo-500" },
  { name: "Coping", count: 20, color: "bg-teal-500" },
  { name: "Attachment", count: 18, color: "bg-pink-500" },
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

          <Container>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-foreground-muted mb-6">
                <Link href="/engines" className="hover:text-foreground transition-colors">
                  Engines
                </Link>
                <span>/</span>
                <span className="text-foreground">HAE</span>
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${HAE_DATA.color} flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      {HAE_DATA.shortName}
                    </h1>
                    <span className="text-xs sm:text-sm font-mono text-foreground-subtle bg-white/5 px-2 py-1 rounded">
                      v{HAE_DATA.version}
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400">active</span>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-foreground-muted">
                    {HAE_DATA.name}
                  </p>
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                {HAE_DATA.tagline}
              </p>
              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                {HAE_DATA.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {HAE_DATA.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    {...fadeInUp(index * 0.05)}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground-muted">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Architecture */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-foreground-subtle">
                  Mimari
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                8 Katmanlı Pipeline
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Her katman bir öncekinin çıktısını alır ve zenginleştirir
              </p>
            </motion.div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {ARCHITECTURE_LAYERS.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  className="relative"
                  {...fadeInUp(index * 0.05)}
                >
                  <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${layer.color}/10 border border-white/[0.06] hover:border-white/[0.12] transition-colors`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-lg sm:text-xl">{layer.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                          {layer.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-foreground-muted">
                          {layer.description}
                        </p>
                        {layer.subItems && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {layer.subItems.map((sub) => (
                              <div
                                key={sub.name}
                                className="px-2 py-1 rounded-md bg-white/5 text-xs text-foreground-muted"
                              >
                                <span className="font-medium text-foreground">{sub.name}</span>
                                <span className="mx-1">·</span>
                                <span>{sub.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < ARCHITECTURE_LAYERS.length - 1 && (
                    <div className="flex justify-center my-2">
                      <svg className="w-4 h-4 text-foreground-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Core Capabilities */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/5 to-transparent pointer-events-none" />
          <Container>
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Temel Yetenekler
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CORE_CAPABILITIES.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  {...fadeInUp(index * 0.05)}
                >
                  <div className="text-2xl sm:text-3xl mb-3">{cap.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Domain Coverage */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center mb-8" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Domain Kapsamı
              </h2>
              <p className="text-foreground-muted">
                250+ trait, 8 farklı domain&apos;de kategorize edilmiş
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              {...fadeInUp(0.1)}
            >
              {DOMAINS.map((domain) => (
                <div
                  key={domain.name}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                >
                  <div className={`w-3 h-3 rounded-full ${domain.color} mx-auto mb-2`} />
                  <div className="text-lg sm:text-xl font-bold text-foreground">
                    {domain.count}
                  </div>
                  <div className="text-xs text-foreground-muted">{domain.name}</div>
                </div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Used In */}
        <section className="section-padding relative">
          <Container size="narrow">
            <motion.div className="text-center" {...fadeInUp()}>
              <p className="text-sm text-foreground-subtle mb-4">Kullanıldığı Ürünler</p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/products/moodumuz"
                  className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="text-lg font-medium text-foreground">Moodumuz</span>
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
