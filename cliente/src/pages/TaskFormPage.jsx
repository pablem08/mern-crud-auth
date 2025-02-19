import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          name="description"
          id="description"
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
