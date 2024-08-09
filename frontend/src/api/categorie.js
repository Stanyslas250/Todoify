import axios from "axios";

const API_URL = "https://localhost:8000/api/v1/categories";
const token = localStorage.getItem("token"); // Assurez-vous

// Configurer axios avec l'autorisation et l'ID utilisateur
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`, // Assuming JWT token for auth
  },
});

// Récupérer toutes les catégories
export const getCategories = async () => {
  const response = await fetch(`${API_URL}/?skip=0&limit=100`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to get categories");
  }
  return data;
};

// Récupérer une catégorie par ID
export const getCategory = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

// Créer une nouvelle catégorie
export const createCategory = async (categoryName) => {
  const response = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: categoryName }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.detail || "Creating failed");
  }
};

// Mettre à jour une catégorie
export const updateCategory = async (id, categoryName) => {
  try {
    const response = await axiosInstance.put(`/${id}`, {
      name: categoryName,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

// Supprimer une catégorie
export const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
