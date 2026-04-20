import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button variant="transparentBtn" title="Cancel" />
        </li>
        <li>
          <Button variant="blackBtn" title="Save" />
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
