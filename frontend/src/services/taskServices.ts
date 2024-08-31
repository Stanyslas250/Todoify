import { Task } from "../utils/types/todoify";
import { api } from "./api";

export const tasksService = {
  getTasks: async (token: string): Promise<Task[]> => {
    const response = await api(token).get<Task[]>(`/tasks/?skip=0&limit=100`);
    return response.data;
  },
  getTaskById: async (taskId: number, token: string): Promise<Task | null> => {
    const response = await api(token).get<Task>(`/tasks/${taskId}`);
    return response.data;
  },
  createTask: async (task: Task, token: string): Promise<Task> => {
    const response = await api(token).post<Task>("/tasks/", task);
    return response.data;
  },
  updateTask: async (
    taskId: number,
    task: Task,
    token: string
  ): Promise<Task> => {
    const response = await api(token).put<Task>(`/tasks/${taskId}`, task);
    return response.data;
  },
  deleteTask: async (taskId: number, token: string): Promise<void> => {
    await api(token)
      .delete(`/tasks/${taskId}`)
      .catch((error) => {
        throw Error(error);
      });
  },
};
