import React from "react";
import Image from "next/image";

type SkillsCardItemProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
};

const SkillsCardItem = ({ src, alt, width, height, title }: SkillsCardItemProps) => {
  return (
    <div
      className="card bg-base-100 shadow-sm border-none items-center justify-center"
      style={{ width: 300, height: 300 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: "10px" }}
      />
      <p className="text-center mt-4">{title}</p>
    </div>
  );
};

export default SkillsCardItem;
