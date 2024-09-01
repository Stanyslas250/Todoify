import { atom } from "jotai";

import { Category, CategoryWithColor } from "../utils/types/todoify";
import { colorUtils } from "../utils/colorUtils";

const categories: Array<Category> = [];
export const categoriesWithColorAtom = atom<CategoryWithColor[]>([]);

export const countCategoriesAtom = atom(categories.length);

export const selectedCategoryAtom = atom(null);

export const setCategoriesAtom = atom(
  null, // On n'a pas besoin de getter ici
  (get, set, categories: Category[]) => {
    const existingCategories = get(categoriesWithColorAtom);
    const updatedCategories = categories.map((category) => {
      const existingCategory = existingCategories.find(
        (c) => c.id === category.id
      );
      return {
        ...category,
        color:
          existingCategory?.color || colorUtils.getRandomColor(category.id),
      };
    });
    set(categoriesWithColorAtom, updatedCategories);
  }
);
