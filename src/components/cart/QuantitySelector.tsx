"use client";

import { siteConfig } from "@/lib/site-config";

export function QuantitySelector({
  quantity,
  label,
  onChange,
}: {
  quantity: number;
  label: string;
  onChange: (quantity: number) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-chocolate/15 bg-white">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-lg text-chocolate disabled:opacity-40"
        aria-label={`Decrease quantity of ${label}`}
        onClick={() => onChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-semibold" aria-live="polite">
        <span className="sr-only">Quantity of {label}: </span>
        {quantity}
      </span>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-lg text-chocolate disabled:opacity-40"
        aria-label={`Increase quantity of ${label}`}
        onClick={() => onChange(quantity + 1)}
        disabled={quantity >= siteConfig.maxQuantity}
      >
        +
      </button>
    </div>
  );
}
