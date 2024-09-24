import { useState, useEffect } from "react";

export const useThemeToggler = () => {
  // Initialiser le thème en fonction du local storage ou du thème du navigateur
  const getInitialTheme = () => {
    // Vérifier s'il y a un thème dans le local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Sinon, utiliser le thème préféré du navigateur
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Sauvegarder le thème dans le local storage à chaque changement
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fonction pour basculer entre les thèmes
  const toggle = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return { toggle };
};
