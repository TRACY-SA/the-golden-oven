"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { QuantitySelector } from "@/components/cart/QuantitySelector";
import { PriceDisplay } from "@/components/products/PriceDisplay";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatPrice } from "@/lib/currency";
import { siteConfig } from "@/lib/site-config";

export function CartView() {
  const { lines, subtotal, setQuantity, removeItem, ready } = useCart();

  if (!ready) {
    return <p className="text-cocoa">Loading your cart…</p>;
  }

  if (lines.length === 0) {
    return (
      <EmptyState
        title="Your cart is waiting"
        description="Nothing is in the basket yet. Browse cakes, cupcakes, bread, and pastries."
        actionHref="/our-products"
        actionLabel="Explore our treats"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <ul className="space-y-4">
        {lines.map((line) => (
          <li
            key={line.product.id}
            className="grid gap-4 rounded-[1.75rem] border border-chocolate/10 bg-white p-4 sm:grid-cols-[6rem_1fr_auto] sm:items-center"
          >
            <div className="relative h-24 overflow-hidden rounded-2xl sm:h-24">
              <Image
                src={line.product.image}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl">{line.product.name}</h2>
              <p className="mt-1 text-sm text-cocoa">
                <PriceDisplay amount={line.product.price} /> / {line.product.unit}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
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
            <p className="font-semibold sm:text-right">{formatPrice(line.lineTotal)}</p>
          </li>
        ))}
      </ul>
      <aside className="h-fit rounded-[1.75rem] bg-ivory p-6">
        <h2 className="font-serif text-3xl">Summary</h2>
        <p className="mt-4 flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </p>
        <p className="mt-3 text-sm leading-6 text-cocoa">
          Pickup is ready when you are. If you would rather we come to you, delivery to your
          doorstep adds {formatPrice(siteConfig.deliveryFee)} at checkout.
        </p>
        <Link
          href="/checkout"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-5 font-semibold text-white hover:bg-terracotta-deep"
        >
          Proceed to checkout
        </Link>
        <Link
          href="/our-products"
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-chocolate/15 bg-white px-5 font-semibold"
        >
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
