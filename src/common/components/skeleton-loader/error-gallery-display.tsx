// COMPONENTS
import { LinkButton } from "../button/link-button";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links.config";

const ApiErrorGalleryDisplay = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-[950px] items-center justify-center rounded-lg bg-[#7f7f7f]/50 px-2 py-10 md:px-0">
      <div className="flex flex-col items-center gap-y-10">
        <div className="flex flex-col items-center gap-y-4 text-center text-text-light sm:gap-y-2 lg:text-lg">
          <p>
            Oups ! Une erreur est survenue lors du chargement des données 😥
          </p>
          <p>
            Pas d’inquiétude, vous pouvez toujours voir mes tatouages sur
            Instagram 👇
          </p>
        </div>
        <LinkButton url={socialsLinksMowgli.instagram} blank={true}>
          Aller sur Instagram
        </LinkButton>
      </div>
    </div>
  );
};

export default ApiErrorGalleryDisplay;
