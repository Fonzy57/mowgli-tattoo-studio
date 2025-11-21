// NEXT
import Link from "next/link";

// COMPONENTS
import Seo from "@/common/components/seo/seo";

// CONFIG
import { mowgliCongif } from "@/config/config";

const LegalNotice = () => {
  const containerStyle =
    "mt-10 px-5 text-text-light sm:mx-auto sm:w-5/6 sm:px-0 md:mt-14 lg:w-[1025px] xl:w-[1325px]";
  const textContainerStyle = "mt-3 md:text-lg lg:w-2/3";
  const titleStyle = "font-cera text-2xl font-semibold text-main md:text-4xl";
  const borderStyle = "mt-0.5 h-1 bg-secondary md:w-5/12";
  const spanTextStyle = "font-bold";

  return (
    <>
      <Seo page="mentionsLegales" />
      <div className="px-5 pb-8 pt-16 sm:px-0 sm:pb-8 sm:pt-20 md:p-0 md:pt-20 lg:pt-10 xl:pt-20">
        <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl">
          Mentions legales
        </h1>
      </div>
      <div className={containerStyle}>
        <p className="md:text-lg">
          Conformément aux dispositions des articles 6-III et 19 de la loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique
          (LCEN), il est porté à la connaissance des utilisateurs et visiteurs
          du site{" "}
          <strong className="font-semibold text-main">
            Mowgli Tattoo Studio
          </strong>{" "}
          les présentes mentions légales.
        </p>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Editeur du site :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Nom de l'éditeur : Pierre-Emmanuel Bauer, Entrepreneur individuel
            (EI), exerçant sous l’enseigne{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>
          </p>
          <p>
            Numéro SIRET :{" "}
            <span className={spanTextStyle}>804 100 220 00032</span>
          </p>
          <p>
            Adresse :{" "}
            <span className={spanTextStyle}>
              2 A Rue des Pépinières, 57050 LONGEVILLE-LES-METZ
            </span>
          </p>
          <p>
            Contact :{" "}
            <span className={spanTextStyle}>{mowgliCongif.contactMail}</span>
          </p>
        </div>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Responsable de publication :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Nom : <span className={spanTextStyle}>Mowgli Tattoo Studio</span>
          </p>
          <p>
            Contact :{" "}
            <span className={spanTextStyle}>{mowgliCongif.contactMail}</span>
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Hébergement :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Nom de l'hébergeur : <span className={spanTextStyle}>OVH SAS</span>
          </p>
          <p>
            Adresse :{" "}
            <span className={spanTextStyle}>
              2 rue Kellermann, 59100 Roubaix, France
            </span>
          </p>
          <p>
            Téléphone : <span className={spanTextStyle}>+33 9 72 10 10 07</span>
          </p>
          <p>
            Site web :{" "}
            <Link
              href={"https://www.ovhcloud.com/fr/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-main underline hover:no-underline"
            >
              https://www.ovhcloud.com/fr/
            </Link>
          </p>
        </div>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Propriété intellectuelle :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            L’ensemble du contenu du site{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>
            , incluant, de manière non limitative, les graphismes, images,
            textes, vidéos, animations, sons, logos, gifs et icônes ainsi que
            leur mise en forme, est la propriété exclusive de{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>
            , à l’exception des marques, logos ou contenus appartenant à
            d’autres sociétés partenaires ou auteurs.
          </p>
          <p className="mt-2">
            Toute reproduction, distribution, modification, adaptation,
            retransmission ou publication, même partielle, de ces différents
            éléments est strictement interdite sans l’accord écrit de Mowgli
            Tattoo Studio.
          </p>
        </div>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Limitation de responsabilité :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            L’éditeur met à disposition des visiteurs des informations à titre
            indicatif. Malgré un soin apporté à la mise à jour du contenu, le
            site{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>{" "}
            ne saurait être tenu pour responsable d’erreurs, d’omissions ou
            d’indisponibilité des informations et services.
          </p>
        </div>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Liens externes :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Ce site peut contenir des liens vers des sites tiers. Mowgli Tattoo
            Studio n'exerce aucun contrôle sur ces sites et ne peut être tenu
            responsable de leur contenu ou de leur politique de confidentialité.
          </p>
        </div>
      </div>
      <div className={`${containerStyle} mb-20 sm:mb-28 md:mb-32`}>
        <h2 className={titleStyle}>Contact :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Pour toute question ou demande d'information concernant ce site,
            vous pouvez nous contacter à l'adresse suivante :<br />
            {mowgliCongif.contactMail}
          </p>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
