"use client";

import { motion } from "framer-motion";

export function PageBackground() {
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

      {/* Scattered floating rings - not centered, more organic */}
      <motion.div
        className="absolute top-[18%] left-[20%] w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-white/[0.04]"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      <motion.div
        className="absolute top-[25%] right-[15%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full border border-white/[0.05]"
        animate={{ 
          rotate: -360,
          y: [0, 15, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[8%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-white/[0.06]"
        animate={{ 
          rotate: 360,
          x: [0, 10, 0],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[20%] w-[140px] h-[140px] md:w-[220px] md:h-[220px] rounded-full border border-white/[0.04]"
        animate={{ 
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
        }}
      />

      <motion.div
        className="absolute top-[75%] left-[15%] w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full border border-white/[0.05]"
        animate={{ 
          rotate: 360,
          y: [0, -12, 0],
        }}
        transition={{ 
          rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
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
