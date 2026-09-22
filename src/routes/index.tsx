import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Diamond, MapPin } from "lucide-react";

import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";
import casualShoes from "@/assets/collection-casual-shoes.jpg";
import storefrontAsset from "@/assets/marco-adamo-storefront.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marco Adamo — Classic & Casual Shoes in Johannesburg" },
      {
        name: "description",
        content:
          "Discover Marco Adamo classic shoes, casual shoes and leather belts at Fourways Mall, Johannesburg.",
      },
      { property: "og:title", content: "Marco Adamo — Essence of Elegance" },
      {
        property: "og:description",
        content:
          "Classic shoes, casual shoes and leather belts selected for enduring style.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collections = [
  {
    title: "Classic Shoes",
    description: "Polished formal leather shoes",
    image: collectionShoes,
    to: "/shoes" as const,
    alt: "Polished black classic leather shoes",
  },
  {
    title: "Casual Shoes",
    description: "Refined comfort for every day",
    image: casualShoes,
    to: "/shoes" as const,
    alt: "Cognac brown casual leather shoes",
  },
  {
    title: "Belts",
    description: "Leather belts to complete the look",
    image: collectionAccessories,
    to: "/shoes" as const,
    alt: "Classic leather belt and accessories",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src={storefrontAsset.url}
          alt="Marco Adamo storefront at Fourways Mall"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Footwear for every occasion
          </p>
          <h1 className="fade-up mt-6 max-w-3xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight text-foreground md:text-7xl">
            Essence of Elegance
          </h1>
          <p className="fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From polished classics to relaxed everyday pairs, discover quality
            footwear selected to finish every look with confidence.
          </p>
          <div className="fade-up mt-10">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Diamond className="h-4 w-4" />
              Find your perfect pair
            </Link>
          </div>
        </div>
      </section>

      {/* Our Collection */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Our Shoes Collection
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
              Crafted for the gentleman
            </h2>
          </div>
          <Link
            to="/collections"
            className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/70 transition-colors hover:text-primary md:inline-flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {collections.map((item) => (
            <Link key={item.title} to={item.to} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="card-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Diamond Collection */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={casualShoes}
              alt="Cognac casual leather shoes from Marco Adamo"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              <Diamond className="h-4 w-4" /> our collection
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
              Our signature standard
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
               The Marco Adamo collection brings together enduring formal styles,
               relaxed everyday footwear and leather belts selected to complete
               every look.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { title: "Classic Shoes", text: "Polished styles for formal occasions", to: "/shoes" as const },
                { title: "Casual Shoes", text: "Refined comfort for every day", to: "/shoes" as const },
                { title: "Belts", text: "Leather finishes for a complete look", to: "/shoes" as const },
              ].map((row) => (
                <li key={row.title}>
                  <Link
                    to={row.to}
                    className="group flex items-baseline justify-between border-b border-border pb-4"
                  >
                    <span className="font-display text-lg font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                      {row.title}
                    </span>
                    <span className="text-sm text-muted-foreground">{row.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/collections"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Shop now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            About Us
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            "Quality footwear, selected for you"
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
             With over 35 years of experience, Marco Adamo brings personal
             service and carefully selected footwear to Fourways Mall.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
          >
            Our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="order-1 overflow-hidden rounded-md border border-border lg:order-2">
          <img
            src={storefrontAsset.url}
            alt="The Marco Adamo shoe boutique at Fourways Mall"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full max-h-[520px] w-full object-cover"
          />
        </div>
      </section>

      {/* Visit us */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Come pay us a visit
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
            Experience the emporium in person
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
             Step into our boutique to find your ideal fit. Our team typically
             replies within minutes on WhatsApp — or visit us at Fourways Mall.
          </p>
        </div>
        <div className="relative h-[420px] w-full md:h-[520px]">
          <a
            href="https://www.google.com/maps/search/Marco+Adamo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Marco Adamo stores in Google Maps"
            className="absolute inset-0 block"
          >
            <iframe
              title="Marco Adamo stores on Google Maps"
              src="https://maps.google.com/maps?q=Marco%20Adamo&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
              tabIndex={-1}
            />
          </a>
          <div className="pointer-events-none absolute inset-0 flex items-end p-6 pb-16 md:p-8 md:pb-20">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/Marco+Adamo"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-colors hover:bg-primary/85"
              >
                <MapPin className="h-4 w-4" /> Find a store
              </a>
              <a
                href="https://wa.me/27761964617"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
