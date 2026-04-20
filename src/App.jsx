import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleOpenNewProjectForm = () => {
    setProjectsState((prevstate) => {
      return { ...prevstate, selectedProject: null };
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
      />
      {projectsState.selectedProject === null && (
        <NewProject onAddNewProject={handleAddProject} />
      )}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onStartAddProject={handleOpenNewProjectForm} />
      )}
    </main>
  );
}

export default App;
