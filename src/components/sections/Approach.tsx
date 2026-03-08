"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader, OrbitalBackground } from "@/components/ui";
import { PROCESS_STEPS } from "@/lib/constants";

export function Approach() {
  return (
    <section className="section-padding relative overflow-hidden" id="approach">
      <OrbitalBackground variant="section" />
      
      <Container className="relative z-10">
        <SectionHeader
          tag="Yaklaşım"
          title="Nasıl çalışıyoruz?"
          description="Disiplinli bir ürün laboratuvarı olarak, her adımda düşünülmüş bir sistemle ilerleriz."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connection line - desktop only */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative bg-background-secondary rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border h-full transition-all duration-300 hover:border-border-hover hover:-translate-y-1">
                {/* Step number */}
                <div className="mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground-subtle/30">
                  {step.step}
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 lg:mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs lg:text-sm text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
