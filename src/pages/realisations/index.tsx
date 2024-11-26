// NEXT
import Link from "next/link";

// REDUX
import { useGetPostsQuery } from "@/store/apiSlice";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// COMPONENTS
import PostLoader from "@/components/skeleton-loader/gallery-skeleton";
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";

// TYPING
import { Post } from "@/dto/posts.dto";

const RealisationsPage = () => {
  const { data: posts, error, isFetching, isLoading } = useGetPostsQuery();

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
      {(isFetching || isLoading) && <PostLoader numberOfPosts={12} />}
      {!isFetching && !isLoading && posts && posts.length > 0 && (
        <div className="grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-20 pb-20 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10">
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
        </div>
      )}
      <div className="w-max mx-auto mb-20">
        <LinkButton url={socialsLinksMowgli.instagram} blank={true}>
          Voir tous mes tatouages
        </LinkButton>
      </div>
    </>
  );
};

export default RealisationsPage;
