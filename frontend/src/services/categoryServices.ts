import { Category } from "../utils/types/todoify";
import { api } from "./api";

export const categoryService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>(
      "/categories/?skip=0&limit=1000"
    );
    return response.data;
  },
  getCatgoryById: async (categoryId: number) => {
    const response = await api.get<Category>(`/categories/${categoryId}`);
    return response.data;
  },
  createCategory: async (category: Category) => {
    const response = await api.post<Category>("/categories", category.name);
    return response.data;
  },
  updateCategory: async (categoryId: number, category: Category) => {
    const response = await api.put<Category>(
      `/categories/${categoryId}`,
      category.name
    );
    return response.data;
  },
  deleteCategory: async (categoryId: number) => {
    await api.delete(`/categories/${categoryId}`).catch((error) => {
      throw Error(error);
    });
  },
};
