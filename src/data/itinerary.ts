export type Plan = { label: string; items: string[] };

export type Transit = { line: string; from: string; to: string; duration: string; fare: string };

export type Day = {
  day: number;
  date: string;
  city: "Tokyo" | "Kyoto" | "Hiroshima" | "Osaka" | "Transit";
  title: string;
  objective: string;
  plans: { a: Plan; b?: Plan; c?: Plan };
  unsplashQuery: string;
  isFlexDay?: boolean;
  transit?: Transit[];
  highlights?: string[];
};

export const itinerary: Day[] = [
  {
    day: 1,
    date: "Mon 18 May",
    city: "Tokyo",
    title: "Arrival — Narita to Shibuya",
    objective: "Get in, get settled. Accommodation is at レガリアヒルズ渋谷道玄坂, Maruyamachō — 7 min walk from Shibuya Station.",
    plans: {
      a: { label: "Confirmed Transfer", items: ["Land Narita Terminal 1 at 17:30", "Confirmed private transfer — pickup from Narita T1 arrivals → Shibuya accommodation", "Buy Suica IC cards at JR East counter in arrivals while waiting for driver", "7 min walk from Shibuya Station to accommodation in Maruyamachō", "Evening stroll Dogenzaka backstreets + Shibuya crossing (5 min walk)", "Ramen or izakaya dinner nearby — no rush tonight"] },
      b: { label: "Backup — N'EX", items: ["If transfer falls through: Narita Express (N'EX) direct to Shibuya (~80 min, ¥3,070 adult / ¥1,540 child)"] },
      c: { label: "Budget Backup", items: ["Keisei Limited Express: Narita T1 → Nippori (~75 min, ¥1,330) + Yamanote → Shibuya (~25 min, ~¥210)"] },
    },
    unsplashQuery: "narita airport japan",
    highlights: ["Clear customs & collect bags at Narita T1", "Buy Suica IC cards at JR East counter in arrivals", "Confirmed private transfer Narita → Shibuya", "7 min walk to accommodation in Maruyamachō", "Evening Dogenzaka backstreets + Shibuya crossing nearby"],
    transit: [
      { line: "Private Transfer (confirmed)", from: "Narita T1", to: "Shibuya (Maruyamachō)", duration: "~90 min", fare: "Confirmed" },
    ],
  },
  {
    day: 2,
    date: "Tue 19 May",
    city: "Tokyo",
    title: "Shibuya Local + Daikanyama / Nakameguro",
    objective: "Explore the home neighbourhood — Shibuya's cool, relaxed side. Mostly walkable from accommodation.",
    plans: {
      a: { label: "A Plan", items: ["Morning: Hachiko statue + Shibuya scramble crossing (5 min walk from accommodation)", "15 min walk south-west to Daikanyama — trendy boutiques, Log Road, great coffee", "Continue 10 min walk to Nakameguro canal — tree-lined riverbank, cafés, stylish shops", "Walk back via Ebisu for dinner (~20 min) or Yamanote: Ebisu → Shibuya (1 stop, ~2 min, ~¥150)"] },
      b: { label: "B Plan", items: ["Shibuya 109 fashion floors + Shibuya Scramble Square observation deck (~¥2,000/person)", "Miyashita Park rooftop (free, above Shibuya Station)"] },
      c: { label: "C Plan", items: ["Ebisu Garden Place walk (15 min from Shibuya, free)", "Meguro riverbank stroll — quieter and local", "Early night ahead of longer days"] },
    },
    unsplashQuery: "nakameguro canal tokyo",
    highlights: ["Hachiko statue + Shibuya scramble crossing (5 min walk)", "Walk to Daikanyama boutiques + Log Road", "Nakameguro canal riverside walk", "Dinner in Ebisu or walk back to Shibuya"],
    transit: [
      { line: "JR Yamanote Line", from: "Ebisu", to: "Shibuya (home)", duration: "~2 min", fare: "~¥150 (IC card)" },
    ],
  },
  {
    day: 3,
    date: "Wed 20 May",
    city: "Tokyo",
    title: "Yanaka + Ueno + Asakusa",
    objective: "Old Tokyo in one east corridor — historic neighbourhoods, all linked.",
    plans: {
      a: { label: "A Plan", items: ["JR Yamanote: Shibuya → Nishi-Nippori (~30 min counterclockwise via Shinjuku + Ikebukuro, ~¥210)", "Walk into Yanaka — Yanaka Ginza shotengai, old townhouses, atmospheric cemetery", "Walk south to Ueno Park + Ameyoko market street food (~20 min walk from Yanaka)", "Tokyo Metro Ginza Line: Ueno (G16) → Asakusa (G19) (3 stops, ~5 min, ~¥180)", "Senso-ji temple (late afternoon light is stunning) + Nakamise shopping street"] },
      b: { label: "B Plan", items: ["Ueno Zoo (~¥600 adults, ~¥200 kids under 12)", "Asakusa rickshaw ride through backstreets (~¥4,000 for 30 min)"] },
      c: { label: "C Plan", items: ["Sumida River walk from Asakusa (Skytree visible from outside, free)", "Vending machine picnic by the water", "Tokyo Metro Ginza Line: Asakusa → Shibuya (G01) via Omotesando transfer (~30 min, ~¥220)"] },
    },
    unsplashQuery: "senso-ji temple asakusa tokyo",
    highlights: ["Yamanote to Nishi-Nippori (~30 min from Shibuya)", "Yanaka Ginza shotengai walk + old townhouses", "Walk south to Ueno Park + Ameyoko market", "Ginza Line to Asakusa", "Senso-ji temple + Nakamise shopping"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Nishi-Nippori", duration: "~30 min", fare: "~¥210 (IC card)" },
      { line: "Tokyo Metro Ginza Line", from: "Ueno (G16)", to: "Asakusa (G19)", duration: "~5 min", fare: "~¥180 (IC card)" },
      { line: "Tokyo Metro Ginza Line", from: "Asakusa", to: "Shibuya (home)", duration: "~30 min", fare: "~¥220 (IC card, via Omotesando)" },
    ],
  },
  {
    day: 4,
    date: "Thu 21 May",
    city: "Tokyo",
    title: "Akihabara",
    objective: "Gaming + tech district — the kids will love it.",
    plans: {
      a: { label: "A Plan", items: ["JR Yamanote: Shibuya → Akihabara (counterclockwise via Shinjuku + Ueno, ~35 min, ~¥240/person)", "Multi-floor arcades: Round1 and Sega HEY — fighting games, rhythm games, crane machines", "Retro game shops: Super Potato (5 floors of classic games) and Mandarake", "Hobby and figure stores — set a spending cap per kid before entering", "Yodobashi Camera: 7 floors of electronics, toys, and tech"] },
      b: { label: "B Plan", items: ["Kanda Myojin shrine nearby (free, 5 min walk from Akihabara)", "Jimbocho bookshop district — short walk from Akihabara"] },
      c: { label: "C Plan", items: ["Stroll electric town side alleys and maid cafe street", "Konbini snack haul from the giant 7-Eleven on main street", "JR Yamanote: Akihabara → Shibuya home (~35 min, ~¥240)"] },
    },
    unsplashQuery: "akihabara tokyo night lights",
    highlights: ["Yamanote to Akihabara from Shibuya (~35 min)", "Multi-floor arcades: Round1 + Sega HEY", "Super Potato retro game shop (5 floors)", "Yodobashi Camera electronics", "Set a spending cap per kid before entering"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Akihabara", duration: "~35 min", fare: "~¥240 (IC card)" },
    ],
  },
  {
    day: 5,
    date: "Fri 22 May",
    city: "Tokyo",
    title: "Tokyo Disneyland",
    objective: "Confirmed for Fri 22 May — full day at the park. Gates open 8am, allow the full day.",
    plans: {
      a: { label: "Getting There", items: ["JR Yamanote: Shibuya → Tokyo Station (~28 min, ~¥210)", "JR Keiyo Line: Tokyo Station → Maihama (Tokyo Disneyland station, ~15 min, ~¥220)", "Total ~45 min from accommodation — leave by 7:15am to hit gates at 8am", "Fantasyland, Tomorrowland, parades at 15:00 and evening electrical parade"] },
      b: { label: "Must-Dos", items: ["Space Mountain + Big Thunder Mountain — queue early or use Premier Access", "Haunted Mansion — kids favourite", "Stay for the night-time parade and castle projection show"] },
      c: { label: "Tips", items: ["Buy food inside — you can't bring food in (snacks ok)", "Pick up themed popcorn buckets — Disneyland exclusive", "Last train from Maihama ~23:30 → Shibuya home ~midnight"] },
    },
    unsplashQuery: "tokyo disneyland castle japan",
    highlights: ["Yamanote → Tokyo Station → JR Keiyo → Maihama (~45 min total)", "Gates open 8am — leave accommodation by 7:15", "Space Mountain + Big Thunder Mountain + Haunted Mansion", "Afternoon parade at 15:00", "Night-time castle projection show"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Tokyo Station", duration: "~28 min", fare: "~¥210 (IC card)" },
      { line: "JR Keiyo Line", from: "Tokyo Station", to: "Maihama", duration: "~15 min", fare: "~¥220 (IC card)" },
    ],
  },
  {
    day: 6,
    date: "Sat 23 May",
    city: "Tokyo",
    title: "Tokyo Flex Day",
    objective: "Recharge, revisit, or squeeze in one more thing before Kyoto tomorrow.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A — Shinjuku", items: ["JR Yamanote: Shibuya → Shinjuku (3 stops north, ~6 min, ~¥170/person)", "Golden Gai laneways + Kabukicho neon streets", "Omoide Yokocho (Memory Lane) — tiny yakitori alley behind the station"] },
      b: { label: "Option B — teamLab", items: ["teamLab Borderless at Azabudai Hills (~¥3,200/person — book online ahead of time)", "Yamanote: Shibuya → Osaki (~12 min) → Rinkai Line to Tennozu Isle"] },
      c: { label: "Option C — Rest Day", items: ["Laundry + supermarket run near Shibuya Station", "Nakameguro or Daikanyama easy half-day (15 min walk)", "Rest up — Shinkansen to Kyoto tomorrow"] },
    },
    unsplashQuery: "shinjuku tokyo japan night",
    highlights: ["Option A: Shinjuku — Golden Gai + Memory Lane (6 min from Shibuya)", "Option B: teamLab Borderless (book ahead)", "Option C: Laundry + local walk", "Last full Tokyo day — pack for Kyoto tomorrow"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Shinjuku (Option A)", duration: "~6 min", fare: "~¥170 (IC card)" },
      { line: "JR Yamanote Line", from: "Shibuya", to: "Osaki (teamLab Option B)", duration: "~12 min", fare: "~¥170 (IC card)" },
    ],
  },
  {
    day: 7,
    date: "Sun 24 May",
    city: "Transit",
    title: "Tokyo → Kyoto",
    objective: "Scenic Shinkansen transfer day.",
    plans: {
      a: { label: "Confirmed — Nozomi 373", items: ["Leave accommodation by 10:30am", "Yamanote or Ginza Line: Shibuya → Tokyo Station (~20–28 min)", "Nozomi 373: Tokyo Station departs 11:18 → Kyoto arrives 13:29 (2h 11m)", "Platform 18 · Car 15 · Seats 16A, 16B, 16C, 16D (4 seats together)", "Oversized luggage space booked — store bags at front of Car 15", "Check into Airbnb at 北門前町５０７, Kyoto", "Evening walk Pontocho or Kamo River"] },
      c: { label: "Backup", items: ["Rest evening — long travel day"] },
    },
    unsplashQuery: "shinkansen mount fuji japan",
    transit: [
      { line: "JR Yamanote / Ginza Line", from: "Shibuya", to: "Tokyo Station", duration: "~20–28 min", fare: "~¥210 (IC card)" },
      { line: "Shinkansen Nozomi 373 (confirmed)", from: "Tokyo Station (Platform 18)", to: "Kyoto", duration: "2h 11m", fare: "AUD 648.19 total · Order #5429934322" },
    ],
  },
  {
    day: 8,
    date: "Mon 25 May",
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
    date: "Tue 26 May",
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
    date: "Wed 27 May",
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
    date: "Thu 28 May",
    city: "Hiroshima",
    title: "Kyoto → Hiroshima",
    objective: "Transfer day + meaningful afternoon at the Peace Memorial.",
    plans: {
      a: { label: "A Plan", items: ["Shinkansen Hikari: Kyoto → Hiroshima (~50 min, JR West Pass or ~¥11,000)", "Check into hotel near central tram area", "Peace Memorial Park + Museum (allow 2–3 hours)", "Okonomiyaki dinner (Hiroshima-style — must do)"] },
      b: { label: "B Plan", items: ["A-Bomb Dome exterior walk", "Hiroshima Castle exterior (free outside)"] },
      c: { label: "C Plan", items: ["Rest evening — Miyajima early start tomorrow"] },
    },
    unsplashQuery: "hiroshima peace memorial park",
    transit: [
      { line: "Shinkansen Hikari", from: "Kyoto", to: "Hiroshima", duration: "~50 min", fare: "JR West Pass or ~¥11,000" },
    ],
  },
  {
    day: 12,
    date: "Fri 29 May",
    city: "Transit",
    title: "Miyajima Morning → Osaka",
    objective: "Early Miyajima island, then afternoon Shinkansen to food city.",
    plans: {
      a: { label: "A Plan", items: ["Early ferry to Miyajima (before 8:30am, JR Pass included, ~10 min)", "Itsukushima Shrine + floating torii gate + island walk", "Return to Hiroshima by midday", "Shinkansen Hikari: Hiroshima → Shin-Osaka (~45 min)", "Check into Sotetsu Fresa Inn Kitahama, Chuo Ward", "Evening Dotonbori walk + street food"] },
      b: { label: "B Plan", items: ["Daisho-in temple (quieter than main path) + momiji manju cakes", "Glico running man photo on Dotonbori"] },
      c: { label: "C Plan", items: ["Watch torii at high tide for best photo before departing", "Early night in Osaka — big food days ahead"] },
    },
    unsplashQuery: "miyajima floating torii gate japan",
    transit: [
      { line: "JR Ferry", from: "Hiroshima-Miyajimaguchi", to: "Miyajima", duration: "~10 min", fare: "JR Pass included" },
      { line: "Shinkansen Hikari", from: "Hiroshima", to: "Shin-Osaka", duration: "~45 min", fare: "JR West Pass or ~¥10,560" },
    ],
  },
  {
    day: 13,
    date: "Sat 30 May",
    city: "Osaka",
    title: "Osaka Food Exploration",
    objective: "Namba and Dotonbori — eat everything.",
    plans: {
      a: { label: "Zone A — Namba", items: ["Namba + Shinsaibashi shopping street", "Kuromon Ichiba market (the kitchen of Osaka)", "Dotonbori afternoon walk — takoyaki, crepes, ramen"] },
      b: { label: "Zone B — Dotonbori Deep", items: ["Hozenji Yokocho alley (moss-covered shrine, atmospheric)", "Ura-Namba local food streets — cheaper and less crowded than main Dotonbori"] },
      c: { label: "C Plan", items: ["Konbini crawl — try every snack", "Glico running man photo + Dotonbori canal evening walk"] },
    },
    unsplashQuery: "dotonbori osaka night",
  },
  {
    day: 14,
    date: "Sun 31 May",
    city: "Osaka",
    title: "Osaka Castle + Nakanoshima",
    objective: "Walk to Osaka Castle from Kitahama — it's 15 min from the hotel.",
    plans: {
      a: { label: "A Plan", items: ["15 min walk or short subway to Osaka Castle Park", "Osaka Castle exterior (free) + interior museum (¥600 adults / ¥300 kids)", "Nakanoshima riverside island walk — museums, free public art, great views", "Dinner back near Kitahama / Honmachi"] },
      b: { label: "B Plan", items: ["Umeda / Kita Osaka — Umeda Sky Building floating garden (¥1,500/person)", "Hep Five Ferris Wheel on Umeda rooftop (~¥500/person)"] },
      c: { label: "C Plan", items: ["Lazy café morning in Kitahama neighbourhood", "Afternoon Shinsaibashi window shopping (2 stops by subway)"] },
    },
    unsplashQuery: "osaka castle japan",
    transit: [
      { line: "Osaka Metro Tanimachi Line", from: "Kitahama", to: "Tanimachi 4-chome (Castle)", duration: "~5 min", fare: "~¥180 (IC card)" },
    ],
  },
  {
    day: 15,
    date: "Mon 1 Jun",
    city: "Osaka",
    title: "Universal Studios Japan",
    objective: "Confirmed — 4 x Adult Studio Pass, Mon 1 Jun. Gates open 8:30am.",
    plans: {
      a: { label: "Getting There", items: ["Osaka Metro Midosuji Line: Kitahama → Umeda/Osaka (~10 min, ~¥200)", "JR Yumesaki (Sakurajima) Line: Osaka Station → Universal City (~13 min, ~¥180)", "Total ~25 min from hotel — leave by 7:50am to hit gates at 8:30am", "Studio passes confirmed · 4 x Adult · Order confirmed"] },
      b: { label: "Must-Dos", items: ["Super Nintendo World — book timed entry via app on the day (book immediately at gate open)", "The Wizarding World of Harry Potter — Butterbeer + Hogwarts castle ride", "Hollywood Dream coaster + Minion Park for the kids"] },
      c: { label: "Tips", items: ["Download the USJ app before going — live wait times + timed entry booking", "Bring lunch or eat early — queues at food stalls peak 12–14:00", "Last train from Universal City ~22:00 → Osaka Station → hotel"] },
    },
    unsplashQuery: "universal studios japan osaka",
    transit: [
      { line: "Osaka Metro Midosuji Line", from: "Kitahama (Tanimachi Yonchome)", to: "Umeda/Osaka", duration: "~10 min", fare: "~¥200 (IC card)" },
      { line: "JR Yumesaki Line", from: "Osaka Station", to: "Universal City", duration: "~13 min", fare: "~¥180 (IC card)" },
    ],
  },
  {
    day: 16,
    date: "Tue 2 Jun",
    city: "Osaka",
    title: "Osaka Flex Day",
    objective: "Final full day — go big or go easy.",
    isFlexDay: true,
    plans: {
      a: { label: "Option A — Shinsekai + Tennoji", items: ["Subway to Shinsekai retro district (Osaka's old amusement town)", "Tsutenkaku Tower area — kushikatsu restaurants, street art", "Tennoji Park (free) or Tennoji Zoo (¥500 adults / ¥200 kids)", "Abeno Harukas — tallest building in Osaka"] },
      b: { label: "Option B — Relaxed Final Day", items: ["Shinsaibashi shopping arcade — final souvenir run", "Relaxed dinner at a proper izakaya", "Final Dotonbori night walk + Glico man photo"] },
      c: { label: "C Plan", items: ["Osaka Aquarium Kaiyukan (~$100 family)", "Tempozan Harbour Village"] },
    },
    unsplashQuery: "universal studios japan osaka",
  },
  {
    day: 17,
    date: "Wed 3 Jun",
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
  Kyoto: [8, 9, 10],
  Hiroshima: [11],
  Osaka: [12, 13, 14, 15, 16],
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
  Kyoto: 4,
  Hiroshima: 1,
  Osaka: 5,
};
