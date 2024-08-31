import { atom } from "jotai";

import { Category } from "../utils/types/todoify";

const categories: Array<Category> = [];

export const categoriesAtom = atom(categories);

export const countCategoriesAtom = atom(categories.length);

export const selectedCategoryAtom = atom(null);

export const addCategoryAtom = atom(
  (state: Array<Category>, category: Category) => [...state, category]
);

export const updateCategoryAtom = atom(
  (state: Array<Category>, updatedCategory: Category) => {
    return state.map((category) =>
      category.id === updatedCategory.id ? updatedCategory : category
    );
  }
);

export const deleteCategoryAtom = atom(
  (state: Array<Category>, categoryId: number) =>
    state.filter((category) => category.id !== categoryId)
);
