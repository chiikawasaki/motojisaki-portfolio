import React from "react";

const TimelineData = [
  {
    title: "私立鴎友学園中学高等学校 入学",
    date: "2016-2022",
    description:
      "部活は吹奏楽部に所属し、フルートを担当した。吹奏楽部で5年間活動することで、意見がぶつかることもあったが、その都度話し合うことで解決した。話し合いの大切さを学び、今でも話し合いを重視している。",
  },
  {
    title: "成蹊大学理工学部理工学科コンピュータ科学専攻 入学",
    description:
      "昔からコンピュータやPCを用いたものづくりに興味があり、成蹊大学コンピュータ科学専攻に入学する。コンピュータ科学の基礎を学ぶ。",
    date: "2022-2026",
  },
  {
    title: "成蹊大学エンジニア団体 PeachTechに加入",
    description:
      "エンジニア向けのサークルPeachTechに加入。ここで開発を始める。サークルの仲間とイベントやハッカソンに参加するようになる。",
    date: "2024-現在",
  },
  {
    title: "株式会社deleでアルバイトを開始",
    description:
      "株式会社deleでアルバイトを開始。AIを用いたサービスの開発を行う。フロントエンドからバックエンドまで幅広く開発を行う。",
    date: "2025-現在",
  },
  {
    title: "成蹊大学大学院理工学研究科コンピュータ科学コース 入学",
    description:
      "大学院では人に癒しを与えるMRペットについての研究を行っている。",
    date: "2026-現在",
  },
];

const TimeLine = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4 sm:px-10 md:px-20 lg:px-30 py-10 sm:py-20 md:py-30 lg:py-50">
      {TimelineData.map((item, index) => {
        const isLast = index === TimelineData.length - 1;
        return (
          <li key={item.title}>
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ec4899"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="">{item.date}</time>
              <div className="text-xl font-black">{item.title}</div>
              {item.description && (
                <p className="text-justify max-w-[25em] md:ml-auto text-gray-500 pt-2">
                  {item.description}
                </p>
              )}
            </div>
            {!isLast && <hr />}
          </li>
        );
      })}
    </ul>
  );
};
export default TimeLine;
