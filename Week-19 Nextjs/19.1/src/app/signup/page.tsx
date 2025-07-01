"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-100">Sign Up</h1>
      <form className="flex flex-col gap-4 mt-4">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={async () => {
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
            router.push("/signin");
          }}
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        You have an account?{" "}
        <Link href="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
