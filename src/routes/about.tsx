import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import texture from "@/assets/precision-grid.jpg";

const url = "https://bellows-forge-tech.lovable.app/about";
const title = "About GrowthBellows — A Business Growth Company";
const description =
  "GrowthBellows helps small businesses make more money and save time with practical websites, local SEO and automation. Plain English, flat prices, real results.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GrowthBellows",
          url: "https://bellows-forge-tech.lovable.app",
          description,
          slogan: "Forging Growth Through Technology",
        }),
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "We speak plain English",
    body: "No jargon, no buzzwords, no acronyms you have to Google. If we cannot explain it simply, we will not sell it to you.",
  },
  {
    title: "We price up front",
    body: "Every package and price is on our pricing page. You know what something costs before you talk to anyone.",
  },
  {
    title: "We build things that pay for themselves",
    body: "A website is only worth what it brings in. We measure calls, form fills and booked jobs, not design awards.",
  },
  {
    title: "We stay after launch",
    body: "Hosting, updates, edits and improvements. You are not handed a login and left to figure it out.",
  },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={texture}
          alt=""
          aria-hidden
          width={1536}
          height={768}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            We help small businesses make money and save time.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            That is the whole job. Everything we build — a website, a Google listing, an automated
            follow-up — exists to bring in more work or give you back hours in your week.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Most small business owners we meet are good at what they do and badly served by their
            technology. The website was built years ago and never brought in a call. Nobody can find
            them on Google. Half the week disappears into quotes, reminders and chasing people who
            never wrote back.
          </p>
          <p>
            None of that is a marketing problem. It is a plumbing problem. So we fix the plumbing:
            a fast website that tells people what you do and makes it easy to contact you, a Google
            presence that shows up when someone nearby searches, and automation that handles the
            repetitive parts of your day.
          </p>
          <p>
            We work with contractors, electricians, plumbers, dentists, clinics, shops and service
            businesses of every kind. Small teams, real customers, tight budgets. We keep our prices
            flat and published so you never have to guess.
          </p>
        </div>

        <blockquote className="mt-14 border-l-2 border-primary pl-6 font-display text-xl leading-snug text-foreground">
          &ldquo;If it does not bring in customers or save you time, we do not build it.&rdquo;
        </blockquote>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">How We Work</p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold sm:text-4xl">
            Four things we will not budge on
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="panel p-8">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}