// ICONS FROM react-icons
import {
  FaFacebookF,
  FaLocationDot,
  FaAt,
  FaEnvelope,
  FaWordpress,
  FaArrowDown,
  FaCouch,
  FaEye,
  FaMedal,
  FaBandage,
  FaPumpSoap,
  FaShower,
  FaPumpMedical,
  FaHandHoldingHeart,
  FaPersonSwimming,
} from "react-icons/fa6"; // Font Awesome 6 library
import { AiFillInstagram } from "react-icons/ai"; // Ant Design Icons Library

// ENUM & TYPING
import { IconName } from "./icon.enum";

interface CustomIconProps {
  size: number;
  name: IconName;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export const iconComponents = {
  [IconName.At]: FaAt,
  [IconName.Envelope]: FaEnvelope,
  [IconName.Facebook]: FaFacebookF,
  [IconName.Instagram]: AiFillInstagram,
  [IconName.Location]: FaLocationDot,
  [IconName.Wordpress]: FaWordpress,
  [IconName.ArrowDown]: FaArrowDown,
  [IconName.Couch]: FaCouch,
  [IconName.Eye]: FaEye,
  [IconName.Medal]: FaMedal,
  [IconName.Bandage]: FaBandage,
  [IconName.Soap]: FaPumpSoap,
  [IconName.Shower]: FaShower,
  [IconName.HandHeart]: FaHandHoldingHeart,
  [IconName.Swimming]: FaPersonSwimming,
  [IconName.MedicalPump]: FaPumpMedical,
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
