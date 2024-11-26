// NEXT
import Link from "next/link";
import { GetServerSideProps } from "next";

// CONFIG
import { socialsLinksMowgli } from "@/config/socials-links";

// COMPONENTS
import PostLoader from "@/components/skeleton-loader/gallery-skeleton";
import Seo from "@/components/seo/seo";
import { LinkButton } from "@/components/button/link-button";

// TYPING
export interface PostProps {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export interface PostsProps {
  data: PostProps[];
  error: boolean;
}

const RealisationsPage = ({ data, error }: PostsProps) => {
  const posts = data;

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
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-20 pb-20 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10">
          {posts.map((post: any, index: number) => {
            return (
              <div key={index}>
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.media_url}
                    /* TODO POUR LE ALT VERIFIER QU'IL Y AIT UN CAPTION SINON METRE UN ALT PAR DEFAUT */
                    alt={post.caption}
                    className="aspect-square rounded-lg hover:shadow-full-main transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <PostLoader numberOfPosts={12} />
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

export const getServerSideProps: GetServerSideProps<PostsProps> = async () => {
  // NUMBER OF POSTS LIMIT
  const limit = 40;

  /* TODO FAIRE EN SORTE DE FILTRER TOUT CE QUI N'EST PAS UNE VIDEO
    ET FAIRE EN SORTE D'EN AVOIR TOUJOURS 40
    TODO UTILISER RTK QUERY POUR FAIRE CA AVEC UN CACHE DE 24h minimum ou invalider le cache si les données changes
    VOIR SI JE FAIS AUSSI UN FILTRE SUR LES CAPTIONS QUI NE PARLE QUE DES TATTOOS
  */

  // Construire l'URL en fonction du curseur disponible
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&limit=${limit}&access_token=${process.env.INSTAGRAM_TOKEN}`;

  let data = [];
  let errorAPI = false;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();

      if (result && result.data) {
        data = result.data;
      } else {
        console.error("Données invalides reçues de l'API Instagram.");
        errorAPI = true;
      }
    } else {
      console.error(
        `Erreur API : ${response.statusText} (code ${response.status})`
      );
      errorAPI = true;
    }
  } catch (error) {
    console.error("Erreur lors du call API : ", error);
    errorAPI = true;
  }

  return {
    props: {
      data,
      error: errorAPI,
    },
  };
};
