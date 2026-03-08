"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "glass" | "featured";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variants = {
      default:
        "bg-background-secondary border border-border",
      glass:
        "bg-glass-bg backdrop-blur-xl border border-glass-border",
      featured:
        "bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8",
          variants[variant],
          hover && "transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
