import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-4 font-sans min-h-screen ">
      <h1 className="text-3xl font-bold text-gray-800">Hello</h1>
      <div className="flex gap-3">
        <Link
          className="bg-slate-600 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition"
          href="/signin"
        >
          Sign in
        </Link>
        <Link
          className="bg-slate-400 text-white px-6 py-2 rounded-md hover:bg-slate-500 transition"
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
