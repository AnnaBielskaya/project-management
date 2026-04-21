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

  const handleAddTask = (task, id) => {
    setProjectsState((prevstate) => {
      const newTask = {
        text: task,
        id: crypto.randomUUID(),
      };

      const updatedProjects = prevstate.projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            tasks: project.tasks ? [...project.tasks, newTask] : [newTask],
          };
        }
        return project;
      });

      return { ...prevstate, selectedProject: id, projects: updatedProjects };
    });
  };

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
        <ProjectDetails
          project={selectedProject}
          onDeleteProject={handleDeleteProject}
          onAddNewTask={handleAddTask}
        />
      )}
    </main>
  );
}

export default App;
