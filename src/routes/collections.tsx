import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";
import casualShoes from "@/assets/collection-casual-shoes.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Shoes Collection — Marco Adamo" },
      {
        name: "description",
        content:
          "Browse Marco Adamo classic shoes, casual shoes and leather belts at Fourways Mall, Johannesburg.",
      },
      { property: "og:title", content: "Shoes Collection — Marco Adamo" },
      {
        property: "og:description",
        content:
          "Discover classic shoes, casual shoes and leather belts from Marco Adamo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  {
    title: "Classic Shoes",
    description: "Polished formal leather shoes with timeless lines and a confident finish.",
    image: collectionShoes,
    to: "/classic-shoes" as const,
    alt: "Polished black classic leather shoes",
  },
  {
    title: "Casual Shoes",
    description: "Refined leather footwear made for comfort beyond formal occasions.",
    image: casualShoes,
    to: "/casual-shoes" as const,
    alt: "Cognac brown casual leather shoes",
  },
  {
    title: "Belts",
    description: "Classic leather belts selected to complement your shoes and complete the look.",
    image: collectionAccessories,
    to: "/belts" as const,
    alt: "Leather belt from the Marco Adamo collection",
  },
];

function CollectionsPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Marco Adamo
          </p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Our Shoes Collection
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Three distinct collections, one standard. Find timeless formal
            pairs, easy casual styles and belts to bring the look together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative block overflow-hidden rounded-md border border-border bg-product"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[16/11] w-full object-contain p-5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
