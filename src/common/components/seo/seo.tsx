// NEXT
import { useRouter } from "next/router";
import Head from "next/head";

// CONFIG
import { seoConfig, seoStructuredData } from "@/config/seo.config";

// TYPING
type SeoPage = keyof typeof seoConfig;

interface SeoProps {
  page: SeoPage;
}

const Seo = ({ page }: SeoProps) => {
  const router = useRouter();
  const seoTitle = seoConfig[page].title;
  const seoDescription = seoConfig[page].description;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://mowgli-tattoo-studio.fr";
  const canonicalUrl = `${baseUrl}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      {/* CANONICAL URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={seoConfig[page].ogTitle} />
      <meta property="og:description" content={seoConfig[page].ogDescription} />
      <meta property="og:image" content={seoConfig[page].ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* TWITTER CARD */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoConfig[page].ogTitle} />
      <meta
        name="twitter:description"
        content={seoConfig[page].ogDescription}
      />
      <meta name="twitter:image" content={seoConfig[page].ogImage} />

      {/* SCHEMA.ORG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData) }}
      />
    </Head>
  );
};

export default Seo;
