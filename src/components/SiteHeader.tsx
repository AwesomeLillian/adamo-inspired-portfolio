import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/marco-adamo-logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Shoes Collection" },
  { to: "/classic-shoes", label: "Classic Shoes" },
  { to: "/casual-shoes", label: "Casual Shoes" },
  { to: "/belts", label: "Belts" },
  { to: "/about", label: "Our Story" },
  { to: "/", label: "Contact Us", hash: "contact-us" },
] as const;

const collectionItems = [
  { to: "/classic-shoes", label: "Classic Shoes" },
  { to: "/casual-shoes", label: "Casual Shoes" },
  { to: "/belts", label: "Belts" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
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
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Marco Adamo home">
          <img
            src={logo}
            alt="Marco Adamo"
            width={500}
            height={250}
            className="h-11 w-auto max-w-full sm:h-12 md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          <Link to="/" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Home</Link>
          <div className="group relative">
            <Button type="button" variant="ghost" className="h-auto gap-1.5 px-0 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 hover:bg-transparent hover:text-primary">
              Collection <ChevronDown className="h-3.5 w-3.5" />
            </Button>
            <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 border border-border bg-background py-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {collectionItems.map((item) => (
                <Link key={item.to} to={item.to} className="block px-5 py-3 text-xs font-medium uppercase text-foreground/75 transition-colors hover:bg-accent hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Our Story</Link>
          <Link to="/" hash="contact-us" className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/70 transition-colors hover:text-primary">Contact Us</Link>
        </nav>

        <div className="col-start-2 flex items-center justify-end gap-1 sm:gap-2 lg:col-start-auto">
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
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary">Home</Link>
            </li>
            <li>
              <Button type="button" variant="ghost" onClick={() => setCollectionsOpen((value) => !value)} aria-expanded={collectionsOpen} className="h-auto w-full justify-between px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary">
                Collection <ChevronDown className={`h-4 w-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`} />
              </Button>
              {collectionsOpen && (
                <ul className="ml-3 border-l border-border pl-3">
                  {collectionItems.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary">Our Story</Link>
            </li>
            <li>
              <Link to="/" hash="contact-us" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary">Contact Us</Link>
            </li>
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
