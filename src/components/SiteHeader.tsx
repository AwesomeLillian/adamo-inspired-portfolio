import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/marco-adamo-logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Shoes Collection" },
  { to: "/classic-shoes", label: "Classic Shoes" },
  { to: "/casual-shoes", label: "Casual Shoes" },
  { to: "/belts", label: "Belts" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? navItems
        .filter((item) => item.label.toLowerCase().includes(normalizedQuery))
        .sort((a, b) => {
          const aExact = a.label.toLowerCase() === normalizedQuery;
          const bExact = b.label.toLowerCase() === normalizedQuery;
          return Number(bExact) - Number(aExact);
        })
    : navItems;

  const goTo = (to: string) => {
    setSearchOpen(false);
    setQuery("");
    navigate({ to });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link to="/" className="flex items-center" aria-label="Marco Adamo home">
          <img
            src={logo}
            alt="Marco Adamo"
            width={500}
            height={250}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <Link to="/collections" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Collection</Link>
          <Link to="/about" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Our story</Link>
          <Link to="/contact" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Visit</Link>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="text-foreground/80 hover:text-primary"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          className="absolute right-0 top-full w-full max-w-xs border-b border-l border-border bg-background px-6 py-4 shadow-2xl"
          aria-label="Site navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={`${item.to}-${item.label}`}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="mx-auto mt-24 w-full max-w-xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b-2 border-primary pb-3">
              <Search className="h-6 w-6 text-primary" />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shoes, belts, contact..."
                className="w-full bg-transparent text-xl text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Search the site"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSearchOpen(false);
                  if (e.key === "Enter" && results.length > 0) goTo(results[0].to);
                }}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="text-foreground/70 hover:text-primary"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ul className="mt-4 divide-y divide-border rounded-md border border-border bg-card">
              {results.length === 0 ? (
                <li className="px-4 py-3 text-sm text-muted-foreground">
                  No results for "{query}"
                </li>
              ) : (
                results.map((item) => (
                  <li key={`${item.to}-${item.label}`}>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => goTo(item.to)}
                      className="h-auto w-full justify-between rounded-none px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-primary"
                    >
                      {item.label}
                      <Search className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
