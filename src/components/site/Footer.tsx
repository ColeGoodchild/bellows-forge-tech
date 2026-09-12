import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { automationServices } from "@/data/automation-services";
import { industries } from "./industries-data";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            GrowthBellows builds small business websites, improves local SEO, and automates
            repetitive work so owners get more customers and spend less time on admin.
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground/70 uppercase">
            Forging Growth Through Technology
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/web-design" className="hover:text-primary">
                Small business web design
              </Link>
            </li>
            <li>
              <Link to="/local-seo" className="hover:text-primary">
                Local SEO &amp; Google Business Profile
              </Link>
            </li>
            <li>
              <Link to="/automation" className="hover:text-primary">
                AI &amp; business automation
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing &amp; hosting plans
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-primary">
                Client case studies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Automation</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {automationServices.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/automation/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Industries</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: i.slug }}
                  className="hover:text-primary"
                >
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/industries" className="hover:text-primary">
                All industries we serve
              </Link>
            </li>
          </ul>

          <h2 className="mt-8 text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About GrowthBellows
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact us
              </Link>
            </li>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link to="/locations/$slug" params={{ slug: l.slug }} className="hover:text-primary">
                  {l.city}, {l.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GrowthBellows. All rights reserved.</span>
          <span>Based in New York. Working with businesses across the US.</span>
        </div>
      </div>
    </footer>
  );
}
