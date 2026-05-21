import { City } from "@/types/city";
import fs from "fs";
import path from "path";

/**
 * GET /api/countries
 * Returns a list of unique countries from cities data
 */
export async function GET(): Promise<Response> {
    try {
        const filePath = path.join(process.cwd(), "data/cities.json");
        const cities = fs.readFileSync(filePath);
        const data = JSON.parse(cities.toString());
        const countries = [...new Set(data.cities.map((city: City) => city.country))];
        return Response.json({ countries });
    } catch {
        return Response.json({ error: "Failed to load countries" }, { status: 500 });
    }
}