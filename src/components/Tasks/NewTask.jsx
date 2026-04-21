import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useRef } from "react";

const NewTask = ({ projId, onAddNewTask }) => {
  const newTask = useRef();

  const handleChange = () => {
    console.log(newTask.current.value);
    newTask.current.value = "";
    onAddNewTask(newTask, projId);
  };

  return (
    <div className="w-full flex flex-row gap-4 items-center rounded-sm">
      <Input ref={newTask} type="text" />
      <Button onClick={handleChange} title="Add Task" />
    </div>
  );
};

export default NewTask;
