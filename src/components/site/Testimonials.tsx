const testimonials = [
  {
    quote:
      "The new site paid for itself in the first two months. Enquiries stopped slipping through and every lead now gets followed up automatically.",
    name: "Client Name",
    role: "Owner, Home Services Company",
  },
  {
    quote:
      "They approached our practice like engineers, not marketers. Everything was measured, documented and improved month over month.",
    name: "Client Name",
    role: "Managing Partner, Professional Services Firm",
  },
  {
    quote:
      "The automation work removed hours of admin every week. Our small team now operates like a much larger one.",
    name: "Client Name",
    role: "Director, Growing Company",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Client Results</p>
        <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">What partners say</h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="panel flex flex-col rounded-lg p-8">
            <span className="font-display text-3xl leading-none text-primary">&ldquo;</span>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 border-t border-border pt-5">
              <span className="block text-sm font-semibold">{t.name}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}