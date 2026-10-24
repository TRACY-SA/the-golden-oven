import { Suspense } from "react";
import Link from "next/link";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Products",
  description:
    "Browse cakes, cupcakes, bread, and pastries from The Golden Oven, or start a cake of your own.",
  path: "/our-products",
});

export default function OurProductsPage() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="The menu"
          title="Our Products"
          description="Cakes, cupcakes, bread, and pastries, ready to add to your basket."
          as="h1"
        />
        <p className="mt-4 max-w-2xl text-sm leading-6 text-cocoa">{siteConfig.allergenNote}</p>
        <div className="mt-8">
          <Suspense fallback={<p className="text-cocoa">Loading the menu…</p>}>
            <ProductCatalogue />
          </Suspense>
        </div>
        <section className="mt-14 overflow-hidden rounded-[1.75rem] bg-terracotta px-6 py-10 text-cream sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Create your own cake</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight">A cake shaped around your day.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-cream/90">
            Choose the flavour, the size, and the occasion. Tell us what the celebration feels like,
            and we will help you bring the cake to the table.
          </p>
          <Link
            href="/custom-cakes"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-semibold text-chocolate hover:bg-white"
          >
            Create your own cake
          </Link>
        </section>
      </Container>
    </section>
  );
}
