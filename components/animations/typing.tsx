"use client";

import { ReactTyped } from "react-typed";

export default function Typing({ value }: { value: string[] }) {
  return <ReactTyped strings={value} />;
}
