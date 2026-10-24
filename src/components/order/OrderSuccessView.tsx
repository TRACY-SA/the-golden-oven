"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { LogoMark } from "@/components/ui/Logo";
import { readDemoOrder } from "@/lib/cart-storage";
import { formatPrice } from "@/lib/currency";
import { formatDisplayDate } from "@/lib/validation";
import type { DemoOrder } from "@/types/order";

const paymentLabels: Record<DemoOrder["paymentMethod"], string> = {
  "collection-demo": "Pay on Pickup",
  "momo-demo": "Mobile money payment",
};

const fulfilmentLabels: Record<DemoOrder["fulfilment"], string> = {
  collection: "Pickup from bakery",
  delivery: "Delivery to doorstep",
};

function subscribeToClient() {
  return () => {};
}

export function OrderSuccessView() {
  const ready = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const order = ready ? readDemoOrder() : undefined;

  if (order === undefined) {
    return <p className="text-cocoa">Checking for your order…</p>;
  }

  if (!order) {
    return (
      <div className="mx-auto max-w-xl rounded-[1.75rem] bg-white px-6 py-12 text-center">
        <h1 className="font-serif text-4xl">No order to show</h1>
        <p className="mt-4 leading-7 text-cocoa">
          Place an order from the menu and your confirmation will appear here.
        </p>
        <Link
          href="/our-products"
          className="mt-6 inline-flex min-h-12 items-center rounded-full bg-terracotta px-6 font-semibold text-white"
        >
          Browse the menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] bg-white px-6 py-10 sm:px-10">
      <LogoMark className="h-14 w-14" />
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
        Thank you
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Your order is placed.</h1>
      <p className="mt-4 max-w-2xl leading-7 text-cocoa">
        We have your details and the treats you chose. We will be in touch about pickup or delivery
        to your doorstep.
      </p>
      <p className="mt-6 text-sm text-cocoa">Order reference</p>
      <p className="font-serif text-3xl text-chocolate">{order.reference}</p>
      <dl className="mt-8 grid gap-4 border-t border-chocolate/10 pt-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-cocoa">Name</dt>
          <dd className="font-semibold">{order.customerName}</dd>
        </div>
        <div>
          <dt className="text-sm text-cocoa">Telephone</dt>
          <dd className="font-semibold">{order.phone}</dd>
        </div>
        <div>
          <dt className="text-sm text-cocoa">Fulfilment</dt>
          <dd className="font-semibold">{fulfilmentLabels[order.fulfilment]}</dd>
        </div>
        <div>
          <dt className="text-sm text-cocoa">Preferred date</dt>
          <dd className="font-semibold">{formatDisplayDate(order.date)}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm text-cocoa">Payment</dt>
          <dd className="font-semibold">{paymentLabels[order.paymentMethod]}</dd>
        </div>
      </dl>
      <ul className="mt-6 space-y-2 border-t border-chocolate/10 pt-6">
        {order.items.map((item) => (
          <li key={item.productId} className="flex justify-between gap-4 text-sm">
            <span>
              {item.quantity} × {item.name}
            </span>
            <span>{formatPrice(item.lineTotal)}</span>
          </li>
        ))}
      </ul>
      {order.deliveryFee > 0 ? (
        <p className="mt-4 flex justify-between text-sm">
          <span>Delivery to doorstep</span>
          <span>{formatPrice(order.deliveryFee)}</span>
        </p>
      ) : null}
      <p className="mt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>{formatPrice(order.total)}</span>
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/our-products"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 font-semibold text-white"
        >
          Continue shopping
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-chocolate/15 px-6 font-semibold"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
