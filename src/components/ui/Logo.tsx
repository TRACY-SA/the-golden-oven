type LogoProps = {
  variant?: "lockup" | "mark";
  tone?: "on-light" | "on-dark";
  className?: string;
};

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="16" fill="#50664B" />
      <rect
        x="3.5"
        y="3.5"
        width="57"
        height="57"
        rx="14.5"
        fill="none"
        stroke="#F4DE91"
        strokeWidth="1.4"
      />
      <path
        d="M17 42V34.5Q32 18 47 34.5V42"
        fill="none"
        stroke="#FFFCF5"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      <path d="M17 42h30" stroke="#FFFCF5" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M32 28c1.7 2.5 3.5 3.7 3.5 6.2a3.5 3.5 0 0 1-7 0c0-2.5 1.8-3.7 3.5-6.2z" fill="#F4DE91" />
    </svg>
  );
}

export function Logo({ variant = "lockup", tone = "on-light", className = "" }: LogoProps) {
  const title = tone === "on-dark" ? "text-cream" : "text-chocolate";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {variant === "lockup" ? (
        <span className="leading-none">
          <span className={`block font-serif text-[1.15rem] tracking-tight ${title}`}>
            The Golden Oven
          </span>
        </span>
      ) : null}
    </span>
  );
}
