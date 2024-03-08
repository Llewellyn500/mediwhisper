import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo-trans.png"
          alt="MediWhisper Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-center font-black text-4xl mb-3">MediWhisper - Patient Use</h1>
        <p className="text-center">This App is meant for patients to use.</p>
      </div>
    </main>
  );
}
