import { clsx } from "clsx";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-pro-success-light text-pro-success",
  warning: "bg-pro-warning-light text-pro-warning",
  danger: "bg-pro-danger-light text-pro-danger",
  info: "bg-pro-primary-light text-pro-primary",
  muted: "bg-pro-surface-alt text-pro-text-secondary",
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
