import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="flex items-center justify-between  py-4 text-xl">
      <div>
        <Image
          src="/logo-trans.png"
          alt="MediWhisper Logo"
          width="60"
          height="60"
          priority
        />
      </div>
      <div className="flex gap-4">
        <a href="#" rel="noopener noreferrer">
          About
        </a>
        /
        <a href="#" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </nav>
  );
}

export default NavBar;