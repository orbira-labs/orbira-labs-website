import type { LucideIcon } from "lucide-react";
import { Button } from "./Button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="relative mb-5">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pro-primary-light to-[var(--pro-surface-alt)] flex items-center justify-center">
          <Icon className="h-7 w-7 text-pro-primary" />
        </div>
        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-pro-accent-light border-2 border-pro-surface" />
      </div>
      <h3 className="text-base font-semibold text-pro-text mb-1.5">{title}</h3>
      <p className="text-sm text-pro-text-secondary max-w-xs leading-relaxed mb-5">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" size="md" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
