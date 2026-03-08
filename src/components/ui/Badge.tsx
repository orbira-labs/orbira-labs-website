import { cn } from "@/lib/utils";
import { type ProductStatus } from "@/lib/constants";

interface BadgeProps {
  status: ProductStatus;
  className?: string;
}

const statusConfig = {
  live: {
    label: "Live",
    className: "bg-status-live/15 text-status-live border-status-live/30",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-status-progress/15 text-status-progress border-status-progress/30",
  },
  concept: {
    label: "Concept",
    className: "bg-status-concept/15 text-status-concept border-status-concept/30",
  },
};

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
        config.className,
        className
      )}
    >
      {status === "live" && (
        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
      )}
      {config.label}
    </span>
  );
}
