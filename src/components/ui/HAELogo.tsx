import { cn } from "@/lib/utils";

interface HAELogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: {
    title: "text-xl sm:text-2xl",
    badge: "text-[9px] sm:text-[10px] px-1.5 py-0.5 mt-0.5 sm:mt-1",
  },
  md: {
    title: "text-2xl sm:text-3xl lg:text-4xl",
    badge: "text-[11px] sm:text-xs px-2 py-0.5 mt-1 sm:mt-1.5",
  },
  lg: {
    title: "text-4xl sm:text-5xl lg:text-7xl",
    badge: "text-[13px] sm:text-sm px-2.5 py-1 mt-2 sm:mt-2.5",
  },
};

export function HAELogo({ size = "lg", className }: HAELogoProps) {
  const s = sizeStyles[size];

  return (
    <div className={cn("inline-flex items-start justify-center gap-2", className)}>
      <span className={cn("font-bold text-foreground tracking-tight", s.title)}>HAE</span>
      <span
        className={cn(
          "font-medium text-cyan-400/80 bg-cyan-400/10 rounded border border-cyan-400/20",
          s.badge
        )}
      >
        v2.0
      </span>
    </div>
  );
}
