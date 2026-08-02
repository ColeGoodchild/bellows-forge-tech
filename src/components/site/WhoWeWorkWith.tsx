const industries = [
  "Contractors",
  "Roofers",
  "Electricians",
  "HVAC companies",
  "Plumbers",
  "Law firms",
  "Medical and dental practices",
  "Home services",
  "Small businesses",
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

      <ul className="mt-12 flex flex-wrap gap-3">
        {industries.map((i) => (
          <li
            key={i}
            className="panel px-5 py-3 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
          >
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}