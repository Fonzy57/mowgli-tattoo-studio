// TYPING
interface PostLoaderProps {
  numberOfPosts: number;
}

const PostLoader = ({ numberOfPosts }: PostLoaderProps) => {
  const fakeData = Array(numberOfPosts).fill(0);
  return (
    /*
      TODO CHANGER LES GRIDS ET LES TAILLES SI JAMAIS JE CHANGE LES IMAGES
      A VOIR AVEC PE QUAND JE LUI AURAIS MONTRE
    */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1560px] mx-auto mt-10 pb-10">
      {fakeData.map((post: any, index: number) => {
        return (
          <div
            key={index}
            className="w-[378px] h-[378px] bg-[#7f7f7f] rounded-lg animate-pulse"
          ></div>
        );
      })}
    </div>
  );
};

export default PostLoader;
