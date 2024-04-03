import React from "react";

function Footer() {
  return (
    <footer className="self-stretch rounded-xl bg-darkcyan overflow-hidden flex flex-row items-start justify-between pt-[1.75rem] pb-[2rem] pr-[1.875rem] pl-[1.5rem] gap-[1.25rem] text-left text-[1.563rem] text-white font-poppins mq450:flex-wrap">
        <div className="relative leading-[104.69%] font-semibold mq450:text-[1.25rem] mq450:leading-[1.313rem]">
          MediWhisper
        </div>
        <div className="relative leading-[104.69%] font-semibold inline-block min-w-[5.438rem] mq450:text-[1.25rem] mq450:leading-[1.313rem]">
          © 2024
        </div>
      </footer>
  );
}

export default Footer;