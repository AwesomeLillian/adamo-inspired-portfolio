import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

import logo from "@/assets/marco-adamo-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
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

          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Italian-inspired shoes and leather belts, selected for the man who expects enduring quality and considered style.
          </p>
          <p className="mt-7 inline-block border-b border-gold/50 pb-2 font-logo text-3xl italic text-gold">It’s Italian</p>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground">Showroom</h3>
          <p className="mt-5 text-xs font-semibold text-foreground">Flagship Showroom</p>
          <p className="mt-1 max-w-48 text-xs leading-relaxed text-muted-foreground">Level 5, Fourways Mall<br />(Opposite Truworths Men)<br />Fourways, Johannesburg</p>
          <a href="https://www.google.com/maps/search/Marco+Adamo+Fourways+Mall" target="_blank" rel="noopener noreferrer" className="mt-4 block w-full max-w-52" aria-label="Open Marco Adamo at Fourways Mall in Google Maps">
            <span className="relative block aspect-[16/10] overflow-hidden border border-border">
              <iframe title="Marco Adamo at Fourways Mall" src="https://maps.google.com/maps?q=Marco%20Adamo%20Fourways%20Mall&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="pointer-events-none absolute inset-0 h-full w-full border-0" tabIndex={-1} />
            </span>
            <span className="mt-3 block text-xs text-primary">Plan your visit</span>
            <span className="mt-2 block text-[0.65rem] text-muted-foreground">Open in Google Maps</span>
          </a>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground">Trading Hours</h3>
          <p className="mt-5 text-xs leading-7 text-muted-foreground">Mon – Fri: <strong className="font-medium text-foreground">09:00 – 20:00</strong><br />Sat – Sun: <strong className="font-medium text-foreground">09:00 – 19:00</strong></p>
          <a href="tel:0825746017" className="mt-5 block text-xs text-muted-foreground transition-colors hover:text-primary">082 574 6017</a>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-foreground">Follow</h3>
          <div className="mt-5 space-y-3 text-xs text-muted-foreground">
            <a href="https://www.instagram.com/marcoadamocollezioni/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><Instagram className="h-3.5 w-3.5" />Instagram</a>
            <a href="https://www.facebook.com/Marco-Adamo-Collezioni-259809020760711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><Facebook className="h-3.5 w-3.5" />Facebook</a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 border-t border-border px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/classic-shoes" className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">Classic Shoes</Link>
        <Link to="/casual-shoes" className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">Casual Shoes</Link>
        <Link to="/belts" className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">Belts</Link>
        <Link to="/contact" className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary">Visit</Link>
      </div>

      <div className="mx-auto max-w-7xl border-t border-border px-6 py-7">
        <p className="text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground">Tailored by</p>
        <p className="mt-2 font-logo text-2xl italic text-foreground">WALT Studio</p>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-[0.65rem] text-muted-foreground sm:flex-row">
          <p>© 2022 Marco Adamo. All rights reserved.</p>
          <p className="uppercase tracking-widest">Essence of Elegance</p>
        </div>
      </div>
    </footer>
  );
}
