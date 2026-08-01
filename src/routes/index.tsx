import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { WhoWeHelp } from "@/components/site/WhoWeHelp";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactSection } from "@/components/site/ContactSection";

const title = "GrowthBellows — Forging Growth Through Technology";
const description =
  "AI-powered growth systems for small businesses: high-converting websites, local SEO, automation and intelligent tools built for measurable results.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Process />
      <WhyUs />
      <WhoWeHelp />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
