"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { FormField, fieldClassName } from "@/components/forms/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { PriceDisplay } from "@/components/products/PriceDisplay";
import { createOrderReference, writeDemoOrder } from "@/lib/cart-storage";
import { formatPrice } from "@/lib/currency";
import { siteConfig } from "@/lib/site-config";
import { isTodayOrFuture, isValidEmail, isValidGhanaPhone, todayISO } from "@/lib/validation";
import type { DemoPaymentMethod, Fulfilment } from "@/types/order";

type CheckoutValues = {
  name: string;
  phone: string;
  email: string;
  fulfilment: Fulfilment;
  address: string;
  date: string;
  time: string;
  notes: string;
  paymentMethod: DemoPaymentMethod | "";
};

const initialValues: CheckoutValues = {
  name: "",
  phone: "",
  email: "",
  fulfilment: "collection",
  address: "",
  date: "",
  time: "",
  notes: "",
  paymentMethod: "",
};

const paymentChoices: { id: DemoPaymentMethod; label: string }[] = [
  {
    id: "collection-demo",
    label: "Pay on Pickup",
  },
  {
    id: "momo-demo",
    label: "Mobile money payment",
  },
];

export function CheckoutForm() {
  const { lines, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [values, setValues] = useState<CheckoutValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutValues, string>>>({});
  const [processing, setProcessing] = useState(false);

  if (lines.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Add a few treats before you check out."
        actionHref="/our-products"
        actionLabel="Browse the menu"
      />
    );
  }

  const deliveryFee = values.fulfilment === "delivery" ? siteConfig.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  function update<K extends keyof CheckoutValues>(field: K, value: CheckoutValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof CheckoutValues, string>> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter the name for this order.";
    if (!isValidGhanaPhone(values.phone)) {
      nextErrors.phone = "Enter a Ghana phone number, such as 0500321924 or +233500321924.";
    }
    if (values.email.trim() && !isValidEmail(values.email)) {
      nextErrors.email = "Enter a valid email address, or leave this blank.";
    }
    if (values.fulfilment === "delivery" && values.address.trim().length < 8) {
      nextErrors.address = "Enter the address for delivery to your doorstep.";
    }
    if (!values.date) nextErrors.date = "Choose a preferred date.";
    else if (!isTodayOrFuture(values.date)) nextErrors.date = "Choose today or a future date.";
    if (!values.paymentMethod) nextErrors.paymentMethod = "Choose how you would like to pay.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !values.paymentMethod) return;

    const paymentMethod = values.paymentMethod;
    setProcessing(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      writeDemoOrder({
        reference: createOrderReference(),
        customerName: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        fulfilment: values.fulfilment,
        address: values.fulfilment === "delivery" ? values.address.trim() : "",
        date: values.date,
        time: values.time,
        notes: values.notes.trim(),
        paymentMethod,
        items: lines.map((line) => ({
          productId: line.product.id,
          name: line.product.name,
          quantity: line.quantity,
          unitPrice: line.product.price,
          lineTotal: line.lineTotal,
        })),
        subtotal,
        deliveryFee,
        total,
        createdAt: new Date().toISOString(),
      });
      clearCart();
      router.push("/order-success");
    }, reduceMotion ? 0 : 800);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" noValidate>
      <div className="space-y-5 rounded-[1.75rem] border border-chocolate/10 bg-white p-5 sm:p-7">
        <FormField id="checkout-name" label="Your name" error={errors.name}>
          <input
            id="checkout-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "checkout-name-error" : undefined}
            required
          />
        </FormField>
        <FormField id="checkout-phone" label="Telephone" error={errors.phone}>
          <input
            id="checkout-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "checkout-phone-error" : undefined}
            required
          />
        </FormField>
        <FormField id="checkout-email" label="Email (optional)" error={errors.email}>
          <input
            id="checkout-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "checkout-email-error" : undefined}
          />
        </FormField>
        <fieldset>
          <legend className="mb-2 text-sm font-semibold">Pickup or delivery</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {(
              [
                ["collection", "Pickup from bakery"],
                ["delivery", "Delivery to doorstep"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 ${
                  values.fulfilment === value ? "border-terracotta bg-peach/40" : "border-chocolate/15"
                }`}
              >
                <input
                  type="radio"
                  name="fulfilment"
                  value={value}
                  checked={values.fulfilment === value}
                  onChange={() => update("fulfilment", value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
        {values.fulfilment === "delivery" ? (
          <FormField
            id="checkout-address"
            label="Delivery address"
            hint="Where should we bring your order?"
            error={errors.address}
          >
            <textarea
              id="checkout-address"
              name="address"
              rows={3}
              value={values.address}
              onChange={(event) => update("address", event.target.value)}
              className={fieldClassName}
              aria-invalid={Boolean(errors.address)}
              aria-describedby={
                errors.address ? "checkout-address-error checkout-address-hint" : "checkout-address-hint"
              }
              required
            />
          </FormField>
        ) : null}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="checkout-date" label="Preferred date" error={errors.date}>
            <input
              id="checkout-date"
              name="date"
              type="date"
              ref={(node) => {
                if (node) node.min = todayISO();
              }}
              value={values.date}
              onChange={(event) => update("date", event.target.value)}
              className={fieldClassName}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "checkout-date-error" : undefined}
              required
            />
          </FormField>
          <FormField id="checkout-time" label="Preferred time (optional)">
            <input
              id="checkout-time"
              name="time"
              type="time"
              value={values.time}
              onChange={(event) => update("time", event.target.value)}
              className={fieldClassName}
            />
          </FormField>
        </div>
        <FormField id="checkout-notes" label="Order notes (optional)">
          <textarea
            id="checkout-notes"
            name="notes"
            rows={3}
            value={values.notes}
            onChange={(event) => update("notes", event.target.value)}
            className={fieldClassName}
          />
        </FormField>
        <fieldset>
          <legend className="mb-2 text-sm font-semibold">Payment</legend>
          <div className="space-y-2">
            {paymentChoices.map((choice) => (
              <label
                key={choice.id}
                className={`block cursor-pointer rounded-2xl border px-4 py-3 ${
                  values.paymentMethod === choice.id ? "border-terracotta bg-peach/40" : "border-chocolate/15"
                }`}
              >
                <span className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={choice.id}
                    checked={values.paymentMethod === choice.id}
                    onChange={() => update("paymentMethod", choice.id)}
                    className="mt-1"
                  />
                  <span>
                    <span className="block font-semibold">{choice.label}</span>
                  </span>
                </span>
              </label>
            ))}
          </div>
          {errors.paymentMethod ? (
            <p id="checkout-payment-error" className="mt-2 text-sm font-medium text-terracotta" role="alert">
              {errors.paymentMethod}
            </p>
          ) : null}
        </fieldset>
      </div>

      <aside className="h-fit rounded-[1.75rem] bg-ivory p-5 sm:p-7">
        <h2 className="font-serif text-3xl">Order summary</h2>
        <ul className="mt-5 space-y-4">
          {lines.map((line) => (
            <li key={line.product.id} className="flex gap-3">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                <Image src={line.product.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{line.product.name}</p>
                <p className="text-sm text-cocoa">
                  {line.quantity} × <PriceDisplay amount={line.product.price} />
                </p>
              </div>
              <p className="text-sm font-semibold">{formatPrice(line.lineTotal)}</p>
            </li>
          ))}
        </ul>
        <dl className="mt-6 space-y-2 border-t border-chocolate/10 pt-4 text-sm">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          {values.fulfilment === "delivery" ? (
            <div className="flex justify-between">
              <dt>Delivery to doorstep</dt>
              <dd>{formatPrice(deliveryFee)}</dd>
            </div>
          ) : null}
          <div className="flex justify-between text-base font-semibold">
            <dt>Total</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
        </dl>
        <button
          type="submit"
          disabled={processing}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-6 font-semibold text-white hover:bg-terracotta-deep disabled:opacity-70"
        >
          {processing ? "Placing order…" : "Place order"}
        </button>
      </aside>
    </form>
  );
}
