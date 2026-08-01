import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import texture from "@/assets/texture-steel.jpg";

const title = "About GrowthBellows — Craftsmanship Meets Engineering";
const description =
  "GrowthBellows brings an engineering mindset to small business growth: intentional systems, continuous improvement, and the right technology.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Craftsmanship",
    body: "Every build is deliberate. We care about the details nobody asks for — load times, copy hierarchy, the third click.",
  },
  {
    title: "Engineering mindset",
    body: "We treat growth as a system with inputs, constraints and feedback loops, not a series of disconnected campaigns.",
  },
  {
    title: "Modern technology",
    body: "AI, automation and clean infrastructure — applied where they create leverage, never for their own sake.",
  },
  {
    title: "Small business advantage",
    body: "The right systems let a small team move faster and serve better than companies ten times their size.",
  },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={texture}
          alt=""
          aria-hidden
          width={1536}
          height={768}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-forge)] opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-28">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-6 text-5xl leading-[1.05] font-semibold sm:text-6xl">
            A workshop for <span className="text-forged">business growth</span>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            A blacksmith does not create strength from nothing. They apply heat, tools and precision
            to transform raw material into something valuable. GrowthBellows works the same way —
            the potential already exists inside your business; we build the systems that shape it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            We started GrowthBellows because too many capable businesses were being let down by
            their technology. Beautiful work, loyal customers, real expertise — paired with a
            website that didn't convert, a search presence nobody could find, and a week consumed by
            admin that software should have handled.
          </p>
          <p>
            So we approach the problem the way an engineering firm would. We study the business,
            map the customer journey, and design the digital foundation deliberately. Then we
            automate the repetitive work, connect the systems, and measure what actually changes.
            Nothing ships because it looks impressive; it ships because it moves a number.
          </p>
          <p>
            Technology is our material. Craftsmanship is our method. Growth is the outcome.
          </p>
        </div>

        <blockquote className="mt-14 border-l-2 border-primary pl-6 font-display text-2xl leading-snug text-foreground">
          &ldquo;Every great business is forged through intentional systems, continuous improvement,
          and the right tools.&rdquo;
        </blockquote>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">What We Stand For</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h2 className="text-lg font-semibold">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold sm:text-5xl">Let's build your system</h2>
        <p className="mt-5 text-muted-foreground">
          Tell us where growth is stalling and we'll show you what to forge first.
        </p>
        <Button asChild variant="forge" size="xl" className="mt-9">
          <a href="/#contact">Schedule Your Growth Consultation</a>
        </Button>
      </section>
    </>
  );
}