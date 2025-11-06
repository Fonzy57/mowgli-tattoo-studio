// TYPING
interface PostLoaderProps {
  numberOfPosts: number;
}

const PostLoader = ({ numberOfPosts }: PostLoaderProps) => {
  const fakeData = Array(numberOfPosts).fill(0);
  return (
    <div className="mx-auto mt-20 grid max-w-[1560px] grid-cols-1 gap-5 px-5 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-10 xl:px-0">
      {fakeData.map((_, index: number) => {
        return (
          <div
            key={index}
            className="h-[300px] w-full animate-pulse rounded-lg bg-[#7f7f7f] sm:h-[354px] md:h-[315px] lg:h-[326px] xl:h-[360px]"
          ></div>
        );
      })}
    </div>
  );
};

export default PostLoader;
