import Input from "../common/Input";
import Button from "../common/Button";
import { useContext, useRef } from "react";
import { ProjectsContext } from "../store/projects-context";

const NewTask = () => {
  const { addTask } = useContext(ProjectsContext);

  const taskRef = useRef();

  const handleChange = () => {
    const enteredTask = taskRef.current.value;
    if (enteredTask.trim().length === 0) {
      return;
    }
    addTask(enteredTask);
    taskRef.current.value = "";
  };

  return (
    <div className="w-full flex flex-row gap-4 items-center rounded-sm">
      <Input ref={taskRef} type="text" />
      <Button onClick={handleChange} title="Add Task" />
    </div>
  );
};

export default NewTask;
