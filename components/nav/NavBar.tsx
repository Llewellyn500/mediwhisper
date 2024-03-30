import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="w-[74.313rem] h-[3rem] flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border max-w-full text-left text-[1.25rem] text-black font-lato mx-auto">
      <div className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
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
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
        <div className="relative font-extrabold whitespace-pre-wrap shrink-0 cursor-pointer">
          <a href="#" rel="noopener noreferrer" className="pr-3">
            About
          </a>
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
