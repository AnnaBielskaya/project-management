import { useContext } from "react";
import Button from "./common/Button";
import { ProjectsContext } from "./store/projects-context";

const ProjectsSidebar = () => {
  const { projects, selectProject, openNewProjectForm } =
    useContext(ProjectsContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={openNewProjectForm} title="+ Add Project" />
      </div>
      <ul className="mt-4">
        {projects.map((proj) => {
          return (
            <li key={proj.id}>
              <Button
                onClick={() => {
                  selectProject(proj.id);
                }}
                variant="menuBtn"
                title={proj.title}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
