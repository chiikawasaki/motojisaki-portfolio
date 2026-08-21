import React from "react";
import TitleFont from "../component/TitleFont";
import SkillsCardItem from "./SkillsCardItem";
import { SkillsData, SkillsDataList } from "./data/SkillsdataList";

const SkillsArea = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <TitleFont title="Skills" />
      <div className="grid grid-cols-3 gap-10 mt-15">
        {SkillsDataList.map((skill: SkillsData) => (
          <SkillsCardItem
            key={skill.alt}
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
