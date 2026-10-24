import { getConfiguredSiteUrl, openingHours, siteConfig } from "@/lib/site-config";

export function BakeryJsonLd() {
  const siteUrl = getConfiguredSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phoneSchema,
    servesCuisine: "Bakery",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
    },
    openingHoursSpecification: openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.schemaDays,
      opens: entry.opens,
      closes: entry.closes,
    })),
    ...(siteUrl
      ? {
          url: siteUrl,
          image: `${siteUrl}/images/hero/hero-celebration.jpg`,
          logo: `${siteUrl}/icon.svg`,
        }
      : {}),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
