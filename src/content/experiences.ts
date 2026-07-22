import { pageKeywords } from "@/content/keywords";
import type { Experience } from "@/content/types";

export const experiences: Experience[] = [
  {
    slug: "cappadocia-hot-air-balloon",
    name: "Cappadocia Hot Air Balloon",
    focusKeyword: pageKeywords.balloon.focus,
    secondaryKeywords: [...pageKeywords.balloon.secondary],
    title: "Cappadocia Hot Air Balloon Ride: Private Tour Planning Guide",
    description:
      "Plan a Cappadocia hot air balloon ride on a private Turkey tour—operators, cost drivers, weather cancellations, and how we protect your sunrise morning.",
    answer:
      "A Cappadocia hot air balloon ride typically launches at sunrise when wind and visibility allow, lasts about an hour in the air, and should always be paired with a flexible private-tour Plan B because weather cancellations are common—especially in winter.",
    image: "/cappadocia.jpg",
    duration: "Door-to-door ~3–4 hours · Flight ~60 minutes",
    bestFor: "Couples, photographers, and first-time Cappadocia visitors",
    sections: [
      {
        heading: "What a Cappadocia hot air balloon morning feels like",
        body: "Pickup is early—often before 4:30 a.m. You transfer to the operator, wait for the final weather call, then rise over fairy chimneys as the valleys turn gold. After landing, a short celebration and transfer return you to your cave hotel for breakfast. On a private Cappadocia tour, the rest of the day stays light so the morning does not drain the itinerary.",
      },
      {
        heading: "How we book balloon flights on private tours",
        body: "We reserve reputable Cappadocia balloon operators with strong safety records and realistic basket sizes—not the cheapest mass pickup. If your dates sit in a volatile weather window, we build two potential launch mornings into the Cappadocia stay so one cancellation does not end the experience.",
      },
      {
        heading: "Cappadocia hot air balloon cost: what changes the price",
        body: "Price varies by season, operator tier, basket size, and inclusions. Peak spring and autumn mornings cost more. Ultra-large baskets are cheaper per seat but feel less private. We quote balloon options transparently inside your private Turkey tour proposal so you can choose comfort over the lowest sticker price.",
      },
      {
        heading: "What if the Cappadocia balloon is cancelled?",
        body: "Weather wins. A good private designer already has a Plan B: quieter valleys at sunrise, a photography stop, pottery or winery time, or shifting the flight to a spare morning. Never build an entire Cappadocia trip around a single non-refundable balloon slot without a buffer night.",
      },
    ],
    faqs: [
      {
        question: "Is a Cappadocia hot air balloon worth it?",
        answer:
          "For most first-time visitors yes—when booked with a solid operator and backed by a flexible private itinerary. The aerial view of the valleys is unique; the value drops if a cancelled flight empties your only Cappadocia morning.",
      },
      {
        question: "When is the best time for a Cappadocia balloon ride?",
        answer:
          "Statistically, April–June and September–October offer more stable mornings. Summer can work; winter sees more cancellations due to wind and snow.",
      },
      {
        question: "Can children join a Cappadocia hot air balloon?",
        answer:
          "Age and height rules vary by operator. Tell us ages early so we match an operator that accepts your family—or design a sunrise alternative if ballooning is not suitable.",
      },
    ],
    related: [
      {
        title: "Private Cappadocia Tour",
        href: "/destinations/cappadocia",
        description: "Valleys, cave hotels, and balloon planning in one chapter.",
      },
      {
        title: "7 Day Turkey Itinerary",
        href: "/itineraries/7-day-classic",
        description: "Istanbul + Cappadocia with room for a balloon morning.",
      },
      {
        title: "Best time to visit Turkey",
        href: "/guides/best-time-to-visit-turkey",
        description: "Season windows that favor balloon odds.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "istanbul-food-tour",
    name: "Istanbul Food Tour",
    focusKeyword: pageKeywords.foodTour.focus,
    secondaryKeywords: [...pageKeywords.foodTour.secondary],
    title: "Istanbul Food Tour: Private Culinary Walks Across Two Continents",
    description:
      "Book a private Istanbul food tour with a local culinary guide—markets, street bites, baklava counters, and neighborhood tables on Europe and Asia.",
    answer:
      "A private Istanbul food tour is a guided culinary walk through markets, street-food counters, and neighborhood restaurants—typically half a day—designed around your dietary needs, spice tolerance, and whether you want European-side classics, Asian-side Kadıköy energy, or both.",
    image: "/istanbul.jpg",
    duration: "Half day (3–5 hours) or evening tasting walk",
    bestFor: "Food lovers, couples, and first-time Istanbul visitors",
    sections: [
      {
        heading: "Why take a private Istanbul food tour?",
        body: "Istanbul’s food story is neighborhood-deep. A private Istanbul food tour skips tourist menus and moves at tasting pace—pide, meze, midye, baklava, coffee—with a guide who knows which stalls are worth the queue and which tables locals actually use.",
      },
      {
        heading: "Europe, Asia, or both continents?",
        body: "Classic private food walks cover Karaköy, Beyoğlu, or the Old City spice lanes. Kadıköy on the Asian side adds market energy and modern Istanbul dining. Many travelers pair a landmark morning with an afternoon culinary walk so the private Istanbul tour day feels balanced.",
      },
      {
        heading: "Dietary needs and family pacing",
        body: "Private food tours adapt easily for vegetarian, pescatarian, gluten-conscious, or low-spice preferences. Families can shorten stops and skip late-night venues. Tell us allergies early—Turkish hospitality is generous, and clarity keeps the day relaxed.",
      },
    ],
    faqs: [
      {
        question: "Is an Istanbul food tour better private or group?",
        answer:
          "Private is usually better if you care about dietary needs, quieter venues, or photography stops. Group walks can be fun socially, but pacing and restaurant quality vary more.",
      },
      {
        question: "Should I eat before an Istanbul food tour?",
        answer:
          "Arrive lightly hungry, not starving. Tastings add up quickly; we design stops so you leave satisfied without feeling overwhelmed.",
      },
      {
        question: "Can a food tour include a Bosphorus neighborhood dinner?",
        answer:
          "Yes. Many private Istanbul itineraries end a tasting walk with a booked table overlooking the water—especially for honeymoons and celebrations.",
      },
    ],
    related: [
      {
        title: "Private Istanbul Tour",
        href: "/destinations/istanbul",
        description: "Landmarks and neighborhoods around your food day.",
      },
      {
        title: "Honeymoon Turkey",
        href: "/private-turkey-tours/honeymoon",
        description: "Culinary evenings designed for two.",
      },
      {
        title: "Private Turkey Tours",
        href: "/private-turkey-tours",
        description: "How experiences fit a full private journey.",
      },
    ],
    updatedAt: "2026-07-22",
  },
  {
    slug: "gulet-cruise",
    name: "Private Gulet Cruise",
    focusKeyword: pageKeywords.gulet.focus,
    secondaryKeywords: [...pageKeywords.gulet.secondary],
    title: "Private Gulet Cruise Turkey: Turquoise Coast by Yacht",
    description:
      "Charter a private gulet cruise Turkey experience along the Turquoise Coast—Kaş, Fethiye, Göcek coves, swimming days, and boutique onboard living.",
    answer:
      "A private gulet cruise in Turkey is a crewed wooden yacht charter along the Turquoise Coast, typically focused on swimming coves, coastal towns, and slow Mediterranean days without fixed group cabin mates.",
    image: "/coast.jpg",
    duration: "From 1 private boat day to multi-night charters",
    bestFor: "Honeymoons, families, and travelers who want sea days after culture",
    sections: [
      {
        heading: "What is a private gulet cruise Turkey trip?",
        body: "A gulet is a traditional Turkish wooden yacht. Privately, you charter the boat for your group—crew included—and sail or motor between pine-backed coves on the Turquoise Coast. Days are for swimming, lunch onboard, and quiet anchorages; evenings can be onboard or in Kaş, Kalkan, or Fethiye.",
      },
      {
        heading: "One boat day vs multi-night charter",
        body: "Many private Turkey itineraries add a single private boat day from Fethiye or Göcek. Travelers with more time book 3–7 night charters. We match the format to seasickness tolerance, budget, and how much land-based culture you still want.",
      },
      {
        heading: "How a gulet fits a grand Turkey itinerary",
        body: "Classic sequencing is Istanbul → Cappadocia → Ephesus → Turquoise Coast. A private gulet cruise becomes the soft landing after archaeology and cities—especially popular on honeymoon Turkey and 14-day grand routes.",
      },
    ],
    faqs: [
      {
        question: "When is the best time for a gulet cruise in Turkey?",
        answer:
          "Late May through early October. June and September often feel ideal—warm seas without peak August intensity.",
      },
      {
        question: "Is a private gulet better than a hotel + day boat?",
        answer:
          "Gulets win for multi-cove days and onboard privacy. Hotels win if you prefer spa nights, varied restaurants, and less motion. Many private tours blend both.",
      },
      {
        question: "Can families charter a private gulet?",
        answer:
          "Yes, when cabin layout and safety briefings match ages. We flag boats that work for children and those better suited to couples only.",
      },
    ],
    related: [
      {
        title: "Turquoise Coast Turkey",
        href: "/destinations/turquoise-coast",
        description: "Coastal bases and land-plus-sea private days.",
      },
      {
        title: "14 Day Turkey Itinerary",
        href: "/itineraries/14-day-grand",
        description: "Finish with Mediterranean light and boat time.",
      },
      {
        title: "Honeymoon Turkey",
        href: "/private-turkey-tours/honeymoon",
        description: "Quiet coastal privacy for two.",
      },
    ],
    updatedAt: "2026-07-22",
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getExperienceSlugs() {
  return experiences.map((experience) => experience.slug);
}
