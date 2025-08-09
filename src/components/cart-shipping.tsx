import { useState } from "react";

import { useCountries, useStates } from "./api-country-state";
export function CartShipping() {
  const countries = useCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const states = useStates(selectedCountry);
  const [selectedState, setSelectedState] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    if (!selectedCountry) {
      setError("Please select a country.");

      return;
    }
    if (!selectedState) {
      setError("Please select a state/city.");

      return;
    }
    if (!zip.trim()) {
      setError("Please enter your ZIP code.");

      return;
    }
    // Save shipping info (could be to context/global state)
    setSaved(true);
    // Example: console.log('Shipping info:', { selectedCountry, selectedState, zip });
  };

  return (
    <div className="bg-default-50 rounded-lg p-6 shadow-md mb-6">
      <h3 className="font-bold mb-4 text-lg">Calculated Shipping</h3>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <select
          className="border rounded px-3 py-2 text-sm"
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState("");
          }}
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-2 text-sm"
          disabled={!selectedCountry || states.length === 0}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State / City</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="ZIP Code"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {saved && (
          <div className="text-green-500 text-sm">Shipping info saved!</div>
        )}
        <button
          className="bg-black text-white rounded px-4 py-2 mt-2 font-medium"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
