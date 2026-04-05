"use client";

export function PageDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Soft radial gradient from top-left - daha subtle */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, rgba(91, 123, 106, 0.05) 0%, transparent 45%)"
        }}
      />
      
      {/* Secondary gradient from bottom-right - minimal */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(122, 154, 138, 0.03) 0%, transparent 35%)"
        }}
      />
    </div>
  );
}
