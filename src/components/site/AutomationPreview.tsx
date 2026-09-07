import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { automations } from "./automation-data";

export function AutomationPreview({ items = automations.slice(0, 6) }: { items?: typeof automations }) {
  return (
    <section id="automation" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Automation</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Your business should run while you're working.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            If your team repeatedly copies, pastes, emails, texts, schedules, qualifies, or enters
            information, there's probably a better way.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, body, icon: Icon }) => (
            <div
              key={title}
              className="panel group p-7 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors duration-300 group-hover:border-primary/40">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="forge" size="xl">
            <Link to="/automation">See Everything We Automate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
