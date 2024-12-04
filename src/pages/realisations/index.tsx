// NEXT
import Link from "next/link";
import { useState } from "react";

// FRAMER MOTION
import { easeInOut, motion } from "framer-motion";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// COMPONENTS
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";
import { Button } from "@/components/button/button";
import ApiErrorGalleryDisplay from "@/components/skeleton-loader/error-gallery-display";

// TYPING
import { Post } from "@/dto/posts.dto";
import { GetStaticProps } from "next";
import { fetchInstagramPosts } from "@/utils/fetch-instagram-posts";

// Props pour la page
interface RealisationsPageProps {
  posts: Post[] | []; // Les posts Instagram
  error: boolean; // Booléen indiquant la présence d'une erreur
}

const RealisationsPage = ({ posts, error }: RealisationsPageProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSeeMore(true);
  };

  return (
    <>
      <Seo page="realisations" />
      <h1 className="font-cera text-center font-semibold text-main pt-10 text-4xl sm:pt-14 sm:text-5xl md:text-6xl lg:pt-20 lg:text-8xl">
        Mes derniers tatouages
      </h1>
      <div className="px-5 flex flex-col gap-y-8 text-text-light text-justify w-full mx-auto mt-8 sm:text-lg sm:mt-10 sm:gap-y-4 md:px-0 md:text-left md:w-[700px] lg:mt-12 lg:gap-y-3">
        <p>
          Bienvenue dans mon univers du{" "}
          <strong className="font-normal">
            tatouage réaliste en noir et gris
          </strong>
          . Chaque tatouage que je réalise est pensé pour capturer l’émotion, le
          détail et la profondeur qui rendent chaque pièce unique. J’aime
          travailler sur des projets personnalisés qui racontent votre histoire,
          qu’il s’agisse d’un portrait, d’une scène ou d’un motif symbolique.
          Mon style se concentre sur le contraste et la finesse des nuances de
          gris, pour un rendu à la fois subtil et puissant.
        </p>
        <p>
          Basé à Metz, je suis fier de proposer des{" "}
          <strong className="font-normal">tatouages personnalisés</strong> à
          celles et ceux qui recherchent un artiste spécialisé en tatouage
          réaliste.
        </p>
        <p>
          Explorez mes derniers tatouages et laissez-vous inspirer. Chaque
          réalisation est une aventure artistique que je partage avec vous, pour
          transformer vos idées en une œuvre intemporelle.
        </p>
      </div>

      {/* DISPLAY IF ERROR WHITH THE INSTAGRAM API */}
      {error && <ApiErrorGalleryDisplay />}

      {/* DISPLAYING LAST 40 INSTAGRAM POSTS */}
      {
        /* !isFetching && !isLoading && posts && */ posts.length > 0 && (
          <motion.div
            className={`grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-20 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10 relative overflow-hidden gallery-container`}
            initial={{ maxHeight: 700 }}
            animate={{ maxHeight: seeMore ? 20000 : 700 }}
            transition={{
              duration: 3,
              ease: easeInOut,
            }}
          >
            {posts.map((post: Post, index: number) => {
              return (
                <div key={index} className="gallery-item">
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width={"auto"}
                      height={"auto"}
                      src={post.media_url}
                      alt={
                        post.caption ||
                        "Photo d'un tatouage au style réaliste en noir et gris"
                      }
                      className="aspect-square rounded-lg"
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
        )
      }
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
        {!error && (
          <LinkButton url={socialsLinksMowgli.instagram} blank={true}>
            Voir tous mes tatouages
          </LinkButton>
        )}
      </motion.div>
    </>
  );
};

export default RealisationsPage;

export const getStaticProps: GetStaticProps = async () => {
  const token = process.env.INSTAGRAM_TOKEN as string;
  const { posts, error } = await fetchInstagramPosts(token);

  return {
    props: {
      posts,
      error,
    },
  };
};
