"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "../components/logoutbtn";


export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">
        Hi {session?.user?.name || "Guest"} 👋
      </h1>

      {/* Display GIF Below */}
      <img
        src="https://tenor.com/view/ganyu-genshin-impact-gif-21231408.gif"
        alt="Welcome GIF"
        className="mt-4 rounded-lg shadow-lg w-64"
      />

      <p className="text-gray-600 mt-2">Welcome to your dashboard!</p>
      <p className="mt-2"><LogoutButton /></p>
    </div>
  );
}
