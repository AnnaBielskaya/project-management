import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {projectsState.selectedProject && <NewProject />}
      {!projectsState.selectedProject && <NoProjectSelected />}
    </main>
  );
}

export default App;
