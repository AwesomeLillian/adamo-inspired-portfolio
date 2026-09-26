import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Diamond } from "lucide-react";

import collectionShoes from "@/assets/collection-shoes.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";
import casualShoe from "@/assets/ca_IMG-20260915-WA0047.jpg.asset.json";
import storefrontAsset from "@/assets/marco-adamo-storefront.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


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
    to: "/classic-shoes" as const,
    alt: "Polished black classic leather shoes",
  },
  {
    title: "Casual Shoes",
    description: "Refined comfort for every day",
    image: casualShoe.url,
    to: "/casual-shoes" as const,
    alt: "Navy suede Italian-style casual lace-up shoe",
  },
  {
    title: "Belts",
    description: "Leather belts to complete the look",
    image: collectionAccessories,
    to: "/belts" as const,
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
          <p className="fade-up editorial-kicker border-l border-primary pl-4">
            The Fourways Collection · Johannesburg
          </p>
          <h1 className="fade-up mt-7 max-w-3xl font-display text-6xl font-medium leading-[0.95] text-foreground md:text-8xl">
            Marco Adamo<br /><span className="text-gold">Essence of Elegance</span>
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
            <p className="editorial-kicker">
              Our Shoes Collection
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-foreground md:text-6xl">
              Selected with purpose
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
                    className="h-full w-full bg-product object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-3xl font-semibold text-foreground transition-colors group-hover:text-primary">
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
              src={collectionShoes}
              alt="Classic leather shoes from Marco Adamo"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="editorial-kicker flex items-center gap-2">
              <Diamond className="h-4 w-4" /> our collection
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-foreground md:text-6xl">
              Our signature standard
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
               The Marco Adamo collection brings together enduring formal styles,
               relaxed everyday footwear and leather belts selected to complete
               every look.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { title: "Classic Shoes", text: "Polished styles for formal occasions", to: "/classic-shoes" as const },
                { title: "Casual Shoes", text: "Refined comfort for every day", to: "/casual-shoes" as const },
                { title: "Belts", text: "Leather finishes for a complete look", to: "/belts" as const },
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
           <p className="editorial-kicker">
            About Us
          </p>
           <h2 className="mt-4 font-display text-4xl font-medium italic leading-none text-foreground md:text-6xl">
             “Quality footwear, selected for you”
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

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
             <p className="editorial-kicker">Contact us</p>
             <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-foreground md:text-6xl">How can we help?</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Ask about a shoe, belt, size or store visit. Complete the form and our team will get back to you.</p>
          </div>
          <form
             action="mailto:adamomarco59@gmail.com"
            method="post"
            encType="text/plain"
            className="grid gap-5 rounded-md border border-border bg-background p-6 md:grid-cols-2 md:p-8"
          >
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
              <Input id="contact-name" name="Name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" className="h-11" />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
              <Input id="contact-email" name="Email" type="email" autoComplete="email" required maxLength={255} placeholder="you@example.com" className="h-11" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-foreground">Phone number</label>
              <Input id="contact-phone" name="Phone" type="tel" autoComplete="tel" maxLength={30} pattern="[0-9+()\- ]{7,30}" placeholder="Your phone number" className="h-11" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
              <Textarea id="contact-message" name="Message" required minLength={10} maxLength={1500} placeholder="Tell us what you are looking for" className="min-h-36 resize-y" />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full uppercase tracking-wider sm:w-auto">Send enquiry <ArrowRight /></Button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">This opens your email app with the enquiry addressed to Marco Adamo.</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
