export type FoodCity = "Tokyo" | "Kyoto" | "Hiroshima" | "Osaka" | "All Cities";

export type FoodItem = {
  id: string;
  emoji: string;
  name: string;
  city: FoodCity;
  address: string;
  where: string;
  teenNote: string;
};

export const foodBucketList: FoodItem[] = [
  // ── Tokyo ────────────────────────────────────────────────────────────────
  {
    id: "food-ramen",
    emoji: "🍜",
    name: "Tonkotsu Ramen",
    city: "Tokyo",
    address: "Ramen Street, Tokyo Station B1F, 1-9-1 Marunouchi, Chiyoda",
    where: "Ramen Street at Tokyo Station B1 — 8 top ramen shops side by side",
    teenNote: "Rich, creamy pork broth — Oliver & Kayleb will be hooked",
  },
  {
    id: "food-sushi",
    emoji: "🍣",
    name: "Kaiten Sushi (Conveyor Belt)",
    city: "Tokyo",
    address: "Sushiro Akihabara, 1-3-3 Sotokanda, Chiyoda, Tokyo",
    where: "Sushiro or Kura Sushi — touchscreen ordering + conveyor belt",
    teenNote: "Order via touchscreen — plates zoom to your seat, great fun",
  },
  {
    id: "food-taiyaki",
    emoji: "🐟",
    name: "Taiyaki (Fish-shaped Waffle)",
    city: "Tokyo",
    address: "Naniwaya Sohonten, 1-8-14 Azabujuban, Minato, Tokyo",
    where: "Naniwaya Sohonten in Azabu-Juban — the original since 1909",
    teenNote: "Crispy fish waffle filled with sweet red bean paste or custard",
  },
  {
    id: "food-crepe-harajuku",
    emoji: "🫓",
    name: "Harajuku Crepe",
    city: "Tokyo",
    address: "Takeshita Street, Harajuku, Shibuya, Tokyo",
    where: "Takeshita Street, Harajuku — Marion Crepes is the classic spot",
    teenNote: "Oversized crepe stuffed with whipped cream, fruit, and ice cream",
  },
  {
    id: "food-yakitori",
    emoji: "🍢",
    name: "Yakitori (Grilled Chicken Skewers)",
    city: "Tokyo",
    address: "Yurakucho Gado-shita, 2-chome Yurakucho, Chiyoda, Tokyo",
    where: "Yurakucho under the train tracks — izakayas in the arches",
    teenNote: "Order tsukune (chicken meatball) — it's the best one",
  },
  {
    id: "food-tonkatsu",
    emoji: "🥩",
    name: "Tonkatsu (Pork Cutlet)",
    city: "Tokyo",
    address: "Maisen Aoyama, 4-8-5 Jingumae, Shibuya, Tokyo",
    where: "Maisen in Aoyama — Japan's most famous tonkatsu restaurant",
    teenNote: "Crispy breaded pork with shredded cabbage + special sauce",
  },
  {
    id: "food-tempura",
    emoji: "🍤",
    name: "Tempura Don (Tendon)",
    city: "Tokyo",
    address: "Tendon Tenya Akihabara, 4-3-3 Sotokanda, Chiyoda, Tokyo",
    where: "Tendon Tenya — fast-casual tempura, amazing value at ~¥700",
    teenNote: "Light and crispy — not greasy like Western fried food",
  },
  {
    id: "food-vending-machine",
    emoji: "🥤",
    name: "Vending Machine Canned Coffee",
    city: "All Cities",
    address: "Every street corner in Japan",
    where: "Any vending machine — hot Georgia Coffee is iconic",
    teenNote: "Hot canned coffee from a vending machine — a Japan institution",
  },

  // ── Kyoto ─────────────────────────────────────────────────────────────────
  {
    id: "food-matcha-softserve",
    emoji: "🍦",
    name: "Matcha Soft Serve",
    city: "Kyoto",
    address: "Nishiki Market, Nishikikoji-dori, Nakagyo, Kyoto",
    where: "Nishiki Market stalls — also at Gion Tsujiri on Shijo",
    teenNote: "Deep green and creamy — way more intense than green tea Kit Kats",
  },
  {
    id: "food-mochi",
    emoji: "🍡",
    name: "Fresh Mochi & Dango",
    city: "Kyoto",
    address: "Nakamura Tosho, Fushimi Inari Taisha, 68 Fukakusa Yabunouchicho, Fushimi",
    where: "Stalls along Fushimi Inari path and Philosopher's Walk",
    teenNote: "Chewy rice cake — try the mitarashi dango (soy sauce + sweet glaze)",
  },
  {
    id: "food-kaiseki-bento",
    emoji: "🍱",
    name: "Bento Box at Nishiki Market",
    city: "Kyoto",
    address: "Nishiki Market, 604-8233 Nishiki-koji dori, Nakagyo, Kyoto",
    where: "Nishiki Market — 'Kyoto's kitchen', hundreds of food stalls",
    teenNote: "Beautiful little bento boxes — try pickles, tofu, and grilled skewers",
  },
  {
    id: "food-melon-pan",
    emoji: "🍞",
    name: "Melon Pan (Melon Bread)",
    city: "Kyoto",
    address: "Kyoto Station underground mall (Porta), Shimogyo, Kyoto",
    where: "Kyoto Station shopping area bakeries — grab warm from the oven",
    teenNote: "Sweet crispy crust + soft inside — a Japanese bakery staple",
  },

  // ── Hiroshima ─────────────────────────────────────────────────────────────
  {
    id: "food-okonomiyaki",
    emoji: "🥞",
    name: "Hiroshima-style Okonomiyaki",
    city: "Hiroshima",
    address: "Okonomimura, 5-13 Shintenchi, Naka, Hiroshima",
    where: "Okonomimura building — 3 floors of okonomiyaki restaurants",
    teenNote: "Cook it yourself on a hotplate — layered with noodles, egg, and toppings",
  },
  {
    id: "food-oysters-hiroshima",
    emoji: "🦪",
    name: "Hiroshima Oysters",
    city: "Hiroshima",
    address: "Kakiya, 1-1 Otemachi, Naka, Hiroshima",
    where: "Kakiya near Peace Park — famous for grilled Hiroshima oysters",
    teenNote: "Hiroshima grows 70% of Japan's oysters — try them grilled with butter",
  },
  {
    id: "food-anago-rice",
    emoji: "🐍",
    name: "Anago-meshi (Eel Rice) — Miyajima",
    city: "Hiroshima",
    address: "Ueno Shokudo, 539-1 Miyajimacho, Hatsukaichi, Hiroshima",
    where: "Ueno restaurant on Miyajima island — the original anago-meshi since 1903",
    teenNote: "Salt-grilled sea eel over rice — the signature dish of Miyajima island",
  },

  // ── Osaka ──────────────────────────────────────────────────────────────────
  {
    id: "food-takoyaki",
    emoji: "🐙",
    name: "Takoyaki (Octopus Balls)",
    city: "Osaka",
    address: "Dotonbori, Namba, Chuo, Osaka — look for Kukuru or Aizu-ya",
    where: "Dotonbori Osaka — the absolute home of takoyaki",
    teenNote: "Watch them cook in the mould — crispy outside, gooey inside",
  },
  {
    id: "food-gyoza",
    emoji: "🥟",
    name: "Gyoza (Pan-fried Dumplings)",
    city: "Osaka",
    address: "Osaka Ohsho Namba, 1-7-24 Namba, Chuo, Osaka",
    where: "Osaka Ohsho chain — anywhere in Dotonbori/Namba area",
    teenNote: "Crispy bottoms, juicy insides — always order a second batch",
  },
  {
    id: "food-conveyor-sushi-osaka",
    emoji: "🎯",
    name: "Robot Sushi (iPad + Bullet Train Delivery)",
    city: "Osaka",
    address: "Uobei Shinsaibashi, 1-6-8 Shinsaibashisuji, Chuo, Osaka",
    where: "Uobei Shinsaibashi — order via touchscreen, delivered by mini rail",
    teenNote: "Plates zoom to your seat on a miniature train — kids will absolutely love it",
  },
  {
    id: "food-kushikatsu",
    emoji: "🍡",
    name: "Kushikatsu (Breaded Skewers)",
    city: "Osaka",
    address: "Daruma Shinsekai, 2-3-9 Ebisuhigashi, Naniwa, Osaka",
    where: "Daruma in Shinsekai — the birthplace of kushikatsu",
    teenNote: "Skewered + breaded + fried everything. Rule: NO double-dipping the sauce",
  },

  // ── All Cities ────────────────────────────────────────────────────────────
  {
    id: "food-onigiri-7eleven",
    emoji: "🍙",
    name: "7-Eleven Onigiri",
    city: "All Cities",
    address: "Any 7-Eleven, Lawson, or FamilyMart — on every major street",
    where: "Every convenience store in Japan",
    teenNote: "The iconic triangle rice ball — try tuna mayo first, then salmon",
  },
  {
    id: "food-karaage",
    emoji: "🍗",
    name: "Karaage (Japanese Fried Chicken)",
    city: "All Cities",
    address: "Any convenience store hot foods counter or izakaya",
    where: "Convenience stores (Lawson's karaage-kun is legendary) or any izakaya",
    teenNote: "Japan's answer to fried chicken — wayyy better than KFC",
  },
  {
    id: "food-udon",
    emoji: "🍝",
    name: "Kake Udon",
    city: "All Cities",
    address: "Marugame Seimen — branches across all cities (search maps)",
    where: "Marugame Seimen chain — ¥500 per bowl, incredible value",
    teenNote: "Fat chewy noodles — warm and filling after long temple walks",
  },
  {
    id: "food-pocky-kitkat",
    emoji: "🍫",
    name: "Japanese Kit Kat & Pocky (rare flavours)",
    city: "All Cities",
    address: "Don Quijote (Donki) — branches in every city. Also any convenience store",
    where: "Don Quijote superstore or any convenience store",
    teenNote: "Sakura, wasabi, sweet potato, chestnut — buy 20 boxes to take home",
  },
  {
    id: "food-shabu-shabu",
    emoji: "🫕",
    name: "Shabu-Shabu (Hot Pot)",
    city: "All Cities",
    address: "Nabezo — branches in Tokyo (Shinjuku), Kyoto, and Osaka",
    where: "Nabezo or Shabusen — all-you-can-eat options available",
    teenNote: "Dip thin meat slices in hot broth yourself — very interactive dinner",
  },
];

export const FOOD_CITIES: FoodCity[] = ["All Cities", "Tokyo", "Kyoto", "Hiroshima", "Osaka"];

export const cityMeta: Record<FoodCity, { emoji: string; color: string }> = {
  "All Cities": { emoji: "🗾", color: "text-white" },
  Tokyo:        { emoji: "🗼", color: "text-sky-300" },
  Kyoto:        { emoji: "⛩️", color: "text-orange-300" },
  Hiroshima:    { emoji: "🕊️", color: "text-purple-300" },
  Osaka:        { emoji: "🎡", color: "text-pink-300" },
};
