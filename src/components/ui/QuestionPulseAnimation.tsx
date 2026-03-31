"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type PulseSize = "xs" | "sm" | "md" | "lg";

interface QuestionPulseAnimationProps {
  size?: PulseSize;
  className?: string;
  animate?: boolean;
}

const sizeConfig: Record<PulseSize, { container: string; center: string; centerText: string }> = {
  xs: {
    container: "w-10 h-10 sm:w-12 sm:h-12",
    center: "w-3 h-3 sm:w-4 sm:h-4",
    centerText: "text-[8px] sm:text-[10px]",
  },
  sm: {
    container: "w-16 h-16 sm:w-20 sm:h-20",
    center: "w-5 h-5 sm:w-6 sm:h-6",
    centerText: "text-[10px] sm:text-xs",
  },
  md: {
    container: "w-24 h-24 sm:w-28 sm:h-28",
    center: "w-6 h-6 sm:w-8 sm:h-8",
    centerText: "text-xs sm:text-sm",
  },
  lg: {
    container: "w-32 h-32 sm:w-40 sm:h-40",
    center: "w-8 h-8 sm:w-10 sm:h-10",
    centerText: "text-sm sm:text-base",
  },
};

const floatingQuestions = [
  { x: -55, y: -40, delay: 0, duration: 4 },
  { x: 50, y: -35, delay: 0.8, duration: 4.5 },
  { x: -45, y: 45, delay: 1.6, duration: 3.8 },
  { x: 55, y: 40, delay: 2.2, duration: 4.2 },
  { x: 0, y: -60, delay: 0.4, duration: 5 },
  { x: -65, y: 5, delay: 1.2, duration: 4.3 },
  { x: 65, y: -5, delay: 2.8, duration: 3.9 },
];

export function QuestionPulseAnimation({ size = "lg", className = "", animate = true }: QuestionPulseAnimationProps) {
  const id = useId();
  const config = sizeConfig[size];

  return (
    <div className={`relative ${config.container} flex items-center justify-center ${className}`}>
      {animate && (
        <>
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="-100 -100 200 200"
          >
            <defs>
              <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Labyrinth paths - concentric with openings */}
            {/* Outer ring */}
            <motion.path
              d="M -70 0 A 70 70 0 0 1 0 -70"
              fill="none"
              stroke="rgba(139,92,246,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M 35 -60 A 70 70 0 0 1 70 0"
              fill="none"
              stroke="rgba(167,139,250,0.35)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
              d="M 70 0 A 70 70 0 0 1 0 70"
              fill="none"
              stroke="rgba(129,140,248,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.path
              d="M -35 60 A 70 70 0 0 1 -70 0"
              fill="none"
              stroke="rgba(167,139,250,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Middle ring */}
            <motion.path
              d="M 0 -50 A 50 50 0 0 1 50 0"
              fill="none"
              stroke="rgba(139,92,246,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M 50 0 A 50 50 0 0 1 -25 43"
              fill="none"
              stroke="rgba(167,139,250,0.45)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.path
              d="M -50 10 A 50 50 0 0 1 -20 -46"
              fill="none"
              stroke="rgba(129,140,248,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            />

            {/* Inner ring */}
            <motion.path
              d="M -30 0 A 30 30 0 0 1 15 -26"
              fill="none"
              stroke="rgba(139,92,246,0.5)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
              d="M 26 15 A 30 30 0 0 1 -15 26"
              fill="none"
              stroke="rgba(167,139,250,0.55)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            />

            {/* Connecting paths between rings */}
            <motion.line
              x1="0" y1="-50" x2="0" y2="-70"
              stroke="rgba(167,139,250,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.line
              x1="50" y1="0" x2="70" y2="0"
              stroke="rgba(139,92,246,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.line
              x1="-30" y1="0" x2="-50" y2="0"
              stroke="rgba(129,140,248,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.line
              x1="0" y1="30" x2="0" y2="50"
              stroke="rgba(167,139,250,0.3)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Floating question marks */}
            {floatingQuestions.map((q, i) => (
              <motion.text
                key={i}
                x={q.x}
                y={q.y}
                fontSize="12"
                fontWeight="bold"
                fill="rgba(167,139,250,0.6)"
                textAnchor="middle"
                dominantBaseline="middle"
                filter={`url(#${id}-glow)`}
                initial={{ opacity: 0, y: q.y + 10 }}
                animate={{
                  opacity: [0, 0.8, 0.8, 0],
                  y: [q.y + 15, q.y, q.y - 5, q.y - 15],
                  x: [q.x, q.x + (i % 2 === 0 ? 5 : -5), q.x],
                }}
                transition={{
                  duration: q.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: q.delay,
                }}
              >
                ?
              </motion.text>
            ))}

            {/* Path finder dot - navigating through the maze */}
            <motion.circle
              r="4"
              fill="#a78bfa"
              filter={`url(#${id}-glow)`}
              animate={{
                cx: [0, 0, 30, 50, 50, 30, 0, -30, -50, -30, 0],
                cy: [-15, -30, -30, 0, 30, 50, 30, 30, 0, -30, -15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Glow behind center */}
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-violet-500/[0.2] blur-2xl" />
        </>
      )}

      {/* Center - maze core */}
      <motion.div
        className={`relative ${config.center} rounded-full z-10 flex items-center justify-center`}
        style={{
          background: "radial-gradient(circle at 35% 30%, #c4b5fd 0%, #a78bfa 40%, #7c3aed 100%)",
          boxShadow: "0 0 20px 6px rgba(167,139,250,0.5), 0 0 40px 12px rgba(167,139,250,0.25), inset 0 0 8px rgba(255,255,255,0.3)",
        }}
        animate={animate ? {
          boxShadow: [
            "0 0 20px 6px rgba(167,139,250,0.5), 0 0 40px 12px rgba(167,139,250,0.25), inset 0 0 8px rgba(255,255,255,0.3)",
            "0 0 30px 10px rgba(167,139,250,0.7), 0 0 55px 20px rgba(167,139,250,0.35), inset 0 0 12px rgba(255,255,255,0.4)",
            "0 0 20px 6px rgba(167,139,250,0.5), 0 0 40px 12px rgba(167,139,250,0.25), inset 0 0 8px rgba(255,255,255,0.3)",
          ],
        } : {}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={`${config.centerText} font-bold text-white drop-shadow-lg`}>?</span>
      </motion.div>
    </div>
  );
}
