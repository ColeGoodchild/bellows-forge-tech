import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { industries } from "@/components/site/industries-data";
import { locations } from "@/data/locations";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

const path = "/local-seo";
const title = "Local SEO Services for Small Businesses | GrowthBellows";
const description =
  "Local SEO and Google Business Profile optimization that helps small businesses show up in the map pack, earn reviews, and turn local searches into phone calls.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Local SEO", path },
];

const faqs = [
  {
    q: "What is local SEO?",
    a: "Local SEO is the work that makes your business appear when someone nearby searches for what you do. It covers your Google Business Profile, service and location pages, consistent business information across the web, and reviews.",
  },
  {
    q: "How long does local SEO take?",
    a: "Google Business Profile improvements often show up within weeks. Ranking for competitive service terms usually takes several months of consistent work.",
  },
  {
    q: "Can you guarantee first place?",
    a: "No, and nobody honestly can. We can do the work that reliably improves local visibility and show you monthly what changed.",
  },
  {
    q: "What does it cost?",
    a: "Ongoing local SEO is part of the Growth Engine plan, starting at $497/month with no long-term contract.",
  },
];

export const Route = createFileRoute("/local-seo")({
  staticData: { sitemap: true },
  head: () =>
    seo({
      path,
      title,
      description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: "Local SEO services",
          serviceType: "Local SEO and Google Business Profile optimization",
          description,
          path,
        }),
        faqSchema(faqs),
      ],
    }),
  component: LocalSeoPage,
});

const work = [
  {
    h: "Google Business Profile optimization",
    body: "Correct categories, services, hours, service areas, photos and posts, plus the attributes that decide whether you appear in the map pack.",
  },
  {
    h: "Service pages that match search intent",
    body: "One clear page per service you offer, written for how customers actually search rather than for a keyword list.",
  },
  {
    h: "Location pages worth having",
    body: "Genuinely specific pages for the areas you serve. We don't mass-produce thin city pages that Google ignores.",
  },
  {
    h: "Review strategy",
    body: "A steady flow of recent, honest reviews built into your workflow, not a one-off campaign.",
  },
  {
    h: "Consistent business information",
    body: "Your name, address and phone number matched across the directories and data sources Google reads.",
  },
  {
    h: "Reporting you can read",
    body: "A monthly summary of rankings, calls, and what we changed, in plain language.",
  },
];

const foundations = [
  "Technical SEO audit",
  "Site speed and Core Web Vitals",
  "Mobile-first structure",
  "Clean URLs and internal linking",
  "Descriptive titles and metadata",
  "Structured data",
  "XML sitemap and robots.txt",
  "Analytics and call tracking",
];

function LocalSeoPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Grow</p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-5xl">
            Local SEO Services for Small Businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Show up when local customers search for what you do, and give them an obvious reason to
            call you instead of the next result.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Grow My Business</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">What local SEO work actually involves</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <div key={w.h} className="panel p-7">
                <h3 className="text-base font-semibold">{w.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Technical foundations we check first</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.map((f) => (
              <li key={f} className="panel flex items-start gap-3 px-5 py-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Local SEO works best on a fast site. If yours is slow or dated, start with{" "}
            <Link to="/web-design" className="text-primary underline-offset-4 hover:underline">
              small business web design
            </Link>
            . Then add{" "}
            <Link
              to="/automation/$slug"
              params={{ slug: "review-automation" }}
              className="text-primary underline-offset-4 hover:underline"
            >
              review request automation
            </Link>{" "}
            so the review flow keeps running by itself.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Local SEO by industry</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="panel flex items-center justify-between gap-3 px-5 py-4 text-sm transition-colors hover:border-primary/40"
                >
                  <span className="font-medium">Local SEO for {i.name.toLowerCase()}</span>
                  <ArrowRight size={15} className="shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-semibold sm:text-3xl">Markets we know well</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="panel flex items-center justify-between gap-3 px-5 py-4 text-sm transition-colors hover:border-primary/40"
                >
                  <span className="font-medium">
                    Local SEO in {l.city}, {l.state}
                  </span>
                  <ArrowRight size={15} className="shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Local SEO questions</h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
