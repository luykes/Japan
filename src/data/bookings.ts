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
    date: "18 May 2026",
    time: "TBC",
    location: "Sydney Airport (SYD) → Narita (NRT)",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Confirmed private transfer pickup from Narita T1 arrivals → Shibuya accommodation",
  },
  {
    id: "flight-kansai-syd",
    category: "flights",
    title: "Osaka Kansai → Sydney",
    date: "3 Jun 2026",
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
    title: "Tokyo — レガリアヒルズ渋谷道玄坂",
    date: "18–24 May 2026",
    location: "7-4 Maruyamachō, Shibuya, Tokyo 150-0044",
    reference: "",
    cost: "",
    bookedVia: "Airbnb",
    notes: "6 nights · confirmed · 7 min walk from Shibuya Station",
  },
  {
    id: "stay-kyoto",
    category: "stays",
    title: "Kyoto Accommodation",
    date: "24–28 May 2026",
    location: "北門前町５０７, Kyoto",
    reference: "",
    cost: "",
    bookedVia: "Airbnb",
    notes: "4 nights · confirmed · central Kyoto",
  },
  {
    id: "stay-hiroshima",
    category: "stays",
    title: "Hiroshima Accommodation",
    date: "28–29 May 2026",
    location: "Hiroshima — central tram area",
    reference: "",
    cost: "",
    bookedVia: "Booking.com",
    notes: "1 night · Peace Park afternoon arrival · Miyajima early departure next morning",
  },
  {
    id: "stay-osaka",
    category: "stays",
    title: "Osaka — Sotetsu Fresa Inn Kitahama",
    date: "29 May – 3 Jun 2026",
    location: "2 Chome-4-10 Koraibashi, Chuo Ward, Osaka 541-0043",
    reference: "",
    cost: "",
    bookedVia: "Booking.com",
    notes: "5 nights · confirmed · 15 min walk to Osaka Castle · subway to Namba",
  },

  // ── Transport ────────────────────────────────────────────────────────────
  {
    id: "transport-narita-transfer",
    category: "transport",
    title: "Narita Airport Private Transfer",
    date: "18 May 2026",
    location: "Narita T1 Arrivals → Shibuya (Maruyamachō)",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Confirmed pickup — meet driver in T1 arrivals hall",
  },
  {
    id: "transport-shinkansen-tokyo-kyoto",
    category: "transport",
    title: "Shinkansen — Tokyo → Kyoto (Nozomi 373)",
    date: "24 May 2026",
    time: "11:18 → 13:29",
    location: "Tokyo Station (Platform 18) → Kyoto Station",
    reference: "Order #5429934322",
    cost: "AUD 648.19",
    bookedVia: "Shinkansen booking",
    notes: "Car 15 · Seats 16A, 16B, 16C, 16D · Oversized luggage space booked · 4 tickets confirmed",
  },
  {
    id: "transport-jr-kansai-hiroshima",
    category: "transport",
    title: "JR West Kansai-Hiroshima Area Pass (5-day)",
    date: "Activate ~28 May 2026",
    location: "JR West Pass — activate at major JR station",
    reference: "",
    cost: "¥17,000 adult / ¥8,500 child",
    bookedVia: "JR West",
    notes: "Covers Kyoto–Osaka–Hiroshima–Miyajima corridor. Collect at airport or major station",
  },

  // ── Experiences ──────────────────────────────────────────────────────────
  {
    id: "exp-disneyland",
    category: "experiences",
    title: "Tokyo Disneyland",
    date: "22 May 2026",
    location: "Maihama, Urayasu (Tokyo Disneyland Resort)",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Confirmed · Gates open 8am · JR Keiyo Line to Maihama from Tokyo Station (~15 min)",
  },
  {
    id: "exp-usj",
    category: "experiences",
    title: "Universal Studios Japan — Studio Pass",
    date: "1 Jun 2026",
    time: "Gates open 8:30am",
    location: "Universal City, Osaka",
    reference: "",
    cost: "",
    bookedVia: "",
    notes: "Confirmed · 4 x Adult Studio Pass · JR Yumesaki Line to Universal City · Download USJ app for timed entry to Nintendo World",
  },
  {
    id: "exp-miyajima-ferry",
    category: "experiences",
    title: "Miyajima Island",
    date: "29 May 2026",
    location: "Miyajimaguchi Ferry → Miyajima Island",
    reference: "",
    cost: "¥360 / person ferry (covered by JR Pass)",
    bookedVia: "JR Miyajima Ferry",
    notes: "No booking needed — morning ferry from Miyajimaguchi. Itsukushima Shrine + floating torii",
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
