// TYPING
interface PostLoaderProps {
  numberOfPosts: number;
}

const PostLoader = ({ numberOfPosts }: PostLoaderProps) => {
  const fakeData = Array(numberOfPosts).fill(0);
  return (
    <div className="grid grid-cols-1 gap-5 max-w-[1560px] mx-auto mt-20 pb-20 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10">
      {fakeData.map((post: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full h-[300px] sm:h-[354px] md:h-[315px] lg:h-[326px] xl:h-[360px] bg-[#7f7f7f] rounded-lg animate-pulse"
          ></div>
        );
      })}
    </div>
  );
};

export default PostLoader;
