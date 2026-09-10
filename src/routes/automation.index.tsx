import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Inbox,
  PhoneMissed,
  Headset,
  CalendarCheck,
  Database,
  Star,
  FileText,
  MessagesSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { AutomationAuditForm } from "@/components/site/AutomationAuditForm";

const url = "https://bellows-forge-tech.lovable.app/automation";
const title = "AI Automation for Small Businesses | GrowthBellows";
const description =
  "Automate lead follow-up, missed calls, appointments, CRM updates, customer support, paperwork, and repetitive business tasks with GrowthBellows.";

export const Route = createFileRoute("/automation/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI & Business Automation",
          serviceType: "Business process and AI automation for small businesses",
          provider: { "@type": "Organization", name: "GrowthBellows", url: "https://bellows-forge-tech.lovable.app" },
          description,
          url,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "997",
            description: "Automation projects start at $997 setup.",
          },
        }),
      },
    ],
  }),
  component: AutomationPage,
});

type Service = {
  title: string;
  lead: string;
  detail?: string;
  features: string[];
  cta?: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "AI Lead Follow-Up",
    lead: "Respond to new leads immediately and automatically continue follow-up until they respond, book, or opt out.",
    features: [
      "Instant lead response",
      "Personalized follow-up",
      "Lead qualification",
      "CRM updates",
      "Employee notifications",
      "Follow-up sequences",
    ],
    cta: "Automate Lead Follow-Up",
    icon: Inbox,
  },
  {
    title: "Missed-Call Recovery",
    lead: "Turn missed calls into conversations.",
    detail:
      "When your team can't answer the phone, an automated text can acknowledge the call, collect basic information, and notify the right person.",
    features: [
      "Missed-call detection",
      "Automatic SMS",
      "Lead qualification",
      "CRM creation",
      "Human handoff",
    ],
    cta: "Recover Missed Calls",
    icon: PhoneMissed,
  },
  {
    title: "AI Receptionist",
    lead: "Give your business a receptionist that can answer routine questions and help customers take the next step.",
    detail:
      "Exact capabilities depend on your systems and workflow — we scope what your setup can reliably support before we build anything.",
    features: [
      "Answer common questions",
      "Capture leads",
      "Qualify inquiries",
      "Schedule appointments",
      "Route calls",
      "After-hours support",
      "Call summaries",
    ],
    cta: "Build an AI Receptionist",
    icon: Headset,
  },
  {
    title: "Appointment Automation",
    lead: "Stop playing phone tag.",
    features: [
      "Scheduling",
      "Confirmations",
      "Reminders",
      "Rescheduling",
      "Cancellations",
      "CRM updates",
    ],
    icon: CalendarCheck,
  },
  {
    title: "CRM Automation",
    lead: "Your CRM should update itself.",
    features: [
      "Contact creation",
      "Lead assignment",
      "Status updates",
      "Task creation",
      "Notifications",
      "Data synchronization",
    ],
    icon: Database,
  },
  {
    title: "Review Automation",
    lead: "Make asking for customer feedback part of the workflow.",
    detail:
      "Automation can request feedback after a completed job and point customers to the right review channel where appropriate. It does not manufacture reviews or filter out honest feedback.",
    features: [
      "Post-job feedback requests",
      "Review channel routing",
      "Timing based on job status",
      "Owner notifications",
    ],
    icon: Star,
  },
  {
    title: "Document & Data Automation",
    lead: "Stop paying people to copy information between systems.",
    detail:
      "AI can extract structured information from documents and route it into the systems your team already uses.",
    features: [
      "PDFs",
      "Forms",
      "Emails",
      "Invoices",
      "Work orders",
      "Customer intake forms",
      "Spreadsheets",
    ],
    icon: FileText,
  },
  {
    title: "Customer Support Automation",
    lead: "Let AI handle routine questions while your team handles the complicated ones.",
    features: [
      "FAQ responses",
      "Business information",
      "Service information",
      "Lead capture",
      "Escalation to humans",
      "CRM integration",
    ],
    icon: MessagesSquare,
  },
];

const flows: { label: string; steps: string[] }[] = [
  {
    label: "A new lead arrives",
    steps: [
      "Lead comes in",
      "Customer gets an immediate response",
      "Lead is added to your CRM",
      "You're notified",
      "Follow-up begins",
      "Appointment gets scheduled",
    ],
  },
  {
    label: "A job is completed",
    steps: [
      "Job completed",
      "Customer receives a feedback request",
      "Satisfied customers receive a review request",
      "CRM record is updated",
    ],
  },
  {
    label: "Paperwork shows up",
    steps: [
      "Email arrives",
      "Attachment is read",
      "Information is extracted",
      "Data is entered into the right system",
      "Employee receives a notification",
    ],
  },
];

const audiences: { name: string; examples: string[] }[] = [
  { name: "Plumbers", examples: ["Missed-call text back on emergency calls", "Automatic dispatch notifications", "Review requests after a completed repair"] },
  { name: "HVAC companies", examples: ["Seasonal maintenance reminders", "Booking without phone tag", "Service agreement renewals"] },
  { name: "Electricians", examples: ["Instant replies to quote requests", "Estimate follow-up sequences", "Job details pushed into the CRM"] },
  { name: "Roofers", examples: ["Inspection request intake", "Storm-season lead qualification", "Insurance document extraction"] },
  { name: "Contractors", examples: ["Bid follow-up reminders", "Change-order paperwork routing", "Client status update messages"] },
  { name: "Home services", examples: ["Recurring service scheduling", "After-hours lead capture", "Post-visit feedback requests"] },
  { name: "Professional services", examples: ["Inquiry qualification", "Proposal follow-up", "Onboarding document collection"] },
  { name: "Medical & dental practices", examples: ["Appointment reminders", "New patient intake forms", "Routine question answering"] },
  { name: "Law firms", examples: ["Consultation scheduling", "Intake qualification", "Document intake and filing"] },
  { name: "Small B2B businesses", examples: ["Inbound lead routing", "Quote and invoice follow-up", "CRM data hygiene"] },
];

