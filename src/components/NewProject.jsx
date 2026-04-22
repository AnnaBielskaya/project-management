import { useContext, useRef, useState } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { projectSchema } from "../schemas/project.schema";
import { ProjectsContext } from "./store/projects-context";

const NewProject = () => {
  const { addProject } = useContext(ProjectsContext);
  const [errors, setErrors] = useState({});
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    const validation = projectSchema.safeParse(project);

    if (!validation.success) {
      const formattedErrors = validation.error.format();
      setErrors(formattedErrors);
      return;
    }

    addProject(project);
    setErrors({});
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
        <Input
          type="text"
          ref={title}
          label="Title"
          error={errors.title?._errors[0]}
        />
        <Input
          ref={description}
          label="Description"
          textarea
          error={errors.description?._errors[0]}
        />
        <Input
          type="date"
          ref={dueDate}
          label="Due Date"
          error={errors.dueDate?._errors[0]}
        />
      </div>
    </div>
  );
};

export default NewProject;
