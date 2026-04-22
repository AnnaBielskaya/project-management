import { createContext, useReducer } from "react";
import { projectsReducer } from "./projects-reducer";

const INITIAL_STATE = {
  selectedProjectId: undefined,
  projects: [
    {
      id: "p1",
      title: "Learn React Context",
      description: "Keep it simple!",
    },
    {
      id: "p2",
      title: "Learn Redux Toolkit",
      description: "You're gonna struggle with this one for real!",
    },
  ],
};

export const ProjectsContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  selectProject: () => {},
  openNewProjectForm: () => {},
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
});

export const ProjectsContextProvider = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    INITIAL_STATE,
  );

  const handleOpenNewProjectForm = () => {
    projectsDispatch({ type: "OPEN_NEW_PROJECT_FORM", payload: null });
  };

  const handleSelectProject = (id) => {
    projectsDispatch({
      type: "SELECT_PROJECT",
      payload: { id },
    });
  };
  const handleAddTask = (task) => {
    projectsDispatch({
      type: "ADD_TASK",
      payload: { task },
    });
  };
  const handleAddProject = (project) => {
    projectsDispatch({
      type: "ADD_PROJECT",
      payload: { project },
    });
  };
  const handleDeleteProject = (id) => {
    projectsDispatch({
      type: "DELETE_PROJECT",
      payload: { id },
    });
  };

  const ctxtValue = {
    ...projectsState,
    selectProject: handleSelectProject,
    openNewProjectForm: handleOpenNewProjectForm,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    addTask: handleAddTask,
  };

  return (
    <ProjectsContext.Provider value={ctxtValue}>
      {children}
    </ProjectsContext.Provider>
  );
};
