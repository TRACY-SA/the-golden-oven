"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

export function AddToCartButton({
  productId,
  productName,
  className = "",
}: {
  productId: string;
  productName: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timeout = window.setTimeout(() => setAdded(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [added]);

  return (
    <button
      type="button"
      className={`inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition hover:bg-terracotta-deep ${className}`}
      aria-label={added ? `${productName} added to cart` : `Add ${productName} to cart`}
      onClick={() => {
        addItem(productId, 1);
        setAdded(true);
      }}
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
