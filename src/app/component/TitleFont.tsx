import React from "react";
import { cherryBombOne } from "../fonts";

type TitleFontProps = {
  title: string;
};

const TitleFont: React.FC<TitleFontProps> = ({ title }) => {
  return (
    <h1
      className={cherryBombOne.className}
      style={{
        color: "#EC4899",
        fontSize: "100px",
      }}
    >
      {title}
    </h1>
  );
};

export default TitleFont;
