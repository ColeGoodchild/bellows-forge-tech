import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Request received", {
        description: "We'll be in touch within one business day.",
      });
    }, 600);
  }

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-forge)] opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Ready To Forge Your Next Stage Of Growth?
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Your business already has potential. We provide the technology, systems, and strategy to
            unlock it.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>— A 30-minute consultation, no pressure</li>
            <li>— A clear read on your biggest growth gaps</li>
            <li>— A recommended system and realistic timeline</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="panel rounded-lg p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Services" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="message">What are you trying to improve?</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your business and where growth is stalling."
            />
          </div>
          <Button type="submit" variant="forge" size="xl" className="mt-6 w-full" disabled={submitting}>
            {submitting ? "Sending…" : "Schedule Your Growth Consultation"}
          </Button>
        </form>
      </div>
    </section>
  );
}