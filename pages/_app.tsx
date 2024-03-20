import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import { AppProps } from 'next/app';

export const metadata: Metadata = {
    metadataBase: new URL("https://mediwhisper.vercel.app/"),
    title: "MediWhisper",
    description:
      "Whispers of what might be ailing you. Get a fair idea of what might be wrong with you before seeing a medical professional",
    generator: "Next.js",
    applicationName: "MediWhisper",
    keywords: [
      "MediWhisper",
      "Medical",
      "AI",
      "Gemini",
      "group work",
      "CSM 395",
      "medical condition",
      "medical diagnosis",
      "medical condition diagnosis",
      "medical condition diagnosis AI",
      "medical condition diagnosis AI system",
      "Medical Help",
      "Medical AI",
    ],
    openGraph: {
      title: "MediWhisper",
      description:
        "Whispers of what might be ailing you. Get a fair idea of what might be wrong with you before seeing a medical professional",
      url: "https://mediwhisper.vercel.app/",
      siteName: "MediWhispers",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "MediWhisper Logo",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "MediWhisper",
      description:
        "Whispers of what might be ailing you. Get a fair idea of what might be wrong with you before seeing a medical professional",
      creator: "Llewellyn Paintsil",
      images: ["/open-graph.png"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Medical",
  };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Head>
        <title>MediWhisper</title>
        <meta
          name="description"
          content="Whispers of what might be ailing you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div>
        <NavBar />
        <Component {...pageProps} />
        
      </div>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-TX7DV9WGG6`}
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TX7DV9WGG6');
        `}
      </Script>
    </>
  );
}

export default MyApp;
