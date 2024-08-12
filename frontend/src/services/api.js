import axios from "axios";

const token = localStorage.getItem("token");

export const URL = "http://localhost:8000/api/v1";

export const API = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
