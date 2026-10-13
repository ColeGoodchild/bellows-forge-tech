import type { Article } from "./blog-types";

const D = "2026-10-13";

export const automationArticles: Article[] = [
  {
    slug: "what-is-ai-automation-for-small-businesses",
    title: "What Is AI Automation for Small Businesses?",
    metaTitle: "What Is AI Automation for Small Businesses? | GrowthBellows",
    description:
      "A plain explanation of AI automation for small businesses: what it is, what it's good at, and where it isn't worth it.",
    category: "ai-automation",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "AI automation means software handles predictable work for you, and AI handles the parts that used to need a person to read or write something, like understanding an email or answering a routine question. For a small business, that usually means faster replies to leads, fewer missed calls, and less copying between tools.",
    sections: [
      {
        id: "plain",
        h2: "In plain terms",
        blocks: [
          "Regular automation follows fixed rules: when a form is submitted, add the person to the CRM and text them. AI adds the ability to deal with messy input: reading an email, pulling details out of a PDF, or answering \"Do you service Liverpool?\" in natural language.",
        ],
      },
      {
        id: "example",
        h2: "A real-world example",
        blocks: [
          { ol: [
            "A lead fills out your website form at 9pm.",
            "They get a text within a minute confirming you got it.",
            "AI asks two qualifying questions and records the answers.",
            "The lead appears in your CRM and you get a summary.",
            "If they don't reply, a polite follow-up goes out the next day.",
          ] },
        ],
      },
      {
        id: "good-at",
        h2: "What it's good at, and what it isn't",
        blocks: [
          { h3: "Good at" },
          { ul: ["Repetitive, predictable tasks.", "Fast first responses.", "Reading and sorting information.", "Routine questions with clear answers."] },
          { h3: "Not good at" },
          { ul: ["Judgment calls and negotiations.", "Upset customers who need a human.", "Tasks that happen once a month."] },
          "We say it often: not everything should be automated. See [our approach to AI automation](/automation).",
        ],
      },
      {
        id: "start",
        h2: "Where to start",
        blocks: [
          "Pick one task your team repeats every day and that costs you money when it's slow. For most local businesses that's [lead follow-up](/automation/lead-follow-up) or [missed-call recovery](/automation/missed-call-recovery). Then see [10 tasks you can automate](/blog/business-tasks-you-can-automate-with-ai).",
        ],
      },
    ],
    faqs: [
      { q: "Do I need to replace my software?", a: "Usually not. Most automation connects the tools you already use." },
      { q: "Is AI automation expensive?", a: "A single focused workflow starts at $997 setup and $149/month with us. Bigger systems cost more." },
    ],
    related: ["business-tasks-you-can-automate-with-ai", "automatically-follow-up-with-new-leads", "ai-receptionist-vs-answering-service"],
    cta: "automation",
  },
  {
    slug: "business-tasks-you-can-automate-with-ai",
    title: "10 Business Tasks You Can Automate With AI",
    metaTitle: "10 Business Tasks You Can Automate With AI | GrowthBellows",
    description:
      "Ten specific, realistic tasks small businesses automate with AI, with what each one looks like in practice.",
    category: "ai-automation",
    published: D,
    readMinutes: 7,
    shortAnswer:
      "The most common are responding to new leads, texting back missed calls, booking appointments, sending reminders, updating your CRM, asking for reviews, answering routine questions, sorting emails, pulling data out of documents, and creating job summaries. All of them are predictable and repeated often, which is what makes them worth automating.",
    sections: [
      {
        id: "sales",
        h2: "Sales and leads",
        blocks: [
          { ol: [
            "Instant lead response: every inquiry gets a reply in minutes. See [lead follow-up](/automation/lead-follow-up).",
            "Missed-call text back: callers you couldn't answer get a text. See [missed-call recovery](/automation/missed-call-recovery).",
            "Lead qualification: AI asks a few questions so you know who's serious.",
          ] },
        ],
      },
      {
        id: "scheduling",
        h2: "Scheduling and customers",
        blocks: [
          { ol: [
            "Appointment booking without phone tag. See [appointment scheduling](/automation/appointment-scheduling).",
            "Reminders and confirmations to reduce no-shows.",
            "Review requests after completed jobs. See [review automation](/automation/review-automation).",
            "Answering routine questions about hours, areas and services. See [customer support automation](/automation/customer-support).",
          ] },
        ],
      },
      {
        id: "admin",
        h2: "Admin and data",
        blocks: [
          { ol: [
            "CRM updates: contacts, statuses and tasks created automatically. See [CRM automation](/automation/crm-automation).",
            "Document data extraction from PDFs, invoices and intake forms. See [document automation](/automation/document-automation).",
            "Email sorting and routing to the right person.",
          ] },
        ],
      },
      {
        id: "choose",
        h2: "How to choose your first one",
        blocks: [
          "Pick the task that happens most often and costs money when it's slow or forgotten. Automate one thing well before adding more.",
        ],
      },
    ],
    related: ["what-is-ai-automation-for-small-businesses", "automate-crm-data-entry", "automate-appointment-scheduling"],
    cta: "automation",
  },
  {
    slug: "automatically-follow-up-with-new-leads",
    title: "How to Automatically Follow Up With New Leads",
    metaTitle: "How to Automatically Follow Up With New Leads | GrowthBellows",
    description:
      "How to set up automatic lead follow-up so every inquiry gets a fast reply and a few polite follow-ups, without sounding like a robot.",
    category: "lead-generation",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Connect your lead sources (website form, Google, ads) to a system that sends an immediate text and email, notifies you, logs the lead in your CRM, and sends a short series of follow-ups until the person replies, books or opts out. Keep messages short and personal, and stop the sequence the moment a human takes over.",
    sections: [
      {
        id: "why",
        h2: "Why speed matters",
        blocks: [
          "Someone who fills out a form is often contacting several businesses at once. The first one to reply clearly has the advantage. If you're on a job, you can't reply in five minutes. Automation can.",
        ],
      },
      {
        id: "setup",
        h2: "The basic setup",
        blocks: [
          { ol: [
            "List every place leads come from: forms, Google Business Profile, ads, email.",
            "Send them all into one place, usually your CRM.",
            "Send an immediate reply that confirms what they asked for.",
            "Notify the right person on your team.",
            "Schedule two to four follow-ups over a week if there's no reply.",
            "Stop automatically when they reply or book.",
          ] },
        ],
      },
      {
        id: "messages",
        h2: "Writing messages that don't sound automated",
        blocks: [
          { ul: [
            "Use their name and what they asked about.",
            "Keep texts to one or two sentences.",
            "Ask one simple question.",
            "Always include a way to opt out of texts.",
          ] },
          { note: "Texting rules vary. Get consent through your form and include opt-out language." },
        ],
      },
      {
        id: "help",
        h2: "Getting it done",
        blocks: [
          "You can build this with many CRMs. If you'd rather not, our [lead follow-up automation](/automation/lead-follow-up) sets it up around your existing tools.",
        ],
      },
    ],
    related: ["automate-customer-follow-up", "automatically-respond-to-missed-calls", "automate-crm-data-entry"],
    cta: "automation",
  },
  {
    slug: "automatically-respond-to-missed-calls",
    title: "How to Automatically Respond to Missed Calls",
    metaTitle: "How to Automatically Respond to Missed Calls | GrowthBellows",
    description:
      "How missed-call text back works, what the text should say, and how to make sure the right person follows up.",
    category: "ai-automation",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "Set up your business phone system so that when a call goes unanswered, the caller gets a text within a minute acknowledging the call and asking how you can help. Their reply gets logged and sent to the right person. It works best on a business line that supports call event tracking, such as many VoIP systems.",
    sections: [
      {
        id: "how",
        h2: "How it works",
        blocks: [
          { ol: [
            "A call comes in and nobody answers.",
            "The phone system detects the missed call.",
            "The caller gets a text: \"Sorry we missed you, this is [Business]. How can we help?\"",
            "Their reply creates a lead and notifies your team.",
            "Someone calls back when free.",
          ] },
        ],
      },
      {
        id: "requirements",
        h2: "What you need",
        blocks: [
          { ul: [
            "A business phone line that can trigger events or forward missed calls.",
            "A text-capable number, ideally the same one customers call.",
            "Somewhere for replies to go: CRM, shared inbox or team texting app.",
          ] },
          "Personal cell phones are the hardest case. Moving to a business line usually comes first.",
        ],
      },
      {
        id: "the-text",
        h2: "What the text should say",
        blocks: [
          "Short, human, and clear about who you are. Don't pretend a person is typing if one isn't. Ask what they need and when's a good time to call back.",
        ],
      },
      {
        id: "trades",
        h2: "Who benefits most",
        blocks: [
          "Anyone who can't answer while working: [plumbers](/industries/plumbers), [HVAC companies](/industries/hvac), [electricians](/industries/electricians) and [roofers](/industries/roofers). See [missed-call recovery](/automation/missed-call-recovery).",
        ],
      },
    ],
    related: ["ai-receptionist-vs-answering-service", "automatically-follow-up-with-new-leads", "website-design-for-contractors"],
    cta: "automation",
  },
  {
    slug: "ai-receptionist-vs-answering-service",
    title: "AI Receptionist vs Traditional Answering Service",
    metaTitle: "AI Receptionist vs Answering Service: Which Is Better? | GrowthBellows",
    description:
      "An honest comparison of AI receptionists and human answering services: cost, quality, and which fits your business.",
    category: "ai-automation",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "An AI receptionist can answer every call instantly, handle routine questions and capture details at any hour, usually at a predictable cost. A human answering service handles unusual or emotional calls better. Many businesses use AI for routine and after-hours calls, with a clear handoff to a person when needed.",
    sections: [
      {
        id: "compare",
        h2: "How they compare",
        blocks: [
          { h3: "AI receptionist" },
          { ul: ["Answers instantly, any time.", "Consistent answers to routine questions.", "Can book appointments and update your CRM directly.", "Struggles with unusual, emotional or complex calls."] },
          { h3: "Human answering service" },
          { ul: ["Handles nuance and upset callers.", "Usually billed per minute or per call.", "Often just takes a message instead of acting on it.", "Quality depends on the operator."] },
        ],
      },
      {
        id: "best-for",
        h2: "Which fits which business",
        blocks: [
          "AI suits businesses with lots of routine calls: hours, service areas, booking. Human services suit businesses where callers are often distressed or every call is complex. Many [law firms](/industries/law-firms) and [medical practices](/industries/medical-dental) use a mix.",
        ],
      },
      {
        id: "handoff",
        h2: "Always plan the handoff",
        blocks: [
          "Whatever you choose, define when the call goes to a person: emergencies, complaints, or anything outside the script. An AI receptionist that can't hand off will frustrate people.",
          "See what an [AI receptionist](/automation/ai-receptionist) can do with your phone system.",
        ],
      },
    ],
    faqs: [
      { q: "Will callers know it's AI?", a: "They should. Being upfront avoids frustration and is increasingly expected." },
    ],
    related: ["automatically-respond-to-missed-calls", "what-is-ai-automation-for-small-businesses", "automate-appointment-scheduling"],
    cta: "automation",
  },
  {
    slug: "automate-appointment-scheduling",
    title: "How to Automate Appointment Scheduling",
    metaTitle: "How to Automate Appointment Scheduling | GrowthBellows",
    description:
      "How to let customers book themselves, send reminders automatically, and cut no-shows without losing control of your calendar.",
    category: "business-automation",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "Use a booking tool connected to your real calendar, set rules for appointment types and buffer times, then automate confirmations, reminders and rescheduling links. Connect it to your CRM so every booking creates or updates a customer record.",
    sections: [
      {
        id: "steps",
        h2: "The steps",
        blocks: [
          { ol: [
            "Decide which appointment types customers can book themselves.",
            "Set durations, travel buffers and daily limits.",
            "Connect the booking tool to the calendar you actually use.",
            "Add booking links to your website, Google profile and follow-up texts.",
            "Send a confirmation immediately and reminders before the appointment.",
            "Include an easy reschedule link so people move instead of no-showing.",
          ] },
        ],
      },
      {
        id: "field",
        h2: "Field service businesses",
        blocks: [
          "If you travel to customers, offer time windows instead of exact times, and limit bookings by area if needed. Some field service tools handle this natively.",
        ],
      },
      {
        id: "keep-control",
        h2: "Keeping control",
        blocks: [
          "You don't have to open your whole calendar. Many businesses let customers request a slot that a person approves. See [appointment scheduling automation](/automation/appointment-scheduling).",
        ],
      },
    ],
    related: ["automate-crm-data-entry", "ai-receptionist-vs-answering-service", "automate-customer-follow-up"],
    cta: "automation",
  },
  {
    slug: "automate-crm-data-entry",
    title: "How to Automate CRM Data Entry",
    metaTitle: "How to Automate CRM Data Entry | GrowthBellows",
    description:
      "How to stop typing information into your CRM by hand: connect forms, email, calls and documents so records update themselves.",
    category: "business-automation",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "Connect every source of customer information (forms, calls, emails, booking tools) to your CRM so it creates contacts, updates statuses and assigns tasks automatically. Use AI for the messy parts, like pulling a name and address out of an email. Then check for duplicates.",
    sections: [
      {
        id: "sources",
        h2: "Map where data comes from",
        blocks: [
          "List every place someone on your team copies information from: website forms, email inquiries, voicemails, booking tools, spreadsheets, paper forms. Each one is a candidate.",
        ],
      },
      {
        id: "rules",
        h2: "Set simple rules",
        blocks: [
          { ul: [
            "New form submission: create contact, set status to New Lead, assign to sales.",
            "Appointment booked: update status, create prep task.",
            "Job completed: update status, trigger review request.",
          ] },
        ],
      },
      {
        id: "ai",
        h2: "Where AI helps",
        blocks: [
          "Emails and documents don't arrive in neat fields. AI can read them and extract the details, then send them into the right fields. See [document automation](/automation/document-automation).",
        ],
      },
      {
        id: "pitfalls",
        h2: "Common pitfalls",
        blocks: [
          { ul: ["Duplicate contacts from multiple sources. Match on phone or email.", "Too many statuses nobody uses.", "Automations nobody owns or checks."] },
          "Our [CRM automation](/automation/crm-automation) service sets this up and tests it.",
        ],
      },
    ],
    related: ["business-tasks-you-can-automate-with-ai", "automatically-follow-up-with-new-leads", "automate-appointment-scheduling"],
    cta: "automation",
  },
  {
    slug: "automate-customer-follow-up",
    title: "How to Automate Customer Follow-Up",
    metaTitle: "How to Automate Customer Follow-Up After the Job | GrowthBellows",
    description:
      "How to automate follow-up with existing customers: check-ins, review requests, maintenance reminders and repeat business.",
    category: "lead-generation",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "Trigger follow-ups from events in your workflow, such as a job marked complete, an invoice paid, or a service due date. Send a thank-you and feedback request, then a review request, then reminders for maintenance or repeat services. Keep it relevant and infrequent.",
    sections: [
      {
        id: "moments",
        h2: "The moments that matter",
        blocks: [
          { ol: [
            "Right after the job: thank-you and a quick check that everything's right.",
            "A day or two later: a review request. See [how to get reviews the right way](/blog/get-more-google-reviews).",
            "Months later: maintenance or seasonal reminders.",
          ] },
        ],
      },
      {
        id: "examples",
        h2: "Examples by industry",
        blocks: [
          { ul: [
            "[HVAC](/industries/hvac): spring and fall tune-up reminders.",
            "[Medical and dental](/industries/medical-dental): recall reminders, sent with appropriate privacy controls.",
            "[Home services](/industries/home-services): seasonal service offers to past customers.",
          ] },
        ],
      },
      {
        id: "dont",
        h2: "What not to do",
        blocks: [
          "Don't send weekly promotions to everyone. Follow-up works when it's timely and useful. Respect opt-outs. See [review automation](/automation/review-automation) and [lead follow-up](/automation/lead-follow-up).",
        ],
      },
    ],
    related: ["get-more-google-reviews", "automatically-follow-up-with-new-leads", "automate-crm-data-entry"],
    cta: "automation",
  },
];
