// REACT & NEXT
import Link from "next/link";
import { GetStaticProps } from "next";

// COMPONENTS
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";
import { CustomIcon } from "@/components/icons/icon";
import { SkillCard } from "@/components/card/skill-card";
import ApiErrorGalleryDisplay from "@/components/skeleton-loader/error-gallery-display";
import TextLink from "@/components/link/text-link";
import BaseImage from "@/components/image/base-image";

// ENUM & TYPING
import { IconName } from "@/components/icons/icon.enum";
import { Post } from "@/dto/posts.dto";

interface HomeProps {
  posts: Post[] | [];
  error: boolean;
}

// UTILS
import { handleClickAnchor } from "@/utils/scroll-to";
import { fetchInstagramPosts } from "@/utils/fetch-instagram-posts";

// CONFIG
import {
  socialsLinksGrigri,
  socialsLinksMowgli,
  socialsLinksNewbyPics,
} from "@/config/socials-links";

// CONSTANTS
const skills = [
  {
    icon: IconName.Medal,
    title: "Artiste expérimenté",
    content:
      "The Mowgli Tattoo est un studio de tatouage de premier ordre dédié au tatouage réaliste et à la satisfaction totale du client.",
  },
  {
    icon: IconName.Eye,
    title: "Votre vision appliquée",
    content:
      "Apportez-moi vos idées et je vous aiderai à les transformer en un tatouage unique et personnel. J'ai l'expérience à laquelle vous pouvez faire confiance !",
  },
  {
    icon: IconName.Couch,
    title: "Ambiance détendue",
    content:
      "Le studio est propre et professionnel, mais aussi détendu et confortable. Je suis très fiers de chaque tatouage que je crée.",
  },
];

