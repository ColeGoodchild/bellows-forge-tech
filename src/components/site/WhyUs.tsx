const reasons = [
  { title: "No fluff", body: "Plain answers, plain pricing, no jargon in between." },
  { title: "Professional websites", body: "Clean design that makes a small business look established." },
  { title: "Built for speed", body: "Pages load fast on phones, where most of your customers are." },
  { title: "SEO from day one", body: "Every site ships with the basics search engines look for." },
  { title: "Transparent pricing", body: "Prices are on the website. No discovery call required to see them." },
  { title: "Fast turnaround", body: "A Starter Website is usually live in about five business days." },
  { title: "No long contracts", body: "Monthly plans are month to month. Stay because it works." },
  { title: "Real communication", body: "You get a person who answers, not a ticket number." },
  { title: "Focused on results", body: "More calls, more booked jobs, fewer hours on busy work." },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Why GrowthBellows</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            A software company that also builds your website.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="panel p-7 transition-colors duration-300 hover:border-primary/40"
            >
              <h3 className="text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}