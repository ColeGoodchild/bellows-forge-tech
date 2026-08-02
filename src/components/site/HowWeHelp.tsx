import layers from "@/assets/layers-copper.jpg";

const steps = [
  {
    n: "1",
    title: "Build",
    body: "We create a website that makes your business look professional, loads fast on phones, and makes it easy to call you.",
  },
  {
    n: "2",
    title: "Grow",
    body: "We help customers find you on Google with local SEO, a properly set up Google Business Profile, and pages written for what people actually search.",
  },
  {
    n: "3",
    title: "Automate",
    body: "We eliminate repetitive work with AI and automation — chatbots, lead follow-up, reminders and CRM updates that run without you.",
  },
];

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">How We Help</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Three simple steps.</h2>

            <ol className="mt-10 space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="panel flex gap-5 p-7">
                  <span className="font-display text-sm font-semibold text-primary">{s.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="panel overflow-hidden">
            <img
              src={layers}
              alt="Three layered charcoal panels with copper edges, representing build, grow and automate"
              loading="lazy"
              width={1200}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}