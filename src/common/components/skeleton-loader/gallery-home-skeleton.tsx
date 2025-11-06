const PostHomeLoader = () => {
  const fakeData = Array(4).fill(0);
  return (
    <div className="relative mx-auto mt-20 grid max-w-[1350px] grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 md:grid-cols-4 lg:gap-8 xl:gap-10 xl:px-0">
      {fakeData.map((_, index: number) => {
        return (
          <div
            key={index}
            className="h-[235px] w-full animate-pulse rounded-lg bg-[#7f7f7f] xs:h-[335px] sm:h-[354px] md:h-[231px] lg:h-[313px] xl:h-[307px]"
          ></div>
        );
      })}
    </div>
  );
};

export default PostHomeLoader;
