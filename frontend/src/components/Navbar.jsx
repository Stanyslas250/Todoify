import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { LuLogOut, LuMoonStar, LuSun } from "react-icons/lu";
function Navbar() {
  const navigate = useNavigate();

  // Toogle theme
  const [theme, setTheme] = useState();
  const toggleTheme = () => {
    setTheme(theme === "nord" ? "business" : "nord");
  };

  const name = "Stanyslas Moubiligui"; // Remplacer par le nom de l'utilisateur

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const onLogout = () => {
    logout();
    navigate("/"); // Rediriger vers la page de connexion après la déconnexion;
  };

  return (
    <div className="w-full shadow-sm shadow-current bg-primary">
      <div className="navbar">
        <div className="navbar-start">
          <a className="no-animation text-xl font-bold">Todoify</a>
        </div>
        <div className="navbar-center gap-2">
          Welcome Back, <span className="font-bold italic">{name}</span>
        </div>
        <div className="navbar-end gap-1">
          <div className="divider divider-horizontal"></div>

          <label className="swap swap-rotate btn btn-square btn-primary rounded-lg">
            <input
              type="checkbox"
              className="theme-controller"
              onClick={toggleTheme}
            />
            <LuMoonStar className="swap-on text-xl" />
            <LuSun className="swap-off text-xl" />
          </label>
          <button
            className="btn btn-square btn-primary rounded-lg text-xl"
            onClick={onLogout}
          >
            <LuLogOut />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;