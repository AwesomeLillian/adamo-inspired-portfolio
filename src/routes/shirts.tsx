import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import collectionShirts from "@/assets/collection-shirts.jpg";
import heroSuit from "@/assets/hero-suit.jpg";

export const Route = createFileRoute("/shirts")({
  head: () => ({
    meta: [
      { title: "2ply Egyptian Cotton Shirts — Marco Adamo" },
      {
        name: "description",
        content:
          "2ply Egyptian cotton formal shirts at Marco Adamo — crisp, breathable and finished with mother-of-pearl buttons.",
      },
      { property: "og:title", content: "2ply Egyptian Cotton Shirts — Marco Adamo" },
      {
        property: "og:description",
        content: "Crisp 2ply Egyptian cotton shirts, pressed and ready for any occasion.",
      },
    ],
  }),
  component: ShirtsPage,
});

const features = [
  "2ply Egyptian cotton — soft, strong, breathable",
  "Spread, point and cutaway collars",
  "Classic whites, blues and subtle stripes",
  "Mother-of-pearl buttons",
  "Slim and classic fits, expertly sized in-store",
];

function ShirtsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img
          src={collectionShirts}
          alt="2ply Egyptian cotton formal shirts on wooden hangers"
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
            Shirts
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            2ply Egyptian cotton shirts — crisp against the skin, sharp beneath
            the suit.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            The quiet hero of the wardrobe
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Egyptian cotton's long fibres weave into a cloth that is smoother,
            stronger and cooler against the skin. Pressed, collared and paired
            with the right tie, it carries the whole ensemble.
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
            href="https://wa.me/27761964617?text=I%27m%20looking%20for%20formal%20shirts"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Ask about the range
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-border">
          <img
            src={heroSuit}
            alt="Egyptian cotton shirt worn beneath a tailored suit"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              Wear it under the best
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Match your shirt with an imported Italian suit.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/suits"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Suits
            </Link>
            <Link
              to="/shoes"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Shoes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
