import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ArticleCard } from "@/components/site/ArticleCard";
import { RichText } from "@/components/site/RichText";
import {
  articleBySlug,
  categoryBySlug,
  ctaCopy,
  formatDate,
  type Article,
  type Block,
} from "@/data/blog";
import { seo, absolute, faqSchema, SITE_NAME, SITE_URL, type Crumb } from "@/lib/seo";

const crumbsFor = (a: Article): Crumb[] => {
  const c = categoryBySlug(a.category)!;
  return [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: c.name, path: `/blog/category/${c.slug}` },
    { name: a.title, path: `/blog/${a.slug}` },
  ];
};

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Article not found | GrowthBellows" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const path = `/blog/${a.slug}`;
    const jsonLd: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.title,
        description: a.description,
        datePublished: a.published,
        dateModified: a.updated ?? a.published,
        mainEntityOfPage: absolute(path),
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
    ];
    if (a.faqs?.length) jsonLd.push(faqSchema(a.faqs));
    return seo({
      path,
      title: a.metaTitle,
      description: a.description,
      ogType: "article",
      breadcrumbs: crumbsFor(a),
      jsonLd,
    });
  },
  component: ArticlePage,
});

function BlockView({ b }: { b: Block }) {
  if (typeof b === "string")
    return (
      <p className="leading-relaxed text-muted-foreground">
        <RichText text={b} />
      </p>
    );
  if ("h3" in b) return <h3 className="pt-2 text-lg font-semibold">{b.h3}</h3>;
  if ("note" in b)
    return (
      <p className="rounded-[0.875rem] border border-primary/30 bg-primary/5 p-4 text-sm leading-relaxed">
        <RichText text={b.note} />
      </p>
    );
  const items = "ul" in b ? b.ul : b.ol;
  const Tag = "ul" in b ? "ul" : "ol";
  return (
    <Tag
      className={`space-y-2 pl-5 leading-relaxed text-muted-foreground ${
        Tag === "ul" ? "list-disc" : "list-decimal"
      } marker:text-primary`}
    >
      {items.map((t) => (
        <li key={t}>
          <RichText text={t} />
        </li>
      ))}
    </Tag>
  );
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const cat = categoryBySlug(a.category)!;
  const cta = ctaCopy[a.cta];
  const related = a.related.map(articleBySlug).filter(Boolean) as Article[];

  return (
    <>
      <Breadcrumbs items={crumbsFor(a)} />
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <header>
          <Link
            to="/blog/category/$category"
            params={{ category: cat.slug }}
            className="eyebrow hover:opacity-80"
          >
            {cat.name}
          </Link>
          <h1 className="mt-5 text-3xl leading-tight font-semibold sm:text-5xl">{a.title}</h1>
          <p className="mt-5 text-sm text-muted-foreground">
            By the {SITE_NAME} team · Published{" "}
            <time dateTime={a.published}>{formatDate(a.published)}</time>
            {a.updated ? (
              <>
                {" "}· Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
              </>
            ) : null}{" "}
            · {a.readMinutes} min read
          </p>
        </header>

        <div className="mt-10 rounded-[0.875rem] border border-border bg-card/40 p-6">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">Short answer</p>
          <p className="mt-3 leading-relaxed">{a.shortAnswer}</p>
        </div>

        {a.sections.length > 2 ? (
          <nav aria-label="Table of contents" className="mt-10">
            <p className="text-sm font-semibold">In this guide</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm marker:text-primary">
              {a.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                    {s.h2}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {a.sections.map((s) => (
          <section key={s.id} id={s.id} className="mt-12 scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-semibold">{s.h2}</h2>
            {s.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </section>
        ))}

        {a.faqs?.length ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              {a.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <aside className="mt-14 rounded-[0.875rem] border border-primary/40 bg-card/60 p-8 text-center">
          <h2 className="text-2xl font-semibold">{cta.heading}</h2>
          <p className="mt-3 text-muted-foreground">{cta.body}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="forge" size="lg">
              <Link to={cta.to as "/"}>{cta.label}</Link>
            </Button>
            <Button asChild variant="steel" size="lg">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </aside>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <strong className="text-foreground">About {SITE_NAME}:</strong> we build small business
          websites, improve local Google visibility, and automate repetitive work. Plain pricing, no
          long contracts. <Link to="/about" className="text-primary hover:underline">More about us</Link>.
        </p>
      </article>

      {related.length ? (
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} a={r} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
