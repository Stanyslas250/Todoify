// src/services/api.ts

import axios from "axios";

export const API_URL = "http://localhost:8000/api/v1";

export const api = (token: string) =>
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
