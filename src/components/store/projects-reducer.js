export const projectsReducer = (state, action) => {
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
