"use client"; // Ensures client-side rendering in Next.js

import { useState } from "react";
import axios from "axios";

const API_URL = "http://your-backend-url"; // Replace with Flask backend URL

export default function PredictForm() {
  const [input, setInput] = useState<string>("");
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    try {
      const features = input.split(",").map(Number); // Convert input to array
      const response = await axios.post<{ prediction: number }>(
        `${API_URL}/predict`,
        { features }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Machine Learning Prediction</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Enter comma-separated numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Get Prediction
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4">Loading prediction...</p>}

      {prediction !== null && (
        <p className="mt-4 text-lg font-semibold">
          Prediction: <span className="text-blue-600">{prediction}</span>
        </p>
      )}
    </div>
  );
}
