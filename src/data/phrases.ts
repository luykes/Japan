export type Phrase = {
  japanese: string;
  romaji: string;
  english: string;
  tip?: string;
};

export type PhraseCategory = {
  id: string;
  label: string;
  emoji: string;
  phrases: Phrase[];
};

export const phraseCategories: PhraseCategory[] = [
  {
    id: "basics",
    label: "Basics",
    emoji: "👋",
    phrases: [
      { japanese: "ありがとうございます", romaji: "Arigatou gozaimasu", english: "Thank you (formal)", tip: "The most useful phrase you'll use" },
      { japanese: "すみません", romaji: "Sumimasen", english: "Excuse me / Sorry", tip: "Use to get attention or apologise" },
      { japanese: "はい / いいえ", romaji: "Hai / Iie", english: "Yes / No" },
      { japanese: "おはようございます", romaji: "Ohayou gozaimasu", english: "Good morning" },
      { japanese: "こんにちは", romaji: "Konnichiwa", english: "Hello / Good afternoon" },
      { japanese: "こんばんは", romaji: "Konbanwa", english: "Good evening" },
      { japanese: "おやすみなさい", romaji: "Oyasumi nasai", english: "Good night" },
      { japanese: "わかりません", romaji: "Wakarimasen", english: "I don't understand" },
      { japanese: "英語を話せますか？", romaji: "Eigo wo hanasemasu ka?", english: "Do you speak English?" },
      { japanese: "トイレはどこですか？", romaji: "Toire wa doko desu ka?", english: "Where is the toilet?", tip: "Japan has the best toilets in the world — use them often" },
      { japanese: "〜はどこですか？", romaji: "[Place] wa doko desu ka?", english: "Where is [place]?" },
    ],
  },
  {
    id: "food",
    label: "Food & Ordering",
    emoji: "🍜",
    phrases: [
      { japanese: "いただきます", romaji: "Itadakimasu", english: "Let's eat (said before meals)", tip: "Always say this before eating — locals will love it" },
      { japanese: "ごちそうさまでした", romaji: "Gochisousama deshita", english: "That was a great meal (said after)", tip: "Say this when leaving a restaurant" },
      { japanese: "おすすめは何ですか？", romaji: "Osusume wa nan desu ka?", english: "What do you recommend?" },
      { japanese: "一つください", romaji: "Hitotsu kudasai", english: "One please" },
      { japanese: "これをください", romaji: "Kore wo kudasai", english: "This one please" },
      { japanese: "おいしい！", romaji: "Oishii!", english: "Delicious!", tip: "Say this at the restaurant — the chef will beam" },
      { japanese: "アレルギーがあります", romaji: "Arerugii ga arimasu", english: "I have an allergy" },
      { japanese: "辛くないですか？", romaji: "Karakunai desu ka?", english: "Is it spicy?" },
      { japanese: "お水をください", romaji: "Omizu wo kudasai", english: "Water please", tip: "Water is usually free in restaurants" },
      { japanese: "お会計をお願いします", romaji: "Okaikei wo onegaishimasu", english: "The bill please" },
    ],
  },
  {
    id: "shopping",
    label: "Shopping",
    emoji: "🛍️",
    phrases: [
      { japanese: "いくらですか？", romaji: "Ikura desu ka?", english: "How much is it?" },
      { japanese: "高いですね", romaji: "Takai desu ne", english: "That's expensive", tip: "Bargaining is rare in Japan — mostly fixed prices" },
      { japanese: "これを見てもいいですか？", romaji: "Kore wo mite mo ii desu ka?", english: "Can I look at this?" },
      { japanese: "試着してもいいですか？", romaji: "Shichaku shite mo ii desu ka?", english: "Can I try this on?" },
      { japanese: "Lサイズはありますか？", romaji: "Eru saizu wa arimasu ka?", english: "Do you have a Large size?", tip: "Japanese sizing runs small — L = AU M typically" },
      { japanese: "カードは使えますか？", romaji: "Kaado wa tsukaemasu ka?", english: "Can I pay by card?" },
      { japanese: "袋をください", romaji: "Fukuro wo kudasai", english: "A bag please", tip: "Plastic bags now cost ¥3–5 in Japan" },
      { japanese: "免税はできますか？", romaji: "Menzei wa dekimasu ka?", english: "Is tax-free available?", tip: "Show passport — many shops do tax-free for 5,000¥+ purchases" },
    ],
  },
  {
    id: "transport",
    label: "Transport",
    emoji: "🚄",
    phrases: [
      { japanese: "〜駅はどこですか？", romaji: "[Station] eki wa doko desu ka?", english: "Where is [Station] station?" },
      { japanese: "〜行きの電車はどれですか？", romaji: "[Place] yuki no densha wa dore desu ka?", english: "Which train goes to [place]?" },
      { japanese: "この電車は〜に止まりますか？", romaji: "Kono densha wa [place] ni tomarimasu ka?", english: "Does this train stop at [place]?" },
      { japanese: "〜まで一枚ください", romaji: "[Place] made ichimai kudasai", english: "One ticket to [place] please" },
      { japanese: "乗り換えはありますか？", romaji: "Norikae wa arimasu ka?", english: "Do I need to transfer?" },
      { japanese: "タクシーを呼んでください", romaji: "Takushii wo yonde kudasai", english: "Please call a taxi" },
      { japanese: "〜まで行ってください", romaji: "[Place] made itte kudasai", english: "Please go to [place]", tip: "Show the taxi driver this phrase with an address on your phone" },
      { japanese: "右 / 左 / まっすぐ", romaji: "Migi / Hidari / Massugu", english: "Right / Left / Straight ahead" },
    ],
  },
  {
    id: "emergency",
    label: "Emergency",
    emoji: "🆘",
    phrases: [
      { japanese: "助けてください！", romaji: "Tasukete kudasai!", english: "Help me!", tip: "Shout loudly — Japanese people will respond immediately" },
      { japanese: "救急車を呼んでください", romaji: "Kyuukyuusha wo yonde kudasai", english: "Please call an ambulance" },
      { japanese: "警察を呼んでください", romaji: "Keisatsu wo yonde kudasai", english: "Please call the police", tip: "Emergency: 119 (ambulance/fire), 110 (police)" },
      { japanese: "病院はどこですか？", romaji: "Byouin wa doko desu ka?", english: "Where is the hospital?" },
      { japanese: "具合が悪いです", romaji: "Guai ga warui desu", english: "I feel unwell" },
      { japanese: "財布をなくしました", romaji: "Saifu wo nakushimashita", english: "I lost my wallet" },
      { japanese: "パスポートをなくしました", romaji: "Pasupooto wo nakushimashita", english: "I lost my passport", tip: "Go to nearest koban (police box) — they are very helpful" },
      { japanese: "オーストラリア大使館はどこですか？", romaji: "Oosutoraria taishikan wa doko desu ka?", english: "Where is the Australian Embassy?", tip: "Tokyo: +81-3-5232-4111" },
    ],
  },
];
