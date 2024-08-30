import { useAtom } from "jotai";
import { userAtom, isAuthenticatedAtom, tokenAtom } from "../store/authAtoms";
import { login as loginService } from "../services/userAPI";
import { setToken, removeToken } from "../utils/jwtUtils";

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [token, setTokenAtom] = useAtom(tokenAtom);

  const login = async (email: string, password: string) => {
    try {
      const data = await loginService(email, password);
      const userDetail = {
        username: data.user.username,
        email: data.user.email,
      };
      setUser(userDetail);
      setIsAuthenticated(true);
      setTokenAtom(data.token);
      setToken({ token: data.token, user: userDetail });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setTokenAtom("");
    removeToken();
  };

  return { user, isAuthenticated, token, login, logout };
};
