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
    checkIn: "Sun 18 May",
    checkOut: "Sat 24 May",
    nights: 6,
    reason: "6 nights — Airbnb gives space, laundry, and better value for family of 4",
    mainSearchUrl: "https://www.airbnb.com.au/s/Ueno--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2",
    bookingLabel: "Search on Airbnb",
    options: [
      { suburb: "Ueno", notes: "Best transport hub, near markets and parks", searchUrl: "https://www.airbnb.com.au/s/Ueno--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Asakusa", notes: "Traditional feel, walkable temples", searchUrl: "https://www.airbnb.com.au/s/Asakusa--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Kinshicho", notes: "Quieter, affordable, great train links", searchUrl: "https://www.airbnb.com.au/s/Kinshicho--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Ikebukuro", notes: "Family-friendly, shopping nearby", searchUrl: "https://www.airbnb.com.au/s/Ikebukuro--Tokyo--Japan/homes?checkin=2025-05-18&checkout=2025-05-24&adults=2&children=2&min_bedrooms=2" },
    ],
    filters: ["Entire place", "2 bedrooms minimum", "Washer in unit", "Station under 10 min walk", "Avoid nightlife streets"],
    bestChoice: "Ueno / Asakusa",
  },
  {
    city: "Kyoto",
    type: "Airbnb",
    checkIn: "Sat 24 May",
    checkOut: "Thu 29 May",
    nights: 5,
    reason: "5 nights — Airbnb again for laundry and space",
    mainSearchUrl: "https://www.airbnb.com.au/s/Kyoto-Station--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2",
    bookingLabel: "Search on Airbnb",
    options: [
      { suburb: "Kyoto Station", notes: "Best transport links to all sights", searchUrl: "https://www.airbnb.com.au/s/Kyoto-Station--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Kawaramachi", notes: "Central, walkable Gion/Nishiki area", searchUrl: "https://www.airbnb.com.au/s/Kawaramachi--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Gojo", notes: "Quiet, walking distance to Higashiyama", searchUrl: "https://www.airbnb.com.au/s/Gojo--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Gion fringe", notes: "Atmospheric but book early", searchUrl: "https://www.airbnb.com.au/s/Gion--Kyoto--Japan/homes?checkin=2025-05-24&checkout=2025-05-29&adults=2&children=2&min_bedrooms=2" },
    ],
    filters: ["Station under 10 min", "Washer", "Quiet reviews", "Flexible cancellation"],
    bestChoice: "Kyoto Station / Kawaramachi",
  },
  {
    city: "Hiroshima",
    type: "Hotel",
    checkIn: "Thu 29 May",
    checkOut: "Sat 31 May",
    nights: 2,
    reason: "2 nights — short stay, hotel is simpler and well located near trams",
    mainSearchUrl: "https://www.booking.com/searchresults.html?ss=Hiroshima+Japan&checkin_year=2025&checkin_month=5&checkin_monthday=29&checkout_year=2025&checkout_month=5&checkout_monthday=31&group_adults=2&group_children=2&no_rooms=1",
    bookingLabel: "Search on Booking.com",
    options: [
      { suburb: "Hondori / Hatchobori", notes: "Central, near Peace Park", searchUrl: "https://www.booking.com/searchresults.html?ss=Hatchobori+Hiroshima&checkin_year=2025&checkin_month=5&checkin_monthday=29&checkout_year=2025&checkout_month=5&checkout_monthday=31&group_adults=2&group_children=2&no_rooms=1" },
      { suburb: "Peace Park fringe", notes: "Walking distance to everything", searchUrl: "https://www.booking.com/searchresults.html?ss=Peace+Memorial+Park+Hiroshima&checkin_year=2025&checkin_month=5&checkin_monthday=29&checkout_year=2025&checkout_month=5&checkout_monthday=31&group_adults=2&group_children=2&no_rooms=1" },
    ],
    filters: ["Near tram stop", "Central location"],
    bestChoice: "Central tram area",
  },
  {
    city: "Osaka",
    type: "Airbnb",
    checkIn: "Sat 31 May",
    checkOut: "Tue 3 Jun",
    nights: 3,
    reason: "3 nights — Namba area Airbnb gives flexibility for late food nights",
    mainSearchUrl: "https://www.airbnb.com.au/s/Namba--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2",
    bookingLabel: "Search on Airbnb",
    options: [
      { suburb: "Namba", notes: "Best Osaka base — food, transport, nightlife", searchUrl: "https://www.airbnb.com.au/s/Namba--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Tennoji", notes: "Quieter, good transport, slightly cheaper", searchUrl: "https://www.airbnb.com.au/s/Tennoji--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Daikokucho", notes: "Local feel, subway hub", searchUrl: "https://www.airbnb.com.au/s/Daikokucho--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2" },
      { suburb: "Shin-Osaka", notes: "Good if flying out from Shinkansen hub", searchUrl: "https://www.airbnb.com.au/s/Shin-Osaka--Osaka--Japan/homes?checkin=2025-05-31&checkout=2025-06-03&adults=2&children=2&min_bedrooms=2" },
    ],
    filters: ["Near subway", "2 bedrooms", "Washer", "Flexible cancellation"],
    bestChoice: "Namba",
  },
];
