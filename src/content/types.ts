export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentLink = {
  title: string;
  href: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  note: string;
  image: string;
  wide?: boolean;
  /** Primary SEO focus keyword (search-demand backed) */
  focusKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  answer: string;
  bestTime: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
  faqs: FaqItem[];
  related: ContentLink[];
  updatedAt: string;
};

export type Itinerary = {
  slug: string;
  name: string;
  days: number;
  focusKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  answer: string;
  image: string;
  whoFor: string;
  includes: string[];
  daysOutline: { day: string; title: string; body: string }[];
  faqs: FaqItem[];
  related: ContentLink[];
  updatedAt: string;
};

export type Guide = {
  slug: string;
  name: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  answer: string;
  image: string;
  sections: { heading: string; body: string }[];
  faqs: FaqItem[];
  related: ContentLink[];
  updatedAt: string;
  publishedAt: string;
};
