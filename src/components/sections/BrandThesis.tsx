"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "@/components/ui";
import { PRINCIPLES } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useIsMobile";

export function BrandThesis() {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.06 : 0.12,
        delayChildren: isMobile ? 0.05 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 40, rotateX: isMobile ? 0 : -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: isMobile 
        ? { duration: 0.25 }
        : { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="section-padding relative" id="thesis">
      <Container className="relative z-10">
        <SectionHeader
          title="Her ürün bir akışı"
          titleHighlight="sadeleştirir."
          description="Orbira Labs, gerçek ihtiyaçları basit ve akıcı dijital deneyimlere dönüştürür. Karmaşıklığı filtreler, özü ortaya çıkarırız."
        />

        <motion.div 
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              className="group touch-highlight"
            >
              <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
                {/* Background glow — mobilde statik, desktop'ta animasyonlu */}
                {isMobile ? (
                  <div 
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${principle.gradient} opacity-10 blur-2xl`}
                  />
                ) : (
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${principle.gradient} opacity-10 blur-3xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                
                <div className="relative flex flex-col h-full">
                  {/* Animated Icon */}
                  <motion.div 
                    className={`mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-white shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {principle.icon}
                  </motion.div>
                  
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
        </motion.div>
      </Container>
    </section>
  );
}
