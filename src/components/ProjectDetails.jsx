import { useContext } from "react";
import Button from "./common/Button";
import Tasks from "./Tasks/Tasks";
import { ProjectsContext } from "./store/projects-context";

const ProjectDetails = () => {
  const { selectedProjectId, projects, deleteProject } =
    useContext(ProjectsContext);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <Button
            onClick={() => deleteProject(selectedProject.id)}
            variant="transparentBtn"
            title="Delete"
          />
        </div>
        <p className="mb-4 text-stone-400">{selectedProject.description}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.dueDate}
        </p>
      </header>
      <Tasks project={selectedProject} />
    </div>
  );
};

export default ProjectDetails;
