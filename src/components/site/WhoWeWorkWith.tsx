import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { industries } from "./industries-data";

export function WhoWeWorkWith() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Who We Work With</p>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
          Built for businesses that live on booked jobs.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Pick your industry to see the website, local search, and automation work that fits it.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ slug, name, icon: Icon, note }) => (
          <li key={slug}>
            <Link
              to="/industries/$slug"
              params={{ slug }}
              className="panel group flex h-full items-center gap-4 px-5 py-5 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors duration-300 group-hover:border-primary/40">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">{name}</span>
                <span className="block text-sm text-muted-foreground">{note}</span>
              </span>
              <ArrowRight size={16} className="shrink-0 text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
