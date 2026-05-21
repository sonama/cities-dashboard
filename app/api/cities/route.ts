import fs from "fs";
import path from "path";

/**
 * GET /api/countries
 * Returns a list of all the cities from cities json 
 */
export async function GET():Promise<Response>{
    try{
        const filePath = path.join(process.cwd(), "data/cities.json")
        const cities = fs.readFileSync(filePath)
        return Response.json(JSON.parse(cities.toString()));
    }catch{
         return Response.json({ error: "Failed to load cities" }, { status: 500 });
    }
}

