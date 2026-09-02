import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import collectionSuits from "@/assets/collection-suits.jpg";
import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionShirts from "@/assets/collection-shirts.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Marco Adamo" },
      {
        name: "description",
        content:
          "Browse the Marco Adamo collections: imported Italian suits, genuine leather shoes, 2ply Egyptian cotton shirts and formal accessories.",
      },
      { property: "og:title", content: "Collections — Marco Adamo" },
      {
        property: "og:description",
        content:
          "Imported Italian suits, genuine leather shoes, Egyptian cotton shirts and formal accessories.",
      },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  {
    title: "Suits",
    description:
      "Imported Italian suits — half-canvas construction, Super 150s wool, tailored to the millimetre.",
    image: collectionSuits,
    to: "/suits" as const,
    alt: "Man in a tailored Italian suit inside the boutique",
  },
  {
    title: "Shoes",
    description:
      "Genuine leather shoes — hand-welted, vegetable-tanned and polished to a mirror shine.",
    image: collectionShoes,
    to: "/shoes" as const,
    alt: "Polished black genuine leather oxford shoes",
  },
  {
    title: "Shirts",
    description:
      "2ply Egyptian cotton shirts — crisp, breathable and finished with mother-of-pearl buttons.",
    image: collectionShirts,
    to: "/shirts" as const,
    alt: "Egyptian cotton formal shirts on wooden hangers",
  },
  {
    title: "Accessories",
    description:
      "Formal belts, silk ties, cufflinks and pocket squares — the finishing touches that complete the look.",
    image: collectionAccessories,
    to: "/collections" as const,
    alt: "Men's formal accessories flat lay with belt, tie and watch",
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
            Our Collections
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Four disciplines, one standard. Every piece in our emporium is
            selected at the source and finished with the care of 35 years of
            experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative block overflow-hidden rounded-md border border-border"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="card-zoom aspect-[16/11] w-full object-cover"
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
