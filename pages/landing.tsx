import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="py-20 pl-40">
        <h1 className="text-6xl font-bold mb-8 text-left text-black">
          Whispers Of
        </h1>
        <h1 className="text-6xl font-bold mb-4 text-black">Your Health</h1>
        <div className="mb-8">
          <span className="redacted-script text-4xl">Paracetamol</span>
          <span className="redacted-script text-4xl">
            MediWhisper: Whispers of what might be ailing you.
          </span>
        </div>
        <Link href="/prediction">
          <button className="bg-[#269DA3] text-white px-6 py-3 rounded-md font-semibold">
            Start Program
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
