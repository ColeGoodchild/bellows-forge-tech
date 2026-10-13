import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articlesInCategory, categoryBySlug } from "@/data/blog";
import { seo, type Crumb } from "@/lib/seo";

export const Route = createFileRoute("/blog/category/$category")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const category = categoryBySlug(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Category not found | GrowthBellows" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.category;
    const path = `/blog/category/${params.category}`;
    return seo({
      path,
      title: `${c.name} Guides for Small Businesses | GrowthBellows`,
      description: c.description,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: c.name, path },
      ],
    });
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: c } = Route.useLoaderData();
  const list = articlesInCategory(c.slug);
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: c.name, path: `/blog/category/${c.slug}` },
  ];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="eyebrow">Guides</p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{c.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{c.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Related service:{" "}
            <Link to={c.service.to as "/"} className="text-primary hover:underline">
              {c.service.label}
            </Link>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        {list.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            New guides coming soon. Browse <Link to="/blog" className="text-primary">all guides</Link>.
          </p>
        )}
      </section>
    </>
  );
}
