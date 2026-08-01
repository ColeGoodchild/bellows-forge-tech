import { Compass, Cpu, TrendingUp, Handshake } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Built With Strategy",
    body: "We don't just create websites. We build systems designed around your business goals.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Efficiency",
    body: "We use modern AI tools to help businesses compete with larger companies.",
  },
  {
    icon: TrendingUp,
    title: "Designed For Growth",
    body: "Every website, automation, and campaign is built to create measurable results.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    body: "We become your technology partner, not just another vendor.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Why GrowthBellows</p>
        <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
          Engineering discipline, applied to growth
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((i) => (
          <div
            key={i.title}
            className="panel group rounded-lg p-8 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-[3px] border border-border bg-secondary/60 transition-colors group-hover:border-primary/50">
              <i.icon className="size-4.5 text-primary" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}