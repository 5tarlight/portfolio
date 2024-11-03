import cn from "@yeahx4/cn";

export default function Title({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <div className="flex justify-center">
      <h2 className={cn(className, "border-b-8 han-sans text-4xl px-4 py-4")}>
        {value}
      </h2>
    </div>
  );
}
