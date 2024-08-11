import API from "./api"; // Importez votre API dans app.js
const API_URL = "http://localhost:8000/api/v1"; // Remplacez par l'URL de votre API

const toUrlEncoded = (obj) => {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");
};

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/login/access-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: toUrlEncoded({ username, password }),
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.access_token);
    return data;
  } else {
    throw new Error(data.detail || "Login failed");
  }
};

export const signup = async (username, email, password) => {
  const response = await fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.access_token);
  } else {
    throw new Error(data.detail || "Signup failed");
  }
  return data;
};

export const logout = () => {
  localStorage.clear();
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getID = async () => {
  const token = getToken();
  const response = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to get user ID");
  }
  const data = await response.json();
  localStorage.setItem("UUID", data.id);
  return data.id;
};

export const getUserName = async () => {
  const response = await API.get(`/users/me`);
  if (response.status === 200) {
    return response.data.username;
  } else {
    throw new Error("Failed to get user name");
  }
};
