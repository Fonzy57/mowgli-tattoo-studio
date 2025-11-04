// COMPONENTS
import { CustomIcon } from "../icons/icon";

// ENUM
import { IconName } from "../icons/icon.enum";

// TYPING
interface PartProps {
  text: string;
  isHighlighted?: boolean;
}

interface CareCardProps {
  icon: IconName;
  parts: PartProps[];
}

const CareCard = ({ icon, parts }: CareCardProps) => {
  return (
    <div className="border border-main rounded-lg p-3 xs:p-5 xs:w-[335px] sm:w-full">
      <div className="w-max mx-auto text-main">
        <CustomIcon name={icon} size={50} />
      </div>
      <p className="text-text-light text-justify mt-3">
        {parts.map((part, index) => {
          return part.isHighlighted ? (
            <span key={index} className="text-main font-semibold">
              {part.text}
            </span>
          ) : (
            <span key={index}>{part.text}</span>
          );
        })}
      </p>
    </div>
  );
};

export default CareCard;
