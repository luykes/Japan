export type TransportLeg = {
  from: string;
  to: string;
  method: string;
  costPerPerson: string;
  familyCost: string;
  notes: string;
  bookingStatus: "early" | "later" | "flexible";
  bookingUrl?: string;
  bookingUrlLabel?: string;
};

export const transportLegs: TransportLeg[] = [
  {
    from: "Narita Airport",
    to: "Tokyo",
    method: "Low-cost limousine bus",
    costPerPerson: "~$13 AUD",
    familyCost: "~$52 AUD",
    notes: "Much cheaper than Narita Express. Takes ~90min. Drops at Tokyo/Ginza area.",
    bookingStatus: "later",
    bookingUrl: "https://www.limousinebus.co.jp/en/",
    bookingUrlLabel: "Limousine Bus site",
  },
  {
    from: "Tokyo",
    to: "Kyoto",
    method: "Shinkansen (Nozomi/Hikari)",
    costPerPerson: "$140–160 AUD",
    familyCost: "$560–640 AUD",
    notes: "~2h15m. Book in advance. Sit on right side for Mt Fuji view.",
    bookingStatus: "early",
    bookingUrl: "https://www.eki-net.com/en/jrticket/",
    bookingUrlLabel: "Book via Eki-net (JR official)",
  },
  {
    from: "Kyoto",
    to: "Hiroshima",
    method: "JR West Kansai–Hiroshima Area Pass",
    costPerPerson: "Adult ¥17,000 / Child ¥8,500",
    familyCost: "~$460 AUD (5-day pass)",
    notes: "Covers Kyoto→Hiroshima, Miyajima ferry, and Hiroshima→Osaka. Best value for this leg.",
    bookingStatus: "early",
    bookingUrl: "https://www.westjr.co.jp/global/en/ticket/pass/kansai_hiroshima/",
    bookingUrlLabel: "Buy JR West Pass",
  },
  {
    from: "Hiroshima",
    to: "Miyajima",
    method: "JR Ferry (included in Kansai–Hiroshima Pass)",
    costPerPerson: "Included in pass",
    familyCost: "$0 extra",
    notes: "~10min ferry from Miyajimaguchi. Runs frequently. No separate booking needed.",
    bookingStatus: "flexible",
  },
  {
    from: "Hiroshima",
    to: "Osaka",
    method: "Shinkansen (covered by JR West pass)",
    costPerPerson: "Included in pass",
    familyCost: "$0 extra",
    notes: "~1h20m. Covered by Kansai–Hiroshima area pass.",
    bookingStatus: "flexible",
  },
  {
    from: "Osaka",
    to: "Kansai Airport",
    method: "Haruka Express or Nankai train",
    costPerPerson: "$15–20 AUD",
    familyCost: "$60–80 AUD",
    notes: "~35-45min. Allow 3+ hours before flight.",
    bookingStatus: "later",
    bookingUrl: "https://www.westjr.co.jp/global/en/ticket/icoca-haruka/",
    bookingUrlLabel: "Haruka Express info",
  },
];

export const cityTransport = [
  {
    city: "Tokyo",
    pass: "Tokyo Subway 24-hour ticket",
    cost: "¥1,000 adult / ¥500 child",
    tip: "IC card (Suica/Pasmo) for flexibility across days",
  },
  {
    city: "Kyoto",
    pass: "Kyoto City Bus Day Pass",
    cost: "¥700/day",
    tip: "Many sights are walkable — bus pass for Arashiyama days",
  },
  {
    city: "Hiroshima",
    pass: "Hiroshima tram day pass",
    cost: "¥700/day",
    tip: "Trams connect Peace Park, Hatchobori, and ferry terminal easily",
  },
  {
    city: "Osaka",
    pass: "Osaka Subway day pass",
    cost: "¥800/day",
    tip: "Namba is walkable to most sights — pass mainly useful for USJ day",
  },
];

export const prebookChecklist = [
  {
    item: "Tokyo Airbnb accommodation",
    timing: "Book now (fills fast)",
    done: false,
    url: "https://www.airbnb.com.au/s/Ueno--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2",
    urlLabel: "Search Airbnb",
  },
  {
    item: "Kyoto Airbnb accommodation",
    timing: "Book now (fills fast)",
    done: false,
    url: "https://www.airbnb.com.au/s/Kyoto-Station--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2",
    urlLabel: "Search Airbnb",
  },
  {
    item: "Hiroshima hotel",
    timing: "Book now",
    done: false,
    url: "https://www.booking.com/searchresults.html?ss=Hatchobori+Hiroshima&checkin_year=2025&checkin_month=5&checkin_monthday=29&checkout_year=2025&checkout_month=5&checkout_monthday=31&group_adults=2&group_children=2&no_rooms=1",
    urlLabel: "Search Booking.com",
  },
  {
    item: "Osaka Airbnb accommodation",
    timing: "Book now",
    done: false,
    url: "https://www.airbnb.com.au/s/Namba--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2",
    urlLabel: "Search Airbnb",
  },
  {
    item: "JR West Kansai–Hiroshima Area Pass",
    timing: "Buy 1-2 weeks before",
    done: false,
    url: "https://www.westjr.co.jp/global/en/ticket/pass/kansai_hiroshima/",
    urlLabel: "Buy JR West Pass",
  },
  {
    item: "Tokyo → Kyoto Shinkansen seats",
    timing: "Book 2-4 weeks before",
    done: false,
    url: "https://www.eki-net.com/en/jrticket/",
    urlLabel: "Book via Eki-net",
  },
  {
    item: "Narita bus tickets",
    timing: "Can buy on arrival or online",
    done: false,
    url: "https://www.limousinebus.co.jp/en/",
    urlLabel: "Limousine Bus site",
  },
  {
    item: "Optional: Universal Studios Japan tickets",
    timing: "Book online well in advance",
    done: false,
    url: "https://www.usj.co.jp/web/en/us/tickets",
    urlLabel: "USJ official tickets",
  },
];

export const spendOn = [
  "Well-located Airbnb (saves transport + stress)",
  "Comfortable train transfers (Shinkansen seats)",
  "Good dinners 2–3 times per week",
  "Washer-equipped apartments (saves on extra luggage)",
  "Flexible cancellation policies",
];

export const saveOn = [
  "Observation decks (use free viewpoints instead)",
  "Packaged day tours",
  "Rickshaws",
  "Kimono rentals",
  "Influencer food lines (find the same food elsewhere)",
  "Taxis (train/bus almost always better)",
  "Nationwide JR Pass (Kansai regional pass is better value)",
];
