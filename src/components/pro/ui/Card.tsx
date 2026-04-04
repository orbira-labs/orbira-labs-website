import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  hover = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-pro-surface rounded-xl border border-pro-border",
        "shadow-[var(--pro-shadow-sm)]",
        hover && "transition-all duration-150 hover:shadow-[var(--pro-shadow-md)] hover:border-pro-border-strong cursor-pointer",
        padding === "sm" && "p-3 sm:p-4",
        padding === "md" && "p-4 sm:p-5",
        padding === "lg" && "p-5 sm:p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