const packages = [
  {
    name: "Automation Starter",
    setup: "$997 setup",
    monthly: "$149/month",
    line: "One focused workflow.",
    items: ["Lead follow-up", "Review requests", "Appointment reminders", "Missed-call recovery"],
    featured: false,
  },
  {
    name: "Automation Pro",
    setup: "$2,500 setup",
    monthly: "$399/month",
    line: "Several connected workflows working together.",
    items: ["Lead capture", "AI qualification", "CRM updates", "Follow-up", "Scheduling", "Review requests"],
    featured: true,
  },
  {
    name: "AI Operations",
    setup: "From $5,000 setup",
    monthly: "From $750/month",
    line: "For businesses that need a custom automation system.",
    items: [
      "Workflow audit",
      "Multiple automations",
      "AI agents",
      "CRM integrations",
      "API integrations",
      "Dashboards",
      "Ongoing optimization",
    ],
    featured: false,
  },
];

const process = [
  { step: "Audit", body: "We identify repetitive workflows and determine what is worth automating." },
  { step: "Design", body: "We map the workflow and decide where automation, AI, and human judgment belong." },
  { step: "Build", body: "We connect your existing tools and implement the workflow." },
  { step: "Test", body: "We test edge cases, failure scenarios, and human handoffs." },
  { step: "Launch", body: "We put the automation into production." },
  { step: "Improve", body: "We monitor and improve the system over time." },
];

function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <p className="eyebrow">AI &amp; Business Automation</p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-6xl">
            Automate Your Business. Not Your Personality.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We build practical AI and workflow automation systems that handle repetitive sales,
            customer service, scheduling, and administrative work.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="xl">
              <a href="#audit">Automate My Business</a>
            </Button>
            <Button asChild variant="steel" size="xl">
              <a href="#services">See Automation Services</a>
            </Button>
          </div>
          <p className="mt-8 text-sm font-medium text-primary">Starting at $997</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Final pricing depends on workflow complexity and integrations.
          </p>
        </div>
      </section>

      {/* What automation means */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              What does business automation actually mean?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Automation means your software handles predictable work automatically instead of
              requiring someone on your team to do it manually every time.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {flows.map((flow) => (
              <div key={flow.label} className="panel p-7">
                <p className="text-sm font-semibold">{flow.label}</p>
                <ol className="mt-5 space-y-3">
                  {flow.steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-primary">
                        {i === 0 ? <span className="font-mono text-xs">01</span> : <ArrowRight size={14} strokeWidth={2} />}
                      </span>
                      <span className={i === 0 ? "font-medium text-foreground" : undefined}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              AI automation services for small businesses.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each of these solves a specific business problem. We start with the one costing you
              the most time or the most missed work.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {services.map(({ title: t, lead, detail, features, cta, icon: Icon }) => (
              <div key={t} className="panel flex flex-col p-8 transition-colors duration-300 hover:border-primary/40">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead}</p>
                {detail ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                ) : null}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                {cta ? (
                  <div className="mt-7 pt-1">
                    <Button asChild variant="steel">
                      <a href="#audit">{cta}</a>
                    </Button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we automate for */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Who we automate for</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Automation that fits how your business actually runs.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              These are common starting points, not a menu. Not every automation suits every
              business — we'll say so if yours isn't a fit.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.name} className="panel p-7">
                <h3 className="text-base font-semibold">{a.name}</h3>
                <ul className="mt-4 space-y-2">
                  {a.examples.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Automation pricing</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Clear starting points.</h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`panel flex flex-col p-8 ${p.featured ? "border-primary/50 ring-1 ring-primary/20" : ""}`}
              >
                {p.featured ? <p className="eyebrow">Most popular</p> : null}
                <h3 className={`text-lg font-semibold ${p.featured ? "mt-4" : ""}`}>{p.name}</h3>
                <p className="mt-4 text-2xl font-semibold text-primary">{p.setup}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.monthly}</p>
                <p className="mt-4 text-sm leading-relaxed">{p.line}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.featured ? "forge" : "steel"} className="mt-8">
                  <a href="#audit">Explore Automation</a>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            Custom pricing depends on workflow complexity, integrations, usage, and ongoing support
            requirements. See our{" "}
            <Link to="/pricing" className="text-primary underline-offset-4 hover:underline">
              full pricing page
            </Link>{" "}
            for websites and local SEO.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Process</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">How a build actually goes.</h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <div key={p.step} className="panel p-7">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not everything should be automated */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Not everything should be automated.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We won't recommend AI just because it sounds impressive. Some tasks are better handled
            by people. We focus on workflows where automation is reliable, useful, and economically
            sensible.
          </p>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="audit" className="scroll-mt-24 border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">Automation audit</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Show us what wastes your time.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us about a repetitive task in your business. We'll tell you whether it can be
              automated and what we'd recommend.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer to talk about a website or local search first? Visit our{" "}
              <Link to="/services" className="text-primary underline-offset-4 hover:underline">
                services
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
          <AutomationAuditForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
