export type TipCategory = {
  id: string;
  label: string;
  icon: string;
  tips: string[];
};

export type TicketSource = {
  platform: string;
  logo: string;
  url: string;
  description: string;
  bestFor: string[];
  savingsNote: string;
};

export type YoutubeVideo = {
  videoId: string;
  title: string;
  channel: string;
  tag: string;
};

export const tipCategories: TipCategory[] = [
  {
    id: "money",
    label: "Money",
    icon: "💴",
    tips: [
      "Get a Welcome Suica IC card at Narita — no deposit, works nationwide on trains, buses and convenience stores",
      "7-Eleven, FamilyMart and Lawson are genuinely good meals — onigiri + hot food for ¥300–500",
      "Lunch teishoku sets at restaurants are 30–50% cheaper than the same meal at dinner",
      "Withdraw cash from 7-Eleven ATMs — they accept foreign cards and show English menus",
      "Avoid taxis entirely — trains and buses are always faster, cheaper, and more reliable",
      "Vending machines are everywhere — water from a vending machine is ~¥100 (much cheaper than tourist shops)",
      "Free public bathrooms are everywhere and universally spotless — no need to buy anything to use them",
    ],
  },
  {
    id: "transport",
    label: "Transport",
    icon: "🚄",
    tips: [
      "IC card (Suica/ICOCA) is all you need in cities — tap in, tap out, auto-charges the correct fare",
      "Google Maps transit directions in Japan are incredibly accurate — trust them completely",
      "Kids under 6 travel FREE on trains and buses; kids 6–11 pay half price",
      "Stand on the left on Tokyo escalators, right side in Osaka/Kyoto",
      "Book Shinkansen seats to the right side of the train (Tokyo → Kyoto) for the Mt Fuji view",
      "Night buses between cities are cheap but exhausting — avoid with kids",
      "Platform numbers on Google Maps match the actual platform — no guessing required",
    ],
  },
  {
    id: "family",
    label: "Family",
    icon: "👨‍👩‍👧‍👦",
    tips: [
      "Konbini (convenience stores) solve every problem: snacks, drinks, cash, charging cables, rain ponchos, umbrellas",
      "Download Google Translate → enable Camera mode → point it at Japanese menus — works brilliantly",
      "Most kids menus exist even if they're not visible — ask staff, or point to something on another table",
      "Free WiFi at most Starbucks, McDonald's, 7-Eleven and major stations — enough for messaging",
      "Coin lockers at major stations are cheap (¥300–700/day) — drop your bags, explore light",
      "Pharmacies (Matsukiyo, Welcia) stock everything for kids: sunscreen, plasters, medicine, nappies",
      "Teenage kids will absolutely love Akihabara, Donkihote, and any arcade (Round1, Sega)",
    ],
  },
  {
    id: "culture",
    label: "Culture",
    icon: "⛩️",
    tips: [
      "No tipping — it can cause confusion or mild offence in Japan",
      "Bow slightly when greeted — a small nod is fine, you don't need to go full bow",
      "Remove shoes before entering homes, many traditional restaurants and some ryokans",
      "Keep voices low on trains and buses — phone calls are considered rude",
      "Most Japanese people understand some English but are shy — they'll always try to help",
      "Rubbish bins are rare — carry a small bag for wrappers and dispose at your hotel or konbini",
      "Queueing is serious business — always form an orderly line, especially at train platforms",
    ],
  },
  {
    id: "tech",
    label: "Tech & Apps",
    icon: "📱",
    tips: [
      "Get a Japan data SIM at Narita airport (IIJmio, HIS Mobile, or pickup pre-ordered UBIGI eSIM)",
      "Essential apps: Google Maps, Google Translate (with Japanese downloaded offline), Japan Official Travel",
      "Suica now works with Apple Pay / Google Pay — add it to your phone before you land",
      "HyperDia or Navitime for train platform numbers and transfer instructions in complex stations",
      "Download offline Google Maps for Tokyo, Kyoto, Osaka before flying — airport WiFi may be slow",
      "IC card top-up: tap your phone at any green Suica machine in stations or at konbini registers",
      "Most stations have free WiFi — look for the 'Japan Free Wi-Fi' network or the station's own network",
    ],
  },
];

