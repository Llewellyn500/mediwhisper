import React from "react";

function Footer() {
  return (
    <footer className="self-stretch bg-[#269DA3] overflow-hidden flex flex-row items-start justify-between py-[1.75rem] px-[1.5rem] gap-[1.25rem] z-[2] text-left text-[1.563rem] text-white mq450:flex-wrap z-[1]">
        <div className="w-[10.5rem] relative leading-[104.69%] font-semibold inline-block mq450:text-[1.25rem] mq450:leading-[1.313rem]">
          MediWhisper
        </div>
        <div className="w-[5.438rem] relative leading-[104.69%] font-semibold inline-block mq450:text-[1.25rem] mq450:leading-[1.313rem]">
          © 2024
        </div>
      </footer>
  );
}

export default Footer;