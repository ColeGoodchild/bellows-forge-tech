import { websiteArticles } from "./blog-website";
import { seoArticles } from "./blog-seo";
import { automationArticles } from "./blog-automation";
import type { Article } from "./blog-types";

export * from "./blog-types";

export const articles: Article[] = [...websiteArticles, ...seoArticles, ...automationArticles];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const articlesInCategory = (cat: string) => articles.filter((a) => a.category === cat);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
