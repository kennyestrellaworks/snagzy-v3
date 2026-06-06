const streetNames = [
  "Main", "Oak", "Maple", "Cedar", "Pine", "Elm", "Washington", "Park",
  "Lake", "Hill", "River", "Sunset", "Highland", "Spring", "Forest",
  "Green", "Valley", "Bay", "Pearl", "Sapphire", "Ruby", "Emerald",
  "Diamond", "Crystal", "Golden", "Silver", "Coral", "Jade", "Amber",
  "Ivory", "Copper", "Marble", "Granite", "Willow", "Birch", "Aspen",
  "Cypress", "Magnolia", "Azalea", "Camellia", "Jasmine", "Lotus",
  "Orchid", "Tulip", "Dahlia", "Lavender", "Rosemary", "Sage",
];

const streetSuffixes = [
  "Street", "Avenue", "Boulevard", "Drive", "Lane", "Road", "Way",
  "Court", "Place", "Circle", "Terrace", "Loop", "Trail", "Path",
  "Alley", "Row", "Walk", "Grove", "Gardens", "Mews",
];

const suburbNames = [
  "Northside", "Southgate", "Eastwood", "Westfield", "Greenfield",
  "Lakeside", "Hilltop", "Riverside", "Parkview", "Sunnyvale",
  "Clearwater", "Meadowbrook", "Pinecrest", "Oakridge", "Stonehaven",
  "Belmont", "Fairview", "Greendale", "Lakewood", "Rosewood",
  "Springfield", "Maplewood", "Cedarbrook", "Willowdale", "Birchwood",
  "Ashton", "Clifton", "Dalton", "Eden", "Fernwood",
  "Huntington", "Kingsley", "Linden", "Montrose", "Norwood",
  "Oakwood", "Preston", "Ridgewood", "Summit", "Thornton",
];

const districtNames = [
  "District 1", "District 2", "District 3", "District 4", "District 5",
  "Central District", "Northern District", "Southern District",
  "Eastern District", "Western District", "Midtown", "Downtown",
  "Uptown", "Old Town", "New Town",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateZipCode(prefix: string): string {
  const suffix = String(randomInt(0, 99)).padStart(2, "0");
  return `${prefix}${suffix}`;
}

function jitterCoordinate(base: number, range: number): number {
  return base + (Math.random() - 0.5) * range;
}

export interface GeneratedAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateOrProvince: string;
  suburbOrDistrict: string;
  zipCode: string;
  country: string;
  latitude: string;
  longitude: string;
}

export function generateAddress(
  country: string,
  stateOrProvince: string,
  city: string,
  cityLat: number,
  cityLng: number,
  zipPrefix: string
): GeneratedAddress {
  const blockNumber = randomInt(1, 200);
  const buildingNumber = randomInt(1, 9999);
  const street = pick(streetNames);
  const suffix = pick(streetSuffixes);

  return {
    addressLine1: `Block ${blockNumber}`,
    addressLine2: `${buildingNumber} ${street} ${suffix}`,
    city,
    stateOrProvince,
    suburbOrDistrict: pick([...suburbNames, ...districtNames]),
    zipCode: generateZipCode(zipPrefix),
    country,
    latitude: jitterCoordinate(cityLat, 0.1).toFixed(6),
    longitude: jitterCoordinate(cityLng, 0.1).toFixed(6),
  };
}
