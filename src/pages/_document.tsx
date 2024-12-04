import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="./images/mowgli-tattoo-studio-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        ></meta>
        {/* TODO TEST MOBILE SUPPRIMER SI PAS BON */}
        {/* <meta name="theme-color" content="#1E1E1E" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
