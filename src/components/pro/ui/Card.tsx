import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  accent?: "primary" | "accent" | "none";
}

export function Card({
  hover = false,
  padding = "md",
  accent = "none",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-pro-surface rounded-2xl border border-pro-border relative overflow-hidden",
        "shadow-[var(--pro-shadow-sm)]",
        hover && "transition-all duration-200 ease-out hover:shadow-[var(--pro-shadow-md)] hover:-translate-y-0.5 hover:border-pro-border-strong cursor-pointer",
        padding === "sm" && "p-3.5 sm:p-4",
        padding === "md" && "p-4 sm:p-5",
        padding === "lg" && "p-5 sm:p-6",
        className
      )}
      {...props}
    >
      {accent !== "none" && (
        <div
          className={clsx(
            "absolute top-0 left-0 w-1 h-full rounded-l-2xl",
            accent === "primary" && "bg-gradient-to-b from-pro-primary to-pro-primary-hover",
            accent === "accent" && "bg-gradient-to-b from-pro-accent to-pro-accent-hover"
          )}
        />
      )}
      {children}
    </div>
  );
}
