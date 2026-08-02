import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./faq-data";

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  return (
    <section id="faq" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Common questions</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Straight answers about websites, hosting, local SEO and automation. If yours is not
            here, ask us directly.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                <h3 className="text-base font-medium">{f.q}</h3>
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