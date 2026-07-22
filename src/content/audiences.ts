import { pageKeywords } from "@/content/keywords";
import type { Audience } from "@/content/types";

export const audiences: Audience[] = [
  {
    slug: "honeymoon",
    name: "Honeymoon",
    focusKeyword: pageKeywords.honeymoon.focus,
    secondaryKeywords: [...pageKeywords.honeymoon.secondary],
    title: "Turkey Honeymoon: Private Romantic Itineraries",
    description:
      "Plan a Turkey honeymoon with private guides, cave suites, coastal privacy, and romantic evenings—from Istanbul to Cappadocia and the Turquoise Coast.",
    answer:
      "A Turkey honeymoon works best as a private journey: quieter stays, flexible pacing, and romantic chapters in Istanbul, Cappadocia (optional balloon), and the Turquoise Coast—without group schedules or coach circuits.",
    image: "/coast.jpg",
    highlights: [
      "Cave suites and boutique Istanbul stays",
      "Optional Cappadocia sunrise balloon",
      "Private dinners and coastal boat days",
      "Pace designed for two, not a group clock",
    ],
    sections: [
      {
        heading: "Why Turkey is strong for honeymoons",
        body: "Turkey honeymoon travelers get culture and coast in one country: Bosphorus evenings, Cappadocia cave hotels, and Mediterranean coves. Privately, you control how social or secluded each day feels—and you never share a coach with twenty strangers on your honeymoon week.",
      },
      {
        heading: "Classic romantic Turkey itinerary shapes",
        body: "Popular private honeymoon routes: 7 days Istanbul + Cappadocia; 10 days adding Ephesus; 14 days finishing with a private gulet cruise or Kaş/Fethiye stay. We tune room categories, dinner reservations, and photo stops around celebration energy—not checklist tourism.",
      },
      {
        heading: "Privacy details that matter",
        body: "We flag hotels with quiet room locations, suggest private transfers over shared shuttles, and build recovery mornings after late dinners or early balloons. A Turkey honeymoon should feel designed, not merely upgraded.",
      },
    ],
    faqs: [
      {
        question: "How many days for a Turkey honeymoon?",
        answer:
          "Seven days works for Istanbul and Cappadocia. Ten to fourteen days let you add Ephesus and the Turquoise Coast without rushing romantic evenings.",
      },
      {
        question: "Is Cappadocia good for a honeymoon?",
        answer:
          "Yes—especially with a cave suite and optional balloon morning. Pair it with Istanbul or the coast so the trip has both atmosphere and recovery time.",
      },
      {
        question: "Can you arrange surprise dinners or proposals?",
        answer:
          "Yes. Share the moment you want to create and we coordinate tables, viewpoints, or private boat timing discreetly.",
      },
    ],
    related: [
      {
        title: "Private Gulet Cruise",
        href: "/experiences/gulet-cruise",
        description: "Mediterranean privacy for two.",
      },
      {
        title: "Cappadocia Hot Air Balloon",
        href: "/experiences/cappadocia-hot-air-balloon",
        description: "Sunrise over the valleys, when weather allows.",
      },
      {
        title: "14 Day Grand Itinerary",
        href: "/itineraries/14-day-grand",
        description: "Culture plus coast for a longer honeymoon.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "family",
    name: "Family",
    focusKeyword: pageKeywords.family.focus,
    secondaryKeywords: [...pageKeywords.family.secondary],
    title: "Family Turkey Tour: Private Trips Designed for Kids & Parents",
    description:
      "Book a private family Turkey tour with flexible pacing, shorter ruin visits, trusted guides, and logistics that work for mixed ages.",
    answer:
      "A private family Turkey tour replaces rigid group schedules with nap-friendly timing, age-aware guiding, and day plans that mix icons with recovery—so Turkey with kids feels adventurous without becoming exhausting.",
    image: "/istanbul.jpg",
    highlights: [
      "Flexible starts and snack-friendly days",
      "Shorter Ephesus and museum blocks",
      "Family-ready hotels and room connecting options",
      "Private vehicle space for bags and energy swings",
    ],
    sections: [
      {
        heading: "Why private works better for families in Turkey",
        body: "Group coaches do not pause for toddler meltdowns or teen boredom. A private family Turkey tour lets you shorten ruin visits, add playground or ice-cream resets, and keep evenings early when needed—while still seeing Istanbul, Cappadocia, and beyond.",
      },
      {
        heading: "Best family-friendly Turkey itinerary lengths",
        body: "Seven days (Istanbul + Cappadocia) suits first family trips. Ten days can add Ephesus with shade breaks. Fourteen days work when you want coast swimming days after cultural chapters. We avoid stacking too many internal flights with young children.",
      },
      {
        heading: "Practical Turkey-with-kids details we handle",
        body: "Car seats when required, connecting rooms, dietary notes, and guides who can switch storytelling register for ages. Balloon eligibility varies by operator—we confirm rules before promising a Cappadocia sunrise flight.",
      },
    ],
    faqs: [
      {
        question: "What ages work best for a family Turkey tour?",
        answer:
          "Most private family itineraries work from roughly age 5 upward. Younger children are possible with more hotel downtime and fewer long transfer days—tell us ages and we shape honestly.",
      },
      {
        question: "Is Ephesus too much for kids?",
        answer:
          "Not when private. We keep visits shorter, bring water and shade stops, and pair ruins with a village lunch or coast overnight so the day does not feel like a lecture marathon.",
      },
      {
        question: "Can grandparents join a multi-gen trip?",
        answer:
          "Yes. Private vehicles and flexible pacing are ideal for multi-generation Turkey travel—some explore while others rest without splitting the whole group’s schedule.",
      },
    ],
    related: [
      {
        title: "7 Day Classic",
        href: "/itineraries/7-day-classic",
        description: "A compact family-friendly private loop.",
      },
      {
        title: "Private vs Group",
        href: "/guides/private-vs-group-turkey-tours",
        description: "Why families usually prefer private pacing.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Share ages and dates for a first outline.",
      },
    ],
    updatedAt: "2026-07-22",
  },
];

export function getAudience(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}

export function getAudienceSlugs() {
  return audiences.map((audience) => audience.slug);
}
