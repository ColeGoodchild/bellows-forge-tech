import {
  HardHat,
  Home,
  Zap,
  Wind,
  Wrench,
  Scale,
  Stethoscope,
  Hammer,
  Briefcase,
  Store,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  note: string;
  intro: string;
  points: string[];
  /** SEO */
  title: string;
  description: string;
  h1: string;
  problems: string[];
  websiteFocus: string[];
  seoFocus: string[];
  /** slugs from automationServices */
  automations: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "contractors",
    name: "Contractors",
    icon: HardHat,
    note: "Bid-ready sites that win jobs",
    intro:
      "A website that shows your work, answers the questions homeowners ask first, and makes requesting a quote simple.",
    points: [
      "Project galleries and service areas",
      "Quote requests routed straight to your phone",
      "Automatic follow-up on estimates",
    ],
    title: "Web Design & Automation for Contractors | GrowthBellows",
    description:
      "Websites, local SEO, and lead follow-up automation built for general contractors who win work through quotes, referrals, and local search.",
    h1: "Websites & Automation for Contractors",
    problems: [
      "Bids go out and never get a second touch.",
      "Homeowners can't tell your work apart from the next contractor's.",
      "Change-order paperwork eats office hours.",
    ],
    websiteFocus: [
      "Project galleries organized by job type",
      "Service-area pages for the towns you cover",
      "Quote request forms that reach your phone instantly",
      "Licensing, insurance, and warranty proof up front",
    ],
    seoFocus: [
      "Service pages for each trade you offer",
      "Google Business Profile categories and photos",
      "Review requests after completed projects",
    ],
    automations: ["lead-follow-up", "crm-automation", "document-automation"],
    faqs: [
      {
        q: "What does a contractor website cost?",
        a: "A Starter Website is $297 flat. A multi-page Growth Website with project galleries and service-area pages starts at $1,497.",
      },
      {
        q: "Can you follow up on bids automatically?",
        a: "Yes. Estimate follow-up sequences keep nudging the homeowner until they respond, book, or opt out.",
      },
    ],
  },
  {
    slug: "roofers",
    name: "Roofers",
    icon: Home,
    note: "Storm-season lead capture",
    intro:
      "Roofing demand spikes fast. Your site and follow-up should keep up without adding office hours.",
    points: [
      "Inspection request forms",
      "Local pages for every town you cover",
      "Missed-call text back during busy weeks",
    ],
    title: "Roofing Company Web Design & Local SEO | GrowthBellows",
    description:
      "Roofing websites, local SEO, and missed-call recovery that capture storm-season demand without adding office staff.",
    h1: "Websites & Automation for Roofing Companies",
    problems: [
      "Storm weeks produce more calls than anyone can answer.",
      "Insurance paperwork slows down every job.",
      "Inspection requests sit in an inbox overnight.",
    ],
    websiteFocus: [
      "Free inspection request as the primary action",
      "Before-and-after project proof",
      "Town-by-town service pages",
      "Financing and insurance guidance",
    ],
    seoFocus: [
      "Roof repair and replacement service pages",
      "Storm-damage local content ahead of season",
      "Review velocity during peak months",
    ],
    automations: ["missed-call-recovery", "lead-follow-up", "document-automation"],
    faqs: [
      {
        q: "Can you handle the surge after a storm?",
        a: "That's what missed-call recovery and instant lead response are for. Every caller gets a reply even when the phones are buried.",
      },
    ],
  },
  {
    slug: "electricians",
    name: "Electricians",
    icon: Zap,
    note: "Fast quotes, faster calls",
    intro:
      "Most electrical searches end in a phone call. We make the call easy and catch the ones you miss.",
    points: ["Click-to-call on every screen", "Service pages built for local search", "Automated scheduling"],
    title: "Electrician Web Design & Local SEO | GrowthBellows",
    description:
      "Electrician websites built for phone calls, plus local SEO and missed-call recovery so every service call reaches a real conversation.",
    h1: "Websites & Automation for Electricians",
    problems: [
      "Calls come in while you're in a panel and go to voicemail.",
      "Panel upgrade and EV charger searches go to bigger competitors.",
      "Quote requests wait until the end of the day.",
    ],
    websiteFocus: [
      "Click-to-call fixed on every screen",
      "Separate pages for residential and commercial work",
      "Licensing and insurance visible immediately",
      "Fast mobile load times",
    ],
    seoFocus: [
      "Pages for panel upgrades, EV chargers, rewiring, and generators",
      "Google Business Profile service list",
      "Service-area coverage pages",
    ],
    automations: ["missed-call-recovery", "ai-receptionist", "lead-follow-up"],
    faqs: [
      {
        q: "What helps most for an electrician?",
        a: "Answering calls. Missed-call text back plus an AI receptionist usually recovers more work than any other single change.",
      },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: Wind,
    note: "Seasonal service bookings",
    intro:
      "Heating and cooling work in waves. Automation keeps bookings flowing when the phones are ringing off the hook.",
    points: ["Maintenance plan sign-ups", "Seasonal reminder campaigns", "Booking without phone tag"],
    title: "HVAC Web Design, Local SEO & Automation | GrowthBellows",
    description:
      "HVAC websites, local SEO, and scheduling automation that handle seasonal demand spikes, maintenance plans, and after-hours emergency calls.",
    h1: "Websites & Automation for HVAC Companies",
    problems: [
      "The first cold week produces a year's worth of calls in three days.",
      "Maintenance plan renewals depend on someone remembering.",
      "After-hours emergency callers reach voicemail.",
    ],
    websiteFocus: [
      "Emergency service front and center",
      "Maintenance plan sign-up online",
      "Booking that reflects real availability",
      "Brand and equipment pages",
    ],
    seoFocus: [
      "AC repair, furnace repair, and installation pages",
      "Seasonal content published before the season",
      "Google Business Profile hours and emergency attributes",
    ],
    automations: ["appointment-scheduling", "missed-call-recovery", "review-automation"],
    faqs: [
      {
        q: "Can you automate maintenance reminders?",
        a: "Yes. Seasonal reminders and plan renewals go out automatically and book straight onto your calendar.",
      },
    ],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    icon: Wrench,
    note: "Emergency calls that connect",
    intro:
      "Emergency customers pick whoever answers. We make sure that is you, even when you are under a sink.",
    points: ["Emergency-first layout", "Missed-call recovery texts", "Local SEO for your service radius"],
    title: "Plumber Web Design & Local SEO | GrowthBellows",
    description:
      "Plumbing websites built for emergency calls, local SEO for your service radius, and missed-call text back so urgent jobs don't go to a competitor.",
    h1: "Websites & Automation for Plumbers",
    problems: [
      "Emergency callers hang up and dial the next plumber.",
      "You can't answer the phone with your hands under a sink.",
      "Competitors outrank you in the map pack on review count.",
    ],
    websiteFocus: [
      "Emergency call button above everything else",
      "Service pages for drains, water heaters, leaks, and repiping",
      "Service radius stated clearly",
      "Fast load on a phone with one bar",
    ],
    seoFocus: [
      "Emergency plumber and 24-hour search terms",
      "Google Business Profile categories and service areas",
      "Steady review requests after every job",
    ],
    automations: ["missed-call-recovery", "ai-receptionist", "review-automation"],
    faqs: [
      {
        q: "What if we can never answer the phone?",
        a: "An AI receptionist answers, collects the details, and either books the job or escalates a true emergency to whoever is on call.",
      },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: Scale,
    note: "Credible, consult-driven pages",
    intro: "A site that reads as credible and turns visitors into scheduled consultations.",
    points: ["Practice area pages", "Intake forms that qualify", "Consultation scheduling"],
    title: "Law Firm Web Design & Intake Automation | GrowthBellows",
    description:
      "Law firm websites with practice area pages, qualifying intake forms, consultation scheduling, and document intake automation.",
    h1: "Websites & Automation for Law Firms",
    problems: [
      "Intake calls consume attorney time on cases you won't take.",
      "Consultation scheduling turns into a week of phone tag.",
      "Client documents arrive in a dozen formats.",
    ],
    websiteFocus: [
      "A page per practice area",
      "Attorney bios that establish credibility",
      "Intake forms that qualify before the call",
      "Consultation booking on the page",
    ],
    seoFocus: [
      "Practice-area and jurisdiction pages",
      "Plain-language answers to common legal questions",
      "Google Business Profile completeness",
    ],
    automations: ["appointment-scheduling", "document-automation", "lead-follow-up"],
    faqs: [
      {
        q: "Can intake be qualified before an attorney gets involved?",
        a: "Yes. Structured intake questions filter out matters you don't handle and route qualified ones straight to a consultation slot.",
      },
    ],
  },
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    icon: Stethoscope,
    note: "Simple online booking",
    intro:
      "Patients want hours, insurance answers, and a way to book. Give them all three in one place.",
    points: ["Online appointment requests", "New patient information pages", "Automated reminders"],
    title: "Medical & Dental Practice Web Design | GrowthBellows",
    description:
      "Websites and scheduling automation for medical and dental practices: online booking, new patient information, reminders, and front-desk call coverage.",
    h1: "Websites & Automation for Medical and Dental Practices",
    problems: [
      "The front desk answers the same insurance question all day.",
      "No-shows leave chairs and rooms empty.",
      "New patient paperwork is collected on the day of the visit.",
    ],
    websiteFocus: [
      "New patient information and forms",
      "Insurance and payment clarity",
      "Online appointment requests",
      "Provider bios and office photos",
    ],
    seoFocus: [
      "Service pages per treatment or specialty",
      "Google Business Profile hours, photos, and attributes",
      "Patient review requests after visits",
    ],
    automations: ["appointment-scheduling", "ai-receptionist", "document-automation"],
    faqs: [
      {
        q: "Can reminders reduce no-shows?",
        a: "Reminder sequences with easy self-serve rescheduling are the most reliable way to keep the schedule full.",
      },
    ],
  },
  {
    slug: "home-services",
    name: "Home Services",
    icon: Hammer,
    note: "Local search visibility",
    intro: "Show up when neighbors search, and respond before the next company does.",
    points: [
      "Google Business Profile optimization",
      "Review requests after every job",
      "Instant lead replies",
    ],
    title: "Home Services Web Design & Local SEO | GrowthBellows",
    description:
      "Websites, Google Business Profile optimization, and review automation for cleaning, landscaping, pest control, and other local home service businesses.",
    h1: "Websites & Automation for Home Service Businesses",
    problems: [
      "Neighbors search and find a competitor first.",
      "Recurring service scheduling is done by text and memory.",
      "Reviews trickle in only when a customer volunteers one.",
    ],
    websiteFocus: [
      "Service and pricing clarity",
      "Photos of real jobs",
      "Booking or quote request in one step",
      "Neighborhood coverage pages",
    ],
    seoFocus: [
      "Google Business Profile as the primary asset",
      "Service pages matched to what people search",
      "Consistent review generation",
    ],
    automations: ["review-automation", "appointment-scheduling", "customer-support"],
    faqs: [
      {
        q: "What matters most for a home service business?",
        a: "Your Google Business Profile and your review flow. The website supports both, but local visibility usually drives the phone.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    note: "Clear offers, easy inquiries",
    intro:
      "Accountants, consultants, and agencies that need a site that explains the offer and books the call.",
    points: ["Clear service explanations", "Inquiry forms with qualification", "CRM automation"],
    title: "Professional Services Web Design | GrowthBellows",
    description:
      "Websites and CRM automation for accountants, consultants, and agencies: clear service explanations, qualifying inquiry forms, and reliable follow-up.",
    h1: "Websites & Automation for Professional Services",
    problems: [
      "Prospects can't tell what you actually do or what it costs.",
      "Proposals go out and follow-up is inconsistent.",
      "The CRM is out of date, so pipeline numbers are guesses.",
    ],
    websiteFocus: [
      "A clear page per service offering",
      "Proof of results and credentials",
      "Qualifying inquiry forms",
      "Booking a call in one click",
    ],
    seoFocus: [
      "Service and specialty pages",
      "Useful explainer content for buyer questions",
      "Local visibility where clients are regional",
    ],
    automations: ["crm-automation", "lead-follow-up", "appointment-scheduling"],
    faqs: [
      {
        q: "Can you automate proposal follow-up?",
        a: "Yes. Proposals trigger a scheduled follow-up sequence and CRM tasks so nothing goes quiet by accident.",
      },
    ],
  },
  {
    slug: "small-business",
    name: "Small Businesses",
    icon: Store,
    note: "One clear place to be found",
    intro:
      "One professional home for your business, plus the small automations that save hours each week.",
    points: ["Starter website from $297", "Hours, map, and contact up front", "Admin busywork removed"],
    title: "Small Business Web Design & Automation | GrowthBellows",
    description:
      "A $297 starter website, local search visibility, and simple automations for small businesses that need one professional place to be found and contacted.",
    h1: "Websites & Automation for Small Businesses",
    problems: [
      "There's no single professional place to send a customer.",
      "You show up inconsistently across Google, maps, and directories.",
      "Admin work fills evenings that should be off.",
    ],
    websiteFocus: [
      "Hours, map, and phone number above the fold",
      "A plain explanation of what you do",
      "Contact form and click-to-call",
      "Live in about five business days",
    ],
    seoFocus: [
      "Google Business Profile setup and cleanup",
      "Consistent business information across the web",
      "One well-written page per service",
    ],
    automations: ["customer-support", "review-automation", "lead-follow-up"],
    faqs: [
      {
        q: "Is $297 really the full price?",
        a: "Yes, for the Starter Website. Hosting and care is $39/month or $397/year if you want us to keep it running.",
      },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
