const PostHomeLoader = () => {
  const fakeData = Array(4).fill(0);
  return (
    <div className="grid grid-cols-1 gap-5 max-w-[1350px] mx-auto mt-20 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 xl:px-0 xl:gap-10 relative overflow-hidden">
      {fakeData.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full h-[235px] xs:h-[335px] sm:h-[354px] md:h-[231px] lg:h-[313px] xl:h-[307px] bg-[#7f7f7f] rounded-lg animate-pulse"
          ></div>
        );
      })}
    </div>
  );
};

export default PostHomeLoader;
