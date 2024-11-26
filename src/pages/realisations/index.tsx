// NEXT
import Link from "next/link";
import { useState } from "react";

// REDUX
import { useGetPostsQuery } from "@/store/apiSlice";

// FRAMER MOTION
import { easeInOut, motion } from "framer-motion";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// COMPONENTS
import PostLoader from "@/components/skeleton-loader/gallery-skeleton";
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";
import { Button } from "@/components/button/button";

// TYPING
import { Post } from "@/dto/posts.dto";

const RealisationsPage = () => {
  // FETCHING DATA WITH RTK QUERY
  const { data: posts, error, isFetching, isLoading } = useGetPostsQuery();

  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSeeMore(true);
  };

  /* TODO FAIRE UNE SNACK BAR S'IL Y A UNE ERREUR LORS DU CHARGEMENT */
  return (
    <>
      <Seo page="realisations" />
      <h1 className="font-cera text-center font-semibold text-main pt-16 text-4xl sm:pt-20 sm:text-5xl md:text-6xl lg:text-8xl">
        Mes derniers tatouages
      </h1>
      <p className="px-5 text-text-light text-justify w-full mx-auto mt-8 sm:text-lg sm:mt-10 md:px-0 md:text-left md:w-[700px] lg:mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        similique in beatae perspiciatis atque dicta rem praesentium, eos
        inventore reiciendis commodi debitis, odio animi, nesciunt enim possimus
        quam cupiditate molestias.
      </p>
      {(isFetching || isLoading) && <PostLoader numberOfPosts={8} />}
      {!isFetching && !isLoading && posts && posts.length > 0 && (
        <motion.div
          className={`grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-20 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10 relative overflow-hidden`}
          initial={{ maxHeight: 700 }}
          animate={{ maxHeight: seeMore ? 20000 : 700 }}
          transition={{
            duration: 3,
            ease: easeInOut,
          }}
        >
          {posts.map((post: Post, index: number) => {
            return (
              <div key={index}>
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.media_url}
                    alt={
                      post.caption ||
                      "Photo d'un tatouage au style réaliste en noir et gris"
                    }
                    className="aspect-square rounded-lg hover:shadow-full-main transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
            );
          })}
          <motion.div
            className={`inset-x-0 bottom-0 flex justify-center pt-44 pb-10 bg-gradient-to-t from-bgDark absolute xs:pt-56 xs:pb-20 sm:pt-52 md:pt-60 md:pb-24 lg:pt-56 lg:pb-20 xl:pt-48`}
            initial={{ opacity: 1, pointerEvents: "auto" }}
            animate={{
              opacity: seeMore ? 0 : 1,
              pointerEvents: seeMore ? "none" : "auto", // DISABLES CLICKS WHEN OPACITY IS 0
            }}
            transition={{
              duration: 3,
              ease: easeInOut,
            }}
          >
            <Button onClick={handleSeeMore}>Voir plus</Button>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        className={`w-max mx-auto mb-20`}
        initial={{ marginTop: 150 }}
        animate={{
          marginTop: seeMore ? 80 : 150,
        }}
        transition={{
          duration: 3,
          ease: easeInOut,
        }}
      >
        <LinkButton url={socialsLinksMowgli.instagram} blank={true}>
          Voir tous mes tatouages
        </LinkButton>
      </motion.div>
    </>
  );
};

export default RealisationsPage;
