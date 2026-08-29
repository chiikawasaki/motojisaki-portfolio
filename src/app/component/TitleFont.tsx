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
        fontSize: "clamp(2.5rem, 9vw, 100px)",
      }}
    >
      {title}
    </h1>
  );
};

export default TitleFont;
