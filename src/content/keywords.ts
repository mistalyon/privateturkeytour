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
      "private bosphorus cruise",
      "istanbul cooking class",
      "pamukkale day trip from antalya",
      "princes islands tour from istanbul",
    ],
    volume: "H",
  },
  thingsIstanbul: {
    focus: "things to do in istanbul",
    secondary: [
      "best things to do in istanbul",
      "istanbul attractions",
      "what to do in istanbul",
      "istanbul sightseeing",
      "must see istanbul",
    ],
    volume: "VH",
  },
  thingsCappadocia: {
    focus: "things to do in cappadocia",
    secondary: [
      "best things to do in cappadocia",
      "cappadocia attractions",
      "what to do in cappadocia",
      "cappadocia activities",
      "goreme things to do",
    ],
    volume: "H",
  },
  turkeyInMay: {
    focus: "turkey in may",
    secondary: [
      "visit turkey in may",
      "turkey weather in may",
      "best places to visit in turkey in may",
      "cappadocia in may",
      "istanbul in may",
    ],
    volume: "H",
  },
  turkeyInOctober: {
    focus: "turkey in october",
    secondary: [
      "visit turkey in october",
      "turkey weather in october",
      "best time october turkey",
      "cappadocia in october",
      "turkey autumn travel",
    ],
    volume: "H",
  },
  thingsEphesus: {
    focus: "things to do in ephesus",
    secondary: [
      "ephesus attractions",
      "what to see in ephesus",
      "ephesus ruins tour",
      "library of celsus",
      "house of the virgin mary",
    ],
    volume: "M",
  },
  pamukkaleDayTrip: {
    focus: "pamukkale day trip",
    secondary: [
      "pamukkale from denizli",
      "pamukkale hierapolis tour",
      "cotton castle turkey",
      "is pamukkale worth visiting",
      "private pamukkale tour",
    ],
    volume: "H",
  },
  turkeyInSeptember: {
    focus: "turkey in september",
    secondary: [
      "visit turkey in september",
      "turkey weather in september",
      "cappadocia in september",
      "best time september turkey",
      "turkey shoulder season",
    ],
    volume: "H",
  },
  turkeyInWinter: {
    focus: "turkey in winter",
    secondary: [
      "visit turkey in winter",
      "istanbul in winter",
      "cappadocia in winter",
      "turkey december travel",
      "best winter destinations turkey",
    ],
    volume: "M",
  },
  luxury: {
    focus: "luxury turkey tour",
    secondary: [
      "luxury private turkey tour",
      "luxury turkey itinerary",
      "high end turkey travel",
      "bespoke luxury turkey",
      "luxury cappadocia tour",
    ],
    volume: "M",
  },
  itinerary3IstanbulCappadocia: {
    focus: "istanbul cappadocia tour",
    secondary: [
      "private istanbul cappadocia tour",
      "3 day istanbul cappadocia tour",
      "istanbul to cappadocia private tour",
      "short turkey tour istanbul cappadocia",
      "cappadocia tour from istanbul",
    ],
    volume: "VH",
  },
  itinerary5IstanbulCappadocia: {
    focus: "istanbul and cappadocia private tour",
    secondary: [
      "5 day istanbul cappadocia tour",
      "istanbul cappadocia 5 days",
      "private turkey tour 5 days",
      "istanbul cappadocia itinerary",
      "short private turkey tour",
    ],
    volume: "H",
  },
  bosphorusCruise: {
    focus: "private bosphorus cruise",
    secondary: [
      "istanbul bosphorus private tour",
      "private boat tour istanbul",
      "bosphorus sunset cruise private",
      "private yacht bosphorus",
      "istanbul private boat hire",
    ],
    volume: "H",
  },
  ephesusFromKusadasi: {
    focus: "ephesus tour from kusadasi",
    secondary: [
      "private ephesus tour from cruise",
      "ephesus shore excursion private",
      "kusadasi private tour",
      "ephesus and virgin mary private tour",
      "cruise port ephesus private guide",
    ],
    volume: "H",
  },
  services: {
    focus: "private turkey travel services",
    secondary: [
      "istanbul airport transfer",
      "private yacht turkey",
      "turkey golf holiday",
      "private helicopter turkey",
      "private jet turkey",
    ],
    volume: "M",
  },
  airportTransfer: {
    focus: "istanbul private airport transfer",
    secondary: [
      "istanbul airport vip transfer",
      "ist airport private transfer",
      "saw airport private transfer",
      "istanbul hotel airport transfer",
      "private transfer istanbul airport",
    ],
    volume: "H",
  },
  golf: {
    focus: "turkey golf holiday",
    secondary: [
      "golf turkey antalya",
      "belek golf packages",
      "turkey golf tour",
      "private golf turkey",
      "best golf courses turkey",
    ],
    volume: "H",
  },
  helicopter: {
    focus: "private helicopter turkey",
    secondary: [
      "istanbul helicopter tour",
      "cappadocia helicopter",
      "private helicopter transfer turkey",
      "helicopter charter turkey",
      "bosphorus helicopter flight",
    ],
    volume: "M",
  },
  privateJet: {
    focus: "private jet turkey",
    secondary: [
      "private jet charter turkey",
      "istanbul private jet",
      "empty leg turkey",
      "vip aviation turkey",
      "private jet istanbul cappadocia",
    ],
    volume: "M",
  },
  yacht: {
    focus: "private yacht turkey",
    secondary: [
      "turkey yacht charter",
      "private yacht bodrum",
      "gocek yacht charter",
      "istanbul private yacht",
      "mediterranean yacht charter turkey",
    ],
    volume: "H",
  },
  antalya: {
    focus: "private antalya tour",
    secondary: [
      "antalya private guide",
      "things to do in antalya",
      "antalya day trip private",
      "old town antalya tour",
      "belek antalya private tour",
    ],
    volume: "H",
  },
  gallipoliTroy: {
    focus: "gallipoli and troy tour",
    secondary: [
      "private gallipoli tour",
      "troy tour from istanbul",
      "gallipoli day trip private",
      "çanakkale private tour",
      "gallipoli anzac tour private",
    ],
    volume: "H",
  },
  jeepSafari: {
    focus: "cappadocia jeep safari",
    secondary: [
      "private jeep safari cappadocia",
      "cappadocia atv tour",
      "goreme jeep tour",
      "cappadocia sunset jeep",
      "valley jeep safari turkey",
    ],
    volume: "H",
  },
  christmasNewYear: {
    focus: "turkey christmas new year tour",
    secondary: [
      "turkey new year holiday",
      "christmas in istanbul",
      "cappadocia new year",
      "turkey christmas packages",
      "private turkey winter holiday",
    ],
    volume: "M",
  },
  itineraryGallipoliTroy: {
    focus: "gallipoli troy itinerary",
    secondary: [
      "istanbul gallipoli troy tour",
      "2 day gallipoli troy private",
      "çanakkale private itinerary",
      "gallipoli and troy from istanbul",
      "private anzac and troy tour",
    ],
    volume: "M",
  },
  bodrum: {
    focus: "private bodrum tour",
    secondary: [
      "bodrum private guide",
      "things to do in bodrum",
      "bodrum yacht day private",
      "bodrum castle tour",
      "aegean bodrum private tour",
    ],
    volume: "H",
  },
  cappadociaFromAntalya: {
    focus: "cappadocia day trip from antalya",
    secondary: [
      "cappadocia from antalya",
      "antalya to cappadocia tour",
      "private cappadocia tour from antalya",
      "fly antalya cappadocia day trip",
      "resort guest cappadocia tour",
    ],
    volume: "H",
  },
  pamukkaleFromAntalya: {
    focus: "pamukkale day trip from antalya",
    secondary: [
      "pamukkale from antalya",
      "antalya to pamukkale private tour",
      "cotton castle from antalya",
      "private pamukkale transfer antalya",
      "hierapolis day trip antalya",
    ],
    volume: "H",
  },
  princesIslands: {
    focus: "princes islands tour from istanbul",
    secondary: [
      "private princes islands tour",
      "buyukada private tour",
      "istanbul islands day trip",
      "princes islands private guide",
      "ferry tour istanbul islands",
    ],
    volume: "H",
  },
  bursaDayTrip: {
    focus: "bursa day trip from istanbul",
    secondary: [
      "private bursa tour",
      "uludag day trip istanbul",
      "bursa and uludag private",
      "green mosque bursa tour",
      "istanbul to bursa private transfer",
    ],
    volume: "M",
  },
  cookingClass: {
    focus: "istanbul cooking class",
    secondary: [
      "private turkish cooking class",
      "istanbul culinary class",
      "turkish cooking lesson istanbul",
      "private chef experience istanbul",
      "market and cooking class istanbul",
    ],
    volume: "H",
  },
  gobekliTepe: {
    focus: "gobekli tepe tour",
    secondary: [
      "private gobekli tepe tour",
      "gobeklitepe from gaziantep",
      "gobekli tepe day trip",
      "sanliurfa gobekli tepe",
      "gobekli tepe private guide",
    ],
    volume: "VH",
  },
  gaziantepFood: {
    focus: "gaziantep food tour",
    secondary: [
      "gaziantep culinary tour",
      "private gaziantep food tour",
      "best food in gaziantep",
      "antep baklava tour",
      "southeast turkey food tour",
    ],
    volume: "H",
  },
  photographyTour: {
    focus: "cappadocia photography tour",
    secondary: [
      "private cappadocia photography tour",
      "istanbul photography tour",
      "turkey photography tour private",
      "sunrise photography cappadocia",
      "photo tour turkey",
    ],
    volume: "M",
  },
  christianPilgrimage: {
    focus: "christian turkey tour",
    secondary: [
      "seven churches of asia tour",
      "biblical turkey tour",
      "private pilgrimage turkey",
      "ephesus christian tour",
      "turkey faith tour private",
    ],
    volume: "M",
  },
  solo: {
    focus: "solo travel turkey",
    secondary: [
      "solo turkey tour private",
      "turkey solo trip",
      "private guide for solo traveler turkey",
      "safe solo travel turkey",
      "solo istanbul cappadocia tour",
    ],
    volume: "H",
  },
  womenTravel: {
    focus: "women travel turkey",
    secondary: [
      "women only turkey tour",
      "turkey tour for women",
      "female friendly turkey travel",
      "safe turkey travel for women",
      "private turkey tour for women",
    ],
    volume: "M",
  },
  multiGen: {
    focus: "multi generational turkey tour",
    secondary: [
      "multigenerational turkey vacation",
      "turkey trip with grandparents",
      "three generation turkey tour",
      "private multi gen turkey",
      "family reunion turkey tour",
    ],
    volume: "M",
  },
  archaeologicalSites: {
    focus: "archaeological sites in turkey",
    secondary: [
      "turkey archaeological sites",
      "unesco archaeological sites turkey",
      "prehistoric sites turkey",
      "hoyuk turkey",
      "best archaeological sites turkey",
    ],
    volume: "H",
  },
  arslantepe: {
    focus: "arslantepe mound",
    secondary: [
      "arslantepe unesco",
      "arslantepe malatya",
      "arslantepe tour",
      "private arslantepe visit",
      "arslantepe hoyuk",
    ],
    volume: "M",
  },
  catalhoyuk: {
    focus: "catalhoyuk",
    secondary: [
      "catalhoyuk turkey",
      "catalhoyuk tour",
      "private catalhoyuk visit",
      "catalhoyuk from konya",
      "neolithic catalhoyuk",
    ],
    volume: "H",
  },
  hattusa: {
    focus: "hattusa tour",
    secondary: [
      "hattusha turkey",
      "hattusa from ankara",
      "bogazkale hittite capital",
      "private hattusa tour",
      "alacahoyuk day trip",
    ],
    volume: "M",
  },
  gobekliVsCatal: {
    focus: "gobekli tepe vs catalhoyuk",
    secondary: [
      "gobeklitepe or catalhoyuk",
      "which is older gobekli tepe catalhoyuk",
      "neolithic sites turkey compare",
      "best prehistoric site turkey",
      "catalhoyuk vs gobeklitepe",
    ],
    volume: "M",
  },
  itinerarySoutheast: {
    focus: "southeast turkey itinerary",
    secondary: [
      "gaziantep gobekli tepe itinerary",
      "private southeast turkey tour",
      "sanliurfa gaziantep tour",
      "eastern turkey archaeology tour",
      "4 day southeast turkey",
    ],
    volume: "M",
  },
} as const satisfies Record<string, KeywordSet>;

export function keywordList(set: KeywordSet): string[] {
  return [set.focus, ...set.secondary];
}
