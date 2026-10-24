"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { categoryContent } from "@/data/content";
import { products } from "@/data/products";
import type { Category } from "@/types/product";
import { categories } from "@/types/product";

type SortKey = "featured" | "price-asc" | "price-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

function isCategory(value: string | null): value is Category {
  return categories.includes(value as Category);
}

export function ProductCatalogue() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const featuredOnly = searchParams.get("collection") === "featured";
  const category: Category | "all" =
    featuredOnly || !isCategory(categoryParam) ? "all" : categoryParam;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  function replaceParams(mutate: (params: URLSearchParams) => void) {
    const params = new URLSearchParams(searchParams.toString());
    mutate(params);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function setCategory(next: Category | "all") {
    replaceParams((params) => {
      params.delete("collection");
      if (next === "all") params.delete("category");
      else params.set("category", next);
    });
  }

  function setFeatured(next: boolean) {
    replaceParams((params) => {
      params.delete("category");
      if (next) params.set("collection", "featured");
      else params.delete("collection");
    });
  }

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = featuredOnly
        ? product.isFeatured
        : category === "all" || product.category === category;
      const haystack = [product.name, product.description, ...product.tags].join(" ").toLowerCase();
      const matchesSearch = query.length === 0 || haystack.includes(query);
      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price || a.name.localeCompare(b.name);
      if (sort === "price-desc") return b.price - a.price || a.name.localeCompare(b.name);
      return (
        Number(b.isBestseller) - Number(a.isBestseller) ||
        Number(b.isFeatured) - Number(a.isFeatured) ||
        a.name.localeCompare(b.name)
      );
    });
  }, [category, featuredOnly, search, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-[1.75rem] border border-chocolate/10 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <FilterButton active={!featuredOnly && category === "all"} onClick={() => setCategory("all")}>
            All treats
          </FilterButton>
          {categories.map((item) => (
            <FilterButton key={item} active={!featuredOnly && category === item} onClick={() => setCategory(item)}>
              {categoryContent[item].label}
            </FilterButton>
          ))}
          <FilterButton active={featuredOnly} onClick={() => setFeatured(!featuredOnly)}>
            Signature desserts
          </FilterButton>
        </div>
        <div className="grid gap-3 md:grid-cols-[1fr_16rem]">
          <div>
            <label htmlFor="product-search" className="sr-only">
              Search products by name
            </label>
            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, such as croissant or red velvet"
              className="min-h-12 w-full rounded-full border border-chocolate/15 bg-cream px-5 text-base outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label htmlFor="product-sort" className="sr-only">
              Sort products
            </label>
            <select
              id="product-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="min-h-12 w-full rounded-full border border-chocolate/15 bg-cream px-4 text-base"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-cocoa" aria-live="polite">
          Showing {visible.length} of {products.length} treats
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="Nothing matches that search"
            description="Try another name, or clear the filters to see the full menu."
          />
          <div className="mt-4 text-center">
            <button
              type="button"
              className="min-h-11 rounded-full px-4 font-semibold text-terracotta"
              onClick={() => {
                setSearch("");
                setSort("featured");
                replaceParams((params) => {
                  params.delete("collection");
                  params.delete("category");
                });
              }}
            >
              Clear filters
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
        active ? "bg-terracotta text-white" : "bg-ivory text-chocolate hover:bg-peach"
      }`}
    >
      {children}
    </button>
  );
}
