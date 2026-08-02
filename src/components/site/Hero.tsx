import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/precision-grid.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="rise">
          <p className="eyebrow">Websites · Local SEO · Automation</p>
          <h1 className="mt-6 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Websites That Help Your Business Grow.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We build websites, improve your Google rankings, and automate repetitive work so you can
            spend less time chasing customers and more time serving them.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get My Website</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "$297", v: "Starter website, flat fee" },
              { k: "5 days", v: "Typical turnaround" },
              { k: "No contracts", v: "Cancel monthly plans anytime" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-base font-semibold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="panel overflow-hidden">
            <img
              src={heroVisual}
              alt="Precision-engineered charcoal panels with copper detailing, representing carefully built websites"
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}