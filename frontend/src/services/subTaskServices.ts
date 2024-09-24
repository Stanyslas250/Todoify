import { api } from "./api";
import { Subtask } from "../utils/types/todoify";

export const subtaskService = {
  getSubtaskByTaskId: async (taskId: number, token: string) => {
    const response = await api(token).get<Subtask>(`/subtasks`);
    return response.data;
  },
  getSubtasks: async (taskId: number, token: string) => {
    try {
      const response = await api(token).get<Subtask[]>(
        `/subtasks/?task_id=${taskId}`
      );
      return response.data;
    } catch (err) {
      throw Error(err);
    }
  },
  createSubtask: async (taskId: number, subtask: Subtask, token: string) => {
    const response = await api(token).post(`/subtasks`, subtask);
    return response.data;
  },
  updateSubtask: async (
    taskId: number,
    subtaskId: number,
    subtask: Subtask,
    token: string
  ) => {
    const response = await api(token).put(`/subtasks/${subtaskId}`, subtask);
    return response.data;
  },
  deleteSubtask: async (taskId: number, subtaskId: number, token: string) => {
    await api(token)
      .delete(`/subtasks/${subtaskId}`)
      .catch((error) => {
        throw Error(error);
      });
  },
};
