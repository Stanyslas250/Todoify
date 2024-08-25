// src/services/api.ts

import axios from "axios";
import { Category } from "../utils/types/todoify";

export const API_URL = "http://localhost:8000/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const categoryService = {
  getCategories: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>(
      "/categories/?skip=0&limit=1000"
    );
    return response.data;
  },
};
