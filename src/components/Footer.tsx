import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/mark-full.png"
            alt="WS Machine & Plant Hire"
            width={2023}
            height={676}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Reliable excavator and heavy machinery hire, backed by a fleet
            that&apos;s serviced, tested and ready to work.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-orange-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-orange-light">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-orange-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Fleet
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>Mini &amp; midi excavators</li>
            <li>Standard excavators</li>
            <li>Attachments &amp; buckets</li>
            <li>Operated &amp; self-drive hire</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-light" />
              <span>Ivy Farm, Lidsing Road, Lidsing, Gillingham, Kent, ME7 3NL</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-orange-light" />
              <a href="tel:+447468332547" className="hover:text-white">
                07468 332547
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-orange-light" />
              <a href="tel:+447545227881" className="hover:text-white">
                07545 227881
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-orange-light" />
              <a href="mailto:hire@wsmachine.co.uk" className="hover:text-white">
                hire@wsmachine.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>&copy; {year} WS Machine. All rights reserved.</p>
          <p>Excavator &amp; machinery hire</p>
        </div>
      </div>
    </footer>
  );
}
