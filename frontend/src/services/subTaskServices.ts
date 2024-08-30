import { api } from "./api";
import { Subtask } from "../utils/types/todoify";

export const subtaskService = {
  getSubtaskByTaskId: async (taskId: number) => {
    const response = await api.get<Subtask>(`/subtasks`);
    return response.data;
  },
  getSubtasks: async (taskId: number, skip: number, limit: number) => {
    const response = await api.get<Subtask[]>(
      `/subtasks/?skip=${skip}&limit=${limit}`
    );
    return response.data;
  },
  createSubtask: async (taskId: number, subtask: Subtask) => {
    const response = await api.post(`/subtasks`, subtask);
    return response.data;
  },
  updateSubtask: async (
    taskId: number,
    subtaskId: number,
    subtask: Subtask
  ) => {
    const response = await api.put(`/subtasks/${subtaskId}`, subtask);
    return response.data;
  },
  deleteSubtask: async (taskId: number, subtaskId: number) => {
    await api.delete(`/subtasks/${subtaskId}`).catch((error) => {
      throw Error(error);
    });
  },
};
