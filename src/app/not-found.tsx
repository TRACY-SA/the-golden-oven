import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-cream py-20">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">404</p>
        <h1 className="mt-3 font-serif text-5xl">That page is not on the menu.</h1>
        <p className="mt-4 text-cocoa">The link may be out of date. The bakery counter is still open.</p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center rounded-full bg-terracotta px-6 font-semibold text-white"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
