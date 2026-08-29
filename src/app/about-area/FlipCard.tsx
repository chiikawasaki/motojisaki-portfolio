"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 px-4 w-full">
      <div className="w-full max-w-[560px] aspect-[560/340] [container-type:inline-size]">
        {/* カード内は560×340pxのデザインを1em=16pxとして組んでいる。
            コンテナ幅からemを算出することで、JSなしで全体が等倍縮小する（35 = 560 / 16） */}
        <div className="h-full w-full text-[calc(100cqw/35)] [--spacing:0.25em] [perspective:93.75em]">
          <motion.div
            className="relative h-full w-full [-webkit-transform-style:preserve-3d] [transform-style:preserve-3d]"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          >
            {/* 表面：名刺 */}
            {/* backface-visibility:hidden はoverflow-hidden/rounded-*と同じ要素に付けると
                モバイルのWebKit系ブラウザで裏返り中に反転した表面が一瞬見えるバグがあるため、
                非表示制御用の外側divと、クリッピング用の内側divに分けている */}
            <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.5em] bg-[#fff7fb] shadow-2xl">
                {/* 上部：チェック柄 + レース + リボン */}
                <div className="relative h-14 w-full shrink-0">
                  <Image
                    src="/about/race.png"
                    alt=""
                    width={560}
                    height={34}
                    className="absolute inset-x-0 bottom-0 z-0 h-auto w-full translate-y-1/2"
                  />
                  <div className="checker-pink absolute inset-0 z-10" />
                  <Image
                    src="/about/ribbon.png"
                    alt=""
                    width={318}
                    height={132}
                    className="absolute left-1/2 top-0 z-20 h-auto w-64 -translate-x-1/2"
                  />
                </div>

                {/* 中央：写真とプロフィール */}
                <div className="relative flex flex-1 flex-row items-center justify-center gap-12 px-8 pb-8 pt-2 -translate-x-2">
                  <div className="relative shrink-0">
                    <Image
                      src="/about/my-photo-sikaku.png"
                      alt="自分の写真"
                      width={155}
                      height={198}
                      className="h-[11.875em] w-[9.375em] rounded-[0.5em] object-cover shadow-md"
                    />
                    <Image
                      src="/about/flower.png"
                      alt=""
                      width={183}
                      height={175}
                      className="float-flower absolute -bottom-7 -left-7 z-10 w-24"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/about/backgroundribbon.png"
                      alt=""
                      width={236}
                      height={236}
                      className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-56 -translate-x-1/2 -translate-y-1/2 opacity-70"
                    />
                    <dl className="relative z-10 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-left text-[1em]/[1.5] font-bold text-pink-600">
                      <dt>名前</dt>
                      <dd>泉二　咲希</dd>
                      <dt>所属</dt>
                      <dd>成蹊大学大学院</dd>
                      <dt>研究科</dt>
                      <dd>理工学研究科</dd>
                      <dt>専攻</dt>
                      <dd>コンピュータ科学専攻</dd>
                    </dl>
                  </div>

                  <div className="absolute bottom-8 right-8 flex items-center gap-2">
                    <a
                      href="https://github.com/chiikawasaki"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/GitHub_icon.png"
                        alt="GitHub"
                        width={35}
                        height={34}
                        className="h-7 w-7"
                      />
                    </a>
                    <a
                      href="https://qiita.com/chiikawasaki"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/qiita-icon.png"
                        alt="Qiita"
                        width={35}
                        height={35}
                        className="h-7 w-7"
                      />
                    </a>
                    <a
                      href="https://x.com/saki_web_26"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/x-icon.png"
                        alt="X"
                        width={32}
                        height={33}
                        className="h-7 w-7"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 裏面 */}
            <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div
                className="h-full w-full overflow-hidden rounded-[2.5em] shadow-2xl"
                style={{
                  background: "linear-gradient(160deg, #FBCFE8, #FFE1F1)",
                }}
              >
                <Image
                  src="/about/ura-fuchi.png"
                  alt=""
                  fill
                  className="pointer-events-none object-cover"
                />
                <div className="flex h-full items-center justify-center">
                  <Image
                    src="/about/my-logo.svg"
                    alt="MS logo"
                    width={217}
                    height={217}
                    className="w-40"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        className="btn btn-outline"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        {isFlipped ? "front" : "back"}
      </button>
    </div>
  );
};

export default FlipCard;
