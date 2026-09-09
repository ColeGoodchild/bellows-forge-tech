import {
  Headset,
  Inbox,
  PhoneMissed,
  CalendarCheck,
  Database,
  Star,
  FileText,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export type AutomationService = {
  slug: string;
  name: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  icon: LucideIcon;
  problem: string[];
  howItWorks: string[];
  includes: string[];
  goodFit: string[];
  industries: string[];
  related: string[];
  faqs: { q: string; a: string }[];
};

export const automationServices: AutomationService[] = [
  {
    slug: "ai-receptionist",
    name: "AI Receptionist",
    navLabel: "AI receptionist",
    title: "AI Receptionist for Small Businesses | GrowthBellows",
    description:
      "An AI receptionist that answers calls you can't, answers routine questions, captures caller details, books appointments, and hands complex calls to a person.",
    h1: "AI Receptionist for Small Businesses",
    intro:
      "Most small businesses lose work because nobody picks up. An AI receptionist answers the calls your team can't, collects the details you need, and passes the real conversations to a human.",
    icon: Headset,
    problem: [
      "Calls go to voicemail while your crew is on a job.",
      "After-hours callers hang up and call the next company.",
      "Your team repeats the same hours, pricing, and service-area answers all day.",
    ],
    howItWorks: [
      "A call comes in that nobody answers, or arrives after hours.",
      "The AI receptionist greets the caller in your business's voice and language.",
      "It answers routine questions about hours, service areas, and what you do.",
      "It captures the caller's name, number, address, and the reason for the call.",
      "It books an appointment or escalates urgent calls to a person.",
      "You get a written call summary and a new record in your CRM.",
    ],
    includes: [
      "24/7 call answering",
      "Custom greeting and script",
      "Routine question answering",
      "Lead capture and qualification",
      "Appointment booking",
      "Live call transfer rules",
      "Written call summaries",
      "CRM record creation",
    ],
    goodFit: [
      "Field-service businesses where the owner or crew can't answer mid-job",
      "Practices with predictable, repetitive front-desk questions",
      "Businesses with meaningful after-hours or weekend call volume",
    ],
    industries: ["plumbers", "hvac", "electricians", "medical-dental", "law-firms"],
    related: ["missed-call-recovery", "appointment-scheduling", "customer-support"],
    faqs: [
      {
        q: "Will callers know they're talking to AI?",
        a: "We recommend being upfront. The receptionist identifies itself as an automated assistant and offers to connect the caller with a person.",
      },
      {
        q: "What happens with an emergency call?",
        a: "We define escalation rules with you. Urgent calls are transferred or trigger an immediate alert to the on-call person.",
      },
      {
        q: "Does it replace my front desk?",
        a: "No. It covers the calls that currently go unanswered and handles routine questions so your team can focus on the ones that need judgment.",
      },
    ],
  },
  {
    slug: "lead-follow-up",
    name: "Lead Follow-Up Automation",
    navLabel: "Lead follow-up",
    title: "Lead Follow-Up Automation | GrowthBellows",
    description:
      "Respond to every new inquiry within seconds, qualify the lead, notify your team, and keep following up automatically until the customer replies or books.",
    h1: "Lead Follow-Up Automation",
    intro:
      "The business that replies first usually wins the job. Lead follow-up automation answers every inquiry immediately, then keeps the conversation going until the customer responds.",
    icon: Inbox,
    problem: [
      "Form submissions sit unanswered until the next morning.",
      "Follow-up depends on someone remembering to send a second message.",
      "Quotes and estimates go quiet with no structured nudge.",
    ],
    howItWorks: [
      "A lead arrives from your website form, phone, or ad.",
      "The customer gets an immediate personalized reply by email or text.",
      "Qualifying questions sort serious buyers from tire kickers.",
      "The lead is created in your CRM and assigned to the right person.",
      "A follow-up sequence continues until they respond, book, or opt out.",
      "Your team is notified the moment someone engages.",
    ],
    includes: [
      "Instant lead response",
      "Email and SMS sequences",
      "Lead qualification questions",
      "Owner and team notifications",
      "CRM record creation",
      "Quote and estimate follow-up",
      "Opt-out handling",
    ],
    goodFit: [
      "Businesses that generate leads faster than they can respond",
      "Anyone sending quotes that go unanswered",
      "Teams without a dedicated inside-sales person",
    ],
    industries: ["contractors", "roofers", "electricians", "professional-services", "law-firms"],
    related: ["crm-automation", "missed-call-recovery", "appointment-scheduling"],
    faqs: [
      {
        q: "How fast is the first response?",
        a: "Usually within seconds of the form being submitted, at any hour.",
      },
      {
        q: "Will the messages sound automated?",
        a: "We write them in your voice with the customer's details, and we keep the sequence short enough not to feel like spam.",
      },
    ],
  },
  {
    slug: "missed-call-recovery",
    name: "Missed-Call Recovery",
    navLabel: "Missed-call recovery",
    title: "Missed Call Text Back Automation | GrowthBellows",
    description:
      "When you can't answer the phone, an automatic text reaches the caller within seconds, collects details, and starts a conversation before they call a competitor.",
    h1: "Missed-Call Recovery for Small Businesses",
    intro:
      "A missed call is usually a lost job. Missed-call recovery texts the caller the moment you can't pick up, so the conversation continues instead of ending.",
    icon: PhoneMissed,
    problem: [
      "Callers who reach voicemail rarely leave a message.",
      "Your crew can't answer while working, and calls pile up.",
      "The first company that responds gets the job.",
    ],
    howItWorks: [
      "A call goes unanswered.",
      "The caller receives an automatic text within seconds.",
      "They reply by text with what they need.",
      "Basic qualifying questions collect the details.",
      "A lead record is created and your team is alerted.",
      "A person picks up the conversation when free.",
    ],
    includes: [
      "Missed-call detection",
      "Instant SMS text back",
      "Two-way texting",
      "Qualification questions",
      "CRM lead creation",
      "Human handoff",
    ],
    goodFit: [
      "Trades and field-service businesses with high call volume",
      "Emergency service providers",
      "Any business where voicemail is effectively a dead end",
    ],
    industries: ["plumbers", "hvac", "electricians", "roofers", "home-services"],
    related: ["ai-receptionist", "lead-follow-up", "appointment-scheduling"],
    faqs: [
      {
        q: "Does this work with my existing business number?",
        a: "In most cases yes. We enable texting on your current number or route through a companion number that displays the same identity.",
      },
      {
        q: "What if the caller replies at 10pm?",
        a: "Replies can be handled automatically after hours and escalated to a person the next morning, or routed to on-call staff.",
      },
    ],
  },
  {
    slug: "appointment-scheduling",
    name: "Appointment Scheduling Automation",
    navLabel: "Appointment scheduling",
    title: "Appointment Scheduling Automation | GrowthBellows",
    description:
      "Let customers book, confirm, and reschedule appointments without phone tag, with automatic reminders that cut no-shows and keep your calendar accurate.",
    h1: "Appointment Scheduling Automation",
    intro:
      "Phone tag costs hours every week. Scheduling automation lets customers book a real slot on your calendar and keeps everyone reminded until the appointment happens.",
    icon: CalendarCheck,
    problem: [
      "Booking a single visit takes three calls and two voicemails.",
      "No-shows waste a truck roll or a chair.",
      "Reschedules get lost between the calendar and the CRM.",
    ],
    howItWorks: [
      "The customer picks a time from your real availability.",
      "A confirmation goes out immediately by email or text.",
      "Reminders are sent before the appointment.",
      "Rescheduling and cancellation happen without a phone call.",
      "Your calendar and CRM stay in sync automatically.",
    ],
    includes: [
      "Online booking",
      "Real-time availability",
      "Confirmations",
      "Reminder sequences",
      "Self-serve rescheduling",
      "Cancellation handling",
      "Calendar and CRM sync",
    ],
    goodFit: [
      "Practices and clinics with recurring appointment volume",
      "Estimate and consultation-based businesses",
      "Route-based service businesses with time windows",
    ],
    industries: ["medical-dental", "law-firms", "hvac", "home-services", "professional-services"],
    related: ["ai-receptionist", "lead-follow-up", "crm-automation"],
    faqs: [
      {
        q: "Which calendars do you support?",
        a: "Google Calendar, Microsoft 365, and most scheduling tools with an integration or API.",
      },
      {
        q: "Can we control which slots are bookable?",
        a: "Yes. Buffer times, service durations, technician availability, and blackout windows are all configurable.",
      },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    navLabel: "CRM automation",
    title: "CRM Automation for Small Businesses | GrowthBellows",
    description:
      "Create contacts, assign leads, update deal stages, and generate follow-up tasks automatically so your CRM reflects reality without manual data entry.",
    h1: "CRM Automation for Small Businesses",
    intro:
      "A CRM only helps if it's current. We automate the record-keeping so contacts, stages, and tasks update themselves as work happens.",
    icon: Database,
    problem: [
      "Leads live in an inbox instead of the CRM.",
      "Deal stages are stale, so reporting is guesswork.",
      "Follow-up tasks depend on someone remembering to create them.",
    ],
    howItWorks: [
      "Every inbound lead creates or updates a contact record.",
      "Leads are assigned by service type, territory, or round robin.",
      "Stages advance automatically as calls, bookings, and jobs happen.",
      "Follow-up tasks are created with owners and due dates.",
      "Data is synced between your CRM and the other tools you use.",
    ],
    includes: [
      "Contact creation and deduplication",
      "Lead assignment rules",
      "Stage and status updates",
      "Automatic task creation",
      "Team notifications",
      "Two-way data sync",
      "Reporting hygiene",
    ],
    goodFit: [
      "Teams already paying for a CRM they don't fully use",
      "Businesses with more than one person touching a lead",
      "Owners who want accurate pipeline numbers",
    ],
    industries: ["professional-services", "contractors", "law-firms", "small-business"],
    related: ["lead-follow-up", "document-automation", "appointment-scheduling"],
    faqs: [
      {
        q: "Do I need to switch CRMs?",
        a: "Usually not. If your CRM has an integration or API, we automate around it. We only suggest a change when the current tool genuinely can't do the job.",
      },
      {
        q: "What if we don't have a CRM yet?",
        a: "We'll recommend a straightforward option that fits your size and budget, and set it up as part of the build.",
      },
    ],
  },
  {
    slug: "review-automation",
    name: "Review Request Automation",
    navLabel: "Review automation",
    title: "Review Request Automation | GrowthBellows",
    description:
      "Ask every customer for a review at the right moment after a completed job, route feedback to the right channel, and alert you when something goes wrong.",
    h1: "Review Request Automation",
    intro:
      "Reviews drive local rankings and phone calls, but only if someone asks. We make the ask part of the workflow, timed to the moment the job is finished.",
    icon: Star,
    problem: [
      "Happy customers are never asked to leave a review.",
      "Requests go out weeks late, when the job is forgotten.",
      "Unhappy feedback shows up publicly before you hear about it.",
    ],
    howItWorks: [
      "A job is marked complete in your system.",
      "The customer receives a short feedback request.",
      "Satisfied customers are pointed to your Google Business Profile.",
      "Negative feedback is routed to the owner first.",
      "The outcome is written back to the customer record.",
    ],
    includes: [
      "Post-job feedback requests",
      "Timing based on job status",
      "Google Business Profile routing",
      "Owner alerts on negative feedback",
      "Reminder for non-responders",
      "CRM logging",
    ],
    goodFit: [
      "Local businesses competing in the Google map pack",
      "Service businesses with steady completed-job volume",
      "Anyone whose review count trails their competitors",
    ],
    industries: ["home-services", "plumbers", "hvac", "roofers", "medical-dental"],
    related: ["customer-support", "lead-follow-up", "crm-automation"],
    faqs: [
      {
        q: "Is this review gating?",
        a: "No. We never suppress honest reviews or manufacture them. Every customer can leave public feedback; the owner is simply alerted first when something went wrong.",
      },
      {
        q: "How does this help local SEO?",
        a: "A steady flow of genuine, recent reviews is one of the strongest local ranking signals. It pairs directly with our local SEO work.",
      },
    ],
  },
  {
    slug: "document-automation",
    name: "Document & Data Automation",
    navLabel: "Document automation",
    title: "Document and Data Entry Automation | GrowthBellows",
    description:
      "Extract information from emails, PDFs, forms, invoices, and work orders and route it into the systems your team already uses, without manual retyping.",
    h1: "Document & Data Automation",
    intro:
      "Copying information between an inbox, a spreadsheet, and a CRM is expensive work that produces nothing. We automate the extraction and the routing.",
    icon: FileText,
    problem: [
      "Staff retype the same data into three systems.",
      "Invoices and work orders sit in an inbox waiting for processing.",
      "Typos in manual entry cause billing and scheduling errors.",
    ],
    howItWorks: [
      "A document arrives by email, upload, or form submission.",
      "The relevant fields are read and extracted.",
      "Values are validated against your existing records.",
      "Clean data is written into the CRM, accounting tool, or spreadsheet.",
      "Anything ambiguous is flagged for a human to review.",
    ],
    includes: [
      "PDF and image extraction",
      "Email parsing",
      "Invoice and work-order processing",
      "Intake form routing",
      "Validation rules",
      "Exception handling with human review",
      "System-to-system sync",
    ],
    goodFit: [
      "Businesses with recurring paperwork in a predictable format",
      "Back offices spending hours on data entry",
      "Firms handling intake documents at volume",
    ],
    industries: ["law-firms", "medical-dental", "contractors", "professional-services"],
    related: ["crm-automation", "customer-support", "lead-follow-up"],
    faqs: [
      {
        q: "How accurate is the extraction?",
        a: "For consistent document types it is very reliable. We add validation rules and route anything uncertain to a person rather than guessing.",
      },
      {
        q: "Is our data secure?",
        a: "Documents move through your existing systems and vetted processors. We scope data handling with you before building anything.",
      },
    ],
  },
  {
    slug: "customer-support",
    name: "Customer Support Automation",
    navLabel: "Customer support",
    title: "Customer Support Automation | GrowthBellows",
    description:
      "Answer routine customer questions automatically on your website, by text, and by email, capture leads, and escalate anything complicated to your team.",
    h1: "Customer Support Automation",
    intro:
      "Most inbound questions are the same ten questions. Automating them frees your team for the conversations that actually need a person.",
    icon: MessagesSquare,
    problem: [
      "Staff answer identical hours, pricing, and service-area questions all day.",
      "Website visitors leave rather than wait for an email reply.",
      "Simple questions and urgent problems land in the same queue.",
    ],
    howItWorks: [
      "A customer asks a question on your site, by text, or by email.",
      "The assistant answers from your real business information.",
      "It captures contact details when the question is a buying signal.",
      "Anything outside its scope is escalated to the right person.",
      "The conversation is logged against the customer record.",
    ],
    includes: [
      "Website chat assistant",
      "FAQ and business-information answers",
      "Service and pricing-range answers",
      "Lead capture",
      "Escalation rules",
      "CRM logging",
    ],
    goodFit: [
      "Businesses with repetitive inbound questions",
      "Sites with traffic but few inquiries",
      "Teams whose inbox is the support queue",
    ],
    industries: ["small-business", "home-services", "medical-dental", "professional-services"],
    related: ["ai-receptionist", "review-automation", "crm-automation"],
    faqs: [
      {
        q: "Will it make things up?",
        a: "It answers from information you approve. Anything outside that scope is handed to a person instead of guessed at.",
      },
      {
        q: "Can it hand off mid-conversation?",
        a: "Yes. Escalation rules can transfer to a person by chat, text, or a notification to your team.",
      },
    ],
  },
];

export const automationBySlug = (slug: string) =>
  automationServices.find((s) => s.slug === slug);
