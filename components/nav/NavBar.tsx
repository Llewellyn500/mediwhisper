import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-[76.5rem] h-[3rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-left text-[1.25rem] text-black font-lato">
      <Link href="/landing">
        <Image
          src="/logo-trans.png"
          alt="MediWhisper Logo"
          width="60"
          height="60"
          priority
          className="h-[3rem] w-[3rem] relative object-cover"
        />
      </Link>
      <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
        <div className="relative whitespace-pre-wrap shrink-0 cursor-pointer font-extrabold font-poppins">
          <Link href="/about" className="pr-3">
            About
          </Link>
          /
          <a
            href="https://github.com/Llewellyn500/mediwhisper"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-3"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
