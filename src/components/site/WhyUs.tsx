const reasons = [
  { title: "No fluff", body: "Plain answers, plain pricing, no unnecessary jargon." },
  {
    title: "Built for business",
    body: "We focus on systems that produce useful business outcomes, not technology for technology's sake.",
  },
  {
    title: "Fast websites",
    body: "Professional websites designed to work well on phones and load quickly.",
  },
  {
    title: "SEO from day one",
    body: "Every website is built with a strong technical SEO foundation.",
  },
  {
    title: "Practical automation",
    body: "We automate specific business problems instead of selling vague AI solutions.",
  },
  {
    title: "Transparent pricing",
    body: "See what our core services cost before you talk to us.",
  },
  { title: "No long contracts", body: "Monthly services remain month to month." },
  { title: "Real communication", body: "You get a person who actually answers." },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Why GrowthBellows</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Technology without the corporate nonsense.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
