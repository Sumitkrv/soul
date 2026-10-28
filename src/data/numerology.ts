export interface LifePathInfo {
  number: number;
  title: string;
  archetype: string;
  element: string;
  keywords: string[];
  essence: string;
  strengths: string[];
  growthLessons: string[];
  sacredSymbol: string;
  affirmation: string;
  idealVocation: string;
  reflectivePrompt: string;
}

export const lifePathData: Record<number, LifePathInfo> = {
  1: {
    number: 1,
    title: "The Pioneer & Catalyst",
    archetype: "The Initiator",
    element: "Fire",
    keywords: ["Leadership", "Originality", "Independence", "Courage", "Self-Reliance"],
    essence: "The primal spark of conscious individuality, walking untrodden paths with bold conviction.",
    strengths: ["Unyielding drive", "Innovative vision", "Decisive authority", "Courageous autonomy"],
    growthLessons: ["Cultivating patient humility", "Collaborative receptivity", "Softening self-criticism"],
    sacredSymbol: "The Monad (A single point surrounded by an infinite circle)",
    affirmation: "I stand sovereign in my authentic voice, leading through genuine inspiration.",
    idealVocation: "Founders, visionaries, creative directors, inventors, independent strategists.",
    reflectivePrompt: "Where is my creative spark calling me to forge an original path without waiting for permission?",
  },
  2: {
    number: 2,
    title: "The Peacemaker & Intuitive Bridge",
    archetype: "The Harmonizer",
    element: "Water",
    keywords: ["Diplomacy", "Empathy", "Partnership", "Subtlety", "Grace"],
    essence: "The sacred mirror of reciprocal connection, healing fragmentation through gentle listening.",
    strengths: ["Profound relational attunement", "Intuitive emotional radar", "Patience", "Artistic sensitivity"],
    growthLessons: ["Establishing clear boundaries", "Expressing personal desires", "Overcoming codependency"],
    sacredSymbol: "The Vesica Piscis (The overlapping sacred gateway)",
    affirmation: "My sensitivity is a profound gift; I hold space with discernment, peace, and grace.",
    idealVocation: "Mediators, therapists, counselors, diplomats, curators, empathetic healers.",
    reflectivePrompt: "How can I honor my deep sensitivity while maintaining strong, loving boundaries?",
  },
  3: {
    number: 3,
    title: "The Creative Alchemist & Storyteller",
    archetype: "The Expressive Muse",
    element: "Air",
    keywords: ["Artistic Expression", "Joy", "Communication", "Imagination", "Optimism"],
    essence: "The joyful union of masculine and feminine principles giving birth to expressive beauty.",
    strengths: ["Lyrical articulation", "Playful charisma", "Vivid imagination", "Uplifting warmth"],
    growthLessons: ["Disciplined follow-through", "Avoiding mood volatility", "Channeling scattered energies"],
    sacredSymbol: "The Triangle (The sacred triad of Mind, Body, and Spirit)",
    affirmation: "My creative voice is an instrument of divine joy, bringing light wherever it speaks.",
    idealVocation: "Writers, artists, speakers, musicians, designers, cultural creators.",
    reflectivePrompt: "What joyful creative expression am I ready to release into the world without self-doubt?",
  },
  4: {
    number: 4,
    title: "The Master Architect & Foundation Builder",
    archetype: "The Anchor",
    element: "Earth",
    keywords: ["Integrity", "Structure", "Devotion", "Stability", "Craftsmanship"],
    essence: "The solid rock upon which sanctuaries and enduring institutions are patiently established.",
    strengths: ["Unshakeable reliability", "Organizational genius", "Methodical discipline", "Moral integrity"],
    growthLessons: ["Embracing spontaneous flow", "Softening rigid expectations", "Allowing playfulness"],
    sacredSymbol: "The Square (The four cardinal directions and elemental balance)",
    affirmation: "I build my life with patience, deliberate craftsmanship, and enduring integrity.",
    idealVocation: "Architects, engineers, operational leaders, master craftspeople, financial stewards.",
    reflectivePrompt: "What enduring sanctuary of peace am I patiently constructing with my daily discipline?",
  },
  5: {
    number: 5,
    title: "The Free Spirit & Cosmic Explorer",
    archetype: "The Wayfarer",
    element: "Air",
    keywords: ["Freedom", "Adventure", "Curiosity", "Adaptability", "Sensory Awakening"],
    essence: "The quintessence that animates matter, seeking spiritual liberation across physical experience.",
    strengths: ["Fearless versatility", "Magnetic presence", "Quick comprehension", "Resilience"],
    growthLessons: ["Deep emotional anchoring", "Commitment to mastery", "Mindful pacing"],
    sacredSymbol: "The Pentagram (The human microcosm and five sacred senses)",
    affirmation: "I embrace life as an exhilarating journey of growth, freedom, and discovery.",
    idealVocation: "Travelers, investigative journalists, cultural ambassadors, entrepreneurs, explorers.",
    reflectivePrompt: "What stale routine is ready to be transformed by a breath of fresh adventurous freedom?",
  },
  6: {
    number: 6,
    title: "The Loving Guardian & Sacred Nurturer",
    archetype: "The Caretaker",
    element: "Earth & Water",
    keywords: ["Compassion", "Sanctuary", "Harmony", "Healing", "Responsibility"],
    essence: "The heart of unconditional love, weaving healing sanctuaries for family, community, and home.",
    strengths: ["Devoted generosity", "Healing touch", "Aesthetic harmony", "Protective loyalty"],
    growthLessons: ["Releasing savior complexes", "Allowing others their own lessons", "Radical self-care"],
    sacredSymbol: "The Hexagram (The interlocking triangles of Heaven and Earth)",
    affirmation: "I nurture myself with the same boundless compassion I pour into the world.",
    idealVocation: "Healers, holistic practitioners, teachers, community leaders, interior designers.",
    reflectivePrompt: "How can I pour loving care into my own heart before tending to the needs of others?",
  },
  7: {
    number: 7,
    title: "The Mystic Sage & Truth Seeker",
    archetype: "The Contemplative",
    element: "Water",
    keywords: ["Wisdom", "Introspection", "Spiritual Mystery", "Discernment", "Solitude"],
    essence: "The solitary contemplative diving beneath worldly surfaces to touch the timeless laws of Spirit.",
    strengths: ["Profound analytical mind", "Esoteric intuition", "Uncompromising depth", "Quiet authority"],
    growthLessons: ["Overcoming emotional detachment", "Trusting the heart alongside the intellect", "Releasing cynicism"],
    sacredSymbol: "The Heptagram (The seven celestial spheres and rainbow rays)",
    affirmation: "In sacred stillness, the deeper mysteries of existence reveal their timeless truth.",
    idealVocation: "Philosophers, researchers, astrologers, spiritual scholars, analytical thinkers.",
    reflectivePrompt: "What quiet truth is waiting for my devoted contemplation in sacred solitude?",
  },
  8: {
    number: 8,
    title: "The Sovereign Alchemist & Master of Power",
    archetype: "The Sovereign",
    element: "Fire & Earth",
    keywords: ["Abundance", "Executive Vision", "Manifestation", "Karmic Balance", "Mastery"],
    essence: "The infinite lemniscate balancing spiritual law with material mastery and ethical abundance.",
    strengths: ["Strategic execution", "Courageous resource stewardship", "Resilience", "Leadership"],
    growthLessons: ["Balancing ambition with spiritual surrender", "Generous distribution of wealth", "Healing control issues"],
    sacredSymbol: "The Lemniscate (The horizontal infinity symbol of eternal circulation)",
    affirmation: "I channel abundance as a sacred tool for uplifting community and elevating human dignity.",
    idealVocation: "Executive leaders, philanthropic visionaries, venture builders, economic strategists.",
    reflectivePrompt: "How can I wield my personal power and resources to serve the highest collective good?",
  },
  9: {
    number: 9,
    title: "The Universal Humanitarian & Compassionate Elder",
    archetype: "The Transcendent Soul",
    element: "Fire & Water",
    keywords: ["Universal Love", "Completion", "Wisdom", "Selflessness", "Artistic Vision"],
    essence: "The culmination of all numerical vibrations, standing with open palms to bless the world.",
    strengths: ["Broad philosophical vision", "Profound humanitarian empathy", "Creative genius", "Forgiveness"],
    growthLessons: ["Releasing attachments gracefully", "Avoiding spiritual burnout", "Embracing personal boundaries"],
    sacredSymbol: "The Enneagram (The ninefold completion of the cosmic cycle)",
    affirmation: "I release what is complete with gratitude, making space for new divine creation.",
    idealVocation: "Philanthropists, global teachers, artists, spiritual elders, humanitarian advocates.",
    reflectivePrompt: "What chapter of my life is ready for graceful closure and peaceful forgiveness?",
  },
  11: {
    number: 11,
    title: "The Master Illuminator & Channel of Light",
    archetype: "The Intuitive Beacon",
    element: "Spirit & Air",
    keywords: ["Higher Intuition", "Spiritual Epiphany", "Charisma", "Idealism", "Visionary Lightning"],
    essence: "A master vibration transmitting cosmic frequency directly into human consciousness.",
    strengths: ["High-frequency intuition", "Inspirational charisma", "Visionary foresight", "Healing aura"],
    growthLessons: ["Grounding nervous-system overwhelm", "Trusting divine timing", "Overcoming imposter syndrome"],
    sacredSymbol: "The Dual Pillars (Twin conduits of divine light and electric inspiration)",
    affirmation: "I am a clear channel of divine illumination, grounding high wisdom into gentle earthly presence.",
    idealVocation: "Spiritual mentors, inspirational teachers, visionary artists, intuitive channelers.",
    reflectivePrompt: "What spiritual insight is streaming through my intuition that I must not dismiss?",
  },
  22: {
    number: 22,
    title: "The Master Builder of Ancient Sanctuaries",
    archetype: "The Cosmic Architect",
    element: "Spirit & Earth",
    keywords: ["Global Manifestation", "Visionary Pragmatism", "Enduring Legacy", "Sacred Structure", "Mastery"],
    essence: "The highest earthly vibration, turning metaphysical blueprints into lasting tangible reality.",
    strengths: ["Unrivaled manifestation power", "Global scope", "Practical execution of spiritual ideas", "Patience"],
    growthLessons: ["Avoiding paralyzing overwhelm", "Balancing micro and macro details", "Surrendering ego pride"],
    sacredSymbol: "The Double Square / Octagram (The materialization of divine order on earth)",
    affirmation: "With humble hands and visionary clarity, I construct sanctuaries of enduring peace for generations.",
    idealVocation: "Founders of global movements, sustainable architects, philanthropic leaders, world changers.",
    reflectivePrompt: "What grand vision of lasting benefit is ready for my methodical, grounded commitment?",
  },
  33: {
    number: 33,
    title: "The Master Teacher & Avatar of Compassion",
    archetype: "The Cosmic Healer",
    element: "Spirit & Water",
    keywords: ["Christic Compassion", "Selfless Devotion", "Universal Healing", "Spiritual Upliftment", "Grace"],
    essence: "The rarest master vibration, radiating pure spiritual devotion and healing presence to all sentient beings.",
    strengths: ["Unconditional divine love", "Profound healing energy", "Selfless dedication", "Radiant grace"],
    growthLessons: ["Guarding against self-immolation", "Honoring mortal limitations", "Maintaining sacred boundaries"],
    sacredSymbol: "The Radiant Rose upon the Cross of Light",
    affirmation: "I am an instrument of pure unconditional love; my presence brings healing, peace, and solace.",
    idealVocation: "Spiritual masters, holistic medicine pioneers, universal guides, compassionate elders.",
    reflectivePrompt: "How can I embody divine compassion without sacrificing my own earthly wellbeing?",
  },
};

