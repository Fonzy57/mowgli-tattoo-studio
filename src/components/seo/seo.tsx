// NEXT
import Head from "next/head";

// CONFIG
import { seoConfig } from "@/config/seo";

// TYPING
type SeoPage = keyof typeof seoConfig;

interface SeoProps {
  page: SeoPage;
}

const Seo = ({ page }: SeoProps) => {
  const seoTitle = seoConfig[page].title;
  const seoDescription = seoConfig[page].description;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
    </Head>
  );
};

export default Seo;
