import cn from "@yeahx4/cn";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaBlog, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Typing from "./animations/typing";
import Image from "next/image";

export default function Intro() {
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
              value={["Kim Kyu San"]}
              loop={false}
              className={cn("font-bold text-4xl md:text-6xl opacity-65")}
            />
            <div className="flex flex-col mt-16 text-lg opacity-95 gap-1">
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
                와 함께 행복해지는 서비스를 만듭니다.
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

      <div className="px-4 mt-16 mb-32 flex justify-center">
        <div className="max-w-5xl w-full">
          <div className="flex gap-4 items-center">
            <FaExternalLinkAlt size={40} />
            <h2 className="han-sans text-4xl">Connections</h2>
          </div>
          <div className="flex flex-col mt-16 gap-4">
            <div className="flex items-center gap-4">
              <MdOutlineEmail size={40} />
              <span className="text-lg">developerstarlight@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <FaGithub size={40} />
                <Link
                  href="https://github.com/5tarlight"
                  className="hover:underline"
                >
                  <span className="text-lg flex items-center gap-4">
                    5tarlight
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <FaLinkedin size={40} />
                <Link
                  href="https://www.linkedin.com/in/kyusan-kim-35a6ab336/"
                  className="hover:underline"
                >
                  <span className="text-lg flex items-center gap-4">
                    Kyusan Kim
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <FaBlog size={40} />
                <Link href="https://post.yeahx4.me" className="hover:underline">
                  <span className="text-lg flex items-center gap-4">
                    YEAHx4 Blog
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