/**
 * Calculates the Life Path Number using standard Pythagorean method.
 * Reduces Day, Month, and Year individually (preserving Master Numbers 11 and 22 during reduction),
 * then sums and reduces to 1-9 or Master Numbers 11, 22, 33.
 */
export function calculateLifePath(birthDate: string): {
  lifePathNumber: number;
  steps: {
    monthSum: number;
    monthReduced: number;
    daySum: number;
    dayReduced: number;
    yearSum: number;
    yearReduced: number;
    totalSum: number;
  };
} | null {
  const parts = birthDate.split("-");
  if (parts.length !== 3) return null;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

  function reduceNum(n: number, allowMaster = true): number {
    while (n > 9) {
      if (allowMaster && (n === 11 || n === 22 || n === 33)) {
        return n;
      }
      n = n
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return n;
  }

  const monthReduced = reduceNum(month, true);
  const dayReduced = reduceNum(day, true);
  const yearReduced = reduceNum(year, true);

  const totalSum = monthReduced + dayReduced + yearReduced;
  const lifePathNumber = reduceNum(totalSum, true);

  return {
    lifePathNumber,
    steps: {
      monthSum: month,
      monthReduced,
      daySum: day,
      dayReduced,
      yearSum: year,
      yearReduced,
      totalSum,
    },
  };
}
