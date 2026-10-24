import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";
import { openingHours, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact The Golden Oven | Madina, Accra",
  description:
    "Call, visit, or prepare a WhatsApp message for The Golden Oven at GW 564 - 2233, Madina, Accra.",
  path: "/contact",
  absoluteTitle: true,
});

export default function ContactPage() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Contact</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">Come by, or send a note.</h1>
          <p className="mt-4 leading-7 text-cocoa">
            Call, open WhatsApp, or leave a note below. We would love to hear what you are
            celebrating.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-cocoa">Telephone</dt>
              <dd className="mt-1 text-lg">
                <a href={siteConfig.phoneHref} className="font-semibold text-chocolate">
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-cocoa">Location</dt>
              <dd className="mt-1 leading-7">
                {siteConfig.address}
                <br />
                {siteConfig.location}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-cocoa">Hours</dt>
              <dd className="mt-1">
                <ul className="space-y-1">
                  {openingHours.map((entry) => (
                    <li key={entry.days}>
                      {entry.days}: {entry.hours}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-chocolate px-5 font-semibold text-cream"
            >
              WhatsApp {siteConfig.phoneDisplay}
            </a>
            <Link href="/custom-cakes" className="text-sm font-semibold text-chocolate underline underline-offset-4">
              Planning a custom cake instead?
            </Link>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-chocolate/10 bg-white p-5 sm:p-7">
          <h2 className="font-serif text-3xl">Send an enquiry</h2>
          <p className="mt-2 text-sm leading-6 text-cocoa">
            Use this for product questions, visits, or anything that is not a full custom-cake brief.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
