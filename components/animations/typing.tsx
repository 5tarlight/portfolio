"use client";

import { ReactTyped } from "react-typed";

export default function Typing({
  value,
  loop,
  typingSpeed = 50,
  backSpeed = 50,
  smartBackspace,
  startWhenVisible,
  className,
}: {
  value: string[];
  loop?: boolean;
  typingSpeed?: number;
  backSpeed?: number;
  smartBackspace?: boolean;
  startWhenVisible?: boolean;
  className?: string;
}) {
  return (
    <ReactTyped
      strings={value}
      loop={loop}
      typeSpeed={typingSpeed}
      backSpeed={backSpeed}
      smartBackspace={smartBackspace}
      startWhenVisible={startWhenVisible}
      className={className}
    />
  );
}
