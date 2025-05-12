import React from "react";
import TitleFont from "../component/TitleFont";
import CardItem from "./CardItem";
import { CardDataList } from "./CardDataList";

const WorksAreaPage = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-15">
      <TitleFont title="Works" />
      <div className="grid grid-cols-3 gap-4 mt-15">
        {CardDataList.map((card, index) => (
          <CardItem key={index} cardTitle={card.title} picSrc={card.picSrc} />
        ))}
      </div>
    </div>
  );
};

export default WorksAreaPage;
