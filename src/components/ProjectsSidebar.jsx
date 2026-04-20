import React from "react";
import Button from "./common/Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  selectedId,
  onSelectProject,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject} title="+ Add Project" />
      </div>
      <ul className="mt-4">
        {projects.map((proj) => {
          let cssClasses = "";

          if (proj.id === selectedId) {
            cssClasses = "bg-stone-800 text-stone-200";
          }

          return (
            <li key={proj.id}>
              <Button
                className={cssClasses}
                onClick={() => onSelectProject(proj.id)}
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
