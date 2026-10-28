export interface AtelierEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  timeZone: string;
  format: "Virtual Sanctuary" | "Private Atelier Gathering";
  location: string;
  price: number;
  capacity: number;
  spotsRemaining: number;
  image: string;
  description: string;
  highlights: string[];
  isDraft: boolean;
  status: "Open for Reservations" | "Waitlist Only" | "Draft Showcase";
}

export const eventsData: AtelierEvent[] = [
  {
    id: "evt_full_moon_circle",
    slug: "taurus-full-moon-ritual-circle",
    title: "Taurus Full Moon: Somatic Grounding & Abundance Circle",
    subtitle: "A meditative gathering honoring earthly presence, botanical incense, and quiet abundance.",
    date: "November 15, 2024",
    time: "7:00 PM – 9:00 PM IST",
    timeZone: "Asia/Kolkata",
    format: "Virtual Sanctuary",
    location: "Encrypted High-Definition Livestream & Private Interactive Circle",
    price: 65,
    capacity: 25,
    spotsRemaining: 7,
    image: "/images/lunar-ritual.jpg",
    description:
      "Under the fertile illumination of the Taurus Full Moon, we convene to ground our nervous systems, quiet digital chatter, and celebrate sensory nourishment. Features a live astrological forecast of the lunation, somatic breathwork, guided astral visualization, and individual journal inquiry.",
    highlights: [
      "Astrological breakdown of the Taurus-Scorpio nodal axis",
      "Somatic grounding meditation with Tibetan sound bowls",
      "Interactive guided journaling and reflection",
      "High-res printable ceremonial guide & audio replay access",
    ],
    isDraft: true,
    status: "Open for Reservations",
  },
  {
    id: "evt_winter_solstice",
    slug: "winter-solstice-deep-stillness-retreat",
    title: "Winter Solstice Sanctuary: The Rebirth of the Light",
    subtitle: "Celebrating the longest night of the year with sacred silence, candle ritual, and intention crafting.",
    date: "December 21, 2024",
    time: "6:00 PM – 9:30 PM IST",
    timeZone: "Asia/Kolkata",
    format: "Private Atelier Gathering",
    location: "The Celestial Atelier (Physical Sanctuary — Address shared upon confirmation)",
    price: 180,
    capacity: 12,
    spotsRemaining: 3,
    image: "/images/ceremonial-objects.jpg",
    description:
      "When the Sun enters Capricorn at the solstice, we experience the still point of the annual solar journey. In this intimate physical gathering, we sit together around beeswax candlelight, share warm spiced herbal brews, and gently plant the seeds of consciousness that will blossom in the spring.",
    highlights: [
      "Handmade beeswax candle dressing ritual with pine and frankincense",
      "Bespoke natal chart transit review for the solstice threshold",
      "Nourishing organic herbal tea and seasonal botanical elixir",
      "Communal silence and contemplative acoustic soundscape",
    ],
    isDraft: true,
    status: "Open for Reservations",
  },
  {
    id: "evt_tarot_masterclass",
    slug: "symbolic-tarot-intensive-masterclass",
    title: "The Major Arcana as an Inner Map: 3-Part Masterclass",
    subtitle: "A rigorous, contemplative study of the twenty-two archetypal keys to the human psyche.",
    date: "January 11, 18 & 25, 2025",
    time: "4:00 PM – 6:30 PM IST",
    timeZone: "Asia/Kolkata",
    format: "Virtual Sanctuary",
    location: "Virtual Interactive Masterclass via Zoom",
    price: 240,
    capacity: 20,
    spotsRemaining: 12,
    image: "/images/tarot-still-life.jpg",
    description:
      "Move beyond keyword memorization. In this comprehensive three-part weekend intensive, we unpack the history, esoteric Kabbalistic associations, astrological correspondences, and deep Jungian psychology behind the Major Arcana cards.",
    highlights: [
      "Three 2.5-hour interactive seminars with live spread analysis",
      "Comprehensive 80-page digital study guide and symbolic atlas",
      "Guided practice breakout rooms with fellow practitioners",
      "Lifetime access to seminar recordings and Q&A forum",
    ],
    isDraft: true,
    status: "Open for Reservations",
  },
];
