export type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  summary: string;
  features: string[];
  cta: string;
  featured?: boolean;
  fine?: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter Website",
    price: "$297",
    priceNote: "flat fee",
    summary:
      "For businesses that need a professional online presence without spending thousands.",
    features: [
      "Custom one-page website",
      "Mobile responsive",
      "Contact form",
      "Click-to-call button",
      "Google Maps",
      "Basic SEO setup",
      "Delivered in about 5 business days",
    ],
    fine: ["One revision included.", "Client supplies logo and business information."],
    cta: "Get My Website",
    featured: true,
  },
  {
    name: "Growth Website",
    price: "Starting at $1,497",
    summary: "For businesses that want to generate more leads.",
    features: [
      "Multi-page website",
      "Custom design",
      "SEO foundation",
      "Google Business Profile setup",
      "Analytics",
      "Lead generation forms",
      "Speed optimization",
      "Conversion-focused layout",
    ],
    cta: "Let's Build It",
  },
  {
    name: "Growth Engine",
    price: "Starting at $497",
    priceNote: "per month",
    summary: "Monthly growth for businesses that want more customers.",
    features: [
      "Local SEO",
      "Google Business Profile optimization",
      "Monthly website updates",
      "Blog content",
      "Landing pages",
      "Review strategy",
      "Monthly reporting",
      "Ongoing improvements",
    ],
    cta: "Grow My Business",
  },
  {
    name: "Business Automation",
    price: "Custom quote",
    summary: "Stop wasting time on repetitive work.",
    features: [
      "AI chatbots",
      "Lead qualification",
      "CRM automation",
      "Appointment reminders",
      "Automated follow-up emails",
      "Workflow automation",
    ],
    cta: "Book A Consultation",
  },
];

export const carePlan = {
  name: "Hosting + Care Plan",
  price: "$39/month",
  altPrice: "$397/year (save $71)",
  features: [
    "Premium hosting",
    "SSL certificate",
    "Daily backups",
    "Security updates",
    "Uptime monitoring",
    "Minor content edits",
  ],
};