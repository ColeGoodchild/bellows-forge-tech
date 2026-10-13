import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { industryBySlug, type Industry } from "@/components/site/industries-data";
import { industryPages, type IndustryPage } from "@/data/industry-pages";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

function pageFor(industry: Industry): IndustryPage {
  const p = industryPages[industry.slug];
  if (p) return p;
  return {
    h1: industry.h1,
    heroCopy: industry.intro,
    cta: "Get More Customers",
    problemsTitle: `What slows down ${industry.name.toLowerCase()}`,
    problems: industry.problems.map((b) => ({ title: b.split(" ").slice(0, 3).join(" "), body: b })),
    services: [
      { name: "Website design", why: industry.websiteFocus[0] ?? "", to: "/web-design" },
      { name: "Local SEO & Google Business Profile", why: industry.seoFocus[0] ?? "", to: "/local-seo" },
      ...industry.automations.map((a) => ({
        name: a.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()),
        why: "Removes repetitive follow-up and admin work.",
        to: `/automation/${a}`,
      })),
    ],
    workflows: [],
    relevantCaseStudies: false,
    faqs: industry.faqs,
  };
}

export const Route = createFileRoute("/industries/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const industry = industryBySlug(params.slug);
    if (!industry) throw notFound();
    return { slug: industry.slug };
  },
  head: ({ params }) => {
    const industry = industryBySlug(params.slug);
    if (!industry) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const page = pageFor(industry);
    const path = `/industries/${industry.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
      { name: industry.name, path },
    ];
    return seo({
      path,
      title: industry.title,
      description: industry.description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: page.h1,
          serviceType: `Web design, local SEO and automation for ${industry.name.toLowerCase()}`,
          description: industry.description,
          path,
        }),
        faqSchema(page.faqs),
      ],
    });
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { slug } = Route.useLoaderData();
  const industry = industryBySlug(slug)!;
  const page = pageFor(industry);
  const Icon = industry.icon;
  const lower = industry.name.toLowerCase();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <span className="mx-auto flex size-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
            <Icon size={22} strokeWidth={1.75} />
          </span>
          <h1 className="mt-7 text-4xl leading-[1.1] font-semibold sm:text-5xl">{page.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {page.heroCopy}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">{page.cta}</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/automation">Automate My Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">{page.problemsTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.problems.map((p) => (
              <li key={p.title} className="panel px-6 py-6">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">How we help {lower}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The services that matter most for your business. You don't need all of them.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.services.map((s) => (
              <li key={s.name}>
                <Link
                  to={s.to as "/web-design"}
                  className="panel flex h-full flex-col px-6 py-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.why}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn about {s.name.toLowerCase()} <ArrowRight size={15} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {page.workflows.length > 0 ? (
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold sm:text-3xl">Automation examples for {lower}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Typical workflows we build. The exact setup depends on the software you already use.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {page.workflows.map((w) => (
                <div key={w.title} className="panel px-6 py-6">
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <ol className="mt-5 flex flex-col items-start gap-1.5">
                    {w.steps.map((step, i) => (
                      <li key={step} className="flex flex-col items-start gap-1.5">
                        <span className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm">
                          {step}
                        </span>
                        {i < w.steps.length - 1 ? (
                          <ArrowDown size={14} className="ml-4 text-primary" aria-hidden />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.relevantCaseStudies ? (
        <CaseStudies />
      ) : (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold">Our work</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We don't have a published {lower} project yet, and we won't invent one. You can see
              the real sites we've built for other businesses.
            </p>
            <Link
              to="/case-studies"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
            >
              See our real case studies <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Questions from {lower}</h2>
          <dl className="mt-8 space-y-8">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What's costing your business time or leads?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you're trying to improve and we'll recommend the simplest solution.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/industries">Browse All Industries</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
