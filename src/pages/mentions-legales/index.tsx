// COMPONENTS
import Seo from "@/components/seo/seo";

const MentionsLegales = () => {
  const containerStyle =
    "px-5 text-text-light mt-10 sm:px-0 sm:w-5/6 sm:mx-auto md:mt-16 lg:w-[1025px] xl:w-[1325px]";
  const titleStyle = "font-cera font-semibold text-main text-2xl underline";
  const firstTextStyle = "mt-3 md:text-lg";
  const textStyle = "mt-3 md:text-lg sm:mt-1 md:mt-0";
  const longTextStyle = "md:w-[650px] lg:w-[750px] xl:w-[950px]";
  const spanStyle = "font-bold";

  return (
    <>
      <Seo page="mentionsLegales" />
      <div className="pt-16 pb-8 px-5 sm:pt-20 sm:pb-8 sm:px-0 md:p-0 md:pt-20 lg:pt-10 xl:pt-20">
        <h1 className="font-cera text-center font-semibold text-main text-4xl sm:text-6xl md:text-7xl">
          Mentions legales
        </h1>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Editeur du site :</h2>
        <p className={firstTextStyle}>
          Nom de l'éditeur :{" "}
          <span className={spanStyle}>Mowgli Tattoo Studio</span>
        </p>
        <p className={textStyle}>
          Statut juridique :{" "}
          <span className={spanStyle}>Entrepreneur individuel</span>
        </p>
        <p className={textStyle}>
          Numéro SIRET : <span className={spanStyle}>804 100 220 00032</span>
        </p>
        <p className={textStyle}>
          Adresse :{" "}
          <span className={spanStyle}>
            2 A Rue des Pépinières, 57050 LONGEVILLE-LES-METZ
          </span>
        </p>
        <p className={textStyle}>
          Contact : <span className={spanStyle}>mowgli.bauer@gmail.com</span>
        </p>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Responsable de publication :</h2>
        <p className={firstTextStyle}>
          Nom : <span className={spanStyle}>Mowgli Tattoo Studio</span>
        </p>
        <p className={textStyle}>
          Contact : <span className={spanStyle}>mowgli.bauer@gmail.com</span>
        </p>
      </div>

      {/* TODO FAIRE LES MODIFICATIONS DES INFORMATIONS */}
      <div className={containerStyle}>
        <h2 className={titleStyle}>Hébergement :</h2>
        <p className={firstTextStyle}>
          Nom de l'hébergeur :{" "}
          <span className={spanStyle}>
            [Nom de l'hébergeur, ex : OVH, AWS, etc.]
          </span>
        </p>
        <p className={textStyle}>
          Adresse :{" "}
          <span className={spanStyle}>
            [Adresse complète de l'hébergeur, ex : 2 Rue Kellermann, 59100
            Roubaix, France]
          </span>
        </p>
        <p className={textStyle}>
          Téléphone :{" "}
          <span className={spanStyle}>
            [Numéro de téléphone de l'hébergeur, ex : +33 9 72 10 10 07]
          </span>
        </p>
        <p className={textStyle}>
          Site web :{" "}
          <span className={spanStyle}>
            [Lien vers le site de l'hébergeur, ex : https://www.ovhcloud.com]
          </span>
        </p>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Propriété intellectuelle :</h2>
        <p className={`${firstTextStyle} ${longTextStyle}`}>
          Tous les contenus présents sur ce site (textes, images, graphismes)
          sont protégés par les lois en vigueur sur la propriété intellectuelle
          et sont la propriété exclusive de Mowgli Tattoo Studio. Toute
          reproduction, modification, distribution ou exploitation est interdite
          sans autorisation écrite préalable.
        </p>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Limitation de responsabilité :</h2>
        <p className={`${firstTextStyle} ${longTextStyle}`}>
          Les informations présentes sur ce site sont fournies à titre indicatif
          et peuvent être modifiées sans préavis. Mowgli Tattoo Studio ne
          saurait être tenu responsable des éventuels dommages résultant de
          l'utilisation des informations ou des contenus présents sur ce site.
        </p>
      </div>
      <div className={containerStyle}>
        <h2 className={titleStyle}>Liens externes :</h2>
        <p className={`${firstTextStyle} ${longTextStyle}`}>
          Ce site peut contenir des liens vers des sites tiers. Mowgli Tattoo
          Studio n'exerce aucun contrôle sur ces sites et ne peut être tenu
          responsable de leur contenu ou de leur politique de confidentialité.
        </p>
      </div>
      <div className={`${containerStyle} mb-20 sm:mb-28 md:mb-32`}>
        <h2 className={titleStyle}>Contact :</h2>
        <p className={`${firstTextStyle} ${longTextStyle}`}>
          Pour toute question ou demande d'information concernant ce site, vous
          pouvez nous contacter à l'adresse suivante :{" "}
          <span className={spanStyle}>mowgli.bauer@gmail.com</span>
        </p>
      </div>
    </>
  );
};

export default MentionsLegales;
