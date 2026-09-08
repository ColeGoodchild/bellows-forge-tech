import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function AutomationAuditForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      toast.success("Thanks — we got it", {
        description: "We reply within one business day.",
      });
    } catch {
      toast.error("That didn't send", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      action="https://usebasin.com/f/2ba655ec1c91"
      method="POST"
      onSubmit={onSubmit}
      className="panel p-8"
    >
      <input type="hidden" name="_subject" value="New GrowthBellows automation audit request" />
      <input type="hidden" name="_gotcha" style={{ display: "none" }} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="a-name">Name</Label>
          <Input id="a-name" name="name" required maxLength={100} autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="a-business">Business</Label>
          <Input id="a-business" name="business" required maxLength={120} autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="a-email">Email</Label>
          <Input id="a-email" name="email" type="email" required maxLength={255} autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="a-phone">Phone</Label>
          <Input id="a-phone" name="phone" type="tel" maxLength={30} autoComplete="tel" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="a-automate">What do you want to automate?</Label>
        <Textarea id="a-automate" name="what_to_automate" rows={4} required maxLength={1000} />
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="a-software">What software do you currently use?</Label>
        <Input id="a-software" name="current_software" maxLength={255} placeholder="CRM, scheduler, phone system…" />
      </div>

      <Button type="submit" variant="forge" size="xl" className="mt-7 w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Request an Automation Audit"}
      </Button>
    </form>
  );
}
