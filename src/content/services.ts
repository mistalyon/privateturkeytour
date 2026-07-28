import { pageKeywords } from "@/content/keywords";
import type { Service } from "@/content/types";

export const services: Service[] = [
  {
    slug: "istanbul-airport-transfer",
    name: "Istanbul Airport Transfer",
    focusKeyword: pageKeywords.airportTransfer.focus,
    secondaryKeywords: [...pageKeywords.airportTransfer.secondary],
    title: "Istanbul Private Airport Transfer | IST & SAW VIP",
    description:
      "Book an Istanbul private airport transfer for IST or SAW—meet-and-greet, private vehicle, and hotel drop-off timed to your flight, not a shared shuttle.",
    answer:
      "An Istanbul private airport transfer is a door-to-door VIP car (or van) between Istanbul Airport (IST) / Sabiha Gökçen (SAW) and your hotel, with meet-and-greet and flight monitoring—ideal as a standalone booking or the first line item on a private Turkey tour.",
    image: "/istanbul.jpg",
    category: "transfer",
    duration: "Door-to-door · flight-timed",
    bestFor: "Arrivals, departures, families, and luxury travelers who skip shared shuttles",
    highlights: [
      "IST and SAW coverage",
      "Meet-and-greet with name sign",
      "Flight tracking and wait buffer",
      "Sedan, VIP van, or larger vehicle",
      "Easy upsell into a full private Istanbul tour",
    ],
    sections: [
      {
        heading: "Why book a private Istanbul airport transfer?",
        body: "Shared shuttles stack stops and burn arrival energy. A private transfer gets you from gate-area meet to hotel door on your clock—bags handled, traffic buffered, no negotiating taxis after a long haul.\n\nThis is also the softest way to start a sales conversation: many private Turkey tours begin with the airport pickup, then expand into guiding days.",
      },
      {
        heading: "IST vs SAW: what we need from you",
        body: "Share flight number, terminal if known, hotel name, and party size (including child seats). IST and SAW sit on different sides of the city—private routing and timing differ, and we quote accordingly.\n\nNight arrivals and cruise-to-airport same-day moves are routine; tell us if you need a larger van for luggage after shopping or a gulet charter.",
      },
      {
        heading: "Pair transfers with touring days",
        body: "Arrival transfer + private Istanbul tour + departure transfer is a clean three-line package. Add a private Bosphorus cruise or Cappadocia flight day and the trip becomes a full private Turkey tour spine.\n\nEnquire with flight times via plan your trip—we confirm vehicle class and a transparent transfer quote.",
      },
    ],
    faqs: [
      {
        question: "Do you cover both IST and SAW?",
        answer:
          "Yes. Istanbul Airport (IST) and Sabiha Gökçen (SAW) private transfers are both available—pricing depends on hotel area and vehicle type.",
      },
      {
        question: "Is meet-and-greet included?",
        answer:
          "Yes for standard VIP pickups: name sign, assistance with bags, and vehicle waiting with a sensible flight-delay buffer.",
      },
      {
        question: "Can I book only the transfer without a full tour?",
        answer:
          "Absolutely. Transfers are bookable alone—and often become the first step before a private Istanbul or Cappadocia itinerary.",
      },
    ],
    related: [
      {
        title: "Private Istanbul Tour",
        href: "/destinations/istanbul",
        description: "Add guiding days after you land.",
      },
      {
        title: "Private Bosphorus Cruise",
        href: "/experiences/private-bosphorus-cruise",
        description: "Waterfront upgrade on day one or two.",
      },
      {
        title: "3-Day Istanbul & Cappadocia",
        href: "/itineraries/istanbul-cappadocia-3-day",
        description: "Short private package from arrival.",
      },
      {
        title: "Private jet Turkey",
        href: "/services/private-jet-turkey",
        description: "Aviation arrival with ground VIP.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Send flight numbers for a transfer quote.",
      },
    ],
    updatedAt: "2026-07-27",
  },
  {
    slug: "turkey-golf",
    name: "Turkey Golf",
    focusKeyword: pageKeywords.golf.focus,
    secondaryKeywords: [...pageKeywords.golf.secondary],
    title: "Turkey Golf Holiday | Belek & Private Golf Packages",
    description:
      "Plan a Turkey golf holiday with Belek and Antalya courses, private transfers, stay options, and non-golfer touring days—bespoke packages, not a fixed resort flyer.",
    answer:
      "A Turkey golf holiday typically centers on Belek/Antalya championship courses with private transfers, preferred tee times, and hotel choice by style—then optional culture days in Antalya, Side, or a Cappadocia add-on. We design golf-first or golf-plus-tour packages around your handicap and travel dates.",
    image: "/coast.jpg",
    category: "sport",
    duration: "3–10+ nights · tee-time led",
    bestFor: "Golf couples, groups, and luxury travelers combining fairways with Mediterranean stays",
    highlights: [
      "Belek and Antalya course access",
      "Private transfers course-to-hotel",
      "Stay tiers from golf resort to boutique",
      "Non-golfer Antalya / Side touring options",
      "Optional Cappadocia or Istanbul add-ons",
    ],
    sections: [
      {
        heading: "Why Turkey works for a golf holiday",
        body: "Belek packs multiple championship courses within short private transfers, warm-season play, and Mediterranean evenings. Compared with flying only for golf, Turkey lets you sell a dual product: fairways plus culture or coast.\n\nWe book tee times and logistics privately so your group is not locked into a one-size resort calendar.",
      },
      {
        heading: "Golf-only vs golf + private touring",
        body: "Pure golf weeks maximize rounds and recovery. Mixed packages add Antalya Old Town, Side ruins, water days, or a short Cappadocia flight chapter for partners who do not play.\n\nLuxury clients often want spa nights and private dinners after 18 holes—we quote stay and dining separately from green fees.",
      },
      {
        heading: "Enquire for a Turkey golf package",
        body: "Share month, number of rounds, group size, and whether non-golfers travel with you. We return course options, stay direction, and transfer plan as a clear private package. Start at plan your trip.",
      },
    ],
    faqs: [
      {
        question: "When is the best time for golf in Turkey?",
        answer:
          "Spring and autumn are strongest for comfort. Winter can work for mild Belek days; peak summer heat pushes earlier tee times.",
      },
      {
        question: "Can you arrange clubs and transfers?",
        answer:
          "Yes—club hire, private course transfers, and hotel–course shuttles are part of the package design.",
      },
      {
        question: "Do you only sell Belek?",
        answer:
          "Belek is the core hub, but we also design Antalya-area mixes and longer private Turkey tours that open or close with golf nights.",
      },
    ],
    related: [
      {
        title: "Luxury Turkey Tour",
        href: "/private-turkey-tours/luxury",
        description: "Elevate stays around your tee times.",
      },
      {
        title: "Private yacht Turkey",
        href: "/services/private-yacht-turkey",
        description: "Sea day between rounds.",
      },
      {
        title: "Turquoise Coast",
        href: "/destinations/turquoise-coast",
        description: "Mediterranean recovery chapters.",
      },
      {
        title: "Private helicopter Turkey",
        href: "/services/private-helicopter-turkey",
        description: "Scenic transfers for premium groups.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Send dates and preferred rounds.",
      },
    ],
    updatedAt: "2026-07-27",
  },
  {
    slug: "private-helicopter-turkey",
    name: "Private Helicopter Turkey",
    focusKeyword: pageKeywords.helicopter.focus,
    secondaryKeywords: [...pageKeywords.helicopter.secondary],
    title: "Private Helicopter Turkey | Istanbul & Scenic Charters",
    description:
      "Charter a private helicopter in Turkey for Bosphorus sightseeing, VIP transfers, or scenic hops—weather-dependent flights arranged inside your private tour.",
    answer:
      "A private helicopter in Turkey is a chartered scenic or transfer flight—most requested for Istanbul/Bosphorus views and premium point-to-point moves. Flights are weather- and permit-dependent; we arrange operators and fold the experience into your private Turkey tour quote.",
    image: "/istanbul.jpg",
    category: "aviation",
    duration: "Short scenic flights to VIP transfer legs",
    bestFor: "Luxury travelers, proposals, and time-sensitive VIP moves",
    highlights: [
      "Istanbul / Bosphorus scenic options",
      "VIP transfer charters when routing allows",
      "Operator vetting and permit awareness",
      "Weather backups always planned",
      "Pairs with private jet and luxury stays",
    ],
    sections: [
      {
        heading: "What private helicopter Turkey trips usually include",
        body: "Scenic Bosphorus or city overflights, celebration flights, and selective VIP transfers when routing and slots allow. This is not a scheduled tourist hop-on product—every flight is chartered and confirmed against weather and local aviation rules.\n\nWe set expectations clearly: helicopters create unforgettable moments, but they cancel more often than cars. Luxury private Turkey tours always keep a Plan B.",
      },
      {
        heading: "Helicopter vs private jet vs ground VIP",
        body: "Helicopters win for short scenic impact. Private jets win for city-to-city speed (Istanbul–Cappadocia, coast hops). Ground VIP wins for reliability and cost. Many luxury itineraries combine jet + helicopter moment + private transfers.\n\nTell us the moment you want—proposal, arrival wow, or time save—and we recommend the right aviation product.",
      },
      {
        heading: "Enquire for a helicopter charter",
        body: "Share preferred date window, passenger count, and whether the flight is scenic or transfer. We check operator availability and quote as a line item in your private tour. Start at plan your trip.",
      },
    ],
    faqs: [
      {
        question: "Can I helicopter over Cappadocia?",
        answer:
          "Availability varies by operator, season, and permits. Hot air balloons remain the iconic Cappadocia aerial product; helicopters are quoted case by case.",
      },
      {
        question: "Are helicopter flights guaranteed?",
        answer:
          "No aviation scenic flight is weather-proof. We confirm terms, cancellation rules, and ground alternatives before you commit.",
      },
      {
        question: "Is this only for luxury tours?",
        answer:
          "Helicopters are a premium add-on, but can be booked as a standalone celebration flight when slots exist.",
      },
    ],
    related: [
      {
        title: "Private jet Turkey",
        href: "/services/private-jet-turkey",
        description: "City-to-city VIP aviation.",
      },
      {
        title: "Private Bosphorus Cruise",
        href: "/experiences/private-bosphorus-cruise",
        description: "Water-level Istanbul wow moment.",
      },
      {
        title: "Luxury Turkey Tour",
        href: "/private-turkey-tours/luxury",
        description: "Build aviation into a full itinerary.",
      },
      {
        title: "Cappadocia hot air balloon",
        href: "/experiences/cappadocia-hot-air-balloon",
        description: "The classic Cappadocia aerial experience.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Request a helicopter availability check.",
      },
    ],
    updatedAt: "2026-07-27",
  },
  {
    slug: "private-jet-turkey",
    name: "Private Jet Turkey",
    focusKeyword: pageKeywords.privateJet.focus,
    secondaryKeywords: [...pageKeywords.privateJet.secondary],
    title: "Private Jet Turkey | Charter & VIP Domestic Hops",
    description:
      "Arrange a private jet in Turkey for Istanbul–Cappadocia hops, coast connections, or international VIP arrival—charter coordination inside your private journey.",
    answer:
      "A private jet Turkey charter moves you between key hubs—most often Istanbul and Cappadocia or coastal airports—with VIP ground handling. We coordinate reputable brokers/operators, then match hotel and guide timing so the jet is a seamless chapter of your private Turkey tour, not an orphan flight.",
    image: "/istanbul.jpg",
    category: "aviation",
    duration: "On-demand charter · route dependent",
    bestFor: "Luxury groups, time-poor executives, and multi-city private itineraries",
    highlights: [
      "Istanbul–Cappadocia VIP hops",
      "Coast and international arrival options",
      "Broker/operator coordination",
      "Ground VIP paired with transfers",
      "Transparent aviation line items in your quote",
    ],
    sections: [
      {
        heading: "When a private jet makes sense in Turkey",
        body: "Commercial flights are excellent for most travelers. Private jets win when schedules, privacy, or multi-stop days matter—same-day Istanbul culture and Cappadocia sunset, or a coast finish without airline banking hours.\n\nWe only recommend jets when the time or privacy gain justifies cost. Otherwise we design smart commercial + private transfer routing.",
      },
      {
        heading: "How we quote private jet Turkey charters",
        body: "Routing, aircraft category, passenger count, luggage, and empty-leg opportunities change price. You receive aviation as a clear line item beside hotels and guiding—no opaque ‘VIP package’ blur.\n\nPair with Istanbul airport VIP transfer or helicopter for a full arrival ritual.",
      },
      {
        heading: "Enquire for jet routing",
        body: "Share origin/destination cities, dates, and headcount. We check charter options and propose the private Turkey tour spine around the flight. Start at plan your trip.",
      },
    ],
    faqs: [
      {
        question: "Can you fly private Istanbul to Cappadocia?",
        answer:
          "Yes—this is one of the most requested domestic private-jet hops. Availability depends on aircraft and slot timing; we confirm before you lock hotels.",
      },
      {
        question: "Do you own aircraft?",
        answer:
          "No. We design the journey and coordinate vetted charter partners so aviation fits your itinerary and ground plan.",
      },
      {
        question: "Is empty-leg pricing available?",
        answer:
          "Sometimes. Empty legs are opportunistic—we flag them when dates are flexible and a real option appears.",
      },
    ],
    related: [
      {
        title: "5-Day Istanbul & Cappadocia",
        href: "/itineraries/istanbul-cappadocia-5-day",
        description: "A short private spine built for VIP hops.",
      },
      {
        title: "Private helicopter Turkey",
        href: "/services/private-helicopter-turkey",
        description: "Short scenic aviation moments.",
      },
      {
        title: "Istanbul airport transfer",
        href: "/services/istanbul-airport-transfer",
        description: "VIP ground after you land.",
      },
      {
        title: "Luxury Turkey Tour",
        href: "/private-turkey-tours/luxury",
        description: "Full elevated itinerary design.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Request a charter routing check.",
      },
    ],
    updatedAt: "2026-07-27",
  },
  {
    slug: "private-yacht-turkey",
    name: "Private Yacht Turkey",
    focusKeyword: pageKeywords.yacht.focus,
    secondaryKeywords: [...pageKeywords.yacht.secondary],
    title: "Private Yacht Turkey | Bodrum, Göcek & Istanbul Charters",
    description:
      "Charter a private yacht in Turkey—Bodrum, Göcek, Kaş day yachts, or Istanbul Bosphorus hire—distinct from traditional gulet weeks, tailored to your group.",
    answer:
      "A private yacht Turkey charter is a crewed motor or sailing yacht for day or multi-day use—popular around Bodrum, Göcek, and Kaş, plus Istanbul Bosphorus hire. Choose yacht when you want contemporary comfort and speed; choose a gulet when you want classic wooden charter atmosphere.",
    image: "/coast.jpg",
    category: "marine",
    duration: "Day charter to multi-night cruising",
    bestFor: "Luxury groups, celebrations, and travelers who want modern yacht comfort",
    highlights: [
      "Bodrum, Göcek, Kaş yacht options",
      "Istanbul private yacht / Bosphorus hire",
      "Day charter or multi-night",
      "Clear yacht vs gulet guidance",
      "Pairs with golf, helicopter, and luxury stays",
    ],
    sections: [
      {
        heading: "Private yacht vs private gulet in Turkey",
        body: "Gulets are iconic wooden Turkish charter boats—romantic, spacious deck living, classic Turquoise Coast weeks. Modern private yachts often offer speed, contemporary cabins, and different marina networks (Bodrum/Göcek especially).\n\nWe help you choose based on seasickness tolerance, celebration style, and whether you want a slow pine-cove week or a sharper luxury day on the water.",
      },
      {
        heading: "Where yacht charters sell best",
        body: "Bodrum and Göcek for Aegean/Mediterranean privacy; Kaş for intimate day boats; Istanbul for Bosphorus skyline charters. Many luxury Turkey tours add one yacht day between golf or city chapters.\n\nFor multi-night wooden atmosphere, see our private gulet cruise experience—we can also blend yacht days with gulet weeks.",
      },
      {
        heading: "Enquire for a yacht charter",
        body: "Share dates, passenger count, day vs multi-night, and preferred base. We shortlist yachts and quote alongside hotels and transfers. Start at plan your trip.",
      },
    ],
    faqs: [
      {
        question: "Is a yacht better than a gulet?",
        answer:
          "Depends on taste. Yachts often feel more contemporary and faster; gulets feel more classic Turkish charter. We recommend based on your brief—not a single default.",
      },
      {
        question: "Can we yacht in Istanbul?",
        answer:
          "Yes—private Bosphorus yacht hire is popular for sunsets and celebrations. For a focused water product, also see private Bosphorus cruise.",
      },
      {
        question: "When is yacht season in Turkey?",
        answer:
          "Late spring through early autumn is prime. Shoulder months (May, September, early October) often balance sea temperature and marina availability.",
      },
    ],
    related: [
      {
        title: "Private gulet cruise",
        href: "/experiences/gulet-cruise",
        description: "Classic wooden charter alternative.",
      },
      {
        title: "Private Bosphorus Cruise",
        href: "/experiences/private-bosphorus-cruise",
        description: "Istanbul waterfront private boat time.",
      },
      {
        title: "Turquoise Coast",
        href: "/destinations/turquoise-coast",
        description: "Best coastal bases for yacht days.",
      },
      {
        title: "Turkey golf holiday",
        href: "/services/turkey-golf",
        description: "Fairways plus a yacht afternoon.",
      },
      {
        title: "Plan your trip",
        href: "/plan-your-trip",
        description: "Request yacht availability for your dates.",
      },
    ],
    updatedAt: "2026-07-27",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
