// ICONS FROM react-icons
import {
  FaFacebook,
  FaSquareInstagram,
  FaLocationDot,
  FaAt,
  FaEnvelope,
  FaWordpress,
  FaArrowDown,
  FaCouch,
  FaEye,
  FaMedal,
} from "react-icons/fa6"; // Font Awesome 6 library

// ENUM & Typing
import { IconName } from "./icon.enum";

interface CustomIconProps {
  size: number;
  name: IconName;
  className?: string;
  onClick?: any;
}

export const iconComponents = {
  [IconName.At]: FaAt,
  [IconName.Envelope]: FaEnvelope,
  [IconName.Facebook]: FaFacebook,
  [IconName.Instagram]: FaSquareInstagram,
  [IconName.Location]: FaLocationDot,
  [IconName.Wordpress]: FaWordpress,
  [IconName.ArrowDown]: FaArrowDown,
  [IconName.Couch]: FaCouch,
  [IconName.Eye]: FaEye,
  [IconName.Medal]: FaMedal,
};

export const CustomIcon = ({
  size,
  name,
  className,
  onClick,
}: CustomIconProps) => {
  const Icon = iconComponents[name];

  return (
    <span className={className} onClick={onClick}>
      {Icon ? <Icon size={size} /> : null}
    </span>
  );
};
