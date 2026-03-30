"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui";
import { useIsMobile } from "@/hooks/useIsMobile";

const ENGINES = [
  {
    id: "hae",
    name: "Human Analysis Engine",
    shortName: "HAE",
    tagline: "İnsanı anlamak için tasarlandı",
    description:
      "Biyolojik sinyaller, davranış kalıpları ve psikolojik profilleri birleştiren çok katmanlı analiz mimarisi.",
    status: "active",
    version: "3.0",
    color: "from-[#7A8471] to-[#5C6455]",
    borderColor: "border-[#7A8471]/20 hover:border-[#7A8471]/40",
    bgColor: "from-[#7A8471]/5 to-[#5C6455]/5",
    iconBg: "bg-gradient-to-br from-[#7A8471] to-[#5C6455]",
    specs: [
      { label: "Katman", value: "8" },
      { label: "Trait", value: "250+" },
    ],
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "aqe",
    name: "Adaptive Question Engine",
    shortName: "AQE",
    tagline: "Akıllı soru akışı",
    description:
      "200+ soru havuzundan kullanıcıya en uygun 80-120 soruyu dinamik olarak seçen akıllı soru motoru.",
    status: "active",
    version: "1.0",
    color: "from-violet-500 to-indigo-600",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    bgColor: "from-violet-500/5 to-indigo-500/5",
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-600",
    specs: [
      { label: "Havuz", value: "200+" },
      { label: "Hedef", value: "80-120" },
    ],
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function Engines() {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative" id="engines">
      <Container className="relative z-10">
        <SectionHeader
          tag="Teknoloji"
          title="Engines"
          description="Ürünlerimize güç veren, insan odaklı yapay zeka motorlarımız."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ENGINES.map((engine, index) => (
            <motion.div
              key={engine.id}
              initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: isMobile ? 0.2 : 0.4, delay: index * 0.1 }}
            >
              <Link href={`/engines/${engine.id}`}>
                <motion.div
                  className={`group relative h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${engine.bgColor} border ${engine.borderColor} overflow-hidden transition-all duration-300`}
                  whileHover={isMobile ? {} : { y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Subtle glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${engine.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${engine.iconBg} flex items-center justify-center shadow-lg`}>
                          {engine.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <h3 className="text-base sm:text-lg font-bold text-foreground">
                              {engine.shortName}
                            </h3>
                            <span className="text-[9px] sm:text-[10px] font-mono text-foreground-subtle bg-white/5 px-1 py-0.5 rounded">
                              v{engine.version}
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-xs text-foreground-muted">
                            {engine.name}
                          </p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[8px] sm:text-[10px] font-mono text-emerald-400">
                          {engine.status}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {engine.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex gap-3 sm:gap-4">
                        {engine.specs.map((spec) => (
                          <div key={spec.label} className="flex items-center gap-1">
                            <span className="text-[9px] sm:text-[10px] font-mono text-foreground-subtle uppercase">
                              {spec.label}
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono text-foreground font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-foreground-muted group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            className="relative h-full min-h-[160px] sm:min-h-[200px] p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] border-dashed flex items-center justify-center"
            initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.2 : 0.4, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-foreground-subtle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                  <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground-muted mb-0.5">
                Yeni motorlar
              </p>
              <p className="text-[10px] sm:text-xs text-foreground-subtle">
                Yakında...
              </p>
            </div>
          </motion.div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.2 : 0.4, delay: 0.3 }}
            className="flex items-center justify-center sm:col-span-1 lg:col-span-1"
          >
            <Link
              href="/engines"
              className="group inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors duration-300"
            >
              <span>Tümünü gör</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
