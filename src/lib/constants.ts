/** Bump when replacing files in public/images so caches refresh */
const IMG_V = "20261022f";

/** Query version for plain <img>/CSS; Next Image uses path-only (no search params). */
const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;
const imgPath = (publicPath: string) => publicPath;

export const SITE_NAME = "Carolina Psychological Health Services";
export const SITE_SHORT = "Carolina Psych";

export const LOGO_URL = imgPath("/images/logo-dark.png");
export const LOGO_WHITE_URL = imgPath("/images/logo-white.png");
export const LOGO_MARK_URL = imgPath("/images/logo.png");
export const FAVICON = img("/images/favicon.png");

export const IMAGES = {
  hero: imgPath("/images/hero.jpg"),
  tms: imgPath("/images/tms-room.jpg"),
  spravato: imgPath("/images/spravato.jpg"),
  clinic: imgPath("/images/clinic.webp"),
  faq: imgPath("/images/faq-clinic.jpg"),
} as const;

export const VIDEO_RESULTS_BG = "/videos/results-bg.mp4";

export const BOOKING_SECTION_ID = "book";
export const FORM_SECTION_ID = "qualify";
export const SERVICES_SECTION_ID = "services";
export const RESULTS_SECTION_ID = "results";
export const WHY_SECTION_ID = "why-cphs";
export const TESTIMONIALS_SECTION_ID = "testimonials";
export const IS_THIS_YOU_SECTION_ID = "is-this-you";

export const FORM_ID = "955SNpae4fBYS0Cju2Y1";
export const FORM_IFRAME_ID = "inline-955SNpae4fBYS0Cju2Y1";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2276";

export const CALENDAR_ID = "icS9E4GvlUC9KXA1YAAr";
export const CALENDAR_IFRAME_ID = "gJQ1BeydUyYOQz7b1VbW_1792601427333";

/** Tracking line from landing page brief */
export const PHONE_NUMBER = "(910) 996-2843";
export const PHONE_HREF = "tel:+19109962843";

export const ADDRESS_LINES = ["900 Dennis Rd", "Jacksonville, NC 28546"] as const;
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=900+Dennis+Rd+Jacksonville+NC+28546";

export const WEBSITE_URL = "https://cphsnc.com/";
export const CRISIS_LINE = "1-866-437-1821";
export const CRISIS_HREF = "tel:+18664371821";

export const DEVICE_NAME = "Apollo TMS";

export const INSURANCE_ITEMS = [
  "TRICARE",
  "Aetna",
  "Blue Cross",
  "Medicare",
  "CareCredit",
] as const;

export const IS_THIS_YOU = [
  {
    title: "Medications haven't brought lasting relief",
    description:
      "You've tried antidepressants and still feel stuck, foggy, or weighed down most days.",
  },
  {
    title: "Depression keeps interrupting daily life",
    description:
      "Work, relationships, sleep, and motivation feel harder than they should, even with support.",
  },
  {
    title: "You're ready for a different approach",
    description:
      "You want FDA-cleared options that go beyond another prescription refill.",
  },
  {
    title: "You need care that fits military life",
    description:
      "Active-duty service members, veterans, and families are welcome. TRICARE is accepted.",
  },
] as const;

export const SERVICES = [
  {
    id: "tms",
    title: "TMS Therapy",
    eyebrow: "Non-drug · FDA-cleared",
    description:
      "Transcranial magnetic stimulation uses focused magnetic pulses to stimulate mood-regulating brain circuits. No sedation. Most people return to their day afterward.",
    points: [
      "Apollo TMS by Neurocare",
      "Typically 36 sessions over 6 to 8 weeks",
      "Available for patients age 15 and older",
      "50%-80% response rate in published research",
    ],
    image: IMAGES.tms,
    imageAlt: "TMS therapy treatment room at Carolina Psychological Health Services",
  },
  {
    id: "spravato",
    title: "Spravato® (Esketamine)",
    eyebrow: "In-office · Physician-monitored",
    description:
      "An FDA-cleared nasal-spray treatment for eligible adults with treatment-resistant depression, delivered in a calm, supervised clinical setting.",
    points: [
      "For adults age 18 and older who qualify",
      "Monitored in-office for safety and support",
      "Designed when other antidepressants fall short",
      "Part of comprehensive depression care under one roof",
    ],
    image: IMAGES.spravato,
    imageAlt: "Spravato (esketamine) nasal spray treatment at Carolina Psychological Health Services in Jacksonville, NC",
  },
] as const;

export const STATS = [
  {
    value: "50%-80%",
    label: "TMS response rate",
    detail: "Many patients experience meaningful symptom relief with TMS.",
  },
  {
    value: "30%-60%",
    label: "Longer-term TMS results",
    detail: "A substantial share of responders maintain improvement over time.",
  },
  {
    value: "Since 1988",
    label: "Trusted in Jacksonville",
    detail: "Decades of behavioral health care for Onslow County and beyond.",
  },
] as const;

export const WHY_ITEMS = [
  {
    title: "Trusted leaders since 1988",
    description:
      "Carolina Psychological Health Services has served Jacksonville and surrounding communities for decades with patient-centered care.",
  },
  {
    title: "Experienced multidisciplinary team",
    description:
      "Psychiatrists, psychologists, and therapists work together so your plan fits your goals, not just a diagnosis.",
  },
  {
    title: "Advanced care under one roof",
    description:
      "TMS, Spravato®, therapy, and medication management are available in one Jacksonville location.",
  },
  {
    title: "Insurance and financing options",
    description:
      "TRICARE, Medicare, and most major plans accepted. Private pay, out-of-network billing, and CareCredit are available.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "TMS has truly been an uplifting experience, therapy and an incredible team supporting me along the way. Positive affirmations and genuine care made such a difference in my journey.",
    name: "David",
  },
  {
    quote:
      "Currently in the military and was referred to TMS therapy here. I've definitely noticed an improvement. I've tried many medications and nothing helped like this.",
    name: "Raul",
  },
  {
    quote:
      "Being seen at Carolina Psychological Health Services has been life-changing! I would highly recommend giving them a call if you are in need of any service they provide.",
    name: "Alexis",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who may qualify for TMS or Spravato®?",
    answer:
      "Both options are typically considered for people with treatment-resistant depression, often after trying medications without enough relief. A clinical evaluation confirms candidacy, safety, and whether insurance may cover care.",
  },
  {
    question: "What is Apollo TMS?",
    answer:
      "Carolina Psych delivers TMS using the Apollo system by Neurocare. Treatment usually follows a protocol of about 36 sessions over 6 to 8 weeks for eligible patients age 15 and older.",
  },
  {
    question: "Do you accept TRICARE and other insurance?",
    answer:
      "Yes. Carolina Psych accepts TRICARE, Aetna, Blue Cross, Healthy Blue, Trillium, Carolina Complete Health, and original Medicare. CareCredit financing is also available. Call to verify your specific plan.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation or use the “Find out if you Qualify” form on this page. You can also call (910) 996-2843. Our team will help with eligibility, insurance, and next steps.",
  },
] as const;
