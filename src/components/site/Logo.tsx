import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[3px] border border-primary/40 bg-secondary/60">
        <span className="h-3 w-3 rotate-45 bg-[image:var(--gradient-ember)] transition-transform duration-500 group-hover:rotate-[135deg]" />
      </span>
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        Growth<span className="text-primary">Bellows</span>
      </span>
    </Link>
  );
}