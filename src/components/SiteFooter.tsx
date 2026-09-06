import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

import logo from "@/assets/marco-adamo-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
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

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Designer men's clothing, imported for you. Exclusive men's clothing
            emporium — owner managed and run for over 35 years.
          </p>

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
            <li><Link to="/collections" className="transition-colors hover:text-primary">Collections</Link></li>
            <li><Link to="/suits" className="transition-colors hover:text-primary">Suits</Link></li>
            <li><Link to="/shoes" className="transition-colors hover:text-primary">Shoes</Link></li>
            <li><Link to="/shirts" className="transition-colors hover:text-primary">Shirts</Link></li>
            <li><Link to="/coats" className="transition-colors hover:text-primary">Coats</Link></li>
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
              <span>Conveniently located at a centre near you, Johannesburg</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Mon – Sat, 09:00 – 17:00</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="https://wa.me/27761964617"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                +27 76 196 4617
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
