"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    
    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      setSuccess("Registration successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 bg-gradient-to-b from-black to-gray-900">
      <button
      className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
      onClick={() => redirect('/')}
>  ⬅ Home
</button>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-black">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 text-gray-800 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 text-gray-800 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 text-gray-800 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
          <button
             onClick={() => redirect('/login')}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}
