import Title from "./title";

export default function Projects() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full">
        <Title value="Projects" className="text-center mb-16" />

        <div className="text-center text-4xl font-extrabold">TBD</div>

        {/* <div>
          {projectList.map((project, index) => (
            <ProjectModal key={index} {...project} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
