import { Category } from "../utils/types/todoify";
import { api } from "./api";

export const categoryService = {
  getCategories: async (token: string): Promise<Category[]> => {
    const response = await api(token).get<Category[]>(
      "/categories/?skip=0&limit=1000"
    );
    return response.data;
  },
  getCatgoryById: async (categoryId: number, token: string) => {
    const response = await api(token).get<Category>(
      `/categories/${categoryId}`
    );
    return response.data;
  },
  createCategory: async (category: Category, token: string) => {
    const response = await api(token).post<Category>("/categories", category);
    return response.data;
  },
  updateCategory: async (
    categoryId: number,
    category: Category,
    token: string
  ) => {
    const response = await api(token).put<Category>(
      `/categories/${categoryId}`,
      category.name
    );
    return response.data;
  },
  deleteCategory: async (categoryId: number, token: string) => {
    await api(token)
      .delete(`/categories/${categoryId}`)
      .catch((error) => {
        throw Error(error);
      });
  },
};
