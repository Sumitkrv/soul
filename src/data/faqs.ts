export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Astrology" | "Tarot" | "Logistics";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq_reading_experience",
    question: "What happens during a consultation?",
    answer:
      "Every consultation is an unhurried, collaborative dialogue. Before our session, your birth data or inquiry is thoroughly analyzed. When we meet—either virtually via encrypted HD video or in person—we walk through your celestial architecture, exploring the underlying themes, opportunities, and psychological currents. You are invited to ask questions at any point. Following the session, you receive an audio recording and high-resolution chart dossier.",
    category: "General",
  },
  {
    id: "faq_prior_knowledge",
    question: "Do I need any prior knowledge of astrology or tarot?",
    answer:
      "Not at all. While we appreciate clients who love esoteric terminology, we translate planetary mechanics into clear, resonant, and emotionally meaningful language. Our focus is on how these cosmic patterns illuminate your lived human experience, rather than quizzing you on technical jargon.",
    category: "Astrology",
  },
  {
    id: "faq_preparation",
    question: "How should I prepare for my session?",
    answer:
      "For natal astrology consultations, having your exact birth date, birth city, and exact birth time (from a birth certificate or hospital record) is essential for pinpoint house calculations. Before we meet, take 10 minutes in a quiet space to reflect on the core questions or life chapters currently calling for clarity.",
    category: "Logistics",
  },
  {
    id: "faq_online_availability",
    question: "Are consultations available online across different time zones?",
    answer:
      "Yes. The Celestial Atelier welcomes clients worldwide. Virtual consultations are conducted via private Zoom links. Our booking engine automatically translates consultation slots into your local time zone so scheduling is effortless.",
    category: "Logistics",
  },
  {
    id: "faq_rescheduling",
    question: "What is your rescheduling and cancellation policy?",
    answer:
      "We understand that life moves unpredictably. You may reschedule your appointment with at least 48 hours notice via your confirmation link without penalty. Due to the extensive preparation required to cast and delineate your chart prior to meeting, cancellations within 48 hours are non-refundable but may be credited toward future offerings.",
    category: "Logistics",
  },
  {
    id: "faq_choose_experience",
    question: "How do I choose the right experience for my current needs?",
    answer:
      "If you have never had a comprehensive astrological reading, we recommend beginning with the 'Natal Chart & Soul Blueprint' (75 min). If you have an urgent, immediate decision or creative threshold, the 'Contemplative Tarot Sanctuary' (60 min) provides fast archetypal perspective. If celebrating a birthday, choose the 'Solar Return & Transit Forecast'.",
    category: "General",
  },
];
