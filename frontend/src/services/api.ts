// src/services/api.ts

import axios from "axios";
import { getToken } from "../utils/jwtUtils";

export const API_URL = "http://localhost:8000/api/v1";
const token = getToken();

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
