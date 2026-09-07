const reasons = [
  {
    title: "Lost leads",
    body: "Someone fills out a form and doesn't hear back until tomorrow. By then they've hired the company that answered first.",
  },
  {
    title: "Missed calls",
    body: "You're serving a customer and another potential customer calls. Nobody answers, and that job is gone.",
  },
  {
    title: "Poor Google visibility",
    body: "Your competitors appear when local customers search for the services you provide. You never get the chance to quote.",
  },
  {
    title: "Manual follow-up",
    body: "Your team spends hours chasing leads who should have been contacted automatically — hours that could have been billable.",
  },
  {
    title: "Administrative busywork",
    body: "Employees copy information between emails, spreadsheets, CRMs, forms, and other systems instead of serving customers.",
  },
  {
    title: "Appointment chaos",
    body: "Customers and employees waste time playing phone tag, and bookings slip through the gaps.",
  },
];

export function Problem() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The Problem</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Your business shouldn't lose money to avoidable problems.
          </h2>
          <p className="mt-5 text-muted-foreground">
            The work is good. The systems around the work are what cost you jobs.
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
