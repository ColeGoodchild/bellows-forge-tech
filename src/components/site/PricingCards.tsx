import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { plans, carePlan } from "./pricing-data";

export function PricingCards({ heading = true }: { heading?: boolean }) {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {heading ? (
          <div className="max-w-2xl">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Clear prices. No discovery call required.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pick the package that matches where your business is today. You can move up whenever
              it makes sense.
            </p>
          </div>
        ) : null}

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`panel relative flex flex-col p-8 transition-colors duration-300 ${
                p.featured ? "border-primary/50" : "hover:border-primary/40"
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-4 font-display text-3xl font-semibold">
                {p.price}
                {p.priceNote ? (
                  <span className="ml-2 font-body text-sm font-normal text-muted-foreground">
                    {p.priceNote}
                  </span>
                ) : null}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              {p.fine ? (
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
                  {p.fine.join(" ")}
                </p>
              ) : null}

              <Button
                asChild
                variant={p.featured ? "forge" : "steel"}
                size="lg"
                className="mt-7 w-full"
              >
                <Link to="/contact">{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="panel mt-5 flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <p className="eyebrow">Optional upgrade</p>
            <h3 className="mt-4 text-xl font-semibold">{carePlan.name}</h3>
            <p className="mt-3 font-display text-2xl font-semibold">
              {carePlan.price}
              <span className="ml-2 font-body text-sm font-normal text-muted-foreground">
                or {carePlan.altPrice}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Keep your website fast, secure and up to date without thinking about it.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {carePlan.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}