"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Soft radial gradient from top-left */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, rgba(91, 123, 106, 0.08) 0%, transparent 50%)"
        }}
      />
      
      {/* Secondary gradient from bottom-right */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(122, 154, 138, 0.05) 0%, transparent 40%)"
        }}
      />

      {/* Subtle dot grid pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="dotGrid" 
            x="0" 
            y="0" 
            width="24" 
            height="24" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1" fill="var(--pro-primary)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* Very subtle noise texture overlay - desktop only */}
      <div 
        className="absolute inset-0 opacity-[0.015] hidden lg:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px"
        }}
      />
    </div>
  );
}
