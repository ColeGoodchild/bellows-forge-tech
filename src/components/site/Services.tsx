import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "The Foundation",
    tagline: "Build the foundation for digital growth.",
    price: "Starting at $1,500",
    features: [
      "Professional website design and development",
      "Mobile optimization",
      "SEO foundation",
      "Google Business Profile optimization",
      "Analytics setup",
      "Conversion-focused contact forms",
    ],
    featured: false,
  },
  {
    name: "The Growth Engine",
    tagline: "Turn your online presence into a customer acquisition system.",
    price: "Starting at $750/month",
    features: [
      "Local SEO strategy",
      "AI-assisted content creation",
      "Blog and landing pages",
      "Review management",
      "Monthly analytics reporting",
      "Conversion optimization",
    ],
    featured: true,
  },
  {
    name: "The Automation Forge",
    tagline: "Eliminate repetitive work and scale your operations.",
    price: "Starting at $500/month",
    features: [
      "AI chat assistants",
      "Lead qualification systems",
      "Automated follow-ups",
      "CRM integrations",
      "Workflow automation",
      "Custom AI solutions",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Productized growth systems</h2>
          <p className="mt-5 text-muted-foreground">
            Three engagements, each engineered to do one job exceptionally well. Combine them as
            your business grows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`panel relative flex flex-col rounded-lg p-8 ${
                p.featured ? "border-primary/50 shadow-[var(--shadow-forge)]" : ""
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-ember)] px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase">
                  Most chosen
                </span>
              ) : null}
              <h3 className="font-display text-xl font-semibold tracking-tight uppercase">
                {p.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-border pt-6 font-display text-lg font-semibold">
                {p.price}
              </p>
              <Button asChild variant={p.featured ? "forge" : "steel"} size="lg" className="mt-5">
                <a href="#contact">Discuss this package</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}