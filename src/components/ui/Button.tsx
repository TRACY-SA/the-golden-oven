import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-deep shadow-[0_10px_24px_-16px_rgba(142,59,36,0.9)]",
  secondary:
    "bg-white text-chocolate border border-chocolate/15 hover:border-chocolate/30",
  ghost: "bg-transparent text-chocolate hover:text-terracotta",
} as const;

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition motion-safe:duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
