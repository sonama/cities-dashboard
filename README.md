# Cities Dashboard

A full-stack web application built with Next.js, TypeScript, and Tailwind CSS that displays a dashboard of world cities with search, filter, and sort functionality.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Runtime:** Node.js

## Project Structure

```
cities-dashboard/
├── app/
│   ├── api/
│   │   ├── cities/route.ts       # Returns all cities
│   │   ├── continents/route.ts   # Returns unique continents
│   │   └── countries/route.ts    # Returns unique countries
│   ├── page.tsx                  # Home page (Server Component)
│   └── layout.tsx                # Root layout
├── components/
│   ├── CitiesDashboard.tsx       # Main dashboard (Client Component)
│   ├── CityCard.tsx              # Single city card
│   ├── SearchBar.tsx             # Search input
│   ├── FilterBar.tsx             # Continent and country filters
│   └── SortBar.tsx               # Sort dropdown
├── hooks/
│   ├── useCities.ts              # Filter and sort logic
│   ├── useFilter.ts              # Fetches continents and countries
│   └── useSearch.ts              # Debounced search logic
├── types/
│   └── city.ts                   # City TypeScript type
└── data/
    └── cities.json               # Cities data
├── utils/
│   ├── Loading.tsx               # Reusable loading component
│   └── Error.tsx                 # Reusable error component
├── __tests__/
│   ├── useCities.test.ts         # Hook tests
│   ├── CityCard.test.tsx         # Component tests
│   └── api.test.ts               # API route tests
    
    
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sonama/cities-dashboard
cd cities-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cities` | Returns all cities |
| GET | `/api/continents` | Returns unique continents |
| GET | `/api/countries` | Returns unique countries |

## Features

- **Search** — Search cities by name, country or continent with debounce (500ms)
- **Filter** — Filter cities by continent and country
- **Sort** — Sort cities by name, population or founded year
- **Reset** — Reset all filters with one click
- **Responsive** — Works on mobile, tablet and desktop
- **Dark mode** — Supports dark mode

## Architecture Decisions

- **Server Components** — `page.tsx` fetches data on the server for fast initial load
- **Client Components** — Search, filter and sort are client-side for instant feedback
- **Custom Hooks** — Logic is separated into hooks for reusability and clean components
- **API Routes** — Separate endpoints for cities, continents and countries for separation of concerns
- **Debounce** — Search is debounced to avoid unnecessary re-renders on every keystroke

## Tests

The following are tested:

- **`useCities`** — filter by keyword, continent, country, sort and reset
- **`CityCard`** — renders city name, country, population, founded and landmarks
- **API Routes** — `/api/cities`, `/api/continents`, `/api/countries` return correct data

Run tests:
```bash
npm test
```

Run with coverage:
```bash
npm run test:coverage
```

Target coverage: 70%+
