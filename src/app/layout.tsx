import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja" data-theme="light">
      <body className={`bg-base-100`}>{children}</body>
    </html>
  );
}
