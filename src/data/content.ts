import type { Category } from "@/types/product";

export const categoryContent: Record<
  Category,
  { label: string; blurb: string; image: string; alt: string }
> = {
  cakes: {
    label: "Cakes",
    blurb: "Celebration layers, loaf cakes, and centrepieces for the table.",
    image: "/images/categories/category-cakes.jpg",
    alt: "Chocolate ganache cake with curls on a warm white plate",
  },
  cupcakes: {
    label: "Cupcakes",
    blurb: "Single-serve swirls for boxes, offices, and small joys.",
    image: "/images/categories/category-cupcakes.jpg",
    alt: "Assorted cupcakes with pink, yellow, and white frosting",
  },
  bread: {
    label: "Bread",
    blurb: "Soft loaves, seeded rounds, and sweet breads for the week.",
    image: "/images/categories/category-bread.jpg",
    alt: "Golden bread loaves on linen",
  },
  pastries: {
    label: "Pastries",
    blurb: "Croissants, pies, and morning bakes from the counter.",
    image: "/images/categories/category-pastries.jpg",
    alt: "Croissants and a fruit danish on a cream plate",
  },
};

export const sampleTestimonials = [
  {
    id: "sample-ama",
    name: "Ama",
    occasion: "Birthday order",
    quote:
      "The chocolate cake looked as generous as it tasted. We cut it at the table and nobody wanted the last conversation to end.",
  },
  {
    id: "sample-kwesi",
    name: "Kwesi",
    occasion: "Weekend pickup",
    quote:
      "I stopped in for croissants and left with cinnamon rolls as well. The box still smelled warm when I got home.",
  },
  {
    id: "sample-efua",
    name: "Efua",
    occasion: "Custom cake",
    quote:
      "I described a simple two-tier cake for a family lunch and the result felt personal without being fussy.",
  },
] as const;

export const cakeFlavours = [
  "Classic chocolate",
  "Red velvet",
  "Vanilla berry",
  "Lemon",
  "Carrot walnut",
  "Coconut cream",
  "Salted caramel",
  "Black forest",
] as const;

export const cakeSizes = ["6 inch", "8 inch", "10 inch", "Sheet cake"] as const;

export const cakeTiers = ["1", "2", "3"] as const;

export const occasions = [
  "Birthday",
  "Wedding",
  "Anniversary",
  "Baby celebration",
  "Graduation",
  "Just because",
  "Other",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Under GH₵ 200",
  "GH₵ 200–400",
  "GH₵ 400–700",
  "Over GH₵ 700",
] as const;

export const brandValues = [
  {
    title: "Warm hospitality",
    text: "The counter should feel welcoming, whether someone is buying a single croissant or collecting a celebration cake.",
  },
  {
    title: "Care in the finish",
    text: "Presentation is part of the pleasure. Cakes, boxes, and loaves are meant to look considered before they are unwrapped.",
  },
  {
    title: "Made for occasions",
    text: "From weekday bread to a custom cake, the menu is built around moments people actually gather for.",
  },
  {
    title: "Joy in the details",
    text: "From the crumb of a loaf to the ribbon on a box, small touches are how a bake becomes a memory.",
  },
] as const;
