export type Plan = { label: string; items: string[] };

export type Transit = { line: string; from: string; to: string; duration: string; fare: string };

export type TimeBlock = {
  period: "Morning" | "Afternoon" | "Evening";
  activities: string[];
  foodRec?: string;
  tip?: string;
};

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
  timeBlocks?: TimeBlock[];
  dayTips?: string[];
  rainPlan?: string;
  photoSpot?: string;
  mustBook?: string;
  wishlistHits?: string[];
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
    timeBlocks: [
      { period: "Evening", activities: ["Private transfer drops at accommodation ~19:00", "7 min walk to Maruyamachō — drop bags, freshen up", "Konbini run: try melon bread, fruit sando, onigiri, chilled melon soda", "5 min walk to Shibuya scramble crossing — best viewed from 2F Starbucks window", "Ramen or izakaya dinner in Dogenzaka or Maruyamachō backstreets"], foodRec: "Fruit sando from 7-Eleven — must try on arrival night", tip: "Don't overplan tonight — you just flew. Early night = Day 2 energy." },
    ],
    dayTips: ["Buy Suica IC cards at JR East counter BEFORE leaving Narita arrivals hall — do this first", "7-Eleven directly next to Shibuya Station is open 24h for any late-night needs", "Shibuya crossing best viewed from 2F Starbucks — ask for a window seat"],
    rainPlan: "All indoor — konbini, hotel settle-in, izakaya dinner. Rain on arrival night is fine.",
    photoSpot: "Shibuya scramble crossing at night from 2F Starbucks window seat",
  },
  {
    day: 2,
    date: "Tue 19 May",
    city: "Tokyo",
    title: "Ueno + Akihabara",
    objective: "Northeast Tokyo in one corridor — craft workshop, famous burger, then full-on gaming and electronics district. Picolabo pearl workshop MUST be booked in advance.",
    plans: {
      a: { label: "A Plan", items: ["Picolabo pearl necklace workshop, Ueno (~2 hrs, ~¥5,000–8,000 — book ahead)", "Coin jewelry pressing in Ueno park area (vending-machine style, ¥200–500)", "The God Diner Ueno for lunch — wagyu burgers, photogenic food, arrive by 11:30", "JR: Ueno → Akihabara (1 stop, 3 min, ~¥140)", "Super Potato (5 floors retro games) + Mandarake (anime/collectibles)", "Yodobashi Camera (7 floors — luggage cheapest here in Tokyo)", "Round1 + Sega HEY arcades — crane machines, rhythm games, fighting games"] },
      b: { label: "B Plan", items: ["Kayleb: Pokémon card shops in Akihabara (Card Labooo, Amenity Dream)", "Kayleb: Mandarake for wall art scrolls + desk items", "Convenience store newspaper/magazine section (any Family Mart — Kayleb will love it)"] },
      c: { label: "C Plan", items: ["Daco Bakery Tokyo for dessert on the way home if open", "Yamanote home: Akihabara → Shibuya (~35 min, ~¥240)"] },
    },
    unsplashQuery: "akihabara tokyo night lights",
    highlights: ["Picolabo pearl workshop Ueno (book ahead)", "God Diner Ueno lunch", "Akihabara: Super Potato + Yodobashi + arcades", "Pokémon cards + collectibles for Kayleb"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Ueno", duration: "~28 min", fare: "~¥210 (IC card)" },
      { line: "JR Keihin-Tohoku / Yamanote", from: "Ueno", to: "Akihabara", duration: "~3 min", fare: "~¥140 (IC card)" },
      { line: "JR Yamanote Line", from: "Akihabara", to: "Shibuya (home)", duration: "~35 min", fare: "~¥240 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["Picolabo pearl necklace making workshop, Ueno (~2 hrs)", "Coin jewelry pressing nearby in Ueno park area"], foodRec: "Breakfast from konbini on the way — egg salad sando + hot coffee", tip: "Picolabo opens ~10am — arrive on time, you need full 2 hrs" },
      { period: "Afternoon", activities: ["The God Diner Ueno — wagyu burgers (arrive 11:30 before noon rush)", "JR 3 min to Akihabara", "Super Potato retro game shop (5 floors of classic games)", "Yodobashi Camera (buy luggage here — cheapest in Tokyo)", "Round1 Akihabara + Sega HEY arcades"], foodRec: "God Diner Ueno — wagyu burger, order the seasonal special", tip: "Akihabara opens fully after 14:00 — Mandarake, Super Potato all peak then" },
      { period: "Evening", activities: ["Mandarake collectibles + Pokémon card shops", "Convenience store magazine section browsing (Family Mart)", "Yamanote home Akihabara → Shibuya (~35 min)"], foodRec: "Daco Bakery Tokyo for dessert if passing through" },
    ],
    dayTips: ["Picolabo needs advance online booking — do this before leaving Australia", "God Diner gets busy 12–13:00 — arrive by 11:30", "Akihabara best after 14:00 when all floors open — plan lunch first", "Cash-heavy day — withdraw ¥20,000+ from ATM at Shibuya or Ueno"],
    rainPlan: "Fully indoor day — Picolabo workshop, God Diner, Yodobashi Camera, Mandarake, arcades. Rain is irrelevant.",
    photoSpot: "Akihabara electric town main crossing at dusk — neon signs, crowds, electric energy",
    mustBook: "Picolabo pearl workshop — book online at least 1 week before",
    wishlistHits: ["Picolabo pearl necklace (Marieta)", "Coin jewelry Ueno (Marieta)", "Pokémon cards (Kayleb)", "Luggage shopping (Yodobashi)", "Desk items (Kayleb)"],
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
    unsplashQuery: "shinjuku tokyo japan night",
    highlights: ["Bambi Coffee bear latte (queue early)", "JR Chuo to Nakano Broadway", "3+ hrs collectibles, patches, F1 merch", "ASMR TWIX Head Spa (book ahead)", "Omoide Yokocho lanterns at dusk"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Shinjuku", duration: "~6 min", fare: "~¥170 (IC card)" },
      { line: "JR Chuo Line", from: "Shinjuku", to: "Nakano", duration: "~4 min", fare: "~¥150 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["JR Yamanote to Shinjuku (~6 min)", "Bambi Coffee Shinjuku — queue before 10am opening for famous bear latte", "Shinjuku Station underground mall + Isetan basement food hall explore"], foodRec: "Bambi Coffee bear latte — Instagrammable and genuinely delicious", tip: "Arrive at Bambi Coffee 10 min before 10am opening to avoid 45-min wait" },
      { period: "Afternoon", activities: ["JR Chuo to Nakano (4 min)", "Nakano Broadway: 4 floors — Mandarake (all genres), anime figures, retro games, patches, F1 merch, wall art scrolls", "Return to Shinjuku", "ASMR TWIX TOKYO HEAD SPA — 60 min dry head massage (book ahead)"], foodRec: "Isetan Shinjuku B2 food hall — buy afternoon snacks before heading to Nakano", tip: "Nakano Broadway is cash heavy — ¥10,000+ on hand. Multiple Mandarake floors with different specialties." },
      { period: "Evening", activities: ["Omoide Yokocho (Memory Lane) — smoke-filled yakitori alley behind Shinjuku West Exit", "Kabukicho neon district walk (safe, photogenic)", "Ramen dinner in Shinjuku — Fuunji tsukemen is 5 min walk from station"], foodRec: "Fuunji tsukemen (dipping ramen) — Shinjuku, consistent queue, worth it" },
    ],
    dayTips: ["Nakano Broadway is cash only in most stores — withdraw ¥15,000+ before going", "Head spa needs booking at least 1 day ahead — book via their website tonight", "Bambi Coffee: 30 min wait is normal and absolutely worth it"],
    rainPlan: "Perfect rainy day — Nakano Broadway, Bambi Coffee, head spa, Shinjuku underground mall are all fully indoor.",
    photoSpot: "Omoide Yokocho lanterns and yakitori smoke at dusk — one of the most atmospheric Tokyo photo spots",
    mustBook: "ASMR TWIX TOKYO HEAD SPA — book 1–2 days ahead online",
    wishlistHits: ["ASMR TWIX Tokyo Head Spa (Marieta)", "Dry head spa (Kaylene)", "Marine patches (Kaylene)", "F1 Suzuka T-shirt (Kayleb)", "Wall art scroll (Kayleb)", "Small desk items (Kayleb)"],
  },
  {
    day: 4,
    date: "Thu 21 May",
    city: "Tokyo",
    title: "teamLab Borderless + Harajuku + Teddy Bear Onsen",
    objective: "LOCKED DAY — teamLab 8:30 entry confirmed, Teddy Bear Onsen 17:30–19:15 confirmed. Pack Harajuku shopping into the middle 5 hours.",
    plans: {
      a: { label: "Morning — teamLab", items: ["Leave accommodation 7:45am", "Tokyo Metro Hibiya Line: Shibuya → Roppongi (~15 min, ~¥200)", "Walk 10 min to Azabudai Hills (teamLab Borderless)", "8:30am CONFIRMED ENTRY — wear comfortable socks, lockers available, barefoot OK", "Allow 2.5–3 hrs inside — infinity rooms, forest of lamps, borderless world"], },
      b: { label: "Afternoon — Harajuku", items: ["Exit teamLab ~11:15am", "Tokyo Metro Hibiya Line → Meiji-Jingumae/Harajuku (~15 min)", "Lunch: Takeshita Street crepe or gyudon bowl", "Casetify / Cass:pace phone cases (Harajuku)", "Kiddyland (5 floors — Ghibli, Sanrio, Disney, Pokemon — kids will need a time budget)", "Liberty Walk / LaForet Harajuku (eclectic fashion, quirky)", "Takeshita Street crepes + cosplay fashion lane"], },
      c: { label: "Evening — Teddy Bear", items: ["17:15 head to Shibuya (1 stop Yamanote or 15 min walk from Harajuku)", "17:30–19:15: CONFIRMED — Hokkaido Menkoi Kumachan Onsen / Shibuya no Yu (teddy bear themed experience)", "Dinner near Shibuya crossing, early night"] },
    },
    unsplashQuery: "teamlab borderless tokyo digital art",
    highlights: ["teamLab Borderless 8:30am (confirmed)", "Kiddyland 5 floors + Casetify + Liberty Walk", "Teddy Bear experience 17:30–19:15 (confirmed)"],
    transit: [
      { line: "Tokyo Metro Hibiya Line", from: "Shibuya", to: "Roppongi (Azabudai Hills)", duration: "~15 min", fare: "~¥200 (IC card)" },
      { line: "Tokyo Metro Hibiya Line", from: "Roppongi", to: "Meiji-Jingumae (Harajuku)", duration: "~15 min", fare: "~¥200 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["7:45am leave accommodation", "Hibiya Line to Roppongi, walk to Azabudai Hills", "8:30am teamLab Borderless entry — 2.5–3 hrs inside", "Infinity rooms, forest of lamps, crystal universe, borderless worlds"], tip: "No flash needed — the art glows. Wear socks that won't slip. Lockers at entrance." },
      { period: "Afternoon", activities: ["Exit teamLab ~11:15am, head to Harajuku (~15 min Metro)", "Lunch on Takeshita Street (crepe or gyudon)", "Casetify/Cass:pace — phone cases (custom options)", "Kiddyland 5 floors (Pokemon 5F, Ghibli, Sanrio)", "Liberty Walk / LaForet Harajuku", "Takeshita Street lane — cosplay, fashion, crepes", "Walk south on Omotesando (luxury street, free to window shop)"], foodRec: "Takeshita Street crepe shops — banana chocolate cream, strawberry varieties", tip: "Kiddyland 5F is all Pokemon — Kayleb will need strict time limit here" },
      { period: "Evening", activities: ["17:15 — head to Shibuya (1 stop or walk)", "17:30–19:15: Hokkaido Menkoi Kumachan teddy bear experience (confirmed)", "Dinner near Shibuya crossing", "5 min walk home to accommodation"], foodRec: "Post-experience: ramen or izakaya in Maruyamachō backstreets" },
    ],
    dayTips: ["teamLab: bring a small bag for your phone — lockers available for large bags", "Kiddyland gets very crowded 13–15:00 — be strategic with floors", "Harajuku Takeshita Street is narrow and busy from noon — early is better", "Teddy Bear experience: confirmed booking, arrive 5 min early"],
    rainPlan: "Perfect rain day — teamLab (indoor), Kiddyland (indoor), Casetify (indoor), Teddy Bear experience (indoor).",
    photoSpot: "teamLab infinity mirror rooms — long exposure on phone camera | Takeshita Street entrance arch",
    mustBook: "teamLab Borderless 8:30 ✓ confirmed | Teddy Bear Onsen 17:30 ✓ confirmed",
    wishlistHits: ["Casetify phone cases (all)", "Kiddyland (all)", "Teddy bear onsen/hot pot (Marieta)"],
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
    highlights: ["Leave by 7:15am — Yamanote → Tokyo Station → Keiyo Line → Maihama", "Gates open 8am — prioritise Space Mountain + Big Thunder Mountain first", "3pm parade + night castle projection show", "Last train Maihama ~23:30"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Tokyo Station", duration: "~28 min", fare: "~¥210 (IC card)" },
      { line: "JR Keiyo Line", from: "Tokyo Station", to: "Maihama", duration: "~15 min", fare: "~¥220 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["7:15am leave accommodation", "Yamanote → Tokyo Station (~28 min) → JR Keiyo → Maihama (~15 min)", "8:00am gates open — join queue 10 min before", "Space Mountain (go immediately — shortest queue at opening)", "Big Thunder Mountain", "Haunted Mansion"], foodRec: "Pre-buy konbini breakfast for the train — eat on the way", tip: "Use the Tokyo Disney Resort app to book Premier Access rides — buy before entering gates" },
      { period: "Afternoon", activities: ["It's a Small World", "3pm parade — find a spot 30 min early", "Fantasyland attractions", "Lunch inside park — book table via app or queue early"], foodRec: "Disneyland themed food — try the character bento boxes. Popcorn buckets are park-exclusive.", tip: "Popcorn buckets are limited edition and sell out — buy early in the day" },
      { period: "Evening", activities: ["Night-time electrical parade", "Castle projection light show", "Final souvenir shop run (closes before park)", "Last train Maihama ~23:30 → Shibuya ~midnight"], tip: "Last 30 min of the night — ride Space Mountain again with no queue" },
    ],
    dayTips: ["Download Tokyo Disney Resort app and buy Premier Access before entering park", "No outside food/full meals — snacks OK. Buy themed food inside.", "Popcorn buckets (Disneyland-exclusive design) sell out by afternoon — buy early", "Book any sit-down restaurant through the app before the day"],
    rainPlan: "Park operates rain or shine — bring a poncho (¥1,000 at gate) or buy themed raincoat inside. Most major rides are covered.",
    photoSpot: "Sleeping Beauty Castle entrance in the morning light | Night electrical parade long exposure shot",
    mustBook: "Tokyo Disneyland tickets ✓ confirmed | Premier Access via app on the day | Restaurant via Disney Resort app",
    wishlistHits: ["Snoopy merch shop inside park (Kaylene)", "Special edition sweets (Kayleb)", "Disney character souvenirs (Marieta)"],
  },
  {
    day: 6,
    date: "Sat 23 May",
    city: "Tokyo",
    title: "Flea Market + Snoopy Museum",
    objective: "Last full Tokyo day — weekend flea market in Shinagawa, then Snoopy Museum south of Shibuya. Pack for Kyoto tonight.",
    plans: {
      a: { label: "Flea Market (Morning)", items: ["JR Yamanote: Shibuya → Shinagawa (2 stops south, ~6 min, ~¥170)", "Tokyo Weekend Flea Market — opens ~9am, cash only", "Vintage items, Japanese collectibles, ceramics, art prints, retro fashion", "Budget ¥5,000–¥15,000 per person for finds", "Lunch in Atre Shinagawa mall attached to station"] },
      b: { label: "Snoopy Museum (Afternoon)", items: ["Tokyu Den-en-toshi Line: Shibuya → Chūō-Rinkan, transfer to Sagami Railway → Minami-Machida Granberry Park (~50 min)", "Snoopy Museum Tokyo (book tickets ahead — sells out on weekends, 1–2 hrs)", "Snoopy-themed café inside the museum", "Granberry Park shopping centre adjacent"] },
      c: { label: "Odaiba Alternative", items: ["If skipping Snoopy: JR Rinkai Line from Osaki → Tokyo Teleport (Odaiba, ~15 min)", "Joypolis indoor amusement park (¥800 entry + rides)", "DiverCity Tokyo with life-size Gundam statue (free)", "Odaiba waterfront views of Rainbow Bridge"] },
    },
    unsplashQuery: "snoopy museum tokyo japan",
    highlights: ["Weekend flea market at Shinagawa (cash only, arrive early)", "Snoopy Museum Minami-Machida (book ahead)", "Last full Tokyo day — pack for Kyoto tonight"],
    transit: [
      { line: "JR Yamanote Line", from: "Shibuya", to: "Shinagawa", duration: "~6 min", fare: "~¥170 (IC card)" },
      { line: "Tokyu Den-en-toshi / Sagami Railway", from: "Shibuya", to: "Minami-Machida Granberry Park", duration: "~50 min", fare: "~¥500 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["JR Yamanote to Shinagawa (~6 min)", "Tokyo Weekend Flea Market — arrive by 9am for best finds", "Cash only — withdraw at Shinagawa ATM first", "Vintage, ceramics, art prints, Japanese collectibles", "Lunch: Atre Shinagawa food hall in the station"], foodRec: "Atre Shinagawa has a great bakery and food options on B1", tip: "Flea market is cash only — withdraw ¥20,000–30,000 before entering" },
      { period: "Afternoon", activities: ["Tokyu train to Minami-Machida Granberry Park (~50 min from Shibuya)", "Snoopy Museum Tokyo — 1–2 hrs, book tickets online", "Snoopy café inside for afternoon tea/sweets", "Granberry Park outdoor mall adjacent"], foodRec: "Snoopy Museum café — themed desserts and drinks, limited edition menu", tip: "Snoopy Museum tickets sell out on weekends — must book online before the day" },
      { period: "Evening", activities: ["Return to Shibuya", "Pack bags for Kyoto — Shinkansen tomorrow 11:18 from Tokyo Station", "Last konbini run — stock up on favourite snacks before leaving Tokyo", "Optional: final Shibuya crossing crossing for send-off photos"] },
    ],
    dayTips: ["Snoopy Museum MUST be booked online ahead — sells out on Saturdays", "Flea market is cash only — ATM is in Shinagawa Station or Atre Shinagawa mall", "Pack tonight — leave accommodation by 10:20am tomorrow for the Shinkansen"],
    rainPlan: "If heavy rain, skip flea market → head straight to Snoopy Museum (indoor) or Odaiba Joypolis (fully indoor amusement park). Joypolis is excellent rain backup.",
    photoSpot: "Snoopy Museum themed photo walls and Snoopy installations | Flea market vintage finds flat-lay",
    mustBook: "Snoopy Museum Tokyo tickets — book online minimum 1 day ahead (weekends sell out)",
    wishlistHits: ["Snoopy Museum (Kaylene)", "Flea market vintage finds (Marieta)", "Nala Dears character goods (check Granberry Park stores)"],
  },
  {
    day: 7,
    date: "Sun 24 May",
    city: "Transit",
    title: "Tokyo → Kyoto",
    objective: "Scenic Shinkansen transfer. Nozomi 373 confirmed — Platform 18, Car 15, Seats 16A–D. Mt Fuji visible from left side of train ~45 min after departure.",
    plans: {
      a: { label: "Confirmed — Nozomi 373", items: ["Leave accommodation by 10:20am", "Yamanote or Ginza Line: Shibuya → Tokyo Station (~20–28 min)", "Nozomi 373: Tokyo Station Platform 18 departs 11:18 → Kyoto arrives 13:29 (2h 11m)", "Car 15 · Seats 16A, 16B, 16C, 16D (4 seats together) · Oversized luggage space booked", "IMPORTANT: Sit on LEFT side — Mt Fuji visible roughly 40–50 min after departing Tokyo", "Check into Airbnb at 北門前町５０７, Kyoto", "Afternoon: Nishiki Market for first taste of Kyoto street food", "Evening: Pontocho alley dinner — lantern-lit narrow lanes"] },
      c: { label: "Backup", items: ["If missed Nozomi 373: next available Hikari or Nozomi to Kyoto — platform staff can help", "Rest evening — long travel day"] },
    },
    unsplashQuery: "shinkansen mount fuji japan",
    transit: [
      { line: "JR Yamanote / Ginza Line", from: "Shibuya", to: "Tokyo Station", duration: "~20–28 min", fare: "~¥210 (IC card)" },
      { line: "Shinkansen Nozomi 373 (confirmed)", from: "Tokyo Station (Platform 18)", to: "Kyoto", duration: "2h 11m", fare: "AUD 648.19 total · Order #5429934322" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["10:20am leave accommodation", "Yamanote/Ginza Line to Tokyo Station (~20–28 min)", "11:18am Nozomi 373 departs Platform 18", "Sit LEFT side for Mt Fuji view ~40–50 min in"], foodRec: "Buy ekiben (station bento box) at Tokyo Station before boarding — incredible variety", tip: "Arrive at Tokyo Station by 10:50 to find Platform 18 and settle before departure" },
      { period: "Afternoon", activities: ["13:29 arrive Kyoto Station", "Check into accommodation 北門前町５０７", "Nishiki Market (5 min walk from central Kyoto) — first taste of Kyoto street food", "Tofu donuts, pickles, kyoto-style dango on skewers"], foodRec: "Nishiki Market tofu donuts at Murakami-ju — buy immediately on arrival" },
      { period: "Evening", activities: ["Pontocho alley dinner — lantern-lit, atmospheric, narrow lane along Kamo River", "Kamo River walk (free) — locals sit on the riverbank at dusk"], foodRec: "Pontocho restaurants: look for set menus with local tofu and Kyoto cuisine. Mid-range ¥2,000–4,000/person." },
    ],
    dayTips: ["Consider Yamato Transport (Kuroneko) luggage forwarding — send bags Shibuya → Kyoto hotel day before (¥1,500–2,500/bag)", "Sit LEFT side of Shinkansen for Mt Fuji — right side has no view", "Tokyo Station ekiben selection is world-class — arrive 15 min early just to browse"],
    rainPlan: "Transit day — weather irrelevant. All train and station activities are indoor.",
    photoSpot: "Mt Fuji from Shinkansen window (left side, ~40 min after Tokyo) | Pontocho alley lanterns at dusk",
    mustBook: "Shinkansen Nozomi 373 ✓ confirmed — Order #5429934322",
  },
  {
    day: 8,
    date: "Mon 25 May",
    city: "Kyoto",
    title: "Fushimi Inari + Nishiki Market + Chopstick Workshop",
    objective: "Start with the most photogenic sight in Japan before the crowds arrive, then explore Kyoto's food market and make your own chopsticks.",
    plans: {
      a: { label: "Morning — Fushimi Inari", items: ["6:30am depart — JR Nara Line from Kyoto Station → Inari (2 stops, 5 min, ¥140)", "Arrive Fushimi Inari 7am — walk upper torii gates path (95% of tourists arrive after 9am)", "Family recommendation: Yotsutsuji viewpoint (~45 min up) — panoramic Kyoto views + far fewer people", "Full mountain hike = 3–4 hrs | Lower section only = 1.5 hrs"] },
      b: { label: "Midday — Nishiki + Lunch", items: ["Return central Kyoto by 10am", "Nishiki Market (opens 10am) — tofu donuts, Kyoto pickles, skewered tofu, matcha ice cream", "Teramachi covered arcade connecting south — souvenir browsing", "Chao Chao Gyoza (Kawaramachi) — arrive by noon to beat queue"] },
      c: { label: "Afternoon — Workshop", items: ["Custom chopstick making workshop (~2 hrs, ~¥4,000 — book via Airbnb Experiences or Voyagin)", "Kawaramachi/Shijo area evening — Takashimaya department store basement food hall for kaiseki-style bento"] },
    },
    unsplashQuery: "fushimi inari torii gates kyoto",
    transit: [
      { line: "JR Nara Line", from: "Kyoto Station", to: "Inari", duration: "~5 min", fare: "~¥140 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["6:30am depart accommodation", "JR to Inari Station (5 min)", "7am arrive Fushimi Inari — near empty before 8am", "Walk torii gate tunnel to Yotsutsuji viewpoint (~45 min)", "Return to central Kyoto by 10am"], foodRec: "Breakfast from konbini before leaving — or buy fresh warabi mochi at a stall near Inari entrance", tip: "Go before 8am — after 10am it becomes shoulder-to-shoulder. The golden hour light through orange gates is magical." },
      { period: "Afternoon", activities: ["Nishiki Market (10am) — tofu donuts, Kyoto pickles, skewered food", "Teramachi covered arcade explore", "Chao Chao Gyoza for lunch (arrive by noon)", "Custom chopstick making workshop (~2 hrs)"], foodRec: "Chao Chao Gyoza — order the gyoza set, pan-fried and steamed both. ¥1,200–1,800/person.", tip: "Chao Chao queues after 12:30 — arrive right at noon. Worth the wait if you miss opening." },
      { period: "Evening", activities: ["Kawaramachi/Shijo shopping + explore", "Takashimaya B2 food hall — depachika experience (basement food hall)", "Pontocho dinner or Nishiki night street food"], foodRec: "Takashimaya basement food hall has incredible Kyoto-style prepared foods, wagashi sweets, and box meals" },
    ],
    dayTips: ["Fushimi Inari is FREE — no ticket needed, open 24 hours", "Nishiki Market best between 10am–12pm before afternoon crowds", "Chopstick workshop must be booked in advance — Airbnb Experiences or Voyagin"],
    rainPlan: "If heavy rain, skip Fushimi Inari → all-indoor: Nishiki Market (covered), Teramachi arcade, chopstick workshop, Takashimaya food hall.",
    photoSpot: "Fushimi Inari torii tunnel at 7am with almost no people — the most photographed shot in Kyoto",
    mustBook: "Chopstick making workshop — book at least 2 days ahead on Airbnb Experiences",
    wishlistHits: ["Chopstick making (Marieta)", "Chao Chao dumplings", "Matcha soft serve (any stall in Nishiki)"],
  },
  {
    day: 9,
    date: "Tue 26 May",
    city: "Kyoto",
    title: "Higashiyama + Gion + Owl Forest Cafe",
    objective: "The UNESCO walking district of Kyoto — ancient stone lanes, geisha district, owl cafe. Arrive at Kiyomizudera before 8am for the magic.",
    plans: {
      a: { label: "Morning — Kiyomizudera", items: ["7:30am depart — bus or taxi to Kiyomizudera (opens 6am)", "Arrive before 8am — magically empty, mist over Kyoto visible from main stage", "Otowa waterfall (3 streams: love, success, longevity — pick only 2 of 3)", "Sannenzaka + Ninenzaka cobblestone lanes — photo heaven, matcha soft serve stops"] },
      b: { label: "Midday — Gion District", items: ["Walk north 20 min from Kiyomizudera to Gion", "Hanamikoji lane (geisha district) — do NOT photograph geisha directly", "Yasaka Shrine (free, atmospheric)", "Gion lunch: local soba or tofu restaurant"] },
      c: { label: "Afternoon — Owl Cafe", items: ["Owl Forest Cafe (Kyoto) — 1.5 hrs with owls, reservation required", "Return via Philosopher's Path (free, 2km canal walk, bus from Gion 20 min)"] },
    },
    unsplashQuery: "higashiyama kyoto japan",
    timeBlocks: [
      { period: "Morning", activities: ["7:30am depart", "Bus/taxi to Kiyomizudera — arrive before 8am (near empty)", "Otowa waterfall (pick 2 of 3 streams)", "Sannenzaka cobblestone lane — matcha soft serve at local stalls", "Ninenzaka lane continuing north"], foodRec: "Matcha soft serve from any stall on Sannenzaka — Kyoto matcha is deeper and more bitter than Tokyo versions", tip: "Kiyomizudera is sometimes under scaffolding restoration — check their website before going" },
      { period: "Afternoon", activities: ["Walk north to Gion (20 min)", "Hanamikoji geisha lane — best 17:00–18:30 for geisha sightings", "Yasaka Shrine explore (free)", "Gion lunch at local soba restaurant", "Owl Forest Cafe reservation"], foodRec: "Gion tofu restaurant: yudofu (simmered tofu) is a Kyoto specialty — try at a traditional restaurant", tip: "Hanamikoji: don't approach, photograph, or block geisha paths — it's disrespectful and they are working" },
      { period: "Evening", activities: ["Philosopher's Path if time (2km, free, canal lined with cherry blossom trees)", "Dinner back in Gion or Pontocho"], foodRec: "Pontocho alley — last night here, try something different from night 1" },
    ],
    dayTips: ["Kiyomizudera opens 6am — before 8am you'll have it nearly to yourself", "Owl cafe: book minimum 1 day ahead — search 'Kyoto Owl Forest Cafe' for current locations", "Hanamikoji evening is the best geisha photo opportunity — use a long lens and don't block the path"],
    rainPlan: "Sannenzaka has partially covered sections + owl cafe is fully indoor. Kiyomizudera is still beautiful in rain (mist and fog add atmosphere).",
    photoSpot: "Kiyomizudera main stage view over Kyoto in morning mist | Sannenzaka empty cobblestone lane at 7:30am",
    mustBook: "Owl Forest Cafe reservation — book 1–2 days ahead",
    wishlistHits: ["Owl Forest Cafe (Marieta)", "Japanese nails in Gion area (Kaylene — nail salons along Hanamikoji)"],
  },
  {
    day: 10,
    date: "Wed 27 May",
    city: "Kyoto",
    title: "Arashiyama — Bamboo Grove + Monkey Park",
    objective: "Northwest Kyoto's most stunning area. Bamboo Grove before 8am, then tenryuji garden, Monkey Park hill climb, and Arashiyama village shopping.",
    plans: {
      a: { label: "Morning — Bamboo Grove", items: ["7:00am depart — Hankyu Line: Kawaramachi → Katsura → Arashiyama (30 min, ¥220)", "OR JR Sagano Line from Kyoto Station → Saga-Arashiyama (25 min, ¥240)", "7:30am Bamboo Grove arrive — ghostly, light-filtered, near silent before crowds", "Allow 30–45 min in the grove", "Tenryuji temple + Sogenchi garden (¥500 — one of Japan's finest Zen gardens)"] },
      b: { label: "Midday — Monkey Park", items: ["Togetsukyo Bridge + Oi River views", "Monkey Park Iwatayama — 20 min uphill hike, monkeys roam free above, feed through wire (¥550 adult)", "Lunch: tofu restaurant or tempura set in Arashiyama village"] },
      c: { label: "Afternoon — Village", items: ["Rickshaw ride along the river (~¥4,500/30 min, 2 people — English commentary)", "Kimono Forest art installation at Saga-Arashiyama station (free)", "Souvenir shopping: bamboo goods, Kyoto pottery, matcha kits", "Kayleb: traditional Japanese matcha kit from local specialty shop"] },
    },
    unsplashQuery: "arashiyama bamboo grove kyoto",
    transit: [
      { line: "Hankyu Line", from: "Kawaramachi", to: "Arashiyama (via Katsura)", duration: "~30 min", fare: "~¥220 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["7:00am depart", "Hankyu or JR to Arashiyama (~25–30 min)", "7:30am: Bamboo Grove — almost empty, incredible morning light through the canopy", "30–45 min in the grove", "Tenryuji temple + garden (opens 8:30am)"], foodRec: "No breakfast needed until after bamboo — konbini snack beforehand is fine", tip: "Bamboo Grove before 8am = near empty. After 10am = tourist shoulder-to-shoulder. The difference is dramatic." },
      { period: "Afternoon", activities: ["Togetsukyo Bridge walk + river views", "Monkey Park Iwatayama (20 min uphill hike, monkeys at the top)", "Lunch in Arashiyama village"], foodRec: "Tofu restaurant in Arashiyama — Kyoto tofu is world class. Look for yudofu set meal along the main street.", tip: "Monkey Park hike takes 20 min — carry water, wear comfortable shoes. Monkeys at the top will steal food if you hold it outside." },
      { period: "Evening", activities: ["Rickshaw ride along the Oi River (optional)", "Kimono Forest light installation at station", "Souvenir shopping: bamboo crafts, matcha kits, Kyoto pottery", "Return to Kyoto city for dinner", "Pack bags for Hiroshima tomorrow morning"], foodRec: "Arashiyama village has excellent matcha soft serve and chestnut sweet shops" },
    ],
    dayTips: ["Bamboo Grove: go before 8am — not negotiable if you want the iconic empty-path photos", "Monkey Park is a genuinely steep hike — carry water. Best for kids who like animals.", "Pack for Hiroshima tonight — early departure tomorrow morning"],
    rainPlan: "Bamboo Grove is beautiful in rain (mist adds atmosphere) | Tenryuji garden has covered sections | Arashiyama village shops are indoor",
    photoSpot: "Bamboo Grove looking straight up at the canopy at 7:30am | Togetsukyo bridge at golden hour with mountains behind",
    wishlistHits: ["Matcha kit (Kayleb — Arashiyama specialty shops)", "Bamboo souvenirs", "Rickshaw ride experience"],
  },
  {
    day: 11,
    date: "Thu 28 May",
    city: "Hiroshima",
    title: "Kyoto → Hiroshima + Peace Memorial",
    objective: "Transfer day then one of the most profound experiences in Japan. Peace Memorial Museum requires 2–3 hours and is emotionally significant.",
    plans: {
      a: { label: "Morning — Transfer", items: ["Check out of Kyoto accommodation", "Shinkansen Hikari: Kyoto → Hiroshima (~50 min, JR West Pass or ~¥11,000)", "Check into hotel near central tram area", "Tram from central Hiroshima to Peace Park (¥180)"] },
      b: { label: "Afternoon — Peace Memorial", items: ["Peace Memorial Park — enter via the main gate bridge", "Peace Memorial Museum — allow 2–3 hours (admission ¥200 adult)", "A-Bomb Dome exterior (adjacent, no entry, free — most haunting structure)", "Paper Crane Memorial + Children's Peace Monument", "Hiroshima Castle exterior if time (10 min walk)"] },
      c: { label: "Evening — Okonomiyaki", items: ["MUST DO: Hiroshima-style okonomiyaki at Okonomi Mura", "3-floor building with individual chef stalls — layered noodles, very different from Osaka style", "Each stall has their own recipe — visit 2 if hungry (¥800–1,200 per bowl)"] },
    },
    unsplashQuery: "hiroshima peace memorial park",
    transit: [
      { line: "Shinkansen Hikari", from: "Kyoto", to: "Hiroshima", duration: "~50 min", fare: "JR West Pass or ~¥11,000" },
      { line: "Hiroshima Tram (Line 2/6)", from: "Hiroshima Station", to: "Peace Park (Genbaku-Dome-Mae)", duration: "~15 min", fare: "¥180 (flat fare)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["Check out Kyoto accommodation", "Shinkansen Hikari to Hiroshima (~50 min)", "Check into hotel, drop bags"], tip: "Consider luggage forwarding to Osaka hotel from Hiroshima (Yamato Transport) so you travel light on Day 12" },
      { period: "Afternoon", activities: ["Tram to Peace Park (15 min, ¥180)", "Peace Memorial Museum (2–3 hrs, ¥200)", "A-Bomb Dome exterior — most haunting UNESCO site in the world", "Paper Crane Memorial + Children's Peace Monument"], foodRec: "Light lunch near the tram stop before entering the museum — you won't feel like eating after", tip: "Peace Museum is emotionally heavy — give kids context before going. Allow time to sit quietly afterward." },
      { period: "Evening", activities: ["Okonomi Mura building — 3 floors of okonomiyaki chef stalls", "Hiroshima-style = layered with noodles (not mixed like Osaka)", "Order at counter and watch the chef cook in front of you"], foodRec: "Hiroshima okonomiyaki — try the soba noodle style with pork and egg. ¥800–1,200 per bowl. Order 2 if hungry." },
    ],
    dayTips: ["Peace Museum takes longer than expected — 2 hrs minimum, 3 hrs to read everything", "Hiroshima castle is a 1958 reconstruction but the grounds are beautiful for a short walk", "Okonomi Mura: go hungry, order one bowl, decide if you want another before leaving"],
    rainPlan: "Perfect day to be inside — Peace Museum is indoor. Tram network means no walking in rain.",
    photoSpot: "A-Bomb Dome reflected in Motoyasu River at dusk | Peace Park Flame of Peace with dome in background",
    wishlistHits: ["Hiroshima okonomiyaki (all)", "Peace Memorial Museum (culturally significant)"],
  },
  {
    day: 12,
    date: "Fri 29 May",
    city: "Transit",
    title: "Miyajima Morning → Osaka",
    objective: "Early ferry to Miyajima for the floating torii, deer, and island magic. Back by midday then Shinkansen to Osaka. Check tide times night before.",
    plans: {
      a: { label: "Morning — Miyajima", items: ["7:30am ferry from Miyajimaguchi terminal (JR Pass covers this, 10 min)", "Arrive Miyajima 7:40am — floating torii before crowds", "Itsukushima Shrine walkway (¥300) + torii gate at high tide = torii 'floats'", "Freely roaming deer EVERYWHERE — they will try to eat your map and tickets", "Daisho-in temple (15 min walk from ferry, quieter, beautiful thousand lanterns)", "Momiji manju — buy fresh from stores near ferry, hot from the mold"] },
      b: { label: "Ropeway (optional)", items: ["Mt Misen Ropeway: ¥1,840 adult, 30 min each way, panoramic views — if time before midday departure", "Adds ~2 hrs — only if very early start"] },
      c: { label: "Afternoon — Osaka", items: ["12:00pm return ferry to mainland", "12:30pm Shinkansen Hikari: Hiroshima → Shin-Osaka (~45 min)", "~14:30 arrive Osaka, check in Sotetsu Fresa Inn Kitahama", "Evening: Dotonbori walk — Glico man photo, takoyaki from Kukuru or Wanaka, canal atmosphere"] },
    },
    unsplashQuery: "miyajima floating torii gate japan",
    transit: [
      { line: "JR Ferry (JR Pass included)", from: "Hiroshima-Miyajimaguchi", to: "Miyajima", duration: "~10 min", fare: "JR Pass included" },
      { line: "Shinkansen Hikari", from: "Hiroshima", to: "Shin-Osaka", duration: "~45 min", fare: "JR West Pass or ~¥10,560" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["7:15am leave hotel", "JR to Miyajimaguchi, ferry to Miyajima (JR Pass = free)", "7:40am arrive — floating torii before crowds", "Itsukushima Shrine walkway (¥300)", "Deer interaction — they bow, they steal, they're adorable", "Daisho-in temple quiet walk", "Fresh momiji manju from roadside stove"], foodRec: "Momiji manju fresh from the mold, near the ferry terminal — the hot version is entirely different from the packaged souvenir version", tip: "Check tide times the night before on miyajima-ferry.com — high tide makes torii 'float', low tide you can walk to it" },
      { period: "Afternoon", activities: ["12:00pm return ferry to mainland", "Shinkansen Hiroshima → Shin-Osaka (~45 min)", "Check in Sotetsu Fresa Inn Kitahama", "First Osaka impression: walk to nearby Dotonbori (~15 min subway or 30 min walk from hotel"], foodRec: "First Osaka meal: takoyaki at Kukuru or Wanaka in Dotonbori — the best version you'll try in Japan" },
      { period: "Evening", activities: ["Glico running man photo (iconic Dotonbori bridge shot)", "Dotonbori canal walk at night — neon reflections", "Early night — big Osaka days ahead"], foodRec: "Osaka ramen vs Kyoto ramen: Osaka tends toward rich tonkotsu or shoyu — try one bowl tonight" },
    ],
    dayTips: ["Check tide times at Miyajima the night before (key for torii photo)", "Deer are wild — do NOT hold crackers above waist height (they will jump)", "Momiji manju: fresh from the stove near ferry = incomparably better than packaged souvenirs"],
    rainPlan: "Miyajima in rain is atmospheric (mist over the torii). Itsukushima Shrine is mostly covered walkways. Shinkansen and hotel are all weather.",
    photoSpot: "Floating torii gate at high tide in the early morning | Deer with shrine in background | Daisho-in thousand stone lanterns",
    wishlistHits: ["Miyajima deer interaction (all)", "Momiji manju", "Dotonbori Glico photo"],
  },
  {
    day: 13,
    date: "Sat 30 May",
    city: "Osaka",
    title: "Nara Day Trip + Osaka Food Night",
    objective: "Nara in the morning for deer and the world's largest wooden building, then return to Osaka for the city's best street food evening. Kids will talk about the deer forever.",
    plans: {
      a: { label: "Morning — Nara", items: ["Kintetsu Nara Line from Osaka-Namba → Kintetsu-Nara (35 min, ¥690 — faster than JR)", "Arrive ~9am — Nara Park with 1,000+ free-roaming deer", "Buy deer crackers (¥200 at stalls) — deer genuinely bow to ask for them", "Todai-ji temple — giant Buddha statue (¥600, largest wooden building in the world)", "Kasuga Taisha shrine (free) — atmospheric lantern-lined forested path", "Naramachi old merchant town (free walk, historic Edo-period houses)"] },
      b: { label: "Afternoon — Return", items: ["Return to Osaka by 15:00", "Kuromon Ichiba market (closes ~18:00) — fresh wagyu skewers, sea urchin, oysters, Kobe beef", "Known as 'Osaka's kitchen' — one of the great food markets in Japan"] },
      c: { label: "Evening — Dotonbori", items: ["Dotonbori evening food crawl: takoyaki, kushikatsu, matcha parfait, Ichiran ramen", "Giant 6-story arcade in Namba area (Round1 Stadium or comparable)", "Glico man selfie at night (best when canal neons are fully lit)"] },
    },
    unsplashQuery: "nara deer park japan",
    transit: [
      { line: "Kintetsu Nara Line", from: "Osaka-Namba", to: "Kintetsu-Nara", duration: "~35 min", fare: "~¥690 (IC card, no JR Pass)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["Kintetsu from Namba to Nara (~35 min)", "9am arrive Nara Park", "Buy deer crackers at entrance stalls (¥200)", "Todai-ji giant Buddha (arrive before 10am, queue builds fast)", "Kasuga Taisha shrine (free, gorgeous forested path)", "Naramachi old town walk"], foodRec: "Naramachi has excellent cafes and mochi shops — try yomogimochi (mugwort rice cake)", tip: "Deer BOW to ask for crackers — video this. Do NOT hold crackers above your waist or they will jump up." },
      { period: "Afternoon", activities: ["Return to Osaka by 3pm", "Kuromon Ichiba market (closes 18:00)", "Fresh wagyu skewers, uni, oysters, Kobe beef at stalls"], foodRec: "Kuromon Ichiba: wagyu beef skewer ¥600–1,200, fresh oysters ¥200 each, sea urchin ¥800. Buy and eat as you walk.", tip: "Kuromon closes at 18:00 sharp — don't arrive after 17:30" },
      { period: "Evening", activities: ["Dotonbori food street", "Giant arcade in Namba (Round1 Stadium LALAPORT or similar)", "Glico running man second visit at night (better neon reflections)"], foodRec: "Ichiran ramen (solo booth ramen — unique Japanese dining experience). Dotonbori location has queues but moves fast." },
    ],
    dayTips: ["Kintetsu is faster than JR to Nara AND doesn't require JR Pass — better option", "Deer crackers are sold at multiple stalls near the park entrance — buy 2 packets minimum", "Kuromon Ichiba is best 10am–14:00 — by 17:00 many stalls are packing up"],
    rainPlan: "Todai-ji temple is indoor. Kuromon Ichiba market is covered. Nara in rain is atmospheric with misty forested paths.",
    photoSpot: "Deer bowing for crackers with Todai-ji behind | Kasuga Taisha lantern-lined forested path",
    wishlistHits: ["Nara deer (all)", "Giant 6-story arcade Osaka (Marieta)", "Kuromon Ichiba market food"],
  },
  {
    day: 14,
    date: "Sun 31 May",
    city: "Osaka",
    title: "Osaka Castle + Digital Art + Shinsaibashi",
    objective: "Osaka Castle is 15 min walk from the hotel. Afternoon: Osaka digital art experience + Shinsaibashi shopping. Easy day geographically — most things connect.",
    plans: {
      a: { label: "Morning — Osaka Castle", items: ["15 min walk from Sotetsu Fresa Inn Kitahama to Osaka Castle Park", "Castle exterior (free) + castle moat gardens", "Interior museum (¥600 adult / ¥300 child) — Sengoku era history, views from top", "Ninomaru Garden (free) — beautiful rose garden inside the castle grounds", "Nakanoshima island walk (10 min from castle) — riverside, museums, public art, free"] },
      b: { label: "Afternoon — Digital Art", items: ["OSAKA DIGITAL ART MIRACLE WORLD / Teamlab Botanical Garden or similar (check current exhibition)", "Shinsaibashi shopping arcade (2 stops by subway from Kitahama)", "Don Quijote Shinsaibashi (6 floors of everything — tax free with passport)", "Character stores along Shinsaibashi-suji"] },
      c: { label: "Evening — Dotonbori", items: ["Dotonbori food crawl — fresh oysters, matcha parfait, kushikatsu at Daruma", "Hozenji Yokocho alley — moss-covered shrine, atmospheric, off the main tourist path"] },
    },
    unsplashQuery: "osaka castle japan",
    transit: [
      { line: "Walk (15 min)", from: "Sotetsu Fresa Inn Kitahama", to: "Osaka Castle Park", duration: "~15 min", fare: "Free" },
      { line: "Osaka Metro Tanimachi Line", from: "Kitahama", to: "Tanimachi 4-chome (Castle alt)", duration: "~5 min", fare: "~¥180 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["15 min walk to Osaka Castle Park", "Castle exterior gardens (free)", "Interior museum ¥600 — Sengoku era + views from top floor", "Ninomaru Garden rose walk (free)", "Nakanoshima island riverside walk"], foodRec: "Kitahama area has excellent coffee shops — grab breakfast before leaving hotel (Kitahama Retro is a famous old building cafe)", tip: "Osaka Castle closes at 17:00 — don't leave this too late in the day" },
      { period: "Afternoon", activities: ["Osaka Digital Art experience (Teamlab / Naked / OMOSIROI — check current schedule)", "Shinsaibashi shopping arcade (2 subway stops from Kitahama)", "Don Quijote (6 floors, tax free with passport)", "Character merchandise stores along Shinsaibashi-suji"], foodRec: "Shinsaibashi has excellent dessert cafes — matcha parfait at a department store tea room", tip: "Don Quijote: bring your passport for tax-free shopping on purchases over ¥5,000. Staff at tax-free counter on upper floors." },
      { period: "Evening", activities: ["Dotonbori evening food crawl", "Hozenji Yokocho (moss-covered shrine alley, atmospheric side street)"], foodRec: "Kushikatsu Daruma Dotonbori — fried skewers dipped in sauce (no double dipping rule). Order the set." },
    ],
    dayTips: ["Don Quijote: bring passport for tax-free shopping — saves 10% on everything", "Digital art shows in Osaka rotate — check Teamlab Osaka, Naked, or OMOSIROI for current schedule", "Osaka Castle closes at 17:00 — morning visit only"],
    rainPlan: "Osaka Castle interior is indoor. All shopping (Don Quijote, Shinsaibashi) is indoor or covered arcade. Digital art is fully indoor.",
    photoSpot: "Osaka Castle reflected in the moat | Don Quijote Dotonbori sign at night (the spinning pufferfish)",
    wishlistHits: ["OSAKA DIGITAL ART MIRACLE WORLD (Marieta)", "Don Quijote shopping (all)", "Giant arcade Osaka (Marieta — Namba area Day 13 or today)"],
  },
  {
    day: 15,
    date: "Mon 1 Jun",
    city: "Osaka",
    title: "Universal Studios Japan — Full Day",
    objective: "LOCKED — 4 x Adult Studio Pass confirmed. Gates 8:30am. Nintendo World timed entry books on the USJ app at park opening — book at exactly 8:31am.",
    plans: {
      a: { label: "Getting There", items: ["Leave hotel 7:50am", "Osaka Metro Midosuji Line: near hotel → Umeda (~10 min, ~¥200)", "JR Yumesaki (Sakurajima) Line: Osaka Station → Universal City (~13 min, ~¥180)", "Total ~25 min — arrive gates by 8:20am, join queue"] },
      b: { label: "Strategy — Must-Dos", items: ["8:31am: Open USJ app immediately, book Super Nintendo World timed entry (fills in minutes)", "Go straight to Harry Potter zone (Wizarding World) before 10am — queue <30 min", "Hollywood Dream coaster early (queue <20 min before 10am)", "Butterbeer at HP zone (¥820 — frozen is better than regular)", "Super Nintendo World: Mario Power-Up Band wristband (¥2,000 extra — Kayleb must have this)"] },
      c: { label: "Tips", items: ["Download USJ app BEFORE the day — set up account and add tickets", "Bag storage lockers at entrance (¥300–600)", "Minion Park after 14:00 — queues shorter late afternoon", "Last train Universal City ~21:00", "USJ-exclusive souvenirs: HP wand (¥4,000), Mario wristband, Minion merch not sold elsewhere"] },
    },
    unsplashQuery: "universal studios japan osaka",
    transit: [
      { line: "Osaka Metro Midosuji Line", from: "Kitahama (Tanimachi Yonchome)", to: "Umeda/Osaka", duration: "~10 min", fare: "~¥200 (IC card)" },
      { line: "JR Yumesaki (Sakurajima) Line", from: "Osaka Station", to: "Universal City", duration: "~13 min", fare: "~¥180 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["7:50am leave hotel", "Metro + JR to Universal City (~25 min total)", "8:20am join gates queue", "8:30am enter — immediately open USJ app and book Nintendo World timed entry", "Harry Potter zone first (Hogwarts castle ride, Butterbeer, Ollivanders wand experience)", "Hollywood Dream coaster (best queue before 10am)"], foodRec: "Butterbeer at Three Broomsticks in HP zone — ¥820, frozen version is the best", tip: "Nintendo World timed entry on the USJ app fills within 2 minutes of park opening — do it immediately after scanning your ticket" },
      { period: "Afternoon", activities: ["Super Nintendo World timed entry (interactive wristband gameplay throughout the zone)", "Mario Kart: Koopa's Challenge ride", "Minion Park", "Food: themed bento boxes and character meals"], foodRec: "Mario-themed mushroom bento (¥1,500) available in Nintendo World — limited quantity, buy when you see it", tip: "Minion Park best after 14:00 — morning queues are 60+ min, afternoon drops to 20 min" },
      { period: "Evening", activities: ["Remaining zones: Hollywood area, WaterWorld show schedule check", "Final souvenir shop run — HP wands, Mario wristbands, Minion exclusives", "Last train Universal City ~21:00"], tip: "USJ souvenir shops are unique — items not sold elsewhere in Japan. Stock up on last run before leaving." },
    ],
    dayTips: ["Download USJ app and create account BEFORE the day — add ticket to app the night before", "Nintendo World timed entry: open app at exactly 8:31am after scanning gate ticket. It fills in 2–3 min.", "Bag lockers at entrance: ¥300–600. Use them — carrying bags in the park is exhausting.", "Mario Power-Up Band (¥2,000) is interactive throughout Nintendo World — essential for Kayleb"],
    rainPlan: "USJ operates in rain — most major rides are covered (Harry Potter castle, Nintendo World are mostly indoor). Ponchos available at gate for ¥1,000. Buy themed USJ poncho instead.",
    photoSpot: "Hogwarts Castle at dusk lit up | Nintendo World entrance archway | Harry Potter Great Hall",
    mustBook: "4x Adult Studio Pass ✓ confirmed | Nintendo World timed entry on app Day-Of | Pre-load tickets to USJ app night before",
    wishlistHits: ["Universal Studios Japan (all)", "Harry Potter zone (all)", "Super Nintendo World — Kayleb Power-Up Band"],
  },
  {
    day: 16,
    date: "Tue 2 Jun",
    city: "Osaka",
    title: "Shinsekai + Rainbow District + Capybara Cafe",
    objective: "Final full Osaka day — retro Shinsekai, Amemura Rainbow District for indie shopping, and capybara cafe. Nail salon for Kaylene. Final Dotonbori dinner.",
    isFlexDay: true,
    plans: {
      a: { label: "Morning — Shinsekai", items: ["Osaka Metro to Shinsekai retro district (Ebisucho station, ~10 min from hotel)", "Tsutenkaku Tower area (¥1,000 observation deck optional)", "Kushikatsu at Daruma Shinsekai original location — strict 'no double dipping' rule", "Billiken shrine inside Tsutenkaku tower (rub the soles of his feet for good luck)", "Tennoji Park (free) or Tennoji Zoo (¥500 adults / ¥200 kids)", "Abeno Harukas — Japan's tallest building (free outside, views from ground level)"] },
      b: { label: "Afternoon — Rainbow + Shopping", items: ["America-mura (Amemura) — colourful, indie, murals, Marieta's 'Rainbow lane'", "Mitsu-ya alley inside Amemura for vintage and quirky finds", "Shinsaibashi-suji final souvenir arcade run", "Capybara cafe near Namba/Shinsaibashi (book day before — ¥1,500 entry)", "Kaylene: nail salon along Shinsaibashi (book ahead or walk in)"] },
      c: { label: "Evening — Final Osaka", items: ["Farewell Osaka dinner — wagyu yakiniku restaurant in Namba", "Final Dotonbori walk at night — all neon lit, most atmospheric of the trip", "Glico man final photo", "Packing for airport tomorrow"] },
    },
    unsplashQuery: "shinsekai osaka retro japan",
    transit: [
      { line: "Osaka Metro Sakaisuji Line", from: "Kitahama", to: "Ebisucho (Shinsekai)", duration: "~10 min", fare: "~¥180 (IC card)" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["Metro to Shinsekai (~10 min)", "Tsutenkaku Tower area walk (retro 1950s atmosphere)", "Kushikatsu Daruma — original location, eat at the counter", "Tennoji Park or Zoo", "Abeno Harukas exterior"], foodRec: "Kushikatsu at Daruma Shinsekai: order the set menu (6 sticks + sauce). Rule: NO double dipping the shared sauce. They will remind you.", tip: "Shinsekai is best in the morning before afternoon tourist surge. Very authentic retro Osaka." },
      { period: "Afternoon", activities: ["America-mura (Amemura) — Marieta's Rainbow lane wish fulfilled here", "Triangle Park in Amemura for murals and street art photos", "Mitsu-ya alley for vintage indie finds", "Capybara cafe near Shinsaibashi (booking required)", "Kaylene: nail salon along Shinsaibashi"], foodRec: "Amemura has excellent hole-in-the-wall takoyaki and taiyaki (fish-shaped cake) stalls", tip: "Capybara cafe: book at least 1 day ahead online. They book out quickly on weekdays." },
      { period: "Evening", activities: ["Farewell Osaka wagyu yakiniku dinner", "Final Dotonbori walk at night", "Glico man selfie (last time)", "Pack bags — departure tomorrow morning"], foodRec: "Wagyu yakiniku: book a restaurant for tonight (Namba has many). Price range ¥3,000–6,000/person for a good experience." },
    ],
    dayTips: ["Capybara cafe: book minimum 1 day ahead online — several options near Namba/Shinsaibashi", "Kushikatsu: the no-double-dipping rule is enforced — if you double dip you will be told off publicly", "Amemura (America-mura): Mitsu-ya alley inside for the best vintage quirky finds"],
    rainPlan: "All shopping in Shinsaibashi and Amemura is under covered arcades. Capybara cafe is indoor. Excellent rainy day option.",
    photoSpot: "Tsutenkaku Tower lit up at night | Amemura Triangle Park murals and colourful street art",
    mustBook: "Capybara cafe — book 1 day ahead online | Nail salon Kaylene — walk-in or book online",
    wishlistHits: ["Capybara Farm (Marieta)", "Rainbow lane Amemura (Marieta)", "Japanese nails (Kaylene)", "Kushikatsu Shinsekai", "Vintage finds (Amemura)"],
  },
  {
    day: 17,
    date: "Wed 3 Jun",
    city: "Transit",
    title: "Departure — Osaka → Kansai Airport",
    objective: "Slow morning, no stress. Allow 3+ hours before your flight for Kansai Airport.",
    plans: {
      a: { label: "A Plan", items: ["Slow morning — last konbini breakfast ritual (egg salad sando + melon soda)", "Check out by 10:00am", "Osaka Metro → Namba → Nankai Rapid Service to Kansai Airport (~35 min, ¥920/person)", "Arrive KIX 3+ hours before flight — security is efficient but long queues happen", "Duty free: Matcha KitKat (multiple flavours), Pocky, Japanese sweets, cosmetics"] },
      b: { label: "Airport Shopping", items: ["Last chance: UFO catcher crane games at KIX — try for stuffed animals", "Tax refund counter if eligible (keep all receipts from Don Quijote etc)", "Lotte Duty Free for final cosmetics + Japanese exclusive snacks"] },
      c: { label: "Backup", items: ["If flight is evening: morning Dotonbori walk one last time + store bags at hotel or coin locker in Namba Station"] },
    },
    unsplashQuery: "kansai airport osaka japan",
    transit: [
      { line: "Osaka Metro + Nankai Rapid Service", from: "Namba", to: "Kansai Airport (KIX)", duration: "~35 min", fare: "~¥920/person" },
    ],
    timeBlocks: [
      { period: "Morning", activities: ["Last konbini breakfast: egg salad sandwich + melon soda (the classic Japan morning)", "Check out of Sotetsu Fresa Inn Kitahama", "Osaka Metro to Namba Station", "Nankai Rapid Service to KIX (~35 min, ¥920)"], foodRec: "7-Eleven egg salad sandwich + Mitsuya Cider — the quintessential final Japan konbini breakfast", tip: "Nankai Rapid (not the Limited Express) is the affordable option to KIX — ¥920 vs ¥2,400 for the Haruka Express" },
      { period: "Afternoon", activities: ["Kansai Airport check-in (allow 3+ hours)", "Duty-free: Matcha KitKat (buy multiple boxes), Royce chocolate, Pocky flavours", "Tax refund counter — present passport + receipts from Don Quijote and other tax-free stores", "Last UFO catcher machines at the airport (KIX has several)", "Boarding"], tip: "KIX duty-free matcha KitKat selection is the best in Japan — buy what you wish you'd bought earlier in the trip" },
    ],
    dayTips: ["Nankai Rapid Service (not Limited Express) to KIX — cheaper and only slightly slower", "Tax refund: present your passport at the tax refund counter with all Don Quijote receipts", "Pre-book konbini breakfast ingredients the night before so morning is easy"],
    rainPlan: "Departure day — all indoor. Airport shopping is excellent if you arrive early.",
    photoSpot: "KIX international terminal departure hall | Last shot of Japan from the plane window",
    wishlistHits: ["Ice cream in packets at 7-Eleven (Kayleb — one last time)", "Duty-free matcha KitKat haul", "Final crane game UFO catcher"],
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
