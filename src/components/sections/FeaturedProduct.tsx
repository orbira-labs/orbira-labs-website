"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeader, Badge, Button, OrbitalBackground } from "@/components/ui";
import { PRODUCTS, type Product } from "@/lib/constants";

const getDotColor = (product: Product) => {
  if (product.gradient.includes("emerald")) return "bg-emerald-500";
  if (product.gradient.includes("#7A8471")) return "bg-[#7A8471]";
  if (product.gradient.includes("pink")) return "bg-pink-500";
  if (product.gradient.includes("violet")) return "bg-violet-500";
  return "bg-emerald-500";
};

const getGlowColor = (product: Product) => {
  if (product.gradient.includes("emerald")) return "from-emerald-500/10 via-transparent to-teal-500/5";
  if (product.gradient.includes("#7A8471")) return "from-[#7A8471]/10 via-transparent to-[#5C6455]/5";
  if (product.gradient.includes("pink")) return "from-pink-500/10 via-transparent to-rose-500/5";
  if (product.gradient.includes("violet")) return "from-violet-500/10 via-transparent to-purple-500/5";
  return "from-emerald-500/10 via-transparent to-teal-500/5";
};

const getBorderColor = (product: Product) => {
  if (product.gradient.includes("emerald")) return "hover:border-emerald-500/30";
  if (product.gradient.includes("#7A8471")) return "hover:border-[#7A8471]/30";
  if (product.gradient.includes("pink")) return "hover:border-pink-500/30";
  if (product.gradient.includes("violet")) return "hover:border-violet-500/30";
  return "hover:border-emerald-500/30";
};

const getButtonStyle = (product: Product) => {
  if (product.gradient.includes("#7A8471")) return "bg-[#7A8471] hover:bg-[#6a7462]";
  return "";
};

interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden ${getBorderColor(product)} transition-all duration-300`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGlowColor(product)} pointer-events-none`} />
      
      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Header with logo and badge */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          {product.logo ? (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src={product.logo}
                alt={product.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 shadow-lg`}>
              {product.icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-1 truncate">
              {product.name}
            </h3>
            <Badge status={product.status} />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-6">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/5"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${getDotColor(product)} flex-shrink-0`} />
                <span className="text-xs sm:text-sm text-foreground truncate">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {product.href && (
          <Link href={product.href} className="block">
            <Button 
              variant="primary" 
              size="md" 
              className={`w-full ${getButtonStyle(product)}`}
            >
              Ürünü İncele
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export function FeaturedProduct() {
  const featuredProducts = PRODUCTS.filter((p) => p.href);
  
  if (featuredProducts.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden" id="featured">
      <OrbitalBackground variant="subtle" />
      
      <Container className="relative z-10">
        <SectionHeader
          tag="Aktif Ürünler"
          title="Test aşamasındaki"
          titleHighlight="ürünlerimiz"
          description="Şu anda aktif olarak geliştirdiğimiz ve test ettiğimiz ürünler. Geri bildirimleriniz bizim için çok değerli."
        />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
