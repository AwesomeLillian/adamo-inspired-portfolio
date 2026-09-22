import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

export const Route = createFileRoute("/shoes")({
  head: () => ({
    meta: [
      { title: "Genuine Leather Shoes — Marco Adamo" },
      {
        name: "description",
        content:
          "Genuine leather formal shoes at Marco Adamo — oxfords, derbies and loafers, hand-finished and built to last.",
      },
      { property: "og:title", content: "Genuine Leather Shoes — Marco Adamo" },
      {
        property: "og:description",
        content: "Genuine leather formal shoes, hand-finished and built to last.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShoesPage,
});

const features = [
  "Genuine full-grain leather uppers",
  "Goodyear-welted and stitched soles",
  "Oxfords, derbies, loafers and monk straps",
  "Classic black, chestnut and oxblood",
  "Matching formal belts available",
];

function ShoesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img
          src={collectionShoes}
          alt="Polished black genuine leather oxford shoes"
          className="absolute inset-0 h-full w-full object-cover"
          width={1024}
          height={1024}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            The Collection
          </p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Shoes
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Genuine leather shoes, hand-finished and polished to a mirror
            shine. The foundation of every gentleman's wardrobe.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-md border border-border lg:order-1">
          <img
            src={collectionAccessories}
            alt="Formal accessories including a leather belt to match your shoes"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Leather that earns its shine
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A great look starts with the shoes beneath it. Our range is sourced
            for leather quality first — then last, stitching and sole —
            so each pair ages with character rather than wearing out.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/27761964617?text=I%27m%20looking%20for%20formal%20leather%20shoes"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Ask about sizes
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              Step up to the full collection
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore classic shoes, casual shoes and leather belts.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/collections"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View Collection
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
