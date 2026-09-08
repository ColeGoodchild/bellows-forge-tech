import { createFileRoute } from "@tanstack/react-router";
import { AutomationPreview } from "@/components/site/AutomationPreview";
import { automations } from "@/components/site/automation-data";
import { CtaBand } from "@/components/site/CtaBand";

const url = "https://bellows-forge-tech.lovable.app/automation";
const title = "AI & Business Automation for Small Businesses | GrowthBellows";
const description =
  "Automate lead follow-up, missed-call recovery, appointment booking, CRM updates and paperwork. Practical business automation starting at $997.";

export const Route = createFileRoute("/automation")({
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
  component: Automation,
});

function Automation() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Automation</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Let Software Handle the Repetitive Work.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We connect the tools you already use and automate the sales, scheduling and admin work
            that eats your week. Automation projects start at $997.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Final pricing depends on workflow complexity, integrations, usage, and required
            customization.
          </p>
        </div>
      </section>

      <AutomationPreview items={automations} />
      <CtaBand />
    </>
  );
}
