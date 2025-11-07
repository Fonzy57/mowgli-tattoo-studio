// NEXT
import Link from "next/link";

// COMPONENTS
import { CustomIcon } from "../components/icons/icon";

// TYPES
import { IconName } from "../components/icons/icon.enum";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links.config";

export const SocialSection = () => {
  return (
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
  );
};
