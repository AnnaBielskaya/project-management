import NewTask from "./NewTask";

const Tasks = ({ project }) => {
  if (!project) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold text-stone-800 mb-4">Tasks</h2>
      <NewTask />

      {(!project.tasks || project.tasks.length === 0) && (
        <p className="text-stone-800 my-4">
          The project does not have any tasks yet.
        </p>
      )}

      {project.tasks && project.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task) => (
            <li key={task.id} className="my-4 border-b-2 pb-2">
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
