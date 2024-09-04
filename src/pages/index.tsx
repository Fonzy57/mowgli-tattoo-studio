// REACT & NEXT
import Image from "next/image";
import Link from "next/link";

// COMPONENTS

// STYLES
import styles from "../styles/hero.module.css";

const Home = () => {
  return (
    <>
      <section
        className={`${styles.hero} flex justify-center items-center h-[calc(100vh-80px)]`}
      >
        <h1 className="font-cera text-center text-9xl font-semibold text-main">
          The Mowgli Tattoo Studio
        </h1>
      </section>
      <section className="flex justify-center items-center gap-x-32 py-48">
        <div className="w-[750px]">
          <h2 className="font-cera text-center text-7xl font-semibold text-main">
            A propos de moi
          </h2>
          <div className="flex flex-col gap-y-4 mt-20">
            <p className="text-text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
            <p className="text-text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              optio. Aperiam, non quae provident modi qui corporis! Est,
              accusantium commodi numquam culpa, dicta exercitationem
              necessitatibus cumque, velit atque eum quibusdam?
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/pictures/pierre-emmanuel-bauer-hero.jpg"
            alt="Photo en noir et blanc de Pierre-Emmanuel Bauer, aka Mowgli"
            width={700}
            height={561}
            className="rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg shadow-full-main animate-pulse"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
