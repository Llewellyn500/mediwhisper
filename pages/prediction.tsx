import React from "react";
import Image from "next/image";
import Form from "../components/form/Form";
import Head from "next/head";

export default function Prediction() {
  return (
    <>
      <Head>
        <title>Prediction</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo-trans.png"
          alt="MediWhisper Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-center font-black text-4xl mb-3">MediWhisper</h1>
        <p className="text-center mb-5">
          Whispers of what might be ailing you.
        </p>
        <Form />
      </div>
    </>
  );
}
