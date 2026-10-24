"use client";

import { useState, type FormEvent } from "react";
import { FormField, fieldClassName } from "@/components/forms/FormField";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { isValidEmail, isValidGhanaPhone } from "@/lib/validation";

type ContactValues = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
};

const emptyValues: ContactValues = {
  name: "",
  phone: "",
  email: "",
  topic: "Product enquiry",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [link, setLink] = useState("");

  function update(field: keyof ContactValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setLink("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof ContactValues, string>> = {};
    if (values.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!isValidGhanaPhone(values.phone)) {
      nextErrors.phone = "Enter a Ghana phone number, such as 0500321924 or +233500321924.";
    }
    if (values.email.trim() && !isValidEmail(values.email)) {
      nextErrors.email = "Enter a valid email address, or leave this blank.";
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = "Add a short message of at least 10 characters.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setLink("");
      return;
    }

    const message = [
      "Hello The Golden Oven, I would like to get in touch.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim() || "Not provided"}`,
      `Topic: ${values.topic}`,
      `Message: ${values.message.trim()}`,
      "",
      "This message was prepared on the website. It has not been sent until I press send in WhatsApp.",
    ].join("\n");
    setLink(buildWhatsAppLink(message));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <FormField id="contact-name" label="Your name" error={errors.name}>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          required
        />
      </FormField>
      <FormField
        id="contact-phone"
        label="Telephone"
        hint="Use a Ghana number, starting with 0 or +233."
        error={errors.phone}
      >
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error contact-phone-hint" : "contact-phone-hint"}
          required
        />
      </FormField>
      <FormField id="contact-email" label="Email (optional)" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
      </FormField>
      <FormField id="contact-topic" label="Topic">
        <select
          id="contact-topic"
          name="topic"
          value={values.topic}
          onChange={(event) => update("topic", event.target.value)}
          className={fieldClassName}
        >
          <option>Product enquiry</option>
          <option>Custom cake</option>
          <option>Visit or pickup</option>
          <option>Something else</option>
        </select>
      </FormField>
      <FormField id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={fieldClassName}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          required
        />
      </FormField>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 font-semibold text-white hover:bg-terracotta-deep"
      >
        Prepare WhatsApp message
      </button>
      <p className="text-sm leading-6 text-cocoa">
        This form does not store or send your message. It prepares a WhatsApp note for you to send yourself.
      </p>
      {link ? (
        <div className="rounded-3xl bg-peach/70 p-5" role="status">
          <p className="font-semibold text-chocolate">Your enquiry message is ready.</p>
          <p className="mt-2 text-sm leading-6 text-cocoa">
            Open WhatsApp and press send to share it with The Golden Oven. Nothing has been delivered yet.
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-chocolate px-5 font-semibold text-cream"
          >
            Open WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
