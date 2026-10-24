"use client";

import { useState, type FormEvent } from "react";
import { FormField, fieldClassName } from "@/components/forms/FormField";
import { budgetRanges, cakeFlavours, cakeSizes, cakeTiers, occasions } from "@/data/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { formatDisplayDate, isTodayOrFuture, isValidEmail, isValidGhanaPhone, todayISO } from "@/lib/validation";

type CakeValues = {
  name: string;
  phone: string;
  email: string;
  occasion: string;
  flavour: string;
  size: string;
  tiers: string;
  date: string;
  time: string;
  budget: string;
  message: string;
  referenceUrl: string;
};

const initialValues: CakeValues = {
  name: "",
  phone: "",
  email: "",
  occasion: "",
  flavour: "",
  size: "",
  tiers: "1",
  date: "",
  time: "",
  budget: "Not sure yet",
  message: "",
  referenceUrl: "",
};

export function CustomCakeForm() {
  const [values, setValues] = useState<CakeValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof CakeValues, string>>>({});
  const [link, setLink] = useState("");

  function update(field: keyof CakeValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setLink("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof CakeValues, string>> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter the name for this enquiry.";
    if (!isValidGhanaPhone(values.phone)) {
      nextErrors.phone = "Enter a Ghana phone number, such as 0500321924 or +233500321924.";
    }
    if (values.email.trim() && !isValidEmail(values.email)) {
      nextErrors.email = "Enter a valid email address, or leave this blank.";
    }
    if (!values.occasion) nextErrors.occasion = "Choose an occasion.";
    if (!values.flavour) nextErrors.flavour = "Choose a flavour direction.";
    if (!values.size) nextErrors.size = "Choose a cake size.";
    if (!values.date) nextErrors.date = "Choose a date.";
    else if (!isTodayOrFuture(values.date)) nextErrors.date = "Choose today or a future date.";
    if (values.referenceUrl.trim()) {
      try {
        const url = new URL(values.referenceUrl.trim());
        if (url.protocol !== "http:" && url.protocol !== "https:") {
          nextErrors.referenceUrl = "Use a link that starts with http:// or https://.";
        }
      } catch {
        nextErrors.referenceUrl = "Enter a full image link, or leave this blank.";
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setLink("");
      return;
    }

    const message = [
      "Hello The Golden Oven, I would like to enquire about a custom cake.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim() || "Not provided"}`,
      `Occasion: ${values.occasion}`,
      `Flavour: ${values.flavour}`,
      `Size: ${values.size}`,
      `Tiers: ${values.tiers}`,
      `Preferred date: ${formatDisplayDate(values.date)}`,
      `Preferred time: ${values.time || "Not specified"}`,
      `Budget: ${values.budget}`,
      `Design notes: ${values.message.trim() || "Not provided"}`,
      `Reference image: ${values.referenceUrl.trim() || "Not provided"}`,
      "",
      "This message was prepared on the website. Please reply to confirm whether the cake can be made. It is not a confirmed order.",
    ].join("\n");

    setLink(buildWhatsAppLink(message));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="cake-name" label="Full name" error={errors.name}>
          <input
            id="cake-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cake-name-error" : undefined}
            required
          />
        </FormField>
        <FormField id="cake-phone" label="Telephone" error={errors.phone}>
          <input
            id="cake-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cake-phone-error" : undefined}
            required
          />
        </FormField>
      </div>
      <FormField id="cake-email" label="Email (optional)" error={errors.email}>
        <input
          id="cake-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cake-email-error" : undefined}
        />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="cake-occasion" label="Occasion" error={errors.occasion}>
          <select
            id="cake-occasion"
            name="occasion"
            value={values.occasion}
            onChange={(event) => update("occasion", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.occasion)}
            aria-describedby={errors.occasion ? "cake-occasion-error" : undefined}
            required
          >
            <option value="">Select an occasion</option>
            {occasions.map((occasion) => (
              <option key={occasion}>{occasion}</option>
            ))}
          </select>
        </FormField>
        <FormField id="cake-flavour" label="Cake flavour" error={errors.flavour}>
          <select
            id="cake-flavour"
            name="flavour"
            value={values.flavour}
            onChange={(event) => update("flavour", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.flavour)}
            aria-describedby={errors.flavour ? "cake-flavour-error" : undefined}
            required
          >
            <option value="">Select a flavour</option>
            {cakeFlavours.map((flavour) => (
              <option key={flavour}>{flavour}</option>
            ))}
          </select>
        </FormField>
        <FormField id="cake-size" label="Cake size" error={errors.size}>
          <select
            id="cake-size"
            name="size"
            value={values.size}
            onChange={(event) => update("size", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.size)}
            aria-describedby={errors.size ? "cake-size-error" : undefined}
            required
          >
            <option value="">Select a size</option>
            {cakeSizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </FormField>
        <FormField id="cake-tiers" label="Number of tiers">
          <select
            id="cake-tiers"
            name="tiers"
            value={values.tiers}
            onChange={(event) => update("tiers", event.target.value)}
            className={fieldClassName}
          >
            {cakeTiers.map((tier) => (
              <option key={tier} value={tier}>
                {tier} {tier === "1" ? "tier" : "tiers"}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id="cake-date" label="Preferred date" error={errors.date}>
          <input
            id="cake-date"
            name="date"
            type="date"
            ref={(node) => {
              if (node) node.min = todayISO();
            }}
            value={values.date}
            onChange={(event) => update("date", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "cake-date-error" : undefined}
            required
          />
        </FormField>
        <FormField id="cake-time" label="Preferred time (optional)">
          <input
            id="cake-time"
            name="time"
            type="time"
            value={values.time}
            onChange={(event) => update("time", event.target.value)}
            className={fieldClassName}
          />
        </FormField>
      </div>
      <FormField id="cake-budget" label="Budget range (optional)">
        <select
          id="cake-budget"
          name="budget"
          value={values.budget}
          onChange={(event) => update("budget", event.target.value)}
          className={fieldClassName}
        >
          {budgetRanges.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </FormField>
      <FormField
        id="cake-message"
        label="Design description or message"
        hint="Colours, writing, and anything the cake should feel like."
      >
        <textarea
          id="cake-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={fieldClassName}
          aria-describedby="cake-message-hint"
        />
      </FormField>
      <FormField
        id="cake-reference"
        label="Reference image link (optional)"
        hint="Paste a link to a photo. Do not upload private files here."
        error={errors.referenceUrl}
      >
        <input
          id="cake-reference"
          name="referenceUrl"
          type="url"
          inputMode="url"
          placeholder="https://"
          value={values.referenceUrl}
          onChange={(event) => update("referenceUrl", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.referenceUrl)}
          aria-describedby={
            errors.referenceUrl ? "cake-reference-error cake-reference-hint" : "cake-reference-hint"
          }
        />
      </FormField>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 font-semibold text-white hover:bg-terracotta-deep"
      >
        Prepare WhatsApp enquiry
      </button>
      <p className="text-sm leading-6 text-cocoa">
        Preparing this message does not place an order and does not tell the bakery anything yet.
        You still need to send it in WhatsApp.
      </p>
      {link ? (
        <div className="rounded-3xl bg-peach/70 p-5" role="status">
          <h3 className="font-serif text-2xl">Your cake enquiry is ready to send</h3>
          <p className="mt-2 text-sm leading-6 text-cocoa">
            Open WhatsApp, check the message, and press send. The Golden Oven will only see this
            request after you send it yourself.
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-chocolate px-5 font-semibold text-cream"
          >
            Open WhatsApp to send
          </a>
        </div>
      ) : null}
    </form>
  );
}
