import axios from "axios";

export const getTasks = () => axios.get("/tasks");

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTask = (task) => axios.put(`/tasks/${task.id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
