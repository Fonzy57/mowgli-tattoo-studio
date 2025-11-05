// NEXT
import Link from "next/link";

// COMPONENTS
import Seo from "@/common/components/seo/seo";

const CookiePolicy = () => {
  const containerStyle =
    "mt-10 px-5 text-text-light sm:mx-auto sm:w-5/6 sm:px-0 md:mt-14 lg:w-[1025px] xl:w-[1325px]";
  const textContainerStyle = "mt-3 md:text-lg lg:w-2/3";
  const titleStyle = "font-cera text-2xl font-semibold text-main md:text-4xl";
  const borderStyle = "mt-0.5 h-1 bg-secondary md:w-5/12";
  const spanTextStyle = "font-bold";
  const strongTextStyle = "";

  return (
    <>
      <Seo page="politiqueDeCookies" />
      <div className="px-5 pb-8 pt-16 sm:px-0 sm:pb-8 sm:pt-20 md:p-0 md:pt-20 lg:pt-10 xl:pt-20">
        <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl">
          Politique de cookies
        </h1>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Objet de la présente politique :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            La présente politique a pour objet d’informer les utilisateurs du
            site{" "}
            <strong className={"font-semibold text-main"}>
              Mowgli Tattoo Studio
            </strong>{" "}
            sur l’utilisation des cookies et autres traceurs susceptibles d’être
            déposés sur leur terminal lors de la navigation.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Définition d’un cookie :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Un cookie est un petit fichier texte déposé sur le navigateur de
            l’utilisateur lors de la visite d’un site internet. Il permet
            notamment de stocker temporairement des informations techniques ou
            de navigation afin d’assurer le bon fonctionnement du site et
            d’améliorer l’expérience utilisateur.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Cookies utilisés sur le site :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Le site{" "}
            <strong className={"font-semibold text-main"}>
              Mowgli Tattoo Studio
            </strong>{" "}
            n’utilise{" "}
            <span className={spanTextStyle}>
              aucun cookie à des fins de suivi, de publicité ou de mesure
              d’audience
            </span>
            .
          </p>
          <p className="mt-2">
            Seuls des{" "}
            <span className={spanTextStyle}>cookies techniques essentiels</span>{" "}
            peuvent être déposés afin d’assurer :
          </p>
          <ul className="mt-1">
            <li>- le bon fonctionnement du site développé avec Next.js,</li>
            <li>
              - la gestion du cache, du rendu côté serveur ou de la navigation
              entre les pages.
            </li>
          </ul>
          <p className="mt-2">
            Ces cookies sont{" "}
            <span className={spanTextStyle}>strictement nécessaires</span> à la
            fourniture du service demandé par l’utilisateur et{" "}
            <span className={spanTextStyle}>
              ne permettent pas de l’identifier personnellement
            </span>
            .
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Cookies tiers :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Le site intègre certains services externes susceptibles de déposer
            des cookies techniques :
          </p>
          <ul className="mt-1">
            <li>
              - <span className={spanTextStyle}>Google Fonts</span>, utilisé
              pour l’affichage des polices d’écriture. Ce service peut, dans
              certains cas, enregistrer des informations techniques (adresse IP,
              requête de police) sur les serveurs de Google.
              <br />
              Pour plus d’informations :{" "}
              <Link
                href={"https://policies.google.com/privacy"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                Politique de confidentialité de Google
              </Link>
              .
            </li>
            <li>
              -{" "}
              <span className={spanTextStyle}>
                Instagram (Meta Platforms, Inc.)
              </span>
              , dont les contenus intégrés peuvent être affichés sur certaines
              pages. Ces éléments dépendent des conditions d’utilisation et de
              la politique de confidentialité d’Instagram.
              <br />
              L’utilisateur peut consulter ces politiques à tout moment sur :{" "}
              <Link
                href={"https://help.instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                https://help.instagram.com
              </Link>
              .
            </li>
          </ul>
          <p className="mt-2">
            Aucun cookie de mesure d’audience (type Google Analytics, Matomo,
            etc.) n’est utilisé.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Consentement de l’utilisateur :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            Conformément aux recommandations de la{" "}
            <span className={spanTextStyle}>CNIL</span>, les cookies strictement
            nécessaires au fonctionnement du site{" "}
            <span className={spanTextStyle}>
              ne nécessitent pas le consentement préalable
            </span>{" "}
            de l’utilisateur.
          </p>
          <p className="mt-2">
            Ainsi,{" "}
            <span className={spanTextStyle}>
              aucune bannière de consentement n’est affichée
            </span>{" "}
            sur le site, car aucun cookie non essentiel n’est déposé.
          </p>
        </div>
      </div>

      <div className={containerStyle}>
        <h2 className={titleStyle}>Gestion des cookies :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            L’utilisateur peut configurer son navigateur à tout moment pour :
          </p>
          <ul className="mt-1">
            <li>- être informé de la présence d’un cookie,</li>
            <li>
              - bloquer ou supprimer tous les cookies, y compris ceux
              nécessaires au fonctionnement du site.
            </li>
          </ul>
          <p className="mt-2">
            Toutefois, la désactivation de certains cookies techniques peut
            altérer ou rendre impossible l’accès à certaines fonctionnalités du
            site.
          </p>
          <p className="mt-2">
            Les liens vers les pages d’aide des principaux navigateurs :
          </p>
          <ul className="mt-1">
            <li>
              -{" "}
              <Link
                href={"https://support.google.com/chrome/answer/95647?hl=fr"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                Google Chrome
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href={
                  "https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                Mozilla Firefox
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href={
                  "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                Microsoft Edge
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                href={
                  "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-main hover:underline"
              >
                Safari
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${containerStyle} mb-20 sm:mb-28 md:mb-32`}>
        <h2 className={titleStyle}>Mise à jour de la politique :</h2>
        <div className={borderStyle}></div>
        <div className={textContainerStyle}>
          <p>
            La présente politique de cookies peut être mise à jour à tout moment
            pour refléter les évolutions légales ou techniques.
          </p>
          <p>
            La dernière mise à jour a été effectuée le{" "}
            <span className={spanTextStyle}>05 novembre 2025</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
