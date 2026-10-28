export interface TarotCard {
  id: string;
  number: number;
  romanNumeral: string;
  name: string;
  arcana: "Major";
  element: "Fire" | "Earth" | "Air" | "Water" | "Spirit";
  uprightKeywords: string[];
  reversedKeywords: string[];
  image: string;
  summary: string;
  pastMeaning: string;
  presentMeaning: string;
  possibilityMeaning: string;
  symbolism: string;
  affirmation: string;
}

export const tarotCards: TarotCard[] = [
  {
    id: "card_star",
    number: 17,
    romanNumeral: "XVII",
    name: "The Star",
    arcana: "Major",
    element: "Air",
    uprightKeywords: ["Hope", "Inspiration", "Serenity", "Spiritual Guidance", "Renewal"],
    reversedKeywords: ["Disillusionment", "Despair", "Lost faith", "Spiritual disconnect"],
    image: "/images/tarot-card-star.jpg",
    summary:
      "A celestial beacon of hope, pure inspiration, and spiritual replenishment following the storm.",
    pastMeaning:
      "You have weathered a profound period of transformation and emerged with renewed faith and a clarified heart.",
    presentMeaning:
      "A serene window of inspiration is opening for you. Trust your quiet inner vision and allow yourself to heal.",
    possibilityMeaning:
      "Unprecedented spiritual peace and creative clarity will guide your long-term endeavors into joyful manifestation.",
    symbolism:
      "The eight-pointed central star represents cosmic order and divine alignment. The maiden pours water back to the pool and earth, symbolizing the eternal recirculation of spiritual consciousness.",
    affirmation: "I am guided by the constant light of hope; my future unfolds in peace and grace.",
  },
  {
    id: "card_moon",
    number: 18,
    romanNumeral: "XVIII",
    name: "The Moon",
    arcana: "Major",
    element: "Water",
    uprightKeywords: ["Intuition", "Dreams", "Subconscious", "Illusion", "Liminal Wisdom"],
    reversedKeywords: ["Confusion", "Hidden fears", "Misunderstanding", "Uncertainty"],
    image: "/images/tarot-card-moon.jpg",
    summary:
      "The realm of nocturnal dreams, deep subconscious currents, and navigating the mysterious unknown with intuitive courage.",
    pastMeaning:
      "You navigated an ambiguous landscape where things were not what they seemed, sharpening your inner radar.",
    presentMeaning:
      "Pay attention to the whisper of your dreams and feelings right now; logic alone cannot resolve what the soul perceives.",
    possibilityMeaning:
      "By surrendering the need for immediate cognitive certainty, you will birth profound psychological freedom.",
    symbolism:
      "The two towers mark the boundary of ordinary reality. The wolves represent the wild and domestic aspects of our nature, and the crayfish rises from the primeval waters of the unconscious mind.",
    affirmation: "I trust my intuition to guide me safely through the shadows into radiant understanding.",
  },
  {
    id: "card_sun",
    number: 19,
    romanNumeral: "XIX",
    name: "The Sun",
    arcana: "Major",
    element: "Fire",
    uprightKeywords: ["Joy", "Vitality", "Radiance", "Clarity", "Success"],
    reversedKeywords: ["Temporary gloom", "Over-optimism", "Dimmed confidence"],
    image: "/images/tarot-card-sun.jpg",
    summary:
      "The ultimate triumph of warmth, conscious illumination, abundant vitality, and unburdened heart-centered joy.",
    pastMeaning:
      "A foundational breakthrough brought genuine self-confidence and clarified your true calling.",
    presentMeaning:
      "Warmth, illumination, and creative vitality surround your current inquiries. Step out into the open.",
    possibilityMeaning:
      "A cycle of radiant fulfillment, mutual celebration, and deep peace is aligning in your life path.",
    symbolism:
      "The radiant benevolent sun pours twenty-four rays of life. The white horse represents pure animal innocence carrying the liberated child of conscious awakening, flanked by blossoming sunflowers.",
    affirmation: "I radiate warmth, joy, and conscious light; life responds to my open heart with abundance.",
  },
  {
    id: "card_fool",
    number: 0,
    romanNumeral: "0",
    name: "The Fool",
    arcana: "Major",
    element: "Air",
    uprightKeywords: ["New Beginnings", "Leap of Faith", "Innocence", "Spontaneity", "Pure Potential"],
    reversedKeywords: ["Recklessness", "Hesitation", "Naivete"],
    image: "/images/tarot-still-life.jpg",
    summary: "The zero point of infinite potential, inviting you to take a courageous leap of faith into the unknown.",
    pastMeaning: "You took a bold, untethered risk that fundamentally disrupted old stagnation.",
    presentMeaning: "Stand at the threshold without fear. You do not need to know the entire map to take the first step.",
    possibilityMeaning: "An unexpected adventure or reinvention will breathe exhilarating vitality into your life.",
    symbolism: "The cliff edge represents the threshold of physical manifestation. The white rose represents pure motivation.",
    affirmation: "With an innocent heart and deep trust, I leap joyfully into the unfolding cosmic story.",
  },
  {
    id: "card_magician",
    number: 1,
    romanNumeral: "I",
    name: "The Magician",
    arcana: "Major",
    element: "Air",
    uprightKeywords: ["Manifestation", "Alchemy", "Skill", "Focused Will", "Resourcefulness"],
    reversedKeywords: ["Untapped potential", "Manipulation", "Scattered focus"],
    image: "/images/astrology-consultation.jpg",
    summary: "The conduit between above and below, commanding the elemental tools to manifest vision into form.",
    pastMeaning: "You discovered the power of your own voice and realized that your intentions shape your reality.",
    presentMeaning: "You have all the tools, resources, and clarity you need right now to initiate your highest work.",
    possibilityMeaning: "A masterwork or transformative project will succeed through your deliberate focus and craft.",
    symbolism: "The wand points to heaven and finger to earth. The four elemental tools on the table symbolize mastery over matter.",
    affirmation: "As above, so below; I channel divine intention into deliberate, loving creation.",
  },
  {
    id: "card_high_priestess",
    number: 2,
    romanNumeral: "II",
    name: "The High Priestess",
    arcana: "Major",
    element: "Water",
    uprightKeywords: ["Intuition", "Sacred Mystery", "Inner Silence", "Higher Knowing", "The Veil"],
    reversedKeywords: ["Ignored hunches", "Superficial chatter", "Hidden agendas"],
    image: "/images/spiritual-portrait.jpg",
    summary: "The silent guardian of the cosmic temple, holding the secrets inscribed behind the pomegranate veil.",
    pastMeaning: "A period of quiet observation and introspection taught you to listen to what remains unspoken.",
    presentMeaning: "Step back from external noise. The answer resides in the quiet temple of your inner knowing.",
    possibilityMeaning: "Profound esoteric understanding and psychic clarity will emerge as you honor sacred silence.",
    symbolism: "The pillars of Boaz and Jachin embody cosmic duality. The scroll of sacred law rests upon her knee.",
    affirmation: "In the silence between breaths, I hear the ancient wisdom of my eternal soul.",
  },
  {
    id: "card_empress",
    number: 3,
    romanNumeral: "III",
    name: "The Empress",
    arcana: "Major",
    element: "Earth",
    uprightKeywords: ["Abundance", "Sensory Beauty", "Fertility", "Creation", "Nurturing Nature"],
    reversedKeywords: ["Creative block", "Neglect", "Overbearing control"],
    image: "/images/ceremonial-objects.jpg",
    summary: "The fertile mother of all beauty, cultivating abundance, sensual nourishment, and creative fruition.",
    pastMeaning: "A seed planted with love and patience took deep root and prepared the soil for current harvests.",
    presentMeaning: "Surround yourself with beauty, rest, and sensory pleasure; creative abundance is ready to bloom.",
    possibilityMeaning: "Flourishing relationships, artistic vitality, and grounded prosperity will grace your path.",
    symbolism: "The twelve-star diadem reflects the zodiac. The wheat harvest and waterfall symbolize infinite fertility.",
    affirmation: "I welcome the abundant, generous flow of life with reverence and open arms.",
  },
  {
    id: "card_hermit",
    number: 9,
    romanNumeral: "IX",
    name: "The Hermit",
    arcana: "Major",
    element: "Earth",
    uprightKeywords: ["Soul Searching", "Inner Light", "Quiet Sanctuary", "Contemplation", "Wisdom"],
    reversedKeywords: ["Isolation", "Loneliness", "Withdrawal from life"],
    image: "/images/forest-sanctuary.jpg",
    summary: "The solitary sage carrying a lantern atop the mountain peak, lighting the path for other seeking travelers.",
    pastMeaning: "You stepped away from the crowd to determine what truly holds substance and moral truth for you.",
    presentMeaning: "A period of quiet retreat, reflective journaling, and solitary meditation will reveal profound truth.",
    possibilityMeaning: "You will become a trusted beacon of grounded wisdom and quiet guidance for others.",
    symbolism: "The six-pointed seal within the lantern shines the light of truth upon the rocky path ahead.",
    affirmation: "My solitary journey illuminates the timeless truth residing within my own heart.",
  },
  {
    id: "card_wheel_of_fortune",
    number: 10,
    romanNumeral: "X",
    name: "Wheel of Fortune",
    arcana: "Major",
    element: "Fire",
    uprightKeywords: ["Cycles of Destiny", "Turning Point", "Karma", "Inevitable Change", "Cosmic Rhythm"],
    reversedKeywords: ["Resisting flow", "Bad luck mindset", "Clinging to the past"],
    image: "/images/birth-chart-wheel.jpg",
    summary: "The perpetual rotation of cosmic cycles, reminding us that every descent contains the seed of elevation.",
    pastMeaning: "A major karmic pivot shifted the coordinates of your life and broke an outdated cycle.",
    presentMeaning: "You are at a significant turning point. Align with the flow rather than fighting the turning wheel.",
    possibilityMeaning: "Fortunate synchronicity and auspicious celestial currents are opening doors before you.",
    symbolism: "The four winged creatures symbolize the fixed signs of the zodiac, holding ancient books of wisdom.",
    affirmation: "I celebrate the changing seasons of life, knowing the universe constantly works for my highest good.",
  },
];
