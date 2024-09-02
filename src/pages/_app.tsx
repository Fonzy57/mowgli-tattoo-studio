// REACT & NEXT
import Head from "next/head";
import type { AppProps } from "next/app";

// COMPONENTS
import Layout from "@/components/layout/layout";

// STYLE
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
