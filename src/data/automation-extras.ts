export type AutomationExtras = {
  h1: string;
  headline?: string;
  subheadline: string;
  cta: string;
  setup: string;
  monthly?: string;
  priceNote: string;
  diagram: string[];
  integrations: string[];
  humanHandoff?: string;
};

const note = "Final pricing depends on workflow complexity, integrations, and usage.";

export const automationExtras: Record<string, AutomationExtras> = {
  "ai-receptionist": {
    h1: "AI Receptionist for Small Businesses",
    subheadline:
      "Answer routine questions, capture leads, qualify customers, and help people schedule appointments—even when your team can't pick up.",
    cta: "Build My AI Receptionist",
    setup: "$1,500 setup",
    monthly: "$299/month",
    priceNote: "Pricing depends on call volume, integrations, and complexity.",
    diagram: ["Caller", "AI receptionist", "Calendar & CRM", "Your team"],
    integrations: ["Your business phone line", "Google Calendar", "Microsoft 365", "HubSpot", "Jobber", "Housecall Pro", "ServiceTitan", "Email & SMS alerts"],
    humanHandoff:
      "You decide when a person takes over. Urgent requests, upset callers, or anything outside the script can be transferred live or sent to your team as an immediate alert with a written summary.",
  },
  "lead-follow-up": {
    h1: "Automated Lead Follow-Up for Small Businesses",
    headline: "Stop losing leads because nobody followed up.",
    subheadline:
      "Respond instantly, qualify the lead, follow up personally, update your CRM, alert your team, and stop the sequence the moment the customer replies.",
    cta: "Automate Lead Follow-Up",
    setup: "$997 setup",
    monthly: "$149/month",
    priceNote: note,
    diagram: ["New lead", "Instant reply & qualification", "CRM & follow-up sequence", "Your team books the job"],
    integrations: ["Website forms", "Facebook & Google lead forms", "HubSpot", "GoHighLevel", "Pipedrive", "Gmail & Outlook", "SMS", "Google Calendar"],
  },
  "missed-call-recovery": {
    h1: "Turn Missed Calls Into New Conversations",
    subheadline:
      "Detect the missed call, text the caller automatically, find out what they need, capture their details, and route them to the right person.",
    cta: "Recover Missed Calls",
    setup: "$997 setup",
    monthly: "$149/month",
    priceNote: note,
    diagram: ["Missed call", "Automatic text", "Intent & details captured", "Person on your team"],
    integrations: ["Business phone systems", "Twilio", "RingCentral", "OpenPhone", "Your CRM", "SMS & email alerts"],
  },
  "appointment-scheduling": {
    h1: "Automated Appointment Scheduling",
    subheadline:
      "Handle appointment requests, check availability, book, confirm, remind, reschedule, and cancel—without phone tag.",
    cta: "Automate My Scheduling",
    setup: "$997 setup",
    monthly: "$149/month",
    priceNote: note,
    diagram: ["Customer request", "Availability check", "Booked on your calendar", "Confirmations & reminders"],
    integrations: ["Google Calendar", "Microsoft 365", "Calendly", "Acuity", "Jobber", "Housecall Pro", "Your CRM", "SMS & email"],
  },
  "crm-automation": {
    h1: "CRM Automation for Small Businesses",
    subheadline:
      "Create leads, update contacts, assign owners, create tasks, move deals through the pipeline, send notifications, and keep your systems in sync.",
    cta: "Automate My CRM",
    setup: "$1,500 setup",
    monthly: "$249/month",
    priceNote: note,
    diagram: ["Form, call, or email", "Automation rules", "CRM updated", "Right person notified"],
    integrations: ["HubSpot", "Salesforce", "Pipedrive", "GoHighLevel", "Zoho", "Google Sheets", "QuickBooks", "Slack"],
  },
  "review-automation": {
    h1: "Automated Customer Review Requests",
    subheadline:
      "After a completed job, ask for feedback, send an appropriate review request, track the response, and alert you to negative feedback so you can make it right.",
    cta: "Automate Review Requests",
    setup: "$750 setup",
    monthly: "$99/month",
    priceNote: "Automation makes asking consistent. It does not guarantee positive reviews. " + note,
    diagram: ["Job completed", "Feedback request", "Review link or private follow-up", "You're notified"],
    integrations: ["Google Business Profile", "Jobber", "Housecall Pro", "ServiceTitan", "Your CRM", "SMS & email"],
  },
  "document-automation": {
    h1: "Automate Data Entry From Emails, Forms & Documents",
    subheadline:
      "Pull information out of emails, PDFs, and forms, check it, structure it, send it to the right system, and notify your team.",
    cta: "Automate My Paperwork",
    setup: "$1,500 setup",
    priceNote: "Ongoing support is quoted based on volume. " + note,
    diagram: ["Email, PDF, or form", "Extract & validate", "Sent to CRM or software", "Employee notified"],
    integrations: ["Gmail & Outlook", "Google Drive", "Dropbox", "Google Sheets & Excel", "QuickBooks", "Your CRM", "Databases & APIs"],
  },
  "customer-support": {
    h1: "AI Customer Support for Small Businesses",
    subheadline:
      "Answer FAQs, service questions, and business information, capture leads and appointment requests, and hand complex questions to a person.",
    cta: "Automate Customer Support",
    setup: "$1,000 setup",
    monthly: "$199/month",
    priceNote: note,
    diagram: ["Customer question", "AI support assistant", "Answer, lead, or booking", "Escalated to your team"],
    integrations: ["Website chat", "Facebook Messenger", "SMS", "Email inbox", "Your CRM", "Google Calendar", "Help desk tools"],
    humanHandoff:
      "When a question is unusual, sensitive, or the customer asks for a person, the conversation is passed to your team with the full history attached.",
  },
};

export const implementationSteps = [
  { t: "Audit", d: "We look at the current workflow and confirm automation makes sense." },
  { t: "Design", d: "We map each step and decide where automation and people belong." },
  { t: "Build", d: "We connect your existing tools and set up the workflow." },
  { t: "Test", d: "We test edge cases, failures, and human handoffs before launch." },
  { t: "Launch & improve", d: "We go live, monitor results, and refine over time." },
];
