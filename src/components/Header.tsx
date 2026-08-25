"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/mark.png"
            alt="WS Machine"
            width={200}
            height={42}
            priority
            className="h-7 w-auto sm:h-8"
          />
          <span className="text-lg font-black tracking-[0.12em] text-brand-charcoal sm:text-xl">
            MACHINE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                  active
                    ? "text-brand-orange"
                    : "text-brand-charcoal-soft hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+447468332547"
            className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal-soft hover:text-brand-orange"
          >
            <Icon name="phone" className="h-4 w-4" />
            07468 332547
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-brand-orange px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-brand-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-semibold text-brand-charcoal hover:bg-brand-surface"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+447468332547"
              className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-semibold text-brand-charcoal-soft"
            >
              <Icon name="phone" className="h-4 w-4" />
              07468 332547
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-brand-orange px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
