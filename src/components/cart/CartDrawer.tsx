"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { QuantitySelector } from "@/components/cart/QuantitySelector";
import { PriceDisplay } from "@/components/products/PriceDisplay";
import { formatPrice } from "@/lib/currency";

export function CartDrawer() {
  const { lines, subtotal, drawerOpen, closeDrawer, setQuantity, removeItem } = useCart();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [drawerOpen, closeDrawer]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-chocolate/40"
        aria-label="Close shopping cart"
        onClick={closeDrawer}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-chocolate/10 px-5 py-4">
          <h2 id="cart-drawer-title" className="font-serif text-2xl">
            Your cart
          </h2>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-chocolate/15"
            onClick={closeDrawer}
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="text-cocoa">Your cart is empty. The menu is ready when you are.</p>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li key={line.product.id} className="flex gap-3 border-b border-chocolate/10 pb-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={line.product.image}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{line.product.name}</p>
                    <p className="text-sm text-cocoa">
                      <PriceDisplay amount={line.product.price} /> {line.product.unit}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <QuantitySelector
                        quantity={line.quantity}
                        label={line.product.name}
                        onChange={(quantity) => setQuantity(line.product.id, quantity)}
                      />
                      <button
                        type="button"
                        className="min-h-11 px-2 text-sm font-semibold text-terracotta"
                        aria-label={`Remove ${line.product.name}`}
                        onClick={() => removeItem(line.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{formatPrice(line.lineTotal)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-chocolate/10 px-5 py-4">
          <p className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </p>
          <p className="mt-2 text-sm text-cocoa">
            Choose pickup or delivery to your doorstep when you check out.
          </p>
          <div className="mt-4 grid gap-2">
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-chocolate/15 bg-white px-4 font-semibold"
            >
              View cart
            </Link>
            <Link
              href="/our-products"
              onClick={closeDrawer}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-4 font-semibold text-white"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
