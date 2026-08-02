import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
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
          <h2 className="text-sm font-semibold">What we do</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Small business website design
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Local SEO &amp; Google Business Profile
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Website hosting &amp; care plans
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Business &amp; AI automation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
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