/**
 * Focus-keyword map for every indexable page.
 * Volume tiers are relative EN-market estimates (Google Ads / SEO tools):
 * VH = very high · H = high · M = medium · L = lower but high-intent
 */

export type KeywordSet = {
  focus: string;
  secondary: string[];
  /** Relative search demand for the focus term */
  volume: "VH" | "H" | "M" | "L";
};

export const pageKeywords = {
  home: {
    focus: "private turkey tour",
    secondary: [
      "private turkey tours",
      "bespoke turkey travel",
      "custom turkey itinerary",
      "turkey private guide",
      "luxury turkey tour",
    ],
    volume: "M",
  },
  privateTurkeyTours: {
    focus: "private turkey tours",
    secondary: [
      "private tours turkey",
      "tailor made turkey tour",
      "custom turkey tour",
      "private guided turkey tour",
      "luxury turkey tours",
      "bespoke turkey holiday",
    ],
    volume: "M",
  },
  destinations: {
    focus: "turkey destinations",
    secondary: [
      "best places to visit in turkey",
      "istanbul cappadocia ephesus",
      "private turkey destinations",
      "turkey travel destinations",
    ],
    volume: "H",
  },
  itineraries: {
    focus: "turkey itinerary",
    secondary: [
      "turkey itinerary 10 days",
      "private turkey itinerary",
      "best turkey itinerary",
      "custom turkey trip",
      "turkey tour itinerary",
    ],
    volume: "H",
  },
  guides: {
    focus: "turkey travel guide",
    secondary: [
      "best time to visit turkey",
      "how to plan a trip to turkey",
      "private turkey trip",
      "turkey travel tips",
    ],
    volume: "H",
  },
  howItWorks: {
    focus: "how private turkey tours work",
    secondary: [
      "book private turkey tour",
      "custom turkey tour process",
      "private tour turkey planning",
    ],
    volume: "L",
  },
  planYourTrip: {
    focus: "plan a trip to turkey",
    secondary: [
      "plan private turkey trip",
      "book private turkey tour",
      "custom turkey itinerary",
      "turkey trip planner",
    ],
    volume: "H",
  },
  about: {
    focus: "private turkey tour company",
    secondary: [
      "bespoke turkey travel designer",
      "local turkey tour operator",
      "private guided turkey tours",
    ],
    volume: "L",
  },
  faq: {
    focus: "private turkey tour faq",
    secondary: [
      "private turkey tour cost",
      "private turkey tour inclusions",
      "is a private turkey tour worth it",
    ],
    volume: "L",
  },
  contact: {
    focus: "contact private turkey tour",
    secondary: [
      "enquire private turkey tour",
      "turkey tour operator contact",
    ],
    volume: "L",
  },
  istanbul: {
    focus: "private istanbul tour",
    secondary: [
      "istanbul private guide",
      "private guided istanbul tour",
      "istanbul walking tour private",
      "best private tour istanbul",
      "istanbul bosphorus private tour",
    ],
    volume: "H",
  },
  cappadocia: {
    focus: "private cappadocia tour",
    secondary: [
      "cappadocia private guide",
      "cappadocia hot air balloon",
      "private balloon tour cappadocia",
      "cappadocia cave hotel tour",
      "goreme private tour",
    ],
    volume: "H",
  },
  ephesus: {
    focus: "private ephesus tour",
    secondary: [
      "ephesus private guide",
      "ephesus tour from kusadasi",
      "private guided ephesus",
      "ephesus and virgin mary tour",
      "aegean turkey private tour",
    ],
    volume: "M",
  },
  turquoiseCoast: {
    focus: "turquoise coast turkey",
    secondary: [
      "private turquoise coast tour",
      "fethiye private tour",
      "kas private tour",
      "turkey mediterranean coast",
      "private gulet cruise turkey",
    ],
    volume: "M",
  },
  itinerary7: {
    focus: "7 day turkey itinerary",
    secondary: [
      "istanbul cappadocia tour",
      "7 day turkey tour",
      "one week turkey itinerary",
      "istanbul and cappadocia private tour",
      "7 days in turkey",
    ],
    volume: "H",
  },
  itinerary10: {
    focus: "10 day turkey itinerary",
    secondary: [
      "turkey itinerary 10 days",
      "10 day turkey tour",
      "istanbul cappadocia ephesus itinerary",
      "best 10 day turkey itinerary",
      "two week turkey itinerary short",
    ],
    volume: "H",
  },
  itinerary14: {
    focus: "14 day turkey itinerary",
    secondary: [
      "two week turkey itinerary",
      "14 day turkey tour",
      "grand turkey tour",
      "turkey itinerary 2 weeks",
      "istanbul to turquoise coast itinerary",
    ],
    volume: "M",
  },
  bestTime: {
    focus: "best time to visit turkey",
    secondary: [
      "best month to visit turkey",
      "turkey weather by month",
      "when to visit cappadocia",
      "best time for turkey tour",
      "turkey shoulder season",
    ],
    volume: "VH",
  },
  howToPlan: {
    focus: "how to plan a trip to turkey",
    secondary: [
      "how to plan a private turkey trip",
      "turkey trip planning",
      "planning a turkey vacation",
      "turkey travel itinerary planner",
    ],
    volume: "H",
  },
  privateVsGroup: {
    focus: "private vs group turkey tours",
    secondary: [
      "private or group tour turkey",
      "is a private turkey tour worth it",
      "turkey group tour vs private",
      "custom vs package turkey tour",
    ],
    volume: "M",
  },
  balloon: {
    focus: "cappadocia hot air balloon",
    secondary: [
      "cappadocia balloon ride",
      "hot air balloon cappadocia",
      "cappadocia balloon cost",
      "best balloon tour cappadocia",
      "cappadocia sunrise balloon",
    ],
    volume: "VH",
  },
  foodTour: {
    focus: "istanbul food tour",
    secondary: [
      "private istanbul food tour",
      "istanbul culinary tour",
      "kadikoy food tour",
      "istanbul street food tour",
      "best food tour istanbul",
    ],
    volume: "H",
  },
  gulet: {
    focus: "private gulet cruise turkey",
    secondary: [
      "gulet cruise turkey",
      "turkey yacht charter",
      "fethiye gulet cruise",
      "gocek private boat",
      "turquoise coast yacht",
    ],
    volume: "M",
  },
  honeymoon: {
    focus: "turkey honeymoon",
    secondary: [
      "honeymoon in turkey",
      "turkey honeymoon packages",
      "romantic turkey itinerary",
      "cappadocia honeymoon",
      "private honeymoon turkey",
    ],
    volume: "H",
  },
  family: {
    focus: "family turkey tour",
    secondary: [
      "turkey family vacation",
      "private family tour turkey",
      "turkey with kids",
      "family friendly turkey itinerary",
      "best family tour turkey",
    ],
    volume: "M",
  },
  pamukkale: {
    focus: "pamukkale turkey",
    secondary: [
      "private pamukkale tour",
      "pamukkale and hierapolis",
      "pamukkale from denizli",
      "cotton castle turkey",
      "pamukkale day trip",
    ],
    volume: "VH",
  },
  tourCost: {
    focus: "private turkey tour cost",
    secondary: [
      "how much does a private turkey tour cost",
      "turkey private tour prices",
      "cost of private tour turkey",
      "luxury turkey tour cost",
      "private turkey tour budget",
    ],
    volume: "H",
  },
  experiences: {
    focus: "turkey experiences",
    secondary: [
      "cappadocia hot air balloon",
      "istanbul food tour",
      "private gulet cruise turkey",
      "best things to do in turkey",
    ],
    volume: "H",
  },
} as const satisfies Record<string, KeywordSet>;

export function keywordList(set: KeywordSet): string[] {
  return [set.focus, ...set.secondary];
}
