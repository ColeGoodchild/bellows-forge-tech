import { ArrowUpRight } from "lucide-react";

import iqs from "@/assets/work/iqs.jpg";
import rnd from "@/assets/work/rnd.jpg";
import castmen from "@/assets/work/castmen.jpg";

const projects = [
  {
    name: "Innovative Quality Services",
    url: "https://www.innovativequalityservices.com/",
    domain: "innovativequalityservices.com",
    image: iqs,
    industry: "Quality management consulting",
    summary:
      "A credibility-first site for a quality management consultancy serving aerospace, pharmaceutical, and manufacturing clients. Clear service pages, proof points up front, and one obvious next step.",
    results: ["Clear service pages", "Proof points above the fold", "Built for inbound inquiries"],
  },
  {
    name: "RnD Quality Associates",
    url: "https://rndqualityassociates.com/",
    domain: "rndqualityassociates.com",
    image: rnd,
    industry: "ISO / AS9100 consulting and training",
    summary:
      "A veteran-owned consultancy with 40+ years of experience needed a site that matched. We led with the track record, made the services easy to scan, and kept contact one click away.",
    results: ["Track record front and center", "Scannable service list", "One-click contact"],
  },
  {
    name: "Castmen",
    url: "https://www.castmen.com/",
    domain: "castmen.com",
    image: castmen,
    industry: "Wire harness manufacturing",
    summary:
      "An AS9100D-certified manufacturer selling to aerospace and defense buyers. The site puts certifications, capabilities, and quote requests exactly where engineers look for them.",
    results: ["Certifications up front", "Quote request on every page", "SEO pages per capability"],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Work</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Real websites we built, live right now.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            No stock templates or made-up mockups. These are client sites you can open and click
            through yourself.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="panel group overflow-hidden transition-colors duration-300 hover:border-primary/40"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>a]:order-2" : ""}`}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden border-b border-border lg:border-b-0 lg:border-r"
                >
                  <img
                    src={p.image}
                    alt={`Homepage of the ${p.name} website built by GrowthBellows`}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>

                <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
                  <div>
                    <p className="eyebrow">{p.industry}</p>
                    <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{p.name}</h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className="flex flex-wrap gap-2">
                    {p.results.map((r) => (
                      <li
                        key={r}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    Visit {p.domain}
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
