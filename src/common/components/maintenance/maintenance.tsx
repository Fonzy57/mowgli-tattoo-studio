// COMPONENTS
import { LinkButton } from "../button/link-button";
import Seo from "../seo/seo";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// TYPING
interface MaintenanceProps {
  className: string;
}

const Maintenance = ({ className }: MaintenanceProps) => {
  return (
    <>
      <Seo page="maintenance" />
      <div
        className={`${className} h-screen bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/pictures/mowgli-hero.webp')]`}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
          <div>
            <h1 className="font-cera text-center font-semibold text-main text-4xl sm:text-6xl md:text-7xl xl:text-8xl">
              Site en maintenance
            </h1>
            <div className="text-text-light text-center mt-5 flex flex-col gap-y-1 md:mt-8 sm:text-lg lg:mt-10 lg:gap-y-3 lg:text-xl">
              <p>🚧 Nous travaillons actuellement sur le site 🚧</p>
              <p>En attendant, retrouvez moi sur Insta 👇</p>
            </div>
            <div className="w-max mx-auto mt-8 lg:mt-12">
              <LinkButton url={socialsLinksMowgli.instagram} blank={true}>
                Instagram Mowgli Tattoo
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
