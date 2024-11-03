import Typing from "@/components/animations/typing";
import Title from "@/components/title";
import cn from "@yeahx4/cn";
import { g } from "framer-motion/client";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython, FaJava, FaRust, FaSquareJs } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-48 px-4">
        <div
          className={cn(
            "max-w-5xl w-full flex justify-between md:flex-row",
            "flex-col-reverse"
          )}
        >
          <div>
            <Typing
              value={["Hello World!", "I'm Kyusan Kim"]}
              loop
              className={cn("font-bold text-4xl md:text-6xl opacity-65")}
            />
            <div className="flex flex-col mt-16 text-lg opacity-95 gap-1">
              <span>안녕하세요!</span>
              <span>
                대학생 개발자{" "}
                <strong>
                  <u>김규산</u>
                </strong>
                입니다.
              </span>
              <span>
                소통을 통해{" "}
                <strong>
                  <u>사용자</u>
                </strong>
                와{" "}
                <strong>
                  <u>나</u>
                </strong>{" "}
                모두 행복해지는 서비스를 만듭니다.
              </span>
            </div>
          </div>
          <div>
            <Image
              height={160}
              width={160}
              src="/yeahx4.png"
              alt="김규산"
              className={cn(
                "w-40 h-40 md:w-60 md:h-60 rounded-full mb-16",
                "border-white"
              )}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center gap-4 items-center mt-32 text-lg">
        <FaAnglesDown />
        <FaAnglesDown />
        <FaAnglesDown />
      </div> */}
      <div className="bg-yellow-500 py-32 mb-32 mt-48 flex justify-center">
        <div className="max-w-5xl w-full flex flex-col">
          <Title value="Languages" className="text-center mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              {
                name: "JavaScript / TypeScript",
                icon: [
                  <FaSquareJs size={40} />,
                  <BiLogoTypescript size={46} />,
                ],
                good: true,
              },
              {
                name: "HTML / CSS",
                icon: [
                  <i className="devicon-html5-plain text-[40px]" />,
                  <i className="devicon-css3-plain text-[40px]" />,
                ],
                good: true,
              },
              {
                name: "Python",
                icon: [<FaPython size={40} />],
                good: true,
              },
              {
                name: "Java / Kotlin",
                icon: [<FaJava size={40} />, <TbBrandKotlin size={40} />],
                good: true,
              },
              {
                name: "Rust",
                icon: [<FaRust size={40} />],
              },
              {
                name: "C / C++",
                icon: [
                  <i className="devicon-c-plain text-[40px]" />,
                  <SiCplusplus size={40} />,
                ],
              },
              {
                name: "C#",
                icon: [<i className="devicon-csharp-plain text-[40px]" />],
              },
            ].map((lang, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded shadow hover:shadow-md",
                  "transition text-black",
                  lang.good ? "bg-yellow-100" : "bg-white" // TODO: 휘장으로 교체
                )}
              >
                <div className="flex gap-2 justify-center items-center">
                  {...lang.icon}
                </div>
                <p className="text-center font-bold mt-2">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
