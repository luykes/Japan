export type Plan = { label: string; items: string[] };

export type Day = {
  day: number;
  date: string;
  city: "Tokyo" | "Kyoto" | "Hiroshima" | "Osaka" | "Transit";
  title: string;
  objective: string;
  plans: { a: Plan; b?: Plan; c?: Plan };
  unsplashQuery: string;
  isFlexDay?: boolean;
};

export const itinerary: Day[] = [
  {
    day: 1,
    date: "Sun 18 May",
    city: "Tokyo",
    title: "Arrival — Narita to Tokyo",
    objective: "Arrive cheaply, get settled, no pressure.",
    plans: {
      a: { label: "A Plan", items: ["Land Narita at 17:30", "Low-cost bus into Tokyo/Ginza (~¥1,500/person)", "Check into Airbnb in Ueno/Asakusa/Ikebukuro/Kinshicho", "Simple dinner near Airbnb"] },
      c: { label: "Backup", items: ["Skip sightseeing if tired — just rest"] },
    },
    unsplashQuery: "narita airport japan",
  },
  {
    day: 2,
    date: "Mon 19 May",
    city: "Tokyo",
    title: "Asakusa + Sumida Side",
    objective: "Easy first full day in Tokyo.",
    plans: {
      a: { label: "A Plan", items: ["Senso-ji early (beat the crowds)", "Walk Asakusa backstreets", "Sumida River walk"] },
      b: { label: "B Plan", items: ["Skytree area from outside (free)", "Street food along Nakamise shopping street"] },
      c: { label: "C Plan", items: ["Café or konbini morning", "Sit by Sumida River with snacks"] },
    },
    unsplashQuery: "senso-ji temple asakusa tokyo",
  },
  {
    day: 3,
    date: "Tue 20 May",
    city: "Tokyo",
    title: "Ueno + Yanaka",
    objective: "Neighbourhood Tokyo — away from tourist crowds.",
    plans: {
      a: { label: "A Plan", items: ["Ueno Park wander", "Ameyoko market street food", "Yanaka district — old Tokyo vibes"] },
      b: { label: "B Plan", items: ["Ueno Zoo (affordable family option)", "Yanaka Ginza shopping street"] },
      c: { label: "C Plan", items: ["Café evening", "Local sento (public bath) experience"] },
    },
    unsplashQuery: "ueno park tokyo japan",
  },
  {
    day: 4,
    date: "Wed 21 May",
    city: "Tokyo",
    title: "Shibuya / Harajuku / Meiji",
    objective: "Iconic Tokyo energy.",
    plans: {
      a: { label: "A Plan", items: ["Meiji Jingu shrine (free entry)", "Harajuku backstreets (Takeshita Street)", "Shibuya crossing at evening rush"] },
      b: { label: "B Plan", items: ["Yoyogi Park picnic", "Shibuya Scramble observation deck"] },
      c: { label: "C Plan", items: ["Konbini dinner watching the crossing", "Window shopping Omotesando"] },
    },
    unsplashQuery: "shibuya crossing tokyo night",
  },
  {
    day: 5,
    date: "Thu 22 May",
    city: "Tokyo",
    title: "Akihabara",
    objective: "Gaming + tech district — the kids will love it.",
    plans: {
      a: { label: "A Plan", items: ["Akihabara arcades", "Retro game shops", "Hobby and figure stores", "Set a spending cap for kids"] },
      b: { label: "B Plan", items: ["Kanda / Jimbocho food stop nearby", "Multi-floor arcade games (Sega, Round1)"] },
      c: { label: "C Plan", items: ["Stroll the electric town streets", "Konbini snack haul"] },
    },
    unsplashQuery: "akihabara tokyo night lights",
  },
  {
    day: 6,
    date: "Fri 23 May",
    city: "Tokyo",
    title: "Tokyo Flex Day",
    objective: "Recharge or revisit a favourite.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A", items: ["Revisit favourite area from earlier days"] },
      b: { label: "Option B", items: ["Shopping + laundry day at Airbnb"] },
      c: { label: "Option C", items: ["Optional premium: teamLab (~$150 family)", "Odaiba waterfront walk (free)"] },
    },
    unsplashQuery: "tokyo skyline japan",
  },
  {
    day: 7,
    date: "Sat 24 May",
    city: "Transit",
    title: "Tokyo → Kyoto",
    objective: "Scenic Shinkansen transfer day.",
    plans: {
      a: { label: "A Plan", items: ["Shinkansen Tokyo → Kyoto (~2h15m)", "Check into Airbnb near Kyoto Station / Kawaramachi", "Evening walk Pontocho or Kamo River"] },
      c: { label: "Backup", items: ["Rest evening — long travel day"] },
    },
    unsplashQuery: "shinkansen mount fuji japan",
  },
  {
    day: 8,
    date: "Sun 25 May",
    city: "Kyoto",
    title: "Fushimi Inari",
    objective: "Most photogenic morning in Japan.",
    plans: {
      a: { label: "A Plan", items: ["Arrive at Fushimi Inari by 7am (beat crowds)", "Walk upper torii gates path", "Take your time — no rush"] },
      b: { label: "B Plan", items: ["Fushimi sake district nearby", "Relaxed afternoon in Kyoto"] },
      c: { label: "C Plan", items: ["Nishiki Market for afternoon snacks"] },
    },
    unsplashQuery: "fushimi inari torii gates kyoto",
  },
  {
    day: 9,
    date: "Mon 26 May",
    city: "Kyoto",
    title: "Eastern Kyoto",
    objective: "Choose one walking zone — don't try to do both.",
    plans: {
      a: { label: "Zone A — Higashiyama", items: ["Kiyomizudera temple", "Sannenzaka + Ninenzaka stone lanes", "Matcha ice cream walk"] },
      b: { label: "Zone B — Gion", items: ["Gion district walk", "Yasaka Shrine", "Hanamikoji lane at dusk"] },
      c: { label: "C Plan", items: ["Philosopher's Path stroll (free)"] },
    },
    unsplashQuery: "higashiyama kyoto japan",
  },
  {
    day: 10,
    date: "Tue 27 May",
    city: "Kyoto",
    title: "Nara Day Trip",
    objective: "Feed deer — kids will remember this forever.",
    plans: {
      a: { label: "A Plan", items: ["Train to Nara (~45min from Kyoto)", "Nara Park — free-roaming deer", "Todai-ji giant Buddha (¥600 entry)"] },
      b: { label: "B Plan", items: ["Kasuga Taisha shrine walk (free)", "Naramachi old town"] },
      c: { label: "C Plan", items: ["Return Kyoto for dinner at local ramen shop"] },
    },
    unsplashQuery: "nara deer park japan",
  },
  {
    day: 11,
    date: "Wed 28 May",
    city: "Kyoto",
    title: "Kyoto Flex Day",
    objective: "Arashiyama or markets — your choice.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A — Arashiyama", items: ["Bamboo Grove (go early)", "Tenryuji garden", "Hozu River walk"] },
      b: { label: "Option B — City Wander", items: ["Nishiki Market (the kitchen of Kyoto)", "Café hopping Kawaramachi area"] },
      c: { label: "C Plan", items: ["Laundry + rest day at Airbnb"] },
    },
    unsplashQuery: "arashiyama bamboo grove kyoto",
  },
  {
    day: 12,
    date: "Thu 29 May",
    city: "Hiroshima",
    title: "Kyoto → Hiroshima",
    objective: "Transfer day + meaningful afternoon.",
    plans: {
      a: { label: "A Plan", items: ["Train to Hiroshima via JR West Kansai-Hiroshima Pass", "Check into hotel near central tram area", "Peace Memorial Park + Museum (allow 2-3 hours)"] },
      b: { label: "B Plan", items: ["A-Bomb Dome exterior walk", "Hiroshima castle exterior"] },
      c: { label: "C Plan", items: ["Okonomiyaki dinner (Hiroshima-style — must do)", "Rest evening"] },
    },
    unsplashQuery: "hiroshima peace memorial park",
  },
  {
    day: 13,
    date: "Fri 30 May",
    city: "Hiroshima",
    title: "Miyajima Island",
    objective: "Floating torii gate — one of Japan's top sights.",
    plans: {
      a: { label: "A Plan", items: ["Ferry to Miyajima (~10min, JR Pass included)", "Itsukushima Shrine + floating torii gate", "Walk the island paths"] },
      b: { label: "B Plan", items: ["Daisho-in temple (free, quieter than main path)", "Mt Misen ropeway view (optional cost)"] },
      c: { label: "C Plan", items: ["Momiji manju (maple leaf cakes) from local shops", "Watch torii at high tide for best photo"] },
    },
    unsplashQuery: "miyajima floating torii gate japan",
  },
  {
    day: 14,
    date: "Sat 31 May",
    city: "Osaka",
    title: "Hiroshima → Osaka",
    objective: "Transfer to food city.",
    plans: {
      a: { label: "A Plan", items: ["Train to Osaka via JR pass", "Check into Airbnb Namba / Tennoji area", "Evening Dotonbori walk"] },
      b: { label: "B Plan", items: ["Glico running man photo", "Street food: takoyaki + crepes"] },
      c: { label: "C Plan", items: ["Early night — big food day tomorrow"] },
    },
    unsplashQuery: "dotonbori osaka night",
  },
  {
    day: 15,
    date: "Sun 1 Jun",
    city: "Osaka",
    title: "Osaka Exploration",
    objective: "Choose your zone — all are great.",
    isFlexDay: true,
    plans: {
      a: { label: "Zone A — Namba", items: ["Namba + Shinsaibashi shopping street", "Kuromon Ichiba market (the kitchen of Osaka)", "Dotonbori afternoon walk"] },
      b: { label: "Zone B — South Osaka", items: ["Shinsekai retro district", "Tennoji zoo / park (cheap)", "Osaka Castle exterior (free outside)"] },
      c: { label: "C Plan", items: ["Konbini crawl — try every snack"] },
    },
    unsplashQuery: "osaka japan street food",
  },
  {
    day: 16,
    date: "Mon 2 Jun",
    city: "Osaka",
    title: "Osaka Flex Day",
    objective: "Final full day — go big or go easy.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A — Universal Studios", items: ["Universal Studios Japan (~$450 family)", "Book tickets in advance", "Mario World + Harry Potter zones"] },
      b: { label: "Option B — Relaxed Day", items: ["Shopping at Shinsaibashi", "Relaxed dinner at a proper izakaya", "Final Dotonbori night walk"] },
      c: { label: "C Plan", items: ["Osaka Aquarium Kaiyukan (~$100 family)", "Tempozan Harbour Village"] },
    },
    unsplashQuery: "universal studios japan osaka",
  },
  {
    day: 17,
    date: "Tue 3 Jun",
    city: "Transit",
    title: "Departure — Osaka → Kansai Airport",
    objective: "Slow morning, no stress.",
    plans: {
      a: { label: "A Plan", items: ["Slow morning — last konbini breakfast", "Train to Kansai Airport (~35min, ~¥1,650/person)", "Allow 3+ hours before flight"] },
      c: { label: "Backup", items: ["Airport shopping for final souvenirs"] },
    },
    unsplashQuery: "kansai airport osaka japan",
  },
];

