import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to get more customers and eliminate busywork?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what's slowing your business down. We'll tell you what we'd build, what it
            costs, and how long it should take.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="forge" size="xl">
            <Link to="/contact">Get Started</Link>
          </Button>
          <Button asChild variant="steel" size="xl">
            <Link to="/pricing">See Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
