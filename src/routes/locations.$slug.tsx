import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { locationBySlug } from "@/data/locations";
import { industryBySlug } from "@/components/site/industries-data";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = locationBySlug(params.slug);
    if (!location) throw notFound();
    return { slug: location.slug };
  },
  head: ({ params }) => {
    const location = locationBySlug(params.slug);
    if (!location) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/locations/${location.slug}`;
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: `${location.city}, ${location.state}`, path },
    ];
    return seo({
      path,
      title: location.title,
      description: location.description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: `Web design and local SEO in ${location.city}, ${location.state}`,
          serviceType: "Web design, local SEO and business automation",
          description: location.description,
          path,
          areaServed: `${location.city}, ${location.state}`,
        }),
        faqSchema(location.faqs),
      ],
    });
  },
  component: LocationPage,
});

function LocationPage() {
  const { slug } = Route.useLoaderData();
  const location = locationBySlug(slug)!;
  const industries = location.industries
    .map((s) => industryBySlug(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: `${location.city}, ${location.state}`, path: `/locations/${location.slug}` },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">
            {location.city}, {location.state}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-5xl">{location.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {location.intro}
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
            What local search looks like in {location.city}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {location.localContext.map((c) => (
              <p key={c} className="panel p-7 text-sm leading-relaxed text-muted-foreground">
                {c}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">Areas we cover around {location.city}</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {location.neighborhoods.map((n) => (
              <li key={n} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We only build a dedicated page for an area when we can say something specific and true
            about it. Read more about how we approach{" "}
            <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
              local SEO and Google Business Profile optimization
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {location.city} businesses we work with
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="panel flex items-center justify-between gap-3 px-5 py-4 text-sm transition-colors hover:border-primary/40"
                >
                  <span className="font-medium">
                    {i.name} in {location.city}
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
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {location.city} questions
          </h2>
          <dl className="mt-8 space-y-8">
            {location.faqs.map((f) => (
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
