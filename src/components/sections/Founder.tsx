"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, SectionHeader, Card } from "@/components/ui";
import { FOUNDER } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Founder() {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative" id="about">
      <Container>
        <SectionHeader
          tag="Kurucu"
          title="Marka arkasındaki"
          titleHighlight="insan."
        />

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <Card variant="glass" className="overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Left: Portrait + Name */}
              <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 w-full lg:w-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative lg:mb-3 ring-2 ring-white/10 flex-shrink-0">
                  <Image
                    src={FOUNDER.image}
                    alt={FOUNDER.name}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left lg:text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                    {FOUNDER.name}
                  </h3>
                  <p className="text-brand-primary font-medium text-xs sm:text-sm">
                    {FOUNDER.role}
                  </p>
                </div>
              </div>

              {/* Right: Experience Grid */}
              <div className="flex-1 w-full">
                <h4 className="text-xs font-medium text-foreground-subtle uppercase tracking-wider mb-3 sm:mb-4 text-center lg:text-left">
                  Global Deneyim
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                  {FOUNDER.experience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-border transition-all duration-300 hover:border-brand-primary/50 hover:bg-white/10 hover:-translate-y-1"
                      initial={{ opacity: 0, y: isMobile ? 8 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: isMobile ? 0.2 : 0.4, delay: isMobile ? index * 0.03 : index * 0.08 }}
                    >
                      <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                        <span className="text-sm sm:text-base font-semibold text-foreground">
                          {exp.company}
                        </span>
                        <span className="text-xs sm:text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                          {exp.flag}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-foreground-subtle leading-tight">
                        {exp.domain}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
