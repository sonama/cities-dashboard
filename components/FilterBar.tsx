"use client";

import { useFilter } from "@/hooks/useFilter";
import Loading from "@/utils/Loading";
import Error from "@/utils/Error";

/**
 * FilterBar component
 * Renders dropdowns to filter cities by continent and country
 * @param onContinent - callback function to handle continent filter
 * @param onCountry - callback function to handle country filter
 */
const FilterBar = ({ onContinent, onCountry, continent, country }: {
    onContinent: (value: string) => void,
    onCountry: (value: string) => void,
    continent: string,
    country: string
}) => {

    // Get continents and countries from useFilter hook
    const { countries, continents, error, loading } = useFilter();

    if (loading) return <Loading></Loading>
    if (error)  return <Error></Error>

    return (
        <div className="flex gap-4">
            {/* Continent filter dropdown */}
            <div className="flex flex-col gap-1">
                <select
                    value={continent}
                    onChange={(e) => onContinent(e.target.value)}
                    className="border border-zinc-200 rounded-lg px-4 py-2 text-sm"
                >
                    <option value="">All Continents</option>
                    {continents.map((continent) => (
                        <option key={continent} value={continent}>{continent}</option>
                    ))}
                </select>
            </div>

            {/* Country filter dropdown */}
            <div className="flex flex-col gap-1">
                <select
                    value={country}
                    onChange={(e) => onCountry(e.target.value)}
                    className="border border-zinc-200 rounded-lg px-4 py-2 text-sm"
                >
                    <option value="">All Countries</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterBar;