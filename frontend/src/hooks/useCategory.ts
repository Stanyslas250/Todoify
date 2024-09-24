import { useAtom } from "jotai";
import {
  countCategoriesAtom,
  setCategoriesAtom,
  categoriesWithColorAtom,
} from "../store/categoryAtoms";
import { categoryService } from "../services/categoryServices";
import { useState } from "react";
import { Category } from "../utils/types/todoify";

export const useCategory = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [categoriesWithColor, setCategoriesWithColor] = useAtom(
    categoriesWithColorAtom
  );
  const [, setCategoriesColor] = useAtom(setCategoriesAtom);

  const [countCategories, setCountCategories] = useAtom(countCategoriesAtom);

  const fetchCategories = async (token: string) => {
    setLoading(true);
    try {
      const data = await categoryService.getCategories(token);
      if (data) {
        setCountCategories(data.length);
        return data;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (token: string, category: Category) => {
    try {
      const data = await categoryService.createCategory(category, token);
      setCategoriesWithColor([
        ...categoriesWithColor,
        { ...data, color: "#000" },
      ]);
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    categoriesWithColor,
    setCategoriesColor,
    fetchCategories,
    error,
    loading,
    countCategories,
    setCountCategories,
    addCategory,
  };
};
