import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingCards } from "@/components/site/PricingCards";
import { FAQ } from "@/components/site/FAQ";
import { CtaBand } from "@/components/site/CtaBand";
import { plans } from "@/components/site/pricing-data";
import { faqs } from "@/components/site/faq-data";

const url = "https://bellows-forge-tech.lovable.app/pricing";
const title = "Website Design Pricing — $297 Starter Site | GrowthBellows";
const description =
  "Transparent web design pricing: $297 starter website, $1,497 growth website, $497/month local SEO, and custom business automation. Hosting from $39/month.";

const pricingFaqs = faqs.filter((f) =>
  ["hosting", "long", "content", "rankings"].some((k) => f.q.toLowerCase().includes(k)),
);

export const Route = createFileRoute("/pricing")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "GrowthBellows website design and growth packages",
          itemListElement: plans.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: p.name,
              description: p.summary,
              provider: { "@type": "Organization", name: "GrowthBellows" },
              offers: { "@type": "Offer", priceCurrency: "USD", description: p.price },
            },
          })),
        }),
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <section className="border-b border-border">
        <div className="hairline-grid absolute inset-x-0 h-[420px] opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Website Pricing, Listed Up Front.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every price is on this page. No packages hidden behind a sales call, no surprise line
            items, and no long contracts on monthly plans.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Not sure which one fits?{" "}
            <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
              Tell us about your business
            </Link>{" "}
            and we will point you to the right one.
          </p>
        </div>
      </section>

      <PricingCards heading={false} />
      <CtaBand />
      <FAQ items={pricingFaqs} />
    </>
  );
}