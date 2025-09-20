"use client";
import React from "react";

interface ResultProps {
  data: {
    origin: string;
    destination: string;
    cargo: number;
    predictedETA: number;
    predictedFuel: number;
    speed: number;
    weather: string;
    Traffic: string;
    reqPath: string[];
  };
}


export const Result: React.FC<ResultProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-600">
        No Result Found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Voyage Planner Result
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p>
            <span className="font-semibold">Source:</span> {data.origin}
          </p>
          <p>
            <span className="font-semibold">Destination:</span> {data.destination}
          </p>
          <p>
            <span className="font-semibold">Cargo:</span> {data.cargo} tons
          </p>
          <p>
            <span className="font-semibold">ETA:</span>{" "}
            {data.predictedETA.toFixed(2)} hrs
          </p>
          <p>
            <span className="font-semibold">Fuel Required:</span>{" "}
            {data.predictedFuel.toFixed(2)} L
          </p>
          <p>
            <span className="font-semibold">Speed:</span>{" "}
            {data.speed.toFixed(2)} knots
          </p>
          <p>
            <span className="font-semibold">Weather:</span> {data.weather}
          </p>
          <p>
            <span className="font-semibold">Traffic:</span> {data.Traffic}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Route</h2>
          <p className="text-gray-700">
            {data.reqPath.join(" → ")}
          </p>
        </div>
      </div>
    </div>
  );
};

//export default Result;
