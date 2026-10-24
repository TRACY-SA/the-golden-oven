# The Golden Oven

A premium bakery website for **The Golden Oven**, a bakery and dessert shop in Madina, Accra, established in 2024. The tagline is “Baked with heart, topped with joy.”

This is a frontend coursework project. Visitors can browse 40 products, keep a demonstration cart in the browser, and walk through a simulated checkout. Custom-cake and contact forms prepare a WhatsApp message. They do not store or send the enquiry by themselves.

## Business details used on the site

| Detail | Value |
| --- | --- |
| Location | Madina, Accra, Ghana |
| Address | GW 564 - 2233 |
| Telephone | +233 500 321 924 (`tel:+233500321924`) |
| WhatsApp | https://wa.me/233500321924 |
| Monday–Friday | 9:00 AM–6:00 PM |
| Saturday–Sunday | 12:00 PM–7:00 PM |
| Currency | Ghanaian cedi, shown as `GH₵` |

No email address, social profile, founder name, award, or map pin is invented. The map link is a search for the written address, and the page says so. Testimonials are labelled as sample writing for this project, not verified reviews. Prices are illustrative coursework prices.

## Features

- Editorial homepage with an original logo, photographic hero, benefit strip, five specialty cards, bestsellers, a custom-cake banner, brand story, sample testimonials, hours, and footer.
- Product catalogue with category filters, name search, and sort (featured, price low to high, price high to low).
- Custom cake enquiry with validation and a WhatsApp handoff.
- About and contact pages with the same business facts.
- Cart drawer and cart page: add, increase, decrease, remove, subtotals, and an empty state.
- Demo checkout with collection or a labelled delivery fee of GH₵ 20.00, then an order-success page.
- Direct visits to `/order-success` show a fallback when no demo order is in the session.
- SEO metadata, Open Graph and Twitter cards, sitemap, robots rules, and Bakery JSON-LD.
- Skip link, labelled controls, keyboard-closeable mobile menu, and reduced-motion handling.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` (Playfair Display, Source Sans 3, and Great Vibes for a short script accent)
- `next/image` for local files in `public/images`
- lucide-react for icons

There is no database, authentication, or payment provider. Cart and checkout state stay in the browser.

## Project structure

```text
src/app/                  routes, layout, sitemap, robots, icon
src/components/layout/    header, footer, copyright year
src/components/home/      homepage sections
src/components/products/  cards, catalogue, price display
src/components/cart/      provider, drawer, cart page, quantity, add button
src/components/forms/     contact, custom cake, checkout, form field
src/components/order/     demo order success view
src/components/ui/        logo, buttons, headings, badges, JSON-LD
src/data/products.ts      40 products
src/data/content.ts       categories, sample testimonials, cake options
src/lib/                  site config, currency, validation, WhatsApp, cart storage, metadata
src/types/                product, cart, and order types
public/images/            photography used on the site
public/icon.svg           favicon copy
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL printed in the terminal. If port 3000 is already in use, Next.js chooses the next free port.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

`npm run lint` runs ESLint. `npx tsc --noEmit` typechecks without emitting files. `npm run build` creates the production build. There is no automated test suite in this project.

## Environment variables

Copy `.env.example` if you want a local env file. The only variable is optional:

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

When it is unset, canonical URLs, the sitemap, and Open Graph URLs use `http://localhost:3000`. That is a local default, not a claimed production domain. Bakery JSON-LD includes `url`, `image`, and `logo` only when `NEXT_PUBLIC_SITE_URL` is set.

## Components

Shared layout lives in `Header` and `Footer`. Product cards, the catalogue, and the currency formatter are reused on the homepage and the menu. Forms share `FormField` for labels and errors. The cart is provided once in the root layout, so the header count, drawer, and cart page read the same state.

Server Components are the default. Client Components are used for the cart, mobile menu, filters, forms, checkout, and the success page.

## Product catalogue

`src/data/products.ts` holds 40 products: 10 cakes, 10 cupcakes, 10 breads, and 10 pastries. Importing the file checks that each category has exactly ten products and that ids and slugs are unique.

