import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thanks — we got it", {
        description: "We reply within one business day.",
      });
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="panel p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Business name</Label>
          <Input id="company" name="company" placeholder="Doe Plumbing" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@doeplumbing.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor="message">What do you need?</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="New website, better Google rankings, or help automating something."
        />
      </div>
      <Button type="submit" variant="forge" size="xl" className="mt-6 w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Send My Request"}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        No sales pressure. We reply within one business day with a straight answer.
      </p>
    </form>
  );
}