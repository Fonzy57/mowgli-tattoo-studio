// COMPONENTS
import { LinkButton } from "../components/button/link-button";

export const ContactSection = () => {
  return (
    <section className="h-[300px] bg-[url('/pictures/pierre-emmanuel-bauer-bureau.webp')] bg-cover bg-center bg-no-repeat sm:mt-24 sm:h-[350px] md:mt-0 lg:h-[450px]">
      <div className="flex h-full flex-col items-center justify-center gap-y-16 bg-black/50 px-5 sm:gap-24 sm:px-0">
        <h3 className="text-center font-cera text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Quel sera votre prochain tattoo ?
        </h3>
        <LinkButton url="/rdv-et-soins" className="mx-auto w-max">
          Me contacter
        </LinkButton>
      </div>
    </section>
  );
};
