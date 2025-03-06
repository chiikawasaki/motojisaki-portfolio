import React from "react";
import TitleFont from "../component/TitleFont";
import Card from "./Card";

const WorksAreaPage = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-15">
      <TitleFont title="Works" />
      <div className="grid grid-cols-3 gap-4 mt-15">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default WorksAreaPage;
