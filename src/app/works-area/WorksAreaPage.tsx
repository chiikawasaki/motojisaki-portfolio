"use client";
import React from "react";
import TitleFont from "../component/TitleFont";
import CardItem from "./CardItem";
import { CardDataList } from "./CardDataList";

const WorksAreaPage = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-15 px-4">
      <TitleFont title="Works" />
      <div className="grid w-full max-w-[1232px] [grid-template-columns:repeat(auto-fit,minmax(280px,400px))] justify-center gap-4 mt-15">
        {CardDataList.map((card, index) => (
          <CardItem
            key={index}
            index={index}
            title={card.title}
            picSrc={card.picSrc}
            description={card.description}
            technologies={card.technologies}
            github={card.github}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksAreaPage;
