import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { WhyUs } from "@/components/site/WhyUs";
import { WhoWeWorkWith } from "@/components/site/WhoWeWorkWith";
import { PricingCards } from "@/components/site/PricingCards";
import { CtaBand } from "@/components/site/CtaBand";
import { FAQ } from "@/components/site/FAQ";
import { ContactSection } from "@/components/site/ContactSection";
import { faqs } from "@/components/site/faq-data";

const url = "https://bellows-forge-tech.lovable.app/";
const title = "Small Business Website Design & Local SEO | GrowthBellows";
const description =
  "GrowthBellows builds fast small business websites, improves local SEO and Google Business Profile rankings, and automates repetitive work. Starter websites $297 flat.";

export const Route = createFileRoute("/")({
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
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Problem />
      <HowWeHelp />
      <WhyUs />
      <WhoWeWorkWith />
      <PricingCards />
      <CtaBand />
      <FAQ />
      <ContactSection />
    </>
  );
}