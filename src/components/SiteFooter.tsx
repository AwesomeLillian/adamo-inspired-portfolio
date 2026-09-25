import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

import logo from "@/assets/marco-adamo-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <a
        href="https://www.google.com/maps/search/Marco+Adamo+Fourways+Mall"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-72 w-full border-b border-border"
        aria-label="Open Marco Adamo at Fourways Mall in Google Maps"
      >
        <iframe
          title="Marco Adamo at Fourways Mall"
          src="https://maps.google.com/maps?q=Marco%20Adamo%20Fourways%20Mall&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none absolute inset-0 h-full w-full border-0 grayscale"
          tabIndex={-1}
        />
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-primary px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          Open in Google Maps
        </span>
      </a>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Marco Adamo"
              width={500}
              height={250}
              className="h-14 w-auto"
            />
          </div>

          <p className="mt-4 max-w-xs font-display text-xl italic leading-relaxed text-muted-foreground">
            Classic and casual shoes selected for lasting quality, confident
            style and everyday comfort.
          </p>
          <p className="mt-6 font-logo text-4xl italic text-primary">It’s Italian</p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/Marco-Adamo-Collezioni-259809020760711"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marco Adamo on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/marcoadamocollezioni/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marco Adamo on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/collections" className="transition-colors hover:text-primary">Shoes Collection</Link></li>
            <li><Link to="/classic-shoes" className="transition-colors hover:text-primary">Classic Shoes</Link></li>
            <li><Link to="/casual-shoes" className="transition-colors hover:text-primary">Casual Shoes</Link></li>
            <li><Link to="/belts" className="transition-colors hover:text-primary">Belts</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-primary">About us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Visit us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Level 5 Opposite Truworths Men, Fourways Mall, Johannesburg</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                Monday – Friday: 09:00 – 20:00
                <br />
                Saturday – Sunday: 09:00 – 19:00
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="tel:0825746017"
                className="transition-colors hover:text-primary"
              >
                082 574 6017
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2022 Marco Adamo. All rights reserved.</p>
          <p className="uppercase tracking-widest">Essence of Elegance</p>
        </div>
      </div>
    </footer>
  );
}
