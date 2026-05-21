"use client";

/**
 * SortBar component
 * Renders a dropdown to sort cities by name, population or founded year
 * @param onSort - callback function to handle sort change
 */
const SortBar = ({ onSort, value }: { onSort: (value: string) => void, value: string }) => {
    return (
        <div className="flex flex-col gap-1">
            {/* Sort label */}
            <label className="sr-only">Sort By</label>

            {/* Sort dropdown */}
            <select
                value={value}
                onChange={(e) => onSort(e.target.value)}
                className="border border-zinc-200 rounded-lg px-4 py-2 text-sm"
            >
                <option value="">Sort By</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="population-asc">Population Low-High</option>
                <option value="population-desc">Population High-Low</option>
                <option value="founded-asc">Founded Oldest</option>
                <option value="founded-desc">Founded Newest</option>
            </select>
        </div>
    )
}

export default SortBar;