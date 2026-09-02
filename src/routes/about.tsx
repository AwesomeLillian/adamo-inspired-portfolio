import { createFileRoute, Link } from "@tanstack/react-router";

import aboutTailor from "@/assets/about-tailor.jpg";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Marco Adamo" },
      {
        name: "description",
        content:
          "Designer men's clothing imported for you. Over 35 years of experience, owner managed and run — Marco Adamo, exclusive men's clothing emporium.",
      },
      { property: "og:title", content: "About Us — Marco Adamo" },
      {
        property: "og:description",
        content: "Over 35 years of imported designer menswear, owner managed and run.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Since the beginning
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Designer men's clothing, imported for you
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-border">
          <img
            src={aboutTailor}
            alt="Master tailor measuring fabric in the Marco Adamo atelier"
            className="h-full w-full object-cover"
            width={1024}
            height={1280}
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Over 35 years at the measure
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            With over 35 years of experience, owner managed and run, Marco
            Adamo — exclusive men's clothing emporium — is conveniently located
            at a centre near you.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We import designer menswear directly from Italy and finish every
            fitting by hand. No seasons chased, no shortcuts taken — only
            garments made with the highest-quality materials and the patience
            to get the fit right.
          </p>
          <blockquote className="mt-8 border-l-2 border-primary pl-6">
            <p className="font-logo text-2xl italic text-foreground">
              "The quality of our suits is second to none."
            </p>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
              An emporium, not a shop
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Step inside and you'll find rails of imported suits, genuine
              leather shoes, 2ply Egyptian cotton shirts and the accessories to
              finish the look — plus a team that has dressed generations of
              South African gentlemen.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Come pay us a visit
            </Link>
          </div>
          <div className="order-1 overflow-hidden rounded-md border border-border lg:order-2">
            <img
              src={storeInterior}
              alt="Inside the Marco Adamo boutique"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