const Home = ({ posts, error }: HomeProps) => {
  return (
    <>
      <Seo page="home" />
      <header className="bg-cover bg-fixed bg-center bg-no-repeat px-5 py-16 sm:px-0 sm:py-20 md:h-[calc(100vh-71px)] md:bg-[url('/pictures/mowgli-hero.webp')] md:p-0 lg:-mt-[80px] lg:h-screen">
        <div className="flex h-full items-center justify-center md:bg-black md:bg-opacity-50">
          <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl lg:text-9xl">
            The Mowgli Tattoo Studio
          </h1>
          <div className="hidden md:block">
            <CustomIcon
              name={IconName.ArrowDown}
              size={32}
              className="broder-main absolute bottom-9 left-1/2 animate-pulse cursor-pointer rounded-full border p-2 text-main transition-all duration-300 ease-in-out hover:animate-none lg:bottom-10 xl:bottom-14"
              onClick={() => handleClickAnchor("about", 80)}
            />
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
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
              commencé à l’université de Metz, où j’ai obtenu une licence d’art
              en trois ans, avant de rejoindre les Beaux-Arts en équivalence
              pour décrocher mon Diplôme National d’Art en deux ans.
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
              sept années, j’y ai appris l’exigence, la précision et la
              créativité qui font aujourd’hui partie intégrante de ma démarche.
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
          <BaseImage
            src="/pictures/pierre-emmanuel-bauer-hero.webp"
            alt="Photo en noir et blanc du tatoueur Mowgli"
            width={700}
            height={561}
            className="rounded-lg"
          />
          <div className="absolute inset-0 animate-pulse rounded-lg shadow-full-main"></div>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <div className="hidden bg-[url('/pictures/parallax-1.webp')] bg-cover bg-fixed bg-center bg-no-repeat sm:mt-24 sm:block sm:h-[350px] md:mt-0 lg:h-[450px]">
        <div className="flex h-full items-center justify-center bg-black/20"></div>
      </div>

      {/* EXPLICATION SECTION */}
      <section className="mt-28 px-5 sm:mx-auto sm:mt-20 sm:w-[700px] sm:px-0 lg:mt-32 lg:w-[900px] xl:w-[1050px]">
        <h3 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Pourquoi choisir un tatouage en noir et gris ?
        </h3>
        <p className="mt-6 text-justify text-text-light sm:mt-10 lg:mx-auto lg:mt-14 lg:w-[750px] lg:text-left lg:text-lg xl:mt-20">
          Le tatouage réaliste en noir et gris est un style intemporel qui met
          en avant les détails et les nuances pour un rendu saisissant. Que ce
          soit un portrait, une scène ou un motif symbolique, ce style permet
          d’ajouter une profondeur unique à vos projets et s’adapte parfaitement
          à différentes zones du corps.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="w-full px-5 py-20 sm:px-0 lg:mx-auto lg:w-[1325px] lg:py-32 xl:w-[1560px]">
        <div className="lg:justigy-between flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-stretch lg:gap-20">
          {skills.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                content={skill.content}
              />
            );
          })}
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="flex flex-col items-center justify-center gap-12 bg-main px-5 py-20 text-text md:gap-10 lg:flex-row lg:gap-24 xl:gap-20">
        <h4 className="text-center font-cera text-3xl font-bold sm:text-4xl md:text-5xl lg:text-left xl:text-6xl">
          Suivez moi sur Instagram et Facebook
        </h4>
        <div className="flex items-center gap-x-12 xl:gap-x-10">
          <Link
            href={socialsLinksMowgli.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
            aria-label="Lien vers le profil Instagram de Mowgli Tattoo Studio"
          >
            <CustomIcon name={IconName.Instagram} size={50} />
          </Link>
          <Link
            href={socialsLinksMowgli.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
            aria-label="Lien vers la page Facebook de Mowgli Tattoo Studio"
          >
            <CustomIcon name={IconName.Facebook} size={50} />
          </Link>
        </div>
      </section>

      {/* LAST TATTOO SECTION */}
      <section className="px-5 py-14 sm:py-20 md:py-24 lg:px-0 lg:py-32 xl:py-48">
        <h2 className="text-center font-cera text-4xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Derniers tattoos
        </h2>

        {/* DISPLAY IF ERROR WHITH THE INSTAGRAM API */}
        {error && <ApiErrorGalleryDisplay />}

        {/* DISPLAYING LAST 4 INSTAGRAM POSTS */}
        {posts.length > 0 && (
          <div className="gallery-container relative mx-auto mt-20 grid max-w-[1350px] grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 md:grid-cols-4 lg:gap-8 xl:gap-10 xl:px-0">
            {posts.slice(0, 4).map((post: Post, index: number) => {
              return (
                <div key={index} className="gallery-item">
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width={"auto"}
                      height={"auto"}
                      src={post.media_url}
                      alt={
                        post.caption ||
                        "Photo d'un tatouage au style réaliste en noir et gris"
                      }
                      className="aspect-square rounded-lg"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        {!error && (
          <div className="mx-auto w-max">
            <LinkButton
              url="/realisations"
              className="mx-auto mt-12 w-max sm:mt-24 lg:mt-24 xl:mt-32"
            >
              Voir la galerie
            </LinkButton>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="h-[300px] bg-[url('/pictures/pierre-emmanuel-bauer-bureau.webp')] bg-cover bg-center bg-no-repeat sm:mt-24 sm:h-[350px] md:mt-0 lg:h-[450px]">
        <div className="flex h-full flex-col items-center justify-center gap-y-16 bg-black/50 px-5 sm:gap-24 sm:px-0">
          <h3 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
            Quel sera votre prochain tattoo ?
          </h3>
          <LinkButton url="/rdv-et-soins" className="mx-auto w-max">
            Me contacter
          </LinkButton>
        </div>
      </section>

      {/* PHOTOGRAPH SECTION */}
      <section className="flex flex-col-reverse items-center justify-center gap-16 px-5 py-14 md:flex-row md:px-0 md:py-28 xl:pb-48 xl:pt-40">
        <BaseImage
          src="/pictures/newby.pics.jpg"
          width={250}
          height={250}
          alt="Portrait noir et blanc du photographe Newby.pics"
          className="rounded-full border border-main"
        />
        <div className="w-full md:w-[550px] lg:w-[750px]">
          <h3 className="text-center font-cera text-4xl font-bold text-main sm:text-5xl lg:text-6xl">
            Newby Pics
          </h3>
          <p className="mx-auto mt-6 text-justify text-text-light sm:mt-10 sm:w-[500px] lg:mt-14 lg:text-lg xl:mt-20">
            Un grand merci à Newby.pics pour les magnifiques photos capturant
            l'essence du studio et de mon travail. Son œil artistique et son
            talent pour immortaliser les moments authentiques en font un
            photographe exceptionnel. Chaque cliché reflète non seulement
            l'atmosphère unique du salon, mais aussi la passion que je mets dans
            chaque tatouage.
          </p>
          <div className="mx-auto mt-10 flex w-max items-center gap-x-12 text-main lg:mt-14 xl:mt-20">
            <Link
              href={socialsLinksNewbyPics.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
              aria-label="Lien vers le profil Instagram de Newby Pics"
            >
              <CustomIcon name={IconName.Instagram} size={50} />
            </Link>
            <Link
              href={socialsLinksNewbyPics.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-secondary-hover active:text-secondary-active"
              aria-label="Lien vers le profil Facebook de Newby Pics"
            >
              <CustomIcon name={IconName.Facebook} size={50} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const token = process.env.INSTAGRAM_TOKEN as string;
  const { posts, error } = await fetchInstagramPosts(token);

  return {
    props: {
      posts,
      error,
    },
  };
};
