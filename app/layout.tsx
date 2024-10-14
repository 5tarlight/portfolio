import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kim Kyu San",
  description: "개발자 김규산입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
