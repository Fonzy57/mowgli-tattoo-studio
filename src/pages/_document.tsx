import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="./images/mowgli-tattoo-studio-logo.png" />
        {/* TODO SUPPRIMER SI PADDING FONCTIONNE BIEN */}
        {/* <meta name="theme-color" content="#FFD161" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
