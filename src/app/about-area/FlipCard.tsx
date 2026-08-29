"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 px-4 w-full">
      {/* perspectiveで奥行きを出す */}
      <div className="[perspective:1500px] w-full max-w-[560px]">
        <motion.div
          className="relative h-[420px] sm:h-[340px] w-full [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        >
          {/* 表面：名刺 */}
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 rounded-2xl bg-white px-6 sm:px-10 py-6 shadow-2xl [backface-visibility:hidden]">
            <Image
              className="mask mask-circle w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"
              src="/about/my-photo.png"
              alt="自分の写真"
              width={180}
              height={180}
            />
            <div className="flex flex-col gap-2 text-gray-800 text-center sm:text-left">
              <p className="text-sm text-gray-500">Frontend Engineer</p>
              <p className="text-2xl sm:text-3xl font-bold">Motoji Saki</p>
              <p className="text-sm text-gray-500">
                React / Next.js / Flutter
              </p>
            </div>
          </div>

          {/* 裏面：自己紹介 */}
          <div className="absolute inset-0 flex items-center rounded-2xl bg-gray-800 px-6 sm:px-10 py-6 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto">
            <p className="text-sm leading-relaxed text-white">
              成蹊大学理工学部出身のエンジニア。大学3年の春にWeb開発に興味を持ち、ReactやNext.jsを使ったフロントエンド開発を学び始めました。以降、個人開発やハッカソン、インターンなどを通じて、バックエンドやインフラも含めたフルスタック領域に挑戦しています。
              普段はUI/UXや使いやすさを意識した開発を心がけており、アニメーションや視覚的な演出にもこだわっています。また、最近ではFlutterを使ったモバイルアプリ開発や、Supabase、FirebaseといったBaaSの活用も行っています。
              技術的なスキルに加えて、チーム開発やマネジメントにも関心があり、将来的にはエンジニアとしての知見を活かしながら、チーム全体の価値を引き出せるような立場を目指しています。
            </p>
          </div>
        </motion.div>
      </div>

      <button
        className="btn btn-outline"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        {isFlipped ? "Profile" : "About Me"}
      </button>
    </div>
  );
};

export default FlipCard;
