export type PackingPerson = "All" | "Dad" | "Mum" | "Oliver" | "Oscar";

export type PackingItem = {
  id: string;
  label: string;
  person: PackingPerson;
  note?: string;
};

export type PackingCategory = {
  id: string;
  title: string;
  emoji: string;
  items: PackingItem[];
};

export const packingList: PackingCategory[] = [
  {
    id: "docs",
    title: "Documents & Money",
    emoji: "📄",
    items: [
      { id: "pack-passport-dad", label: "Passport (valid 6+ months)", person: "Dad" },
      { id: "pack-passport-mum", label: "Passport (valid 6+ months)", person: "Mum" },
      { id: "pack-passport-oliver", label: "Passport (valid 6+ months)", person: "Oliver" },
      { id: "pack-passport-oscar", label: "Passport (valid 6+ months)", person: "Oscar" },
      { id: "pack-travel-insurance", label: "Travel insurance documents", person: "All", note: "Print + save to phone" },
      { id: "pack-jr-pass-voucher", label: "JR Pass exchange vouchers", person: "Dad", note: "Exchange at Narita on arrival" },
      { id: "pack-jr-kansai-pass", label: "JR Kansai-Hiroshima Pass vouchers", person: "Dad" },
      { id: "pack-cash-yen", label: "Cash in Yen (¥50,000 starter)", person: "All", note: "ATMs at 7-Eleven / Japan Post work best" },
      { id: "pack-travel-card", label: "Travel money card (Wise/Revolut)", person: "Dad" },
      { id: "pack-booking-printouts", label: "Accommodation confirmation printouts", person: "Mum" },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    emoji: "🔌",
    items: [
      { id: "pack-phones", label: "Phones + chargers", person: "All" },
      { id: "pack-power-bank", label: "Power bank (10,000mAh+)", person: "All", note: "Japan is very walkable — you'll need it" },
      { id: "pack-adapter", label: "Power adapter (Japan uses Type A — same as AU, no adapter needed)", person: "Dad", note: "Voltage is 100V — check your devices" },
      { id: "pack-camera", label: "Camera + memory card + battery", person: "Dad" },
      { id: "pack-earphones", label: "Earphones / AirPods", person: "All" },
      { id: "pack-ipad", label: "iPad / tablet (for boys in transit)", person: "Oliver" },
      { id: "pack-pocket-wifi", label: "Pocket Wi-Fi or SIM (pre-order for Japan)", person: "Dad", note: "Order online before you leave — pick up at Narita" },
    ],
  },
  {
    id: "clothing",
    title: "Clothing",
    emoji: "👕",
    items: [
      { id: "pack-shirts-dad", label: "Light shirts / T-shirts (7+)", person: "Dad" },
      { id: "pack-shirts-mum", label: "Light shirts / T-shirts (7+)", person: "Mum" },
      { id: "pack-shirts-oliver", label: "Light shirts / T-shirts (7+)", person: "Oliver" },
      { id: "pack-shirts-oscar", label: "Light shirts / T-shirts (7+)", person: "Oscar" },
      { id: "pack-pants-all", label: "Light pants / shorts (3 pairs each)", person: "All" },
      { id: "pack-rain-jacket", label: "Light rain jacket / windbreaker", person: "All", note: "May–Jun is rainy season — pack one each" },
      { id: "pack-layers", label: "One warm layer (evenings can be cool)", person: "All" },
      { id: "pack-comfy-shoes", label: "Very comfortable walking shoes (worn-in!)", person: "All", note: "You will walk 20,000+ steps per day" },
      { id: "pack-slip-on-shoes", label: "Easy slip-on shoes or sandals", person: "All", note: "Temples + traditional restaurants require shoe removal" },
      { id: "pack-socks", label: "Plenty of socks (no holes!)", person: "All", note: "You'll be removing shoes often" },
      { id: "pack-underwear", label: "Underwear (7+ days each)", person: "All" },
      { id: "pack-swimwear", label: "Swimwear (for onsens / pool)", person: "All", note: "Note: most onsens require nudity — no swimwear" },
    ],
  },
  {
    id: "toiletries",
    title: "Toiletries & Health",
    emoji: "🧴",
    items: [
      { id: "pack-sunscreen", label: "High SPF sunscreen", person: "All", note: "Japan summers are intense — reapply often" },
      { id: "pack-insect-repellent", label: "Insect repellent", person: "All" },
      { id: "pack-prescription-meds", label: "Prescription medications (enough + extra)", person: "All", note: "Some medications are restricted in Japan — check beforehand" },
      { id: "pack-basic-meds", label: "Paracetamol, antihistamines, band-aids", person: "Mum" },
      { id: "pack-hand-sanitiser", label: "Hand sanitiser", person: "All" },
      { id: "pack-lip-balm", label: "Lip balm + moisturiser", person: "Mum" },
      { id: "pack-contact-lenses", label: "Contact lenses + solution + glasses", person: "Mum" },
      { id: "pack-deodorant", label: "Deodorant (hard to find Western brands in Japan)", person: "All" },
      { id: "pack-toothbrush", label: "Toothbrush + toothpaste", person: "All", note: "Hotels/Airbnbs often provide basics" },
    ],
  },
  {
    id: "kids",
    title: "Kids & Entertainment",
    emoji: "🎮",
    items: [
      { id: "pack-snacks-boys", label: "Flight snacks for the boys", person: "Mum" },
      { id: "pack-headphones-oliver", label: "Oliver's headphones / earbuds", person: "Oliver" },
      { id: "pack-headphones-oscar", label: "Oscar's headphones / earbuds", person: "Oscar" },
      { id: "pack-download-shows", label: "Download shows / movies for the flight", person: "Oliver", note: "Long-haul — prep is key" },
      { id: "pack-pokemon-cards", label: "Pokémon cards (buy heaps in Akihabara!)", person: "Oscar", note: "Budget ¥5,000–¥10,000 for card shopping" },
      { id: "pack-journal-oscar", label: "Travel journal + pens", person: "Oscar" },
      { id: "pack-daypack-boys", label: "Small daypack each (for daily exploring)", person: "Oliver" },
      { id: "pack-portable-games", label: "Nintendo Switch / portable games", person: "Oscar" },
    ],
  },
];
