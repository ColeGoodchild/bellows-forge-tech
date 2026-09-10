import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { industryBySlug } from "@/components/site/industries-data";
import { automationBySlug } from "@/data/automation-services";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
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
          name: `${industry.name} web design, local SEO and automation`,
          serviceType: `Web design and automation for ${industry.name.toLowerCase()}`,
          description: industry.description,
          path,
        }),
        faqSchema(industry.faqs),
      ],
    });
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { slug } = Route.useLoaderData();
  const industry = industryBySlug(slug)!;
  const Icon = industry.icon;
  const automations = industry.automations
    .map((s) => automationBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

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
          <h1 className="mt-7 text-4xl leading-[1.1] font-semibold sm:text-5xl">{industry.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {industry.intro}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            What slows down {industry.name.toLowerCase()}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {industry.problems.map((p) => (
              <li key={p} className="panel px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">The website</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Built on our{" "}
              <Link to="/web-design" className="text-primary underline-offset-4 hover:underline">
                small business web design
              </Link>{" "}
              service.
            </p>
            <ul className="mt-6 space-y-3">
              {industry.websiteFocus.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Getting found locally</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Handled through our{" "}
              <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
                local SEO and Google Business Profile
              </Link>{" "}
              service.
            </p>
            <ul className="mt-6 space-y-3">
              {industry.seoFocus.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Automation that fits {industry.name.toLowerCase()}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {automations.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/automation/$slug"
                  params={{ slug: a.slug }}
                  className="panel flex h-full flex-col px-6 py-6 transition-colors hover:border-primary/40"
                >
                  <span className="text-sm font-semibold">{a.name}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.intro}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn about {a.navLabel}
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CaseStudies />

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Common questions</h2>
          <dl className="mt-8 space-y-8">
            {industry.faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get a Quote</Link>
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
