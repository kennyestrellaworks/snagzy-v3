import { useState, useMemo, useCallback } from "react";
import { MapPin, Globe, Building2, ChevronDown, Copy, Check, RefreshCw, Navigation } from "lucide-react";
import { locations, CountryData, StateData, CityData } from "./data/locations";
import { generateAddress, GeneratedAddress } from "./data/addressData";

function App() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [generatedAddress, setGeneratedAddress] = useState<GeneratedAddress | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const states = useMemo(
    () => (selectedCountry ? selectedCountry.states : []),
    [selectedCountry]
  );

  const cities = useMemo(
    () => (selectedState ? selectedState.cities : []),
    [selectedState]
  );

  const canGenerate = selectedCountry && selectedState && selectedCity;

  const handleCountryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = locations.find((c) => c.name === e.target.value) || null;
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
    setGeneratedAddress(null);
  }, []);

  const handleStateChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((s) => s.name === e.target.value) || null;
    setSelectedState(state);
    setSelectedCity(null);
    setGeneratedAddress(null);
  }, [states]);

  const handleCityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = cities.find((c) => c.name === e.target.value) || null;
    setSelectedCity(city);
    setGeneratedAddress(null);
  }, [cities]);

  const handleGenerate = useCallback(() => {
    if (!canGenerate) return;
    setIsGenerating(true);
    setTimeout(() => {
      const address = generateAddress(
        selectedCountry!.name,
        selectedState!.name,
        selectedCity!.name,
        selectedCity!.lat,
        selectedCity!.lng,
        selectedCity!.zipPrefix
      );
      setGeneratedAddress(address);
      setIsGenerating(false);
    }, 400);
  }, [canGenerate, selectedCountry, selectedState, selectedCity]);

  const handleCopy = useCallback(() => {
    if (!generatedAddress) return;
    navigator.clipboard.writeText(JSON.stringify(generatedAddress, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [generatedAddress]);

  const selectClass =
    "w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3.5 pr-10 text-slate-700 text-sm font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 hover:border-slate-300 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed cursor-pointer";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/25 mb-5">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Random Address Generator
          </h1>
          <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
            Select a location and generate a realistic random address with coordinates
          </p>
        </div>

        {/* Selection Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 mb-6">
          <div className="grid gap-5">
            {/* Country */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <Globe className="w-3.5 h-3.5" />
                Country
              </label>
              <div className="relative">
                <select
                  value={selectedCountry?.name || ""}
                  onChange={handleCountryChange}
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {locations.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* State / Province */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                State / Province
              </label>
              <div className="relative">
                <select
                  value={selectedState?.name || ""}
                  onChange={handleStateChange}
                  disabled={!selectedCountry}
                  className={selectClass}
                >
                  <option value="" disabled>
                    {selectedCountry ? "Select a state or province" : "Select a country first"}
                  </option>
                  {states.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                City
              </label>
              <div className="relative">
                <select
                  value={selectedCity?.name || ""}
                  onChange={handleCityChange}
                  disabled={!selectedState}
                  className={selectClass}
                >
                  <option value="" disabled>
                    {selectedState ? "Select a city" : "Select a state first"}
                  </option>
                  {cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!canGenerate || isGenerating}
            className="mt-6 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-teal-600/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-600/30 hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none active:scale-[0.98]"
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
            {isGenerating ? "Generating..." : "Generate Address"}
          </button>
        </div>

        {/* Result Card */}
        {generatedAddress && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
            {/* Result Header */}
            <div className="px-6 sm:px-8 py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Generated Address
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-150"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy JSON
                  </>
                )}
              </button>
            </div>

            {/* Address Fields */}
            <div className="px-6 sm:px-8 py-5 space-y-4">
              <AddressField label="Address Line 1" value={generatedAddress.addressLine1} />
              <AddressField label="Address Line 2" value={generatedAddress.addressLine2} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AddressField label="City" value={generatedAddress.city} />
                <AddressField label="State / Province" value={generatedAddress.stateOrProvince} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AddressField label="Suburb / District" value={generatedAddress.suburbOrDistrict} />
                <AddressField label="Zip Code" value={generatedAddress.zipCode} />
              </div>
              <AddressField label="Country" value={generatedAddress.country} />

              {/* Coordinates */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Coordinates
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Latitude</span>
                    <p className="mt-1 text-sm font-mono font-semibold text-slate-800">{generatedAddress.latitude}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Longitude</span>
                    <p className="mt-1 text-sm font-mono font-semibold text-slate-800">{generatedAddress.longitude}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* JSON Preview */}
            <div className="border-t border-slate-100">
              <div className="px-6 sm:px-8 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">JSON Output</span>
                </div>
                <pre className="text-xs font-mono bg-slate-900 text-emerald-400 rounded-xl p-4 overflow-x-auto leading-relaxed">
                  {JSON.stringify(generatedAddress, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AddressField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

export default App;
