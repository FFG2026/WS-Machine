import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WS Machine to check availability, get a quote, or ask about excavator and machinery hire.",
};

const DETAILS = [
  {
    icon: "phone" as const,
    title: "Phone",
    lines: ["07468 332547", "07545 227881"],
    hrefs: ["tel:+447468332547", "tel:+447545227881"],
  },
  {
    icon: "mail" as const,
    title: "Email",
    lines: ["hire@wsmachine.co.uk"],
    hrefs: ["mailto:hire@wsmachine.co.uk"],
  },
  {
    icon: "pin" as const,
    title: "Address",
    lines: ["Ivy Farm, Lidsing Road, Lidsing", "Gillingham, Kent, ME7 3NL"],
  },
  {
    icon: "clock" as const,
    title: "Hours",
    lines: ["Mon – Fri: 7:00 – 17:30", "Sat: 8:00 – 12:00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 text-white">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-light">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Let&apos;s get a machine on your site
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Send us the job details and we&apos;ll come back with the right
            machine, availability and a straightforward quote.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {DETAILS.map((d) => (
                <div
                  key={d.title}
                  className="flex items-start gap-4 rounded-xl bg-brand-surface p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-orange/10">
                    <Icon name={d.icon} className="h-5 w-5 text-brand-orange" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-charcoal">
                      {d.title}
                    </h3>
                    {d.lines.map((line, i) =>
                      d.hrefs?.[i] ? (
                        <a
                          key={line}
                          href={d.hrefs[i]}
                          className="block text-sm text-brand-gray hover:text-brand-orange"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-brand-gray">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-brand-surface p-6 sm:p-8">
            <h2 className="text-xl font-black tracking-tight text-brand-charcoal">
              Send an enquiry
            </h2>
            <p className="mt-1 text-sm text-brand-gray">
              We usually reply the same working day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
