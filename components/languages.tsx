import cn from "@yeahx4/cn";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCrown, FaJava, FaPython, FaRust, FaSquareJs } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import Title from "./title";

export default function Languages() {
  return (
    <div className="bg-yellow-500 py-32 mb-32 mt-48 flex justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col">
        <Title value="Languages" className="text-center mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 my-8">
          {[
            {
              name: "JavaScript / TypeScript",
              icon: [<FaSquareJs size={40} />, <BiLogoTypescript size={46} />],
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
                "transition text-black bg-white relative"
              )}
            >
              <div
                key={`inner-${index}`}
                className="flex gap-2 justify-center items-center"
              >
                {...lang.icon}
              </div>
              {lang.good && (
                <div
                  className={cn(
                    "absolute top-[-30px] left-1/2 transform",
                    "-translate-x-1/2 text-white text-4xl"
                  )}
                >
                  <FaCrown />
                </div>
              )}
              <p className="text-center font-bold mt-2">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
