import { useState } from "react";
import { City } from "@/types/city";

/**
 * useCities hook
 * Handles filtering and sorting of cities
 * @param cities - array of cities from the server
 */
export function useCities(cities: City[] = []) {

    // Search keyword state
    const [keyword, setKeyword] = useState("")

    // Continent filter state
    const [continent, setContinent] = useState("")

    // Country filter state
    const [country, setCountry] = useState("")

    // Sort option state
    const [sortBy, setSortBy] = useState("")

    // Filter cities based on keyword, continent and country
    // then sort based on sortBy value
    const filteredCities = cities
        .filter((city) => {
            // Check if city matches search keyword
            const matchesKeyword = city.name.toLowerCase().includes(keyword) ||
                city.country.toLowerCase().includes(keyword) ||
                city.continent.toLowerCase().includes(keyword);

            // Check if city matches selected continent
            const matchesContinent = continent ? city.continent === continent : true;

            // Check if city matches selected country
            const matchesCountry = country ? city.country === country : true;

            return matchesKeyword && matchesContinent && matchesCountry;
        })
        .sort((a, b) => {
            // Sort by  diff params
            if (sortBy === "name-asc") return a.name.localeCompare(b.name);
            if (sortBy === "name-desc") return b.name.localeCompare(a.name);
            if (sortBy === "population-asc") return Number(a.population) - Number(b.population);
            if (sortBy === "population-desc") return Number(b.population) - Number(a.population);
            if (sortBy === "founded-asc") return Number(a.founded) - Number(b.founded);
            if (sortBy === "founded-desc") return Number(b.founded) - Number(a.founded);

            return 0;
        });

    /**
     * Reset all filters and search
     */
    const reset = () => {
        setKeyword("");
        setContinent("");
        setCountry("");
        setSortBy("");
    }


    return { filteredCities, keyword, setKeyword, continent, setContinent, country, setCountry, sortBy, setSortBy, reset }
}