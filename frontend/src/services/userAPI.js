import { API, URL } from "./api";
import axios from "axios";
import { toUrlEncoded } from "../utils/UrlEncoded";

export const login = async (username, password) => {
  const params = toUrlEncoded({ username, password });
  const options = {
    method: "POST",
    url: `${URL}/login/access-token`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: params,
  };
  const response = await axios(options);
  if (response.status === 200) {
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } else {
    throw new Error("Login failed");
  }
};
