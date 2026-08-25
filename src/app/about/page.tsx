import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WS Machine is an excavator and heavy machinery hire company focused on a reliable fleet, straightforward terms and real support.",
};

const VALUES = [
  {
    icon: "gauge" as const,
    title: "Reliability first",
    text: "A machine that doesn't start costs you a day. Ours are checked before every hire, without exception.",
  },
  {
    icon: "check" as const,
    title: "Straight answers",
    text: "Clear pricing, honest lead times, and no surprises on the invoice.",
  },
  {
    icon: "wrench" as const,
    title: "Hands-on knowledge",
    text: "We know the difference a right-sized machine and the right attachment makes on site.",
  },
  {
    icon: "shield" as const,
    title: "Safety as standard",
    text: "Every machine is serviced, tested and fully insured before it leaves the yard.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20 text-white">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-orange-light">
            About WS Machine
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Machinery hire built around getting your job done
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            WS Machine was set up to fix a familiar problem: hiring an
            excavator shouldn&apos;t be complicated, and a machine you&apos;re
            paying for should turn up ready to run. We keep the fleet
            well-maintained, the process simple, and someone reachable when
            you need advice.
          </p>
        </div>
      </section>

      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[26rem]">
        <Image
          src="/photos/gallery-3.jpg"
          alt="WS Machine operator digging on a residential job in Kent"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Our approach
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal">
              Right machine, right time, no fuss
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              Every site is different, so every hire starts with a
              conversation about the work, not a sales pitch. We&apos;ll ask
              about access, ground conditions and the task itself, then
              recommend the excavator and attachments that actually fit &mdash;
              not just whatever&apos;s free that week.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              From there, hire terms stay flexible: a single day, a few
              weeks, or a rolling contract for a longer project. Delivery,
              collection and support are part of the service, not an
              add-on.
            </p>
          </div>

          <div className="rounded-2xl bg-brand-surface p-8">
            <h3 className="text-base font-bold text-brand-charcoal">
              What you can expect
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                "Machines serviced and safety-checked before every hire",
                "Clear, upfront pricing with no hidden fees",
                "Flexible hire periods, extended or ended when you need",
                "Support from people who understand plant machinery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-orange/15">
                    <Icon name="check" className="h-3 w-3 text-brand-orange" />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              What we stand for
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal">
              The standards behind every hire
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 ring-1 ring-black/5">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-orange/10">
                  <Icon name={v.icon} className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="mt-5 text-base font-bold text-brand-charcoal">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-16">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Have a job coming up?
            </h2>
            <p className="mt-2 text-white/60">
              Get in touch and we&apos;ll help you find the right machine for it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
          >
            Contact Us
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
