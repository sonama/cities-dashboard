"use client";

import CityCard from "@/components/CityCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import SortBar from "@/components/SortBar";
import { City } from "@/types/city";
import { useCities } from "@/hooks/useCities";

/**
 * CitiesDashboard component
 * Main dashboard component that renders search, filter, sort and city cards
 * @param cities - array of cities fetched from the server
 */
const CitiesDashboard = ({ cities }: { cities: City[] }) => {

    // Destructure all state and handlers from useCities hook
    const { filteredCities, keyword, setKeyword, continent, setContinent, country, setCountry, sortBy, setSortBy, reset } = useCities(cities);    // Show error if no cities are passed
    if (!cities || cities.length === 0) {
        return (
            <p className="text-red-500 text-lg font-medium">
                No cities found.
            </p>
        )
    }

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Cities Dashboard</h1>

            {/* Search, Filter, Sort and Reset row */}
            <div className="flex flex-wrap items-end gap-4">
                <SearchBar value={keyword} onSearch={setKeyword} />
                <FilterBar continent={continent} country={country} onContinent={setContinent} onCountry={setCountry} />
                <SortBar value={sortBy} onSort={setSortBy} />
                {/* Reset all filters button */}
                <button
                    onClick={reset}
                    className="px-4 py-2 text-sm rounded-lg border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                    Reset All
                </button>
            </div>

            {/* City cards grid */}
            {filteredCities.length === 0 ? (
                <p className="text-zinc-500 text-sm">No cities match your search.</p>
            ) : (
                <div className="flex flex-wrap gap-4">
                    {filteredCities?.map((city: City) => (
                        <CityCard key={city.name} city={city} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default CitiesDashboard;