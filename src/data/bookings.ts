export type BookingCategory = "flights" | "stays" | "transport" | "experiences";

export type Booking = {
  id: string;
  category: BookingCategory;
  title: string;
  date: string;
  time?: string;
  location?: string;
  reference?: string;
  cost?: string;
  bookedVia?: string;
  notes?: string;
};

export const bookings: Booking[] = [
  // ── Flights ──────────────────────────────────────────────────────────────
  {
    id: "flight-syd-narita",
    category: "flights",
    title: "Sydney → Tokyo Narita",
    date: "18 May 2025",
    time: "TBC",
    location: "Sydney Airport (SYD) → Narita (NRT)",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Arrive Narita, take Airport Limousine Bus to hotel (¥1,500/person)",
  },
  {
    id: "flight-kansai-syd",
    category: "flights",
    title: "Osaka Kansai → Sydney",
    date: "3 Jun 2025",
    time: "TBC",
    location: "Kansai Airport (KIX) → Sydney (SYD)",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Allow 2.5h to reach KIX from Osaka city — take Haruka Express or Nankai Rapid",
  },

  // ── Stays ─────────────────────────────────────────────────────────────────
  {
    id: "stay-tokyo",
    category: "stays",
    title: "Tokyo Accommodation",
    date: "18–24 May 2025",
    location: "Tokyo (Ueno / Asakusa / Kinshicho / Ikebukuro)",
    reference: "",
    cost: "",
    bookedVia: "Airbnb / Booking.com",
    notes: "6 nights · 2BR preferred · washer · station < 10 min",
  },
  {
    id: "stay-kyoto",
    category: "stays",
    title: "Kyoto Accommodation",
    date: "24–29 May 2025",
    location: "Kyoto (Fushimi / Yamashina / Higashiyama / Kawaramachi)",
    reference: "",
    cost: "",
    bookedVia: "Airbnb / Booking.com",
    notes: "5 nights · 2BR preferred · quiet area",
  },
  {
    id: "stay-hiroshima",
    category: "stays",
    title: "Hiroshima Accommodation",
    date: "29–31 May 2025",
    location: "Hiroshima (City centre near Hondori or Hiroshima Station)",
    reference: "",
    cost: "",
    bookedVia: "Airbnb / Booking.com",
    notes: "2 nights · central location for Peace Park & Miyajima day trip",
  },
  {
    id: "stay-osaka",
    category: "stays",
    title: "Osaka Accommodation",
    date: "31 May – 3 Jun 2025",
    location: "Osaka (Shinsaibashi / Namba / Honmachi)",
    reference: "",
    cost: "",
    bookedVia: "Airbnb / Booking.com",
    notes: "3 nights · last stop before Kansai Airport",
  },

  // ── Transport ────────────────────────────────────────────────────────────
  {
    id: "transport-jr-pass",
    category: "transport",
    title: "JR Pass (14-day National)",
    date: "Activate 18 May 2025",
    location: "Activate at Narita Airport JR Office",
    reference: "",
    cost: "~¥50,000 adult / ¥25,000 child",
    bookedVia: "",
    notes: "Order online before departure — must exchange physical pass at JR office on arrival",
  },
  {
    id: "transport-jr-kansai-hiroshima",
    category: "transport",
    title: "JR West Kansai-Hiroshima Area Pass (5-day)",
    date: "Activate ~24 May 2025",
    location: "JR West Pass — activate at major JR station",
    reference: "",
    cost: "¥17,000 adult / ¥8,500 child",
    bookedVia: "JR West",
    notes: "Covers Kyoto–Osaka–Hiroshima–Miyajima corridor. Book online — collect at airport or major station",
  },
  {
    id: "transport-narita-bus",
    category: "transport",
    title: "Narita Airport Limousine Bus",
    date: "18 May 2025",
    location: "Narita Terminal → Tokyo Hotel area",
    reference: "",
    cost: "¥1,500 / person (¥6,000 family)",
    bookedVia: "Airport Limousine",
    notes: "Book at bus counter on arrival or pre-book online",
  },

  // ── Experiences ──────────────────────────────────────────────────────────
  {
    id: "exp-teamlab",
    category: "experiences",
    title: "teamLab Planets (Tokyo)",
    date: "TBC — Day 2–4",
    time: "TBC",
    location: "Toyosu, Tokyo",
    reference: "",
    cost: "¥3,200 adult / ¥1,000 child",
    bookedVia: "teamLab website",
    notes: "Book in advance — sells out weeks ahead. Barefoot entry, wear shorts/skirt",
  },
  {
    id: "exp-miyajima-ferry",
    category: "experiences",
    title: "Miyajima Island (Hiroshima Day Trip)",
    date: "30 May 2025",
    location: "Miyajimaguchi Ferry → Miyajima Island",
    reference: "",
    cost: "¥360 / person ferry (covered by JR Pass)",
    bookedVia: "JR Miyajima Ferry",
    notes: "No booking needed — catch ferry from Miyajimaguchi. Visit Itsukushima Shrine + floating torii",
  },
  {
    id: "exp-dotonbori",
    category: "experiences",
    title: "Dotonbori Food Tour (Osaka)",
    date: "1–2 Jun 2025",
    location: "Dotonbori, Namba, Osaka",
    reference: "",
    cost: "¥5,000–¥8,000 / person for food",
    bookedVia: "Self-guided",
    notes: "Takoyaki, ramen, kushikatsu, matcha soft serve. Evening is best — neon lights + crowds",
  },
];

export const categoryMeta: Record<BookingCategory, { label: string; emoji: string; color: string; border: string; bg: string }> = {
  flights: {
    label: "Flights",
    emoji: "✈️",
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "from-sky-900/10",
  },
  stays: {
    label: "Stays",
    emoji: "🏨",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "from-purple-900/10",
  },
  transport: {
    label: "Transport",
    emoji: "🚄",
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "from-orange-900/10",
  },
  experiences: {
    label: "Experiences",
    emoji: "🎪",
    color: "text-pink-400",
    border: "border-pink-500/30",
    bg: "from-pink-900/10",
  },
};
