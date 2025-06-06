import cn from "@yeahx4/cn";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaBrain,
  FaComputer,
  FaCrown,
  FaJava,
  FaPython,
  FaRust,
  FaSquareJs,
} from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandKotlin, TbMathIntegralX } from "react-icons/tb";
import Title from "./title";
import { MdWeb } from "react-icons/md";

export default function Languages() {
  return (
    <>
      <div className="bg-yellow-500 py-32 mb-32 mt-48 flex flex-col items-center px-4">
        <div className="max-w-5xl w-full flex flex-col">
          <Title value="Languages" className="text-center mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 my-8">
            {[
              {
                name: "JavaScript / TypeScript",
                icon: [
                  <FaSquareJs size={40} key="js" />,
                  <BiLogoTypescript size={46} key="ts" />,
                ],
                good: true,
              },
              {
                name: "HTML / CSS",
                icon: [
                  <i className="devicon-html5-plain text-[40px]" key="html" />,
                  <i className="devicon-css3-plain text-[40px]" key="css" />,
                ],
                good: true,
              },
              {
                name: "Python",
                icon: [<FaPython size={40} key="python" />],
                good: true,
              },
              {
                name: "Java / Kotlin",
                icon: [
                  <FaJava size={40} key="java" />,
                  <TbBrandKotlin size={40} key="kotlin" />,
                ],
                good: true,
              },
              {
                name: "Rust",
                icon: [<FaRust size={40} key="rust" />],
              },
              {
                name: "C / C++",
                icon: [
                  <i className="devicon-c-plain text-[40px]" key="c" />,
                  <SiCplusplus size={40} key="cpp" />,
                ],
              },
              {
                name: "C#",
                icon: [
                  <i
                    className="devicon-csharp-plain text-[40px]"
                    key="csharp"
                  />,
                ],
              },
            ].map((lang, index) => (
              <div
                key={`${lang.name}-${index}`}
                className={cn(
                  "p-4 rounded shadow hover:shadow-md",
                  "transition text-black bg-white relative"
                )}
              >
                <div className="flex gap-2 justify-center items-center">
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

        <Title value="Frameworks" className="text-center my-16" />
        <div
          className={cn(
            "grid md:grid-cols-4 grid-cols-2 max-w-5xl w-full text-black",
            "gap-x-4 gap-y-8"
          )}
        >
          {[
            {
              element: (
                <i className="devicon-react-original text-[36px]" key="react" />
              ),
              text: "React.js",
              good: true,
            },
            {
              element: (
                <i className="devicon-nextjs-plain text-[36px]" key="next" />
              ),
              text: "Next.js",
              good: true,
            },
            {
              element: (
                <i className="devicon-nodejs-plain text-[36px]" key="node" />
              ),
              text: "Node.js",
              good: true,
            },
            {
              element: (
                <i
                  className="devicon-tailwindcss-plain text-[36px]"
                  key="tailwind"
                />
              ),
              text: "Tailwind CSS",
            },
            {
              element: (
                <i className="devicon-vitejs-plain text-[36px]" key="vite" />
              ),
              text: "Vite.js",
            },
            {
              element: (
                <i className="devicon-spring-plain text-[36px]" key="spring" />
              ),
              text: "Spring",
            },
          ].map((framework, index) => (
            <div
              key={`${framework.text}-${index}`}
              className={cn(
                "p-4 rounded shadow hover:shadow-md flex flex-col items-center",
                "transition text-black bg-white gap-2 relative"
              )}
            >
              {framework.element}
              <span className="text-lg font-bold">{framework.text}</span>
              {framework.good && (
                <div
                  className={cn(
                    "absolute top-[-30px] left-1/2 transform",
                    "-translate-x-1/2 text-white text-4xl"
                  )}
                >
                  <FaCrown />
                </div>
              )}
            </div>
          ))}
        </div>

        <Title value="Interests" className="text-center my-16" />
        <div
          className={cn(
            "grid md:grid-cols-4 grid-cols-2 max-w-5xl w-full text-black",
            "gap-x-4 gap-y-8"
          )}
        >
          {[
            {
              element: <FaComputer size={40} key="algorithm" />,
              text: "Algorithm & PS",
            },
            {
              element: <FaBrain size={40} key="ai" />,
              text: "Artificial Intelligence",
            },
            {
              element: <MdWeb size={40} key="web" />,
              text: "Web",
            },
            {
              element: (
                <i className="devicon-wasm-original text-[36px]" key="wasm" />
              ),
              text: "Web Assembly",
            },
            {
              element: <TbMathIntegralX size={40} key="math" />,
              text: "Mathematics",
            },
          ].map((framework, index) => (
            <div
              key={`${framework.text}-${index}`}
              className={cn(
                "p-4 rounded shadow hover:shadow-md flex flex-col items-center",
                "transition text-black bg-white gap-2 relative"
              )}
            >
              {framework.element}
              <span className="text-lg font-bold">{framework.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
