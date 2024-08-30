import { atom } from "jotai";

const getUserFromStorage = () => {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

const getTokenFromStorage = () => localStorage.getItem("token") || "";

export const userAtom = atom(getUserFromStorage());
export const isAuthenticatedAtom = atom(!!getUserFromStorage());
export const tokenAtom = atom(getTokenFromStorage());
