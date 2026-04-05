"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden lg:block" aria-hidden>
      {/* Hexa-Neural Network — flowing top to bottom */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 1400 1000"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Primary vertical neural pathways */}
        <path d="M200 -50 Q220 100, 180 250 Q140 400, 200 550 Q260 700, 180 850 Q120 1000, 200 1100" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        <path d="M500 -50 Q480 150, 520 300 Q560 450, 500 600 Q440 750, 520 900 Q580 1050, 500 1100" stroke="var(--pro-primary)" strokeWidth="2.5" fill="none" />
        <path d="M800 -50 Q820 100, 780 250 Q740 400, 800 550 Q860 700, 780 850 Q720 1000, 800 1100" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        <path d="M1100 -50 Q1080 150, 1120 300 Q1160 450, 1100 600 Q1040 750, 1120 900 Q1180 1050, 1100 1100" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        
        {/* Secondary vertical lines - thinner */}
        <path d="M350 -50 Q370 200, 330 400 Q290 600, 350 800 Q410 950, 350 1100" stroke="var(--pro-primary)" strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M650 -50 Q630 200, 670 400 Q710 600, 650 800 Q590 950, 650 1100" stroke="var(--pro-primary)" strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M950 -50 Q970 200, 930 400 Q890 600, 950 800 Q1010 950, 950 1100" stroke="var(--pro-primary)" strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M1250 -50 Q1230 200, 1270 400 Q1310 600, 1250 800 Q1190 950, 1250 1100" stroke="var(--pro-primary)" strokeWidth="1" fill="none" opacity="0.5" />
        
        {/* Horizontal hexagonal connections - Row 1 (top) */}
        <path d="M150 80 L280 80 L350 150 L280 220 L150 220 L80 150 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M450 80 L580 80 L650 150 L580 220 L450 220 L380 150 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M750 80 L880 80 L950 150 L880 220 L750 220 L680 150 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M1050 80 L1180 80 L1250 150 L1180 220 L1050 220 L980 150 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.4" />
        
        {/* Horizontal hexagonal connections - Row 2 */}
        <path d="M300 280 L430 280 L500 350 L430 420 L300 420 L230 350 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M600 280 L730 280 L800 350 L730 420 L600 420 L530 350 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M900 280 L1030 280 L1100 350 L1030 420 L900 420 L830 350 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        
        {/* Horizontal hexagonal connections - Row 3 */}
        <path d="M150 480 L280 480 L350 550 L280 620 L150 620 L80 550 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M450 480 L580 480 L650 550 L580 620 L450 620 L380 550 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M750 480 L880 480 L950 550 L880 620 L750 620 L680 550 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M1050 480 L1180 480 L1250 550 L1180 620 L1050 620 L980 550 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.4" />
        
        {/* Horizontal hexagonal connections - Row 4 */}
        <path d="M300 680 L430 680 L500 750 L430 820 L300 820 L230 750 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M600 680 L730 680 L800 750 L730 820 L600 820 L530 750 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M900 680 L1030 680 L1100 750 L1030 820 L900 820 L830 750 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        
        {/* Horizontal hexagonal connections - Row 5 (bottom) */}
        <path d="M150 880 L280 880 L350 950 L280 1020 L150 1020 L80 950 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M450 880 L580 880 L650 950 L580 1020 L450 1020 L380 950 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M750 880 L880 880 L950 950 L880 1020 L750 1020 L680 950 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M1050 880 L1180 880 L1250 950 L1180 1020 L1050 1020 L980 950 Z" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" opacity="0.3" />
        
        {/* Cross connections between hexagons - diagonal links */}
        <line x1="350" y1="150" x2="380" y2="280" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="650" y1="150" x2="530" y2="280" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="650" y1="150" x2="680" y2="280" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="950" y1="150" x2="830" y2="280" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="950" y1="150" x2="980" y2="280" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.3" />
        
        <line x1="500" y1="350" x2="380" y2="480" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="500" y1="350" x2="530" y2="480" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="800" y1="350" x2="680" y2="480" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="800" y1="350" x2="830" y2="480" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="1100" y1="350" x2="980" y2="480" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.3" />
        
        <line x1="350" y1="550" x2="230" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="350" y1="550" x2="380" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="650" y1="550" x2="530" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="650" y1="550" x2="680" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="950" y1="550" x2="830" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="950" y1="550" x2="980" y2="680" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.3" />
        
        <line x1="500" y1="750" x2="380" y2="880" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="500" y1="750" x2="530" y2="880" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="800" y1="750" x2="680" y2="880" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="800" y1="750" x2="830" y2="880" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="1100" y1="750" x2="980" y2="880" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.3" />
        
        {/* Neural nodes at key intersections */}
        {/* Row 1 centers */}
        <circle cx="215" cy="150" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="515" cy="150" r="7" fill="var(--pro-primary)" opacity="0.6" />
        <circle cx="815" cy="150" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="1115" cy="150" r="5" fill="var(--pro-primary)" opacity="0.4" />
        
        {/* Row 2 centers */}
        <circle cx="365" cy="350" r="7" fill="var(--pro-primary)" opacity="0.6" />
        <circle cx="665" cy="350" r="8" fill="var(--pro-primary)" opacity="0.7" />
        <circle cx="965" cy="350" r="6" fill="var(--pro-primary)" opacity="0.5" />
        
        {/* Row 3 centers */}
        <circle cx="215" cy="550" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="515" cy="550" r="7" fill="var(--pro-primary)" opacity="0.6" />
        <circle cx="815" cy="550" r="8" fill="var(--pro-primary)" opacity="0.7" />
        <circle cx="1115" cy="550" r="5" fill="var(--pro-primary)" opacity="0.4" />
        
        {/* Row 4 centers */}
        <circle cx="365" cy="750" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="665" cy="750" r="7" fill="var(--pro-primary)" opacity="0.6" />
        <circle cx="965" cy="750" r="6" fill="var(--pro-primary)" opacity="0.5" />
        
        {/* Row 5 centers */}
        <circle cx="215" cy="950" r="5" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="515" cy="950" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="815" cy="950" r="6" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="1115" cy="950" r="4" fill="var(--pro-primary)" opacity="0.3" />
        
        {/* Small accent nodes at hexagon vertices */}
        <circle cx="350" cy="150" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="650" cy="150" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="950" cy="150" r="3" fill="var(--pro-primary)" opacity="0.3" />
        <circle cx="500" cy="350" r="3" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="800" cy="350" r="3" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="1100" cy="350" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="350" cy="550" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="650" cy="550" r="3" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="950" cy="550" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="500" cy="750" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="800" cy="750" r="3" fill="var(--pro-primary)" opacity="0.5" />
        <circle cx="350" cy="950" r="3" fill="var(--pro-primary)" opacity="0.3" />
        <circle cx="650" cy="950" r="3" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="950" cy="950" r="3" fill="var(--pro-primary)" opacity="0.3" />
      </svg>

      {/* Subtle gradient glows */}
      <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-[var(--pro-primary)] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] rounded-full bg-[var(--pro-accent)] opacity-[0.025] blur-[80px]" />
      <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-[var(--pro-primary)] opacity-[0.02] blur-[70px]" />
    </div>
  );
}
