// src/store/userStore.ts
import { create } from "zustand";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface User {
  token: string;
  // Ajoutez d'autres propriétés utilisateur si nécessaire
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
