import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  selectedProjectId: undefined,
  projects: [
    {
      id: "p1",
      title: "Learn React Context",
      description: "Keep it simple!",
    },
  ],
};

export const ProjectsContext = createContext({
  selectedProject: undefined,
  projects: [],
  selectProject: () => {},
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
});

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      //TODO

      return;

    case "ADD_PROJECT":
      //TODO

      return;
    case "DELETE_PROJECT":
      //TODO

      return;
    case "ADD_TASK":
      //TODO

      return;
  }
};

export const ProjectsContextProvider = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    INITIAL_STATE,
  );

  const handleSelectProject = (id) => {
    projectsDispatch({
      type: "SELECT_PROJECT",
      payload: { id },
    });
  };
  const handleAddTask = (id, task) => {
    projectsDispatch({
      type: "ADD_TASK",
      payload: { id, task },
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
