import { version } from "@/config/version";

const year = 2024;

/* TODO VOIR SI JE METS DES LIENS DE NAVIGATION DANS LE FOOTER OU PAS */
/* TODO AJOUTER LIENS VERS L'INSTA DE FRED POUR LES PHOTOS ET VERS MON LINKEDIN OU SITE POUR MOI */

/* TODO AJOUTER LES LIENS VERS LES RESEAUX ET CHERCHER LES ICONES SUR REACT ICONS */
/* TODO FAIRE UN COMPOSANT ICONS COMME POUR LE DASH */
const socials = [
  {
    name: "insta",
    label: "Instagram",
    icon: "ICI METTRE LES ICONES",
    url: "#",
  },
  {
    name: "facebook",
    label: "Facebook",
    icon: "ICI METTRE LES ICONES",
    url: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-main pt-20 pb-6">
      <div className="w-[1170px] mx-auto xl:w-[1560px]">FOOTER</div>
      <p className="text-text text-xs text-center">
        © Mowgli Tatoo Studio {year} - Tous droits réservés | v{version}
      </p>
    </div>
  );
};

export default Footer;
