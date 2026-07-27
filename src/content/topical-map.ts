/**
 * Topical map for SEO + GEO (LLM / answer engines).
 * Pillar = money / authority hub. Clusters = supporting spokes.
 * Keep English-only; sales-led private-tour framing.
 */

export type TopicalNode = {
  slug: string;
  title: string;
  href: string;
  focusKeyword: string;
  role: "pillar" | "cluster" | "support";
};

export type TopicalCluster = {
  id: string;
  name: string;
  intent: string;
  pillar: TopicalNode;
  spokes: TopicalNode[];
};

export const topicalClusters: TopicalCluster[] = [
  {
    id: "private-tours",
    name: "Private Turkey Tours",
    intent: "Buy / enquire about a tailor-made private Turkey tour",
    pillar: {
      slug: "private-turkey-tours",
      title: "Private Turkey Tours",
      href: "/private-turkey-tours",
      focusKeyword: "private turkey tours",
      role: "pillar",
    },
    spokes: [
      {
        slug: "honeymoon",
        title: "Turkey Honeymoon",
        href: "/private-turkey-tours/honeymoon",
        focusKeyword: "turkey honeymoon",
        role: "cluster",
      },
      {
        slug: "family",
        title: "Family Turkey Tour",
        href: "/private-turkey-tours/family",
        focusKeyword: "family turkey tour",
        role: "cluster",
      },
      {
        slug: "luxury",
        title: "Luxury Turkey Tour",
        href: "/private-turkey-tours/luxury",
        focusKeyword: "luxury turkey tour",
        role: "cluster",
      },
      {
        slug: "christmas-new-year",
        title: "Christmas & New Year Turkey",
        href: "/private-turkey-tours/christmas-new-year",
        focusKeyword: "turkey christmas new year tour",
        role: "cluster",
      },
      {
        slug: "how-it-works",
        title: "How Private Turkey Tours Work",
        href: "/how-it-works",
        focusKeyword: "how private turkey tours work",
        role: "support",
      },
      {
        slug: "tour-cost",
        title: "Private Turkey Tour Cost",
        href: "/guides/private-turkey-tour-cost",
        focusKeyword: "private turkey tour cost",
        role: "support",
      },
      {
        slug: "private-vs-group",
        title: "Private vs Group Turkey Tours",
        href: "/guides/private-vs-group-turkey-tours",
        focusKeyword: "private vs group turkey tours",
        role: "support",
      },
    ],
  },
  {
    id: "destinations",
    name: "Turkey Destinations",
    intent: "Choose where to go on a private Turkey itinerary",
    pillar: {
      slug: "destinations",
      title: "Turkey Destinations",
      href: "/destinations",
      focusKeyword: "turkey destinations",
      role: "pillar",
    },
    spokes: [
      {
        slug: "istanbul",
        title: "Private Istanbul Tour",
        href: "/destinations/istanbul",
        focusKeyword: "private istanbul tour",
        role: "cluster",
      },
      {
        slug: "cappadocia",
        title: "Private Cappadocia Tour",
        href: "/destinations/cappadocia",
        focusKeyword: "private cappadocia tour",
        role: "cluster",
      },
      {
        slug: "ephesus",
        title: "Private Ephesus Tour",
        href: "/destinations/ephesus",
        focusKeyword: "private ephesus tour",
        role: "cluster",
      },
      {
        slug: "pamukkale",
        title: "Pamukkale Turkey",
        href: "/destinations/pamukkale",
        focusKeyword: "pamukkale turkey",
        role: "cluster",
      },
      {
        slug: "turquoise-coast",
        title: "Turquoise Coast Turkey",
        href: "/destinations/turquoise-coast",
        focusKeyword: "turquoise coast turkey",
        role: "cluster",
      },
      {
        slug: "antalya",
        title: "Private Antalya Tour",
        href: "/destinations/antalya",
        focusKeyword: "private antalya tour",
        role: "cluster",
      },
      {
        slug: "gallipoli-troy",
        title: "Gallipoli & Troy Tour",
        href: "/destinations/gallipoli-troy",
        focusKeyword: "gallipoli and troy tour",
        role: "cluster",
      },
      {
        slug: "bodrum",
        title: "Private Bodrum Tour",
        href: "/destinations/bodrum",
        focusKeyword: "private bodrum tour",
        role: "cluster",
      },
    ],
  },
  {
    id: "itineraries",
    name: "Turkey Itineraries",
    intent: "Pick trip length and sequence for a private journey",
    pillar: {
      slug: "itineraries",
      title: "Turkey Itinerary",
      href: "/itineraries",
      focusKeyword: "turkey itinerary",
      role: "pillar",
    },
    spokes: [
      {
        slug: "7-day",
        title: "7 Day Turkey Itinerary",
        href: "/itineraries/7-day-classic",
        focusKeyword: "7 day turkey itinerary",
        role: "cluster",
      },
      {
        slug: "10-day",
        title: "10 Day Turkey Itinerary",
        href: "/itineraries/10-day-classic",
        focusKeyword: "10 day turkey itinerary",
        role: "cluster",
      },
      {
        slug: "14-day",
        title: "14 Day Turkey Itinerary",
        href: "/itineraries/14-day-grand",
        focusKeyword: "14 day turkey itinerary",
        role: "cluster",
      },
      {
        slug: "3-day-ist-cap",
        title: "3-Day Istanbul & Cappadocia",
        href: "/itineraries/istanbul-cappadocia-3-day",
        focusKeyword: "istanbul cappadocia tour",
        role: "cluster",
      },
      {
        slug: "5-day-ist-cap",
        title: "5-Day Istanbul & Cappadocia",
        href: "/itineraries/istanbul-cappadocia-5-day",
        focusKeyword: "istanbul and cappadocia private tour",
        role: "cluster",
      },
      {
        slug: "gallipoli-troy-2-day",
        title: "2-Day Gallipoli & Troy",
        href: "/itineraries/gallipoli-troy-2-day",
        focusKeyword: "gallipoli troy itinerary",
        role: "cluster",
      },
      {
        slug: "how-to-plan",
        title: "How to Plan a Private Turkey Trip",
        href: "/guides/how-to-plan-a-private-turkey-trip",
        focusKeyword: "how to plan a trip to turkey",
        role: "support",
      },
    ],
  },
  {
    id: "experiences",
    name: "Signature Experiences",
    intent: "Add high-intent experiences to a private tour",
    pillar: {
      slug: "experiences",
      title: "Turkey Experiences",
      href: "/experiences",
      focusKeyword: "turkey experiences",
      role: "pillar",
    },
    spokes: [
      {
        slug: "balloon",
        title: "Cappadocia Hot Air Balloon",
        href: "/experiences/cappadocia-hot-air-balloon",
        focusKeyword: "cappadocia hot air balloon",
        role: "cluster",
      },
      {
        slug: "food-tour",
        title: "Istanbul Food Tour",
        href: "/experiences/istanbul-food-tour",
        focusKeyword: "istanbul food tour",
        role: "cluster",
      },
      {
        slug: "gulet",
        title: "Private Gulet Cruise",
        href: "/experiences/gulet-cruise",
        focusKeyword: "private gulet cruise turkey",
        role: "cluster",
      },
      {
        slug: "bosphorus",
        title: "Private Bosphorus Cruise",
        href: "/experiences/private-bosphorus-cruise",
        focusKeyword: "private bosphorus cruise",
        role: "cluster",
      },
      {
        slug: "ephesus-kusadasi",
        title: "Ephesus from Kuşadası",
        href: "/experiences/ephesus-tour-from-kusadasi",
        focusKeyword: "ephesus tour from kusadasi",
        role: "cluster",
      },
      {
        slug: "jeep-safari",
        title: "Cappadocia Jeep Safari",
        href: "/experiences/cappadocia-jeep-safari",
        focusKeyword: "cappadocia jeep safari",
        role: "cluster",
      },
      {
        slug: "pamukkale-from-antalya",
        title: "Pamukkale from Antalya",
        href: "/experiences/pamukkale-day-trip-from-antalya",
        focusKeyword: "pamukkale day trip from antalya",
        role: "cluster",
      },
      {
        slug: "cappadocia-from-antalya",
        title: "Cappadocia from Antalya",
        href: "/experiences/cappadocia-day-trip-from-antalya",
        focusKeyword: "cappadocia day trip from antalya",
        role: "cluster",
      },
      {
        slug: "princes-islands",
        title: "Princes’ Islands Tour",
        href: "/experiences/princes-islands-tour",
        focusKeyword: "princes islands tour from istanbul",
        role: "cluster",
      },
      {
        slug: "bursa-day-trip",
        title: "Bursa Day Trip",
        href: "/experiences/bursa-day-trip-from-istanbul",
        focusKeyword: "bursa day trip from istanbul",
        role: "cluster",
      },
      {
        slug: "cooking-class",
        title: "Istanbul Cooking Class",
        href: "/experiences/istanbul-cooking-class",
        focusKeyword: "istanbul cooking class",
        role: "cluster",
      },
    ],
  },
  {
    id: "services",
    name: "Private Travel Services",
    intent: "Book high-intent add-ons and VIP logistics that convert to revenue",
    pillar: {
      slug: "services",
      title: "Private Turkey Travel Services",
      href: "/services",
      focusKeyword: "private turkey travel services",
      role: "pillar",
    },
    spokes: [
      {
        slug: "airport-transfer",
        title: "Istanbul Airport Transfer",
        href: "/services/istanbul-airport-transfer",
        focusKeyword: "istanbul private airport transfer",
        role: "cluster",
      },
      {
        slug: "yacht",
        title: "Private Yacht Turkey",
        href: "/services/private-yacht-turkey",
        focusKeyword: "private yacht turkey",
        role: "cluster",
      },
      {
        slug: "golf",
        title: "Turkey Golf Holiday",
        href: "/services/turkey-golf",
        focusKeyword: "turkey golf holiday",
        role: "cluster",
      },
      {
        slug: "helicopter",
        title: "Private Helicopter Turkey",
        href: "/services/private-helicopter-turkey",
        focusKeyword: "private helicopter turkey",
        role: "cluster",
      },
      {
        slug: "private-jet",
        title: "Private Jet Turkey",
        href: "/services/private-jet-turkey",
        focusKeyword: "private jet turkey",
        role: "cluster",
      },
    ],
  },
  {
    id: "guides",
    name: "Turkey Travel Guides",
    intent: "Answer planning questions before booking a private tour",
    pillar: {
      slug: "guides",
      title: "Turkey Travel Guide",
      href: "/guides",
      focusKeyword: "turkey travel guide",
      role: "pillar",
    },
    spokes: [
      {
        slug: "best-time",
        title: "Best Time to Visit Turkey",
        href: "/guides/best-time-to-visit-turkey",
        focusKeyword: "best time to visit turkey",
        role: "cluster",
      },
      {
        slug: "may",
        title: "Turkey in May",
        href: "/guides/turkey-in-may",
        focusKeyword: "turkey in may",
        role: "cluster",
      },
      {
        slug: "september",
        title: "Turkey in September",
        href: "/guides/turkey-in-september",
        focusKeyword: "turkey in september",
        role: "cluster",
      },
      {
        slug: "october",
        title: "Turkey in October",
        href: "/guides/turkey-in-october",
        focusKeyword: "turkey in october",
        role: "cluster",
      },
      {
        slug: "winter",
        title: "Turkey in Winter",
        href: "/guides/turkey-in-winter",
        focusKeyword: "turkey in winter",
        role: "cluster",
      },
      {
        slug: "things-istanbul",
        title: "Things to Do in Istanbul",
        href: "/guides/things-to-do-in-istanbul",
        focusKeyword: "things to do in istanbul",
        role: "cluster",
      },
      {
        slug: "things-cappadocia",
        title: "Things to Do in Cappadocia",
        href: "/guides/things-to-do-in-cappadocia",
        focusKeyword: "things to do in cappadocia",
        role: "cluster",
      },
      {
        slug: "things-ephesus",
        title: "Things to Do in Ephesus",
        href: "/guides/things-to-do-in-ephesus",
        focusKeyword: "things to do in ephesus",
        role: "cluster",
      },
      {
        slug: "pamukkale-day-trip",
        title: "Pamukkale Day Trip",
        href: "/guides/pamukkale-day-trip",
        focusKeyword: "pamukkale day trip",
        role: "cluster",
      },
    ],
  },
];

export function topicalMapForLlms() {
  return topicalClusters
    .map((cluster) => {
      const lines = [
        `### ${cluster.name}`,
        `Intent: ${cluster.intent}`,
        `Pillar: [${cluster.pillar.title}](https://privateturkeytour.com${cluster.pillar.href}) — focus: ${cluster.pillar.focusKeyword}`,
        "Spokes:",
        ...cluster.spokes.map(
          (s) =>
            `- [${s.title}](https://privateturkeytour.com${s.href}) — ${s.focusKeyword}`,
        ),
      ];
      return lines.join("\n");
    })
    .join("\n\n");
}
