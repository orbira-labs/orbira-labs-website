"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/ui";
import { PROCESS_STEPS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Approach() {
  const isMobile = useIsMobile();

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 12 : 40, scale: isMobile ? 1 : 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: isMobile
        ? { duration: 0.2, delay: i * 0.05 }
        : { type: "spring" as const, stiffness: 80, damping: 15, delay: i * 0.15 },
    }),
  };

  return (
    <section className="section-padding relative" id="approach">
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
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={isMobile ? {} : { y: -8, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Connection line - desktop only */}
              {index < PROCESS_STEPS.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  style={{ originX: 0 }}
                />
              )}
              
              <div className="relative bg-background-secondary rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-border h-full transition-all duration-300 hover:border-border-hover hover:shadow-lg hover:shadow-brand-primary/5 touch-highlight">
                {/* Step number with glow */}
                <motion.div 
                  className="mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground-subtle/30"
                  whileHover={{ scale: 1.1, color: "rgba(99, 102, 241, 0.4)" }}
                  transition={{ duration: 0.2 }}
                >
                  {step.step}
                </motion.div>
                
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
