import API from "./api";

export const loadCategories = async () => {
  const skip = 0;
  const limit = 100;

  const response = await API.get(`/categories/?skip=${skip}&limit=${limit}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to load categories");
  }
};

export const loadCategoryById = async (categoryId) => {
  const response = await API.get(`/categories/${categoryId}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to load category");
  }
};

export const createCategory = async (name) => {
  const response = await API.post("/categories", { name });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to create category");
  }
};

export const updateCategory = async (categoryId, name) => {
  const response = await API.put(`/categories/${categoryId}`, { name });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to update category");
  }
};

export const deleteCategory = async (categoryId) => {
  await API.delete(`/categories/${categoryId}`);
  if (response.status === 204) {
    return true;
  } else {
    throw new Error("Failed to delete category");
  }
};
