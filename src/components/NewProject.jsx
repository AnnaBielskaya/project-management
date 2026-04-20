import React, { useRef } from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const NewProject = ({ onAddNewProject }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation

    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button variant="transparentBtn" title="Cancel" />
        </li>
        <li>
          <Button onClick={handleSave} variant="blackBtn" title="Save" />
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
