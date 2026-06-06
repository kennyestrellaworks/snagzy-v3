import React, { useState } from "react";
import { CountryStateCityPicker } from "react-country-state-city-picker";

export const Address = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [generatedAddress, setGeneratedAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  // Generate fake address
  const generateAddress = () => {
    if (!selectedCountry || !selectedState || !selectedCity) {
      alert("Please select a country, state, and city first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Random street details
      const streetNumbers = [
        101, 202, 305, 410, 525, 638, 742, 856, 963, 107, 204, 389, 456, 512,
        678, 789, 890, 901, 1023, 1156,
      ];
      const streetNames = [
        "Main",
        "Oak",
        "Pine",
        "Maple",
        "Cedar",
        "Elm",
        "Washington",
        "Lake",
        "Hill",
        "Park",
        "View",
        "Broadway",
        "Highland",
        "Forest",
        "River",
        "Sunset",
        "Valley",
        "Spring",
        "Meadow",
        "Willow",
      ];
      const streetTypes = [
        "St",
        "Ave",
        "Rd",
        "Ln",
        "Dr",
        "Blvd",
        "Way",
        "Ct",
        "Pl",
        "Terrace",
      ];

      const randomNumber =
        streetNumbers[Math.floor(Math.random() * streetNumbers.length)];
      const randomStreet =
        streetNames[Math.floor(Math.random() * streetNames.length)];
      const randomType =
        streetTypes[Math.floor(Math.random() * streetTypes.length)];

      const streetAddress = `${randomNumber} ${randomStreet} ${randomType}`;

      // Postal code generation by country
      let zipCode = "";
      const countryCode = selectedCountry.iso2 || selectedCountry.code;

      if (countryCode === "US") {
        zipCode = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
      } else if (countryCode === "CA") {
        const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
        const numbers = "0123456789";
        zipCode = `${letters[Math.floor(Math.random() * letters.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]} ${letters[Math.floor(Math.random() * letters.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${letters[Math.floor(Math.random() * letters.length)]}`;
      } else if (countryCode === "GB") {
        zipCode = `${["SW", "NW", "SE", "NE", "EC", "WC"][Math.floor(Math.random() * 6)]}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)}${["AA", "AB", "BB", "BC", "CA", "CB"][Math.floor(Math.random() * 6)]}`;
      } else {
        zipCode = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
      }

      const fullAddress = {
        street: streetAddress,
        city: selectedCity.name,
        state: selectedState.name,
        postalCode: zipCode,
        country: selectedCountry.name,
        formatted: `${streetAddress}\n${selectedCity.name}, ${selectedState.name} ${zipCode}\n${selectedCountry.name}`,
      };

      setGeneratedAddress(fullAddress);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Address Generator
          </h1>
          <p className="text-gray-600">
            Select a location and generate a realistic (but fake) address
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Country/State/City Picker */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <CountryStateCityPicker
                onCountryChange={(country) => {
                  setSelectedCountry(country);
                  setSelectedState(null);
                  setSelectedCity(null);
                  setGeneratedAddress(null);
                }}
                onStateChange={(state) => {
                  setSelectedState(state);
                  setSelectedCity(null);
                  setGeneratedAddress(null);
                }}
                onCityChange={(city) => {
                  setSelectedCity(city);
                  setGeneratedAddress(null);
                }}
                containerClassName="space-y-4"
                countrySelectClassName="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                stateSelectClassName="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                citySelectClassName="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                countryPlaceholder="Select a country"
                statePlaceholder="Select a state"
                cityPlaceholder="Select a city"
              />
            </div>

            {/* Selected Location Display */}
            {(selectedCountry || selectedState || selectedCity) && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Selected Location:
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  {selectedCountry && <p>🌍 Country: {selectedCountry.name}</p>}
                  {selectedState && <p>📍 State: {selectedState.name}</p>}
                  {selectedCity && <p>🏙️ City: {selectedCity.name}</p>}
                </div>
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={generateAddress}
              disabled={
                !selectedCountry || !selectedState || !selectedCity || loading
              }
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate Address"
              )}
            </button>

            {/* Generated Address Display */}
            {generatedAddress && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Generated Address
                  </h3>
                </div>
                <div className="space-y-1 text-gray-700 font-mono text-sm">
                  <p>{generatedAddress.street}</p>
                  <p>
                    {generatedAddress.city}, {generatedAddress.state}{" "}
                    {generatedAddress.postalCode}
                  </p>
                  <p>{generatedAddress.country}</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedAddress.formatted);
                    alert("Address copied to clipboard!");
                  }}
                  className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  Copy to clipboard
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Addresses generated are fake and for demonstration purposes only
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
