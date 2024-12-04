// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

// REDUX
import { useGetPostsQuery } from "@/store/apiSlice";

// COMPONENTS
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";
import { CustomIcon } from "@/components/icons/icon";
import { SkillCard } from "@/components/card/skill-card";
import PostHomeLoader from "@/components/skeleton-loader/gallery-home-skeleton";
import ApiErrorGalleryDisplay from "@/components/skeleton-loader/error-gallery-display";
import TextLink from "@/components/link/text-link";

// ENUM & TYPING
import { IconName } from "@/components/icons/icon.enum";
import { Post } from "@/dto/posts.dto";

// UTILS
import { handleClickAnchor } from "@/utils/scroll-to";

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

const Home = () => {
  const {
    data: posts,
    error: apiError,
    isFetching,
    isLoading,
  } = useGetPostsQuery();

  /* TODO SUPPRIMER APRES LES TESTS */
  const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
  console.log("isGithubPages PAGE : ", isGithubPages);

  return (
    <>
      <Seo page="home" />
      <header className="py-16 px-5 sm:py-20 sm:px-0 md:p-0 md:h-[calc(100vh-71px)] bg-fixed bg-center bg-cover bg-no-repeat lg:h-screen lg:-mt-[80px] md:bg-[url('/pictures/mowgli-hero.webp')]">
        <div className="flex items-center justify-center h-full md:bg-black md:bg-opacity-50">
          <h1 className="font-cera text-center font-semibold text-main text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
            The Mowgli Tattoo Studio
          </h1>
          <div className="hidden md:block">
            <CustomIcon
              name={IconName.ArrowDown}
              size={32}
              className="text-main cursor-pointer absolute bottom-9 lg:bottom-10 xl:bottom-14 left-1/2 animate-pulse border broder-main p-2 rounded-full hover:animate-none transition-all duration-300 ease-in-out"
              onClick={() => handleClickAnchor("about", 80)}
            />
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        className="flex justify-center items-center flex-col-reverse px-5 md:flex-row md:gap-x-10 md:py-28 lg:w-[1325px] lg:px-0 lg:mx-auto lg:gap-x-16 xl:w-[1560px] xl:gap-x-0 xl:justify-between xl:py-48"
        id="about"
      >
        <div className="w-full mt-10 sm:mt-20 md:w-1/2 md:mt-0 xl:w-[750px]">
          <h2 className="font-cera text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-main">
            A propos de moi
          </h2>
          <div className="flex flex-col gap-y-4 mt-6 text-text-light text-justify sm:gap-y-6 sm:mt-10 md:text-left lg:mt-14 lg:text-lg xl:mt-20 xl:w-[700px] xl:mx-auto">
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
          <div className="mx-auto w-max mt-10 lg:mt-14 xl:mt-20">
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
          <div className="absolute inset-0 rounded-lg shadow-full-main animate-pulse"></div>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <div className="h-[300px] mt-20 bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/pictures/parallax-1.webp')] sm:h-[350px] sm:mt-24 md:mt-0 lg:h-[450px]">
        <div className="flex items-center justify-center h-full bg-black/20"></div>
      </div>

      {/* EXPLICATION SECTION */}
      <section className="mt-20 px-5 sm:px-0 sm:w-[700px] sm:mx-auto lg:w-[900px] lg:mt-32 xl:w-[1050px]">
        <h3 className="font-cera text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-main">
          Pourquoi choisir un tatouage en noir et gris ?
        </h3>
        <p className="mt-6 text-text-light text-justify sm:mt-10 lg:text-left lg:mt-14 xl:mt-20 lg:text-lg lg:w-[750px] lg:mx-auto">
          Le tatouage réaliste en noir et gris est un style intemporel qui met
          en avant les détails et les nuances pour un rendu saisissant. Que ce
          soit un portrait, une scène ou un motif symbolique, ce style permet
          d’ajouter une profondeur unique à vos projets et s’adapte parfaitement
          à différentes zones du corps.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="w-full px-5 py-20 sm:px-0 lg:py-32 lg:w-[1325px] lg:mx-auto xl:w-[1560px]">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20 lg:items-stretch lg:justigy-between">
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
      <section className="bg-main text-text px-5 py-20 flex flex-col items-center justify-center gap-12 md:gap-10 lg:flex-row lg:gap-24 xl:gap-20">
        <h4 className="font-cera font-bold text-center text-3xl sm:text-4xl lg:text-left md:text-5xl xl:text-6xl">
          Suivez moi sur Instagram et Facebook
        </h4>
        <div className="flex items-center gap-x-12 xl:gap-x-10">
          <Link
            href={socialsLinksMowgli.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
          >
            <CustomIcon name={IconName.Instagram} size={50} />
          </Link>
          <Link
            href={socialsLinksMowgli.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
          >
            <CustomIcon name={IconName.Facebook} size={50} />
          </Link>
        </div>
      </section>

      {/* LAST TATTOO SECTION */}
      <section className="px-5 py-14 sm:py-20 md:py-24 lg:px-0 lg:py-32 xl:py-48">
        <h2 className="font-cera text-center text-4xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Derniers tattoos
        </h2>
        {/* LOADER WHILE FETCHING INSTAGRAM POSTS */}
        {(isFetching || isLoading) && <PostHomeLoader />}

        {/* DISPLAY IF ERROR WHITH THE INSTAGRAM API */}
        {apiError && <ApiErrorGalleryDisplay />}

        {/* DISPLAYING LAST 4 INSTAGRAM POSTS */}
        {!isFetching && !isLoading && posts && posts.length > 0 && (
          <div className="grid grid-cols-1 gap-5 max-w-[1350px] mx-auto mt-20 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10 relative overflow-hidden gallery-container">
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
        {!apiError && (
          <div className="mx-auto w-max">
            <LinkButton
              url="/realisations"
              className="w-max mx-auto mt-12 sm:mt-24 lg:mt-24 xl:mt-32"
            >
              Voir la galerie
            </LinkButton>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="h-[300px] bg-center bg-cover bg-no-repeat bg-[url('/pictures/pierre-emmanuel-bauer-bureau.webp')] sm:h-[350px] sm:mt-24 md:mt-0 lg:h-[450px]">
        <div className="h-full bg-black/50 px-5 flex flex-col items-center justify-center gap-y-16 sm:px-0 sm:gap-24">
          <h4 className="font-cera text-center text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
            Quel sera votre prochain tattoo ?
          </h4>
          <LinkButton url="/rdv-et-soins" className="w-max mx-auto">
            Me contacter
          </LinkButton>
        </div>
      </section>

      {/* PHOTOGRAPH SECTION */}
      {/* TODO VOIR SI FRED VEUT SON NOM OU BIEN SON PSEUDO INSTA POUR LA SECTION */}
      <section className="flex items-center justify-center flex-col-reverse px-5 py-14 gap-16 md:px-0 md:flex-row md:py-28 xl:pt-40 xl:pb-48">
        <Image
          src="/pictures/newby.pics.jpg"
          width={250}
          height={250}
          alt="Portrait noir et blanc du photographe Newby.pics"
          className="rounded-full border border-main"
        />
        <div className="w-full md:w-[550px] lg:w-[750px]">
          <h3 className="font-cera text-main font-bold text-center text-4xl sm:text-5xl lg:text-6xl">
            Newby Pics
          </h3>
          <p className="mt-6 text-text-light text-justify mx-auto sm:w-[500px] sm:mt-10 lg:text-lg lg:mt-14 xl:mt-20">
            Un grand merci à Newby.pics pour les magnifiques photos capturant
            l'essence du studio et de mon travail. Son œil artistique et son
            talent pour immortaliser les moments authentiques en font un
            photographe exceptionnel. Chaque cliché reflète non seulement
            l'atmosphère unique du salon, mais aussi la passion que je mets dans
            chaque tatouage.
          </p>
          <div className="flex items-center gap-x-12 w-max mx-auto text-main mt-10 lg:mt-14 xl:mt-20">
            <Link
              href={socialsLinksNewbyPics.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
            >
              <CustomIcon name={IconName.Instagram} size={50} />
            </Link>
            <Link
              href={socialsLinksNewbyPics.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-hover active:text-secondary-active transition duration-300 ease-in-out"
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
