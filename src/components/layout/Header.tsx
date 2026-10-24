"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Logo } from "@/components/ui/Logo";
import { headerLinks } from "@/lib/site-config";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const { count, openDrawer } = useCart();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-chocolate/10 bg-cream">
      <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-5 sm:px-8">
        <Link href="/" className="rounded-full" aria-label="The Golden Oven, home">
          <Logo />
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {headerLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm tracking-wide ${
                  active
                    ? "font-semibold text-terracotta after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-terracotta"
                    : "font-medium text-chocolate/80 hover:text-terracotta"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={openDrawer}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-chocolate hover:bg-peach"
            aria-label={`Open shopping cart, ${count} ${count === 1 ? "item" : "items"}`}
          >
            <ShoppingBag aria-hidden="true" size={18} />
            {count > 0 ? (
              <span className="absolute top-1 right-0 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[0.65rem] font-bold text-white">
                {count > 99 ? "99+" : count}
              </span>
            ) : null}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 items-center rounded-full border border-chocolate/15 bg-white px-4 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-chocolate/40"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              menuButtonRef.current?.focus();
            }}
          />
          <nav
            id={menuId}
            aria-label="Mobile"
            className="absolute top-0 right-0 flex h-full w-[min(100%,22rem)] flex-col bg-white px-6 py-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Logo variant="mark" />
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex min-h-11 items-center rounded-full border border-chocolate/15 px-4 font-semibold"
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
              >
                Close menu
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              {headerLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-center rounded-2xl px-3 text-lg font-semibold ${
                        active ? "bg-peach text-chocolate" : "text-chocolate"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/our-products"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-5 font-semibold text-white"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
