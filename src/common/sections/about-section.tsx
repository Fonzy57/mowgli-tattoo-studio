// NEXT
import Image from "next/image";

// COMPONENTS
import TextLink from "../components/link/text-link";
import { LinkButton } from "../components/button/link-button";

// CONFIG
import { socialsLinksGrigri } from "@/config/socials-links";

export const AboutSection = () => {
  return (
    <section
      className="flex flex-col-reverse items-center justify-center px-5 md:flex-row md:gap-x-10 md:py-28 lg:mx-auto lg:w-[1325px] lg:gap-x-16 lg:px-0 xl:w-[1560px] xl:justify-between xl:gap-x-0 xl:py-48"
      id="about"
    >
      <div className="mt-10 w-full sm:mt-20 md:mt-0 md:w-1/2 xl:w-[750px]">
        <h2 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          A propos de moi
        </h2>
        <div className="mt-6 flex flex-col gap-y-4 text-justify text-text-light sm:mt-10 sm:gap-y-6 md:text-left lg:mt-14 lg:text-lg xl:mx-auto xl:mt-20 xl:w-[700px]">
          <p>
            Depuis l’âge de 16 ans, le tatouage est bien plus qu’une passion
            pour moi : c’est une véritable vocation. Mon parcours artistique a
            commencé à l’université de Metz, où j’ai obtenu une licence d’art en
            trois ans, avant de rejoindre les Beaux-Arts en équivalence pour
            décrocher mon Diplôme National d’Art en deux ans.
          </p>
          <p>
            C’est au sein du studio{" "}
            <TextLink
              href={"https://www.instagram.com/realistink_tattoo_carling/"}
              blank={true}
            >
              Réalist’Ink
            </TextLink>{" "}
            que j’ai réellement affiné mon style et mes compétences. Pendant
            sept années, j’y ai appris l’exigence, la précision et la créativité
            qui font aujourd’hui partie intégrante de ma démarche.
          </p>
          <p>
            En 2021, j’ai décidé de franchir un nouveau cap en ouvrant mon
            propre studio. Depuis, je vis pleinement cette aventure artistique
            et humaine, en partageant cet espace de création avec ma collègue
            talentueuse,{" "}
            <TextLink href={socialsLinksGrigri.site} blank={true}>
              Le Grigri
            </TextLink>
            , depuis un an et demi.
          </p>
        </div>
        <div className="mx-auto mt-10 w-max lg:mt-14 xl:mt-20">
          <LinkButton url="/realisations">Voir mes réalisations</LinkButton>
        </div>
      </div>
      <div className="relative sm:w-1/2 lg:w-auto">
        <Image
          src="/pictures/pierre-emmanuel-bauer-hero.webp"
          alt="Photo en noir et blanc du tatoueur Mowgli"
          width={700}
          height={561}
          className="rounded-lg"
        />
        <div className="absolute inset-0 animate-pulse rounded-lg shadow-full-main"></div>
      </div>
    </section>
  );
};
