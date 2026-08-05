"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#tours", label: "Tours" },
  { href: "/#packages", label: "Packages" },
  { href: "/#custom-tour", label: "Build Your Trip" },
  { href: "/#about", label: "Our Guide" },
  { href: "/#reviews", label: "Reviews" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/92 backdrop-blur-md border-b border-deep-green/12">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/ecutrek-logo.png"
            alt="EcuTrek"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span className="font-brand text-sm tracking-wide text-deep-green">
            EcuTrek
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink transition-colors duration-200 ease-in-out hover:text-accent-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#custom-tour"
            className="rounded-lg bg-accent-btn px-[22px] py-[11px] text-sm font-medium tracking-wide text-white transition-colors duration-200 ease-in-out hover:bg-accent-btn-hover"
          >
            Build Your Own Trip
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-deep-green/20 text-deep-green transition-colors duration-200 ease-in-out md:hidden"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px] rotate-0"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px] rotate-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-deep-green/12 px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink transition-colors duration-200 ease-in-out hover:bg-deep-green/6"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink transition-colors duration-200 ease-in-out hover:bg-deep-green/6"
          >
            Contact
          </Link>
          <Link
            href="/#custom-tour"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-lg bg-accent-btn px-4 py-3 text-center text-sm font-medium tracking-wide text-white transition-colors duration-200 ease-in-out hover:bg-accent-btn-hover"
          >
            Build Your Own Trip
          </Link>
        </nav>
      </div>
    </header>
  );
}
