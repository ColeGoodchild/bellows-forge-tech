import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

type Pillar = {
  n: string;
  title: string;
  body: string;
  items: string[];
  cta: string;
  to: "/services" | "/automation";
};

export const pillars: Pillar[] = [
  {
    n: "01",
    title: "Build",
    body: "We build fast, professional websites that make your business credible and make it easy for customers to contact you.",
    items: [
      "Custom website design",
      "Mobile-first development",
      "Conversion-focused layouts",
      "Speed optimization",
      "Basic SEO foundation",
      "Lead forms",
      "Click-to-call",
    ],
    cta: "Explore Websites",
    to: "/services",
  },
  {
    n: "02",
    title: "Grow",
    body: "We help local customers find you through local SEO, Google Business Profile optimization, useful service pages, and conversion-focused content.",
    items: [
      "Local SEO",
      "Google Business Profile optimization",
      "Service pages",
      "Location pages",
      "Content strategy",
      "Review strategy",
      "Analytics",
    ],
    cta: "Explore Local SEO",
    to: "/services",
  },
  {
    n: "03",
    title: "Automate",
    body: "We connect the tools you already use and automate repetitive sales, customer service, scheduling, and administrative workflows.",
    items: [
      "Lead follow-up",
      "Missed-call recovery",
      "AI receptionists",
      "Appointment scheduling",
      "CRM automation",
      "Review requests",
      "Data entry",
      "Customer support",
    ],
    cta: "Explore AI Automation",
    to: "/automation",
  },
];

export function Pillars() {
  return (
    <section id="how-we-help" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Build · Grow · Automate</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Three ways we help your business grow.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="panel flex flex-col p-8 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="font-display text-sm font-semibold text-primary">{p.n}</span>
              <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={p.to}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
              >
                {p.cta}
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
