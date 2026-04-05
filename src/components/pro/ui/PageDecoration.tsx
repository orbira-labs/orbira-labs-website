"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden lg:block" aria-hidden>
      {/* Full-page DNA mesh network */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 1200 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* DNA strand 1 — left to center */}
        <path d="M-50 100 C50 50, 100 150, 200 100 C300 50, 350 150, 450 100 C550 50, 600 150, 700 100" stroke="var(--pro-primary)" strokeWidth="3" fill="none" />
        <path d="M-50 160 C50 210, 100 110, 200 160 C300 210, 350 110, 450 160 C550 210, 600 110, 700 160" stroke="var(--pro-primary)" strokeWidth="3" fill="none" />
        {[25, 100, 175, 250, 325, 400, 475, 550, 625].map((x, i) => (
          <line key={`s1r${i}`} x1={x} y1={75 + (i % 2 === 0 ? 0 : 25)} x2={x} y2={185 - (i % 2 === 0 ? 0 : 25)} stroke="var(--pro-primary)" strokeWidth="1.5" />
        ))}
        {[25, 100, 175, 250, 325, 400, 475, 550, 625].map((x, i) => (
          <circle key={`s1n${i}`} cx={x} cy={i % 2 === 0 ? 75 : 185} r="5" fill="var(--pro-primary)" />
        ))}

        {/* DNA strand 2 — center diagonal */}
        <path d="M400 300 C500 250, 550 350, 650 300 C750 250, 800 350, 900 300 C1000 250, 1050 350, 1150 300 C1250 250, 1280 350, 1300 300" stroke="var(--pro-primary)" strokeWidth="2.5" fill="none" />
        <path d="M400 360 C500 410, 550 310, 650 360 C750 410, 800 310, 900 360 C1000 410, 1050 310, 1150 360 C1250 410, 1280 310, 1300 360" stroke="var(--pro-primary)" strokeWidth="2.5" fill="none" />
        {[450, 525, 600, 675, 750, 825, 900, 975, 1050, 1125, 1200].map((x, i) => (
          <line key={`s2r${i}`} x1={x} y1={275 + (i % 2 === 0 ? 5 : 20)} x2={x} y2={385 - (i % 2 === 0 ? 5 : 20)} stroke="var(--pro-primary)" strokeWidth="1.2" />
        ))}
        {[450, 525, 600, 675, 750, 825, 900, 975, 1050, 1125, 1200].map((x, i) => (
          <circle key={`s2n${i}`} cx={x} cy={i % 2 === 0 ? 275 : 385} r="4" fill="var(--pro-primary)" />
        ))}

        {/* DNA strand 3 — bottom */}
        <path d="M-100 700 C0 650, 50 750, 150 700 C250 650, 300 750, 400 700 C500 650, 550 750, 650 700 C750 650, 800 750, 900 700 C1000 650, 1050 750, 1150 700" stroke="var(--pro-primary)" strokeWidth="2.5" fill="none" />
        <path d="M-100 760 C0 810, 50 710, 150 760 C250 810, 300 710, 400 760 C500 810, 550 710, 650 760 C750 810, 800 710, 900 760 C1000 810, 1050 710, 1150 760" stroke="var(--pro-primary)" strokeWidth="2.5" fill="none" />
        {[0, 75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825, 900, 975, 1050].map((x, i) => (
          <line key={`s3r${i}`} x1={x} y1={680 + (i % 2 === 0 ? 0 : 15)} x2={x} y2={780 - (i % 2 === 0 ? 0 : 15)} stroke="var(--pro-primary)" strokeWidth="1.2" />
        ))}

        {/* Connecting mesh lines between strands */}
        <line x1="200" y1="160" x2="450" y2="300" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.5" />
        <line x1="450" y1="160" x2="600" y2="300" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="360" x2="400" y2="700" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="900" y1="360" x2="750" y2="700" stroke="var(--pro-primary)" strokeWidth="1" opacity="0.4" />
        <line x1="700" y1="100" x2="900" y2="300" stroke="var(--pro-primary)" strokeWidth="0.8" opacity="0.3" />
        <line x1="1100" y1="360" x2="1050" y2="700" stroke="var(--pro-primary)" strokeWidth="0.8" opacity="0.3" />

        {/* Scattered connection nodes */}
        <circle cx="350" cy="220" r="6" fill="var(--pro-primary)" opacity="0.4" />
        <circle cx="750" cy="500" r="7" fill="var(--pro-primary)" opacity="0.35" />
        <circle cx="550" cy="550" r="5" fill="var(--pro-primary)" opacity="0.3" />
        <circle cx="1000" cy="500" r="6" fill="var(--pro-primary)" opacity="0.3" />
        <circle cx="200" cy="450" r="5" fill="var(--pro-primary)" opacity="0.25" />
        <circle cx="900" cy="550" r="4" fill="var(--pro-primary)" opacity="0.25" />

        <line x1="350" y1="220" x2="550" y2="550" stroke="var(--pro-primary)" strokeWidth="0.8" opacity="0.25" />
        <line x1="550" y1="550" x2="750" y2="500" stroke="var(--pro-primary)" strokeWidth="0.8" opacity="0.25" />
        <line x1="750" y1="500" x2="1000" y2="500" stroke="var(--pro-primary)" strokeWidth="0.8" opacity="0.25" />
        <line x1="200" y1="450" x2="350" y2="220" stroke="var(--pro-primary)" strokeWidth="0.6" opacity="0.2" />
        <line x1="900" y1="550" x2="750" y2="500" stroke="var(--pro-primary)" strokeWidth="0.6" opacity="0.2" />
      </svg>

      {/* Flowing particles on strand 1 */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 1200 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <circle r="5" fill="var(--pro-primary)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M-50 100 C50 50, 100 150, 200 100 C300 50, 350 150, 450 100 C550 50, 600 150, 700 100" />
        </circle>
        <circle r="4" fill="var(--pro-accent)">
          <animateMotion dur="10s" repeatCount="indefinite" begin="3s" path="M-50 160 C50 210, 100 110, 200 160 C300 210, 350 110, 450 160 C550 210, 600 110, 700 160" />
        </circle>
        <circle r="4" fill="var(--pro-primary)">
          <animateMotion dur="9s" repeatCount="indefinite" begin="1s" path="M400 300 C500 250, 550 350, 650 300 C750 250, 800 350, 900 300 C1000 250, 1050 350, 1150 300" />
        </circle>
        <circle r="3.5" fill="var(--pro-accent)">
          <animateMotion dur="12s" repeatCount="indefinite" begin="5s" path="M-100 700 C0 650, 50 750, 150 700 C250 650, 300 750, 400 700 C500 650, 550 750, 650 700 C750 650, 800 750, 900 700" />
        </circle>
      </svg>

      {/* Gradient glows */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--pro-primary)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--pro-accent)] opacity-[0.03] blur-[100px]" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-[var(--pro-primary)] opacity-[0.025] blur-[80px]" />
    </div>
  );
}
