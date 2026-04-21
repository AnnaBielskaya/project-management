import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useRef } from "react";

const NewTask = ({ projId, onAddNewTask }) => {
  const taskRef = useRef();

  const handleChange = () => {
    const enteredTask = taskRef.current.value;
    if (enteredTask.trim().length === 0) {
      return;
    }
    onAddNewTask(enteredTask, projId);
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
