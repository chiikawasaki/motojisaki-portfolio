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
        <div className="w-[350px] flex">
          <Image
            className="mask mask-circle"
            src="./my-photo.png"
            alt="自分の写真"
            width={350}
            height={350}
          />
        </div>
        <p className="text-lg w-[550px]">
          成蹊大学理工学部出身のエンジニア。大学3年の春にWeb開発に興味を持ち、ReactやNext.jsを使ったフロントエンド開発を学び始めました。以降、個人開発やハッカソン、インターンなどを通じて、バックエンドやインフラも含めたフルスタック領域に挑戦しています。
          普段はUI/UXや使いやすさを意識した開発を心がけており、アニメーションや視覚的な演出にもこだわっています。また、最近ではFlutterを使ったモバイルアプリ開発や、Supabase、FirebaseといったBaaSの活用も行っています。
          技術的なスキルに加えて、チーム開発やマネジメントにも関心があり、将来的にはエンジニアとしての知見を活かしながら、チーム全体の価値を引き出せるような立場を目指しています。
        </p>
      </div>
      <TimeLine />
    </div>
  );
};

export default AboutArea;
