import React, { useState, useEffect } from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function Them() {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <label className="swap swap-rotate items-center" onChange={handleToggle}>
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="synthwave" />

        {/* sun icon */}
        <img src={sun} alt="sun" className="swap-off h-8 w-8" />

        {/* moon icon */}
        <img src={moon} alt="moon" className="swap-on h-8 w-8" />
      </label>
    </>
  );
}
