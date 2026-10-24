import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Great_Vibes, Playfair_Display, Source_Sans_3 } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BakeryJsonLd } from "@/components/ui/JsonLd";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "The Golden Oven | Cakes, Cupcakes & Fresh Pastries in Madina, Accra",
    template: "%s | The Golden Oven",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${playfair.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-chocolate">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <BakeryJsonLd />
        <CartProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
