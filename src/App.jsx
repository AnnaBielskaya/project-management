import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject,
  );

  console.log(selectedProject);

  const handleOpenNewProjectForm = () => {
    setProjectsState((prevstate) => {
      return { ...prevstate, selectedProject: null };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevstate) => {
      return { ...prevstate, selectedProject: id };
    });
  };

  const handleAddProject = (projectData) => {
    const projId = Math.random();
    setProjectsState((prev) => {
      const newProject = {
        ...projectData,
        id: projId,
      };

      return {
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={handleOpenNewProjectForm}
        onSelectProject={handleSelectProject}
      />
      {projectsState.selectedProject === null && (
        <NewProject onAddNewProject={handleAddProject} />
      )}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onStartAddProject={handleOpenNewProjectForm} />
      )}
      {projectsState.selectedProject && (
        <ProjectDetails project={selectedProject} />
      )}
    </main>
  );
}

export default App;
