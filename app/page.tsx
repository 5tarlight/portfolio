import Typing from "@/components/animations/typing";
import cn from "@yeahx4/cn";

export default function Home() {
  return (
    <div className="flex justify-center mt-32 px-4">
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
            <span>대학생 개발자 김규산입니다.</span>
            <span>
              소통을 통해 <strong>나</strong>부터 만족할 수 있는 소프트웨어를
              만듭니다.
            </span>
          </div>
        </div>
        <div>
          <img
            src="/yeahx4.png"
            alt="김규산"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
