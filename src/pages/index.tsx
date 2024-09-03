// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

// COMPONENTS

// CONFIG
import { version } from "@/config/version";

const Home = () => {
  return (
    <>
      <section className="flex py-52 justify-center gap-x-32 items-center">
        <div className="w-[750px]">
          <h1 className="font-cera text-center text-6xl font-semibold text-main">
            The Mowgli Tattoo Studio
          </h1>
          <div className="flex flex-col gap-y-4 mt-8">
            <p className="text-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
            <p className="text-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
          </div>
        </div>
        <Image
          src="/pictures/pierre-emmanuel-bauer-hero.jpg"
          alt="Photo en noir et blanc de Pierre-Emmanuel Bauer, aka Mowgli"
          width={700}
          height={561}
          className="rounded-lg shadow-xl"
        />
      </section>
    </>
  );
};

export default Home;
