// NEXT

// COMPONENTS
import Seo from "@/components/seo/seo";

const Hobbies = () => {
  return (
    <>
      <Seo page="hobbies" />
      <h1 className="font-cera text-center font-semibold text-main pt-16 text-4xl sm:pt-20 sm:text-5xl md:text-6xl lg:text-8xl">
        Mes hobbies
      </h1>

      {/* TODO SECTION LA VIRGULE */}
      <section>
        <h2 className="font-cera text-center text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Projet La Virgule
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid
          facilis eos illum officia laboriosam quasi. Reprehenderit aut atque
          iste, necessitatibus deleniti porro alias quas dolorem. Quisquam velit
          sunt labore.
        </p>
      </section>

      {/* TODO SECTION LA VIRGULE */}
      <section>
        <h2 className="font-cera text-center text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Planches de skate
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid
          facilis eos illum officia laboriosam quasi. Reprehenderit aut atque
          iste, necessitatibus deleniti porro alias quas dolorem. Quisquam velit
          sunt labore.
        </p>
      </section>

      {/* TODO SECTION LA VIRGULE */}
      <section>
        <h2 className="font-cera text-center text-3xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Mes chats
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid
          facilis eos illum officia laboriosam quasi. Reprehenderit aut atque
          iste, necessitatibus deleniti porro alias quas dolorem. Quisquam velit
          sunt labore.
        </p>
      </section>
    </>
  );
};

export default Hobbies;
