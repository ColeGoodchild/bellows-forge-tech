import { MousePointerClick, Search, Timer, Inbox } from "lucide-react";

const problems = [
  {
    icon: MousePointerClick,
    title: "Websites that don't convert",
    body: "Traffic arrives, but the site was never engineered to turn a visitor into a booked customer.",
  },
  {
    icon: Search,
    title: "Invisible in search",
    body: "Competitors own the map pack and the first page while your business never gets found.",
  },
  {
    icon: Timer,
    title: "Time lost to repetition",
    body: "Manual follow-ups, quoting, scheduling and data entry quietly consume your best hours.",
  },
  {
    icon: Inbox,
    title: "Leads falling through",
    body: "Enquiries sit unanswered, get forgotten in an inbox, and quietly go to someone else.",
  },
];

export function Problem() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The Problem</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Most Businesses Have Untapped Potential
          </h2>
          <p className="mt-5 text-muted-foreground">
            The raw material is already there — the reputation, the skill, the demand. What's
            missing is the system that shapes it into consistent growth.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {problems.map((p) => (
            <div key={p.title} className="bg-background p-8">
              <p.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl border-l-2 border-primary pl-6 text-lg leading-relaxed">
          GrowthBellows builds the systems behind growth — the infrastructure, automation and
          strategy that make marketing actually work.
        </p>
      </div>
    </section>
  );
}