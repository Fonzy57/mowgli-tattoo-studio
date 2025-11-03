// CONFIG
import { socialsLinksMowgli } from "./socials-links";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export const seoStructuredData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Mowgli Tattoo Studio",
  description:
    "Studio de tatouage spécialisé dans les tatouages réalistes en noir et gris.",
  /* TODO VOIR SI L'IMAGE FONCTIONNE BIEN */
  image: "https://www.mowglitattoo.com/images/mowgli-tattoo-studio-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2a Rue des Pépinières",
    addressLocality: "Longeville-lès-Metz",
    postalCode: "57050",
    addressCountry: "FR",
  },
  /* TODO CHANGER L'URL QUAND J'AURAIS LE NOM DE DOMAINE */
  url: "https://fonzy57.github.io/mowgli-tattoo-studio",
  sameAs: [socialsLinksMowgli.instagram, socialsLinksMowgli.facebook],
  openingHours: ["Tu-Sa 09:00-14:00"],
};

export const seoConfig = {
  home: {
    title:
      "Accueil - Mowgli Tattoo Studio | Tatouages réalistes en noir et gris",
    description:
      "Bienvenue au Mowgli Tattoo Studio. Tatouages réalistes en noir et gris, réalisés avec passion et précision. Explorez notre univers artistique",
    ogTitle: "Accueil - Mowgli Tattoo Studio",
    ogDescription:
      "Découvrez le Mowgli Tattoo Studio, spécialiste des tatouages réalistes en noir et gris.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/`,
  },
  realisations: {
    title:
      "Réalisations - Mowgli Tattoo Studio | Galerie de tatouages réalistes",
    description:
      "Galerie des réalisations du Mowgli Tattoo Studio. Des tatouages réalistes en noir et gris, empreints d'art et de détails minutieux.",
    ogTitle: "Réalisations - Mowgli Tattoo Studio",
    ogDescription:
      "Explorez ma galerie de tatouages réalistes en noir et gris. Chaque réalisation raconte une histoire unique.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/realisations`,
  },
  rdvEtSoins: {
    title: "Rendez-vous et soins tatouages - Mowgli Tattoo Studio",
    description:
      "Prenez rendez-vous au Mowgli Tattoo Studio et apprenez à soigner votre tatouage réaliste noir et gris pour une cicatrisation parfaite et durable.",
    ogTitle: "Rendez-vous et soins - Mowgli Tattoo Studio",
    ogDescription:
      "Besoin d'un rendez-vous ? Découvrez mes conseils de soins pour un tatouage durable et éclatant.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/rdv-et-soins`,
  },
  hobbies: {
    title: "Hobbies - Mowgli Tattoo Studio | Projets et passions artistiques",
    description:
      "Explorez les hobbies et projets artistiques du tatoueur du Mowgli Tattoo Studio. Au-delà du tatouage, découvrez un artiste passionné.",
    ogTitle: "Hobbies - Mowgli Tattoo Studio",
    ogDescription:
      "Découvrez mes hobbies et mes projets créatifs. Un aperçu des passions qui animent mon art.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/hobbies`,
  },
  mentionsLegales: {
    title:
      "Mentions légales - Mowgli Tattoo Studio | Informations et conformité",
    description:
      "Consultez les mentions légales du site Mowgli Tattoo Studio. Retrouvez les informations sur l'éditeur, l'hébergement et la protection des contenus artistiques.",
    ogTitle: "Mentions légales - Mowgli Tattoo Studio",
    ogDescription:
      "Consultez nos mentions légales pour plus d'informations sur le site et ses droits d'auteur.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/mentions-legales`,
  },
  maintenance: {
    title: "Site en maintenance - Mowgli Tattoo Studio",
    description:
      "Le site de Mowgli Tattoo Studio est actuellement en maintenance. Nous travaillons à vous offrir une meilleure expérience. Merci de votre patience et à très bientôt.",
    ogTitle: "Maintenance - Mowgli Tattoo Studio",
    ogDescription:
      "Le site est temporairement indisponible. Revenez bientôt pour découvrir mes tatouages réalistes.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/maintenance`,
  },
  "404": {
    title: "Erreur 404 - Mowgli Tattoo Studio | Page introuvable",
    description:
      "Erreur 404 : cette page est introuvable, mais nos tatouages réalistes en noir et gris, eux, sont là pour inspirer. Explorez nos créations.",
    ogTitle: "Erreur 404 - Page introuvable - Mowgli Tattoo Studio",
    ogDescription:
      "Cette page n'existe pas. Découvrez nos tatouages réalistes en noir et gris pour vous inspirer.",
    ogImage: `${basePath}/images/404.png`,
    ogUrl: `${basePath}/404`,
  },
};
