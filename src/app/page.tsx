import React from "react";
import Scene from "../app/components/scene"; // Assuming Scene is your animation component

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Optimize Your Portfolio with AI</h1>
      <p className="text-lg mb-6 max-w-2xl">
        Experience next-gen portfolio optimization using cutting-edge machine learning models.
      </p>

      {/* Animation Container */}
      <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-6">
        <Scene />
      </div>

      <button className="px-6 py-3 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-all">
        Get Started
      </button>
    </section>
  );
}
