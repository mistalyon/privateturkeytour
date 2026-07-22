import { pageKeywords } from "@/content/keywords";
import type { Itinerary } from "@/content/types";

export const itineraries: Itinerary[] = [
  {
    slug: "7-day-classic",
    name: "7-Day Classic Private Turkey",
    days: 7,
    focusKeyword: pageKeywords.itinerary7.focus,
    secondaryKeywords: [...pageKeywords.itinerary7.secondary],
    title: "7 Day Turkey Itinerary: Istanbul & Cappadocia Private Tour",
    description:
      "A focused 7 day Turkey itinerary through Istanbul and Cappadocia—the classic Istanbul Cappadocia tour when time is limited but the experience must feel unhurried.",
    answer:
      "A 7 day Turkey itinerary typically spends three nights in Istanbul and three in Cappadocia, with private guides, handpicked stays, and door-to-door transfers—ideal for a one-week Istanbul and Cappadocia private tour.",
    image: "/istanbul.jpg",
    whoFor:
      "First-time visitors with about a week, couples, and travelers searching for a compact Istanbul Cappadocia tour without a rushed group pace.",
    includes: [
      "Private guides in Istanbul and Cappadocia",
      "Boutique or cave hotel recommendations",
      "Airport and intercity private transfers or flights",
      "Flexible daily timing with a local designer",
    ],
    daysOutline: [
      {
        day: "Day 1",
        title: "Arrive Istanbul",
        body: "Private airport welcome, settle into your hotel, and an easy first evening by the Bosphorus.",
      },
      {
        day: "Days 2–3",
        title: "Private Istanbul",
        body: "Old City highlights with a licensed guide, then neighborhoods, food, and viewpoints at your pace.",
      },
      {
        day: "Day 4",
        title: "Fly to Cappadocia",
        body: "Morning flight inland, cave hotel check-in, and a sunset viewpoint without a coach convoy.",
      },
      {
        day: "Days 5–6",
        title: "Valleys & underground cities",
        body: "Private valley time, optional balloon morning, and underground cities timed for comfort.",
      },
      {
        day: "Day 7",
        title: "Departure",
        body: "Private transfer to the airport, or extend toward Ephesus and the coast.",
      },
    ],
    faqs: [
      {
        question: "Is a 7 day Turkey itinerary enough?",
        answer:
          "For a focused private journey yes—especially an Istanbul Cappadocia tour. Longer trips unlock Ephesus and the Turquoise Coast.",
      },
      {
        question: "Can this 7 day Turkey tour be customized?",
        answer:
          "Every private Turkey tour we design is custom. Days can lean more toward food, photography, family pacing, or quieter museums.",
      },
      {
        question: "Is this the best Istanbul and Cappadocia private tour length?",
        answer:
          "Seven days is the sweet spot for many first-timers: enough nights in each place without forcing a coach-group pace across more regions.",
      },
    ],
    related: [
      {
        title: "10-Day Classic Private Turkey",
        href: "/itineraries/10-day-classic",
        description: "Add Ephesus for a fuller arc.",
      },
      {
        title: "Istanbul",
        href: "/destinations/istanbul",
        description: "Deep dive into the opening chapter.",
      },
      {
        title: "Cappadocia",
        href: "/destinations/cappadocia",
        description: "Valleys, balloons, and cave stays.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "10-day-classic",
    name: "10-Day Classic Private Turkey",
    days: 10,
    focusKeyword: pageKeywords.itinerary10.focus,
    secondaryKeywords: [...pageKeywords.itinerary10.secondary],
    title: "10 Day Turkey Itinerary: Istanbul, Cappadocia & Ephesus",
    description:
      "The best 10 day Turkey itinerary for first-timers—Istanbul, Cappadocia, and Ephesus in one private journey with licensed guides and boutique stays.",
    answer:
      "A 10 day Turkey itinerary usually combines Istanbul, Cappadocia, and Ephesus with private guides, short flights, and boutique stays—the most requested tailor-made Turkey tour for first-time visitors.",
    image: "/cappadocia.jpg",
    whoFor:
      "Travelers who want Turkey's three signature chapters in a classic 10-day Turkey itinerary without feeling locked into a group departure.",
    includes: [
      "Private guiding in each region",
      "Boutique hotels and cave stays",
      "Domestic flights and private transfers",
      "Ongoing in-country care from your travel designer",
    ],
    daysOutline: [
      {
        day: "Days 1–3",
        title: "Istanbul",
        body: "Landmarks, neighborhoods, and food—shaped around how much walking and museum time you enjoy.",
      },
      {
        day: "Days 4–6",
        title: "Cappadocia",
        body: "Valley walks, optional balloon, underground cities, and evenings in a cave hotel.",
      },
      {
        day: "Days 7–9",
        title: "Ephesus & Aegean",
        body: "Private Ephesus with a specialist guide, village lunch, and an Aegean overnight.",
      },
      {
        day: "Day 10",
        title: "Depart",
        body: "Fly home from Izmir or Istanbul, or extend to the Turquoise Coast.",
      },
    ],
    faqs: [
      {
        question: "Why is the 10 day Turkey itinerary so popular?",
        answer:
          "It covers Turkey's three most requested regions with enough nights to breathe—without requiring a full two-week turkey itinerary.",
      },
      {
        question: "What does a turkey itinerary 10 days usually include?",
        answer:
          "Private guides, boutique or cave hotels, domestic flights between regions, airport transfers, and a designer who adjusts daily timing around your energy.",
      },
      {
        question: "Do you include hotels in the 10 day Turkey tour quote?",
        answer:
          "Yes. We propose stays by style and budget, then refine after you share preferences for design, quiet, and location.",
      },
    ],
    related: [
      {
        title: "14-Day Grand Private Turkey",
        href: "/itineraries/14-day-grand",
        description: "Add the Mediterranean coastline.",
      },
      {
        title: "Ephesus",
        href: "/destinations/ephesus",
        description: "Why private timing matters at the ruins.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Tell us your dates and we shape the first draft.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "14-day-grand",
    name: "14-Day Grand Private Turkey",
    days: 14,
    focusKeyword: pageKeywords.itinerary14.focus,
    secondaryKeywords: [...pageKeywords.itinerary14.secondary],
    title: "14 Day Turkey Itinerary: Two-Week Grand Private Tour",
    description:
      "A 14 day Turkey itinerary from Istanbul to Cappadocia, Ephesus, and the Turquoise Coast—the classic two week Turkey itinerary for travelers who want depth.",
    answer:
      "A 14 day Turkey itinerary typically moves from Istanbul to Cappadocia, Ephesus, and the Turquoise Coast, with private guides, boutique stays, and optional boat days on a grand Turkey tour pace.",
    image: "/coast.jpg",
    whoFor:
      "Travelers with two weeks who want icons, landscapes, archaeology, and Mediterranean time in one coherent two-week Turkey itinerary.",
    includes: [
      "Full regional coverage with private guiding",
      "Handpicked boutique and coastal stays",
      "Flights, transfers, and optional private boat day",
      "Dedicated designer from first brief to departure",
    ],
    daysOutline: [
      {
        day: "Days 1–4",
        title: "Istanbul",
        body: "A deeper city chapter: Old City, Asian side, food, and a quieter evening rhythm.",
      },
      {
        day: "Days 5–7",
        title: "Cappadocia",
        body: "Valleys, optional balloon, underground cities, and space to photograph without rushing.",
      },
      {
        day: "Days 8–10",
        title: "Ephesus & Aegean",
        body: "Specialist guiding at Ephesus and an Aegean pause before the coast.",
      },
      {
        day: "Days 11–14",
        title: "Turquoise Coast",
        body: "Swimming coves, coastal towns, and an optional private boat day before departure.",
      },
    ],
    faqs: [
      {
        question: "Is a 14 day Turkey itinerary too long for a first trip?",
        answer:
          "For many travelers a two week Turkey itinerary is ideal. The extra nights remove the feeling of packing icons into every daylight hour.",
      },
      {
        question: "Can you design a honeymoon version of this grand Turkey tour?",
        answer:
          "Yes. We emphasize quieter stays, private dinners, and coastal privacy while keeping cultural depth.",
      },
      {
        question: "How does a 14 day Turkey tour differ from 10 days?",
        answer:
          "You gain the Turquoise Coast—swimming, boat days, and Mediterranean evenings—plus extra nights that make Istanbul and Cappadocia feel less compressed.",
      },
    ],
    related: [
      {
        title: "Turquoise Coast",
        href: "/destinations/turquoise-coast",
        description: "How private coastal days feel.",
      },
      {
        title: "Private Turkey Tours",
        href: "/private-turkey-tours",
        description: "Audience styles and design philosophy.",
      },
      {
        title: "How it works",
        href: "/how-it-works",
        description: "From first conversation to arrival.",
      },
    ],
    updatedAt: "2026-07-22",
  },
];

export function getItinerary(slug: string) {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

export function getItinerarySlugs() {
  return itineraries.map((itinerary) => itinerary.slug);
}
