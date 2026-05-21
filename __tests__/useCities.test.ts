import { renderHook, act } from "@testing-library/react";
import { useCities } from "@/hooks/useCities";
import { City } from "@/types/city";

// Mock cities data
const mockCities: City[] = [
    {
        name: "Sydney",
        name_native: "Sydney",
        country: "Australia",
        continent: "Australia",
        latitude: "-33.865143",
        longitude: "151.209900",
        population: "5312000",
        founded: "1788",
        landmarks: ["Sydney Opera House"]
    },
    {
        name: "Tokyo",
        name_native: "東京",
        country: "Japan",
        continent: "Asia",
        latitude: "35.652832",
        longitude: "139.839478",
        population: "13960000",
        founded: "1603",
        landmarks: ["Tokyo Skytree"]
    }
];

describe("useCities", () => {

    // Test 1 - returns all cities by default
    it("returns all cities by default", () => {
        const { result } = renderHook(() => useCities(mockCities));
        expect(result.current.filteredCities).toHaveLength(2);
    });

    // Test 2 - filters by keyword
    it("filters cities by keyword", () => {
        const { result } = renderHook(() => useCities(mockCities));
        act(() => { result.current.setKeyword("tokyo") });
        expect(result.current.filteredCities).toHaveLength(1);
        expect(result.current.filteredCities[0].name).toBe("Tokyo");
    });

    // Test 3 - filters by continent
    it("filters cities by continent", () => {
        const { result } = renderHook(() => useCities(mockCities));
        act(() => { result.current.setContinent("Asia") });
        expect(result.current.filteredCities).toHaveLength(1);
        expect(result.current.filteredCities[0].name).toBe("Tokyo");
    });

    // Test 4 - filters by country
    it("filters cities by country", () => {
        const { result } = renderHook(() => useCities(mockCities));
        act(() => { result.current.setCountry("Japan") });
        expect(result.current.filteredCities).toHaveLength(1);
        expect(result.current.filteredCities[0].name).toBe("Tokyo");
    });

    // Test 5 - sorts by population
    it("sorts cities by population ascending", () => {
        const { result } = renderHook(() => useCities(mockCities));
        act(() => { result.current.setSortBy("population-asc") });
        expect(result.current.filteredCities[0].name).toBe("Sydney");
    });

    // Test 6 - resets all filters
    it("resets all filters", () => {
        const { result } = renderHook(() => useCities(mockCities));
        act(() => { result.current.setKeyword("tokyo") });
        act(() => { result.current.reset() });
        expect(result.current.filteredCities).toHaveLength(2);
    });
});