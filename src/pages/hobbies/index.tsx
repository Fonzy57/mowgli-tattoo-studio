// COMPONENTS
import Seo from "@/components/seo/seo";
import TextLink from "@/components/link/text-link";
import BaseImage from "@/components/image/base-image";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

const Hobbies = () => {
  return (
    <>
      <Seo page="hobbies" />
      <h1 className="px-5 font-cera text-center font-semibold text-main pt-10 text-4xl sm:px-0 sm:pt-14 sm:text-5xl md:pt-20 md:text-6xl lg:text-8xl">
        Mes hobbies
      </h1>
      <div className="px-5 flex flex-col gap-y-4 text-text-light mt-8 text-justify mx-auto sm:px-0 sm:w-[700px] md:w-[800px] md:mt-10 lg:text-lg lg:mt-20">
        <p>
          En dehors du tatouage, je partage mon quotidien avec mes deux chats
          Sphynx, Boo et Frites-Mayo. Je consacre aussi une partie de mon temps
          libre à <span className="italic font-semibold">La Virgule</span>, mon
          activité artistique où je réalise des peintures abstraites texturées
          et je customise des planches de skate.
        </p>
        <p>
          Sinon, j’aime profiter de mes moments de détente pour jouer au golf ou
          me plonger dans des jeux vidéo, deux passions qui me permettent de
          déconnecter et de m’amuser.
        </p>
      </div>

      <section className="px-5 flex flex-col items-center mt-12 sm:px-0 md:w-[948px] md:mx-auto lg:mt-20 lg:w-[1125px] lg:justify-center xl:w-[1400px] xl:mt-32">
        <div className="">
          <h2 className="font-cera text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-main">
            Mes chats
          </h2>
          <p className="text-text-light text-center mt-4 lg:text-lg lg:w-[500px] mx-auto">
            Voici Boo et Frites-Mayo.
          </p>
        </div>
        <BaseImage
          src={"/pictures/hobbies/Boo-et-Frites-Mayo.webp"}
          width={750}
          height={1000}
          alt="Photo de deux chats Sphynx se nommant Boo et Frites-Mayo"
          className="mt-4 rounded-lg shadow-full-main sm:w-1/2 md:mt-8 xl:w-1/3"
          priority
        />
      </section>

      <section className="px-5 mt-12 sm:mt-20 sm:px-0 lg:mt-28 xl:mt-32">
        <h2 className="font-cera text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-main">
          La Virgule
        </h2>
        <p className="text-text-light text-justify mt-4 xs:text-center sm:text-center lg:text-lg lg:mt-8">
          Vous pouvez voir tous mes projets sur{" "}
          <TextLink href={socialsLinksMowgli.virgule} blank={true}>
            Instagram
          </TextLink>
          .
        </p>
        <div className="flex flex-col items-center mt-8 gap-y-4 sm:w-[700px] sm:mx-auto sm:flex-row sm:gap-x-4 sm:justify-center md:w-[800px] md:mt-10 lg:w-[1000px] lg:items-stretch lg:mt-14 lg:gap-x-10 xl:w-[1200px] xl:mt-20">
          <BaseImage
            src={"/pictures/hobbies/La-Virgule-peinture-cadre.webp"}
            width={750}
            height={750}
            alt="Photo de deux chats Sphynx se nommant Boo et Frites-Mayo"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
          <BaseImage
            src={"/pictures/hobbies/La-Virgule-peinture-noire.webp"}
            width={750}
            height={750}
            alt="Photo de deux chats Sphynx se nommant Boo et Frites-Mayo"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
        </div>
      </section>

      <section className="px-5 mt-12 pb-24 sm:px-0 sm:mt-20 sm:pb-32 lg:mt-28 lg:pb-52 xl:mt-32 xl:pb-64">
        <h2 className="font-cera text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-main">
          Planches de skate
        </h2>
        <p className="text-text-light text-justify mt-4 xs:text-center sm:text-center sm:w-[500px] sm:mx-auto lg:w-[560px] lg:text-lg lg:mt-8">
          La customisation de planches de skate est faite sur demande. Voici
          deux exemples, une planche Star Wars et une Goldorak.
        </p>
        <div className="flex flex-col items-center mt-8 gap-y-4 sm:w-[700px] sm:mx-auto sm:flex-row sm:gap-x-4 sm:justify-center md:w-[800px] md:mt-10 lg:w-[1000px] lg:mt-14 lg:gap-x-10 xl:w-[1200px] xl:mt-20">
          <BaseImage
            src={"/pictures/hobbies/mowgli-skate-star-wars.webp"}
            width={750}
            height={750}
            alt="Photo de deux chats Sphynx se nommant Boo et Frites-Mayo"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
          <BaseImage
            src={"/pictures/hobbies/mowgli-skate-goldorak.webp"}
            width={750}
            height={750}
            alt="Photo de deux chats Sphynx se nommant Boo et Frites-Mayo"
            className="rounded-lg sm:w-1/2 md:shadow-full-main"
          />
        </div>
      </section>
    </>
  );
};

export default Hobbies;
