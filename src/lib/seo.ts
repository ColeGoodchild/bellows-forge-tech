export const SITE_URL = "https://bellows-forge-tech.lovable.app";
export const SITE_NAME = "GrowthBellows";

export const absolute = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export type Crumb = { name: string; path: string };

export type SeoInput = {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  image?: string;
  breadcrumbs?: Crumb[];
  jsonLd?: Record<string, unknown>[];
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "GrowthBellows builds small business websites, improves local search visibility, and automates repetitive business workflows.",
  areaServed: "United States",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export const serviceSchema = (opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  areaServed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: opts.name,
  serviceType: opts.serviceType,
  description: opts.description,
  url: absolute(opts.path),
  areaServed: opts.areaServed ?? "United States",
  provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absolute(c.path),
  })),
});

/** Builds the full TanStack `head()` payload for a page. */
export function seo({
  path,
  title,
  description,
  ogType = "website",
  image,
  breadcrumbs,
  jsonLd = [],
}: SeoInput) {
  const url = absolute(path);
  const schemas = [...jsonLd];
  if (breadcrumbs && breadcrumbs.length > 1) schemas.unshift(breadcrumbSchema(breadcrumbs));

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: schemas.map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
