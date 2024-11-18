import Image from "next/image";

const FullPageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-main">
      <div className="w-1/2 animate-heartbeat md:w-1/3 xl:w-1/4">
        <Image
          src="/images/the-mowgli-studio-logo-brown.svg"
          alt="Logo de The Mowgli Studio"
          width={858}
          height={321}
          priority
        />
      </div>
    </div>
  );
};

export default FullPageLoader;
