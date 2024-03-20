import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex items-center justify-between  py-4 text-xl">
      <div>
        <Link href="/landing">
        <Image
          src="/logo-trans.png"
          alt="MediWhisper Logo"
          width="60"
          height="60"
          priority
        />
        </Link>
      </div>
      <div className="flex gap-4">
        <a href="#" rel="noopener noreferrer">
          About
        </a>
        /
        <a
          href="https://github.com/Llewellyn500/mediwhisper"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
