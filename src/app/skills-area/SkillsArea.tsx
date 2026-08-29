import React from "react";
import TitleFont from "../component/TitleFont";
import SkillsCardItem from "./SkillsCardItem";
import { SkillsData, SkillsDataList } from "./data/SkillsdataList";

const SkillsArea = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      <TitleFont title="Skills" />
      <div className="grid w-full max-w-[980px] [grid-template-columns:repeat(auto-fit,minmax(220px,300px))] justify-center gap-6 sm:gap-10 mt-15">
        {SkillsDataList.map((skill: SkillsData, index: number) => (
          <SkillsCardItem
            key={skill.alt}
            index={index}
            src={skill.src}
            alt={skill.alt}
            width={skill.width}
            height={skill.height}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsArea;
