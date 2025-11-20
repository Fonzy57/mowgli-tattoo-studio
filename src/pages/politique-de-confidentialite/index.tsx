// NEXT
import Link from "next/link";

// COMPONENTS
import Seo from "@/common/components/seo/seo";

// CONFIG
import { mowgliCongif } from "@/config/config";

const PrivacyPolicy = () => {
  const containerStyle =
    "mt-10 px-5 text-text-light sm:mx-auto sm:w-5/6 sm:px-0 md:mt-14 lg:w-[1025px] xl:w-[1325px]";
  const textContainerStyle = "mt-3 md:text-lg lg:w-2/3";
  const titleStyle = "font-cera text-2xl font-semibold text-main md:text-4xl";
  const borderStyle = "mt-0.5 h-1 bg-secondary md:w-5/12";
  const spanTextStyle = "font-bold";

  return (
    <>
      <Seo page="politiqueDeConfidentialite" />
      <div className="px-5 pb-8 pt-16 sm:px-0 sm:pb-8 sm:pt-20 md:p-0 md:pt-20 lg:pt-10 xl:pt-20">
        <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl">
          Politique de confidentialité
        </h1>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Objet de la politique :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            La présente politique a pour objet d’informer les utilisateurs du
            site{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>{" "}
            sur la manière dont leurs données personnelles sont collectées,
            traitées et protégées conformément au{" "}
            <span className={spanTextStyle}>
              Règlement Général sur la Protection des Données (RGPD)
            </span>{" "}
            et à la{" "}
            <span className={spanTextStyle}>loi Informatique et Libertés</span>.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Données collectées :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Le site{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>{" "}
            ne collecte aucune donnée personnelle concernant les visiteurs.
            Aucun formulaire de contact, de commentaire ou de suivi statistique
            (type Google Analytics) n’est mis en place.
          </p>
          <p className="mt-2">
            Les seules données consultées proviennent de l’API publique
            d’Instagram, dans le but d’afficher les créations du tatoueur
            Mowgli. Ces données sont{" "}
            <span className={spanTextStyle}>publiques</span> et ne concernent{" "}
            <span className={spanTextStyle}>aucun utilisateur du site</span>.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Finalité du traitement :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Les informations issues de l’API Instagram sont utilisées uniquement
            pour présenter les publications du tatoueur sur le site.
          </p>
          <p>
            Aucune donnée n’est conservée, transmise ou exploitée à d’autres
            fins.
          </p>
          <p className="mt-2">
            À des fins de suivi technique et d’optimisation du référencement
            naturel, le site utilise{" "}
            <span className={spanTextStyle}>Google Search Console</span>, un
            service fourni par Google LLC.
          </p>
          <p>
            Cet outil permet de mesurer les performances du site dans les
            moteurs de recherche, sans installer de cookies ni collecter de
            données personnelles des visiteurs.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Base légale du traitement :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Aucun traitement de données personnelles au sens du RGPD n’est
            effectué via le site. Les fonctionnalités tierces (Instagram, Google
            Fonts, Search Console) reposent sur l’intérêt légitime d’assurer le
            bon affichage et le référencement du site.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Durée de conservation :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Aucune donnée personnelle n’est collectée, stockée ni conservée par
            l’éditeur du site.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Droits des utilisateurs :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, tout
            utilisateur dispose de droits d’accès, de rectification,
            d’effacement et d’opposition relatifs à ses données.
          </p>
          <p>
            Ces droits ne trouvent toutefois pas application dans le cadre du
            présent site,{" "}
            <span className={spanTextStyle}>
              aucune donnée personnelle n’étant collectée
            </span>
            .
          </p>
          <p className="mt-2">
            Pour toute question relative à la confidentialité, vous pouvez
            contacter :<br />
            {mowgliCongif.contactMail}
          </p>
          <p className="mt-2">
            Si, après nous avoir contactés, vous estimez que vos droits ne sont
            pas respectés, vous pouvez adresser une réclamation à la{" "}
            <Link
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-main underline hover:no-underline"
            >
              CNIL
            </Link>
            .
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Sécurité :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Le site{" "}
            <strong className="font-semibold text-main">
              Mowgli Tattoo Studio
            </strong>{" "}
            est accessible en <span className={spanTextStyle}>HTTPS</span>,
            garantissant ainsi la confidentialité et l’intégrité des données
            échangées entre le navigateur de l’utilisateur et le serveur.
            <br />
            Aucune donnée sensible n’est stockée sur le serveur.
          </p>
          <p>
            Les scripts tiers utilisés (notamment Instagram et Google Fonts)
            proviennent de sources reconnues et sécurisées.
          </p>
        </div>
      </div>

      <div className={`${containerStyle} mb-20 sm:mb-28 md:mb-32`}>
        <h2 className={titleStyle}>Contact :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Pour toute question relative à la protection des données
            personnelles, vous pouvez contacter :<br />
            {mowgliCongif.contactMail}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
