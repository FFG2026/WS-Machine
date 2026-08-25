import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WS Machine | Excavator & Heavy Machinery Hire",
    template: "%s | WS Machine",
  },
  description:
    "WS Machine supplies reliable excavator and heavy machinery hire, with a well-maintained fleet, flexible terms and support you can count on.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-brand-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
