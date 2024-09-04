// REACT & NEXT
import Image from "next/image";

// COMPONENTS
import { LinkButton } from "@/components/button/link-button";
import { CustomIcon } from "@/components/icons/icon";
import { IconName } from "@/components/icons/icon.enum";

// UTILS
import { handleClickAnchor } from "@/utils/scroll-to";
import { SkillCard } from "@/components/card/skill-card";

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
  return (
    <>
      <header
        className="h-[calc(100vh-80px)] bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/pictures/mowgli-hero.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="font-cera text-center text-9xl font-semibold text-main">
            The Mowgli Tattoo Studio
          </h1>
          <div>
            <CustomIcon
              name={IconName.ArrowDown}
              size={32}
              className="text-main cursor-pointer absolute bottom-14 left-1/2 animate-pulse border broder-main p-2 rounded-full hover:animate-none transition-all duration-300 ease-in-out"
              onClick={() => handleClickAnchor("about", 80)}
            />
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        className="flex justify-center items-center gap-x-32 py-48"
        id="about"
      >
        <div className="w-[750px]">
          <h2 className="font-cera text-center text-7xl font-semibold text-main">
            A propos de moi
          </h2>
          <div className="flex flex-col gap-y-4 mt-20">
            <p className="text-text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
            <p className="text-text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
          </div>
          <div className="mx-auto w-max mt-20">
            {/* TODO METTRE LE LIEN DE LA PAGE QUAND ELLE SERA FAITE */}
            <LinkButton url="#">Voir mes réalisations</LinkButton>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/pictures/pierre-emmanuel-bauer-hero.jpg"
            alt="Photo en noir et blanc de Pierre-Emmanuel Bauer, aka Mowgli"
            width={700}
            height={561}
            className="rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg shadow-full-main animate-pulse"></div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="w-full py-20">
        <div className="flex items-stretch justify-center gap-20 flex-wrap">
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

      {/* NEXT SECTION */}
      <section className="py-20"></section>
    </>
  );
};

export default Home;
