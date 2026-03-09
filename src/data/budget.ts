export const EXCHANGE_RATE = 110; // A$1 ≈ ¥110

export type BudgetRow = {
  category: string;
  low: number;   // AUD
  comfortable: number; // AUD
};

export type CityBudget = {
  city: string;
  nights: number;
  rows: BudgetRow[];
};

export const cityBudgets: CityBudget[] = [
  {
    city: "Tokyo",
    nights: 6,
    rows: [
      { category: "Accommodation", low: 1050, comfortable: 1500 },
      { category: "Food", low: 450, comfortable: 650 },
      { category: "Transport", low: 40, comfortable: 80 },
      { category: "Activities", low: 80, comfortable: 200 },
    ],
  },
  {
    city: "Kyoto",
    nights: 5,
    rows: [
      { category: "Accommodation", low: 900, comfortable: 1350 },
      { category: "Food", low: 350, comfortable: 550 },
      { category: "Transport", low: 50, comfortable: 120 },
      { category: "Activities", low: 50, comfortable: 150 },
    ],
  },
  {
    city: "Hiroshima",
    nights: 2,
    rows: [
      { category: "Accommodation", low: 300, comfortable: 450 },
      { category: "Food", low: 150, comfortable: 220 },
      { category: "Transport", low: 40, comfortable: 80 },
      { category: "Activities", low: 30, comfortable: 80 },
    ],
  },
  {
    city: "Osaka",
    nights: 3,
    rows: [
      { category: "Accommodation", low: 350, comfortable: 600 },
      { category: "Food", low: 250, comfortable: 400 },
      { category: "Transport", low: 30, comfortable: 70 },
      { category: "Activities", low: 100, comfortable: 300 },
    ],
  },
];

export const totalBudget = {
  low: 5450,
  comfortable: 9150,
  likelyLow: 6500,
  likelyHigh: 7500,
};

export const overallCategories: BudgetRow[] = [
  { category: "Accommodation (16 nights)", low: 2600, comfortable: 3900 },
  { category: "Food", low: 1300, comfortable: 2000 },
  { category: "Local transport", low: 150, comfortable: 350 },
  { category: "Intercity trains", low: 600, comfortable: 1000 },
  { category: "Attractions / tickets", low: 300, comfortable: 700 },
  { category: "Shopping / misc buffer", low: 500, comfortable: 1200 },
];

export const japanPrices = [
  { item: "Ramen meal", price: "$10–15 AUD" },
  { item: "Restaurant dinner", price: "$20–35 AUD" },
  { item: "Convenience store breakfast", price: "$4–7 AUD" },
  { item: "City train ride", price: "$2–4 AUD" },
];

export const optionalUpgrades = [
  { item: "teamLab digital art", price: "~$150 family" },
  { item: "Universal Studios Japan", price: "~$450 family" },
  { item: "Nice sushi dinner", price: "~$120" },
  { item: "Ryokan overnight", price: "$400–700" },
];

export const budgetTraps = [
  { trap: "Taxi usage", cost: "$20–50 per ride" },
  { trap: "Theme parks", cost: "$400–600 family" },
  { trap: "Anime / figure shopping", cost: "can spiral quickly" },
  { trap: "Souvenirs", cost: "$200–500" },
  { trap: "Food upgrades", cost: "$20 → $120 dinners" },
];
