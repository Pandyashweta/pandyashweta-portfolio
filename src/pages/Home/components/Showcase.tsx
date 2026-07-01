import { showcaseProjects } from "../../../data/projects";
import ProjectCard from "../../../components/common/ProjectCard";

export default function Showcase() {
  const getCardLink = (projectId: string) => {
    if (projectId === "spatial-flows") return "/projects";
    if (projectId === "illustrations") return "/projects/illustrations";
    if (projectId === "qualifications") return "/qualifications";
    return `/projects/${projectId}`;
  };

  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 items-stretch h-full flex-grow">
        {showcaseProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            to={getCardLink(project.id)}
            paddingClass="p-8"
          />
        ))}
      </div>
    </div>
  );
}
