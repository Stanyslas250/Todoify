import { useState, useEffect } from "react";

export const useThemeToggler = (initialValue = false) => {
  const [toggleState, setToggleState] = useState(initialValue);
  const theme = toggleState ? "dark" : "light";
  const toggle = () => setToggleState(!toggleState);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return { toggle };
};
