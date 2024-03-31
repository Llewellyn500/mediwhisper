import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

export default function LandingPage() {
  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[2.125rem] pb-[1.875rem] pr-[2.688rem] pl-[2.75rem] box-border gap-[11.938rem] bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-[top] tracking-[normal] mq750:gap-[5.938rem_11.938rem] mq750:pl-[1.375rem] mq750:pr-[1.313rem] mq750:box-border mq450:gap-[3rem_11.938rem]">
        <section className="w-[82.625rem] flex flex-row items-start justify-start py-[0rem] px-[2.063rem] box-border max-w-full text-left text-[8.938rem] text-black font-redacted-script mx-auto">
          <div className="flex-1 flex flex-col items-end justify-start gap-[12.875rem] max-w-full lg:gap-[6.438rem_12.875rem] mq750:gap-[3.188rem_12.875rem] mq450:gap-[1.625rem_12.875rem]">
            <NavBar />

            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[11.25rem] max-w-full lg:gap-[5.625rem] mq750:gap-[2.813rem] mq450:gap-[1.375rem]">
              <div className="h-[26.688rem] flex-1 flex flex-row flex-wrap items-start justify-start relative gap-[0.438rem_27.125rem] min-w-[33.813rem] max-w-full mq750:min-w-full">
                <h1 className="!m-[0] absolute top-[0rem] left-[0rem] text-inherit leading-[6.25rem] capitalize font-extrabold font-lato mq1050:text-[3.563rem] mq1050:leading-[3.75rem] mq450:text-[2.25rem] mq450:leading-[2.5rem]">
                  <p className="[margin-block-start:0] [margin-block-end:47px]">
                    Whispers Of
                  </p>
                  <p className="m-0">your Health</p>
                </h1>
                <h1 className="!m-[0] absolute top-[15.875rem] left-[0rem] text-[6rem] font-normal font-inherit mq1050:text-[3rem] mq450:text-[1.813rem]">
                  Paracetamol
                </h1>
                <h3 className="!m-[0] absolute top-[22.313rem] left-[0rem] text-[2.188rem] font-normal font-inherit mq1050:text-[1.75rem] mq450:text-[1.313rem]">
                  <p className="m-0">MediWhisper: Whispers of what</p>
                  <p className="m-0">might be ailing you.</p>
                </h3>
              </div>

              {/* Start program btn */}

              <Link href="/prediction">
                <button className="cursor-pointer [border:none] p-[1.688rem] bg-darkcyan rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen">
                  <b className="relative text-[1.875rem] leading-[104.69%] font-lato text-white text-left">
                    Start Program
                  </b>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
