"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function PageBackground() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Ana glow — üst merkez, güçlü */}
        <div
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.12) 35%, transparent 70%)",
          }}
        />

        {/* Sol alt glow — mor tonu */}
        <div
          className="absolute top-[35%] -left-[10%] w-[450px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)",
          }}
        />

        {/* Sağ orta glow — indigo tonu */}
        <div
          className="absolute top-[50%] -right-[15%] w-[400px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)",
          }}
        />

        {/* Alt glow — derinlik için */}
        <div
          className="absolute top-[75%] left-[30%] w-[500px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 65%)",
          }}
        />

        {/* Statik yıldızlar — kozmik atmosfer */}
        {[
          { top: "8%", left: "15%", size: 2.5 },
          { top: "12%", left: "78%", size: 2 },
          { top: "25%", left: "85%", size: 2.5 },
          { top: "38%", left: "8%", size: 2 },
          { top: "48%", left: "92%", size: 2.5 },
          { top: "62%", left: "12%", size: 2 },
          { top: "72%", left: "88%", size: 2.5 },
          { top: "85%", left: "25%", size: 2 },
          { top: "92%", left: "65%", size: 2.5 },
        ].map((star, i) => (
          <div
            key={`star-mobile-${i}`}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              background: star.size >= 2.5 
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 80%)"
                : "rgba(255, 255, 255, 0.7)",
              boxShadow: star.size >= 2.5 
                ? "0 0 8px 3px rgba(139, 92, 246, 0.35)"
                : "0 0 4px 1px rgba(255, 255, 255, 0.25)",
            }}
          />
        ))}

        {/* Tek hafif pulse — canlılık için */}
        <motion.div
          className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.85) 0%, transparent 70%)",
            boxShadow: "0 0 10px 4px rgba(139, 92, 246, 0.25)",
          }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Main ambient glow orbs - stronger */}
      <motion.div
        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[1000px] md:h-[900px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.10) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[30%] left-[10%] w-[500px] h-[600px] md:w-[650px] md:h-[750px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.6, 0.85, 0.6],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-[50%] right-[5%] w-[550px] h-[650px] md:w-[700px] md:h-[800px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.07) 45%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-[70%] left-[25%] w-[600px] h-[700px] md:w-[800px] md:h-[850px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.14) 0%, transparent 65%)",
        }}
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Nebula — sol üst köşe (cyan + mor + indigo) */}
      <motion.div
        className="absolute top-[3%] left-[2%] w-[260px] h-[200px] md:w-[360px] md:h-[260px] rounded-[50%]"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 50% 45%, rgba(34, 211, 238, 0.28) 0%, rgba(139, 92, 246, 0.18) 32%, rgba(99, 102, 241, 0.08) 56%, transparent 75%)",
          filter: "blur(40px)",
          transform: "rotate(-12deg)",
        }}
        animate={{
          opacity: [0.5, 0.75, 0.5],
          x: [0, 6, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Nebula — sağ alt köşe (pembe + lavanta + mavi) */}
      <motion.div
        className="absolute bottom-[3%] right-[2%] w-[250px] h-[190px] md:w-[340px] md:h-[250px] rounded-[50%]"
        style={{
          background:
            "radial-gradient(ellipse 65% 58% at 48% 52%, rgba(244, 114, 182, 0.25) 0%, rgba(167, 139, 250, 0.18) 30%, rgba(56, 189, 248, 0.09) 54%, transparent 74%)",
          filter: "blur(42px)",
          transform: "rotate(6deg)",
        }}
        animate={{
          opacity: [0.45, 0.72, 0.45],
          scale: [1.02, 1, 1.02],
          x: [0, -5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Wormhole — tek halka, perspective ile elips, merkezde glow noktası */}
      <div className="absolute top-[22%] left-[16%] md:left-[20%]" style={{ perspective: "400px" }}>
        <motion.div
          className="w-[160px] h-[160px] md:w-[260px] md:h-[260px] rounded-full border border-white/[0.07]"
          style={{ transformStyle: "preserve-3d", rotateX: "58deg" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(99, 102, 241, 0.4) 50%, transparent 80%)",
            boxShadow: "0 0 18px 6px rgba(139, 92, 246, 0.25)",
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Distant planets — belli belirsiz daireler, hafif glow */}
      <motion.div
        className="absolute top-[55%] right-[8%] w-3 h-3 md:w-4 md:h-4 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(167, 139, 250, 0.6) 0%, rgba(99, 102, 241, 0.25) 50%, transparent 80%)",
          boxShadow: "0 0 12px 4px rgba(139, 92, 246, 0.15)",
        }}
        animate={{ opacity: [0.4, 0.75, 0.4], y: [0, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[35%] right-[28%] w-[6px] h-[6px] md:w-2 md:h-2 rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 30%, rgba(34, 211, 238, 0.5) 0%, rgba(99, 102, 241, 0.2) 60%, transparent 85%)",
          boxShadow: "0 0 8px 2px rgba(34, 211, 238, 0.12)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute bottom-[22%] left-[12%] w-2 h-2 md:w-3 md:h-3 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 40%, rgba(244, 114, 182, 0.45) 0%, rgba(139, 92, 246, 0.15) 60%, transparent 85%)",
          boxShadow: "0 0 10px 3px rgba(244, 114, 182, 0.1)",
        }}
        animate={{ opacity: [0.35, 0.65, 0.35], y: [0, 5, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Geometric accents — hexagon, diamond, dot grid */}
      <motion.svg
        className="pointer-events-none absolute top-[18%] right-[20%] w-12 h-12 md:w-16 md:h-16 text-white/[0.06]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <polygon points="50,4 88,26 88,74 50,96 12,74 12,26" />
      </motion.svg>

      <motion.div
        className="pointer-events-none absolute top-[52%] left-[44%] w-8 h-8 md:w-11 md:h-11 border border-white/[0.05] rounded-sm"
        initial={{ rotate: 45 }}
        animate={{
          opacity: [0.3, 0.55, 0.3],
          rotate: [45, 50, 45],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[16%] right-[18%] flex gap-[8px] opacity-[0.05]"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-[8px]">
            {[0, 1, 2].map((j) => (
              <div key={j} className="h-1 w-1 rounded-full bg-white" />
            ))}
          </div>
        ))}
      </motion.div>

      {/* Shooting star — arada bir geçen kuyruklu yıldız */}
      <motion.div
        className="pointer-events-none absolute top-[12%] -left-[5%] w-[80px] md:w-[120px] h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 40%, rgba(139,92,246,0.6) 70%, transparent 100%)",
          borderRadius: "1px",
          transformOrigin: "left center",
          rotate: "35deg",
        }}
        animate={{
          x: ["0vw", "110vw"],
          opacity: [0, 0.7, 0.7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 14,
          ease: "easeIn",
        }}
      />

      {/* Floating star particles */}
      {[
        { top: "8%",  left: "12%", size: 3,   dur: 4,   delay: 0 },
        { top: "15%", left: "80%", size: 2.5, dur: 5,   delay: 1 },
        { top: "22%", left: "25%", size: 2,   dur: 4.5, delay: 0.5 },
        { top: "30%", left: "88%", size: 3,   dur: 3.5, delay: 2 },
        { top: "38%", left: "8%",  size: 2,   dur: 5,   delay: 1.5 },
        { top: "45%", left: "70%", size: 2.5, dur: 4,   delay: 0.8 },
        { top: "52%", left: "35%", size: 3,   dur: 4.5, delay: 2.5 },
        { top: "60%", left: "92%", size: 2,   dur: 5.5, delay: 0.3 },
        { top: "68%", left: "18%", size: 2.5, dur: 4,   delay: 1.8 },
        { top: "75%", left: "60%", size: 3,   dur: 3.5, delay: 1.2 },
        { top: "82%", left: "5%",  size: 2,   dur: 5,   delay: 2.8 },
        { top: "88%", left: "78%", size: 2.5, dur: 4.5, delay: 0.6 },
        { top: "94%", left: "45%", size: 3,   dur: 4,   delay: 1.5 },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: star.size >= 2.5
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.95) 0%, rgba(99, 102, 241, 0.5) 40%, transparent 70%)"
              : "rgba(255, 255, 255, 0.8)",
            boxShadow: star.size >= 2.5
              ? "0 0 10px 4px rgba(139, 92, 246, 0.4)"
              : "0 0 4px 1px rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: star.size >= 2.5 ? [0.8, 1.3, 0.8] : [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: star.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Extra floating particles with movement */}
      {[
        { top: "20%", left: "50%", size: 1.5, dur: 6, delay: 0 },
        { top: "40%", left: "20%", size: 1.5, dur: 7, delay: 1 },
        { top: "55%", left: "75%", size: 1.5, dur: 5, delay: 2 },
        { top: "70%", left: "40%", size: 1.5, dur: 6, delay: 0.5 },
        { top: "85%", left: "65%", size: 1.5, dur: 7, delay: 1.5 },
      ].map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-brand-primary/40"
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
