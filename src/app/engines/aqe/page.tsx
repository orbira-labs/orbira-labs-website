"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Header, Footer } from "@/components/sections";
import { useIsMobile } from "@/hooks/useIsMobile";

const AQE_DATA = {
  name: "Adaptive Question Engine",
  shortName: "AQE",
  version: "1.0",
  tagline: "Her kullanıcıya özel, akıllı soru akışı",
  description: `AQE, 200+ soru havuzundan kullanıcıya en uygun 80-120 soruyu dinamik olarak seçen 
    akıllı bir soru motorudur. Domain kapsama, trait beslemesi ve kullanıcı yanıtlarına göre 
    gerçek zamanlı adaptasyon sağlar.`,
  color: "from-violet-500 to-indigo-600",
  borderColor: "border-violet-500/30",
  stats: [
    { label: "Soru Havuzu", value: "200+" },
    { label: "Hedef Soru", value: "80-120" },
    { label: "Domain", value: "12" },
    { label: "Tier", value: "3" },
  ],
};

const QUESTION_TIERS = [
  {
    name: "Core Questions",
    count: "~50",
    description: "Her kullanıcıya sorulan temel sorular. Demografik, sağlık temeli ve kritik bilgiler.",
    color: "from-emerald-500 to-emerald-600",
    icon: "🎯",
    examples: ["Yaş", "Uyku kalitesi", "Enerji seviyesi", "Stres düzeyi"],
  },
  {
    name: "Adaptive Questions",
    count: "~80",
    description: "Önceki yanıtlara göre tetiklenen koşullu sorular. Domain boşluklarını doldurur.",
    color: "from-violet-500 to-violet-600",
    icon: "🔄",
    examples: ["Nörodiversite", "Bakıcı stresi", "Finansal derinleştirme"],
  },
  {
    name: "Deep-Dive Questions",
    count: "~70",
    description: "Belirli pattern'ler tespit edildiğinde derinleşen zincir sorular.",
    color: "from-amber-500 to-amber-600",
    icon: "🔍",
    examples: ["Düşük ruh hali zinciri", "Yas süreci", "Yeme ilişkisi"],
  },
];

const CORE_COMPONENTS = [
  {
    name: "SmartQuestion",
    description: "Zengin soru modeli: tier, domain bağlantısı, trait beslemesi, koşullu gösterim",
    icon: "❓",
  },
  {
    name: "TriggerCondition",
    description: "Gelişmiş koşul sistemi: AND/OR/NOT, slider aralıkları, çoklu seçim",
    icon: "🔀",
  },
  {
    name: "DomainCoverageTracker",
    description: "Her domain için min/max soru takibi ve saturasyon kontrolü",
    icon: "📊",
  },
  {
    name: "QuestionTraitMapper",
    description: "Sorular ile HAE trait'leri arasındaki bağlantıyı yönetir",
    icon: "🗺️",
  },
  {
    name: "AdaptiveQuestionSelector",
    description: "Bir sonraki optimal soruyu seçen akıllı algoritma",
    icon: "🎲",
  },
  {
    name: "StoppingRules",
    description: "Ne zaman soru sormayı durduracağını belirleyen kurallar",
    icon: "🛑",
  },
];

const SELECTION_FACTORS = [
  {
    name: "Base Priority",
    weight: "30%",
    description: "Sorunun temel öncelik puanı",
  },
  {
    name: "Tier Bonus",
    weight: "20%",
    description: "Core > Adaptive > DeepDive sıralaması",
  },
  {
    name: "Domain Need",
    weight: "25%",
    description: "Yetersiz kapsanan domain'lere bonus",
  },
  {
    name: "Trait Richness",
    weight: "15%",
    description: "Daha fazla trait besleyen sorulara bonus",
  },
  {
    name: "Information Weight",
    weight: "10%",
    description: "Sorunun bilgi değeri",
  },
];

