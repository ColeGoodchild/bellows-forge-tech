import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CaseStudies } from "@/components/site/CaseStudies";
import { seo, type Crumb } from "@/lib/seo";

const path = "/case-studies";
const title = "Small Business Website Case Studies | GrowthBellows";
const description =
  "Real websites we've built for real businesses: a quality management consultancy, an ISO and AS9100 consulting firm, and an AS9100D wire harness manufacturer.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path },
];

export const Route = createFileRoute("/case-studies")({
  staticData: { sitemap: true },
  head: () => seo({ path, title, description, breadcrumbs: crumbs }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Our work</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Real businesses. Real websites.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            No stock templates or made-up mockups. These are real businesses we've worked with.
          </p>
        </div>
      </section>

      <CaseStudies />

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Want something like this?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Start with{" "}
            <Link to="/web-design" className="text-primary underline-offset-4 hover:underline">
              small business web design
            </Link>
            , add{" "}
            <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
              local SEO
            </Link>
            , and automate the follow-up.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="steel" size="xl">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
