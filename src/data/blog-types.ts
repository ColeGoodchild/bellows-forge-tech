export type BlogCategorySlug =
  | "web-design"
  | "local-seo"
  | "ai-automation"
  | "business-automation"
  | "lead-generation"
  | "industry-guides";

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  description: string;
  service: { label: string; to: string };
};

/** Strings support inline links: [anchor text](/path) */
export type Block = string | { h3: string } | { ul: string[] } | { ol: string[] } | { note: string };

export type Section = { id: string; h2: string; blocks: Block[] };

export type CtaKind = "website" | "seo" | "automation" | "general";

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: BlogCategorySlug;
  published: string;
  updated?: string;
  readMinutes: number;
  shortAnswer: string;
  sections: Section[];
  faqs?: { q: string; a: string }[];
  related: string[];
  cta: CtaKind;
};

export const categories: BlogCategory[] = [
  {
    slug: "web-design",
    name: "Web Design",
    description:
      "What a small business website should cost, include and do, explained without agency jargon.",
    service: { label: "Small business web design", to: "/web-design" },
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    description:
      "How local customers find businesses on Google Search and Maps, and what you can do about it.",
    service: { label: "Local SEO services", to: "/local-seo" },
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    description:
      "Practical, plain-English guides to using AI for receptionists, follow-up and routine customer questions.",
    service: { label: "AI automation for small businesses", to: "/automation" },
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    description:
      "How to stop copying information between tools: scheduling, CRM updates and paperwork.",
    service: { label: "Business workflow automation", to: "/automation" },
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    description: "Getting more inquiries and turning more of them into booked jobs.",
    service: { label: "Lead follow-up automation", to: "/automation/lead-follow-up" },
  },
  {
    slug: "industry-guides",
    name: "Industry Guides",
    description: "Advice written for specific trades and professions.",
    service: { label: "Industries we work with", to: "/industries" },
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

export const ctaCopy: Record<CtaKind, { heading: string; label: string; to: string; body: string }> = {
  website: {
    heading: "Need a website that brings in work?",
    label: "Get a Website That Converts",
    to: "/web-design",
    body: "Starter websites are $297 flat. Growth websites start at $1,497.",
  },
  seo: {
    heading: "Want local customers to find you first?",
    label: "Improve My Local Visibility",
    to: "/local-seo",
    body: "Google Business Profile, service pages and reviews, handled month to month.",
  },
  automation: {
    heading: "Tired of doing the same task every day?",
    label: "See What We Can Automate",
    to: "/automation",
    body: "Automation starts at $997 setup for one focused workflow.",
  },
  general: {
    heading: "Not sure where to start?",
    label: "Talk to GrowthBellows",
    to: "/contact",
    body: "Tell us what's slowing your business down. We'll give you a straight answer.",
  },
};
