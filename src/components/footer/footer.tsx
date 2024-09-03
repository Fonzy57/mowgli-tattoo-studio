import { version } from "@/config/version";
import Image from "next/image";

const year = 2024;

/* TODO VOIR SI JE METS DES LIENS DE NAVIGATION DANS LE FOOTER OU PAS */

/* TODO AJOUTER LIENS VERS L'INSTA DE FRED POUR LES PHOTOS ET VERS MON LINKEDIN OU SITE POUR MOI */

/* TODO AJOUTER LES LIENS VERS LES RESEAUX ET CHERCHER LES ICONES SUR REACT ICONS */

/* TODO FAIRE UN COMPOSANT ICONS COMME POUR LE DASH */

/* TODO INSTA DE Hildevert Frédéric : 
  https://www.facebook.com/people/Newbypics/61563660336691/
  https://www.instagram.com/newby.pics/
*/

const socialsMowgli = [
  {
    name: "insta",
    label: "Instagram",
    icon: "ICI METTRE LES ICONES",
    url: "https://www.instagram.com/mowgli_tattoostudio/",
  },
  {
    name: "facebook",
    label: "Facebook",
    icon: "ICI METTRE LES ICONES",
    url: "https://www.facebook.com/mowglitattoostudio",
  },
];

const Footer = () => {
  const titleStyle =
    "font-cera uppercase font-bold text-lg text-text cursor-default";

  return (
    <div className="bg-main pt-20 pb-6">
      <div className="flex justify-between items-center w-[1170px] mx-auto xl:w-[1560px]">
        <Image
          src="/images/the-mowgli-studio-logo-brown.svg"
          alt="Logo de The Mowgli Studio"
          width={286}
          height={107}
        />
        <div className="flex justify-between w-[600px]">
          <div className="">
            <h4 className={titleStyle}>A propos</h4>
            <div className="mt-2 text-text">
              <div>icone + texte</div>
              <div>icone + texte</div>
            </div>
          </div>
          <div className="">
            <h4 className={titleStyle}>Reseaux</h4>
            <div className="mt-2 text-text">
              <div>icone insta </div>
              <div>icone fb</div>
            </div>
          </div>
          <div className="">
            <h4 className={titleStyle}>Partenaires</h4>
            <div className="mt-2 text-text">
              <div>Grigri tatoo + lien</div>
              <div>Photographe + lien</div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-text text-xs text-center mt-20">
        © Mowgli Tatoo Studio {year} - Tous droits réservés | v{version}
      </p>
    </div>
  );
};

export default Footer;
