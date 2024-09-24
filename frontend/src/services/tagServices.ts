import { api } from "./api";
import { Tag } from "../utils/types/todoify";

export const tagsService = {
  getTags: async () => {
    const response = await api.get<Tag[]>("/tags");
    return response.data;
  },
  createTag: async (name: string, task_id: number) => {
    const response = await api.post<Tag>(`/tags/${task_id}`, { name });
    return response.data;
  },
  updateTag: async (id: number, name: string) => {
    const response = await api.put<Tag>(`/tags/${id}`, { name });
    return response.data;
  },
  deleteTag: async (id: number) => {
    await api.delete(`/tags/${id}`).catch((error) => {
      throw Error(error);
    });
  },
};
