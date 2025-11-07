// COMPONENTS
import { LinkButton } from "../button/link-button";
import Seo from "../seo/seo";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links.config";

// TYPING
interface MaintenanceProps {
  className: string;
}

const Maintenance = ({ className }: MaintenanceProps) => {
  return (
    <>
      <Seo page="maintenance" />
      <div
        className={`${className} h-screen bg-[url('/pictures/mowgli-hero.webp')] bg-cover bg-fixed bg-center bg-no-repeat`}
      >
        <div className="flex h-full items-center justify-center bg-black bg-opacity-70">
          <div>
            <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl xl:text-8xl">
              Site en maintenance
            </h1>
            <div className="mt-5 flex flex-col gap-y-1 text-center text-text-light sm:text-lg md:mt-8 lg:mt-10 lg:gap-y-3 lg:text-xl">
              <p>🚧 Nous travaillons actuellement sur le site 🚧</p>
              <p>En attendant, retrouvez moi sur Insta 👇</p>
            </div>
            <div className="mx-auto mt-8 w-max lg:mt-12">
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
