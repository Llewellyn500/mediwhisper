import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

export default function LandingPage() {
  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[2rem] pb-[1rem] pr-[2rem] pl-[2rem] box-border gap-[11rem] bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-[top] tracking-[normal] mq750:gap-[5rem_11rem] mq750:pl-[1rem] mq750:pr-[1rem] mq750:box-border mq450:gap-[3rem_11rem] min-h-screen">
        <section className="w-[82rem] flex flex-row items-start justify-start py-[0rem] px-[2.063rem] box-border max-w-full text-left text-[7rem] text-black font-redacted-script mx-auto -mb-[7rem]">
          <div className="flex-1 flex flex-col items-end justify-start gap-[12rem] max-w-full lg:gap-[6rem_12rem] mq750:gap-[3rem_12rem] mq450:gap-[1rem_12rem]">
            <NavBar />

            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[11rem] max-w-full lg:gap-[5rem] mq750:gap-[2rem] mq450:gap-[1rem]">
              <div className="h-[26rem] flex-1 flex flex-row flex-wrap items-start justify-start relative gap-[0rem_27rem] min-w-[33rem] max-w-full mq750:min-w-full mq750:mt-9">
                <h1 className="!m-[0] absolute top-[0rem] left-[0rem] text-inherit leading-[6rem] capitalize font-extrabold font-lato mq1050:text-[3rem] mq750:text-[2rem] mq1050:leading-[3rem] mq450:leading-[1rem]">
                  <p className="[margin-block-start:0] [margin-block-end:2rem]">
                    Whispers Of
                  </p>
                  <p className="m-0">your Health</p>
                </h1>
                <h1 className="!m-[0] absolute top-[15rem] mq1050:top-[10rem] mq750:top-[6rem] mq450:top-[6rem] left-[0rem] text-[6rem] font-normal font-inherit mq1050:text-[3rem] mq450:text-[1.8rem]">
                  Paracetamol
                </h1>
                <h3 className="!m-[0] absolute top-[22rem] mq1050:top-[15rem] mq750:top-[10rem] left-[0rem] text-[2rem] font-normal font-inherit mq1050:text-[1.7rem] mq450:text-[1.3rem]">
                  <p className="m-0">MediWhisper: Whispers of what</p>
                  <p className="m-0">might be ailing you.</p>
                </h3>
              </div>

              {/* Start program btn */}

              <Link href="/prediction">
                <button className="cursor-pointer [border:none] p-[1.688rem] bg-darkcyan rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-lightseagreen duration-1000 mt-[0rem] mq450:-mt-[7rem]">
                  <b className="relative text-[1.875rem] leading-[104.69%] font-poppins text-white text-left">
                    Start Program
                  </b>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* 
        <Footer /> */}
      </div>
    </>
  );
}
