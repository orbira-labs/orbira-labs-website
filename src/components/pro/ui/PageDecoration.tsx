export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
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
        <circle cx="120" cy="180" r="3" fill="var(--pro-primary)" />

        <line x1="300" y1="150" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="1.2" />
        <line x1="300" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="1.2" />
        <line x1="180" y1="250" x2="250" y2="350" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="420" y1="230" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="250" y1="350" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="1" />
        <line x1="180" y1="250" x2="150" y2="400" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="300" y1="150" x2="450" y2="100" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="420" y1="230" x2="500" y2="300" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="300" y1="150" x2="350" y2="200" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="350" y1="200" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="200" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.7" />
        <line x1="100" y1="300" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="150" y1="400" x2="250" y2="350" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="370" y1="380" x2="480" y2="420" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="500" y1="300" x2="480" y2="420" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="120" y1="180" x2="200" y2="150" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="300" y1="150" x2="200" y2="150" stroke="var(--pro-primary)" strokeWidth="0.5" />
      </svg>

      {/* Bottom-left DNA helix */}
      <svg
        className="absolute -bottom-10 -left-10 w-[450px] h-[550px] opacity-[0.05]"
        viewBox="0 0 400 500"
        fill="none"
      >
        <path d="M200 30 C240 80, 240 130, 200 180 C160 230, 160 280, 200 330 C240 380, 240 430, 200 480" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        <path d="M200 30 C160 80, 160 130, 200 180 C240 230, 240 280, 200 330 C160 380, 160 430, 200 480" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />

        {[55, 105, 155, 205, 255, 305, 355, 405, 455].map((y, i) => (
          <line key={i} x1={165 + (i % 2 === 0 ? -10 : 5)} y1={y} x2={235 + (i % 2 === 0 ? 10 : -5)} y2={y} stroke="var(--pro-primary)" strokeWidth="0.8" />
        ))}

        {[55, 105, 155, 205, 255, 305, 355, 405, 455].map((y, i) => (
          <circle key={`d${i}`} cx={i % 2 === 0 ? 155 : 245} cy={y} r="3" fill="var(--pro-primary)" />
        ))}
      </svg>

      {/* Sage green gradient glow - top left */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-[var(--pro-primary)] opacity-[0.04] blur-[120px]" />

      {/* Terracotta gradient glow - bottom right */}
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--pro-accent)] opacity-[0.035] blur-[100px]" />

      {/* Small accent glow - center */}
      <div className="absolute top-[45%] right-[30%] w-[200px] h-[200px] rounded-full bg-[var(--pro-primary)] opacity-[0.025] blur-[80px]" />

      {/* Subtle top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[var(--pro-primary-light)] to-transparent opacity-30" />
    </div>
  );
}
