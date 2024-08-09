import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  // Toogle theme
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "business" ? "nord" : "business");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const onLogout = () => {
    logout();
    navigate("/"); // Rediriger vers la page de connexion après la déconnexion;
  };

  return (
    <div className="justify-center w-full mx-3 shadow-sm shadow-current mb-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="no-animation text-xl font-bold">Todoify</a>
        </div>
        <div className="flex-none gap-2">
          <label className="swap swap-rotate btn btn-square border-2 border-primary-content rounded-lg">
            <input
              type="checkbox"
              className="theme-controller"
              onClick={toggleTheme}
            />
            <i className="bi bi-moon swap-off text-lg"></i>
            <i className="bi bi-sun swap-on text-lg"></i>
          </label>
          <button
            className="btn btn-square border-2 border-primary-content rounded-lg"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
