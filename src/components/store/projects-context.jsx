import { createContext, useReducer } from "react";

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

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      return { ...state, selectedProjectId: action.payload.id };

    case "OPEN_NEW_PROJECT_FORM":
      return { ...state, selectedProjectId: null };

    case "ADD_PROJECT": {
      const project = {
        ...action.payload.project,
        id: crypto.randomUUID(),
      };

      const updProjects = [...state.projects, project];

      return { ...state, selectedProjectId: project.id, projects: updProjects };
    }

    case "DELETE_PROJECT": {
      const updProjects = state.projects.filter(
        (proj) => proj.id !== action.payload.id,
      );
      return {
        ...state,
        selectedProjectId: undefined,
        projects: updProjects,
      };
    }
    case "ADD_TASK": {
      const task = {
        text: action.payload.task,
        id: crypto.randomUUID(),
      };

      const updatedProjects = state.projects.map((proj) => {
        if (proj.id === state.selectedProjectId) {
          const tasks = proj.tasks ? [...proj.tasks, task] : [task];
          return { ...proj, tasks };
        }
        return proj;
      });
      return {
        ...state,
        projects: updatedProjects,
      };
    }
    default:
      return state;
  }
};

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