const HAE_INTEGRATION = [
  {
    title: "Fact Path Mapping",
    description: "Her soru, HAE fact path'lerine otomatik bağlanır (örn: body.energy_level)",
    icon: "🔗",
  },
  {
    title: "Trait Feeding",
    description: "Sorular, hangi HAE trait'lerini besleyeceğini bilir",
    icon: "🌱",
  },
  {
    title: "Domain Alignment",
    description: "AQE domain'leri HAE AnalysisDomain'leri ile senkron",
    icon: "🎯",
  },
  {
    title: "Condition Sharing",
    description: "HAE Condition sistemi AQE TriggerCondition ile uyumlu",
    icon: "⚙️",
  },
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
                <span className="text-foreground">AQE</span>
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${AQE_DATA.color} flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      {AQE_DATA.shortName}
                    </h1>
                    <span className="text-xs sm:text-sm font-mono text-foreground-subtle bg-white/5 px-2 py-1 rounded">
                      v{AQE_DATA.version}
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400">active</span>
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-foreground-muted">
                    {AQE_DATA.name}
                  </p>
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                {AQE_DATA.tagline}
              </p>
              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                {AQE_DATA.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {AQE_DATA.stats.map((stat, index) => (
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

        {/* Question Tiers */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-foreground-subtle">
                  Soru Katmanları
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                3 Tier Sistemi
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Sorular öncelik ve amacına göre katmanlara ayrılır
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {QUESTION_TIERS.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${tier.color}/10 border border-white/[0.06] hover:border-white/[0.12] transition-colors`}
                  {...fadeInUp(index * 0.1)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <span className="text-xl">{tier.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {tier.name}
                      </h3>
                      <span className="text-sm text-foreground-muted">{tier.count} soru</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                    {tier.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tier.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-foreground-subtle"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Selection Algorithm */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
          <Container size="narrow">
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Akıllı Seçim Algoritması
              </h2>
              <p className="text-foreground-muted">
                Her soru için hesaplanan ağırlıklı skor
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              {...fadeInUp(0.1)}
            >
              <div className="space-y-4">
                {SELECTION_FACTORS.map((factor, index) => (
                  <div key={factor.name} className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-lg font-bold text-violet-400">{factor.weight}</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: factor.weight }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                    <div className="w-48">
                      <p className="text-sm font-medium text-foreground">{factor.name}</p>
                      <p className="text-xs text-foreground-muted">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Core Components */}
        <section className="section-padding relative">
          <Container>
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Temel Bileşenler
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CORE_COMPONENTS.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  {...fadeInUp(index * 0.05)}
                >
                  <div className="text-2xl sm:text-3xl mb-3">{comp.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 font-mono">
                    {comp.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {comp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* HAE Integration */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A8471]/5 to-transparent pointer-events-none" />
          <Container size="narrow">
            <motion.div className="text-center mb-12" {...fadeInUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-foreground-subtle">
                  Entegrasyon
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                HAE ile Tam Uyum
              </h2>
              <p className="text-foreground-muted">
                AQE, HAE&apos;nin ihtiyaç duyduğu veriyi optimal şekilde toplar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HAE_INTEGRATION.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-5 rounded-xl bg-gradient-to-br from-[#7A8471]/10 to-violet-500/10 border border-white/[0.06]"
                  {...fadeInUp(index * 0.1)}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Flow Diagram */}
            <motion.div
              className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              {...fadeInUp(0.2)}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="px-4 py-2 rounded-lg bg-violet-500/20 border border-violet-500/30">
                  <span className="text-sm font-medium text-violet-300">AQE</span>
                  <p className="text-xs text-foreground-muted">Soru Seçimi</p>
                </div>
                <svg className="w-6 h-6 text-foreground-subtle rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                  <span className="text-sm font-medium text-foreground">User</span>
                  <p className="text-xs text-foreground-muted">Yanıtlar</p>
                </div>
                <svg className="w-6 h-6 text-foreground-subtle rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="px-4 py-2 rounded-lg bg-[#7A8471]/20 border border-[#7A8471]/30">
                  <span className="text-sm font-medium text-[#9CAF88]">HAE</span>
                  <p className="text-xs text-foreground-muted">Analiz</p>
                </div>
              </div>
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
