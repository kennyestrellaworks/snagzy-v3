import { useState, useMemo, useCallback } from "react";
import { Country, State, City } from "country-state-city";
import {
  Globe,
  MapPin,
  Building,
  Shuffle,
  Copy,
  Check,
  Pencil,
  Navigation,
} from "lucide-react";

const streetNames = [
  "Main",
  "Oak",
  "Maple",
  "Cedar",
  "Pine",
  "Elm",
  "Washington",
  "Lincoln",
  "Park",
  "Lake",
  "Hill",
  "River",
  "Forest",
  "Sunset",
  "Highland",
  "Spring",
  "Valley",
  "Bay",
  "Harbor",
  "Meadow",
];

const streetTypes = [
  "Street",
  "Avenue",
  "Boulevard",
  "Drive",
  "Lane",
  "Court",
  "Place",
  "Way",
  "Circle",
  "Road",
  "Terrace",
  "Trail",
];

const unitPrefixes = ["Apt", "Unit", "Suite", "#"];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAddressLine1() {
  const number = randomBetween(1, 9999);
  const directional =
    Math.random() > 0.5 ? ` ${randomFrom(["N", "S", "E", "W"])}` : "";
  return `${number}${directional} ${randomFrom(streetNames)} ${randomFrom(streetTypes)}`;
}

function generateAddressLine2() {
  if (Math.random() > 0.4) {
    return `${randomFrom(unitPrefixes)} ${randomBetween(1, 200)}`;
  }
  return "";
}

