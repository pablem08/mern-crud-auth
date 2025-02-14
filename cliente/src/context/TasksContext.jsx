import { createContext, useContext, useState } from "react";
import { createTaskRequest } from "../api/tasks";

const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
  const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
  };

  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([]);
  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, useTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
