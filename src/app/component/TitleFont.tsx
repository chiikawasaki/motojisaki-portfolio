import React from "react";

type TitleFontProps = {
  title: string;
};

const TitleFont: React.FC<TitleFontProps> = ({ title }) => {
  return (
    <h1
      style={{
        fontFamily: "Cherry Bomb One",
        fontWeight: 400,
        fontStyle: "normal",
        color: "#EC4899",
        fontSize: "100px",
      }}
    >
      {title}
    </h1>
  );
};

export default TitleFont;
