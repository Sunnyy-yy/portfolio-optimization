"use client";
import React from "react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-40"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Shaping the Future of Data Science
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Where innovation meets insight
          </motion.p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p>
              We explore ideas in computer science, statistics, and finance to push the boundaries of what’s possible.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p>
              Our engineers build advanced tools that empower data-driven decision making at scale.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p>
              Through our work and philanthropy, we strive to make meaningful contributions to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Become a Member</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're always looking for curious minds to join us in shaping the future.
          </p>
          <button className="bg-black text-white px-6 py-3 mx-3 rounded-full hover:bg-gray-800 transition" onClick= {() => redirect('/register')}>
            Register
          </button>
          <button className="bg-black text-white px-8 py-3 max-3 rounded-full hover:bg-gray-800 transition" onClick= {() => redirect('/login')}>
            Login
          </button>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <p>&copy; {new Date().getFullYear()} LUCID. All rights reserved.</p>
      </footer>
    </main>
  );
}