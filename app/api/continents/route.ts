import { City } from "@/types/city";
import fs from "fs";
import path from "path";

/**
 * GET /api/countries
 * Returns a list of unique continents from cities data
 */
export async function GET():Promise<Response>{
    try{
        const filePath = path.join(process.cwd(), "data/cities.json")
        const cities = fs.readFileSync(filePath)
        const data = JSON.parse(cities.toString())
        const continents = [...new Set(data.cities.map((city: City) => city.continent))];
        return Response.json({continents});
    }catch{
         return Response.json({ error: "Failed to load cities" }, { status: 500 });
    }
}

