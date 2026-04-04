import { clsx } from "clsx";
import { getInitials } from "@/lib/pro/utils";

interface AvatarProps {
  firstName: string;
  lastName: string;
  src?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
};

export function Avatar({
  firstName,
  lastName,
  src,
  size = "md",
  className,
}: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${firstName} ${lastName}`}
        className={clsx(
          "rounded-full object-cover",
          sizeStyles[size],
          className
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "rounded-full bg-pro-primary-light text-pro-primary font-medium flex items-center justify-center",
        sizeStyles[size],
        className
      )}
    >
      {getInitials(firstName, lastName)}
    </div>
  );
}
