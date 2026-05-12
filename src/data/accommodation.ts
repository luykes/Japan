export type AccomOption = {
  suburb: string;
  notes: string;
  searchUrl: string;
};

export type CityAccom = {
  city: string;
  type: "Airbnb" | "Hotel";
  checkIn: string;
  checkOut: string;
  nights: number;
  reason: string;
  options: AccomOption[];
  filters: string[];
  bestChoice: string;
  mainSearchUrl: string;
  bookingLabel: string;
};

export const accommodation: CityAccom[] = [
  {
    city: "Tokyo",
    type: "Airbnb",
    checkIn: "Mon 18 May",
    checkOut: "Sun 24 May",
    nights: 6,
    reason: "6 nights — Shibuya base puts Harajuku/Meiji Jingu (1 stop), Shinjuku (3 stops), and Shinagawa for Shinkansen (2 stops south) all within easy reach",
    mainSearchUrl: "https://www.airbnb.com.au/s/Shibuya--Tokyo--Japan/homes?checkin=2026-05-18&checkout=2026-05-24&adults=2&children=2&min_bedrooms=2",
    bookingLabel: "Confirmed — Airbnb",
    options: [
      { suburb: "Maruyamachō, Shibuya — confirmed", notes: "レガリアヒルズ渋谷道玄坂, 7-4 Maruyamachō, Shibuya, Tokyo 150-0044 — 7 min walk from Shibuya Station", searchUrl: "https://www.airbnb.com.au/s/Shibuya--Tokyo--Japan/homes?checkin=2026-05-18&checkout=2026-05-24&adults=2&children=2&min_bedrooms=2" },
    ],
    filters: ["Confirmed booking", "7 min walk from Shibuya Station", "Dogenzaka / Maruyamachō area"],
    bestChoice: "Maruyamachō, Shibuya — confirmed",
  },
  {
    city: "Kyoto",
    type: "Airbnb",
    checkIn: "Sun 24 May",
    checkOut: "Thu 28 May",
    nights: 4,
    reason: "4 nights — central Kyoto address at 北門前町５０７",
    mainSearchUrl: "https://www.airbnb.com.au/s/Kyoto-Station--Kyoto--Japan/homes?checkin=2026-05-24&checkout=2026-05-28&adults=2&children=2&min_bedrooms=2",
    bookingLabel: "Confirmed — Airbnb",
    options: [
      { suburb: "Central Kyoto — confirmed", notes: "北門前町５０７, Kyoto — central location with easy access to Fushimi Inari, Gion, and Nishiki Market", searchUrl: "https://www.airbnb.com.au/s/Kyoto-Station--Kyoto--Japan/homes?checkin=2026-05-24&checkout=2026-05-28&adults=2&children=2&min_bedrooms=2" },
    ],
    filters: ["Confirmed booking", "Central Kyoto", "北門前町 area"],
    bestChoice: "Central Kyoto — confirmed (北門前町５０７)",
  },
  {
    city: "Hiroshima",
    type: "Hotel",
    checkIn: "Thu 28 May",
    checkOut: "Fri 29 May",
    nights: 1,
    reason: "1 night — short stay, Peace Park afternoon arrival + Miyajima early morning departure",
    mainSearchUrl: "https://www.booking.com/searchresults.html?ss=Hiroshima+Japan&checkin_year=2026&checkin_month=5&checkin_monthday=28&checkout_year=2026&checkout_month=5&checkout_monthday=29&group_adults=2&group_children=2&no_rooms=1",
    bookingLabel: "Search on Booking.com",
    options: [
      { suburb: "Hondori / Hatchobori", notes: "Central, near Peace Park and tram network", searchUrl: "https://www.booking.com/searchresults.html?ss=Hatchobori+Hiroshima&checkin_year=2026&checkin_month=5&checkin_monthday=28&checkout_year=2026&checkout_month=5&checkout_monthday=29&group_adults=2&group_children=2&no_rooms=1" },
      { suburb: "Peace Park fringe", notes: "Walking distance to A-Bomb Dome and museum", searchUrl: "https://www.booking.com/searchresults.html?ss=Peace+Memorial+Park+Hiroshima&checkin_year=2026&checkin_month=5&checkin_monthday=28&checkout_year=2026&checkout_month=5&checkout_monthday=29&group_adults=2&group_children=2&no_rooms=1" },
    ],
    filters: ["Near tram stop", "Central location", "Early checkout friendly"],
    bestChoice: "Central tram area",
  },
  {
    city: "Osaka",
    type: "Hotel",
    checkIn: "Fri 29 May",
    checkOut: "Wed 3 Jun",
    nights: 5,
    reason: "5 nights — Sotetsu Fresa Inn Kitahama, Chuo Ward; 15 min walk to Osaka Castle, easy subway access to Namba and Dotonbori",
    mainSearchUrl: "https://www.booking.com/searchresults.html?ss=Sotetsu+Fresa+Inn+Kitahama+Osaka",
    bookingLabel: "Confirmed — Sotetsu Fresa Inn",
    options: [
      { suburb: "Kitahama, Chuo Ward — confirmed", notes: "Sotetsu Fresa Inn Kitahama, 2 Chome-4-10 Koraibashi, Chuo Ward, Osaka 541-0043 — central location, 15 min walk to Osaka Castle, subway to Namba/Dotonbori", searchUrl: "https://www.booking.com/searchresults.html?ss=Sotetsu+Fresa+Inn+Kitahama+Osaka" },
    ],
    filters: ["Confirmed booking", "Kitahama / Chuo Ward", "Near Osaka Metro Tanimachi + Sakaisuji lines"],
    bestChoice: "Kitahama, Chuo Ward — confirmed (Sotetsu Fresa Inn)",
  },
];
