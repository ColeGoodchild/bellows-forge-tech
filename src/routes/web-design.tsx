import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { industries } from "@/components/site/industries-data";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

const path = "/web-design";
const title = "Small Business Web Design | GrowthBellows";
const description =
  "Fast, mobile-first small business websites built to earn trust and generate calls. Starter websites are $297 flat; multi-page Growth Websites start at $1,497.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Web Design", path },
];

const faqs = [
  {
    q: "What does a small business website cost?",
    a: "A one-page Starter Website is $297 flat. A multi-page Growth Website starts at $1,497. Hosting and care is $39/month or $397/year.",
  },
  {
    q: "How long does it take?",
    a: "A Starter Website is usually live in about five business days once we have your logo, photos and business details. Growth Websites take two to four weeks.",
  },
  {
    q: "Can I edit the site myself?",
    a: "Yes. We show you how to change text, photos and hours. Minor edits are also included in the Hosting + Care Plan.",
  },
  {
    q: "Is SEO included?",
    a: "Every website ships with a technical SEO foundation: clean structure, fast loading, descriptive metadata and mobile-first layout. Ongoing local SEO is a separate service.",
  },
];

export const Route = createFileRoute("/web-design")({
  staticData: { sitemap: true },
  head: () =>
    seo({
      path,
      title,
      description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: "Small business web design",
          serviceType: "Website design and development for small businesses",
          description,
          path,
        }),
        faqSchema(faqs),
      ],
    }),
  component: WebDesignPage,
});

const included = [
  "Custom design in your brand",
  "Mobile-first development",
  "Conversion-focused layout",
  "Speed optimization",
  "Technical SEO foundation",
  "Lead capture forms",
  "Click-to-call on every screen",
  "Google Maps and hours",
  "Analytics setup",
];

const process = [
  { step: "Brief", body: "We collect your services, photos, hours and the questions customers ask most." },
  { step: "Design", body: "We lay out the page around the one action you want visitors to take." },
  { step: "Build", body: "We build it fast, mobile-first, and with a clean technical SEO structure." },
  { step: "Review", body: "You review, we revise, and we test on real phones before launch." },
  { step: "Launch", body: "We connect your domain, verify tracking, and hand over the keys." },
];

function WebDesignPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Build</p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-5xl">
            Small Business Web Design
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A website that loads fast, reads clearly on a phone, and makes contacting you the
            obvious next step. Starter websites are $297 flat.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get My Website</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">What every website includes</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f) => (
              <li key={f} className="panel flex items-start gap-3 px-5 py-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">How a website build goes</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <div key={p.step} className="panel p-7">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A new site works best alongside{" "}
            <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
              local SEO and Google Business Profile optimization
            </Link>{" "}
            so people can find it, and{" "}
            <Link to="/automation" className="text-primary underline-offset-4 hover:underline">
              lead follow-up automation
            </Link>{" "}
            so nobody who contacts you waits until tomorrow.
          </p>
        </div>
      </section>

      <CaseStudies />

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Websites by industry</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="panel flex items-center justify-between gap-3 px-5 py-4 text-sm transition-colors hover:border-primary/40"
                >
                  <span className="font-medium">Web design for {i.name.toLowerCase()}</span>
                  <ArrowRight size={15} className="shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Web design questions</h2>
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
