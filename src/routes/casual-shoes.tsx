import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import casualOption1 from "@/assets/ca_IMG-20260915-WA0033.jpg.asset.json";
import casualOption2 from "@/assets/ca_IMG-20260915-WA0035.jpg.asset.json";
import casualOption3 from "@/assets/ca_IMG-20260915-WA0037.jpg.asset.json";
import casualOption4 from "@/assets/ca_IMG-20260915-WA0039.jpg.asset.json";
import casualOption5 from "@/assets/ca_IMG-20260915-WA0041.jpg.asset.json";
import casualOption6 from "@/assets/ca_IMG-20260915-WA0043.jpg.asset.json";
import casualOption7 from "@/assets/ca_IMG-20260915-WA0045.jpg.asset.json";
import casualOption8 from "@/assets/ca_IMG-20260915-WA0047.jpg.asset.json";
import casualOption9 from "@/assets/ca_IMG-20260915-WA0049.jpg.asset.json";
import casualOption10 from "@/assets/ca_IMG-20260915-WA0052.jpg.asset.json";
import casualOption11 from "@/assets/ca_IMG-20260915-WA0054.jpg.asset.json";
import casualOption12 from "@/assets/ca_IMG-20260915-WA0056_1.jpg.asset.json";
import casualOption13 from "@/assets/ca_IMG-20260915-WA0058.jpg.asset.json";
import casualOption14 from "@/assets/ca_IMG-20260915-WA0060.jpg.asset.json";
import casualOption15 from "@/assets/ca_IMG-20260915-WA0062.jpg.asset.json";
import casualOption16 from "@/assets/ca_IMG-20260915-WA0064.jpg.asset.json";
import casualOption17 from "@/assets/ca_IMG-20260915-WA0066.jpg.asset.json";
import casualOption18 from "@/assets/ca_IMG-20260915-WA0068.jpg.asset.json";
import casualOption19 from "@/assets/ca_IMG-20260915-WA0070.jpg.asset.json";
import casualOption20 from "@/assets/ca_IMG-20260915-WA0072.jpg.asset.json";
import casualOption21 from "@/assets/ca_IMG-20260915-WA0076.jpg.asset.json";
import casualWornDisplay from "@/assets/casual-loafer-on-feet-display.jpg";
import { ProductGallery } from "@/components/ProductGallery";

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

const casualOptions = [
  { image: casualOption1.url, alt: "Black brogue lace-up shoe with a chunky sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption2.url, alt: "Polished black derby shoe with a chunky sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption3.url, alt: "Black double monk-strap shoe with a contrast welt", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption4.url, alt: "Black tassel loafer with a contemporary sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption5.url, alt: "Textured black lace-up moc-toe shoe", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption6.url, alt: "Black penny loafer with a rugged sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption7.url, alt: "Black textured slip-on shoe with a white sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption8.url, alt: "Navy suede casual lace-up shoe", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption9.url, alt: "Black leather cap-toe derby shoe", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption10.url, alt: "Black suede apron-toe lace-up shoe", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption11.url, alt: "Black brogue shoe with blue detailing and a lightweight sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption12.url, alt: "Black textured leather derby with contrast piping", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption13.url, alt: "Black textured penny loafer with a contrast sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption14.url, alt: "Navy suede penny loafer with a lightweight cream sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption15.url, alt: "Black zip-front casual shoe with orange trim", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption16.url, alt: "Black leather double monk-strap loafer", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption17.url, alt: "Polished black leather derby with a contemporary sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption18.url, alt: "Black patent leather horsebit loafer", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption19.url, alt: "Black suede lace-up shoe with blue piping", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption20.url, alt: "Polished black leather wingtip brogue derby", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
  { image: casualOption21.url, alt: "Black leather derby with a sculpted layered sole", description: "Crafted from genuine leather, with a premium leather upper and leather sole." },
];

function CasualShoesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <img src={casualWornDisplay} alt="Navy suede Marco Adamo loafers worn with tailored trousers" className="absolute inset-0 h-full w-full object-cover object-center" width={1600} height={1200} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="editorial-kicker border-l border-primary pl-4">The Casual Collection</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none text-foreground md:text-7xl">Casual Shoes</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Italian-inspired loafers and relaxed leather shoes chosen for easy sophistication, comfort and everyday style.</p>
        </div>
      </section>
      <section className="mx-auto grid w-full items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="aspect-[4/3] overflow-hidden"><img src={casualWornDisplay} alt="Navy suede penny loafers styled with tailored grey trousers" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" /></div>
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none text-foreground md:text-5xl">Relaxed, never ordinary</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Our casual selection balances an elegant Italian profile with the comfort needed for weekends, travel and smart everyday dressing.</p>
          <ul className="mt-8 space-y-3">{features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul>
          <a href="https://wa.me/27761964617?text=I%27m%20looking%20for%20casual%20shoes" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85">Ask about sizes</a>
        </div>
      </section>
      <ProductGallery eyebrow="The collection" title="Casual shoes for refined everyday wear" introduction="Browse the current selection, then visit our Fourways Mall boutique to find your preferred style and size." products={casualOptions} />
      <section className="border-t border-border bg-card"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center"><div><h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">Explore the collection</h2><p className="mt-2 text-sm text-muted-foreground">Discover formal classics or complete your look with a leather belt.</p></div><div className="flex flex-wrap gap-3"><Link to="/classic-shoes" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">Classic Shoes</Link><Link to="/belts" className="rounded-md border border-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">View Belts</Link></div></div></section>
    </>
  );
}