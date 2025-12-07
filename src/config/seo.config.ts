// CONFIG
import { socialsLinksMowgli } from "./socials-links.config";

const basePath = process.env.NEXT_PUBLIC_BASE_URL;

export const seoStructuredData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Mowgli Tattoo Studio",
  description:
    "Studio de tatouage spécialisé dans les tatouages réalistes en noir et gris.",
  image: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2a Rue des Pépinières",
    addressLocality: "Longeville-lès-Metz",
    postalCode: "57050",
    addressCountry: "FR",
  },
  url: `${basePath}`,
  logo: {
    "@type": "ImageObject",
    url: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
  },
  sameAs: [socialsLinksMowgli.instagram, socialsLinksMowgli.facebook],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.11421791826955,
    longitude: 6.15398614925654,
  },
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
  politiqueDeConfidentialite: {
    title:
      "Politique de confidentialité - Mowgli Tattoo Studio | Données et confidentialité",
    description:
      "Découvrez comment le site Mowgli Tattoo Studio protège votre vie privée. Aucune donnée personnelle n’est collectée et aucun cookie de suivi n’est utilisé.",
    ogTitle: "Politique de confidentialité - Mowgli Tattoo Studio",
    ogDescription:
      "Mowgli Tattoo Studio respecte votre vie privée : aucune donnée personnelle collectée, aucune publicité, aucun suivi. Consultez notre politique complète.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/politique-de-confidentialite`,
  },
  politiqueDeCookies: {
    title:
      "Politique de cookies - Mowgli Tattoo Studio | Utilisation et consentement",
    description:
      "Le site Mowgli Tattoo Studio n’utilise que des cookies techniques essentiels nécessaires à son bon fonctionnement. Aucun cookie de suivi ni de publicité n’est utilisé.",
    ogTitle: "Politique de cookies - Mowgli Tattoo Studio",
    ogDescription:
      "Aucun cookie de suivi ni publicitaire. Seuls des cookies techniques indispensables assurent le bon fonctionnement du site Mowgli Tattoo Studio.",
    ogImage: `${basePath}/images/mowgli-tattoo-studio-logo.png`,
    ogUrl: `${basePath}/politique-de-cookies`,
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
  "500": {
    title: "Erreur 500 - Mowgli Tattoo Studio | Problème serveur",
    description:
      "Erreur 500 : un incident technique est survenu. Pas d’inquiétude, notre équipe corrige ça pendant que vous explorez les réalisations du studio.",
    ogTitle: "Erreur 500 - Erreur serveur - Mowgli Tattoo Studio",
    ogDescription:
      "Une erreur interne est survenue. Revenez bientôt ou découvrez nos tatouages réalistes en noir et gris en attendant.",
    ogImage: `${basePath}/images/404.png`,
    ogUrl: `${basePath}/500`,
  },
};
