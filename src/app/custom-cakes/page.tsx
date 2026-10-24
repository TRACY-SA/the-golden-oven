import Image from "next/image";
import { CustomCakeForm } from "@/components/forms/CustomCakeForm";
import { Container } from "@/components/ui/Container";
import { cakeFlavours, cakeSizes, occasions } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Custom Cakes in Madina, Accra",
  description:
    "Enquire about a custom cake from The Golden Oven in Madina, Accra. Prepare a WhatsApp message with your date, flavour, and design notes.",
  path: "/custom-cakes",
});

const gallery = [
  {
    src: "/images/custom-cakes/custom-banner.jpg",
    alt: "Two-tier blush celebration cake with roses and strawberries",
  },
  {
    src: "/images/categories/category-signature-desserts.jpg",
    alt: "Heart-shaped berry cake with piped buttercream roses",
  },
  {
    src: "/images/packaging/takeaway-bag.jpg",
    alt: "Golden Oven takeaway bag beside butter croissants",
  },
  {
    src: "/images/packaging/cake-box.jpg",
    alt: "White frosted cake in an open Golden Oven cake box",
  },
];

const steps = [
  {
    title: "Tell us the occasion",
    text: "Share the date, size, flavour, and the feeling you want the cake to have.",
  },
  {
    title: "Prepare the message",
    text: "The form checks your details and writes a clear enquiry. It does not store the request.",
  },
  {
    title: "Send it on WhatsApp",
    text: "Open WhatsApp and press send. That is how the bakery can see the enquiry and reply.",
  },
];

export default function CustomCakesPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Custom cakes
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">
              A cake shaped around your day.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-cocoa">
              Birthdays, weddings, and quiet family lunches. Describe what you need and prepare a
              WhatsApp enquiry for The Golden Oven.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/custom-cakes/custom-banner.jpg"
              alt="Two-tier blush celebration cake with roses and strawberries"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section id="gallery" className="bg-ivory py-16" aria-labelledby="gallery-heading">
        <Container>
          <h2 id="gallery-heading" className="font-serif text-4xl">
            Cake inspiration
          </h2>
          <p className="mt-3 max-w-2xl text-cocoa">
            These photographs show the kind of finish we like. They are inspiration, not a promise
            that a particular cake is available today.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.src} className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="Available flavours" items={cakeFlavours} />
          <InfoCard title="Available sizes" items={cakeSizes} />
          <InfoCard title="Occasions" items={occasions} />
        </Container>
      </section>

      <section className="bg-peach py-16" aria-labelledby="process-heading">
        <Container>
          <h2 id="process-heading" className="font-serif text-4xl">
            How an enquiry works
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[1.5rem] bg-cream p-6">
                <p className="text-sm font-semibold text-gold-deep">0{index + 1}</p>
                <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cocoa">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream py-16" aria-labelledby="request-heading">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="request-heading" className="font-serif text-4xl">
              Request a custom cake
            </h2>
            <p className="mt-4 leading-7 text-cocoa">
              Fill in the form, then send the prepared message on WhatsApp to {siteConfig.phoneDisplay}.
              Submitting the form does not confirm an order.
            </p>
            <p className="mt-4 text-sm leading-6 text-cocoa">{siteConfig.allergenNote}</p>
          </div>
          <div className="rounded-[1.75rem] border border-chocolate/10 bg-white p-5 sm:p-7">
            <CustomCakeForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-6">
      <h2 className="font-serif text-2xl">{title}</h2>
      <ul className="mt-4 space-y-2 text-cocoa">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
