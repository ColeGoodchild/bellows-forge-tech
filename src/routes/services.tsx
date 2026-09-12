import { createFileRoute } from "@tanstack/react-router";
import { Pillars } from "@/components/site/Pillars";
import { CtaBand } from "@/components/site/CtaBand";

const url = "https://bellows-forge-tech.lovable.app/services";
const title = "Websites, Local SEO & Automation Services | GrowthBellows";
const description =
  "GrowthBellows services for small businesses: professional website design, local SEO and Google Business Profile optimization, and practical business automation.";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
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
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Build. Grow. Automate.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Three services that work together: a website that earns trust, local visibility that
            brings people to it, and automation that handles the follow-up.
          </p>
        </div>
      </section>

      <Pillars />
      <CtaBand />
    </>
  );
}
