import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { AutomationAuditForm } from "@/components/site/AutomationAuditForm";
import { automationServices } from "@/data/automation-services";
import { industries } from "@/components/site/industries-data";
import { seo, serviceSchema, faqSchema, type Crumb } from "@/lib/seo";

const path = "/automation";
const title = "AI Automation for Small Businesses | GrowthBellows";
const description =
  "Automate lead follow-up, missed calls, appointments, CRM updates, customer support, and paperwork. Practical AI automation for small businesses, starting at $997.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Automation", path },
];

const faqs = [
  {
    q: "What is business automation?",
    a: "Automation means software handling predictable, repetitive work for you: replying to new leads, texting missed callers, booking appointments, updating your CRM, and moving information between the tools you already use.",
  },
  {
    q: "Do I need to replace my existing software?",
    a: "Usually not. We prefer to connect the tools you already pay for, and only suggest a change when your current setup genuinely can't do the job.",
  },
  {
    q: "What does automation cost?",
    a: "Projects start at $997 setup. Final pricing depends on workflow complexity, integrations, usage, and ongoing support.",
  },
];

export const Route = createFileRoute("/automation/")({
  staticData: { sitemap: true },
  head: () =>
    seo({
      path,
      title,
      description,
      breadcrumbs: crumbs,
      jsonLd: [
        serviceSchema({
          name: "AI & business automation",
          serviceType: "Business process and AI automation for small businesses",
          description,
          path,
        }),
        faqSchema(faqs),
      ],
    }),
  component: AutomationPage,
});

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
            AI Automation for Small Businesses
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
                        {i === 0 ? (
                          <span className="font-mono text-xs">01</span>
                        ) : (
                          <ArrowRight size={14} strokeWidth={2} />
                        )}
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

      {/* Services — each links to its own page */}
      <section id="services" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Eight automation services, each solving one problem.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We start with the workflow costing you the most time or the most missed work.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {automationServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/automation/$slug"
                  params={{ slug: s.slug }}
                  className="panel flex flex-col p-8 transition-colors duration-300 hover:border-primary/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-primary">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                  <ul className="mt-6 grid flex-1 gap-2 sm:grid-cols-2">
                    {s.includes.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {s.navLabel}
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              );
            })}
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
              Not every automation suits every business — we'll say so if yours isn't a fit. Pick
              your industry to see what we'd start with.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="panel p-7 transition-colors hover:border-primary/40"
              >
                <h3 className="text-base font-semibold">Automation for {i.name.toLowerCase()}</h3>
                <ul className="mt-4 space-y-2">
                  {i.points.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Link>
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
              website and local SEO pricing
            </Link>{" "}
            or browse{" "}
            <Link to="/case-studies" className="text-primary underline-offset-4 hover:underline">
              websites we've built for real businesses
            </Link>
            .
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

      {/* FAQ */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-semibold sm:text-4xl">Automation questions</h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="audit" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <p className="eyebrow">Automation audit</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Show us what wastes your time.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us about a repetitive task in your business. We'll tell you whether it can be
              automated and what we'd recommend.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer to talk about a website or local search first? Read about{" "}
              <Link to="/web-design" className="text-primary underline-offset-4 hover:underline">
                small business web design
              </Link>{" "}
              or{" "}
              <Link to="/local-seo" className="text-primary underline-offset-4 hover:underline">
                local SEO services
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
