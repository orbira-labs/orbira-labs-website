"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isMobile = useIsMobile();
  
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <motion.div
      className={cn("max-w-3xl mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0", alignClasses[align], className)}
      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: isMobile ? 0.3 : 0.6 }}
    >
      {tag && (
        <span className="inline-block mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-foreground-muted bg-white/5 rounded-full border border-border">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
