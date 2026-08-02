import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";

const url = "https://bellows-forge-tech.lovable.app/contact";
const title = "Contact GrowthBellows — Get a Website Quote";
const description =
  "Tell us what your business needs: a new website, better Google rankings, hosting, or automation. We reply within one business day with a straight answer and a flat price.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
          Let's Talk About Your Website.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Send us a few details and we will tell you what we would build, what it costs, and how
          long it takes. If we are not the right fit, we will say so.
        </p>

        <div className="mt-10 space-y-5">
          {[
            { h: "One business day", p: "That is how long you wait for a reply." },
            { h: "Flat pricing", p: "You get the full price before any work starts." },
            { h: "No contracts", p: "Monthly plans are month to month." },
          ].map((i) => (
            <div key={i.h} className="border-l-2 border-primary pl-5">
              <h2 className="text-base font-semibold">{i.h}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{i.p}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  );
}