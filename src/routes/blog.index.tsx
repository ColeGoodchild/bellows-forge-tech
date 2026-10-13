import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articles, articlesInCategory, categories } from "@/data/blog";
import { seo, absolute, type Crumb } from "@/lib/seo";

const path = "/blog";
const title = "Small Business Growth Guides | GrowthBellows Blog";
const description =
  "Plain-English guides on small business websites, local SEO, Google Business Profile and practical AI automation.";
const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path },
];

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  head: () =>
    seo({
      path,
      title,
      description,
      breadcrumbs: crumbs,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "GrowthBellows Blog",
          url: absolute(path),
          blogPost: articles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: absolute(`/blog/${a.slug}`),
            datePublished: a.published,
          })),
        },
      ],
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="eyebrow">Guides</p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Straight answers for small business owners.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Websites, local search and automation, explained in plain English. No filler.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/blog/category/$category"
                params={{ category: c.slug }}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {categories
        .filter((c) => articlesInCategory(c.slug).length > 0)
        .map((c) => (
          <section key={c.slug} className="border-b border-border">
            <div className="mx-auto max-w-6xl px-6 py-16">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="text-2xl font-semibold sm:text-3xl">{c.name}</h2>
                <Link
                  to="/blog/category/$category"
                  params={{ category: c.slug }}
                  className="text-sm text-primary hover:underline"
                >
                  All {c.name} guides
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articlesInCategory(c.slug).map((a) => (
                  <ArticleCard key={a.slug} a={a} />
                ))}
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
