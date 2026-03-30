"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container, SectionHeader, Card, Badge } from "@/components/ui";
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
  const upcomingProducts = PRODUCTS.filter((p) => !p.href);

  if (upcomingProducts.length === 0) return null;

  return (
    <section className="section-padding relative" id="products">
      <Container className="relative z-10">
        <SectionHeader
          tag="Yakında"
          title="Geliştirme aşamasındaki"
          titleHighlight="diğer ürünler"
          description="Planlanan ve konsept aşamasındaki ürünlerimiz. Ekosistemimiz büyüyor."
        />

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {upcomingProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="touch-highlight"
            >
              <Card 
                variant="default"
                className="h-full group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    {product.logo ? (
                      <motion.div 
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Image
                          src={product.logo}
                          alt={product.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {product.icon}
                      </motion.div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground leading-tight mb-0.5 truncate">
                        {product.name}
                      </h4>
                      <Badge status={product.status} />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed flex-1 line-clamp-2">
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
