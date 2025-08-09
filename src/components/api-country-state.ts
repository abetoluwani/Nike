import { useEffect, useState } from "react";

export function useCountries() {
  const [countries, setCountries] = useState<{ name: string; code: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,alpha2Code")
      .then((res) => res.json())
      .then((data) => {
        const result = data
          .map((c: any) => ({
            name: c.name,
            code: c.alpha2Code,
          }))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));

        setCountries(result);
        setLoading(false);
        setError(null);
        console.log("Fetched countries:", result);
      })
      .catch(() => {
        setError("Failed to fetch countries");
        setLoading(false);
      });
  }, []);

  return countries;
}

export function useStates(countryCode: string) {
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    if (!countryCode) return;
    fetch(`https://countriesnow.space/api/v0.1/countries/states`)
      .then((res) => res.json())
      .then((data) => {
        const country = data.data.find((c: any) => c.iso2 === countryCode);

        setStates(country ? country.states.map((s: any) => s.name) : []);
      });
  }, [countryCode]);

  return states;
}
