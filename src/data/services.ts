export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "Astrology" | "Tarot" | "Numerology" | "Ritual" | "Guidance";
  price: number;
  durationMin: number;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  whoIsItFor: string[];
  whatToExpect: string[];
  format: string;
  isFeatured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "svc_astrology_natal",
    slug: "astrology-consultation",
    title: "Natal Chart & Soul Blueprint",
    subtitle: "A deeper conversation with your celestial architecture",
    tagline: "Uncover the overarching themes, hidden talents, and cosmic contracts written at the hour of your birth.",
    category: "Astrology",
    price: 280,
    durationMin: 75,
    image: "/images/astrology-consultation.jpg",
    summary:
      "A comprehensive, highly personalized exploration of your complete natal chart. We examine your planetary placements, dominant house rulers, soul purpose indicators, and current major transits.",
    description:
      "Your birth chart is an intimate cosmic fingerprint. In this 75-minute private atelier consultation, we move beyond superficial sun-sign tropes to examine your planetary configuration as an intricate psychological landscape. We illuminate the natural tensions, latent gifts, relational currents, and spiritual destiny woven into your life story.",
    highlights: [
      "In-depth analysis of Sun, Moon, Rising, and planetary aspects",
      "Karmic nodes (North & South Node) soul path exploration",
      "Current astrological transits and planetary progressions for the coming 12 months",
      "High-resolution archival PDF diagram of your personalized chart wheel",
      "Private audio and video recording with transcript notes",
    ],
    whoIsItFor: [
      "Seekers standing at significant career, relational, or existential crossroads",
      "Individuals desiring a grounded, psychologically astute understanding of their natal chart",
      "Anyone ready to release self-judgment and step into their authentic soul rhythm",
    ],
    whatToExpect: [
      "A serene, confidential, unhurried dialogue centered entirely on your life inquiry",
      "Synthesis of ancient Hellenistic tradition with compassionate modern archetypal psychology",
      "Practical actionable anchors to integrate your cosmic insights into daily life",
    ],
    format: "Private 1-on-1 Virtual Atelier (Zoom) or In-Person Sanctuary Consultation",
    isFeatured: true,
  },
  {
    id: "svc_tarot_reading",
    slug: "tarot-reading",
    title: "Contemplative Tarot Sanctuary",
    subtitle: "Symbolic mirrors for clarity, decision, and inner knowing",
    tagline: "An invitation to draw from the archetypal subconscious and illuminate the choices unfolding before you.",
    category: "Tarot",
    price: 195,
    durationMin: 60,
    image: "/images/tarot-still-life.jpg",
    summary:
      "A reflective, non-dogmatic tarot exploration designed to clarify immediate life inquiries, dissolve creative or emotional blockages, and reveal unconscious opportunities.",
    description:
      "We practice tarot not as fatalistic fortune-telling, but as an ancient meditative mirror for intuitive consciousness. Through carefully chosen card spreads, we decode the emotional undercurrents, archetypal patterns, and prospective paths surrounding your present circumstances.",
    highlights: [
      "Multi-card custom spread tailored to your specific questions",
      "Exploration of hidden motivations, subconscious beliefs, and highest outcomes",
      "Integration of gemstone and somatic reflection for grounded clarity",
      "High-res photography of your spread with bespoke reflection prompts",
    ],
    whoIsItFor: [
      "Creatives seeking breakthrough perspectives on complex projects or transitions",
      "Those experiencing emotional ambiguity or seeking deeper relational clarity",
      "Anyone drawn to rich mythic symbolism and intuitive contemplation",
    ],
    whatToExpect: [
      "A grounded, respectful dialogue free from fear-based superstition",
      "Collaborative interpretation connecting the cards to your lived experience",
      "Clear, inspiring takeaways to guide your next steps with confidence",
    ],
    format: "Private 1-on-1 Virtual Session or Written Sanctuary Transmission",
    isFeatured: true,
  },
  {
    id: "svc_birth_chart_exploration",
    slug: "birth-chart-exploration",
    title: "Solar Return & Transit Forecast",
    subtitle: "Navigating your personal cosmic year ahead",
    tagline: "Chart the energetic seasons, eclipses, and pivotal dates of your upcoming personal solar cycle.",
    category: "Astrology",
    price: 240,
    durationMin: 60,
    image: "/images/birth-chart-wheel.jpg",
    summary:
      "A focused forecast calculated for your birthday cycle, illuminating the specific thematic focal points, opportunities, and developmental tasks for your upcoming year.",
    description:
      "Every year when the Sun returns to the exact degree of your birth, a new energetic chapter initiates. The Solar Return consultation provides an aerial perspective of this upcoming annual journey, revealing where to focus your creative energy, when to initiate new ventures, and when to cultivate patient reflection.",
    highlights: [
      "Solar Return chart analysis combined with secondary progressions",
      "Key eclipse activation dates and planetary retrogrades impacting your houses",
      "Bespoke 12-month energetic timeline document",
      "Audio recording and annotated astrological summary",
    ],
    whoIsItFor: [
      "Anyone celebrating a birthday or embarking on a significant new life era",
      "Entrepreneurs and leaders planning major strategic or personal launches",
      "Clients who have already received a foundational natal chart reading",
    ],
    whatToExpect: [
      "Strategic clarity on timing, patience, and bold creative action",
      "A tranquil, reassuring discussion highlighting your innate resilience",
      "A clear calendar overview of key planetary turning points",
    ],
    format: "Private 1-on-1 Virtual Atelier",
    isFeatured: true,
  },
  {
    id: "svc_numerology_session",
    slug: "numerology-session",
    title: "Vibrational Life Path Blueprint",
    subtitle: "The sacred geometry of your name and birth date",
    tagline: "Discover how Pythagorean numerology maps the fundamental rhythm, core lessons, and destiny frequencies of your life.",
    category: "Numerology",
    price: 180,
    durationMin: 60,
    image: "/images/crystal-editorial.jpg",
    summary:
      "A profound numerical decoding of your Life Path, Expression, Soul Urge, and Personal Year numbers to align your daily choices with your vibrational frequency.",
    description:
      "Numbers are universal vibrational frequencies. Through classical Pythagorean and Chaldean numerological systems, we reveal how your birth date and given name hold profound resonance with your inherent gifts, relational dynamics, and seasonal personal year cycles.",
    highlights: [
      "Calculation and synthesis of Life Path, Destiny, Soul Urge, and Personality numbers",
      "Personal Year cycle forecast and quarterly energy transits",
      "Harmonious colors, gemstones, and reflective mantras aligned with your core numbers",
      "Comprehensive digital dossier containing your full numerical matrix",
    ],
    whoIsItFor: [
      "Individuals drawn to sacred mathematics, patterns, and archetypal geometry",
      "People navigating name changes, rebranding, or marriage transitions",
      "Seekers wanting clear confirmation of their innate calling and life purpose",
    ],
    whatToExpect: [
      "Mathematical transparency with detailed step-by-step calculations",
      "Deeply validating insights into personal habits and spiritual yearnings",
      "Practical strategies to maximize your current personal year energy",
    ],
    format: "Private 1-on-1 Virtual Atelier",
  },
  {
    id: "svc_spiritual_guidance",
    slug: "spiritual-guidance",
    title: "Private Esoteric Mentorship",
    subtitle: "Sustained alignment for founders, creatives, and seekers",
    tagline: "A multi-session sanctuary combining astrology, mindfulness, and ritual to support your profound evolution.",
    category: "Guidance",
    price: 450,
    durationMin: 90,
    image: "/images/lunar-ritual.jpg",
    summary:
      "An intensive private mentorship container designed for sustained transformation, combining celestial mapping, contemplative dialogue, and custom ceremonial practices.",
    description:
      "For those who desire continuous, deep-rooted support over an extended transition. We work closely to integrate spiritual insight into practical worldly leadership, artistic creation, and soulful living through bespoke seasonal meetings.",
    highlights: [
      "Comprehensive natal chart, transit, and tarot synthesis",
      "Customized daily rituals, breathwork, and meditation practices",
      "Between-session asynchronous voice memo concierge access",
      "Curated quarterly ceremonial kits delivered to your doorstep",
    ],
    whoIsItFor: [
      "Leaders, artists, and practitioners holding significant creative or public responsibility",
      "Those undertaking profound life transitions, grief, or spiritual awakening",
      "Individuals dedicated to disciplined, sustained self-cultivation",
    ],
    whatToExpect: [
      "An unwavering sanctuary of discretion, warmth, and intellectual rigor",
      "Bespoke ceremonial practices tailored to your living environment",
      "Long-term structural alignment between soul purpose and daily execution",
    ],
    format: "3-Month or 6-Month Bespoke Mentorship Container",
  },
  {
    id: "svc_rituals_workshops",
    slug: "rituals-workshops",
    title: "Ceremonial Circles & Seasonal Rituals",
    subtitle: "Communing with the equinoxes, solstices, and lunar thresholds",
    tagline: "Intimate gatherings dedicated to somatic stillness, astrological attunement, and collective renewal.",
    category: "Ritual",
    price: 85,
    durationMin: 90,
    image: "/images/ceremonial-objects.jpg",
    summary:
      "Small-group immersive circles aligned with the New Moon, Full Moon, Solstices, and Equinoxes. Experience sound baths, guided astral meditation, and ritual journaling.",
    description:
      "Throughout human history, collective attunement with celestial rhythms provided grounding, solace, and collective vision. Our ceremonial workshops gather a small circle of intentional individuals to honor seasonal transitions with presence, herbal incense, and deep stillness.",
    highlights: [
      "Guided celestial visualization and astrological forecast for the lunar cycle",
      "Aromatic botanical incense burning and grounding meditation",
      "Guided reflective journaling with custom deckled-edge prompts",
      "Intimate Q&A and collective sharing circle (limited to 12 participants)",
    ],
    whoIsItFor: [
      "Anyone yearning for quiet community away from digital noise",
      "Those who cherish nature-based seasonality and moon rhythms",
      "Seekers wanting to cultivate an authentic personal ritual practice",
    ],
    whatToExpect: [
      "A warm, welcoming, gentle space free of dogmatic pressure",
      "Exquisite sensory details: candlelight, natural botanicals, and herbal tea",
      "A feeling of profound nervous-system restoration and quiet inspiration",
    ],
    format: "Hybrid: Virtual Sanctuary (worldwide) & In-Person Intimate Gatherings",
  },
];
