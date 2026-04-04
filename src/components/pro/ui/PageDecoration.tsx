"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden lg:block" aria-hidden>
      {/* Top-right neuron network */}
      <svg
        className="absolute -top-20 -right-20 w-[700px] h-[700px] opacity-[0.06]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="150" r="6" fill="var(--pro-primary)" />
        <circle cx="180" cy="250" r="5" fill="var(--pro-primary)" />
        <circle cx="420" cy="230" r="5.5" fill="var(--pro-primary)" />
        <circle cx="250" cy="350" r="5" fill="var(--pro-primary)" />
        <circle cx="370" cy="380" r="6" fill="var(--pro-primary)" />
        <circle cx="150" cy="400" r="4" fill="var(--pro-primary)" />
        <circle cx="450" cy="100" r="4.5" fill="var(--pro-primary)" />
        <circle cx="350" cy="200" r="3.5" fill="var(--pro-primary)" />
        <circle cx="200" cy="150" r="4" fill="var(--pro-primary)" />
        <circle cx="500" cy="300" r="5" fill="var(--pro-primary)" />
        <circle cx="100" cy="300" r="3.5" fill="var(--pro-primary)" />
        <circle cx="480" cy="420" r="4" fill="var(--pro-primary)" />

        <line x1="300" y1="150" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="1.2" />
        <line x1="300" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="1.2" />
        <line x1="180" y1="250" x2="250" y2="350" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="420" y1="230" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="250" y1="350" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="180" y1="250" x2="150" y2="400" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="300" y1="150" x2="450" y2="100" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="420" y1="230" x2="500" y2="300" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="350" y1="200" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="200" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="100" y1="300" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="370" y1="380" x2="480" y2="420" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="500" y1="300" x2="480" y2="420" stroke="var(--pro-primary)" strokeWidth="0.6" />
      </svg>

      {/* Bottom-left DNA helix — large and visible */}
      <svg
        className="absolute bottom-0 left-[5%] w-[200px] h-[85vh] opacity-[0.1]"
        viewBox="0 0 200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M100 0 C140 60, 140 120, 100 180 C60 240, 60 300, 100 360 C140 420, 140 480, 100 540 C60 600, 60 660, 100 720 C140 780, 140 800, 100 800"
          stroke="var(--pro-primary)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M100 0 C60 60, 60 120, 100 180 C140 240, 140 300, 100 360 C60 420, 60 480, 100 540 C140 600, 140 660, 100 720 C60 780, 60 800, 100 800"
          stroke="var(--pro-primary)"
          strokeWidth="2.5"
          fill="none"
        />

        {[45, 90, 135, 180, 225, 270, 315, 360, 405, 450, 495, 540, 585, 630, 675, 720].map((y, i) => (
          <line
            key={i}
            x1={70 + (i % 2 === 0 ? -10 : 5)}
            y1={y}
            x2={130 + (i % 2 === 0 ? 10 : -5)}
            y2={y}
            stroke="var(--pro-primary)"
            strokeWidth="1"
          />
        ))}

        {[45, 90, 135, 180, 225, 270, 315, 360, 405, 450, 495, 540, 585, 630, 675, 720].map((y, i) => (
          <circle
            key={`n${i}`}
            cx={i % 2 === 0 ? 60 : 140}
            cy={y}
            r="4"
            fill="var(--pro-primary)"
          />
        ))}

        {/* Animated particles flowing along DNA */}
        <circle r="3" fill="var(--pro-primary)" opacity="0.6">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M100 0 C140 60, 140 120, 100 180 C60 240, 60 300, 100 360 C140 420, 140 480, 100 540 C60 600, 60 660, 100 720"
          />
        </circle>
        <circle r="2.5" fill="var(--pro-accent)" opacity="0.5">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="3s"
            path="M100 0 C60 60, 60 120, 100 180 C140 240, 140 300, 100 360 C60 420, 60 480, 100 540 C140 600, 140 660, 100 720"
          />
        </circle>
        <circle r="2" fill="var(--pro-primary)" opacity="0.4">
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            begin="6s"
            path="M100 0 C140 60, 140 120, 100 180 C60 240, 60 300, 100 360 C140 420, 140 480, 100 540 C60 600, 60 660, 100 720"
          />
        </circle>
      </svg>

      {/* Gradient glows */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-[var(--pro-primary)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--pro-accent)] opacity-[0.035] blur-[100px]" />

      {/* Top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-[250px] bg-gradient-to-b from-[var(--pro-primary-light)] to-transparent opacity-25" />
    </div>
  );
}
