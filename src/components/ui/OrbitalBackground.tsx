"use client";

import { motion } from "framer-motion";

interface OrbitalBackgroundProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export function OrbitalBackground({ variant = "section", className }: OrbitalBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Main gradient orb - responsive sizes */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary accent orb - responsive */}
        <motion.div
          className="absolute top-1/3 right-0 sm:right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 60%)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Third floating orb - mobile visible */}
        <motion.div
          className="absolute bottom-1/4 left-0 sm:left-1/4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Orbital rings - responsive */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]">
          <motion.div
            className="absolute inset-0 rounded-full border border-white/[0.04]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-white/[0.06]"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full border border-white/[0.04]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating particles - more visible on mobile */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-1 sm:h-1 rounded-full bg-brand-primary/50"
            style={{
              top: `${15 + (i * 10)}%`,
              left: `${10 + (i * 11)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Glowing accent dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
            style={{
              top: `${30 + (i * 18)}%`,
              right: `${10 + (i * 15)}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(99, 102, 241, 0.6)' : 'rgba(34, 211, 238, 0.6)'} 0%, transparent 70%)`,
            }}
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.05) 0%, transparent 60%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
