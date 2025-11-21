import { GetServerSideProps } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mowgli-tattoo-studio.fr";

type PageConfig = {
  loc: string;
  changeFreq?: string;
  priority?: string;
  lastMod?: string;
};

const generateSitemap = (pages: PageConfig[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `  <url>
      <loc>${page.loc}</loc>
      ${page.lastMod ? `<lastmod>${page.lastMod}</lastmod>` : ""}
      ${page.changeFreq ? `<changefreq>${page.changeFreq}</changefreq>` : ""}
      ${page.priority ? `<priority>${page.priority}</priority>` : ""}
    </url>`;
    })
    .join("\n")}
  </urlset>`;
};

const SiteMap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const today = new Date().toISOString().split("T")[0];

  const pages: PageConfig[] = [
    {
      loc: `${SITE_URL}/`,
      changeFreq: "weekly",
      priority: "1.0",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/realisations`,
      changeFreq: "weekly",
      priority: "0.9",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/rdv-et-soins`,
      changeFreq: "monthly",
      priority: "0.8",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/hobbies`,
      changeFreq: "monthly",
      priority: "0.6",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/mentions-legales`,
      changeFreq: "yearly",
      priority: "0.3",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/politique-de-confidentialite`,
      changeFreq: "yearly",
      priority: "0.3",
      lastMod: today,
    },
    {
      loc: `${SITE_URL}/politique-de-cookies`,
      changeFreq: "yearly",
      priority: "0.3",
      lastMod: today,
    },
  ];

  const sitemap = generateSitemap(pages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;
