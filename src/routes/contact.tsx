import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Stores — Marco Adamo" },
      {
        name: "description",
        content:
          "Come pay us a visit. Marco Adamo is conveniently located at a centre near you — or chat with us on WhatsApp, we typically reply in minutes.",
      },
      { property: "og:title", content: "Contact & Stores — Marco Adamo" },
      {
        property: "og:description",
        content: "Find a Marco Adamo store near you or chat with us on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <img
          src={storeInterior}
          alt="Interior of the Marco Adamo boutique"
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={1024}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
            Come pay us a visit
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Marco Adamo is conveniently located at a centre near you. Walk in
            for a fitting — or start the conversation on WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-8">
            <MapPin className="h-7 w-7 text-primary" />
            <h2 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Visit
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Exclusive men's clothing emporium, conveniently located at a
              centre near you in Johannesburg.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-8">
            <Clock className="h-7 w-7 text-primary" />
            <h2 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Hours
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Monday to Saturday
              <br />
              09:00 – 17:00
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-8">
            <Phone className="h-7 w-7 text-primary" />
            <h2 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Talk to us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The team typically replies within a few minutes.
            </p>
            <a
              href="https://wa.me/27761964617?text=How%20can%20I%20help%20you%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
