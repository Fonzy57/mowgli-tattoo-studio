// ICONS FROM react-icons
import {
  FaFacebook,
  FaSquareInstagram,
  FaLocationDot,
  FaAt,
  FaEnvelope,
  FaWordpress,
} from "react-icons/fa6"; // Font Awesome 6 library

// ENUM & Typing
import { IconName } from "./icon.enum";

interface DashIconProps {
  size: number;
  name: IconName;
  className?: string;
  onClick?: () => void;
}

export const iconComponents = {
  [IconName.At]: FaAt,
  [IconName.Envelope]: FaEnvelope,
  [IconName.Facebook]: FaFacebook,
  [IconName.Instagram]: FaSquareInstagram,
  [IconName.Location]: FaLocationDot,
  [IconName.Wordpress]: FaWordpress,
};

export const CustomIcon = ({
  size,
  name,
  className,
  onClick,
}: DashIconProps) => {
  const Icon = iconComponents[name];

  return (
    <span className={className} onClick={onClick}>
      {Icon ? <Icon size={size} /> : null}
    </span>
  );
};
