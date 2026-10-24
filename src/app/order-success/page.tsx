import { OrderSuccessView } from "@/components/order/OrderSuccessView";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Order Placed",
  description: "Your Golden Oven order confirmation.",
  path: "/order-success",
  index: false,
});

export default function OrderSuccessPage() {
  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <OrderSuccessView />
      </Container>
    </section>
  );
}
