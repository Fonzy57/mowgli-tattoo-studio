// COMPONENTS
import { SkillCard } from "../components/card/skill-card";
import { IconName } from "../components/icons/icon.enum";

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

export const SkillsSection = () => {
  return (
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
  );
};
