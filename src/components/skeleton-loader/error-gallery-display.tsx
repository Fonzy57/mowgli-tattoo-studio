// COMPONENTS
import { LinkButton } from "../button/link-button";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

const ApiErrorGalleryDisplay = () => {
  return (
    <div className="flex justify-center items-center max-w-[950px] px-2 py-10 mx-auto mt-20 bg-[#7f7f7f]/50 rounded-lg md:px-0">
      <div className="flex flex-col items-center gap-y-10">
        <div className="text-text-light text-center flex flex-col items-center gap-y-4 sm:gap-y-2 lg:text-lg">
          <p>Il y a actuellement un problème pour charger les données 😥</p>
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
