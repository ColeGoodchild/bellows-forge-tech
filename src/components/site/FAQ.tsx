import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Foundation websites typically launch in three to five weeks. Growth and automation engagements begin producing results within the first 30 to 60 days and compound from there.",
  },
  {
    q: "Do I need all three packages?",
    a: "No. Most businesses start with The Foundation, then add The Growth Engine or The Automation Forge once the base is solid. Each one stands on its own.",
  },
  {
    q: "What does 'AI-powered' actually mean here?",
    a: "Practical applications only: AI-assisted content and research, chat assistants that qualify leads, automated follow-up sequences and workflow automation connected to your CRM.",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "Yes. We work remotely with clients across regions, with structured onboarding, scheduled reviews and shared reporting dashboards.",
  },
  {
    q: "Who owns the website and systems you build?",
    a: "You do. Every asset, account and automation we build is yours, documented and transferable.",
  },
  {
    q: "How is performance reported?",
    a: "Monthly reporting covering traffic, rankings, conversions and automation impact — with a clear read on what changed and what we're improving next.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Questions, answered</h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Still unsure where to start? A consultation is the fastest way to find out.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}