// COMPONENTS
import Seo from "@/common/components/seo/seo";
import TextLink from "@/common/components/link/text-link";
import BaseImage from "@/common/components/image/base-image";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

const Hobbies = () => {
  return (
    <>
      <Seo page="hobbies" />
      <h1 className="px-5 pt-10 text-center font-cera text-4xl font-semibold text-main sm:px-0 sm:pt-14 sm:text-5xl md:pt-20 md:text-6xl lg:text-8xl">
        Mes hobbies
      </h1>
      <div className="mx-auto mt-8 flex flex-col gap-y-4 px-5 text-justify text-text-light sm:w-[700px] sm:px-0 md:mt-10 md:w-[800px] lg:mt-20 lg:text-lg">
        <p>
          En dehors du tatouage, je partage mon quotidien avec mes deux chats
          Sphynx, Boo et Frite-Mayo. Je consacre aussi une partie de mon temps
          libre à <span className="font-semibold italic">La Virgule</span>, mon
          activité artistique où je réalise des peintures abstraites texturées
          et je customise des planches de skate.
        </p>
        <p>
          Sinon, j’aime profiter de mes moments de détente pour jouer au golf ou
          me plonger dans des jeux vidéo, deux passions qui me permettent de
          déconnecter et de m’amuser.
        </p>
      </div>

      <section className="mt-12 flex flex-col items-center px-5 sm:px-0 md:mx-auto md:w-[948px] lg:mt-20 lg:w-[1125px] lg:justify-center xl:mt-32 xl:w-[1400px]">
        <div className="">
          <h2 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
            Mes chats
          </h2>
          <p className="mx-auto mt-4 text-center text-text-light lg:w-[500px] lg:text-lg">
            Voici Boo et Frite-Mayo.
          </p>
        </div>
        <BaseImage
          src={"/pictures/hobbies/Boo-et-Frites-Mayo.webp"}
          width={750}
          height={1000}
          alt="Photo de deux chats Sphynx se nommant Boo et Frite-Mayo"
          className="mt-4 rounded-lg shadow-full-main sm:w-1/2 md:mt-8 xl:w-1/3"
          priority
        />
      </section>

      <section className="mt-12 px-5 sm:mt-20 sm:px-0 lg:mt-28 xl:mt-32">
        <h2 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          La Virgule
        </h2>
        <p className="mt-4 text-justify text-text-light xs:text-center sm:text-center lg:mt-8 lg:text-lg">
          Vous pouvez voir tous mes projets sur{" "}
          <TextLink href={socialsLinksMowgli.virgule} blank={true}>
            Instagram
          </TextLink>
          .
        </p>
        <div className="mt-8 flex flex-col items-center gap-y-4 sm:mx-auto sm:w-[700px] sm:flex-row sm:justify-center sm:gap-x-4 md:mt-10 md:w-[800px] lg:mt-14 lg:w-[1000px] lg:items-stretch lg:gap-x-10 xl:mt-20 xl:w-[1200px]">
          <BaseImage
            src={"/pictures/hobbies/La-Virgule-peinture-cadre.webp"}
            width={750}
            height={750}
            alt="Peinture abstraite texturée encadrée"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
          <BaseImage
            src={"/pictures/hobbies/La-Virgule-peinture-noire.webp"}
            width={750}
            height={750}
            alt="Peinture abstraite texturée"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
        </div>
      </section>

      <section className="mt-12 px-5 pb-24 sm:mt-20 sm:px-0 sm:pb-32 lg:mt-28 lg:pb-52 xl:mt-32 xl:pb-64">
        <h2 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Planches de skate
        </h2>
        <p className="mt-4 text-justify text-text-light xs:text-center sm:mx-auto sm:w-[500px] sm:text-center lg:mt-8 lg:w-[560px] lg:text-lg">
          La customisation de planches de skate est faite sur demande. Voici
          deux exemples, une planche Star Wars et une Goldorak.
        </p>
        <div className="mt-8 flex flex-col items-center gap-y-4 sm:mx-auto sm:w-[700px] sm:flex-row sm:justify-center sm:gap-x-4 md:mt-10 md:w-[800px] lg:mt-14 lg:w-[1000px] lg:gap-x-10 xl:mt-20 xl:w-[1200px]">
          <BaseImage
            src={"/pictures/hobbies/mowgli-skate-star-wars.webp"}
            width={750}
            height={750}
            alt="Planche de skate customisée Star Wars"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
          <BaseImage
            src={"/pictures/hobbies/mowgli-skate-goldorak.webp"}
            width={750}
            height={750}
            alt="Planche de skate customisée Goldorak"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
        </div>
      </section>
    </>
  );
};

export default Hobbies;
