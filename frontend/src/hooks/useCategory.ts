import { useAtom } from "jotai";
import { categoriesAtom, countCategoriesAtom } from "../store/categoryAtoms";
import { categoryService } from "../services/categoryServices";
import { useState } from "react";

export const useCategory = () => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [countCategories, setCountCategories] = useAtom(countCategoriesAtom);


  const fetchCategories = async (token: string) => {
    setLoading(true);
    try {
      const data = await categoryService.getCategories(token);
      if (data) {
        setCountCategories(data.length);
        setCategories(data);
        return data;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    categories,
    setCategories,
    fetchCategories,
    error,
    loading,
    countCategories,
    setCountCategories,
  };
};
