import type { Metadata } from "next";
import "./globals.css";
import CurtainReveal from "./component/CurtainReveal";

export const metadata: Metadata = {
  title: "泉二咲希のポートフォリオ",
  description: "泉二咲希のポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light" suppressHydrationWarning>
      <body className={`bg-base-100`} suppressHydrationWarning>
        <CurtainReveal />
        {children}
      </body>
    </html>
  );
}
