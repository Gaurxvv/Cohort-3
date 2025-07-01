"use client";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-100">Sign In</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={() => {}}
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
