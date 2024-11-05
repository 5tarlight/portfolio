import { projectList } from "./project/project-data";
import ProjectModal from "./project/project-modal";
import Title from "./title";

export default function Projects() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full">
        <Title value="Projects" className="text-center mb-16" />

        <div>
          {projectList.map((project, index) => (
            <ProjectModal key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
