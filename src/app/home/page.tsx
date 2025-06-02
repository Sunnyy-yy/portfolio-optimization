"use client";

import { useSession } from "next-auth/react";
import LogoutButton from "../components/logoutbtn";


export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
    >
      <source src="/dashboard-background.mp4" type="video/mp4" />
    </video>

     {/* Overlay Content */}
     <div className="relative z-10 flex flex-col flex-1">
        {/* Top Section */}
        <div className="flex-1"></div>

        {/* Middle Section */}
        <div className="flex-[6] bg-white flex flex-col items-center justify-center px-6 py-10 shadow-lg rounded-xl mx-20">
          <h1 className="text-3xl font-bold text-gray-800">
            Hi, {session?.user?.name || "Guest"}
          </h1>
          <p className="text-gray-600 mt-2">Welcome to your dashboard!</p>
          <p className="mt-4">
            <LogoutButton />
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}