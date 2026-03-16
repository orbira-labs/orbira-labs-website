"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, SectionHeader, Card, Badge, OrbitalBackground } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProductEcosystem() {
  return (
    <section className="section-padding relative overflow-hidden" id="products">
      <OrbitalBackground variant="subtle" />
      
      <Container className="relative z-10">
        <SectionHeader
          tag="Product Ecosystem"
          title="Bir marka sistemi içinde"
          titleHighlight="çoklu ürün."
          description="Her ürün, düşünülmüş bir ekosistem içinde kendi değerini taşır. Farklı kategorilerde, tutarlı bir deneyim."
        />

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="touch-highlight"
            >
              <Card 
                variant={product.status === "live" ? "featured" : "default"}
                className="h-full group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
                    {product.logo ? (
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Image
                          src={product.logo}
                          alt={product.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {product.icon}
                      </motion.div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground leading-tight mb-1">
                        {product.name}
                      </h4>
                      <Badge status={product.status} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
