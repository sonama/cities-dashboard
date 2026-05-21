import { render, screen } from "@testing-library/react";
import CityCard from "@/components/CityCard";
import { City } from "@/types/city";
import "@testing-library/jest-dom";

// Mock city data
const mockCity: City = {
    name: "Sydney",
    name_native: "Sydney",
    country: "Australia",
    continent: "Australia",
    latitude: "-33.865143",
    longitude: "151.209900",
    population: "5312000",
    founded: "1788",
    landmarks: ["Sydney Opera House", "Sydney Harbour Bridge"]
};

describe("CityCard", () => {

    // Test 1 - use getAllByText
    it("renders city name", () => {
        render(<CityCard city={mockCity} />);
        expect(screen.getAllByText("Sydney")[0]).toBeInTheDocument();
    });

    // Test 2 - use getAllByText
    it("renders country", () => {
        render(<CityCard city={mockCity} />);
        expect(screen.getAllByText("Australia")[0]).toBeInTheDocument();
    });

    // Test 3 - use partial match
    it("renders population", () => {
        render(<CityCard city={mockCity} />);
        expect(screen.getByText(/53,12,000|5312000|5,312,000/)).toBeInTheDocument();
    });

    // Test 4 - use partial match
    it("renders landmarks", () => {
        render(<CityCard city={mockCity} />);
        expect(screen.getByText(/Sydney Opera House/)).toBeInTheDocument();
    });
});