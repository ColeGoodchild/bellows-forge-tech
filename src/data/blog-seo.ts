import type { Article } from "./blog-types";

const D = "2026-10-13";

export const seoArticles: Article[] = [
  {
    slug: "how-local-seo-works",
    title: "How Local SEO Works for Small Businesses",
    metaTitle: "How Local SEO Works for Small Businesses | GrowthBellows",
    description:
      "A plain-English explanation of how Google decides which local businesses to show, and what you can actually influence.",
    category: "local-seo",
    published: D,
    readMinutes: 7,
    shortAnswer:
      "Google ranks local results mainly on three things: relevance (do you offer what was searched), distance (how close you are to the searcher), and prominence (how well known and trusted you appear). You can't move your shop, but you can improve relevance and prominence with a complete Google Business Profile, good service pages, consistent business details and steady reviews.",
    sections: [
      {
        id: "three-factors",
        h2: "The three things Google looks at",
        blocks: [
          "Google says local results are based on relevance, distance and prominence.",
          { h3: "Relevance" },
          "Does your profile and website clearly say you do the thing being searched? Categories, service lists and service pages matter here.",
          { h3: "Distance" },
          "How far you are from the searcher. You can't change this, which is why a business may rank well in one part of town and not another.",
          { h3: "Prominence" },
          "Reviews, mentions on other websites, links, and how established your business looks online.",
        ],
      },
      {
        id: "map-pack-vs-organic",
        h2: "Map results versus regular results",
        blocks: [
          "Local searches usually show a map with three businesses, then normal website results below. The map is driven mostly by your [Google Business Profile](/blog/optimize-google-business-profile). The results below are driven mostly by your website. Good local SEO works on both.",
        ],
      },
      {
        id: "what-you-control",
        h2: "What you can actually control",
        blocks: [
          { ol: [
            "A complete, accurate Google Business Profile with the right primary category.",
            "A website page for each main service.",
            "Consistent name, address and phone number everywhere.",
            "A steady habit of asking customers for reviews.",
            "Fresh photos and posts on your profile.",
          ] },
        ],
      },
      {
        id: "timeline",
        h2: "How long it takes",
        blocks: [
          "Fixing profile basics can show changes within weeks. Ranking for competitive services in a bigger city usually takes months of steady work. Anyone promising guaranteed #1 rankings is guessing.",
          "If you want help, our [local SEO service](/local-seo) is month to month. Businesses in [Syracuse](/locations/syracuse-ny) and [Rochester](/locations/rochester-ny) can read our local pages.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a website for local SEO?", a: "You can appear on Maps with only a Google Business Profile, but a website with service pages makes you more relevant and helps you show in regular results too." },
      { q: "Can I do local SEO myself?", a: "Yes. The basics in this article are free. What most owners lack is time to keep doing it every month." },
    ],
    related: ["optimize-google-business-profile", "why-not-showing-on-google-maps", "local-seo-vs-google-ads"],
    cta: "seo",
  },
  {
    slug: "optimize-google-business-profile",
    title: "How to Optimize Your Google Business Profile",
    metaTitle: "How to Optimize Your Google Business Profile (Step by Step) | GrowthBellows",
    description:
      "A step-by-step checklist for setting up and improving your Google Business Profile so more local customers call you.",
    category: "local-seo",
    published: D,
    readMinutes: 7,
    shortAnswer:
      "Choose the most accurate primary category, fill in every field, list your services, set your service area honestly, upload real photos, keep hours current, and reply to every review. Then keep it active. A complete, accurate profile is the single biggest thing most local businesses can fix.",
    sections: [
      {
        id: "category",
        h2: "Step 1: Get the primary category right",
        blocks: [
          "Your primary category has a big influence on which searches you appear for. Pick the most specific one that describes your main business, such as \"Plumber\" rather than \"Contractor\". Add a few secondary categories only if they're genuinely accurate.",
        ],
      },
      {
        id: "details",
        h2: "Step 2: Fill in every field",
        blocks: [
          { ul: [
            "Business name exactly as it appears on your signage. Don't add keywords. That breaks Google's rules.",
            "Phone number that a person or system will actually answer.",
            "Website link, ideally to the most relevant page.",
            "Hours, including holiday hours.",
            "Service area if you travel to customers. Hide your address if you don't serve customers there.",
            "A description that explains what you do in plain words.",
          ] },
        ],
      },
      {
        id: "services-photos",
        h2: "Step 3: Add services and photos",
        blocks: [
          "List each service with a short description. Upload real photos of your work, vehicles, team and storefront. Add new ones regularly.",
        ],
      },
      {
        id: "reviews",
        h2: "Step 4: Build a review habit",
        blocks: [
          "Ask every happy customer, and reply to every review, good or bad. Read [how to get more Google reviews without breaking the rules](/blog/get-more-google-reviews).",
        ],
      },
      {
        id: "maintain",
        h2: "Step 5: Keep it active",
        blocks: [
          "Post updates, answer questions, and fix anything Google or users change. Check monthly. This ongoing upkeep is part of our [local SEO service](/local-seo).",
        ],
      },
    ],
    faqs: [
      { q: "Can I put keywords in my business name?", a: "No. Google's guidelines say to use your real-world business name. Adding keywords risks suspension." },
      { q: "Should I show my home address?", a: "If you don't serve customers at that address, set a service area and hide the address." },
    ],
    related: ["why-not-showing-on-google-maps", "get-more-google-reviews", "how-local-seo-works"],
    cta: "seo",
  },
  {
    slug: "why-not-showing-on-google-maps",
    title: "Why Your Business Isn't Showing Up on Google Maps",
    metaTitle: "Why Isn't My Business Showing Up on Google Maps? | GrowthBellows",
    description:
      "The most common reasons a business doesn't appear on Google Maps, and how to fix each one.",
    category: "local-seo",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Usually it's one of these: the profile isn't verified, it's suspended, the category is wrong, the searcher is too far away, or competitors simply look more relevant and established. Search your exact business name first. If you don't appear even then, it's a profile problem. If you appear for your name but not your services, it's a ranking problem.",
    sections: [
      {
        id: "diagnose",
        h2: "First, figure out which problem you have",
        blocks: [
          { ol: [
            "Search your exact business name on Google Maps.",
            "Not showing at all: verification, suspension or duplicate listing issue.",
            "Showing for your name but not for \"plumber near me\": a relevance or prominence issue.",
          ] },
        ],
      },
      {
        id: "profile-problems",
        h2: "Profile problems",
        blocks: [
          { ul: [
            "Not verified: check your Business Profile dashboard for a verification prompt.",
            "Suspended: often caused by keyword-stuffed names, virtual office addresses or rule violations.",
            "Duplicate listings: two profiles for one business split your reviews and confuse Google.",
          ] },
        ],
      },
      {
        id: "ranking-problems",
        h2: "Ranking problems",
        blocks: [
          { ul: [
            "Wrong or too-general primary category.",
            "Few reviews compared with nearby competitors.",
            "No website, or a website without pages for your services.",
            "Inconsistent phone number or address across directories.",
            "Distance: Maps favors businesses closer to the searcher.",
          ] },
          "Work through our [Google Business Profile checklist](/blog/optimize-google-business-profile) to fix most of these.",
        ],
      },
      {
        id: "help",
        h2: "When to get help",
        blocks: [
          "Suspensions and duplicates can be fiddly. If the basics are right and you're still invisible, our [local SEO service](/local-seo) handles the diagnosis and ongoing work.",
        ],
      },
    ],
    related: ["optimize-google-business-profile", "how-local-seo-works", "get-more-google-reviews"],
    cta: "seo",
  },
  {
    slug: "local-seo-vs-google-ads",
    title: "Local SEO vs Google Ads: Which Is Better for a Small Business?",
    metaTitle: "Local SEO vs Google Ads for Small Businesses | GrowthBellows",
    description:
      "An honest comparison of local SEO and Google Ads: cost, speed, and which makes sense for your situation.",
    category: "local-seo",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Google Ads gets you seen right away but stops the moment you stop paying. Local SEO takes longer but keeps working without a per-click cost. Many small businesses use ads to fill the calendar now while building local SEO for the long term. If budget is tight, start with your free Google Business Profile.",
    sections: [
      {
        id: "comparison",
        h2: "Side by side",
        blocks: [
          { h3: "Google Ads" },
          { ul: ["Results in days.", "You pay for each click, whether or not they hire you.", "Traffic stops when spending stops.", "Easy to waste money without careful setup."] },
          { h3: "Local SEO" },
          { ul: ["Results in weeks to months.", "No per-click cost.", "Keeps working if maintained.", "Requires steady effort and patience."] },
        ],
      },
      {
        id: "when-ads",
        h2: "When ads make sense",
        blocks: [
          "Emergency services, new businesses with no reviews yet, or a seasonal push where you need calls now. Make sure your website and follow-up are ready first, or you're paying for clicks that leak away.",
        ],
      },
      {
        id: "when-seo",
        h2: "When local SEO makes sense",
        blocks: [
          "Almost always as a foundation. Your Google Business Profile is free, and good service pages keep bringing in leads for years. Learn [how local SEO works](/blog/how-local-seo-works).",
        ],
      },
      {
        id: "either-way",
        h2: "Either way, answer the leads",
        blocks: [
          "Both channels waste money if leads wait hours for a reply. [Automatic lead follow-up](/automation/lead-follow-up) responds within minutes, whichever channel the lead came from.",
        ],
      },
    ],
    related: ["how-local-seo-works", "optimize-google-business-profile", "automatically-follow-up-with-new-leads"],
    cta: "seo",
  },
  {
    slug: "get-more-google-reviews",
    title: "How to Get More Google Reviews Without Breaking the Rules",
    metaTitle: "How to Get More Google Reviews (Without Breaking the Rules) | GrowthBellows",
    description:
      "Simple, rule-following ways to get more Google reviews, plus the practices that can get your reviews removed.",
    category: "local-seo",
    published: D,
    readMinutes: 6,
    shortAnswer:
      "Ask every customer, at the right moment, with a direct link. Make it a routine instead of an occasional favor. Don't pay for reviews, offer discounts in exchange, or only ask customers you expect to be happy. Google's policies prohibit incentives and selective soliciting (review gating).",
    sections: [
      {
        id: "allowed",
        h2: "What works and is allowed",
        blocks: [
          { ol: [
            "Ask right after the job is finished, when the customer is happiest.",
            "Send a direct link to your review form. Fewer taps means more reviews.",
            "Ask in person, then follow up by text.",
            "Reply to every review so customers see you care.",
          ] },
        ],
      },
      {
        id: "not-allowed",
        h2: "What breaks the rules",
        blocks: [
          { ul: [
            "Offering discounts, gifts or entries into a draw for reviews.",
            "Writing reviews for yourself or having staff do it.",
            "Buying reviews.",
            "Review gating: only sending the review link to people who said they were happy.",
          ] },
          { note: "Fake or incentivized reviews can be removed, and Google can restrict your profile. It isn't worth it." },
        ],
      },
      {
        id: "automate",
        h2: "Make asking automatic",
        blocks: [
          "Most businesses don't lack happy customers. They forget to ask. [Review automation](/automation/review-automation) sends a request when a job is marked complete, so asking happens every time.",
        ],
      },
    ],
    faqs: [
      { q: "Can I ask for a feedback survey first?", a: "You can collect feedback, but don't use it to decide who gets the Google review link. Offer the review option to everyone." },
    ],
    related: ["optimize-google-business-profile", "automate-customer-follow-up", "how-local-seo-works"],
    cta: "seo",
  },
];
