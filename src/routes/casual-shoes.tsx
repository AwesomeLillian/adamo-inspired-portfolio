import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import casualShoes from "@/assets/collection-casual-shoes.jpg";

export const Route = createFileRoute("/casual-shoes")({
  head: () => ({
    meta: [
      { title: "Casual Shoes — Marco Adamo" },
      { name: "description", content: "Discover Italian-style casual leather shoes and suede loafers at Marco Adamo in Fourways Mall." },
      { property: "og:title", content: "Casual Shoes — Marco Adamo" },
      { property: "og:description", content: "Italian-inspired casual shoes selected for refined everyday comfort." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CasualShoesPage,
});

const features = [
  "Italian-inspired silhouettes",
  "Soft suede and quality leather uppers",
  "Loafers and driving moccasins",
  "Flexible soles for everyday comfort",
  "Versatile shades for relaxed dressing",
];

function CasualShoesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img src={casualShoes} alt="Italian-style brown suede casual loafers" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1280} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">The Casual Collection</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">Casual Shoes</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Italian-inspired loafers and relaxed leather shoes chosen for easy sophistication, comfort and everyday style.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-border"><img src={casualShoes} alt="Brown suede driving loafers from Marco Adamo" loading="lazy" width={1024} height={1280} className="h-full max-h-[620px] w-full object-cover" /></div>
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">Relaxed, never ordinary</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Our casual selection balances an elegant Italian profile with the comfort needed for weekends, travel and smart everyday dressing.</p>
          <ul className="mt-8 space-y-3">{features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul>
          <a href="https://wa.me/27761964617?text=I%27m%20looking%20for%20casual%20shoes" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85">Ask about sizes</a>
        </div>
      </section>
      <section className="border-t border-border bg-card"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center"><div><h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">Explore the collection</h2><p className="mt-2 text-sm text-muted-foreground">Discover formal classics or complete your look with a leather belt.</p></div><div className="flex flex-wrap gap-3"><Link to="/classic-shoes" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">Classic Shoes</Link><Link to="/belts" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">View Belts</Link></div></div></section>
    </>
  );
}