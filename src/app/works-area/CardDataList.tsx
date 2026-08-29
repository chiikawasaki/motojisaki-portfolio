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
    picSrc: "/works/peachtech-tutorial.png",
    title: "PeachTechチュートリアル",
    description:
      "プログラミングサークル「PeachTech」のチュートリアルサイト。新入生に使ってもらうため、サークルの代表と同期と三人で作成しました。フロントエンドとデザインを担当しました。",
    technologies: ["React", "Next.js", "MUI"],
    github: "https://github.com/Peach-Tech0927/PeachTech-tutorial",
  },
  {
    picSrc: "/works/e-seikathu-LP.png",
    title: "リタイアホームサーチ",
    description:
      "株式会社いい生活でのインターンで制作したアプリケーションです。シニアの方をターゲットにした物件を探すためのアプリケーションになっています。社内用APIを使用し、条件で絞り込んで条件にあった物件を表示できるように努めました。自分は絞り込み機能とお問い合わせフォーム、LP画面のUIの作成を担当しました。",
    technologies: ["React"],
  },
  {
    picSrc: "/works/refty.png",
    title: "リフティ",
    description:
      "振り返りを手軽に見返せないことに課題を感じ開発しました。簡単に振り返りが行え、いつでも見返せるように設計された、振り返りに特化したサービスです。企画からデザイン、フロントエンドの開発を担当し、シンプルで直感的に操作できるUI設計にこだわりました。",
    technologies: ["React", "Next.js", "MUI", "Supabase"],
    github: "https://github.com/yusei53/refty",
    url: "https://refty.vercel.app/",
  },
  {
    picSrc: "/works/cherry-pic.png",
    title: "CherryPic",
    description:
      "「夢の発信を支援する」ことを目的に作成しました。夢を入力するとAIが夢を元に画像を生成します。企画・デザイン・フロントエンドを担当しました。",
    technologies: ["React", "MUI", "Supabase"],
    github: "https://github.com/f-tash/Cherry-Pic",
  },
  {
    picSrc: "/works/drive-pay.png",
    title: "ドライブペイ",
    description:
      "複数人のドライブで割り勘を簡単にすることを目的に作成しました。flutterに挑戦し、フロントエンドを担当しました。技育CAMPハッカソン2025vol2努力賞受賞",
    technologies: ["Flutter", "Dart", "Firebase", "GCP"],
    github: "https://github.com/momomomomo0903/DrivePay",
  },
  {
    picSrc: "/works/portfolio.png",
    title: "このサイトについて",
    description:
      "泉二咲希のポートフォリオサイトです。自分の魅力が最大限伝わるよう努めました。使っていて気持ちいいサイトを目指しています。",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/chiikawasaki/portfoliovol2",
  },
];
