import { Wrench, Briefcase, HeartPulse, Store, Rocket } from "lucide-react";

const audiences = [
  { icon: Wrench, title: "Home service companies", body: "HVAC, roofing, plumbing, electrical and remodeling teams that live on booked jobs." },
  { icon: Briefcase, title: "Professional services", body: "Law, accounting, consulting and advisory firms that compete on trust." },
  { icon: HeartPulse, title: "Healthcare businesses", body: "Clinics and practices that need reliable intake and a credible presence." },
  { icon: Store, title: "Local retailers", body: "Storefronts that need to be found, chosen and revisited in their area." },
  { icon: Rocket, title: "Growing companies", body: "Teams outgrowing manual processes and ready for real systems." },
];

export function WhoWeHelp() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Who We Help</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Built for operators</h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="bg-background p-8">
              <a.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
          <div className="hidden bg-background p-8 lg:block" />
        </div>
      </div>
    </section>
  );
}