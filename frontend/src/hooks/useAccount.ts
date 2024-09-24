import { useAuth } from "./useAuth";

export function useAccount() {
  const { user: account, token, logout } = useAuth();

  if (!account) {
    throw new Error("User not authenticated");
  }
  return {
    account,
    token,
    logout,
  };
}
