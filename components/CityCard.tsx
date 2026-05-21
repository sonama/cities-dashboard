"use client";

import { City } from "@/types/city";
import { Users, Calendar } from "lucide-react";

/**
 * CityCard component
 * Renders a card with city details including name, country, continent,
 * population, founded year and landmarks
 * @param city - city object from the API
 */
const CityCard = ({ city }: { city: City }) => {
    return (
        <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-16px)] bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-6 flex flex-col gap-3">

            {/* City name and native name */}
            <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{city.name}</h2>
                <p className="text-sm text-zinc-400">{city.name_native}</p>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-700" />

            {/* Continent and country */}
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-300">
                <span>{city.continent}</span>
                <span>{city.country}</span>
            </div>

            {/* Population and founded year */}
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{Number(city.population).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{city.founded}</span>
                </div>
            </div>

            <hr className="border-zinc-100 dark:border-zinc-700" />

            {/* Landmarks list */}
            <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase mb-2">Landmarks</p>
                <ul className="flex flex-col gap-1">
                    {city.landmarks.map((landmark) => (
                        <li key={landmark} className="text-sm text-zinc-600 dark:text-zinc-300">• {landmark}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CityCard;