export const siteConfig = {
  name: "The Golden Oven",
  tagline: "Baked with heart, topped with joy.",
  established: 2024,
  description:
    "The Golden Oven is a bakery and dessert shop in Madina, Accra, baking cakes, cupcakes, bread, and pastries for everyday tables and celebrations.",
  phoneDisplay: "+233 500 321 924",
  phoneHref: "tel:+233500321924",
  phoneSchema: "+233500321924",
  whatsappNumber: "233500321924",
  whatsappUrl: "https://wa.me/233500321924",
  location: "Madina, Accra, Ghana",
  address: "GW 564 - 2233",
  locality: "Madina",
  region: "Accra",
  country: "Ghana",
  countryCode: "GH",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=GW%20564%20-%202233%20Madina%20Accra%20Ghana",
  allergenNote:
    "Menu descriptions are illustrative. If you have an allergy or a dietary requirement, confirm ingredients with the bakery before you order or eat anything.",
  deliveryFee: 30,
  maxQuantity: 12,
} as const;

export const openingHours = [
  {
    days: "Monday–Friday",
    hours: "9:00 AM–6:00 PM",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    days: "Saturday–Sunday",
    hours: "12:00 PM–7:00 PM",
    schemaDays: ["Saturday", "Sunday"],
    opens: "12:00",
    closes: "19:00",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-products", label: "Our Products" },
  { href: "/custom-cakes", label: "Custom Cakes" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-products", label: "Our Products" },
  { href: "/custom-cakes", label: "Create Your Cake" },
  { href: "/custom-cakes#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export function getConfiguredSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return null;
  return configured.replace(/\/$/, "");
}

export function getSiteUrl() {
  return getConfiguredSiteUrl() ?? "http://localhost:3000";
}
