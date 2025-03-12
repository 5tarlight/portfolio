import Title from "./title";

export default function Prizes() {
  const data: { title: string; duration: string; description?: string }[] = [
    {
      title: "AI응용학과 캠프 1등",
      duration: "2024.07",
    },
    {
      title: "HSUx프로그래머스 코딩대회 대상(1등)",
      duration: "2024.11",
    },
    {
      title: "LG Aimers 6기 수료",
      duration: "2025.01.02 ~ 02.27",
      description:
        "LG Aimers / Data Intelligence 난임 환자 대상 임신 성공 여부 예측",
    },
  ];

  return (
    <div className="py-32 mt-48 flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        <Title value="Prizes & Certifications" className="text-center mb-16" />
      </div>

      <ul className="max-w-5xl w-full px-4">
        {data.map((prize, index) => (
          <li key={index} className="relative mb-8 flex items-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-400"></div>
              <div className="relative z-10 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
            </div>

            <div className="ml-4 flex flex-col w-full">
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">{prize.title}</h3>
                <div className="flex-1 mx-4 h-[1px] bg-gray-400 opacity-50"></div>
                <span className="whitespace-nowrap">{prize.duration}</span>
              </div>

              <span className="text-gray-300">{prize.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
