"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden lg:block" aria-hidden>

      {/* 1. DNA Helix — Sol alt köşe */}
      <svg
        className="absolute bottom-0 left-[4%] w-[140px] h-[75vh] opacity-[0.22]"
        viewBox="0 0 140 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M70 0 C105 50,105 100,70 150 C35 200,35 250,70 300 C105 350,105 400,70 450 C35 500,35 550,70 600 C105 650,105 700,70 700" stroke="var(--pro-primary)" strokeWidth="1.8" fill="none" />
        <path d="M70 0 C35 50,35 100,70 150 C105 200,105 250,70 300 C35 350,35 400,70 450 C105 500,105 550,70 600 C35 650,35 700,70 700" stroke="var(--pro-primary)" strokeWidth="1.8" fill="none" />
        {[37,75,112,150,187,225,262,300,337,375,412,450,487,525,562,600].map((y,i) => (
          <line key={i} x1={40+(i%2===0?-6:2)} y1={y} x2={100+(i%2===0?6:-2)} y2={y} stroke="var(--pro-primary)" strokeWidth="0.7" />
        ))}
        {[37,75,112,150,187,225,262,300,337,375,412,450,487,525,562,600].map((y,i) => (
          <circle key={`n${i}`} cx={i%2===0?34:106} cy={y} r="3" fill="var(--pro-primary)" />
        ))}
        <circle r="3" fill="var(--pro-primary)" opacity="0.7">
          <animateMotion dur="7s" repeatCount="indefinite" path="M70 0 C105 50,105 100,70 150 C35 200,35 250,70 300 C105 350,105 400,70 450 C35 500,35 550,70 600" />
        </circle>
        <circle r="2" fill="var(--pro-accent)" opacity="0.6">
          <animateMotion dur="9s" repeatCount="indefinite" begin="3s" path="M70 0 C35 50,35 100,70 150 C105 200,105 250,70 300 C35 350,35 400,70 450 C105 500,105 550,70 600" />
        </circle>
      </svg>

      {/* 2. Beyin / Nöron Ağı — Üst orta */}
      <svg
        className="absolute top-[8%] left-[35%] w-[450px] h-[300px] opacity-[0.22]"
        viewBox="0 0 450 300"
        fill="none"
      >
        <circle cx="80" cy="60" r="5" fill="var(--pro-primary)" />
        <circle cx="180" cy="30" r="4" fill="var(--pro-primary)" />
        <circle cx="270" cy="80" r="6" fill="var(--pro-primary)" />
        <circle cx="370" cy="45" r="4.5" fill="var(--pro-primary)" />
        <circle cx="130" cy="150" r="5.5" fill="var(--pro-primary)" />
        <circle cx="220" cy="180" r="4" fill="var(--pro-primary)" />
        <circle cx="320" cy="160" r="5" fill="var(--pro-primary)" />
        <circle cx="400" cy="130" r="3.5" fill="var(--pro-primary)" />
        <circle cx="50" cy="220" r="4" fill="var(--pro-primary)" />
        <circle cx="170" cy="260" r="3.5" fill="var(--pro-primary)" />
        <circle cx="290" cy="250" r="4.5" fill="var(--pro-primary)" />

        <line x1="80" y1="60" x2="180" y2="30" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="180" y1="30" x2="270" y2="80" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="270" y1="80" x2="370" y2="45" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="80" y1="60" x2="130" y2="150" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="270" y1="80" x2="320" y2="160" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="130" y1="150" x2="220" y2="180" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="220" y1="180" x2="320" y2="160" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="320" y1="160" x2="400" y2="130" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="370" y1="45" x2="400" y2="130" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="50" y1="220" x2="130" y2="150" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="170" y1="260" x2="220" y2="180" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="290" y1="250" x2="320" y2="160" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="50" y1="220" x2="170" y2="260" stroke="var(--pro-primary)" strokeWidth="0.4" />
        <line x1="170" y1="260" x2="290" y2="250" stroke="var(--pro-primary)" strokeWidth="0.4" />
      </svg>

      {/* 3. AI Hexagon Grid — Sağ orta */}
      <svg
        className="absolute top-[40%] right-[5%] w-[200px] h-[250px] opacity-[0.22]"
        viewBox="0 0 200 250"
        fill="none"
      >
        <polygon points="100,10 140,30 140,70 100,90 60,70 60,30" stroke="var(--pro-primary)" strokeWidth="1" fill="none" />
        <polygon points="100,90 140,110 140,150 100,170 60,150 60,110" stroke="var(--pro-primary)" strokeWidth="1" fill="none" />
        <polygon points="100,170 140,190 140,230 100,250 60,230 60,190" stroke="var(--pro-primary)" strokeWidth="1" fill="none" />
        <polygon points="155,50 195,70 195,110 155,130 115,110 115,70" stroke="var(--pro-primary)" strokeWidth="0.7" fill="none" opacity="0.6" />
        <polygon points="45,130 85,150 85,190 45,210 5,190 5,150" stroke="var(--pro-primary)" strokeWidth="0.7" fill="none" opacity="0.6" />

        <circle cx="100" cy="50" r="3" fill="var(--pro-primary)" />
        <circle cx="100" cy="130" r="3" fill="var(--pro-primary)" />
        <circle cx="100" cy="210" r="3" fill="var(--pro-accent)" />
        <circle cx="155" cy="90" r="2.5" fill="var(--pro-primary)" />
        <circle cx="45" cy="170" r="2.5" fill="var(--pro-primary)" />
        <line x1="100" y1="50" x2="100" y2="130" stroke="var(--pro-primary)" strokeWidth="0.5" strokeDasharray="4 3" />
        <line x1="100" y1="130" x2="100" y2="210" stroke="var(--pro-primary)" strokeWidth="0.5" strokeDasharray="4 3" />
      </svg>

      {/* 4. Pulse / Dalga — Alt orta */}
      <svg
        className="absolute bottom-[8%] left-[30%] w-[400px] h-[80px] opacity-[0.22]"
        viewBox="0 0 400 80"
        fill="none"
      >
        <path
          d="M0 40 L60 40 L80 15 L100 65 L120 25 L140 55 L160 35 L180 45 L200 40 L260 40 L280 20 L300 60 L320 30 L340 50 L360 40 L400 40"
          stroke="var(--pro-primary)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle r="3" fill="var(--pro-primary)" opacity="0.6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M0 40 L60 40 L80 15 L100 65 L120 25 L140 55 L160 35 L180 45 L200 40 L260 40 L280 20 L300 60 L320 30 L340 50 L360 40 L400 40" />
        </circle>
      </svg>

      {/* Gradient glows */}
      <div className="absolute top-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-[var(--pro-primary)] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] rounded-full bg-[var(--pro-accent)] opacity-[0.025] blur-[90px]" />

      {/* Top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[var(--pro-primary-light)] to-transparent opacity-20" />
    </div>
  );
}
