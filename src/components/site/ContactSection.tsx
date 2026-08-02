import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Tell us what your business needs.
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Send a short message and we will tell you what we would build, what it costs, and how
            long it takes. If we are not the right fit, we will say so.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>— A reply within one business day</li>
            <li>— A flat price before any work starts</li>
            <li>— No contracts on monthly plans</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}