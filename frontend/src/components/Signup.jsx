import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../api/auth";
import BG2 from "../assets/images/bg.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/"); // Rediriger vers la page d'accueil après l'inscription réussie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary to-primary">
      <div className="flex flex-col w-full max-w-md p-8 bg-base-300/25 shadow-2xl shadow-base-100/20 rounded-xl gap-4 backdrop-blur-2xl">
        <h1 className="text-2xl font-bold text-center">Register Now !</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <i className="bi-person-fill w-1/10 px-3 text-primary"></i>
            <input
              type="text"
              className="input w-full rounded-r-lg"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <i className="bi-envelope-fill w-1/10 px-3 text-primary"></i>
            <input
              type="email"
              className="input w-full rounded-r-lg"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <i className="bi-envelope-fill w-1/10 px-3 text-primary"></i>
            <input
              type={show ? "text" : "password"}
              className="input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <label className="swap w-1/10 p-3 text-primary">
              <input type="checkbox" onClick={handleClick} />
              <div className="swap-on">
                <i class="bi-eye-slash-fill "></i>
              </div>
              <div className="swap-off">
                <i class="bi-eye-fill"></i>
              </div>
            </label>
          </label>
          <button
            type="submit"
            className="btn w-full btn-primary hover:ring-1 hover:shadow-md hover:shadow-primary"
          >
            Signin
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-accent hover:underline hover:font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
