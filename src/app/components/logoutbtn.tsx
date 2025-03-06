"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
}
