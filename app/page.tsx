"use client";

import React from "react";
import { MapPin, Search, Construction, Clock, AlertCircle } from "lucide-react";
import MapImage from "./_components/MapImage";

interface ProgressData {
  status: "Not Started" | "In Progress" | "Complete";
  percentage: number;
  lastUpdated: string;
}

function App() {
  const [location, setLocation] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({ lat: "", lng: "" });
  const [inputType, setInputType] = React.useState<"location" | "coordinates">(
    "location"
  );

  // Mock data - this would come from the backend in a real application
  const mockProgress: ProgressData = {
    status: "In Progress",
    percentage: 65,
    lastUpdated: "2024-03-15",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Road Construction Progress Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Monitor road construction progress in your area
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputType === "location"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setInputType("location")}
            >
              <MapPin className="inline-block mr-2 h-5 w-5" />
              Search by Location
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputType === "coordinates"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setInputType("coordinates")}
            >
              <Search className="inline-block mr-2 h-5 w-5" />
              Search by Coordinates
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {inputType === "location" ? (
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter street address or landmark"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="latitude"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Latitude
                  </label>
                  <input
                    type="text"
                    id="latitude"
                    placeholder="e.g., 40.7128"
                    value={coordinates.lat}
                    onChange={(e) =>
                      setCoordinates({ ...coordinates, lat: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="longitude"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Longitude
                  </label>
                  <input
                    type="text"
                    id="longitude"
                    placeholder="e.g., -74.0060"
                    value={coordinates.lng}
                    onChange={(e) =>
                      setCoordinates({ ...coordinates, lng: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Check Progress
            </button>
          </form>
        </div>

        {/* {showResults && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Construction Progress Report
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Construction className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">Status</h3>
                <p className="text-blue-600 font-semibold">
                  {mockProgress.status}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="mb-2">
                  <div className="h-8 flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${mockProgress.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Completion</h3>
                <p className="text-blue-600 font-semibold">
                  {mockProgress.percentage}%
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">Last Updated</h3>
                <p className="text-blue-600 font-semibold">
                  {mockProgress.lastUpdated}
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-700">
                This is a prototype interface. In a production environment, this
                would display real-time data from our construction progress
                tracking system.
              </p>
            </div>
          </div>
        )} */}
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-2xl font-bold mb-4">
            Mapbox Static Satellite Image
          </h1>
          <MapImage
            latitude={Number(coordinates.lat)}
            longitude={Number(coordinates.lng)}
            zoom={16}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
