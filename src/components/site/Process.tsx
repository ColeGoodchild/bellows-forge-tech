const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We analyze your business, customers, competitors, and opportunities.",
  },
  {
    n: "02",
    title: "Design",
    body: "We create your digital foundation and growth strategy.",
  },
  {
    n: "03",
    title: "Automate",
    body: "We implement AI-powered systems that save time and capture more opportunities.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "We continuously improve performance using data and insights.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The Method</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">How We Forge Growth</h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative border-t border-border pt-6">
              <span className="absolute -top-px left-0 h-px w-12 bg-[image:var(--gradient-ember)]" />
              <span className="font-display text-xs tracking-[0.2em] text-primary">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}