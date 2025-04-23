"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("Login successful!");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
    console.log("Login successful!");
    redirect('/home')
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
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
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
            Sign In
          </button>
          <button
          type="button"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => redirect('/register')}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
