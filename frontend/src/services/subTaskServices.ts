import { api } from "./api";
import { Subtask } from "../utils/types/todoify";

export const subtaskService = {
  getSubtaskByTaskId: async (subtaskId: number, token: string) => {
    const response = await api(token).get<Subtask>(`/subtasks/${subtaskId}`);
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
    const response = await api(token).post(
      `/subtasks/?task_id=${taskId}`,
      subtask
    );
    return response.data;
  },
  updateSubtask: async (subtaskId: number, subtask: Subtask, token: string) => {
    const updatedSubtask = JSON.stringify(subtask);
    const response = await api(token).put(
      `/subtasks/${subtaskId}`,
      updatedSubtask
    );
    return response.data;
  },
  deleteSubtask: async (subtaskId: number) => {
    const token = localStorage.getItem("token");
    if (token) {
      await api(token)
        .delete(`/subtasks/${subtaskId}`)
        .catch((error) => {
          throw Error(error);
        });
    }
  },
};
