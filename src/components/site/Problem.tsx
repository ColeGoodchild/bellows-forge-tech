const reasons = [
  { title: "Slow websites", body: "People leave before the page finishes loading. Every extra second costs you calls." },
  { title: "Outdated design", body: "If the site looks old, people assume the business is too — and call the next name on the list." },
  { title: "Poor Google rankings", body: "If you are not on the first page for your service and your town, you are invisible." },
  { title: "No follow-up process", body: "A form comes in, nobody replies for two days, and the job goes to someone else." },
  { title: "Manual busy work", body: "Quoting, scheduling and reminders eat hours a week that should be billable." },
];

export function Problem() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The Problem</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Most businesses lose customers before the phone ever rings.
          </h2>
          <p className="mt-5 text-muted-foreground">
            The work is good. The website is what is getting in the way.
          </p>
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