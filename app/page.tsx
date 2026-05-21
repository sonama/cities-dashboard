import CitiesDashboard from "@/components/CitiesDashboard";
import Loading from "@/utils/Loading";
import { Suspense } from "react";

/**
 * Home page (Server Component)
 * Fetches cities data from the API and passes it to CitiesDashboard
 */
export default async function Home() {
  try {
    // Fetch cities from the API on the server
    const data = await fetch("http://localhost:3000/api/cities").then((res) => res.json());

    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={<Loading message="Loading cities..." />}>
          {/* Pass cities to the client dashboard component */}
            <CitiesDashboard cities={data.cities} />
          </Suspense>
        </div>
      </div>
    );
  } catch {
    // Show error UI if fetch fails
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">Failed to load cities. Please try again later.</p>
      </div>
    );
  }
}