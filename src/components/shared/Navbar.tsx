"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/story", label: "Our Story" },
  { href: "/beans", label: "Beans" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const linkClass = (href: string) =>
    `py-2 px-3 rounded-full text-sm font-semibold transition-all duration-300 ${
      scrolled
        ? `text-espresso-700 hover:text-espresso-900 hover:bg-espresso-100 ${
            pathname === href ? "bg-espresso-100 text-espresso-900" : ""
          }`
        : `text-cream-100 hover:text-white hover:bg-white/10 ${
            pathname === href ? "bg-white/15 text-white" : ""
          }`
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-espresso-950/95 backdrop-blur-lg shadow-sm border-b border-espresso-100/50 dark:border-espresso-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled
                ? "text-espresso-900 dark:text-cream-100"
                : "text-cream-100"
            }`}
          >
            <span className="text-2xl">☕</span>
            <span className="hidden sm:inline">Zambean</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/reservations"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "border-2 border-espresso-800 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50"
                  : "border-2 border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-espresso-900"
              }`}
            >
              Book a Table
            </Link>
            <Link
              href="/order"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-espresso-800 text-cream-50 hover:bg-espresso-700"
                  : "bg-cream-100 text-espresso-900 hover:bg-cream-50"
              }`}
            >
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden tap-target flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-espresso-900 dark:bg-cream-100" : "bg-cream-100"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-espresso-900 dark:bg-cream-100" : "bg-cream-100"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-espresso-900 dark:bg-cream-100" : "bg-cream-100"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`lg:hidden border-t pb-6 pt-4 animate-in slide-in-from-top-2 ${
            scrolled
              ? "bg-white dark:bg-espresso-950 border-espresso-100 dark:border-espresso-800"
              : "bg-espresso-900/95 backdrop-blur-lg border-cream-100/20"
          }`}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? scrolled
                        ? "bg-espresso-100 dark:bg-espresso-800 text-espresso-900 dark:text-cream-100"
                        : "bg-white/15 text-white"
                      : scrolled
                        ? "text-espresso-900 dark:text-cream-100 hover:bg-espresso-50 dark:hover:bg-espresso-900"
                        : "text-cream-100 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-4 px-4">
                <Link href="/reservations" className={`flex-1 text-center rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  scrolled
                    ? "border-2 border-espresso-800 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50"
                    : "border-2 border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-espresso-900"
                }`}>Book</Link>
                <Link href="/order" className={`flex-1 text-center rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  scrolled
                    ? "bg-espresso-800 text-cream-50 hover:bg-espresso-700"
                    : "bg-cream-100 text-espresso-900 hover:bg-cream-50"
                }`}>Order</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
