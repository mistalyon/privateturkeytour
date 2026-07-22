import { pageKeywords } from "@/content/keywords";
import type { Destination } from "@/content/types";

export const destinations: Destination[] = [
  {
    slug: "istanbul",
    name: "Istanbul",
    note: "Where continents meet",
    image: "/istanbul.jpg",
    wide: true,
    focusKeyword: pageKeywords.istanbul.focus,
    secondaryKeywords: [...pageKeywords.istanbul.secondary],
    title: "Private Istanbul Tour with Local Guide",
    description:
      "Book a private Istanbul tour with a licensed local guide—Old City icons, Bosphorus neighborhoods, food walks, and quiet corners at your pace.",
    answer:
      "A private Istanbul tour pairs a licensed private guide with flexible timing and door-to-door transfers so you can experience Hagia Sophia, Topkapı, the Bosphorus, and local neighborhoods without group schedules.",
    bestTime:
      "April–June and September–November are the best months for a private Istanbul tour—mild walking weather and softer light.",
    highlights: [
      "Old City with quieter entry timing",
      "Bosphorus neighborhoods and waterfront dining",
      "Asian-side discovery beyond the classic circuit",
      "Private food walks and specialist guides",
    ],
    sections: [
      {
        heading: "Why choose a private Istanbul tour?",
        body: "Istanbul rewards slow mornings, early museum entries, and time to sit with a view. A private guided Istanbul tour lets you skip rigid coach circuits and move between continents with a designer who knows which hours feel calmest.",
      },
      {
        heading: "Signature experiences on a private guided Istanbul tour",
        body: "Pair Hagia Sophia and Topkapı with a specialist guide, then leave the Old City for Karaköy, Balat, or Kadıköy. Add a private Bosphorus crossing, a culinary walk, or an evening at a carefully chosen table overlooking the water.",
      },
      {
        heading: "How long should a private Istanbul tour last?",
        body: "Three focused days cover the essentials. Five days allow neighborhoods, food, and a day trip. Many private Turkey tours begin or end with a private Istanbul tour and connect onward to Cappadocia or the Aegean.",
      },
    ],
    faqs: [
      {
        question: "Do I need a private guide in Istanbul?",
        answer:
          "Not required, but a licensed private Istanbul guide transforms crowded icons into coherent stories and helps you move efficiently between sites, ferries, and neighborhoods.",
      },
      {
        question: "What is included in a private Istanbul tour?",
        answer:
          "Typically a licensed guide, private vehicle where useful, timed entries for major sites, and a day plan shaped around your interests—food, history, photography, or family pacing.",
      },
      {
        question: "Can a private Istanbul tour include food and neighborhoods?",
        answer:
          "Yes. Most travelers mix landmarks with markets, baklava counters, Asian-side walks, and local restaurants selected for quality—not tourist volume.",
      },
      {
        question: "Is Istanbul a good start for a wider private Turkey tour?",
        answer:
          "It is the most common starting point. From Istanbul you can fly to Cappadocia or continue by private transfer toward Ephesus and the Turquoise Coast.",
      },
    ],
    related: [
      {
        title: "10-Day Classic Private Turkey",
        href: "/itineraries/10-day-classic",
        description: "Istanbul, Cappadocia, and Ephesus in one private journey.",
      },
      {
        title: "How to plan a private Turkey trip",
        href: "/guides/how-to-plan-a-private-turkey-trip",
        description: "A practical framework before you lock dates.",
      },
      {
        title: "Private Turkey Tours",
        href: "/private-turkey-tours",
        description: "How bespoke journeys across Türkiye are designed.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    note: "Valleys shaped by time",
    image: "/cappadocia.jpg",
    focusKeyword: pageKeywords.cappadocia.focus,
    secondaryKeywords: [...pageKeywords.cappadocia.secondary],
    title: "Private Cappadocia Tour & Balloon Experiences",
    description:
      "Design a private Cappadocia tour with valley walks, cave hotels, underground cities, and optional Cappadocia hot air balloon mornings—at your pace.",
    answer:
      "A private Cappadocia tour combines valley hiking or scenic drives, underground cities, cave hotels, and optional Cappadocia hot air balloon mornings with a local private guide and driver.",
    bestTime:
      "April–June and September–October are best for a private Cappadocia tour—stronger balloon weather and comfortable hiking.",
    highlights: [
      "Sunrise balloon mornings when conditions allow",
      "Private valley walks without coach groups",
      "Underground cities with timed entries",
      "Cave hotels and sunset viewpoints",
    ],
    sections: [
      {
        heading: "What makes a private Cappadocia tour different?",
        body: "The landscape is intimate by nature. A private Cappadocia tour means you choose which valleys to walk, when to pause for photographs, and whether balloons, horses, or underground cities sit at the center of your days.",
      },
      {
        heading: "Cappadocia hot air balloon: realistic expectations",
        body: "Cappadocia hot air balloon mornings depend on weather. We reserve reputable operators and plan flexible alternatives so a cancelled flight does not empty the day—sunset viewpoints, quieter valleys, and pottery or winery visits fill the gap beautifully.",
      },
      {
        heading: "How many nights for a private Cappadocia tour?",
        body: "Two to three nights suit most private itineraries. Couples often choose a cave suite; families may prefer a quieter valley base with easy private transfers.",
      },
    ],
    faqs: [
      {
        question: "Is a hot-air balloon included in every private Cappadocia tour?",
        answer:
          "Only if you want it and weather allows. We reserve reputable operators for your Cappadocia hot air balloon morning and always keep a thoughtful Plan B for grounded days.",
      },
      {
        question: "Can Cappadocia be combined with Istanbul easily?",
        answer:
          "Yes. Morning flights connect Istanbul and Cappadocia, making a seamless Istanbul and Cappadocia private tour for 7- to 14-day private Turkey itineraries.",
      },
      {
        question: "Do I need a private guide in Cappadocia?",
        answer:
          "A Cappadocia private guide helps with valley routes, underground cities, timing, and photography stops—especially valuable if it is your first visit.",
      },
    ],
    related: [
      {
        title: "Cappadocia hot air balloon",
        href: "/experiences/cappadocia-hot-air-balloon",
        description: "How we plan sunrise flights and weather backups.",
      },
      {
        title: "Best time to visit Turkey",
        href: "/guides/best-time-to-visit-turkey",
        description: "Season-by-season guidance for balloons and valleys.",
      },
      {
        title: "Istanbul private tours",
        href: "/destinations/istanbul",
        description: "Begin on the Bosphorus before flying inland.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "ephesus",
    name: "Ephesus",
    note: "Walk through antiquity",
    image: "/ephesus.jpg",
    focusKeyword: pageKeywords.ephesus.focus,
    secondaryKeywords: [...pageKeywords.ephesus.secondary],
    title: "Private Ephesus Tour with Specialist Guide",
    description:
      "Walk a private Ephesus tour with an archaeology-minded guide, then continue to Şirince, the House of the Virgin Mary, and Aegean stays.",
    answer:
      "A private Ephesus tour pairs a licensed specialist guide with early or off-peak timing so you can walk the ancient city thoughtfully, then continue to nearby villages, vineyards, or Aegean shores.",
    bestTime:
      "March–May and September–November are best for a private Ephesus tour—cooler walking temperatures and softer light on the marble.",
    highlights: [
      "Ephesus with a specialist private guide",
      "House of the Virgin Mary and Şirince",
      "Aegean food and boutique stays",
      "Easy links to Istanbul or the Turquoise Coast",
    ],
    sections: [
      {
        heading: "Why book a private Ephesus tour?",
        body: "Cruise-ship crowds can dilute the experience. A private Ephesus guide helps you enter at better hours, understand the Library of Celsus and Terrace Houses in context, and leave when the light—or the heat—says it is time.",
      },
      {
        heading: "Beyond the ruins: Aegean Turkey private days",
        body: "Combine your private Ephesus tour with Şirince's lanes, olive-oil tastings, or a quiet Aegean overnight. Many travelers weave Ephesus into a 10- or 14-day private Turkey itinerary between Cappadocia and the coast.",
      },
    ],
    faqs: [
      {
        question: "How long do I need for a private Ephesus tour?",
        answer:
          "A focused private half-day covers the core site. A full day allows Terrace Houses, nearby sanctuaries, and a village lunch without rushing.",
      },
      {
        question: "Is Ephesus suitable for families?",
        answer:
          "Yes, with shade breaks, flexible pacing, and stories pitched for younger travelers. A private Ephesus tour makes heat and fatigue easier to manage.",
      },
      {
        question: "Can you arrange an Ephesus tour from Kuşadası or Izmir?",
        answer:
          "Yes. Private transfers from Kuşadası, Selçuk, or Izmir are common, and the day plan can include the House of the Virgin Mary when wanted.",
      },
    ],
    related: [
      {
        title: "14-Day Grand Private Turkey",
        href: "/itineraries/14-day-grand",
        description: "The fuller arc including Ephesus and the coast.",
      },
      {
        title: "Turquoise Coast",
        href: "/destinations/turquoise-coast",
        description: "Continue south to private Mediterranean days.",
      },
      {
        title: "Private vs group Turkey tours",
        href: "/guides/private-vs-group-turkey-tours",
        description: "Why timing at Ephesus changes everything.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "turquoise-coast",
    name: "Turquoise Coast",
    note: "The Mediterranean, privately",
    image: "/coast.jpg",
    wide: true,
    focusKeyword: pageKeywords.turquoiseCoast.focus,
    secondaryKeywords: [...pageKeywords.turquoiseCoast.secondary],
    title: "Turquoise Coast Turkey: Private Coastal Tours",
    description:
      "Explore the Turquoise Coast Turkey on a private tour—Kaş, Fethiye, Göcek, quiet coves, and optional private gulet cruise days.",
    answer:
      "A private Turquoise Coast Turkey journey focuses on swimming coves, coastal towns like Kaş and Fethiye, archaeological day trips, and optional private gulet cruise time without fixed group departures.",
    bestTime:
      "May–June and September–early October are ideal for Turquoise Coast Turkey travel—warm seas without peak crowds.",
    highlights: [
      "Kaş, Kalkan, Fethiye, and Göcek bases",
      "Private boat days and hidden coves",
      "Lycian ruins without coach schedules",
      "Boutique hotels and slow coastal dinners",
    ],
    sections: [
      {
        heading: "What is the Turquoise Coast Turkey privately?",
        body: "It is Turkey's Mediterranean edge: pine hills meeting clear water. On a private Turquoise Coast tour you choose whether days are for swimming, sailing, markets, or ruins—and you change course when the weather is perfect.",
      },
      {
        heading: "Private gulet cruise or land-based Fethiye & Kaş?",
        body: "Some travelers want a private gulet cruise Turkey experience; others prefer boutique hotels in Fethiye or Kaş with day boats. We design either path, or a blend, based on comfort, seasickness tolerance, and how social you want evenings to feel.",
      },
    ],
    faqs: [
      {
        question: "Can the Turquoise Coast be combined with Cappadocia and Istanbul?",
        answer:
          "Yes. Classic private itineraries often move Istanbul → Cappadocia → Ephesus → Turquoise Coast Turkey, using short flights and private transfers.",
      },
      {
        question: "Is the Turquoise Coast good for honeymoons?",
        answer:
          "It is one of Turkey's strongest honeymoon regions when stays and private boat days are chosen carefully for privacy and quiet water.",
      },
      {
        question: "Should I base in Fethiye, Kaş, or Göcek?",
        answer:
          "Fethiye suits boat days and services; Kaş feels intimate and walkable; Göcek is strong for yacht and marina-focused stays. Your private designer matches the base to your pace.",
      },
    ],
    related: [
      {
        title: "14-Day Grand Private Turkey",
        href: "/itineraries/14-day-grand",
        description: "Finish with Mediterranean light and sea days.",
      },
      {
        title: "Private Turkey Tours",
        href: "/private-turkey-tours",
        description: "Audience styles from honeymoon to cultural travel.",
      },
      {
        title: "Ephesus & Aegean",
        href: "/destinations/ephesus",
        description: "Link antiquity with the coast.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "pamukkale",
    name: "Pamukkale",
    note: "White terraces & Hierapolis",
    image: "/pamukkale.jpg",
    focusKeyword: pageKeywords.pamukkale.focus,
    secondaryKeywords: [...pageKeywords.pamukkale.secondary],
    title: "Pamukkale Turkey: Private Tour to the Cotton Castle",
    description:
      "Visit Pamukkale Turkey on a private tour—white travertine terraces, Hierapolis ruins, and thermal pools with a licensed guide and flexible timing.",
    answer:
      "A private Pamukkale tour combines the white travertine terraces (the Cotton Castle), ancient Hierapolis, and optional thermal time with a guide and private transfer—usually as a day chapter linked to Ephesus, Cappadocia, or the Aegean.",
    bestTime:
      "April–June and September–November for milder walking temperatures on the terraces and Hierapolis.",
    highlights: [
      "Travertine terraces with timed private pacing",
      "Hierapolis ruins without coach rush",
      "Optional thermal pool time",
      "Easy links from Denizli, Ephesus, or Cappadocia routes",
    ],
    sections: [
      {
        heading: "Why visit Pamukkale Turkey privately?",
        body: "Pamukkale is spectacular and popular. A private Pamukkale tour helps you arrive at better hours, walk Hierapolis with context, and avoid feeling herded across the travertines. You control how long you linger for photographs versus shade.",
      },
      {
        heading: "Pamukkale and Hierapolis in one coherent day",
        body: "Most travelers want both the Cotton Castle terraces and Hierapolis. Privately, we sequence entries, footwear rules, and heat breaks so the day feels like discovery—not a checklist sprint from a coach parking lot.",
      },
      {
        heading: "How Pamukkale fits a private Turkey itinerary",
        body: "Pamukkale often sits between Cappadocia and Ephesus, or as an Aegean add-on. It is rarely a standalone week—but as a private day trip or overnight it adds a landscape chapter most first-timers want to see.",
      },
    ],
    faqs: [
      {
        question: "Is Pamukkale worth it on a private Turkey tour?",
        answer:
          "Yes for most first-timers—especially when timing and Hierapolis guiding are handled privately. If you dislike any thermal tourism, we can keep the visit focused on landscape and archaeology.",
      },
      {
        question: "Can I swim at Pamukkale?",
        answer:
          "Rules and open pools change over time. We confirm current access before your date and plan alternatives if swimming sections are restricted.",
      },
      {
        question: "How long do I need for Pamukkale?",
        answer:
          "A focused private half-day to full day covers terraces and Hierapolis. An overnight helps if you want sunset light and a quieter morning.",
      },
    ],
    related: [
      {
        title: "Private Ephesus Tour",
        href: "/destinations/ephesus",
        description: "Pair antiquity chapters on the Aegean arc.",
      },
      {
        title: "10 Day Turkey Itinerary",
        href: "/itineraries/10-day-classic",
        description: "See how Pamukkale can extend a classic route.",
      },
      {
        title: "Private Turkey Tours",
        href: "/private-turkey-tours",
        description: "Design the fuller private journey.",
      },
    ],
    updatedAt: "2026-07-22",
  },
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationSlugs() {
  return destinations.map((destination) => destination.slug);
}
