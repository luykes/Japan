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
    title: "Arrival — Narita to Sugamo",
    objective: "Get in, get settled, no pressure. Accommodation is 2 min walk from Sugamo Station.",
    plans: {
      a: { label: "Recommended Route", items: ["Land Narita Terminal 1 at 17:30", "Keisei Skyliner: Narita T1 → Nippori (39 min, ¥2,619 adult / ¥1,310 child)", "JR Yamanote: Nippori → Sugamo (4 stops west via Tabata + Komagome, ~8 min, ~¥200)", "Total per adult ~¥2,820 | child ~¥1,510 — get Suica IC card at Narita on arrival", "2 min walk from Sugamo Station to accommodation", "Evening stroll Jizo-dori — 1 min walk, 800m street of shops and temples", "Ramen or izakaya dinner nearby — no rush tonight"] },
      b: { label: "Budget Route", items: ["Keisei Limited Express (not Skyliner): Narita T1 → Nippori (~75 min, ¥1,330 adult)", "JR Yamanote: Nippori → Sugamo (4 stops, ~8 min, ~¥200)", "Total ~¥1,530/person — saves ~¥1,300/adult vs Skyliner, just takes longer"] },
      c: { label: "Backup", items: ["Skip sightseeing — just check in and rest", "Konbini grab near Sugamo Station (open 24h)"] },
    },
    unsplashQuery: "narita airport japan",
  },
  {
    day: 2,
    date: "Mon 19 May",
    city: "Tokyo",
    title: "Jizo-dori + Ikebukuro",
    objective: "Easy start — explore the home neighbourhood then the closest hub.",
    plans: {
      a: { label: "A Plan", items: ["Morning: walk Jizo-dori (1 min from accommodation) — Togenuki Jizo shrine, strawberry daifuku, 200+ old-school shops", "JR Yamanote: Sugamo → Ikebukuro (2 stops west via Otsuka, ~4 min, ~¥170/person)", "Sunshine City complex + Animate (5 floors of anime/manga — kids will love it)", "Ikebukuro food hall or ramen alley for dinner", "JR Yamanote home: Ikebukuro → Sugamo (2 stops, ~4 min)"] },
      b: { label: "B Plan", items: ["Bic Camera or Yamada Denki electronics browsing in Ikebukuro", "Ikebukuro West Gate Park area wander"] },
      c: { label: "C Plan", items: ["Stay fully local — explore Sugamo backstreets and Koganji Temple", "Sunshine City Aquarium if energy allows (~¥2,300/person)"] },
    },
    unsplashQuery: "ikebukuro tokyo japan",
  },
  {
    day: 3,
    date: "Tue 20 May",
    city: "Tokyo",
    title: "Yanaka + Ueno + Asakusa",
    objective: "Old Tokyo in one east corridor — historic neighbourhoods, all linked.",
    plans: {
      a: { label: "A Plan", items: ["JR Yamanote: Sugamo → Nishi-Nippori (3 stops east via Komagome + Tabata, ~5 min, ~¥150)", "Walk into Yanaka — Yanaka Ginza shotengai, old townhouses, atmospheric cemetery", "Walk south to Ueno Park + Ameyoko market street food (~20 min walk from Yanaka)", "Tokyo Metro Ginza Line: Ueno (G16) → Asakusa (G19) (3 stops, ~5 min, ~¥180)", "Senso-ji temple (late afternoon light is stunning) + Nakamise shopping street"] },
      b: { label: "B Plan", items: ["Ueno Zoo (~¥600 adults, ~¥200 kids under 12 — free entry for Tokyo residents)", "Asakusa rickshaw ride through backstreets (~¥4,000 for 30 min)"] },
      c: { label: "C Plan", items: ["Sumida River walk from Asakusa (Skytree visible from outside, free)", "Vending machine picnic by the water", "JR Yamanote: Ueno → Sugamo home (6 stops west via Nippori, ~14 min, ~¥210)"] },
    },
    unsplashQuery: "senso-ji temple asakusa tokyo",
  },
  {
    day: 4,
    date: "Wed 21 May",
    city: "Tokyo",
    title: "Akihabara",
    objective: "Gaming + tech district — the kids will love it.",
    plans: {
      a: { label: "A Plan", items: ["JR Yamanote: Sugamo → Akihabara (8 stops east via Ueno, ~18 min, ~¥210/person)", "Multi-floor arcades: Round1 and Sega HEY — fighting games, rhythm games, crane machines", "Retro game shops: Super Potato (5 floors of classic games) and Mandarake", "Hobby and figure stores — set a spending cap per kid before entering", "Yodobashi Camera: 7 floors of electronics, toys, and tech"] },
      b: { label: "B Plan", items: ["Kanda Myojin shrine nearby (free, 5 min walk from Akihabara)", "Jimbocho bookshop district — 1 stop on Mita Line from Sugamo for the journey home"] },
      c: { label: "C Plan", items: ["Stroll electric town side alleys and maid cafe street", "Konbini snack haul from the giant 7-Eleven on main street", "JR Yamanote: Akihabara → Sugamo home (~18 min, ~¥210)"] },
    },
    unsplashQuery: "akihabara tokyo night lights",
  },
  {
    day: 5,
    date: "Thu 22 May",
    city: "Tokyo",
    title: "Harajuku / Meiji Jingu / Shibuya",
    objective: "Iconic Tokyo energy — a full Yamanote day heading south-west.",
    plans: {
      a: { label: "A Plan", items: ["JR Yamanote: Sugamo → Harajuku (8 stops west via Ikebukuro + Shinjuku, ~25 min, ~¥210/person)", "Meiji Jingu shrine — quiet forested walk, arrive before 10am to beat crowds (free entry)", "Takeshita Street crepes + Harajuku backstreet fashion", "JR Yamanote: Harajuku → Shibuya (1 stop south, ~2 min, ~¥150)", "Shibuya crossing at evening rush hour — 17:30–19:00 is peak chaos"] },
      b: { label: "B Plan", items: ["Yoyogi Park picnic between shrine and Harajuku (free, huge lawns)", "Omotesando window shopping on the 15 min walk to Shibuya"] },
      c: { label: "C Plan", items: ["Shibuya Sky rooftop observation deck (~¥2,000/person — book in advance)", "Konbini dinner watching the crossing", "JR Yamanote: Shibuya → Sugamo home (9 stops north, ~30 min, ~¥210)"] },
    },
    unsplashQuery: "shibuya crossing tokyo night",
  },
  {
    day: 6,
    date: "Fri 23 May",
    city: "Tokyo",
    title: "Tokyo Flex Day",
    objective: "Recharge, revisit, or squeeze in one more thing before Kyoto tomorrow.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A — Shinjuku", items: ["JR Yamanote: Sugamo → Shinjuku (6 stops west via Ikebukuro, ~18 min, ~¥210/person)", "Golden Gai laneways + Kabukicho neon streets", "Omoide Yokocho (Memory Lane) — tiny yakitori alley behind the station"] },
      b: { label: "Option B — teamLab", items: ["teamLab Borderless at Azabudai Hills (~¥3,200/person — book online ahead of time)", "Odaiba waterfront walk (free) via Rinkai Line from Osaki"] },
      c: { label: "Option C — Rest Day", items: ["Laundry + supermarket run near Sugamo Station", "Ikebukuro easy half-day: 2 stops on Yamanote (~4 min, ~¥170)", "Rest up — Shinkansen to Kyoto tomorrow"] },
    },
    unsplashQuery: "shinjuku tokyo japan night",
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
