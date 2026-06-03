"use client";

interface TypingProps {
  value: string[];
  loop?: boolean;
  typingSpeed?: number;
  backSpeed?: number;
  smartBackspace?: boolean;
  startWhenVisible?: boolean;
  className?: string;
}

export default function Typing({
  value,
  className,
}: TypingProps) {
  return (
    <span className={className}>
      {value[0] ?? ""}
      <span aria-hidden className="animate-pulse opacity-70">
        |
      </span>
    </span>
  );
}
