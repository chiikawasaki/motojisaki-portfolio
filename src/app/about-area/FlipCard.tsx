"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const CARD_WIDTH = 560;
const CARD_HEIGHT = 340;

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const updateScale = () => {
      setScale(Math.min(1, el.offsetWidth / CARD_WIDTH));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 px-4 w-full">
      <div
        ref={wrapperRef}
        className="w-full max-w-[560px]"
        style={{ height: CARD_HEIGHT * scale }}
      >
        {/* perspectiveで奥行きを出す */}
        <div
          className="[perspective:1500px]"
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
          >
            {/* 表面：名刺 */}
            <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[2.5rem] bg-[#fff7fb] shadow-2xl [backface-visibility:hidden]">
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
                    className="h-[190px] w-[150px] rounded-lg object-cover shadow-md"
                  />
                  <Image
                    src="/about/flower.png"
                    alt=""
                    width={183}
                    height={175}
                    className="float-flower absolute -bottom-7 -left-7 z-10 w-24"
                  />
                </div>
                <div className="relative flex flex-col gap-1 text-left text-base font-bold text-pink-600">
                  <Image
                    src="/about/backgroundribbon.png"
                    alt=""
                    width={236}
                    height={236}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-56 -translate-x-1/2 -translate-y-1/2 opacity-70"
                  />
                  <p className="relative z-10">
                    名前　<span className="ml-1">泉二　咲希</span>
                  </p>
                  <p className="relative z-10">
                    所属　<span className="ml-1">成蹊大学大学院</span>
                  </p>
                  <p className="relative z-10">
                    研究科　<span className="ml-1">理工学研究科</span>
                  </p>
                  <p className="relative z-10">
                    専攻　<span className="ml-1">コンピュータ科学専攻</span>
                  </p>
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

            {/* 裏面 */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
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
                  src="/about/my-logo.png"
                  alt="MS logo"
                  width={217}
                  height={217}
                  className="w-40"
                />
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
