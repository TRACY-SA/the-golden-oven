import Link from "next/link";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Logo } from "@/components/ui/Logo";
import { categoryContent } from "@/data/content";
import { navLinks, openingHours, siteConfig } from "@/lib/site-config";
import type { Category } from "@/types/product";

const categories = Object.keys(categoryContent) as Category[];

export function Footer() {
  return (
    <footer className="border-t border-chocolate/10 bg-ivory text-chocolate">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-cocoa">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-cocoa">
            A bakery for cakes, cupcakes, bread, and pastries, established in {siteConfig.established}.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl">Visit</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-cocoa">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-terracotta">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl">The menu</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-cocoa">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/our-products?category=${category}`} className="hover:text-terracotta">
                  {categoryContent[category].label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-cocoa">
            <li>
              <a href={siteConfig.phoneHref} className="font-semibold text-chocolate hover:text-terracotta">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              {siteConfig.address}
              <br />
              {siteConfig.location}
            </li>
            {openingHours.map((entry) => (
              <li key={entry.days}>
                {entry.days}
                <br />
                {entry.hours}
              </li>
            ))}
            <li>
              <a
                href={siteConfig.whatsappUrl}
                className="font-semibold text-terracotta underline decoration-terracotta/40 underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp the bakery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-chocolate/10">
        <p className="mx-auto w-full max-w-7xl px-5 py-5 text-sm text-cocoa sm:px-8">
          © <CopyrightYear /> The Golden Oven.
        </p>
      </div>
    </footer>
  );
}
