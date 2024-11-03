import cn from "@yeahx4/cn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center mt-16">
      <div
        className={cn(
          "w-[80%] border-t border-t-white h-24 flex justify-between",
          "items-center px-4 md:px-32 text-sm text-white"
        )}
      >
        <div>&copy; {year === 2024 ? year : `2024 - ${year}`} Kim Kyu San.</div>
        <div className="text-2xl">
          <Link href="https://github.com/5tarlight">
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
