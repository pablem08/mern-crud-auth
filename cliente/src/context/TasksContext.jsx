import { createContext, useContext, useState } from "react";
import { createTaskRequest } from "../api/tasks";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {


  
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([]);


  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask}}>
      {children}
    </TaskContext.Provider>
  );
}


