import { cn } from "@/lib/utils";
import { ElementType } from "react";

interface AQELogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  as?: ElementType;
  className?: string;
}

const sizeStyles = {
  xs: {
    wrapper: "gap-1",
    title: "text-base sm:text-lg",
    badge: "text-[5px] sm:text-[6px] px-1 py-[1px] mt-[5px] sm:mt-[7px]",
  },
  sm: {
    wrapper: "gap-1.5",
    title: "text-lg sm:text-2xl",
    badge: "text-[6px] sm:text-[7px] px-1 py-[2px] mt-[6px] sm:mt-[9px]",
  },
  md: {
    wrapper: "gap-1.5",
    title: "text-2xl sm:text-3xl",
    badge: "text-[8px] sm:text-[9px] px-1.5 py-0.5 mt-1 sm:mt-1.5",
  },
  lg: {
    wrapper: "gap-2",
    title: "text-4xl sm:text-5xl lg:text-7xl",
    badge: "text-[13px] sm:text-sm px-2.5 py-1 mt-2 sm:mt-2.5",
  },
};

export function AQELogo({ size = "lg", as: Tag = "span", className }: AQELogoProps) {
  const s = sizeStyles[size];

  return (
    <div className={cn("inline-flex items-start", s.wrapper, className)}>
      <Tag className={cn("font-bold text-foreground tracking-tight", s.title)}>AQE</Tag>
      <span
        className={cn(
          "font-medium text-violet-400/80 bg-violet-400/10 rounded border border-violet-400/20",
          s.badge
        )}
      >
        v1.0
      </span>
    </div>
  );
}
