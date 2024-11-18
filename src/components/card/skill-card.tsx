import { CustomIcon } from "../icons/icon";
import { IconName } from "../icons/icon.enum";

export interface SkillCardProps {
  icon: IconName;
  title: string;
  content: string;
}

export const SkillCard = ({ icon, title, content }: SkillCardProps) => {
  return (
    <div className="w-full border border-main rounded-lg p-5 cursor-default shadow-[0px_5px_15px_0px] shadow-secondary/50 sm:w-[450px] sm:shadow-[0px_10px_25px_0px] sm:shadow-secondary/50 md:w-[600px] lg:w-full ">
      <div className="w-max mx-auto text-main">
        <CustomIcon name={icon} size={50} />
      </div>
      <h3 className="font-cera text-2xl text-center mt-3 font-medium text-main">
        {title}
      </h3>
      <p className="text-text-light mt-3 text-justify">{content}</p>
    </div>
  );
};
