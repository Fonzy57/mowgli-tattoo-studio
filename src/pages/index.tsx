// REACT & NEXT
import Link from "next/link";
import { GetServerSideProps } from "next";

// COMPONENTS
import Seo from "@/common/components/seo/seo";
import { LinkButton } from "@/common/components/button/link-button";
import { CustomIcon } from "@/common/components/icons/icon";
import ApiErrorGalleryDisplay from "@/common/components/skeleton-loader/error-gallery-display";

// SECTIONS
import { AboutSection } from "@/common/sections/about-section";
import { ParallaxSection } from "@/common/sections/parallax-section";
import { ExplicationSection } from "@/common/sections/explication-section";
import { SkillsSection } from "@/common/sections/skills-section";
import { SocialSection } from "@/common/sections/social-section";
import { ContactSection } from "@/common/sections/contact-section";
import { PhotographSection } from "@/common/sections/photograph-section";

// ENUM & TYPING
import { IconName } from "@/common/components/icons/icon.enum";
import { Post } from "@/dto/posts.dto";

interface HomeProps {
  posts: Post[] | [];
  error: boolean;
}

// UTILS
import { handleClickAnchor } from "@/utils/scroll-to";
import { fetchInstagramPosts } from "@/utils/fetch-instagram-posts";
import { useState } from "react";

const Home = ({ posts, error }: HomeProps) => {
  const [imgError, setImgError] = useState(false);
  const showError = error || imgError;

  return (
    <>
      <Seo page="home" />
      <header className="bg-cover bg-fixed bg-center bg-no-repeat px-5 py-16 sm:px-0 sm:py-20 md:h-[calc(100vh-71px)] md:bg-[url('/pictures/mowgli-hero.webp')] md:p-0 lg:-mt-[80px] lg:h-screen">
        <div className="flex h-full items-center justify-center md:bg-black md:bg-opacity-50">
          <h1 className="text-center font-cera text-4xl font-semibold text-main sm:text-6xl md:text-7xl lg:text-9xl">
            The Mowgli Tattoo Studio
          </h1>
          <div className="hidden md:block">
            <CustomIcon
              name={IconName.ArrowDown}
              size={32}
              className="broder-main absolute bottom-9 left-1/2 animate-pulse cursor-pointer rounded-full border p-2 text-main transition-all duration-300 ease-in-out hover:animate-none lg:bottom-10 xl:bottom-14"
              onClick={() => handleClickAnchor("about", 80)}
            />
          </div>
        </div>
      </header>

      {/* SECTIONS */}
      <AboutSection />
      <ParallaxSection />
      <ExplicationSection />
      <SkillsSection />
      <SocialSection />

      {/* LAST TATTOO SECTION */}
      <section className="px-5 py-14 sm:py-20 md:py-24 lg:px-0 lg:py-32 xl:py-48">
        <h2 className="text-center font-cera text-4xl font-semibold text-main sm:text-5xl lg:text-6xl xl:text-7xl">
          Derniers tattoos
        </h2>

        {/* DISPLAY IF ERROR WHITH THE INSTAGRAM API */}
        {showError && <ApiErrorGalleryDisplay />}

        {/* DISPLAYING LAST 4 INSTAGRAM POSTS */}
        {!showError && posts.length > 0 && (
          <div className="gallery-container relative mx-auto mt-20 grid max-w-[1350px] grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 md:grid-cols-4 lg:gap-8 xl:gap-10 xl:px-0">
            {posts.slice(0, 4).map((post: Post, index: number) => {
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
                      onError={() => setImgError(true)}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        {!showError && (
          <div className="mx-auto w-max">
            <LinkButton
              url="/realisations"
              className="mx-auto mt-12 w-max sm:mt-24 lg:mt-24 xl:mt-32"
            >
              Voir la galerie
            </LinkButton>
          </div>
        )}
      </section>

      <ContactSection />
      <PhotographSection />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const token = process.env.INSTAGRAM_TOKEN as string;
  const { posts, error } = await fetchInstagramPosts(token, 4);

  return {
    props: {
      posts,
      error,
    },
  };
};
