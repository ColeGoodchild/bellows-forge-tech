import type { Article } from "./blog-types";

const D = "2026-10-13";

export const websiteArticles: Article[] = [
  {
    slug: "small-business-website-cost",
    title: "How Much Does a Small Business Website Cost?",
    metaTitle: "How Much Does a Small Business Website Cost? | GrowthBellows",
    description:
      "Real price ranges for small business websites, what drives the cost up, and the ongoing costs most quotes leave out.",
    category: "web-design",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Most small businesses pay somewhere between a few hundred dollars for a simple, professionally built site and several thousand for a custom multi-page site. The biggest cost drivers are the number of pages, custom design work, and features like booking or integrations. Budget for hosting and upkeep too.",
    sections: [
      {
        id: "price-ranges",
        h2: "Typical price ranges",
        blocks: [
          "Prices vary widely because \"a website\" can mean very different things. Here's how it usually breaks down:",
          {
            ul: [
              "DIY builders: low monthly fee, but you pay with your own time and usually a generic result.",
              "Simple professional site (one to five pages): a few hundred to around $1,500.",
              "Custom growth site with service and location pages: roughly $1,500 to $5,000.",
              "Large or heavily custom sites with integrations: $5,000 and up.",
            ],
          },
          "For reference, our [$297 Starter Website](/pricing) covers a clean, mobile-first site for businesses that need to look credible fast. Our Growth Website starts at $1,497 for businesses that want service pages built to rank locally.",
        ],
      },
      {
        id: "what-drives-cost",
        h2: "What drives the cost up",
        blocks: [
          { ol: [
            "Page count. Every service and location page needs its own writing and layout.",
            "Copywriting. Someone has to write words that make people call. That takes time.",
            "Custom design versus a proven layout.",
            "Features: online booking, payments, quote calculators, CRM connections.",
            "Revisions. Open-ended revision rounds are where budgets quietly double.",
          ] },
        ],
      },
      {
        id: "ongoing-costs",
        h2: "Ongoing costs nobody mentions",
        blocks: [
          "A website is not a one-time purchase. Plan for:",
          { ul: [
            "Domain name: usually under $25 a year.",
            "Hosting and security updates: we charge $39/month or $397/year for hosting and care.",
            "Content updates when your services, prices or hours change.",
          ] },
          { note: "Ask any designer: who owns the site and domain if we stop working together? The answer should be you." },
        ],
      },
      {
        id: "cheap-vs-expensive",
        h2: "When cheap is fine and when it isn't",
        blocks: [
          "If you mostly get work from referrals and just need people to confirm you're legitimate, a simple site is enough. If you want strangers to find you on Google, you need more pages and a real [local SEO](/local-seo) foundation, and that costs more to build.",
          "Read [what a small business website should include](/blog/what-should-a-small-business-website-include) before you compare quotes, so you're comparing the same thing.",
        ],
      },
    ],
    faqs: [
      { q: "Is a $297 website any good?", a: "It can be, if it's built on a fast, proven layout and covers the basics: clear services, click-to-call and a contact form. It won't have dozens of custom pages." },
      { q: "Should I pay monthly or upfront?", a: "Either works. Just make sure you own the site and domain, and know what happens if you cancel." },
    ],
    related: ["what-should-a-small-business-website-include", "how-fast-should-a-website-load", "is-your-website-losing-customers"],
    cta: "website",
  },
  {
    slug: "what-should-a-small-business-website-include",
    title: "What Should a Small Business Website Include?",
    metaTitle: "What Should a Small Business Website Include? | GrowthBellows",
    description:
      "A plain checklist of what every small business website needs, from click-to-call to service pages, and what you can skip.",
    category: "web-design",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "At minimum: a clear statement of what you do and where, a phone number people can tap, a short contact form, a page for each main service, proof you're real (photos, licenses, past work), and fast loading on phones. Everything else is optional.",
    sections: [
      {
        id: "must-haves",
        h2: "The must-haves",
        blocks: [
          { ul: [
            "A headline that says what you do and where. \"Licensed electrician in Syracuse\" beats \"Powering your future.\"",
            "Click-to-call on every page, especially on phones.",
            "A short contact form. Name, phone, what you need. That's it.",
            "Your service area, so people know you'll come to them.",
            "Real photos of your work and team where possible.",
            "Licenses, insurance or certifications if your trade requires them.",
          ] },
        ],
      },
      {
        id: "service-pages",
        h2: "One page per main service",
        blocks: [
          "A single \"Services\" page listing everything makes it hard to show up on Google for any one thing. A page for \"water heater repair\" and another for \"drain cleaning\" gives each service a chance to rank and lets you answer specific questions.",
          "This is the main difference between our Starter and Growth websites. See [small business web design](/web-design) for details.",
        ],
      },
      {
        id: "skip",
        h2: "What you can skip",
        blocks: [
          { ul: [
            "Sliders and autoplay video. They slow the page and rarely get watched.",
            "A blog, unless someone will actually write for it.",
            "Long \"About our values\" pages. A short paragraph and a photo is enough.",
          ] },
        ],
      },
      {
        id: "after-launch",
        h2: "What should happen after someone contacts you",
        blocks: [
          "The website's job ends when the form is submitted. Yours begins. If replies take a day, many of those leads will have called someone else. Consider [automatic lead follow-up](/automation/lead-follow-up) so every inquiry gets a response within minutes.",
        ],
      },
    ],
    related: ["small-business-website-cost", "website-design-for-contractors", "is-your-website-losing-customers"],
    cta: "website",
  },
  {
    slug: "is-your-website-losing-customers",
    title: "How to Tell If Your Business Website Is Losing Customers",
    metaTitle: "Is Your Business Website Losing Customers? 7 Signs | GrowthBellows",
    description:
      "Seven practical checks you can run in 20 minutes to see if your website is quietly sending customers to competitors.",
    category: "web-design",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Pull up your site on your phone and try to call you, find a price range, and send a message. If any of those take more than a few seconds or feel confusing, you're losing people. Slow loading, no clear service area and broken forms are the most common culprits.",
    sections: [
      {
        id: "phone-test",
        h2: "Run the phone test",
        blocks: [
          "Most local searches happen on phones. Open your site on yours, on mobile data, not Wi-Fi.",
          { ol: [
            "Did it load in about three seconds or less?",
            "Can you tap to call without zooming?",
            "Is it obvious what you do in the first screen?",
            "Can you find your service area?",
          ] },
        ],
      },
      {
        id: "form-test",
        h2: "Test your own contact form",
        blocks: [
          "Submit your own form. Did the email arrive? Did it land in spam? Broken forms are surprisingly common and completely silent. You simply stop getting leads and don't know why.",
        ],
      },
      {
        id: "other-signs",
        h2: "Other warning signs",
        blocks: [
          { ul: [
            "Your copyright year in the footer is several years old.",
            "Photos are stock images that could be any company.",
            "Google Search Console shows people finding you but very few clicking.",
            "Customers say \"I couldn't find your number.\"",
            "Competitors show up for your services in your town and you don't.",
          ] },
        ],
      },
      {
        id: "fix",
        h2: "What to fix first",
        blocks: [
          "Fix the form and the phone button first. They cost almost nothing and recover leads immediately. Then look at [how fast your site loads](/blog/how-fast-should-a-website-load). If you're not appearing locally at all, that's a [local SEO](/local-seo) problem more than a design one.",
        ],
      },
    ],
    related: ["how-fast-should-a-website-load", "what-should-a-small-business-website-include", "why-not-showing-on-google-maps"],
    cta: "website",
  },
  {
    slug: "how-fast-should-a-website-load",
    title: "How Fast Should a Small Business Website Load?",
    metaTitle: "How Fast Should a Small Business Website Load? | GrowthBellows",
    description:
      "What \"fast enough\" means for a small business website, how to check yours for free, and the usual reasons sites are slow.",
    category: "web-design",
    published: D,
    readMinutes: 5,
    shortAnswer:
      "Aim for the main content to appear within about 2.5 seconds on a phone. That's Google's own \"good\" threshold for Largest Contentful Paint. Most slow small business sites are slow because of oversized images, heavy page builders, and too many plugins.",
    sections: [
      {
        id: "benchmark",
        h2: "The benchmark that matters",
        blocks: [
          "Google measures page experience with Core Web Vitals. The one owners should care about most is Largest Contentful Paint (LCP): how long until the main thing on screen shows up. Google considers 2.5 seconds or less good.",
          "Speed affects people more than rankings. Someone standing in a flooded basement won't wait for your homepage.",
        ],
      },
      {
        id: "check",
        h2: "How to check your site",
        blocks: [
          { ol: [
            "Go to PageSpeed Insights (pagespeed.web.dev) and enter your URL.",
            "Look at the Mobile tab, not Desktop.",
            "If there's real-user data at the top, trust that over the lab score.",
          ] },
        ],
      },
      {
        id: "causes",
        h2: "Common causes of slow sites",
        blocks: [
          { ul: [
            "Photos uploaded straight from a phone camera at full size.",
            "Page builders that load lots of code for every page.",
            "Plugins nobody remembers installing.",
            "Cheap shared hosting.",
            "Chat widgets, sliders and tracking scripts stacked on top of each other.",
          ] },
        ],
      },
      {
        id: "fix",
        h2: "Fix or rebuild?",
        blocks: [
          "Compressing images and removing plugins can help a lot. But if the site is built on a heavy theme, a rebuild is often cheaper than ongoing patching. Every site we build is designed to load quickly on phones. See [our web design service](/web-design).",
        ],
      },
    ],
    related: ["is-your-website-losing-customers", "small-business-website-cost", "what-should-a-small-business-website-include"],
    cta: "website",
  },
  {
    slug: "website-design-for-contractors",
    title: "Website Design for Contractors: What Actually Matters",
    metaTitle: "Website Design for Contractors: What Actually Matters | GrowthBellows",
    description:
      "What homeowners look for on a contractor's website before they call, and what to put on yours to win more estimates.",
    category: "industry-guides",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Homeowners want to know three things fast: do you do this type of job, do you work in my area, and can I trust you in my house. A contractor website that shows real project photos, service areas, license and insurance, and an easy way to request an estimate beats a fancy design every time.",
    sections: [
      {
        id: "trust",
        h2: "Trust comes first",
        blocks: [
          "Hiring a contractor is a big, risky purchase. Your site should reduce that risk:",
          { ul: [
            "Real before-and-after photos of your own jobs.",
            "License number and proof of insurance where your state requires them.",
            "Years in business and the owner's name and face.",
            "Links to your Google reviews rather than hand-picked quotes.",
          ] },
        ],
      },
      {
        id: "service-pages",
        h2: "Separate pages for each type of job",
        blocks: [
          "Kitchen remodels, decks, additions and roofing attract different customers searching different words. A page for each one lets you show matching photos, explain your process, and appear for those searches.",
        ],
      },
      {
        id: "estimates",
        h2: "Make requesting an estimate easy",
        blocks: [
          "Ask for the minimum: name, phone, address or town, type of job, and an optional photo upload. Long forms lose people.",
          "Then respond quickly. Contractors who are on a job site can't always answer. [Missed-call recovery](/automation/missed-call-recovery) texts callers back automatically so they don't move on to the next name on Google.",
        ],
      },
      {
        id: "local",
        h2: "Show up where homeowners search",
        blocks: [
          "Most contractor leads start on Google Maps. Your website and your Google Business Profile should match exactly: same name, phone and service areas. See our full guide for [contractors](/industries/contractors) and our [local SEO service](/local-seo).",
        ],
      },
    ],
    related: ["what-should-a-small-business-website-include", "how-local-seo-works", "automatically-respond-to-missed-calls"],
    cta: "website",
  },
];
