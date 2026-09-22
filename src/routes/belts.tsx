import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import beltsImage from "@/assets/collection-accessories.jpg";

export const Route = createFileRoute("/belts")({
  head: () => ({
    meta: [
      { title: "Leather Belts — Marco Adamo" },
      { name: "description", content: "Shop classic leather belts selected to complement Marco Adamo shoes at Fourways Mall, Johannesburg." },
      { property: "og:title", content: "Leather Belts — Marco Adamo" },
      { property: "og:description", content: "Classic leather belts made to complete a polished look." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeltsPage,
});

const features = [
  "Quality leather construction",
  "Classic black and rich brown tones",
  "Refined buckles and clean finishes",
  "Designed to complement formal and casual shoes",
  "Personal fitting available in store",
];

function BeltsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img src={beltsImage} alt="Marco Adamo leather belt collection" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">The Accessories Collection</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">Leather Belts</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">The finishing detail that brings a look together, selected in timeless colours to complement your footwear.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md border border-border"><img src={beltsImage} alt="Classic leather belts and accessories" loading="lazy" width={1024} height={1024} className="h-full max-h-[620px] w-full object-cover" /></div>
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">Complete the look</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Choose a leather belt that works naturally with your favourite classic or casual pair. Our team can help you find the right colour, finish and fit.</p>
          <ul className="mt-8 space-y-3">{features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul>
          <a href="https://wa.me/27761964617?text=I%27m%20looking%20for%20a%20leather%20belt" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85">Ask about belts</a>
        </div>
      </section>
      <section className="border-t border-border bg-card"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center"><div><h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">Find the matching pair</h2><p className="mt-2 text-sm text-muted-foreground">Pair your belt with classic or casual Marco Adamo footwear.</p></div><div className="flex flex-wrap gap-3"><Link to="/classic-shoes" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">Classic Shoes</Link><Link to="/casual-shoes" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">Casual Shoes</Link></div></div></section>
    </>
  );
}