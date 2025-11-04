// COMPONENTS
import CareCard from "@/common/components/card/care-card";
import Seo from "@/common/components/seo/seo";
import TextLink from "@/common/components/link/text-link";
import BaseImage from "@/common/components/image/base-image";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// ENUM
import { IconName } from "@/common/components/icons/icon.enum";

// CONSTANTS
const careItems = [
  {
    icon: IconName.Bandage,
    parts: [
      { text: "On retire", isHighlighted: true },
      { text: " son pansement ou son cellophane " },
      { text: "après 3h00", isHighlighted: true },
    ],
  },
  {
    icon: IconName.Soap,
    parts: [
      { text: "On savonne", isHighlighted: true },
      { text: " avec un savon au " },
      { text: "PH neutre", isHighlighted: true },
    ],
  },
  {
    icon: IconName.Shower,
    parts: [
      { text: "On passe", isHighlighted: true },
      { text: " son tattoo sous " },
      { text: "l'eau chaude", isHighlighted: true },
      { text: " puis sous " },
      { text: "l'eau froide, 15 secondes", isHighlighted: true },
      { text: " à chaque fois " },
    ],
  },
  {
    icon: IconName.MedicalPump,
    parts: [
      { text: "On met", isHighlighted: true },
      { text: " de la crème " },
      { text: "48h après", isHighlighted: true },
      { text: " en " },
      { text: "fine couche", isHighlighted: true },
    ],
  },
  {
    icon: IconName.HandHeart,
    parts: [
      { text: "On ne gratte pas", isHighlighted: true },
      { text: " son tattoo pendant " },
      { text: "la cicatrisation", isHighlighted: true },
    ],
  },
  {
    icon: IconName.Swimming,
    parts: [
      { text: "On ne va pas", isHighlighted: true },
      { text: " à la piscine, hammam et sauna " },
      { text: "pendant 1 mois", isHighlighted: true },
    ],
  },
];

const RdvEtSoins = () => {
  return (
    <>
      <Seo page="rdvEtSoins" />

      {/* APPOINTMENT SECTIONS */}
      <section className="w-full px-5 pt-10 sm:pt-14 md:p-0 md:pt-20">
        <h1 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Prendre RDV
        </h1>

        <div className="md:mx-auto md:mt-20 md:flex md:w-[948px] md:items-center md:gap-x-20 lg:w-[1125px] lg:justify-center xl:w-[1400px]">
          <div className="text-text-light md:w-1/2">
            <h2 className="mt-8 text-justify text-lg italic lg:text-2xl">
              Prise de rendez-vous pour un tatouage réaliste en noir et gris.
            </h2>
            <div className="mt-6 flex flex-col gap-y-4 sm:gap-y-2 lg:gap-y-4 lg:text-lg">
              <p>
                Pour planifier votre prochaine séance de tatouage, vous pouvez
                me contacter directement via{" "}
                <TextLink href={socialsLinksMowgli.instagram} blank={true}>
                  DM sur Instagram
                </TextLink>{" "}
                ou par <span className="font-semibold text-main">email</span>.
              </p>
              <p>
                Je suis disponible pour répondre à toutes vos questions et vous
                accompagner dans le processus de réservation. personnalisée.
              </p>
              <p>
                Assurez-vous de fournir un maximum de détails pour que je puisse
                comprendre pleinement votre projet et vous offrir une expérience
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 lg:w-1/3">
            <BaseImage
              src={"/pictures/aiguilles-tattoo.webp"}
              width={636}
              height={508}
              alt="Aiguilles emballées utilisées pour faire un tatouage"
              className="md:rounded-lg md:shadow-full-main"
            />
          </div>
        </div>

        <div className="mt-20 text-text-light md:mx-auto md:flex md:w-[948px] md:items-center md:gap-x-20 xl:w-[1400px] xl:justify-center xl:gap-x-44">
          <div className="hidden md:block md:w-1/2 xl:w-1/3">
            <BaseImage
              src={"/pictures/decoration.webp"}
              width={636}
              height={508}
              alt="Photo d'un support sur lequel se trouve plusieurs machines à tatouer et une illustration d'un papillon de la mort"
              className="md:rounded-lg md:shadow-full-main"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg underline lg:text-2xl">
              Les informations essentielles à fournir
            </h3>
            <div className="mt-3 flex flex-col gap-y-4 lg:mt-10 lg:text-lg">
              <div>
                <h4 className="font-bold text-main">Description du projet :</h4>
                <p className="text-justify">
                  Expliquez en quelques lignes votre idée de tatouage. Plus
                  votre description est précise, mieux je pourrai répondre à vos
                  attentes.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-main">Images d’inspiration :</h4>
                <p className="text-justify">
                  Joignez des photos ou des références qui reflètent le style ou
                  les éléments que vous souhaitez intégrer à votre tatouage.
                  Cela m’aidera à mieux visualiser votre projet.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-main">
                  Taille et emplacement souhaités :
                </h4>
                <p className="text-justify">
                  Indiquez la taille approximative du tatouage et la zone du
                  corps où vous souhaitez qu’il soit réalisé. Cela permet de
                  mieux anticiper la durée de la séance et le design final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARE SECTION */}
      <section className="mt-16 w-full md:mx-auto md:mt-24 md:w-[948px] xl:w-[1300px]">
        <h1 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Les soins
        </h1>
        <div className="px-5 text-text-light md:px-0 xl:w-[850px]">
          <h2 className="mt-8 text-justify text-lg italic lg:text-2xl">
            Prendre soin de votre tatouage pour un résultat parfait !
          </h2>
          <div className="mt-6 flex flex-col gap-y-4 sm:gap-y-2 lg:gap-y-4 lg:text-lg">
            <p>
              Après votre séance de tatouage, il est essentiel de bien suivre
              les recommandations de soins pour garantir une cicatrisation
              optimale et préserver la qualité du design. Les soins adaptés
              permettent d'éviter les infections, de protéger les détails du
              tatouage, et de prolonger sa durée de vie.
            </p>
            <p>
              Voici quelques étapes clés à respecter pour prendre soin de votre
              tatouage réaliste en noir et gris :
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 place-content-center justify-items-center gap-5 px-5 sm:mx-auto sm:max-w-[728px] sm:grid-cols-2 sm:px-0 md:max-w-[984px] md:grid-cols-3 lg:mt-20 lg:gap-8">
          {careItems.map((item, index) => {
            return <CareCard key={index} icon={item.icon} parts={item.parts} />;
          })}
        </div>
        <p className="mt-10 px-5 pb-20 text-justify text-text-light md:px-0 lg:mt-20 lg:text-lg">
          <strong className="text-main underline">Important :</strong> Mettre de
          l'indice 50 au soleil et ne pas donner son sang pendant 4 mois.
        </p>
      </section>
    </>
  );
};

export default RdvEtSoins;
