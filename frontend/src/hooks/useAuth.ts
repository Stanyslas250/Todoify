// src/hooks/useAuth.ts
import { useUserStore } from "../store/userStore";
import { useMutation } from "react-query";
import axios from "axios";
import { toUrlEncoded } from "../utils/UrlEncoded";
export function useAuth() {
  const { user, setUser } = useUserStore();
  const API_URL = "http://localhost:8000/api/v1";

  const login = async (username: string, password: string) => {
    const params = toUrlEncoded({ username, password });
    const options = {
      method: "POST",
      url: `${API_URL}/login/access-token`,
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
  const loginMutation = useMutation(
    (credentials: { username: string; password: string }) =>
      login(credentials.username, credentials.password),
    {
      onSuccess: (data) => {
        const token = data.access_token;
        setUser({ token: token });
        localStorage.setItem("token", token);
      },
      onError: (error) => {
        throw new Error(`Login failed: ${error}`);
      },
    }
  );

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return {
    user,
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isLoading,
  };
}
