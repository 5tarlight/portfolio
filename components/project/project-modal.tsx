"use client";

import cn from "@yeahx4/cn";
import Image from "next/image";
import { useState } from "react";

export interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
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
          <p className="text-gray-600">{props.description}</p>
          <div className="flex gap-2 my-2">
            {props.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {open && <ProjectModalContent {...props} setOpen={setOpen} />}
      </div>
    </>
  );
}

function ProjectModalContent({
  title,
  description,
  image,
  technologies,
  github,
  website,
  children,
  setOpen,
}: ProjectModalProps & { setOpen: (open: boolean) => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-lg p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="text-red-500"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-lg my-4"
        />
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 my-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-4 py-2 rounded-lg"
            >
              Website
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
