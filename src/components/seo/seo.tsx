// NEXT
import Head from "next/head";

// CONFIG
import { seoConfig, seoStructuredData } from "@/config/seo";
import { useRouter } from "next/router";

// TYPING
type SeoPage = keyof typeof seoConfig;

interface SeoProps {
  page: SeoPage;
}

const Seo = ({ page }: SeoProps) => {
  const router = useRouter();

  const seoTitle = seoConfig[page].title;
  const seoDescription = seoConfig[page].description;
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${router.asPath}`
      : "";

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {/* TODO DELETE FOR PRODUCTION */}
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href={currentUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData) }}
      />
    </Head>
  );
};

export default Seo;
