export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subtagline: string;
    description: string;
    foundedYear: number;
    timeZone: string;
    location: string;
    currency: string;
    currencySymbol: string;
    logo: string;
  };
  contact: {
    email: string;
    phone: string;
    hours: string;
    address: string;
    instagram: string;
    pinterest: string;
    spotify: string;
  };
  practitioner: {
    name: string;
    role: string;
    tag: string;
    isDraft: boolean;
    bio: string;
    philosophy: string;
    image: string;
    credentials: string[];
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  bookingRules: {
    advanceNoticeDays: number;
    maxDaysAhead: number;
    defaultSlotDurationMin: number;
    availableDays: number[]; // 0 = Sunday, 1 = Monday, etc.
    slotStartHour: number; // 10 AM
    slotEndHour: number; // 7 PM
    timeZone: string;
  };
  navigation: {
    main: Array<{ label: string; href: string }>;
    footer: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "THE CELESTIAL ATELIER",
    tagline: "A quieter way to read the stars.",
    subtagline: "Bespoke Astrology, Sacred Tarot & Soul Guidance",
    description:
      "A private celestial sanctuary where ancient astrological wisdom, reflective ritual, and modern editorial luxury converge for your personal transformation.",
    foundedYear: 2024,
    timeZone: "Asia/Kolkata",
    location: "Studio & Virtual Consultations Worldwide",
    currency: "USD",
    currencySymbol: "$",
    logo: "/images/brand-logo.jpg",
  },
  contact: {
    email: "concierge@thecelestialatelier.com",
    phone: "+1 (800) 842-STAR",
    hours: "Tuesday – Saturday, 10:00 AM – 7:00 PM IST",
    address: "Bespoke Consultations via Encrypted Video & Private Atelier",
    instagram: "https://instagram.com/thecelestialatelier",
    pinterest: "https://pinterest.com/thecelestialatelier",
    spotify: "https://spotify.com/thecelestialatelier",
  },
  practitioner: {
    name: "Elena Vespera",
    role: "Founding Astrologer & Esoteric Guide",
    tag: "Draft Profile — Subject to Client Confirmation",
    isDraft: true,
    bio: "Elena holds deep reverence for archetypal astrology, psychological symbolism, and the rhythm of seasonal cosmic cycles. For over a decade, she has guided creatives, founders, and seekers into quiet alignment with their celestial blueprint.",
    philosophy:
      "Astrology does not mandate destiny; it illuminates the natural current of your soul so you can navigate life with intentional grace, heightened clarity, and profound peace.",
    image: "/images/spiritual-portrait.jpg",
    credentials: [
      "Archetypal Astrology & Psychological Chart Analysis",
      "Traditional Hellenistic & Horary Techniques",
      "Contemplative Tarot & Symbology Mentorship",
      "Somatic Grounding & Ceremonial Integration",
    ],
  },
  hero: {
    eyebrow: "A SANCTUARY FOR CONSCIOUS SEEKERS",
    titleLine1: "THE SKY HOLDS",
    titleLine2: "A STORY.",
    titleLine3: "SO DO YOU.",
    description:
      "Discover a quieter space for celestial insight, intentional reflection, and meaningful connection with your inner world.",
    primaryCta: {
      label: "Explore Experiences",
      href: "/services",
    },
    secondaryCta: {
      label: "Begin Your Journey",
      href: "/book",
    },
  },
  bookingRules: {
    advanceNoticeDays: 1,
    maxDaysAhead: 60,
    defaultSlotDurationMin: 75,
    availableDays: [1, 2, 3, 4, 5, 6], // Mon-Sat
    slotStartHour: 10,
    slotEndHour: 19,
    timeZone: "Asia/Kolkata",
  },
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Experiences", href: "/services" },
      { label: "Zodiac", href: "/horoscope" },
      { label: "Tarot", href: "/tarot" },
      { label: "Numerology", href: "/numerology" },
      { label: "Journal", href: "/journal" },
      { label: "Events", href: "/events" },
    ],
    footer: [
      { label: "About Atelier", href: "/about" },
      { label: "Experiences & Offerings", href: "/services" },
      { label: "Zodiac Discovery", href: "/horoscope" },
      { label: "Tarot Sanctuary", href: "/tarot" },
      { label: "Numerology", href: "/numerology" },
      { label: "Cosmic Journal", href: "/journal" },
      { label: "Workshops & Gatherings", href: "/events" },
      { label: "Book Consultation", href: "/book" },
      { label: "Contact Atelier", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Sanctuary", href: "/terms" },
      { label: "Admin Portal", href: "/admin" },
    ],
  },
};
