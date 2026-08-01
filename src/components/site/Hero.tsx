import { Button } from "@/components/ui/button";
import heroForge from "@/assets/hero-forge.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hairline-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute inset-0 bg-[image:var(--gradient-forge)] opacity-70"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
        <div className="rise">
          <p className="eyebrow">AI-Powered Growth Systems</p>
          <h1 className="mt-6 text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
            Forging Growth
            <br />
            Through <span className="text-forged">Technology</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build AI-powered growth systems for small businesses — combining high-converting
            websites, SEO, automation, and intelligent tools that help you attract more customers
            and operate more efficiently.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <a href="#contact">Start Forging Your Growth</a>
            </Button>
            <Button asChild variant="steel" size="xl">
              <a href="#services">See Our Services</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "Systems", v: "Built to convert" },
              { k: "AI", v: "Applied, not hyped" },
              { k: "Data", v: "Measured monthly" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-sm font-semibold text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="panel relative overflow-hidden rounded-lg">
            <img
              src={heroForge}
              alt="Glowing metal being precisely shaped on a modern anvil"
              width={1536}
              height={1152}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)] opacity-80" />
          </div>
          <div className="pointer-events-none absolute -inset-x-8 -bottom-10 h-32 bg-[image:var(--gradient-forge)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}