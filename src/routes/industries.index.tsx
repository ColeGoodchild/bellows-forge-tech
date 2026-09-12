import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { industries } from "@/components/site/industries-data";
import { seo, type Crumb } from "@/lib/seo";

const path = "/industries";
const title = "Industries We Serve | GrowthBellows";
const description =
  "Websites, local SEO, and automation built for plumbers, HVAC companies, electricians, roofers, contractors, law firms, medical practices, and other local businesses.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Industries", path },
];

export const Route = createFileRoute("/industries/")({
  staticData: { sitemap: true },
  head: () =>
    seo({
      path,
      title,
      description,
      breadcrumbs: crumbs,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries served by GrowthBellows",
          itemListElement: industries.map((i, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: i.name,
            url: `https://bellows-forge-tech.lovable.app/industries/${i.slug}`,
          })),
        },
      ],
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Industries</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Built for businesses that live on booked jobs.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every industry loses work in a different place. Pick yours to see the website, local
            search, and automation work that fits.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ slug, name, icon: Icon, note }) => (
              <li key={slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug }}
                  className="panel group flex h-full items-center gap-4 px-5 py-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{name}</span>
                    <span className="block text-sm text-muted-foreground">{note}</span>
                  </span>
                  <ArrowRight size={16} className="shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/automation">Explore AI Automation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
