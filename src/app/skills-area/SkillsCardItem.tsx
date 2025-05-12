import React from "react";
import Image from "next/image";

const SkillsCardItem = () => {
  return (
    <div
      className="card bg-base-100 shadow-sm border-none items-center justify-center"
      style={{ width: 300, height: 300 }}
    >
      <Image
        src="./html-icon.svg"
        alt="sample"
        width={100}
        height={100}
        style={{ borderRadius: "10px" }}
      />
      <p className="text-center mt-4">HTML</p>
    </div>
  );
};

export default SkillsCardItem;
