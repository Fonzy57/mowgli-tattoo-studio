// NEXT
import Head from "next/head";

// CONFIG
import { seoConfig } from "@/config/seo";
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
      <link rel="canonical" href={currentUrl} />
    </Head>
  );
};

export default Seo;
