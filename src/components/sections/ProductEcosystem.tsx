"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader, Card, Badge } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

export function ProductEcosystem() {
  return (
    <section className="section-padding relative" id="products">
      <Container>
        <SectionHeader
          tag="Product Ecosystem"
          title="Bir marka sistemi içinde"
          titleHighlight="çoklu ürün."
          description="Her ürün, düşünülmüş bir ekosistem içinde kendi değerini taşır. Farklı kategorilerde, tutarlı bir deneyim."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card 
                variant={product.status === "live" ? "featured" : "default"}
                className="h-full group"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile: stacked layout, Desktop: side by side */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
                    <div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      {product.icon}
                    </div>
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
        </div>
      </Container>
    </section>
  );
}
