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
    <div className="rounded-lg border border-main p-3 xs:w-[335px] xs:p-5 sm:w-full">
      <div className="mx-auto w-max text-main">
        <CustomIcon name={icon} size={50} />
      </div>
      <p className="mt-3 text-justify text-text-light">
        {parts.map((part, index) => {
          return part.isHighlighted ? (
            <span key={index} className="font-semibold text-main">
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
