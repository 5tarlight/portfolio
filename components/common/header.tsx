import cn from "@yeahx4/cn";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={cn(
        "w-full flex justify-between items-center shadow-md",
        "h-16 px-4 md:px-32 sticky top-0 bg-[#292929] z-10 mb-8"
      )}
    >
      <div className="flex han-sans">
        <Link href="#" className="font-bold text-2xl">
          Kim Kyu San
        </Link>
      </div>
      <div>Navigations...</div>
    </header>
  );
}
