import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Checkout",
  description: "Choose pickup or delivery to your doorstep and place your Golden Oven order.",
  path: "/checkout",
  index: false,
});

export default function CheckoutPage() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Almost there"
          title="Checkout"
          description="Tell us when you would like your order, and whether we should have it ready for pickup or bring it to your door."
          as="h1"
        />
        <div className="mt-8">
          <CheckoutForm />
        </div>
      </Container>
    </section>
  );
}
