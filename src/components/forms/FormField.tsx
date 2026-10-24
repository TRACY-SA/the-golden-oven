import type { ReactNode } from "react";

export const fieldClassName =
  "min-h-12 w-full rounded-2xl border border-chocolate/15 bg-white px-4 py-3 text-base text-chocolate outline-none placeholder:text-cocoa/50 focus:border-terracotta";

export function FormField({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-chocolate">
        {label}
      </label>
      <div data-describedby={describedBy || undefined}>{children}</div>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-cocoa">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-terracotta" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