export const ticketSources: TicketSource[] = [
  {
    platform: "Klook",
    logo: "🎟️",
    url: "https://www.klook.com/en-AU/attractions/japan/g12/",
    description: "Best all-round platform for Japan attraction tickets. Usually 10–20% cheaper than gate prices with instant QR code entry.",
    bestFor: ["Universal Studios Japan", "teamLab Planets", "Tokyo DisneySea", "Nara/Kyoto day tours", "Suica card pickup"],
    savingsNote: "Save 10–20% vs gate",
  },
  {
    platform: "Viator",
    logo: "🗺️",
    url: "https://www.viator.com/Japan/d16-ttd",
    description: "Great for day tours, guided experiences and skip-the-line passes. Wide selection of English-speaking guides.",
    bestFor: ["Hiroshima day tours", "Kyoto walking tours", "Nara guided trips", "Osaka food tours"],
    savingsNote: "Save time with skip-the-line",
  },
  {
    platform: "Eki-net (JR Official)",
    logo: "🚄",
    url: "https://www.eki-net.com/en/jrticket/",
    description: "Official JR booking — book Shinkansen seats in advance. Earlybird 'eきっぷ' tickets available on some routes.",
    bestFor: ["Tokyo → Kyoto Shinkansen", "Reserved seating", "Tokyo → Hiroshima if not using JR Pass"],
    savingsNote: "Up to 20% off with advance booking",
  },
  {
    platform: "JR West Pass",
    logo: "🏯",
    url: "https://www.westjr.co.jp/global/en/ticket/pass/kansai_hiroshima/",
    description: "Kansai–Hiroshima 5-day area pass covers all your intercity travel from Kyoto through to Osaka. Much better value than nationwide JR Pass.",
    bestFor: ["Kyoto → Hiroshima", "Miyajima ferry", "Hiroshima → Osaka", "All Shinkansen within the region"],
    savingsNote: "~$460 AUD covers 3 intercity legs",
  },
  {
    platform: "USJ Official",
    logo: "🎢",
    url: "https://www.usj.co.jp/web/en/us/tickets",
    description: "Book Universal Studios Japan tickets online well in advance — popular dates sell out weeks ahead. Add an Express Pass for shorter queues.",
    bestFor: ["1-Day Studio Pass", "Express Pass (worth it in peak season)", "Wizarding World of Harry Potter"],
    savingsNote: "Must book early — gate sells out",
  },
  {
    platform: "Tokyo Museum Grutto Pass",
    logo: "🏛️",
    url: "https://www.rekibun.or.jp/grutto/",
    description: "¥2,500 pass for entry or discounts to 100+ Tokyo museums and zoos. Pays for itself in 2–3 visits.",
    bestFor: ["Tokyo National Museum (Ueno)", "Tokyo Metropolitan Art Museum", "Ueno Zoo", "Multiple museum days in Tokyo"],
    savingsNote: "Saves ¥2,000–¥5,000 depending on use",
  },
];

export const youtubeVideos: YoutubeVideo[] = [
  {
    videoId: "0GCuvcTI090",
    title: "12 Things NOT to Do in Japan",
    channel: "Abroad in Japan",
    tag: "Must Watch",
  },
  {
    videoId: "SkY1DiyCqTU",
    title: "How Expensive is it to Travel Japan?",
    channel: "Abroad in Japan",
    tag: "Budget",
  },
  {
    videoId: "zRIDcCLxdRI",
    title: "What Japanese Breakfast is Like",
    channel: "Life Where I'm From",
    tag: "Family",
  },
];
