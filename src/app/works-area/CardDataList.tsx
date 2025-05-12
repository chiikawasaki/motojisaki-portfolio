export type CardData = {
  picSrc: string;
  title: string;
  description?: string;
  technologies?: string[];
  github?: string;
  url?: string;
};

export const CardDataList: CardData[] = [
  {
    picSrc: "./peachtech-tutorial.png",
    title: "PeachTechチュートリアル",
    description:
      "Next.jsとTailwind CSSを使用して構築されたモダンなWebアプリケーション。インタラクティブなUIと高速なパフォーマンスが特徴です。",
    technologies: ["React", "Next.js", "MUI"],
    github: "https://github.com/Peach-Tech0927/PeachTech-tutorial",
  },
  {
    picSrc: "",
    title: "リタイアホームサーチ",
    description:
      "退職後の住まい探しをサポートするプラットフォーム。使いやすさと情報の見やすさにこだわりました。",
    technologies: ["React"],
  },
  {
    picSrc: "./docter-x.png",
    title: "DocterXの改善案を提案",
    description:
      "医療系アプリケーションのUX改善プロジェクト。ユーザビリティテストを実施し、インターフェースを最適化しました。",
    technologies: ["Figma"],
  },
  {
    picSrc: "./refty.png",
    title: "リフティ",
    description:
      "不動産情報を簡単に検索・比較できるアプリケーション。データビジュアライゼーションを活用した直感的なインターフェースが特徴です。",
    technologies: ["React", "Next.js", "MUI", "Supabase"],
    github: "https://github.com/yusei53/refty",
    url: "https://www.refty.jp/",
  },
  {
    picSrc: "./cherry-pic.png",
    title: "CherryPic",
    description:
      "写真共有アプリケーション。ソーシャル機能とフィルター機能を実装し、ユーザーエンゲージメントを向上させました。",
    technologies: ["React", "MUI", "Supabase"],
    github: "https://github.com/f-tash/Cherry-Pic",
  },
  {
    picSrc: "./refty.png",
    title: "ドライブペイ",
    description:
      "不動産情報を簡単に検索・比較できるアプリケーション。データビジュアライゼーションを活用した直感的なインターフェースが特徴です。",
    technologies: ["Flutter", "Dart", "Firebase", "GCP"],
    github: "https://github.com/momomomomo0903/DrivePay",
  },
  {
    picSrc: "./portfolio.png",
    title: "このサイトについて",
    description:
      "不動産情報を簡単に検索・比較できるアプリケーション。データビジュアライゼーションを活用した直感的なインターフェースが特徴です。",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/chiikawasaki/portfoliovol2",
  },
];
