import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import collectionSuits from "@/assets/collection-suits.jpg";
import diamondCollection from "@/assets/diamond-collection.jpg";

export const Route = createFileRoute("/suits")({
  head: () => ({
    meta: [
      { title: "Imported Italian Suits — Marco Adamo" },
      {
        name: "description",
        content:
          "Imported Italian suits of the highest quality. The quality of our suits is second to none — find your best suit at Marco Adamo.",
      },
      { property: "og:title", content: "Imported Italian Suits — Marco Adamo" },
      {
        property: "og:description",
        content: "Italian suits made with only the highest-quality materials.",
      },
    ],
  }),
  component: SuitsPage,
});

const features = [
  "Imported directly from Italian ateliers",
  "Half-canvas construction for a natural drape",
  "Super 150s wool and wool-silk blends",
  "Two-piece, three-piece and tuxedo options",
  "Expert in-house fitting and alteration",
];

function SuitsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img
          src={collectionSuits}
          alt="Man wearing a tailored imported Italian suit"
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
            Suits
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Imported Italian suits, made with only the highest-quality
            materials. The quality of our suits is second to none.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Cut for the man who chooses
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From the boardroom to the wedding aisle, a Marco Adamo suit is
            measured, steamed and tried on before it leaves the counter. Our
            team will guide you through fabric, cut and finish until the fit is
            unmistakably yours.
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
            href="https://wa.me/27761964617?text=I%27d%20like%20to%20book%20a%20suit%20fitting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Book a fitting
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-border">
          <img
            src={diamondCollection}
            alt="Black tuxedo from the Marco Adamo Diamond Collection"
            loading="lazy"
            width={1280}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              Complete the look
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pair your suit with genuine leather shoes and a 2ply Egyptian cotton shirt.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/shoes"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Shoes
            </Link>
            <Link
              to="/shirts"
              className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Shirts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
