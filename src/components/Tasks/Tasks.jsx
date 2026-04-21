import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, projId, onAddNewTask }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-stone-800 mb-4">Tasks</h2>
      <NewTask projId={projId} onAddNewTask={onAddNewTask} />
      <p className="text-stone-800 mb-4">
        The project does not have any tasks yet
      </p>
      <ul></ul>
    </section>
  );
};

export default Tasks;
