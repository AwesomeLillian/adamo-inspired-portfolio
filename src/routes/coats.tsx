import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import collectionCoats from "@/assets/collection-coats.jpg";
import coatsDetail from "@/assets/coats-detail.jpg";

export const Route = createFileRoute("/coats")({
  head: () => ({
    meta: [
      { title: "Coats & Overcoats — Marco Adamo" },
      {
        name: "description",
        content:
          "Tailored coats and overcoats at Marco Adamo — classic pinstripe and wool overcoats, cut for warmth and presence.",
      },
      { property: "og:title", content: "Coats & Overcoats — Marco Adamo" },
      {
        property: "og:description",
        content:
          "Tailored coats and overcoats, finished to the Marco Adamo standard.",
      },
    ],
  }),
  component: CoatsPage,
});

const features = [
  "Classic single- and double-breasted overcoats",
  "Wool and wool-blend fabrics for real warmth",
  "Cuts that layer cleanly over a suit",
  "Timeless colours — charcoal, navy, camel and cream",
  "Expert in-house fitting and alteration",
];

function CoatsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img
          src={collectionCoats}
          alt="Dark pinstripe tailored overcoat with tie"
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
            Coats
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Tailored coats and overcoats — the outer layer that finishes a
            gentleman's wardrobe with authority.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Presence in every season
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A Marco Adamo coat is chosen with the same care as our suits —
            measured, fitted and finished so it sits perfectly over your
            tailoring. From sharp pinstripes to soft camel and cream, every
            coat in the emporium earns its place.
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
            href="https://wa.me/27761964617?text=I%27d%20like%20to%20book%20a%20coat%20fitting"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Book a fitting
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-border">
          <img
            src={coatsDetail}
            alt="Cream tailored overcoat with black shirt and tie"
            loading="lazy"
            width={1024}
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
              Layer your coat over an imported Italian suit and a 2ply Egyptian cotton shirt.
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
