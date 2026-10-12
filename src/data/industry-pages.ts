export type IndustryPage = {
  h1: string;
  heroCopy: string;
  cta: string;
  problemsTitle: string;
  problems: { title: string; body: string }[];
  services: { name: string; why: string; to: string }[];
  workflows: { title: string; steps: string[] }[];
  /** true only when a real case study is genuinely relevant */
  relevantCaseStudies: boolean;
  faqs: { q: string; a: string }[];
};

const S = {
  web: "/web-design",
  seo: "/local-seo",
  lead: "/automation/lead-follow-up",
  missed: "/automation/missed-call-recovery",
  ai: "/automation/ai-receptionist",
  appt: "/automation/appointment-scheduling",
  crm: "/automation/crm-automation",
  review: "/automation/review-automation",
  docs: "/automation/document-automation",
  support: "/automation/customer-support",
};

export const industryPages: Record<string, IndustryPage> = {
  plumbers: {
    h1: "Web Design, Local SEO & AI Automation for Plumbers",
    heroCopy:
      "Get found when local customers need a plumber, convert more website visitors into calls, and automate the repetitive work that happens after a lead comes in.",
    cta: "Get More Plumbing Leads",
    problemsTitle: "Where plumbing businesses lose jobs",
    problems: [
      { title: "Missed emergency calls", body: "A burst pipe caller doesn't leave a voicemail. They call the next plumber on the map." },
      { title: "Slow lead response", body: "Web form requests sit until the end of the day, by which point the customer has booked someone else." },
      { title: "Quote follow-up", body: "Water heater and repipe quotes go out and nobody checks back, so bigger jobs quietly disappear." },
      { title: "Scheduling", body: "Dispatch happens by phone and text, and reschedules eat time the office doesn't have." },
      { title: "Review requests", body: "Happy customers rarely leave a review unless someone asks right after the job." },
      { title: "Google Maps visibility", body: "The map pack decides most local plumbing calls, and it rewards complete profiles and steady reviews." },
      { title: "Customer communication", body: "Customers call to ask when the tech is arriving because nobody told them." },
    ],
    services: [
      { name: "Website design", why: "Emergency call button first, then service pages for drains, water heaters, and leaks.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Show up in the map pack for the towns in your service radius.", to: S.seo },
      { name: "Missed-call recovery", why: "Text callers back within seconds when the crew can't pick up.", to: S.missed },
      { name: "AI receptionist", why: "Answer after-hours calls, sort emergencies from routine work, and book the rest.", to: S.ai },
      { name: "AI lead follow-up", why: "Keep following up on quotes until the customer books or says no.", to: S.lead },
      { name: "Review automation", why: "Ask for feedback after every completed job, automatically.", to: S.review },
    ],
    workflows: [
      { title: "New plumbing lead", steps: ["New plumbing lead", "Instant SMS response", "AI qualification", "CRM entry", "Owner notification", "Appointment"] },
      { title: "Missed emergency call", steps: ["Call goes unanswered", "Text sent to caller", "Caller describes the problem", "Emergency flagged", "On-call tech notified"] },
      { title: "Water heater quote", steps: ["Quote sent", "Reminder after 2 days", "Financing info after 5 days", "Final check-in", "Booked or closed out"] },
      { title: "Job completed", steps: ["Job marked complete", "Feedback request sent", "Happy customer gets review link", "Issue routed to owner"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Can after-hours plumbing calls be handled without me answering?", a: "Yes. An AI receptionist can collect the address and problem, tell routine callers when you open, and escalate real emergencies to whoever is on call." },
      { q: "How do plumbers get into the Google map pack?", a: "A complete Google Business Profile, the right categories, accurate service areas, real photos, and a steady flow of reviews. We set up and maintain all of those." },
      { q: "Will this work with my dispatch software?", a: "Often, yes. Tools like Jobber, Housecall Pro, and ServiceTitan can usually be connected. We confirm what's possible during the audit." },
    ],
  },
  hvac: {
    h1: "Web Design, Local SEO & AI Automation for HVAC Companies",
    heroCopy:
      "Handle the first heat wave and the first cold snap without losing calls, keep maintenance plans renewing, and get found by homeowners searching for heating and cooling help.",
    cta: "Get More HVAC Leads",
    problemsTitle: "Where HVAC companies lose work",
    problems: [
      { title: "Seasonal lead spikes", body: "The first hot or cold week brings more calls in three days than the office can handle." },
      { title: "Missed calls", body: "When every line is busy, callers with no heat or no AC move on fast." },
      { title: "Maintenance reminders", body: "Tune-ups and plan renewals depend on someone remembering to call each customer." },
      { title: "Appointment scheduling", body: "Booking around tech availability and parts turns into phone tag." },
      { title: "Quote follow-up", body: "System replacement quotes are big decisions, and without follow-up they stall." },
      { title: "Review generation", body: "Review counts drive map rankings, but asking is the first thing dropped in busy season." },
    ],
    services: [
      { name: "Website design", why: "Emergency service, maintenance plans, and replacements each get a clear path.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "AC repair and furnace repair pages ready before the season starts.", to: S.seo },
      { name: "Appointment scheduling", why: "Customers book tune-ups online against real availability.", to: S.appt },
      { name: "Missed-call recovery", why: "Every caller gets a reply during the busiest weeks.", to: S.missed },
      { name: "AI lead follow-up", why: "Replacement quotes get consistent, polite follow-up.", to: S.lead },
      { name: "Review automation", why: "Feedback requests go out after every visit, even in peak season.", to: S.review },
    ],
    workflows: [
      { title: "Seasonal tune-up campaign", steps: ["Season approaching", "Reminder sent to plan members", "Customer picks a time", "Booked on calendar", "Confirmation and reminder"] },
      { title: "No-heat call during a spike", steps: ["Line busy or unanswered", "Instant text reply", "AI asks about the system", "Urgent jobs prioritized", "Dispatcher notified"] },
      { title: "System replacement quote", steps: ["Quote delivered", "Follow-up with rebate info", "Questions answered", "Install scheduled"] },
      { title: "Plan renewal", steps: ["Plan nearing expiry", "Renewal notice", "Payment link", "CRM updated"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Can you automate maintenance plan renewals?", a: "Yes. Renewal notices, payment links, and tune-up booking can run automatically, with your team only stepping in for exceptions." },
      { q: "When should HVAC seasonal content be published?", a: "Several weeks before the season starts, so pages have time to get indexed before demand arrives." },
      { q: "Can customers book tune-ups online?", a: "Yes, as long as booking reflects real tech availability. We connect it to your calendar or field service software." },
    ],
  },
  electricians: {
    h1: "Web Design, Local SEO & AI Automation for Electricians",
    heroCopy:
      "Win more panel upgrades, EV charger installs, and service calls by answering every inquiry fast and showing up when local customers search.",
    cta: "Get More Electrical Leads",
    problemsTitle: "Where electrical contractors lose jobs",
    problems: [
      { title: "Calls during jobs", body: "You can't answer the phone with your hands in a panel, and voicemail loses most callers." },
      { title: "Specialty search visibility", body: "EV chargers, generators, and panel upgrades are high-value searches that bigger shops capture." },
      { title: "Quote turnaround", body: "Estimate requests wait until evening, and customers pick whoever replied first." },
      { title: "Residential vs. commercial mix", body: "One generic site can't speak to homeowners and property managers at the same time." },
      { title: "Permit and inspection coordination", body: "Scheduling around inspections means extra calls to customers." },
      { title: "Review requests", body: "Reviews build trust for work involving safety, but rarely happen without a prompt." },
    ],
    services: [
      { name: "Website design", why: "Click-to-call everywhere, licensing visible, separate residential and commercial paths.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Service pages for panel upgrades, EV chargers, rewiring, and generators.", to: S.seo },
      { name: "Missed-call recovery", why: "Callers get a text while you finish the job.", to: S.missed },
      { name: "AI receptionist", why: "Collect job details and photos before you call back.", to: S.ai },
      { name: "Appointment scheduling", why: "Estimates and inspection dates confirmed without phone tag.", to: S.appt },
      { name: "CRM automation", why: "Every inquiry lands in one place with the right job type.", to: S.crm },
    ],
    workflows: [
      { title: "EV charger inquiry", steps: ["Form submitted", "Instant reply asking for panel photo", "Photo attached to lead", "Estimate scheduled", "Owner notified"] },
      { title: "Missed call on a job site", steps: ["Call missed", "Text sent", "Caller describes the work", "Lead created in CRM", "Callback task assigned"] },
      { title: "Inspection day", steps: ["Inspection booked", "Customer notified", "Reminder day before", "Result logged", "Next step sent"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Should EV chargers and generators have their own pages?", a: "Yes. They're searched separately and buyers want specific answers, so a dedicated page usually performs better than a bullet on a services list." },
      { q: "Can leads send photos before I call?", a: "Yes. Automated replies can ask for a panel or meter photo and attach it to the lead so you can quote faster." },
      { q: "Do you build sites for commercial electricians too?", a: "Yes. We separate commercial and residential content so each audience sees what matters to them." },
    ],
  },
  roofers: {
    h1: "Web Design, Local SEO & AI Automation for Roofers",
    heroCopy:
      "Capture storm-season demand, qualify inspection requests automatically, and keep insurance jobs moving without hiring more office staff.",
    cta: "Get More Roofing Leads",
    problemsTitle: "Where roofing companies lose jobs",
    problems: [
      { title: "Storm-season lead volume", body: "After a storm, calls and forms pile up faster than anyone can respond." },
      { title: "Lead qualification", body: "Time gets spent on tire-kickers while serious homeowners wait." },
      { title: "Inspection scheduling", body: "Booking inspections across crews and towns is a constant puzzle." },
      { title: "Insurance-related intake", body: "Claim numbers, adjuster details, and photos arrive scattered across texts and emails." },
      { title: "Follow-up", body: "Replacement estimates are expensive decisions that need several touches." },
      { title: "Review requests", body: "Homeowners compare review counts closely before letting anyone on the roof." },
    ],
    services: [
      { name: "Website design", why: "Free inspection request as the main action, with before-and-after proof.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Town pages and storm-damage content in place before peak season.", to: S.seo },
      { name: "AI lead follow-up", why: "Instant response and qualification when volume spikes.", to: S.lead },
      { name: "Appointment scheduling", why: "Inspections booked by area and crew availability.", to: S.appt },
      { name: "Document automation", why: "Insurance details and photos collected in one organized record.", to: S.docs },
      { name: "Review automation", why: "Review requests after every completed roof.", to: S.review },
    ],
    workflows: [
      { title: "Post-storm inspection request", steps: ["Inspection request", "Instant reply", "Questions about damage and insurance", "Lead scored", "Inspection booked by area"] },
      { title: "Insurance intake", steps: ["Homeowner uploads claim info", "Details extracted", "Job record updated", "Office notified of missing items"] },
      { title: "Replacement estimate", steps: ["Estimate sent", "Follow-up with financing options", "Questions routed to estimator", "Contract signed or closed"] },
      { title: "Roof completed", steps: ["Job closed", "Feedback request", "Review link to happy customers", "Warranty info sent"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Can you help us handle the surge after a storm?", a: "Yes. Instant replies, automated qualification, and inspection booking keep every lead moving while your team focuses on roofs." },
      { q: "Can insurance information be collected automatically?", a: "Yes. A short intake flow can gather claim numbers, adjuster contacts, and photos and attach them to the job record." },
      { q: "Should we have pages for each town we cover?", a: "Only where you genuinely work and can say something specific. Useful town pages help; copy-paste pages don't." },
    ],
  },
  contractors: {
    h1: "Web Design, Local SEO & AI Automation for Contractors",
    heroCopy:
      "Show homeowners your work, make quote requests easy, and stop letting bids go quiet because nobody had time to follow up.",
    cta: "Get More Project Leads",
    problemsTitle: "Where contractors lose projects",
    problems: [
      { title: "Bids with no follow-up", body: "Estimates go out and never get a second touch, so the job goes to whoever stayed in contact." },
      { title: "Unqualified inquiries", body: "Site visits get booked for projects that are out of budget or out of scope." },
      { title: "Proof of work", body: "Homeowners can't tell your craftsmanship apart from the next contractor's." },
      { title: "Project communication", body: "Clients call for updates because there's no regular check-in." },
      { title: "Change orders and paperwork", body: "Change orders, permits, and lien waivers eat office hours." },
      { title: "Referral and review flow", body: "Most work comes from referrals, but asking isn't systematic." },
    ],
    services: [
      { name: "Website design", why: "Project galleries by job type and quote requests that reach your phone.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Trade and service-area pages for the towns you build in.", to: S.seo },
      { name: "AI lead follow-up", why: "Estimate follow-up that keeps going until the homeowner decides.", to: S.lead },
      { name: "CRM automation", why: "Every lead, bid, and project stage tracked automatically.", to: S.crm },
      { name: "Document automation", why: "Change orders and project paperwork routed without retyping.", to: S.docs },
      { name: "Review automation", why: "Review and referral requests at project completion.", to: S.review },
    ],
    workflows: [
      { title: "New project inquiry", steps: ["Quote request", "Budget and timeline questions", "Qualified lead to CRM", "Site visit booked", "Owner notified"] },
      { title: "Bid follow-up", steps: ["Bid sent", "Check-in after 3 days", "Answer questions", "Second check-in", "Won, lost, or paused"] },
      { title: "Weekly project update", steps: ["Project in progress", "Weekly update prompt to PM", "Summary sent to client", "Fewer status calls"] },
      { title: "Project completion", steps: ["Final walkthrough", "Review request", "Referral ask", "Warranty reminder scheduled"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Can you qualify project leads before a site visit?", a: "Yes. A few questions about scope, budget, and timeline can run automatically so you only drive out for serious projects." },
      { q: "How should a contractor show past work online?", a: "Organized galleries by project type with short descriptions of the scope. Real photos beat stock every time." },
      { q: "Can clients get automatic project updates?", a: "Yes. A simple weekly prompt to your PM can turn into a client update without anyone writing an email from scratch." },
    ],
  },
  "home-services": {
    h1: "Web Design, Local SEO & AI Automation for Home Service Businesses",
    heroCopy:
      "For cleaners, landscapers, pest control, pool service, and other recurring home services: get found by neighbors, book faster, and keep recurring customers on schedule.",
    cta: "Get More Home Service Leads",
    problemsTitle: "Where home service businesses lose customers",
    problems: [
      { title: "Local visibility", body: "Neighbors search and find a competitor with more reviews first." },
      { title: "Quote requests", body: "Price questions come in at night and get answered the next afternoon." },
      { title: "Recurring scheduling", body: "Weekly and monthly visits are tracked by text and memory." },
      { title: "Seasonal reactivation", body: "Last year's customers don't come back unless someone reaches out." },
      { title: "Routine questions", body: "The same questions about pricing, pets, and access get answered by hand every day." },
      { title: "Reviews", body: "Reviews trickle in only when customers volunteer them." },
    ],
    services: [
      { name: "Website design", why: "Clear services, pricing guidance, and booking in one step.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Your profile is often the primary way new customers find you.", to: S.seo },
      { name: "Appointment scheduling", why: "Recurring visits booked and reminded automatically.", to: S.appt },
      { name: "Customer support automation", why: "Routine questions answered instantly, day or night.", to: S.support },
      { name: "Review automation", why: "Feedback requests after every visit.", to: S.review },
      { name: "AI lead follow-up", why: "Quote requests answered in minutes, not hours.", to: S.lead },
    ],
    workflows: [
      { title: "Quote request", steps: ["Form or chat inquiry", "Instant price range reply", "Questions about property", "Visit booked", "Reminder sent"] },
      { title: "Recurring service", steps: ["Visit scheduled", "Reminder day before", "Visit completed", "Next visit auto-booked"] },
      { title: "Seasonal reactivation", steps: ["Season starts", "Message to last year's customers", "Customer replies", "Service booked"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "What matters most for a home service business online?", a: "Your Google Business Profile and reviews. The website supports both, but local visibility usually drives the calls." },
      { q: "Can past customers be reminded to rebook each season?", a: "Yes. Reactivation messages can go out automatically at the right time each year." },
      { q: "Can a chatbot answer pricing questions?", a: "It can give the ranges and rules you approve, and hand off anything unusual to a person." },
    ],
  },
  "law-firms": {
    h1: "Web Design, Local SEO & Intake Automation for Law Firms",
    heroCopy:
      "A credible site for each practice area, intake that screens matters before an attorney gets involved, and consultations booked without days of phone tag.",
    cta: "Get More Consultations",
    problemsTitle: "Where law firms lose time and clients",
    problems: [
      { title: "Unqualified intake", body: "Attorney time goes to calls about matters the firm doesn't handle." },
      { title: "Slow response", body: "Prospective clients often contact several firms and hire the one who responds first." },
      { title: "Consultation scheduling", body: "Coordinating calendars for a consult takes several back-and-forth messages." },
      { title: "Conflict check prep", body: "Basic party information has to be gathered before anyone can run a conflict check." },
      { title: "Document collection", body: "Client documents arrive in a dozen formats through a dozen channels." },
      { title: "Practice-area visibility", body: "One general page can't rank for every practice area and jurisdiction." },
    ],
    services: [
      { name: "Website design", why: "A page per practice area and attorney bios that establish credibility.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Practice-area and jurisdiction pages with plain-language answers.", to: S.seo },
      { name: "AI receptionist", why: "Screen calls by matter type and capture details after hours.", to: S.ai },
      { name: "Appointment scheduling", why: "Qualified prospects book consultations directly.", to: S.appt },
      { name: "Document automation", why: "Intake documents organized and routed to the right matter.", to: S.docs },
      { name: "CRM automation", why: "Intake records flow into your practice management software.", to: S.crm },
    ],
    workflows: [
      { title: "New inquiry", steps: ["Web or phone inquiry", "Matter type and jurisdiction questions", "Out-of-scope matters referred out", "Qualified lead to intake", "Consultation offered"] },
      { title: "Consultation booking", steps: ["Prospect picks a slot", "Intake questionnaire sent", "Party names collected for conflict check", "Attorney notified"] },
      { title: "Client documents", steps: ["Client uploads documents", "Files labeled and sorted", "Saved to matter", "Paralegal notified"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Is AI intake appropriate for a law firm?", a: "For routine screening and scheduling, yes. It shouldn't give legal advice, and anything sensitive or ambiguous should go to a person. We design it that way." },
      { q: "Can intake connect to our practice management software?", a: "Often. Clio, MyCase, and similar tools usually have integrations. We confirm during the audit." },
      { q: "Should each practice area have its own page?", a: "Yes. People search for a specific legal problem, and a focused page answers it better than a list." },
    ],
  },
  "medical-dental": {
    h1: "Web Design, Local SEO & Front-Desk Automation for Medical and Dental Practices",
    heroCopy:
      "Help new patients find you, answer the questions your front desk repeats all day, and keep the schedule full with reminders and easy rescheduling.",
    cta: "Get More New Patients",
    problemsTitle: "Where practices lose time and appointments",
    problems: [
      { title: "Repeated phone questions", body: "Hours, insurance, and parking questions tie up the front desk." },
      { title: "No-shows", body: "Missed appointments leave chairs and rooms empty with no time to fill them." },
      { title: "New patient paperwork", body: "Forms get completed in the waiting room, delaying the first visit." },
      { title: "After-hours booking", body: "Patients look for appointments in the evening when nobody answers." },
      { title: "Recall reminders", body: "Cleanings and follow-ups slip when recalls depend on manual calls." },
      { title: "Local visibility", body: "Patients choose providers close by with complete profiles and recent reviews." },
    ],
    services: [
      { name: "Website design", why: "New patient info, insurance clarity, and provider bios.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Treatment pages and a complete, accurate profile.", to: S.seo },
      { name: "Appointment scheduling", why: "Reminders and self-serve rescheduling reduce no-shows.", to: S.appt },
      { name: "AI receptionist", why: "Answer routine calls so staff can focus on patients in the office.", to: S.ai },
      { name: "Document automation", why: "Intake forms completed before the visit.", to: S.docs },
      { name: "Review automation", why: "Feedback requests after visits.", to: S.review },
    ],
    workflows: [
      { title: "New patient", steps: ["Appointment requested", "Intake forms sent", "Insurance info collected", "Front desk notified", "Reminder before visit"] },
      { title: "No-show prevention", steps: ["Appointment booked", "Reminder 2 days before", "Easy reschedule link", "Open slot offered to waitlist"] },
      { title: "Recall", steps: ["Cleaning due", "Recall message", "Patient books online", "Confirmation sent"] },
    ],
    relevantCaseStudies: false,
    faqs: [
      { q: "Are these automations HIPAA compliant?", a: "Compliance depends on the specific tools and how data is handled. We only use vendors that offer the agreements your practice needs, and keep clinical details out of tools that aren't approved for them." },
      { q: "Can reminders really reduce no-shows?", a: "Reminders with a simple way to reschedule are one of the most reliable ways to keep the schedule full. We don't promise a specific number." },
      { q: "Can this work with our practice management system?", a: "Many systems support integrations, but not all. We check yours before recommending anything." },
    ],
  },
  "professional-services": {
    h1: "Web Design, Local SEO & Automation for Professional Services Firms",
    heroCopy:
      "For accountants, consultants, engineers, and agencies: a site that explains what you do in plain terms, inquiries that qualify themselves, and follow-up that never slips.",
    cta: "Get More Qualified Inquiries",
    problemsTitle: "Where professional services firms lose clients",
    problems: [
      { title: "Unclear offer", body: "Prospects can't tell what you do, who it's for, or roughly what it costs." },
      { title: "Credibility gap", body: "Certifications and experience exist, but the site doesn't show them." },
      { title: "Unqualified calls", body: "Discovery calls get booked with prospects who were never a fit." },
      { title: "Proposal follow-up", body: "Proposals go out and follow-up depends on someone's memory." },
      { title: "Client onboarding", body: "Engagement letters, documents, and kickoff scheduling are handled by hand." },
      { title: "Stale CRM", body: "Pipeline numbers are guesses because the CRM isn't updated." },
    ],
    services: [
      { name: "Website design", why: "A clear page per service, proof up front, and one obvious next step.", to: S.web },
      { name: "Local SEO & Google Business Profile", why: "Specialty pages and visibility where clients are regional.", to: S.seo },
      { name: "CRM automation", why: "Contacts, deals, and tasks updated automatically.", to: S.crm },
      { name: "AI lead follow-up", why: "Proposal follow-up that runs on schedule.", to: S.lead },
      { name: "Appointment scheduling", why: "Qualified prospects book discovery calls directly.", to: S.appt },
      { name: "Document automation", why: "Onboarding paperwork collected and filed.", to: S.docs },
    ],
    workflows: [
      { title: "New inquiry", steps: ["Inquiry form", "Qualifying questions", "Fit leads offered a call", "Deal created in CRM", "Partner notified"] },
      { title: "Proposal follow-up", steps: ["Proposal sent", "Check-in after 3 days", "Reminder before expiry", "Won or closed in CRM"] },
      { title: "Client onboarding", steps: ["Engagement signed", "Document checklist sent", "Files received and filed", "Kickoff scheduled"] },
    ],
    relevantCaseStudies: true,
    faqs: [
      { q: "Have you built sites for professional services firms?", a: "Yes. Innovative Quality Services and RnD Quality Associates are both consulting firms we built sites for. You can see them below." },
      { q: "Should a consultancy publish pricing?", a: "Not always exact prices, but a starting point or typical range helps prospects qualify themselves." },
      { q: "Can proposal follow-up be automated without sounding robotic?", a: "Yes. Messages are written in your voice and stop the moment the prospect replies." },
    ],
  },
};
