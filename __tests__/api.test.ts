/**
 * @jest-environment node
 */

import { GET as getCities } from "@/app/api/cities/route";
import { GET as getContinents } from "@/app/api/continents/route";
import { GET as getCountries } from "@/app/api/countries/route";

// Mock Response globally for Node environment
global.Response = {
    json: (data: unknown) => ({
        json: async () => data
    })
} as unknown as typeof Response;

describe("API Routes", () => {

    // Test 1 - cities API returns all cities
    it("GET /api/cities returns all cities", async () => {
        const response = await getCities();
        const data = await response.json();
        expect(data.cities).toHaveLength(8);
    });

    // Test 2 - cities API returns correct fields
    it("GET /api/cities returns correct fields", async () => {
        const response = await getCities();
        const data = await response.json();
        expect(data.cities[0]).toHaveProperty("name");
        expect(data.cities[0]).toHaveProperty("country");
        expect(data.cities[0]).toHaveProperty("continent");
        expect(data.cities[0]).toHaveProperty("population");
        expect(data.cities[0]).toHaveProperty("founded");
        expect(data.cities[0]).toHaveProperty("landmarks");
    });

    // Test 3 - continents API returns unique continents
    it("GET /api/continents returns unique continents", async () => {
        const response = await getContinents();
        const data = await response.json();
        expect(data.continents).toBeDefined();
        const unique = new Set(data.continents);
        expect(unique.size).toBe(data.continents.length);
    });

    // Test 4 - countries API returns unique countries
    it("GET /api/countries returns unique countries", async () => {
        const response = await getCountries();
        const data = await response.json();
        expect(data.countries).toBeDefined();
        const unique = new Set(data.countries);
        expect(unique.size).toBe(data.countries.length);
    });
});