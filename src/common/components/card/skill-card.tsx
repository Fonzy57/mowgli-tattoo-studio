import { CustomIcon } from "../icons/icon";
import { IconName } from "../icons/icon.enum";

export interface SkillCardProps {
  icon: IconName;
  title: string;
  content: string;
}

export const SkillCard = ({ icon, title, content }: SkillCardProps) => {
  return (
    <div className="w-full cursor-default rounded-lg border border-main p-5 shadow-[0px_5px_15px_0px] shadow-secondary/50 sm:w-[450px] md:w-[600px] lg:w-full">
      <div className="mx-auto w-max text-main">
        <CustomIcon name={icon} size={50} />
      </div>
      <h3 className="mt-3 text-center font-cera text-2xl font-medium text-main">
        {title}
      </h3>
      <p className="mt-3 text-justify text-text-light">{content}</p>
    </div>
  );
};