Prices are formatted with `Intl.NumberFormat` in `src/lib/currency.ts` as `GH₵ 25.00`.

## Cart persistence

The cart stores `{ productId, quantity }` in `localStorage` under `golden-oven-cart-v1`. Prices are read from the product dataset, not from storage. Quantity is kept between 1 and 12. The provider uses `useSyncExternalStore` so the server render starts from an empty cart and does not mismatch during hydration. Refreshing the page keeps the cart. A completed demo checkout clears it.

## Simulated checkout

Checkout validates name, a Ghana telephone number (`0` plus 9 digits, or `+233` plus 9 digits), a date that is not in the past, a delivery address when delivery is selected, and a demo payment choice. The payment choices are “pay on collection” and a mobile-money placeholder. The form never asks for a card number, CVV, PIN, or wallet secret.

Placing the demo order writes a reference such as `GO-` plus six characters into `sessionStorage` (`golden-oven-demo-order`), clears the cart, and opens `/order-success`. The success copy says the checkout is a simulation and that no payment was collected. Visiting that route without a stored demo order shows “No demo order to show”.

## Custom cake and contact

Both forms validate required fields and then show a link the visitor must click. The link is `https://wa.me/233500321924` with the message in a `text` query parameter built by `URLSearchParams`. The bakery only receives the enquiry after the visitor sends it in WhatsApp.

## SEO and accessibility

Public routes have titles, descriptions, canonical links, Open Graph data, and Twitter cards. `/cart`, `/checkout`, and `/order-success` are `noindex` and are disallowed in `robots.txt`. The sitemap lists the five public pages only.

JSON-LD describes a Bakery with the verified name, phone, address, and opening hours. It does not include reviews, ratings, coordinates, or social profiles.

The pages use landmarks, one `h1`, a skip link, visible focus, labelled fields, and accessible names on icon buttons and cart controls. Motion is shortened when `prefers-reduced-motion` is set. This project was not certified against WCAG 2.2 AA. An automated accessibility audit was not run.

## Design

The colour system is sage green, butter yellow, and warm white. Tokens live in `src/app/globals.css`. Sage is used for actions and strong accents. Butter yellow is limited to highlights, the custom-cake banner button, and small details. Page backgrounds stay warm white.

The logo is an original oven-arch mark in sage, butter, and warm white (`src/components/ui/Logo.tsx` and `src/app/icon.svg`). It is not taken from another bakery brand.

## Photography

Generated photographs for this redesign live under `public/images/`:

- `hero/hero-celebration.jpg`
- `categories/` for cakes, cupcakes, bread, pastries, and signature desserts
- `products/cakes/`, `products/cupcakes/`, `products/bread/`, and `products/pastries/`
- `packaging/cake-box.jpg`, `cupcake-box.jpg`, `pastry-box.jpg`, and `takeaway-bag.jpg`
- `custom-cakes/custom-banner.jpg`
- `about/bakery-bench.jpg`

Each of the 40 products has its own image. Two of those images are branded packaging scenes: the vanilla buttercream cupcakes in a Golden Oven box, and the butter croissants in a Golden Oven pastry box. The cake box, takeaway bag, and bakery-bench photograph appear in the custom-cake gallery and the About story. The bench photograph is labelled as an illustration. It does not show the Madina shop.

Older files may still sit in `public/images/` from the first version of the site. The pages no longer reference them.

## Deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the real site URL.
2. Run `npm run build`.
3. Deploy the Next.js app (for example with `npm start`, or a host that supports Next.js).

No server secrets are required.

## Limitations

- No order is sent to the bakery, and no payment is taken.
- Prices, product copy, and testimonials are for the coursework demo.
- Until a real domain is set, canonical URLs and the sitemap point at localhost.
- Product, hero, and packaging photographs were generated for this coursework site. They are not photographs taken in the Madina shop.
- Accessibility was checked with keyboard use, labels, and contrast choices in the design tokens. That is not a full WCAG audit.
