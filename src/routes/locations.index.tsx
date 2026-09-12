import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { locations } from "@/data/locations";
import { seo, type Crumb } from "@/lib/seo";

const path = "/locations";
const title = "Areas We Serve | GrowthBellows";
const description =
  "GrowthBellows works with small businesses across the United States, with deep local knowledge of the Syracuse and Rochester, New York markets.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Locations", path },
];

export const Route = createFileRoute("/locations/")({
  staticData: { sitemap: true },
  head: () => seo({ path, title, description, breadcrumbs: crumbs }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Locations</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">Areas we serve</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We work with small businesses across the United States. These are the markets we know
            well enough to write something genuinely useful about.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <ul className="grid gap-4 sm:grid-cols-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="panel flex h-full flex-col px-6 py-6 transition-colors hover:border-primary/40"
                >
                  <span className="text-lg font-semibold">
                    {l.city}, {l.state}
                  </span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {l.intro}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Web design and local SEO in {l.city}
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Outside these areas? Everything we do works remotely — start with{" "}
            <Link to="/web-design" className="text-primary underline-offset-4 hover:underline">
              small business web design
            </Link>{" "}
            or{" "}
            <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
              local SEO services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