export const cities = ["Tokyo", "Kyoto", "Hiroshima", "Osaka"] as const;
export type City = (typeof cities)[number];

export const cityDays: Record<City, number[]> = {
  Tokyo: [1, 2, 3, 4, 5, 6],
  Kyoto: [8, 9, 10, 11],
  Hiroshima: [12, 13],
  Osaka: [14, 15, 16],
};

export const cityColors: Record<City, string> = {
  Tokyo: "from-red-900 to-red-700",
  Kyoto: "from-purple-900 to-purple-700",
  Hiroshima: "from-orange-900 to-orange-700",
  Osaka: "from-emerald-900 to-emerald-700",
};

export const cityAccentColors: Record<City, string> = {
  Tokyo: "text-red-400",
  Kyoto: "text-purple-400",
  Hiroshima: "text-orange-400",
  Osaka: "text-emerald-400",
};

export const cityBorderColors: Record<City, string> = {
  Tokyo: "border-red-500",
  Kyoto: "border-purple-500",
  Hiroshima: "border-orange-500",
  Osaka: "border-emerald-500",
};

export const cityYouTubeIds: Record<City, string> = {
  Tokyo: "pC9T-tMZM0k",
  Kyoto: "Ky-oiWRz-cI",
  Hiroshima: "f8UGxf7jBfc",
  Osaka: "M8vDHjWRlLg",
};

export const cityNights: Record<City, number> = {
  Tokyo: 6,
  Kyoto: 5,
  Hiroshima: 2,
  Osaka: 3,
};
