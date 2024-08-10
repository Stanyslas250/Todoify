import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
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
    <div className="w-full shadow-sm shadow-current px-8 bg-base-100">
      <div className="navbar">
        <div className="navbar-start">
          <a className="no-animation text-xl font-bold">Todoify</a>
        </div>
        <div className="navbar-center gap-2">
          Welcome Back, <span className="font-bold italic">{name}</span>
        </div>
        <div className="navbar-end gap-2">
          <div className="divider divider-horizontal"></div>
          <label className="swap swap-rotate btn btn-square border-2 border-primary-content rounded-lg">
            <input
              type="checkbox"
              className="theme-controller"
              onClick={toggleTheme}
            />
            <i className="bi bi-moon swap-off text-sm"></i>
            <i className="bi bi-sun swap-on text-sm"></i>
          </label>
          <button
            className="btn btn-square border-2 border-primary-content rounded-lg"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
