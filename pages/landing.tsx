import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

export default function LandingPage() {
  return (
    <>
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[0.75rem] px-[1rem] pb-[0.875rem] box-border gap-[6.813rem] bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-[top] tracking-[normal] mq700:gap-[3.375rem_6.813rem] mq450:gap-[1.688rem_6.813rem]">
    <NavBar />
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
      </div>
    </>
  );
}
