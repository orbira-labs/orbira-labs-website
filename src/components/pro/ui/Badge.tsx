import { clsx } from "clsx";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-pro-success-light text-pro-success border border-pro-success/15",
  warning: "bg-pro-warning-light text-pro-warning border border-pro-warning/15",
  danger: "bg-pro-danger-light text-pro-danger border border-pro-danger/15",
  info: "bg-pro-primary-light text-pro-primary border border-pro-primary/15",
  muted: "bg-pro-surface-alt text-pro-text-secondary border border-pro-border",
};

const dotColors: Record<BadgeVariant, string> = {
  success: "bg-pro-success",
  warning: "bg-pro-warning",
  danger: "bg-pro-danger",
  info: "bg-pro-primary",
  muted: "bg-pro-text-tertiary",
};

export function Badge({
  variant = "muted",
  dot = false,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span
          className={clsx("h-1.5 w-1.5 rounded-full", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
