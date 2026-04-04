"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden lg:block" aria-hidden>

      {/* DNA Helix 1 — Sol alt, büyük */}
      <svg
        className="absolute bottom-0 left-[3%] w-[160px] h-[90vh] opacity-[0.25]"
        viewBox="0 0 160 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M80 0 C120 60,120 120,80 180 C40 240,40 300,80 360 C120 420,120 480,80 540 C40 600,40 660,80 720 C120 780,120 800,80 800" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        <path d="M80 0 C40 60,40 120,80 180 C120 240,120 300,80 360 C40 420,40 480,80 540 C120 600,120 660,80 720 C40 780,40 800,80 800" stroke="var(--pro-primary)" strokeWidth="2" fill="none" />
        {[45,90,135,180,225,270,315,360,405,450,495,540,585,630,675,720].map((y,i) => (
          <line key={i} x1={50+(i%2===0?-8:3)} y1={y} x2={110+(i%2===0?8:-3)} y2={y} stroke="var(--pro-primary)" strokeWidth="0.8" />
        ))}
        {[45,90,135,180,225,270,315,360,405,450,495,540,585,630,675,720].map((y,i) => (
          <circle key={`n${i}`} cx={i%2===0?42:118} cy={y} r="3.5" fill="var(--pro-primary)" />
        ))}
        <circle r="3.5" fill="var(--pro-primary)" opacity="0.7">
          <animateMotion dur="7s" repeatCount="indefinite" path="M80 0 C120 60,120 120,80 180 C40 240,40 300,80 360 C120 420,120 480,80 540 C40 600,40 660,80 720" />
        </circle>
        <circle r="2.5" fill="var(--pro-accent)" opacity="0.6">
          <animateMotion dur="9s" repeatCount="indefinite" begin="2s" path="M80 0 C40 60,40 120,80 180 C120 240,120 300,80 360 C40 420,40 480,80 540 C120 600,120 660,80 720" />
        </circle>
        <circle r="2" fill="var(--pro-primary)" opacity="0.5">
          <animateMotion dur="11s" repeatCount="indefinite" begin="5s" path="M80 0 C120 60,120 120,80 180 C40 240,40 300,80 360 C120 420,120 480,80 540 C40 600,40 660,80 720" />
        </circle>
      </svg>

      {/* DNA Helix 2 — Sağ üst, orta boy, terracotta vurgulu */}
      <svg
        className="absolute -top-[5%] right-[8%] w-[120px] h-[65vh] opacity-[0.18]"
        viewBox="0 0 120 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M60 0 C90 45,90 90,60 135 C30 180,30 225,60 270 C90 315,90 360,60 405 C30 450,30 495,60 540 C90 585,90 600,60 600" stroke="var(--pro-accent)" strokeWidth="1.8" fill="none" opacity="0.5" />
        <path d="M60 0 C30 45,30 90,60 135 C90 180,90 225,60 270 C30 315,30 360,60 405 C90 450,90 495,60 540 C30 585,30 600,60 600" stroke="var(--pro-primary)" strokeWidth="1.8" fill="none" />
        {[34,68,102,135,169,203,237,270,304,338,372,405,439,473,507,540].map((y,i) => (
          <line key={i} x1={35+(i%2===0?-5:2)} y1={y} x2={85+(i%2===0?5:-2)} y2={y} stroke="var(--pro-primary)" strokeWidth="0.6" />
        ))}
        {[34,68,102,135,169,203,237,270,304,338,372,405,439,473,507,540].map((y,i) => (
          <circle key={`n${i}`} cx={i%2===0?30:90} cy={y} r="2.5" fill={i%3===0?"var(--pro-accent)":"var(--pro-primary)"} />
        ))}
        <circle r="2.5" fill="var(--pro-accent)" opacity="0.7">
          <animateMotion dur="8s" repeatCount="indefinite" path="M60 0 C90 45,90 90,60 135 C30 180,30 225,60 270 C90 315,90 360,60 405 C30 450,30 495,60 540" />
        </circle>
        <circle r="2" fill="var(--pro-primary)" opacity="0.5">
          <animateMotion dur="10s" repeatCount="indefinite" begin="4s" path="M60 0 C30 45,30 90,60 135 C90 180,90 225,60 270 C30 315,30 360,60 405 C90 450,90 495,60 540" />
        </circle>
      </svg>

      {/* DNA Helix 3 — Sağ alt, küçük, hafif */}
      <svg
        className="absolute bottom-[5%] right-[2%] w-[80px] h-[45vh] opacity-[0.12]"
        viewBox="0 0 80 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M40 0 C60 30,60 60,40 90 C20 120,20 150,40 180 C60 210,60 240,40 270 C20 300,20 330,40 360 C60 390,60 400,40 400" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" />
        <path d="M40 0 C20 30,20 60,40 90 C60 120,60 150,40 180 C20 210,20 240,40 270 C60 300,60 330,40 360 C20 390,20 400,40 400" stroke="var(--pro-primary)" strokeWidth="1.5" fill="none" />
        {[22,45,68,90,112,135,158,180,202,225,248,270,292,315,338,360].map((y,i) => (
          <line key={i} x1={22+(i%2===0?-3:1)} y1={y} x2={58+(i%2===0?3:-1)} y2={y} stroke="var(--pro-primary)" strokeWidth="0.5" />
        ))}
        {[22,45,68,90,112,135,158,180,202,225,248,270,292,315,338,360].map((y,i) => (
          <circle key={`n${i}`} cx={i%2===0?19:61} cy={y} r="2" fill="var(--pro-primary)" />
        ))}
        <circle r="2" fill="var(--pro-primary)" opacity="0.6">
          <animateMotion dur="6s" repeatCount="indefinite" path="M40 0 C60 30,60 60,40 90 C20 120,20 150,40 180 C60 210,60 240,40 270 C20 300,20 330,40 360" />
        </circle>
      </svg>

      {/* Neuron nodes — scattered connection dots */}
      <svg
        className="absolute top-[10%] left-[40%] w-[400px] h-[300px] opacity-[0.05]"
        viewBox="0 0 400 300"
        fill="none"
      >
        <circle cx="50" cy="80" r="4" fill="var(--pro-primary)" />
        <circle cx="150" cy="40" r="3" fill="var(--pro-primary)" />
        <circle cx="200" cy="120" r="5" fill="var(--pro-primary)" />
        <circle cx="300" cy="60" r="3.5" fill="var(--pro-primary)" />
        <circle cx="350" cy="150" r="4" fill="var(--pro-primary)" />
        <circle cx="100" cy="200" r="3" fill="var(--pro-primary)" />
        <circle cx="250" cy="220" r="4.5" fill="var(--pro-primary)" />
        <line x1="50" y1="80" x2="150" y2="40" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="150" y1="40" x2="200" y2="120" stroke="var(--pro-primary)" strokeWidth="0.8" />
        <line x1="200" y1="120" x2="300" y2="60" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="300" y1="60" x2="350" y2="150" stroke="var(--pro-primary)" strokeWidth="0.6" />
        <line x1="50" y1="80" x2="100" y2="200" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="200" y1="120" x2="250" y2="220" stroke="var(--pro-primary)" strokeWidth="0.5" />
        <line x1="100" y1="200" x2="250" y2="220" stroke="var(--pro-primary)" strokeWidth="0.5" />
      </svg>

      {/* Gradient glows */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-[var(--pro-primary)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--pro-accent)] opacity-[0.03] blur-[100px]" />

      {/* Top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[var(--pro-primary-light)] to-transparent opacity-20" />
    </div>
  );
}
