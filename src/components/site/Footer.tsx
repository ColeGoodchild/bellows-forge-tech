import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            AI-powered growth systems for small and medium businesses. Websites, SEO, automation,
            and intelligent tools — engineered for measurable results.
          </p>
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground/70 uppercase">
            Forging Growth Through Technology
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="/#services" className="hover:text-primary">
                The Foundation
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-primary">
                The Growth Engine
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-primary">
                The Automation Forge
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <a href="/#process" className="hover:text-primary">
                Our Process
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GrowthBellows. All rights reserved.</span>
          <span>Built with precision.</span>
        </div>
      </div>
    </footer>
  );
}