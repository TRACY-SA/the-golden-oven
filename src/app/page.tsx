import {
  BenefitsStrip,
  BestsellersSection,
  BrandStory,
  CategoryShowcase,
  CustomCakeBanner,
  FinalCta,
  HeroSection,
  TestimonialsSection,
  VisitSection,
} from "@/components/home/HomeSections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "The Golden Oven | Cakes, Cupcakes & Fresh Pastries in Madina, Accra",
  description:
    "The Golden Oven is a bakery in Madina, Accra, for celebration cakes, cupcakes, bread, and pastries. Baked with heart, topped with joy.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <CategoryShowcase />
      <BestsellersSection />
      <CustomCakeBanner />
      <BrandStory />
      <TestimonialsSection />
      <VisitSection />
      <FinalCta />
    </>
  );
}
