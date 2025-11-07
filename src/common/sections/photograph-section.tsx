// NEXT
import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import { CustomIcon } from "../components/icons/icon";

// TYPES
import { IconName } from "../components/icons/icon.enum";

// CONFIG
import { socialsLinksNewbyPics } from "@/config/socials-links.config";

export const PhotographSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-16 px-5 py-14 md:flex-row md:px-0 md:py-28 xl:pb-48 xl:pt-40">
      <Image
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
  );
};
