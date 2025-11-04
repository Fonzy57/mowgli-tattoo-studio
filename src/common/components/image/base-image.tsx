// NEXT
import Image, { ImageProps } from "next/image";

interface BaseImageProps extends Omit<ImageProps, "src"> {
  // Inherits Image props, except "src"
  src: string;
}

const BaseImage = ({ src, ...props }: BaseImageProps) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  return <Image src={`${basePath}${src}`} {...props} />;
};

export default BaseImage;
