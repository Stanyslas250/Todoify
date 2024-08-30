import { Task } from "../utils/types/todoify";
import { api } from "./api";

export const tasksService = {
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get<Task[]>(`/tasks/?skip=0&limit=100`);
    return response.data;
  },
  getTaskById: async (taskId: number): Promise<Task | null> => {
    const response = await api.get<Task>(`/tasks/${taskId}`);
    return response.data;
  },
  createTask: async (task: Task): Promise<Task> => {
    const response = await api.post<Task>("/tasks/", task);
    return response.data;
  },
  updateTask: async (taskId: number, task: Task): Promise<Task> => {
    const response = await api.put<Task>(`/tasks/${taskId}`, task);
    return response.data;
  },
  deleteTask: async (taskId: number): Promise<void> => {
    await api.delete(`/tasks/${taskId}`).catch((error) => {
      throw Error(error);
    });
  },
};
