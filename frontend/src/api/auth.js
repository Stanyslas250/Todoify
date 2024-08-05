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
  } else {
    throw new Error(data.detail || "Login failed");
  }
  return data;
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
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};
