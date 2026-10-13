import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categoryBySlug, type Article } from "@/data/blog";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: a.slug }}
      className="group flex flex-col rounded-[0.875rem] border border-border bg-card/40 p-6 transition-colors hover:border-primary/50"
    >
      <p className="text-xs tracking-wider text-primary uppercase">
        {categoryBySlug(a.category)?.name} · {a.readMinutes} min read
      </p>
      <h3 className="mt-3 text-lg leading-snug font-semibold">{a.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {a.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm text-primary">
        Read the guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
