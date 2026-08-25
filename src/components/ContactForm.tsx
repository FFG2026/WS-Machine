"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hire@wsmachine.co.uk";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Hire enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-brand-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-brand-charcoal">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
            placeholder="07000 000000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-brand-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-brand-charcoal">
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-black/10 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
          placeholder="Machine size, site access, dates, anything else useful"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark sm:w-auto"
      >
        Send Enquiry
      </button>

      {status === "sent" && (
        <p className="text-sm font-medium text-brand-orange-dark">
          Opening your email app to send this to us &mdash; if nothing
          happens, email {CONTACT_EMAIL} directly.
        </p>
      )}
    </form>
  );
}
