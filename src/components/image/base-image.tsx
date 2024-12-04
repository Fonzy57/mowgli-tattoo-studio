import Image, { ImageProps } from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { basePath } = publicRuntimeConfig;

interface BaseImageProps extends Omit<ImageProps, "src"> {
  // Inherits Image props, except "src"
  src: string;
}

const BaseImage = ({ src, ...props }: BaseImageProps) => {
  return <Image src={`${basePath}${src}`} {...props} />;
};

export default BaseImage;
