import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";

const FEATURES = [
  {
    icon: "gauge" as const,
    title: "Modern, well-maintained fleet",
    text: "Every machine is serviced and safety-checked before it leaves the yard, so it turns up ready to work.",
  },
  {
    icon: "clock" as const,
    title: "Fast turnaround",
    text: "Book today, dig tomorrow. Local delivery and collection keeps your programme on track.",
  },
  {
    icon: "shield" as const,
    title: "Fully insured",
    text: "Comprehensive cover on every hire, with clear, straightforward paperwork.",
  },
  {
    icon: "wrench" as const,
    title: "Real support",
    text: "Operator advice, attachment guidance and breakdown cover from people who know plant machinery.",
  },
];

const FLEET = [
  {
    title: "Mini & Midi Excavators",
    range: "1 – 6 tonne",
    text: "Ideal for tight access sites, landscaping and groundworks.",
  },
  {
    title: "Standard Excavators",
    range: "8 – 20 tonne",
    text: "For larger digs, foundations and bulk earthmoving.",
  },
  {
    title: "Attachments",
    range: "Buckets, breakers, grabs",
    text: "A full range of attachments to match the job, hired alone or with a machine.",
  },
  {
    title: "Operated Hire",
    range: "Machine + operator",
    text: "Skilled, insured operators available where you need extra hands on site.",
  },
];

const STEPS = [
  { n: "01", title: "Tell us the job", text: "Call, email or send an enquiry with the work and site access details." },
  { n: "02", title: "We match the machine", text: "We recommend the right size excavator and attachments for the task." },
  { n: "03", title: "Delivery or collection", text: "Choose delivery to site or collect from the yard, whichever suits." },
  { n: "04", title: "Hire, extend or return", text: "Flexible terms from a single day up to long-term contract hire." },
];

const GALLERY = [
  { src: "/photos/gallery-1.jpg", alt: "WS Machine mini excavator on a residential driveway" },
  { src: "/photos/gallery-2.jpg", alt: "WS Machine dumper on site" },
  { src: "/photos/gallery-3.jpg", alt: "WS Machine operator digging a trench on a residential job" },
  { src: "/photos/gallery-4.jpg", alt: "WS Machine mini excavator ready for delivery" },
  { src: "/photos/gallery-5.jpg", alt: "WS Machine mini excavator and dumper clearing a demolition site" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-charcoal text-white">
        <Image
          src="/photos/hero.jpg"
          alt="WS Machine excavator and dumper working on site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
        <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-orange-light uppercase">
              Excavator &amp; Plant Hire
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Machinery hire that turns up{" "}
              <span className="text-brand-orange-light">ready to work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              WS Machine supplies reliable excavators and heavy machinery for
              hire, with a modern fleet, flexible terms and support from
              people who understand a site&apos;s timeline.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
              >
                Request a Quote
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a
                href="tel:+447468332547"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4" />
                07468 332547
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "excavator" as const, label: "Fleet ready to deploy" },
              { icon: "clock" as const, label: "Next-day delivery" },
              { icon: "shield" as const, label: "Fully insured hire" },
              { icon: "wrench" as const, label: "Attachments included" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md"
              >
                <Icon name={item.icon} className="h-8 w-8 text-brand-orange-light" />
                <p className="mt-4 text-sm font-semibold text-white/85">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-black/5 bg-white py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Why hire from us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">
              Built around getting your site moving
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-black/5 bg-brand-surface p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-orange/10">
                  <Icon name={f.icon} className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="mt-5 text-base font-bold text-brand-charcoal">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-brand-surface py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Our Fleet
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">
                Machines and attachments for every job size
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-charcoal hover:text-brand-orange"
            >
              Ask about availability
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <Icon name="excavator" className="h-8 w-8 text-brand-orange" />
                <h3 className="mt-5 text-base font-bold text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-bold tracking-wide text-brand-orange uppercase">
                  {item.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              On Site
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">
              Our fleet in action
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-gray">
              Real machines, out on real jobs across Kent.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-brand-surface ring-1 ring-black/5"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-charcoal sm:text-4xl">
              Hiring a machine, made simple
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n}>
                <span className="text-4xl font-black text-brand-orange/25">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-bold text-brand-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal py-16">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Ready to get a machine on site?
            </h2>
            <p className="mt-2 text-white/60">
              Tell us the job and we&apos;ll recommend the right hire, fast.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
          >
            Get a Quote
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