export default function AddressGenerator1() {
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [generatedAddress, setGeneratedAddress] = useState(null);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [copied, setCopied] = useState(false);

  const countries = useMemo(() => Country.getAllCountries(), []);

  const states = useMemo(
    () => (countryCode ? State.getStatesOfCountry(countryCode) : []),
    [countryCode],
  );

  const cities = useMemo(
    () =>
      countryCode && stateCode
        ? City.getCitiesOfState(countryCode, stateCode)
        : [],
    [countryCode, stateCode],
  );

  const selectedCountry = useMemo(
    () => countries.find((c) => c.isoCode === countryCode),
    [countries, countryCode],
  );

  const selectedState = useMemo(
    () => states.find((s) => s.isoCode === stateCode),
    [states, stateCode],
  );

  const resolvedCity = cityName || customCity;

  const selectedCityData = useMemo(
    () => (cityName ? cities.find((c) => c.name === cityName) : null),
    [cities, cityName],
  );

  const handleCountryChange = useCallback((e) => {
    setCountryCode(e.target.value);
    setStateCode("");
    setCityName("");
    setCustomCity("");
    setGeneratedAddress(null);
    setAddressLine1("");
    setAddressLine2("");
    setCoordinates(null);
  }, []);

  const handleStateChange = useCallback((e) => {
    setStateCode(e.target.value);
    setCityName("");
    setCustomCity("");
    setGeneratedAddress(null);
    setAddressLine1("");
    setAddressLine2("");
    setCoordinates(null);
  }, []);

  const handleCityChange = useCallback((e) => {
    setCityName(e.target.value);
    setCustomCity("");
    setGeneratedAddress(null);
    setAddressLine1("");
    setAddressLine2("");
    setCoordinates(null);
  }, []);

  const handleCustomCityChange = useCallback((e) => {
    setCustomCity(e.target.value);
    setCityName("");
    setGeneratedAddress(null);
    setAddressLine1("");
    setAddressLine2("");
    setCoordinates(null);
  }, []);

  const handleGenerate = useCallback(() => {
    if (!countryCode || !stateCode || !resolvedCity) return;

    const line1 = generateAddressLine1();
    const line2 = generateAddressLine2();
    const postalCode = String(randomBetween(10000, 99999));

    const parts = [
      line1,
      line2,
      `${resolvedCity}, ${selectedState?.name || stateCode} ${postalCode}`,
      selectedCountry?.name || countryCode,
    ].filter(Boolean);

    setAddressLine1(line1);
    setAddressLine2(line2);

    const lat =
      selectedCityData?.latitude ||
      selectedState?.latitude ||
      selectedCountry?.latitude;
    const lng =
      selectedCityData?.longitude ||
      selectedState?.longitude ||
      selectedCountry?.longitude;
    if (lat && lng) {
      setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lng) });
    } else {
      setCoordinates(null);
    }

    setGeneratedAddress(parts.join("\n"));
    setCopied(false);
  }, [
    countryCode,
    stateCode,
    resolvedCity,
    selectedState,
    selectedCountry,
    selectedCityData,
  ]);

  const handleCopy = useCallback(async () => {
    if (!generatedAddress) return;
    try {
      await navigator.clipboard.writeText(generatedAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = generatedAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [generatedAddress]);

  const canGenerate = countryCode && stateCode && resolvedCity;

  const hasCities = cities.length > 0;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white tracking-tight">
                Address Generator
              </h1>
              <p className="text-sm text-slate-400 mt-0.5">
                Select a location, generate an address
              </p>
            </div>
          </div>
        </div>

        {/* Selects */}
        <div className="px-8 pt-8 pb-4 space-y-5">
          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              <Globe className="w-4 h-4 inline mr-1.5 text-slate-400 -mt-0.5" />
              Country
            </label>
            <select
              value={countryCode}
              onChange={handleCountryChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="">Choose a country</option>
              {countries.map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              <MapPin className="w-4 h-4 inline mr-1.5 text-slate-400 -mt-0.5" />
              State / Region
            </label>
            <select
              value={stateCode}
              onChange={handleStateChange}
              disabled={!countryCode}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="">
                {countryCode
                  ? "Choose a state / region"
                  : "Select a country first"}
              </option>
              {states.map((s) => (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              <Building className="w-4 h-4 inline mr-1.5 text-slate-400 -mt-0.5" />
              City
            </label>
            {!stateCode ? (
              <select
                disabled
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm transition appearance-none cursor-not-allowed opacity-40"
              >
                <option value="">Select a state first</option>
              </select>
            ) : hasCities ? (
              <>
                <select
                  value={cityName}
                  onChange={handleCityChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Choose a city</option>
                  {cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {!cityName && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-xs text-slate-400 font-medium">
                      or type your own
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>
                )}
                {!cityName && (
                  <div className="relative mt-2">
                    <Pencil className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={customCity}
                      onChange={handleCustomCityChange}
                      placeholder="Type a city name..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  No cities in database for this region. Please type the city
                  name below.
                </p>
                <div className="relative">
                  <Pencil className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={customCity}
                    onChange={handleCustomCityChange}
                    placeholder="Type a city name..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-3 text-sm text-slate-800 shadow-sm transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Generate Button */}
        <div className="px-8 pb-4">
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700 hover:shadow-emerald-700/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
          >
            <Shuffle className="w-4 h-4" />
            Generate Address
          </button>
        </div>

        {/* Result */}
        {generatedAddress && (
          <div className="mx-8 mb-8 rounded-xl bg-slate-800 text-white overflow-hidden animate-fade-in-up">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-700/50 border-b border-slate-600/50">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Generated Address
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="px-5 py-4 space-y-3">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Address Line 1
                </span>
                <p className="text-sm font-mono mt-0.5">{addressLine1}</p>
              </div>
              {addressLine2 && (
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Address Line 2
                  </span>
                  <p className="text-sm font-mono mt-0.5">{addressLine2}</p>
                </div>
              )}
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  City, State ZIP
                </span>
                <p className="text-sm font-mono mt-0.5">
                  {generatedAddress
                    .split("\n")
                    .filter((l) => l !== addressLine1 && l !== addressLine2)
                    .join("\n")}
                </p>
              </div>
              {coordinates && (
                <div className="pt-2 border-t border-slate-700/50">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Coordinates
                  </span>
                  <div className="flex items-center gap-3 mt-1.5">
                    <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="text-sm font-mono">
                      <span className="text-emerald-400">
                        {coordinates.lat.toFixed(4)}
                      </span>
                      <span className="text-slate-600 mx-1">,</span>
                      <span className="text-emerald-400">
                        {coordinates.lng.toFixed(4)}
                      </span>
                    </div>
                    <span className="text-xs text-slate-600">
                      (
                      {coordinates.lat >= 0
                        ? `${coordinates.lat.toFixed(4)} N`
                        : `${(-coordinates.lat).toFixed(4)} S`}
                      ,{" "}
                      {coordinates.lng >= 0
                        ? `${coordinates.lng.toFixed(4)} E`
                        : `${(-coordinates.lng).toFixed(4)} W`}
                      )
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Location badge */}
      {selectedCountry && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Globe className="w-3.5 h-3.5" />
          <span>
            {[selectedCountry?.flag, selectedState?.name, resolvedCity]
              .filter(Boolean)
              .join(" / ")}
          </span>
        </div>
      )}
    </div>
  );
}
