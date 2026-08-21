import React from "react";
import TitleFont from "../component/TitleFont";
import TimeLine from "./TimeLine";
import FlipCard from "./FlipCard";

const AboutArea = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <TitleFont title="About" />
      </div>
      <div className="flex items-center justify-center">
        <FlipCard />
      </div>
      <TimeLine />
    </div>
  );
};

export default AboutArea;
