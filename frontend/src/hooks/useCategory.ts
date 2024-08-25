// src/hooks/useCategories.ts

import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/api";
import { Category } from "../utils/types/todoify";

export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: categoryService.getCategories,
  });
};
