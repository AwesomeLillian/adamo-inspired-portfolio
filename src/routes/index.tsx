import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Diamond, MapPin } from "lucide-react";

import heroSuit from "@/assets/hero-suit.jpg";
import collectionSuits from "@/assets/collection-suits.jpg";
import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionShirts from "@/assets/collection-shirts.jpg";
import collectionCoats from "@/assets/collection-coats.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";
import diamondCollection from "@/assets/diamond-collection.jpg";
import aboutTailor from "@/assets/about-tailor.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marco Adamo — Essence of Elegance | Italian Suits, Shoes & Shirts" },
      {
        name: "description",
        content:
          "The quality of our suits is second to none. Imported Italian suits, genuine leather shoes and 2ply Egyptian cotton shirts at Marco Adamo.",
      },
      { property: "og:title", content: "Marco Adamo — Essence of Elegance" },
      {
        property: "og:description",
        content:
          "Imported Italian suits, genuine leather shoes and Egyptian cotton shirts. Find your best suit.",
      },
    ],
  }),
  component: Index,
});

const collections = [
  {
    title: "Suits",
    description: "Imported Italian suits",
    image: collectionSuits,
    to: "/suits" as const,
    alt: "Man wearing a tailored imported Italian suit",
  },
  {
    title: "Shoes",
    description: "Genuine leather shoes",
    image: collectionShoes,
    to: "/shoes" as const,
    alt: "Polished black genuine leather formal shoes",
  },
  {
    title: "Shirts",
    description: "2ply Egyptian cotton shirts",
    image: collectionShirts,
    to: "/shirts" as const,
    alt: "Crisp Egyptian cotton formal shirts on hangers",
  },
  {
    title: "Coats",
    description: "Tailored coats & overcoats",
    image: collectionCoats,
    to: "/coats" as const,
    alt: "Dark pinstripe tailored overcoat with tie",
  },
  {
    title: "Accessories",
    description: "Belts, ties & finishing touches",
    image: collectionAccessories,
    to: "/collections" as const,
    alt: "Men's formal accessories — belt, tie, cufflinks and watch",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src={heroSuit}
          alt="Tailored dark Italian suit with tie and pocket square"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Designer Men's Clothing — Imported For You
          </p>
          <h1 className="fade-up mt-6 max-w-3xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight text-foreground md:text-7xl">
            Essence of Elegance
          </h1>
          <p className="fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The quality of our suits is second to none, and they're made with
            only the highest-quality materials.
          </p>
          <div className="fade-up mt-10">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <Diamond className="h-4 w-4" />
              Find your best Suit
            </Link>
          </div>
        </div>
      </section>

      {/* Our Collection */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Our Collection
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
              src={diamondCollection}
              alt="Man in a black tuxedo adjusting his cufflink under a spotlight"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              <Diamond className="h-4 w-4" /> Diamond Collection
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
              Our signature standard
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              The Diamond Collection is the pinnacle of the Marco Adamo range —
              our most exacting selection of tailoring, footwear and shirting,
              curated for the man who accepts nothing less than perfection.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { title: "Suits", text: "Imported Italian suits, cut to flatter", to: "/suits" as const },
                { title: "Shoes", text: "Genuine leather, finished by hand", to: "/shoes" as const },
                { title: "Shirts", text: "2ply Egyptian cotton", to: "/shirts" as const },
                { title: "Coats", text: "Tailored coats & overcoats", to: "/coats" as const },
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
            "Designer men's clothing imported for you"
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            With over 35 years of experience, owner managed and run, Marco
            Adamo — exclusive men's clothing emporium — is conveniently located
            at a centre near you.
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
            src={aboutTailor}
            alt="Master tailor measuring fine suit fabric in the atelier"
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
            Step into our boutique for a personal fitting. Our team typically
            replies within minutes on WhatsApp — or find us at a centre near you.
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
          <div className="pointer-events-none absolute inset-0 flex items-end p-6 md:p-8">
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
