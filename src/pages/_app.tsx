// REACT & NEXT
import Head from "next/head";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// COMPONENTS
import Layout from "@/components/layout/layout";
import FullPageLoader from "@/components/loader/full-page";

// STYLE
import "@/styles/globals.css";

// FONTS
import { Inter } from "next/font/google";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cera = localFont({
  src: [
    {
      path: "../../public/fonts/cerapro-thin.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/cerapro-light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/cerapro-regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/cerapro-medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/cerapro-bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/cerapro-black.otf",
      weight: "900",
    },
  ],
  variable: "--font-cera",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${fontInter.variable} ${cera.variable} font-inter`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      {/* TODO VOIR POUR LE CHARGEMENT DES PAGES */}
      {/* <FullPageLoader /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
