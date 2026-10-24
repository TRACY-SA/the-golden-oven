import { CartView } from "@/components/cart/CartView";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Your Shopping Cart",
  description: "Review your Golden Oven basket before checkout.",
  path: "/cart",
  index: false,
});

export default function CartPage() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <Container>
        <SectionHeading align="left" title="Your shopping cart" as="h1" />
        <div className="mt-8">
          <CartView />
        </div>
      </Container>
    </section>
  );
}
