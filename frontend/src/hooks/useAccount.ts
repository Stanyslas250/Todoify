import { useAuth } from "./useAuth";

export function useAccount() {
  const { user: account } = useAuth();

  if (!account) {
    throw new Error("User not authenticated");
  }
  return {
    account,
  };
}
