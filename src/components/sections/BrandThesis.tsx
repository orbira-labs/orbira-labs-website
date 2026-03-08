"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/ui";
import { PRINCIPLES } from "@/lib/constants";

export function BrandThesis() {
  return (
    <section className="section-padding relative" id="thesis">
      <Container>
        <SectionHeader
          title="Her ürün bir akışı"
          titleHighlight="sadeleştirir."
          description="Orbira Labs, gerçek ihtiyaçları basit ve akıcı dijital deneyimlere dönüştürür. Karmaşıklığı filtreler, özü ortaya çıkarırız."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                {/* Background glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${principle.gradient} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative flex flex-col h-full">
                  {/* Icon */}
                  <div className={`mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-white shadow-lg`}>
                    {principle.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-foreground-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
