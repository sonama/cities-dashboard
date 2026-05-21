import { useEffect, useState } from "react";

/**
 * useFilter hook
 * Fetches continents and countries from the API
 * for use in the FilterBar component
 */
export function useFilter() {

    // Continents list state
    const [continents, setContinents] = useState<string[]>([])

    // Countries list state
    const [countries, setCountries] = useState<string[]>([])

     // Error state
    const [error, setError] = useState<string | null>(null)

     // Loading state
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        /**
         * Fetch unique continents from the API
         */
        const loadContinents = async () => {
            try {
                const res = await fetch("/api/continents")
                const data = await res.json();
                setContinents(data.continents);
            } catch {
                setError("Failed to load continents");
            }
        }

        /**
         * Fetch unique countries from the API
         */
        const loadCountries = async () => {
           try {
                const res = await fetch("/api/countries")
                const data = await res.json();
                setCountries(data.countries);
            } catch {
                setError("Failed to load countries");
            }
        }

        // Load both simultaneously, set loading false when done
        Promise.all([loadContinents(), loadCountries()])
            .catch(() => setError("Failed to load filters"))
            .finally(() => setLoading(false));

    }, [])

    return { countries, continents, error, loading  }
}