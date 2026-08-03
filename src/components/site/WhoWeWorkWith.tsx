import {
  HardHat,
  Home,
  Zap,
  Wind,
  Wrench,
  Scale,
  Stethoscope,
  Hammer,
  Store,
  type LucideIcon,
} from "lucide-react";

const industries: { name: string; icon: LucideIcon; note: string }[] = [
  { name: "Contractors", icon: HardHat, note: "Bid-ready sites that win jobs" },
  { name: "Roofers", icon: Home, note: "Storm-season lead capture" },
  { name: "Electricians", icon: Zap, note: "Fast quotes, faster calls" },
  { name: "HVAC companies", icon: Wind, note: "Seasonal service bookings" },
  { name: "Plumbers", icon: Wrench, note: "Emergency calls that connect" },
  { name: "Law firms", icon: Scale, note: "Credible, consult-driven pages" },
  { name: "Medical and dental practices", icon: Stethoscope, note: "Simple online booking" },
  { name: "Home services", icon: Hammer, note: "Local search visibility" },
  { name: "Small businesses", icon: Store, note: "One clear place to be found" },
];

export function WhoWeWorkWith() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Who We Work With</p>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
          Local businesses that live on booked jobs.
        </h2>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ name, icon: Icon, note }) => (
          <li
            key={name}
            className="panel group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:border-primary/40"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors duration-300 group-hover:border-primary/40">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{name}</span>
              <span className="block text-sm text-muted-foreground">{note}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}