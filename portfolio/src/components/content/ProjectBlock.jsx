import MockImage from "./MockImage";
import ProjDesc from "./ProjDesc";

function ProjectBlock({ projects, variant = "stacked", columns = 2 }) {
  if (variant === "columns") {
    return (
      <div
        className={`mt-12 grid gap-6 px-[5%] grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`}
      >
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-start">
            <MockImage
              src={project.src}
              link={project.link}
              alt={project.alt}
              height={project.height}
              width="100%"
            />
            <ProjDesc
              title={project.title}
              year={project.year}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col px-[5%]">
      {projects.map((project) => (
        <div key={project.id} className="mt-5flex flex-col">
          <MockImage
            src={project.src}
            link={project.link}
            alt={project.alt}
            height={project.height}
            width="100%"
          />
          <ProjDesc
            title={project.title}
            year={project.year}
            desc={project.desc}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectBlock;
