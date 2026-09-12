import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { AutomationAuditForm } from "@/components/site/AutomationAuditForm";
import { automationBySlug, automationServices } from "@/data/automation-services";
import { industryBySlug } from "@/components/site/industries-data";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

export const Route = createFileRoute("/automation/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = automationBySlug(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = automationBySlug(params.slug);
    if (!service) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/automation/${service.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Automation", path: "/automation" },
      { name: service.name, path },
    ];
    return seo({
      path,
      title: service.title,
      description: service.description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: service.name,
          serviceType: service.name,
          description: service.description,
          path,
        }),
        faqSchema(service.faqs),
      ],
    });
  },
  component: AutomationServicePage,
});

function AutomationServicePage() {
  const { slug } = Route.useLoaderData();
  const service = automationBySlug(slug)!;
  const Icon = service.icon;
  const related = service.related
    .map((s) => automationBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const industries = service.industries
    .map((s) => industryBySlug(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Automation", path: "/automation" },
          { name: service.name, path: `/automation/${service.slug}` },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <span className="mx-auto flex size-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
            <Icon size={22} strokeWidth={1.75} />
          </span>
          <h1 className="mt-7 text-4xl leading-[1.1] font-semibold sm:text-5xl">{service.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {service.intro}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <a href="#audit">Request an Automation Audit</a>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">The problem this solves</h2>
            <ul className="mt-6 space-y-3">
              {service.problem.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
            <ol className="mt-6 space-y-3">
              {service.howItWorks.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">What's included</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((f) => (
              <li key={f} className="panel flex items-start gap-3 px-5 py-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-semibold sm:text-3xl">Who this is a good fit for</h2>
          <ul className="mt-6 space-y-3">
            {service.goodFit.map((g) => (
              <li key={g} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {industries.length ? (
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Businesses that use {service.name.toLowerCase()}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="panel flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:border-primary/40"
                  >
                    <span>
                      <span className="block text-sm font-semibold">{i.name}</span>
                      <span className="block text-sm text-muted-foreground">{i.note}</span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Questions about {service.name.toLowerCase()}</h2>
          <dl className="mt-8 space-y-8">
            {service.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Related automation services</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/automation/$slug"
                  params={{ slug: r.slug }}
                  className="panel block px-6 py-6 transition-colors hover:border-primary/40"
                >
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{r.intro}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            See{" "}
            <Link to="/automation" className="text-primary underline-offset-4 hover:underline">
              all {automationServices.length} automation services
            </Link>{" "}
            or read about our{" "}
            <Link to="/case-studies" className="text-primary underline-offset-4 hover:underline">
              client websites and results
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="audit" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">Automation audit</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Show us what wastes your time.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us about the repetitive work in your business. We'll tell you whether it can be
              automated and what we'd recommend.
            </p>
          </div>
          <AutomationAuditForm />
        </div>
      </section>
    </>
  );
}
