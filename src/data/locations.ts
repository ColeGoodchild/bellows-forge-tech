export type LocationPage = {
  slug: string;
  city: string;
  state: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  localContext: string[];
  neighborhoods: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
};

/**
 * Only cities where we can write genuinely specific, useful local content
 * belong here. Do not add thin duplicates of these pages.
 */
export const locations: LocationPage[] = [
  {
    slug: "syracuse-ny",
    city: "Syracuse",
    state: "NY",
    title: "Web Design & Local SEO in Syracuse, NY | GrowthBellows",
    description:
      "Websites, Google Business Profile optimization, and automation for Syracuse-area small businesses, from Armory Square to Liverpool, Camillus, and Cicero.",
    h1: "Web Design & Local SEO in Syracuse, NY",
    intro:
      "We work with Central New York trades, practices, and service businesses that get most of their work from people searching within a 25-mile radius of Syracuse.",
    localContext: [
      "Syracuse search volume is seasonal. Roofing, gutter, and HVAC searches spike after the first hard freeze and again during spring thaw, so we build service pages and review campaigns before the season rather than during it.",
      "Snow-belt weather drives emergency searches. Businesses that answer or text back within minutes win those jobs, which is why missed-call recovery matters more here than in milder markets.",
      "The metro spreads across Onondaga County suburbs. A single 'Syracuse' page rarely ranks for Liverpool or Manlius searches, so we build genuinely distinct pages for the suburbs you actually serve.",
      "Local competition in the map pack is won on proximity, categories, and review velocity more than on domain size, which favors well-run small businesses.",
    ],
    neighborhoods: [
      "Downtown & Armory Square",
      "Eastwood",
      "Liverpool",
      "Camillus",
      "Cicero",
      "Manlius & Fayetteville",
      "Baldwinsville",
      "DeWitt",
    ],
    industries: ["plumbers", "hvac", "roofers", "contractors", "home-services"],
    faqs: [
      {
        q: "Do you work with businesses outside Syracuse?",
        a: "Yes. We're in New York and work with small businesses across the United States, but Central New York is our home market.",
      },
      {
        q: "Can you rank us in the Syracuse map pack?",
        a: "We can't promise a position. We can optimize your Google Business Profile, build genuinely local service pages, and put a review request in your workflow, which is what actually moves local rankings.",
      },
    ],
  },
  {
    slug: "rochester-ny",
    city: "Rochester",
    state: "NY",
    title: "Web Design & Local SEO in Rochester, NY | GrowthBellows",
    description:
      "Websites, local SEO, and business automation for Rochester-area small businesses serving Monroe County, from Brighton and Pittsford to Greece and Webster.",
    h1: "Web Design & Local SEO in Rochester, NY",
    intro:
      "Rochester small businesses compete against long-established local names. We focus on the parts of local search a newer or smaller company can actually win.",
    localContext: [
      "Monroe County suburbs behave like separate markets. Pittsford, Brighton, Webster, and Greece searchers see different map results, so suburb-specific pages outperform one broad city page.",
      "Rochester's older housing stock drives steady renovation, electrical upgrade, and basement or roofing repair searches year-round rather than in one seasonal spike.",
      "Many established competitors have hundreds of reviews. Consistent recent review velocity closes that gap faster than adding more pages.",
      "A large share of local searches happen on phones during work hours, so click-to-call placement and answering the call matter as much as ranking.",
    ],
    neighborhoods: [
      "Downtown Rochester",
      "Brighton",
      "Pittsford",
      "Webster",
      "Greece",
      "Irondequoit",
      "Henrietta",
      "Fairport",
    ],
    industries: ["contractors", "electricians", "home-services", "medical-dental", "professional-services"],
    faqs: [
      {
        q: "How long does local SEO take in a market like Rochester?",
        a: "Google Business Profile improvements can show up in weeks. Ranking for competitive service terms usually takes several months of consistent work.",
      },
      {
        q: "Do we need a separate page for every suburb?",
        a: "Only for the suburbs you genuinely serve and can say something specific about. Thin duplicate city pages tend to hurt more than help.",
      },
    ],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
