// COMPONENTS
import { LinkButton } from "@/components/button/link-button";
import Seo from "@/components/seo/seo";
import BaseImage from "@/components/image/base-image";

const Error404 = () => {
  return (
    <>
      <Seo page="404" />
      <div className="pb-10 xs:mx-auto xs:w-[375px] md:w-[944px] md:py-24 lg:w-[1200px] xl:w-[1440px]">
        <div className="flex flex-col items-center justify-center gap-4 px-5 xs:px-0 md:flex-row md:gap-20 xl:gap-40">
          <BaseImage
            src={"/images/404.png"}
            width={500}
            height={500}
            alt="Illustration du papillon de la mort, un papillon de nuit avec une tête de mort sur le thorax"
            className="md:drop-shadow-[0_20px_20px_rgb(255_209_97_/_0.2)]"
            priority
          />
          <div className="flex flex-col items-center gap-4 text-text-light">
            <h1 className="text-center text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
              Erreur 404
            </h1>
            <p className="text-justify lg:text-lg">
              Cette page n'existe pas, mais votre prochain tatouage, lui, est
              bien réel.
            </p>
            <div className="mt-8 w-max">
              <LinkButton url="/">Revenir au studio</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
