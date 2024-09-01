import { useAtom } from "jotai";
import {
  countCategoriesAtom,
  setCategoriesAtom,
  categoriesWithColorAtom,
} from "../store/categoryAtoms";
import { categoryService } from "../services/categoryServices";
import { useState } from "react";

export const useCategory = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [categoriesWithColor] = useAtom(categoriesWithColorAtom);
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

  return {
    categoriesWithColor,
    setCategoriesColor,
    fetchCategories,
    error,
    loading,
    countCategories,
    setCountCategories,
  };
};
