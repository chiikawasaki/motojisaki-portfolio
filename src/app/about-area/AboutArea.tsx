import React from "react";
import TitleFont from "../component/TitleFont";
import Image from "next/image";
import TimeLine from "./TimeLine";

const AboutArea = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <TitleFont title="About" />
      </div>
      <div className="flex items-center justify-center gap-80">
        <div className="w-[350px] flex justify-end">
          <Image
            className="mask mask-circle"
            src="./my-photo.png"
            alt="自分の写真"
            width={350}
            height={350}
          />
        </div>
        <p className="text-lg">あああああああああああ</p>
      </div>
      <TimeLine />
    </div>
  );
};

export default AboutArea;
