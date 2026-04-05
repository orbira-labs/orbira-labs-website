"use client";

interface WellnessGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { outer: 120, strokeWidth: 8, fontSize: "text-2xl", labelSize: "text-xs" },
  md: { outer: 160, strokeWidth: 10, fontSize: "text-4xl", labelSize: "text-sm" },
  lg: { outer: 200, strokeWidth: 12, fontSize: "text-5xl", labelSize: "text-base" },
};

function getScoreColor(score: number): string {
  if (score >= 8) return "#22C55E";
  if (score >= 6) return "#84CC16";
  if (score >= 4) return "#EAB308";
  if (score >= 2) return "#F97316";
  return "#EF4444";
}

function getScoreLabel(score: number): string {
  if (score >= 8) return "Mükemmel";
  if (score >= 6) return "İyi";
  if (score >= 4) return "Orta";
  if (score >= 2) return "Düşük";
  return "Kritik";
}

export function WellnessGauge({ score, size = "md" }: WellnessGaugeProps) {
  const { outer, strokeWidth, fontSize, labelSize } = SIZES[size];
  const radius = (outer - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;
  const color = getScoreColor(score);
  const label = getScoreLabel(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: outer, height: outer }}>
        <svg width={outer} height={outer} className="transform -rotate-90">
          <circle
            cx={outer / 2}
            cy={outer / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={outer / 2}
            cy={outer / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${fontSize} font-bold`} style={{ color }}>
            {score.toFixed(1)}
          </span>
          <span className={`${labelSize} text-gray-500 font-medium`}>{label}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600 font-medium">Genel Skor</p>
    </div>
  );
}
