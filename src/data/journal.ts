export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Celestial Transits" | "Rituals & Sacred Space" | "Archetypal Psychology" | "Esoteric Arts";
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  tags: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    id: "art_silence_stars",
    slug: "a-quieter-way-to-read-the-stars",
    title: "A Quieter Way to Read the Stars: Beyond Daily Horoscopes",
    subtitle: "Reclaiming astrology as a slow, contemplative art of self-attunement.",
    excerpt:
      "Modern astrology often reduces celestial movements to anxious clickbait. Here is an invitation to treat the planetary spheres not as rigid determinism, but as a poetic sanctuary for soul reflection.",
    category: "Archetypal Psychology",
    author: "Elena Vespera",
    publishedAt: "October 14, 2024",
    readTime: "7 min read",
    image: "/images/astrology-consultation.jpg",
    featured: true,
    tags: ["Contemplative Astrology", "Natal Blueprint", "Sacred Geometry"],
    content: [
      "In an era characterized by unrelenting notifications and rapid-fire opinions, our relationship with time has grown fragmented. We look at calendars as battlegrounds of productivity, and too often, we approach astrology with that same anxious impatience—demanding to know what tomorrow will bring, whether our current endeavors will succeed, or when some vague tribulation will pass.",
      "Yet for thousands of years, across Mediterranean stone towers, ancient Mesopotamian ziggurats, and Renaissance scholarly libraries, reading the heavens was never an exercise in predictive panic. It was a meditative pilgrimage.",
      "The celestial sphere was understood not as a controlling clockwork machine forcing humans into rigid fates, but as a sublime mirror. As above, so below: the macrocosm of the swirling planetary geometries reflects the subtle microcosm of the human psyche.",
      "When we look at our natal chart through this quieter lens, the planetary glyphs cease to be grades or verdicts. The stern rings of Saturn are not a curse of delays; they are the devoted gravity that allows your deepest creative mastery to crystallize over decades. The swift silver fire of Mercury is not an engine of nervous overthinking; it is your sacred bridge between disparate ideas.",
      "To read the stars quietly is to step outside the tyranny of immediate answers. It asks us to look at our current life chapter with the gentle patience of an astronomer awaiting twilight, knowing that the stars do not shout. They whisper to those willing to listen in silence.",
    ],
  },
  {
    id: "art_lunar_rhythms",
    slug: "lunar-rhythms-and-the-architecture-of-rest",
    title: "Lunar Rhythms and the Architecture of Rest",
    subtitle: "Why our nervous systems crave the four phases of the moon.",
    excerpt:
      "Just as the ocean tides breathe in and out with the moon's gravitational pull, our bodies and creative rhythms require deliberate seasons of waxing illumination and waning retreat.",
    category: "Rituals & Sacred Space",
    author: "Elena Vespera",
    publishedAt: "October 02, 2024",
    readTime: "5 min read",
    image: "/images/moon-phases-art.jpg",
    featured: false,
    tags: ["Lunar Cycles", "Somatic Rest", "Ceremony"],
    content: [
      "No tree blossoms unceasingly throughout the year. No ocean remains perpetually at high tide. Yet modern culture expects individuals to perform at peak capacity every single day, regardless of season, circadian rhythm, or lunar cycle.",
      "The eight distinct phases of the moon provide an ancient template for human pacing. During the dark moon or New Moon, the celestial sky rests in velvet obscurity. This is the biological and psychological invitation for radical stillness, internal dreaming, and seed planting.",
      "As the silver crescent waxes toward the first quarter, our vital energy builds alongside it. Projects gain momentum, conversations expand, and intention translates into tangible craft.",
      "At the Full Moon, the celestial mirror is fully illuminated. Emotions rise to the surface, celebrations culminate, and clarity emerges regarding what has come to fruition. But crucially, the story does not end there.",
      "The waning cycle teaches the art that our culture most urgently forgets: the sacred practice of release. In the balsamic and waning phases, we edit, we declutter, we forgive, and we step back into the regenerative embrace of silence.",
    ],
  },
  {
    id: "art_tarot_psychological_mirror",
    slug: "the-tarot-as-a-psychological-mirror",
    title: "The Tarot as a Psychological Mirror: Decoding Archetypal Imagery",
    subtitle: "How the seventy-eight cards illuminate unconscious wisdom.",
    excerpt:
      "Carl Jung recognized that tarot cards represent archetypal personifications of human experience. Explore how drawing a card can bypass intellectual defenses to access intuitive knowing.",
    category: "Esoteric Arts",
    author: "Elena Vespera",
    publishedAt: "September 24, 2024",
    readTime: "6 min read",
    image: "/images/tarot-still-life.jpg",
    featured: false,
    tags: ["Tarot Sanctuary", "Jungian Archetypes", "Symbolism"],
    content: [
      "When you sit down with a deck of well-crafted tarot cards, something extraordinary occurs the moment your fingers shuffle the linen-textured cardstock. The conscious, rational mind—so accustomed to solving problems through brute cognitive force—is invited to quiet down.",
      "The cards do not predict an unchangeable future set in stone. Instead, they present evocative symbols: a maiden by a starlit pool, two towers beneath a luminous crescent moon, a sovereign crowned with stars.",
      "As psychoanalyst Carl Gustav Jung observed, the human unconscious communicates not in abstract bullet points, but in images, myths, and archetypal motifs. When you turn over a card, your subconscious immediately projects its unspoken emotional reality onto the canvas of the card.",
      "If you draw The Star during a time of grief, you are not receiving a shallow guarantee of immediate wealth. You are receiving a somatic permission slip to open your chest and breathe hope into weary lungs.",
      "In our atelier, we practice tarot as a dignified collaborative contemplation. We explore the card as an honest mirror, inviting you to recognize the wisdom already residing within your own heart.",
    ],
  },
  {
    id: "art_forest_sanctuary_grounding",
    slug: "grounding-in-the-ancient-forest",
    title: "Somatic Grounding: Lessons from the Ancient Canopy",
    subtitle: "Connecting celestial astrology with earthy moss and deep roots.",
    excerpt:
      "Astrology without earthly grounding risks becoming disconnected mental abstraction. Discover how nature immersion anchors celestial insights into the physical body.",
    category: "Rituals & Sacred Space",
    author: "Elena Vespera",
    publishedAt: "September 12, 2024",
    readTime: "6 min read",
    image: "/images/forest-sanctuary.jpg",
    featured: false,
    tags: ["Forest Bathing", "Earth Element", "Grounding"],
    content: [
      "There is an old hermetic adage: 'The stars rule from above, but the earth receives from below.' Too often, enthusiasts of astrology spend all their time gazing up into the heavens, studying complex aspect tables and ephemerides, while remaining entirely disconnected from their physical feet.",
      "True spiritual wisdom must be rooted. An ancient oak tree can only reach its grand branches toward the celestial sky because its subterranean taproots plunge deep into the dark, damp fungal networks of the forest floor.",
      "When we walk quietly through an ancient woodland, our nervous system undergoes a profound calibration. The scent of damp soil, the sound of wind rustling through ferns, and the filtered golden light immediately lower cortisol levels and quiet mental anxiety.",
      "Before every natal chart consultation or ritual circle, we encourage a simple somatic ritual: step onto the earth barefoot, place your palms against living bark, and take three long, slow exhalations. Remind yourself that you are not just a mind orbiting in the clouds—you are a conscious expression of the living Earth.",
    ],
  },
  {
    id: "art_journaling_as_ceremony",
    slug: "journaling-as-a-daily-ceremony",
    title: "Journaling as Ceremony: The Sacred Art of the Hand-Written Page",
    subtitle: "Why ink on deckled cotton paper restores our attention span and soul.",
    excerpt:
      "Digital notes vanish into clouds, but pen on paper leaves a physical furrow in time. Explore the practice of contemplative celestial journaling.",
    category: "Esoteric Arts",
    author: "Elena Vespera",
    publishedAt: "August 28, 2024",
    readTime: "4 min read",
    image: "/images/journaling-editorial.jpg",
    featured: false,
    tags: ["Journaling", "Ritual", "Mindfulness"],
    content: [
      "In the digital universe, words are weightless. We type thousands of keystrokes across glass screens every day, only for them to disappear into endless feeds, chat threads, and cloud archives. Nothing resists; nothing has texture.",
      "Contemplative journaling restores resistance to our thoughts. When you hold a brass fountain pen and press ink into heavy cotton paper, your tempo inherently decelerates. You cannot type at eighty words a minute. You must choose each sentence with intention.",
      "In our personal rituals, we designate a celestial journal strictly for three queries: What did I notice today that felt sacred? Where did I feel resistance or fear? What is the sky inviting me to release tonight?",
      "By recording these reflections across lunar cycles, you begin to recognize that your emotional life is not random turbulence. You are moving through seasons, rhythms, and evolutionary spirals of profound beauty.",
    ],
  },
];
