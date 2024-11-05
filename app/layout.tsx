import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import cn from "@yeahx4/cn";

export const metadata: Metadata = {
  title: "김규산 | Kim Kyu San",
  description: "개발자 김규산의 포트폴리오",
};

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const blackHanSans = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <style>{`
        ${notoSansKr}
        ${blackHanSans}
      `}</style>
      <body>
        <Header />
        <main className="min-h-[100vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
