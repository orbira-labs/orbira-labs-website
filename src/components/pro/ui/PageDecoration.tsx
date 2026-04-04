export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="150" r="4" fill="var(--pro-primary)" />
        <circle cx="180" cy="250" r="3" fill="var(--pro-primary)" />
        <circle cx="420" cy="230" r="3.5" fill="var(--pro-primary)" />
        <circle cx="250" cy="350" r="3" fill="var(--pro-primary)" />
        <circle cx="370" cy="380" r="4" fill="var(--pro-primary)" />
        <circle cx="150" cy="400" r="2.5" fill="var(--pro-primary)" />
        <circle cx="450" cy="100" r="3" fill="var(--pro-primary)" />
        <circle cx="350" cy="200" r="2" fill="var(--pro-primary)" />
        <circle cx="200" cy="150" r="2.5" fill="var(--pro-primary)" />
        <circle cx="500" cy="300" r="3" fill="var(--pro-primary)" />
        <circle cx="100" cy="300" r="2" fill="var(--pro-primary)" />

        <line x1="300" y1="150" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="300" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="180" y1="250" x2="250" y2="350" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="420" y1="230" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="250" y1="350" x2="370" y2="380" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="180" y1="250" x2="150" y2="400" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="300" y1="150" x2="450" y2="100" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="420" y1="230" x2="500" y2="300" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="300" y1="150" x2="350" y2="200" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="350" y1="200" x2="420" y2="230" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="300" y1="150" x2="200" y2="150" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="200" y1="150" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="100" y1="300" x2="180" y2="250" stroke="var(--pro-primary)" strokeWidth="0.4" />
        <line x1="150" y1="400" x2="250" y2="350" stroke="var(--pro-primary)" strokeWidth="0.4" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.025]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M250 50 C280 120, 260 200, 250 250 C240 300, 220 380, 250 450"
          stroke="var(--pro-primary)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M250 50 C220 120, 240 200, 250 250 C260 300, 280 380, 250 450"
          stroke="var(--pro-primary)"
          strokeWidth="1.5"
          fill="none"
        />

        {[80, 130, 180, 230, 280, 330, 380, 420].map((y, i) => (
          <line
            key={i}
            x1={230 + (i % 2 === 0 ? -15 : 0)}
            y1={y}
            x2={270 + (i % 2 === 0 ? 0 : 15)}
            y2={y}
            stroke="var(--pro-primary)"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full bg-[var(--pro-primary)] opacity-[0.015] blur-[100px]" />
      <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-[var(--pro-accent)] opacity-[0.012] blur-[80px]" />
    </div>
  );
}
