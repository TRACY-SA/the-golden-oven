import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  absoluteTitle = false,
}: PageMeta): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`;
  const image = "/images/hero/hero-celebration.jpg";

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_GH",
      type: "website",
      images: [
        {
          url: image,
          alt: "Pink celebration cake with strawberries and roses from The Golden Oven",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
