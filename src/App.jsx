import { useContext } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectDetails from "./components/ProjectDetails";
import { ProjectsContext } from "./components/store/projects-context";

function App() {
  const { selectedProjectId } = useContext(ProjectsContext);

  const handleAddProject = (projectData) => {
    const projId = crypto.randomUUID();
    setProjectsState((prevstate) => {
      const newProject = {
        ...projectData,
        id: projId,
      };

      return {
        selectedProject: undefined,
        projects: [...prevstate.projects, newProject],
      };
    });
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prev) => {
      return {
        selectedProject: undefined,
        projects: prev.projects.filter((proj) => proj.id !== id),
      };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {selectedProjectId === null && <NewProject />}
      {selectedProjectId === undefined && <NoProjectSelected />}
      {selectedProjectId && <ProjectDetails />}
    </main>
  );
}

export default App;
