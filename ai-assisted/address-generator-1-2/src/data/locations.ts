export interface CityData {
  name: string;
  lat: number;
  lng: number;
  zipPrefix: string;
}

export interface StateData {
  name: string;
  cities: CityData[];
}

export interface CountryData {
  name: string;
  code: string;
  states: StateData[];
}

export const locations: CountryData[] = [
  {
    name: "Philippines",
    code: "PH",
    states: [
      {
        name: "Metro Manila",
        cities: [
          { name: "Quezon City", lat: 14.676, lng: 121.0437, zipPrefix: "11" },
          { name: "Makati City", lat: 14.5547, lng: 121.0244, zipPrefix: "12" },
          { name: "Manila", lat: 14.5995, lng: 120.9842, zipPrefix: "10" },
          { name: "Pasig City", lat: 14.5764, lng: 121.0613, zipPrefix: "16" },
          { name: "Taguig City", lat: 14.5176, lng: 121.0509, zipPrefix: "16" },
        ],
      },
      {
        name: "Cebu",
        cities: [
          { name: "Cebu City", lat: 10.3157, lng: 123.8854, zipPrefix: "60" },
          { name: "Mandaue City", lat: 10.3239, lng: 123.9222, zipPrefix: "60" },
          { name: "Lapu-Lapu City", lat: 10.3103, lng: 123.9494, zipPrefix: "60" },
          { name: "Talisay City", lat: 10.2456, lng: 123.8537, zipPrefix: "60" },
        ],
      },
      {
        name: "Negros Oriental",
        cities: [
          { name: "Dumaguete City", lat: 9.3068, lng: 123.3054, zipPrefix: "62" },
          { name: "Bayawan City", lat: 9.3644, lng: 122.4036, zipPrefix: "62" },
          { name: "Pagadian City", lat: 7.8253, lng: 123.4387, zipPrefix: "62" },
          { name: "Tanjay City", lat: 9.5289, lng: 123.1474, zipPrefix: "62" },
        ],
      },
      {
        name: "Davao del Sur",
        cities: [
          { name: "Davao City", lat: 7.1907, lng: 125.4553, zipPrefix: "80" },
          { name: "Digos City", lat: 6.8762, lng: 125.3556, zipPrefix: "80" },
        ],
      },
      {
        name: "Iloilo",
        cities: [
          { name: "Iloilo City", lat: 10.6953, lng: 122.5644, zipPrefix: "50" },
          { name: "Passi City", lat: 11.1075, lng: 122.6397, zipPrefix: "50" },
        ],
      },
    ],
  },
  {
    name: "United States",
    code: "US",
    states: [
      {
        name: "California",
        cities: [
          { name: "Los Angeles", lat: 34.0522, lng: -118.2437, zipPrefix: "90" },
          { name: "San Francisco", lat: 37.7749, lng: -122.4194, zipPrefix: "94" },
          { name: "San Diego", lat: 32.7157, lng: -117.1611, zipPrefix: "92" },
          { name: "San Jose", lat: 37.3382, lng: -121.8863, zipPrefix: "95" },
          { name: "Sacramento", lat: 38.5816, lng: -121.4944, zipPrefix: "95" },
        ],
      },
      {
        name: "New York",
        cities: [
          { name: "New York City", lat: 40.7128, lng: -74.006, zipPrefix: "10" },
          { name: "Buffalo", lat: 42.8864, lng: -78.8784, zipPrefix: "14" },
          { name: "Rochester", lat: 43.1566, lng: -77.6088, zipPrefix: "14" },
          { name: "Albany", lat: 42.6526, lng: -73.7562, zipPrefix: "12" },
        ],
      },
      {
        name: "Texas",
        cities: [
          { name: "Houston", lat: 29.7604, lng: -95.3698, zipPrefix: "77" },
          { name: "Austin", lat: 30.2672, lng: -97.7431, zipPrefix: "78" },
          { name: "Dallas", lat: 32.7767, lng: -96.797, zipPrefix: "75" },
          { name: "San Antonio", lat: 29.4241, lng: -98.4936, zipPrefix: "78" },
        ],
      },
      {
        name: "Florida",
        cities: [
          { name: "Miami", lat: 25.7617, lng: -80.1918, zipPrefix: "33" },
          { name: "Orlando", lat: 28.5383, lng: -81.3792, zipPrefix: "32" },
          { name: "Tampa", lat: 27.9506, lng: -82.4572, zipPrefix: "33" },
          { name: "Jacksonville", lat: 30.3322, lng: -81.6557, zipPrefix: "32" },
        ],
      },
      {
        name: "Illinois",
        cities: [
          { name: "Chicago", lat: 41.8781, lng: -87.6298, zipPrefix: "60" },
          { name: "Springfield", lat: 39.7817, lng: -89.6501, zipPrefix: "62" },
          { name: "Naperville", lat: 41.7508, lng: -88.1535, zipPrefix: "60" },
        ],
      },
    ],
  },
  {
    name: "United Kingdom",
    code: "GB",
    states: [
      {
        name: "England",
        cities: [
          { name: "London", lat: 51.5074, lng: -0.1278, zipPrefix: "E" },
          { name: "Manchester", lat: 53.4808, lng: -2.2426, zipPrefix: "M" },
          { name: "Birmingham", lat: 52.4862, lng: -1.8904, zipPrefix: "B" },
          { name: "Liverpool", lat: 53.4084, lng: -2.9916, zipPrefix: "L" },
          { name: "Bristol", lat: 51.4545, lng: -2.5879, zipPrefix: "BS" },
        ],
      },
      {
        name: "Scotland",
        cities: [
          { name: "Edinburgh", lat: 55.9533, lng: -3.1883, zipPrefix: "EH" },
          { name: "Glasgow", lat: 55.8642, lng: -4.2518, zipPrefix: "G" },
          { name: "Aberdeen", lat: 57.1497, lng: -2.0943, zipPrefix: "AB" },
        ],
      },
      {
        name: "Wales",
        cities: [
          { name: "Cardiff", lat: 51.4816, lng: -3.1791, zipPrefix: "CF" },
          { name: "Swansea", lat: 51.6214, lng: -3.9436, zipPrefix: "SA" },
        ],
      },
      {
        name: "Northern Ireland",
        cities: [
          { name: "Belfast", lat: 54.5973, lng: -5.9301, zipPrefix: "BT" },
          { name: "Derry", lat: 54.9965, lng: -7.3086, zipPrefix: "BT" },
        ],
      },
    ],
  },
  {
    name: "Japan",
    code: "JP",
    states: [
      {
        name: "Tokyo",
        cities: [
          { name: "Shibuya", lat: 35.6762, lng: 139.6503, zipPrefix: "150" },
          { name: "Shinjuku", lat: 35.6896, lng: 139.6917, zipPrefix: "160" },
          { name: "Minato", lat: 35.6581, lng: 139.7514, zipPrefix: "105" },
          { name: "Chiyoda", lat: 35.694, lng: 139.7524, zipPrefix: "100" },
        ],
      },
      {
        name: "Osaka",
        cities: [
          { name: "Osaka City", lat: 34.6937, lng: 135.5023, zipPrefix: "530" },
          { name: "Sakai", lat: 34.5867, lng: 135.4714, zipPrefix: "590" },
          { name: "Hirakata", lat: 34.8074, lng: 135.6482, zipPrefix: "573" },
        ],
      },
      {
        name: "Kyoto",
        cities: [
          { name: "Kyoto City", lat: 35.0116, lng: 135.7681, zipPrefix: "600" },
          { name: "Uji", lat: 34.8842, lng: 135.7994, zipPrefix: "611" },
        ],
      },
      {
        name: "Hokkaido",
        cities: [
          { name: "Sapporo", lat: 43.0621, lng: 141.3544, zipPrefix: "060" },
          { name: "Asahikawa", lat: 43.7702, lng: 142.3596, zipPrefix: "070" },
        ],
      },
    ],
  },
  {
    name: "Australia",
    code: "AU",
    states: [
      {
        name: "New South Wales",
        cities: [
          { name: "Sydney", lat: -33.8688, lng: 151.2093, zipPrefix: "20" },
          { name: "Newcastle", lat: -32.9169, lng: 151.751, zipPrefix: "23" },
          { name: "Wollongong", lat: -34.424, lng: 150.8933, zipPrefix: "25" },
        ],
      },
      {
        name: "Victoria",
        cities: [
          { name: "Melbourne", lat: -37.8136, lng: 144.9631, zipPrefix: "30" },
          { name: "Geelong", lat: -38.1475, lng: 144.3623, zipPrefix: "32" },
        ],
      },
      {
        name: "Queensland",
        cities: [
          { name: "Brisbane", lat: -27.4698, lng: 153.0251, zipPrefix: "40" },
          { name: "Gold Coast", lat: -28.0167, lng: 153.4, zipPrefix: "42" },
          { name: "Cairns", lat: -16.9186, lng: 145.7781, zipPrefix: "48" },
        ],
      },
      {
        name: "Western Australia",
        cities: [
          { name: "Perth", lat: -31.9505, lng: 115.8605, zipPrefix: "60" },
        ],
      },
    ],
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      {
        name: "Ontario",
        cities: [
          { name: "Toronto", lat: 43.6532, lng: -79.3832, zipPrefix: "M" },
          { name: "Ottawa", lat: 45.4215, lng: -75.6972, zipPrefix: "K" },
          { name: "Hamilton", lat: 43.2557, lng: -79.8711, zipPrefix: "L" },
        ],
      },
      {
        name: "British Columbia",
        cities: [
          { name: "Vancouver", lat: 49.2827, lng: -123.1207, zipPrefix: "V" },
          { name: "Victoria", lat: 48.4284, lng: -123.3656, zipPrefix: "V" },
        ],
      },
      {
        name: "Quebec",
        cities: [
          { name: "Montreal", lat: 45.5017, lng: -73.5673, zipPrefix: "H" },
          { name: "Quebec City", lat: 46.8139, lng: -71.208, zipPrefix: "G" },
        ],
      },
      {
        name: "Alberta",
        cities: [
          { name: "Calgary", lat: 51.0447, lng: -114.0719, zipPrefix: "T" },
          { name: "Edmonton", lat: 53.5461, lng: -113.4938, zipPrefix: "T" },
        ],
      },
    ],
  },
  {
    name: "Germany",
    code: "DE",
    states: [
      {
        name: "Bavaria",
        cities: [
          { name: "Munich", lat: 48.1351, lng: 11.582, zipPrefix: "80" },
          { name: "Nuremberg", lat: 49.4521, lng: 11.0767, zipPrefix: "90" },
          { name: "Augsburg", lat: 48.3665, lng: 10.8944, zipPrefix: "86" },
        ],
      },
      {
        name: "Berlin",
        cities: [
          { name: "Berlin", lat: 52.52, lng: 13.405, zipPrefix: "10" },
        ],
      },
      {
        name: "Hesse",
        cities: [
          { name: "Frankfurt", lat: 50.1109, lng: 8.6821, zipPrefix: "60" },
          { name: "Darmstadt", lat: 49.8728, lng: 8.6512, zipPrefix: "64" },
        ],
      },
      {
        name: "North Rhine-Westphalia",
        cities: [
          { name: "Cologne", lat: 50.9375, lng: 6.9603, zipPrefix: "50" },
          { name: "Dusseldorf", lat: 51.2277, lng: 6.7735, zipPrefix: "40" },
          { name: "Dortmund", lat: 51.5141, lng: 7.4653, zipPrefix: "44" },
        ],
      },
    ],
  },
  {
    name: "Brazil",
    code: "BR",
    states: [
      {
        name: "Sao Paulo",
        cities: [
          { name: "Sao Paulo", lat: -23.5505, lng: -46.6333, zipPrefix: "01" },
          { name: "Campinas", lat: -22.9099, lng: -47.0626, zipPrefix: "13" },
        ],
      },
      {
        name: "Rio de Janeiro",
        cities: [
          { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, zipPrefix: "20" },
          { name: "Niteroi", lat: -22.8833, lng: -43.1036, zipPrefix: "24" },
        ],
      },
      {
        name: "Minas Gerais",
        cities: [
          { name: "Belo Horizonte", lat: -19.9167, lng: -43.9345, zipPrefix: "30" },
          { name: "Uberlandia", lat: -18.9187, lng: -48.2771, zipPrefix: "38" },
        ],
      },
      {
        name: "Bahia",
        cities: [
          { name: "Salvador", lat: -12.9714, lng: -38.5124, zipPrefix: "40" },
          { name: "Feira de Santana", lat: -12.2556, lng: -38.9532, zipPrefix: "44" },
        ],
      },
    ],
  },
  {
    name: "India",
    code: "IN",
    states: [
      {
        name: "Maharashtra",
        cities: [
          { name: "Mumbai", lat: 19.076, lng: 72.8777, zipPrefix: "40" },
          { name: "Pune", lat: 18.5204, lng: 73.8567, zipPrefix: "41" },
          { name: "Nagpur", lat: 21.1458, lng: 79.0882, zipPrefix: "44" },
        ],
      },
      {
        name: "Karnataka",
        cities: [
          { name: "Bangalore", lat: 12.9716, lng: 77.5946, zipPrefix: "56" },
          { name: "Mysore", lat: 12.2958, lng: 76.6394, zipPrefix: "57" },
        ],
      },
      {
        name: "Delhi",
        cities: [
          { name: "New Delhi", lat: 28.6139, lng: 77.209, zipPrefix: "11" },
        ],
      },
      {
        name: "Tamil Nadu",
        cities: [
          { name: "Chennai", lat: 13.0827, lng: 80.2707, zipPrefix: "60" },
          { name: "Coimbatore", lat: 11.0168, lng: 76.9558, zipPrefix: "64" },
        ],
      },
    ],
  },
  {
    name: "South Korea",
    code: "KR",
    states: [
      {
        name: "Seoul",
        cities: [
          { name: "Gangnam-gu", lat: 37.4979, lng: 127.0276, zipPrefix: "06" },
          { name: "Mapo-gu", lat: 37.5663, lng: 126.9014, zipPrefix: "04" },
          { name: "Jongno-gu", lat: 37.5735, lng: 126.9789, zipPrefix: "03" },
        ],
      },
      {
        name: "Busan",
        cities: [
          { name: "Haeundae-gu", lat: 35.1587, lng: 129.1604, zipPrefix: "48" },
          { name: "Jin-gu", lat: 35.1773, lng: 129.0776, zipPrefix: "47" },
        ],
      },
      {
        name: "Gyeonggi-do",
        cities: [
          { name: "Suwon", lat: 37.2636, lng: 127.0286, zipPrefix: "16" },
          { name: "Seongnam", lat: 37.4201, lng: 127.1276, zipPrefix: "13" },
        ],
      },
    ],
  },
];
