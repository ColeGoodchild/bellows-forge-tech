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
  },
  {
    slug: "electricians",
    name: "Electricians",
    icon: Zap,
    note: "Fast quotes, faster calls",
    intro:
      "Most electrical searches end in a phone call. We make the call easy and catch the ones you miss.",
    points: ["Click-to-call on every screen", "Service pages built for local search", "Automated scheduling"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: Wind,
    note: "Seasonal service bookings",
    intro:
      "Heating and cooling work in waves. Automation keeps bookings flowing when the phones are ringing off the hook.",
    points: ["Maintenance plan sign-ups", "Seasonal reminder campaigns", "Booking without phone tag"],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    icon: Wrench,
    note: "Emergency calls that connect",
    intro:
      "Emergency customers pick whoever answers. We make sure that is you, even when you are under a sink.",
    points: ["Emergency-first layout", "Missed-call recovery texts", "Local SEO for your service radius"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: Scale,
    note: "Credible, consult-driven pages",
    intro:
      "A site that reads as credible and turns visitors into scheduled consultations.",
    points: ["Practice area pages", "Intake forms that qualify", "Consultation scheduling"],
  },
  {
    slug: "medical-dental",
    name: "Medical & Dental",
    icon: Stethoscope,
    note: "Simple online booking",
    intro:
      "Patients want hours, insurance answers, and a way to book. Give them all three in one place.",
    points: ["Online appointment requests", "New patient information pages", "Automated reminders"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    icon: Hammer,
    note: "Local search visibility",
    intro:
      "Show up when neighbors search, and respond before the next company does.",
    points: ["Google Business Profile optimization", "Review requests after every job", "Instant lead replies"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    note: "Clear offers, easy inquiries",
    intro:
      "Accountants, consultants, and agencies that need a site that explains the offer and books the call.",
    points: ["Clear service explanations", "Inquiry forms with qualification", "CRM automation"],
  },
  {
    slug: "small-businesses",
    name: "Small Businesses",
    icon: Store,
    note: "One clear place to be found",
    intro:
      "One professional home for your business, plus the small automations that save hours each week.",
    points: ["Starter website from $297", "Hours, map, and contact up front", "Admin busywork removed"],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
