import React from "react";
import { Link } from "react-router-dom";
import { logout } from "./api/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/"); // Rediriger vers la page de connexion après la déconnexion;
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <button className="btn btn-primary" onClick={onLogout}>
        <i className="bi-box-arrow-right"></i>
        Logout
      </button>
    </div>
  );
}

export default App;
