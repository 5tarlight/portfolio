"use client";

import cn from "@yeahx4/cn";
import { useState } from "react";

export interface ProjectModalProps {
  title: string;
  image?: string;
  tags: string[];
  github?: string;
  website?: string;
  children?: React.ReactNode;
}

export default function ProjectModal(props: ProjectModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "w-full p-4 rounded-md bg-white flex flex-col-reverse md:flex-row",
          "hover:cursor-pointer"
        )}
        onClick={() => setOpen(true)}
      >
        <div>
          <h3 className="text-xl font-bold text-black">{props.title}</h3>
          <div className="flex gap-2 my-2">
            {props.tags.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {open && <ProjectModalContent setOpen={setOpen} />}
      </div>
    </>
  );
}

function ProjectModalContent({ setOpen }: { setOpen: (open: boolean) => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center",
        "justify-center"
      )}
      onClick={() => setOpen(false)}
    ></div>
  );
}
