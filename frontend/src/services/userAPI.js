import { API_URL } from "./api";
import axios from "axios";
import { toUrlEncoded } from "../utils/UrlEncoded";


export const login = async (username, password) => {
  const params = toUrlEncoded({ username, password });
  const options = {
    method: "POST",
    url: `${API_URL}/login/access-token`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: params,
  };
  const response = await axios(options)
    .then(async (response) => {
      const user = await axios.get(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });
      return { user: user.data, token: response.data.access_token };
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 400) {
          console.log("Erreur 400: ", error.response.data);
          throw new Error(error.response.data.detail);
        }
      } else if (error.request) {
        throw new Error("Network error");
      } else {
        throw new Error(error.message);
      }
      throw new Error(error.message);
    });
  return response;
};

export const signup = async (username, email, password) => {
  const params = { username, password, email };
  const options = {
    method: "POST",
    url: `${API_URL}/users/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(params),
  };
  const response = await axios(options);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Registration failed");
  }
};
