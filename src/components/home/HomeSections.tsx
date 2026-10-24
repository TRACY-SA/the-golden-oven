import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cake, Heart, Leaf, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryContent, sampleTestimonials } from "@/data/content";
import { getBestsellerProducts } from "@/data/products";
import { openingHours, siteConfig } from "@/lib/site-config";
import type { Category } from "@/types/product";

const categories = Object.keys(categoryContent) as Category[];

const specialties = [
  ...categories.map((category) => ({
    href: `/our-products?category=${category}`,
    title: categoryContent[category].label,
    subtitle: categoryContent[category].blurb,
    image: categoryContent[category].image,
    alt: categoryContent[category].alt,
  })),
  {
    href: "/our-products?collection=featured",
    title: "Signature Desserts",
    subtitle: "A short collection of the bakes we like to put forward.",
    image: "/images/categories/category-signature-desserts.jpg",
    alt: "Heart-shaped berry cake with piped buttercream roses",
  },
];

const benefits = [
  { icon: Leaf, label: "Premium Ingredients" },
  { icon: Cake, label: "Freshly Baked Favourites" },
  { icon: Sparkles, label: "Thoughtful Presentation" },
  { icon: Heart, label: "Custom Cakes for Every Occasion" },
];

export function HeroSection() {
  return (
    <section className="bg-cream">
      <Container className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Freshly baked · Made with love
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.7rem] leading-[1.05] tracking-tight text-chocolate sm:text-6xl lg:text-[4.35rem]">
            Life Is Sweeter at The Golden Oven.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-cocoa">
            From celebration cakes to everyday treats, discover freshly baked favourites made to
            bring a little more joy to every moment.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/our-products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 font-semibold text-white hover:bg-terracotta-deep"
            >
              Shop Our Treats
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href="/custom-cakes"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-terracotta/30 bg-white/80 px-6 font-semibold text-chocolate hover:bg-white"
            >
              Create Your Cake
            </Link>
          </div>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-ivory">
          <Image
            src="/images/hero/hero-celebration.jpg"
            alt="Pink celebration cake with a white drip, strawberries, and roses on a pedestal"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[70%_center]"
          />
        </div>
      </Container>
    </section>
  );
}

export function BenefitsStrip() {
  return (
    <section className="border-y border-chocolate/10 bg-cream" aria-label="What we aim for">
      <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.label}
            className={`flex items-center gap-3 lg:justify-center ${
              index > 0 ? "lg:border-l lg:border-chocolate/10 lg:pl-6" : ""
            }`}
          >
            <benefit.icon aria-hidden="true" className="shrink-0 text-terracotta" size={22} strokeWidth={1.5} />
            <p className="text-sm font-semibold text-chocolate">{benefit.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function CategoryShowcase() {
  return (
    <section className="bg-cream py-16 sm:py-20" aria-labelledby="categories-heading">
      <Container>
        <SectionHeading
          id="categories-heading"
          eyebrow="Our specialties"
          title="Explore Our Sweet Creations"
          description="Cakes, cupcakes, bread, pastries, and a short list of signature desserts."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {specialties.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[1.35rem] border border-chocolate/10 bg-white shadow-[0_16px_40px_-32px_rgba(60,48,40,0.7)]"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-4 text-center sm:px-4">
                <h3 className="font-serif text-xl text-chocolate">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm leading-5 text-cocoa">{item.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-terracotta">
                  Shop Now
                  <ArrowRight aria-hidden="true" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BestsellersSection() {
  const products = getBestsellerProducts().slice(0, 5);
  return (
    <section className="bg-peach/70 py-16 sm:py-20" aria-labelledby="bestsellers-heading">
      <Container>
        <SectionHeading
          id="bestsellers-heading"
          eyebrow="The crowd favourites"
          title="Our Most-Loved Treats"
          description="The bakes our tables ask for again and again."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CustomCakeBanner() {
  return (
    <section className="bg-terracotta text-cream">
      <Container className="grid items-center gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div>
          <p className="font-script text-5xl text-gold sm:text-6xl">Custom cakes</p>
          <h2 className="mt-2 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
            Made for your moments.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-8 text-cream/90">
            Tell us your vision, choose your flavours, and let us help you create a cake for a
            celebration worth remembering.
          </p>
          <Link
            href="/custom-cakes"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-semibold text-chocolate hover:bg-white"
          >
            Order a Custom Cake
          </Link>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem]">
          <Image
            src="/images/custom-cakes/custom-banner.jpg"
            alt="Two-tier blush celebration cake with roses and strawberries"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export function BrandStory() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/about/bakery-bench.jpg"
            alt="A partly frosted cake, a piping bag, and a Golden Oven cake box on a marble counter"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow={`Established ${siteConfig.established}`}
            title={siteConfig.tagline}
            description="The Golden Oven bakes cakes, cupcakes, bread, and pastries for quiet mornings and tables worth gathering around. Every tray leaves the oven with generous flavour, a considered finish, and a little joy in the unwrapping."
          />
          <p className="mt-5 max-w-lg leading-7 text-cocoa">
            A loaf for the week. A box of cupcakes for a shared afternoon. A cake that carries
            someone's celebration. That is the work we love.
          </p>
          <Link href="/about-us" className="mt-6 inline-flex min-h-11 items-center font-semibold text-terracotta">
            Read our story
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-ivory py-16 sm:py-24" aria-labelledby="stories-heading">
      <Container>
        <SectionHeading
          id="stories-heading"
          title="Customer Reviews"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sampleTestimonials.map((item) => (
            <figure key={item.id} className="rounded-[1.75rem] bg-white p-6">
              <blockquote className="text-lg leading-8 text-chocolate">“{item.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-cocoa">
                <span className="font-semibold text-chocolate">{item.name}</span>
                <span className="mt-1 block">{item.occasion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VisitSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] bg-chocolate px-6 py-8 text-cream sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Visit the bakery</p>
          <h2 className="mt-3 font-serif text-4xl">Madina, Accra</h2>
          <p className="mt-3 text-peach">{siteConfig.address}</p>
          <a href={siteConfig.phoneHref} className="mt-4 inline-flex min-h-11 items-center text-lg font-semibold">
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="rounded-[1.75rem] border border-chocolate/10 bg-white p-6 sm:p-8">
          <h3 className="font-serif text-3xl">Opening hours</h3>
          <ul className="mt-5 space-y-4">
            {openingHours.map((entry) => (
              <li key={entry.days} className="flex items-center justify-between gap-4 border-b border-chocolate/10 pb-4">
                <span className="font-semibold">{entry.days}</span>
                <span className="text-cocoa">{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-ivory pb-16 sm:pb-24">
      <Container>
        <div className="rounded-[2rem] bg-peach px-6 py-12 text-center sm:px-12">
          <h2 className="font-serif text-4xl sm:text-5xl">Save something sweet for later.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cocoa">
            Browse the menu, fill a basket, or start a cake that is entirely yours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/our-products"
              className="inline-flex min-h-12 items-center rounded-full bg-terracotta px-6 font-semibold text-white"
            >
              Shop the menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 font-semibold text-chocolate"
            >
              Contact the bakery
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
