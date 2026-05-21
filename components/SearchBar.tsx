"use client";

import { useSearch } from "@/hooks/useSearch";

/**
 * SearchBar component
 * Renders a search input with debounced search functionality
 * @param onSearch - callback function to handle search
 */
const SearchBar = ({ onSearch ,value}: { onSearch: (value: string) => void, value: string  }) => {

    // Get input value and handler from useSearch hook
    const { inputValue, handleSearch } = useSearch(onSearch,value);

    return (
        <div className="w-1/4 flex flex-row items-center gap-4">
            {/* Hidden label for accessibility */}
            <label htmlFor="search" className="sr-only">Search</label>

            {/* Search input */}
            <input
                type="text"
                id="search"
                value={inputValue}
                onChange={handleSearch}
                placeholder="Search cities..."
                className="w-full border border-zinc-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default SearchBar;