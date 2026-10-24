import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brandValues, categoryContent } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Category } from "@/types/product";

export const metadata = createPageMetadata({
  title: "About The Golden Oven | Baked with Heart, Topped with Joy",
  description:
    "The Golden Oven bakes cakes, cupcakes, bread, and pastries with heart and joy. Established in 2024.",
  path: "/about-us",
  absoluteTitle: true,
});

const categories = Object.keys(categoryContent) as Category[];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Established {siteConfig.established}
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">{siteConfig.name}</h1>
            <p className="mt-4 font-serif text-2xl text-cocoa">{siteConfig.tagline}</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-cocoa">
              The Golden Oven opened in {siteConfig.established} for cakes, cupcakes, bread, and
              pastries that feel made for the moment. {siteConfig.tagline}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about/bakery-bench.jpg"
              alt="A partly frosted cake beside a Golden Oven cake box on a marble counter"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-4xl">The story we are baking</h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-cocoa">
            <p>
              We bake for the everyday and the celebration. A soft loaf for breakfast. Cupcakes
              packed for a shared table. A cake finished for a day someone will remember.
            </p>
            <p>
              Hospitality sits in the details: a warm welcome, a careful finish, and a box that
              feels like a gift before it is opened.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16" aria-labelledby="range-heading">
        <Container>
          <h2 id="range-heading" className="font-serif text-4xl">
            What we bake
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article key={category} className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={categoryContent[category].image}
                    alt={categoryContent[category].alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl">{categoryContent[category].label}</h3>
                  <p className="mt-2 text-sm leading-6 text-cocoa">{categoryContent[category].blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-peach py-16" aria-labelledby="values-heading">
        <Container>
          <h2 id="values-heading" className="font-serif text-4xl">
            What the brand stands for
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {brandValues.map((value) => (
              <article key={value.title} className="rounded-[1.5rem] bg-cream p-6">
                <h3 className="font-serif text-2xl">{value.title}</h3>
                <p className="mt-2 leading-7 text-cocoa">{value.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/our-products"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 font-semibold text-white"
            >
              Explore the menu
            </Link>
            <Link
              href="/custom-cakes"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-semibold text-chocolate"
            >
              Request a custom cake
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
