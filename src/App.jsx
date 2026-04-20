import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    console.log("Henlo");
    setProjectsState((prevstate) => {
      return { ...prevstate, selectedProject: null };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {projectsState.selectedProject === null && <NewProject />}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onStartAddProject={handleAddProject} />
      )}
    </main>
  );
}

export default App;
