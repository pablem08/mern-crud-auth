import { useContext } from "react";
import { useForm } from "react-hook-form";
import TaskContext from "../context/TasksContext";
// import { createTaskRequest } from "../api/tasks";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { useTasks } = useContext(TaskContext);
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
