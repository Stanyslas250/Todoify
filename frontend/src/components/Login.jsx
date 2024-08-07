import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import BG2 from "../assets/images/bg.jpg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home"); // Rediriger vers la page d'accueil après la connexion réussie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center w-full h-screen">
      {/* Image de fond */}
      <div className="relative h-full flex w-1/2">
        <img
          src={BG2}
          className="w-full h-full object-cover carousel-item after"
        />
      </div>
      {/* Formulaire de connexion */}
      <div className="bg-base-100 w-2/3 justify-center items-center flex flex-col gap-8">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-black text-2xl">Welcome back! </h1>
          <h6 className="text-sm font-semibold">
            Organise your life in a few clicks
          </h6>
        </div>

        <div className="flex flex-col items-center gap-3">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="swap">
                <input type="checkbox" onClick={handleClick} />
                <div className="swap-on">
                  <i class="bi bi-eye-slash-fill"></i>
                </div>
                <div className="swap-off">
                  <i class="bi bi-eye-fill"></i>
                </div>
              </label>
            </label>
            <button
              type="submit"
              className="btn btn-primary hover:ring-1 hover:shadow-md hover:shadow-primary"
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-center flex flex-row gap-2">
          Don't you have a account?
          <Link
            to="/signup"
            className="text-accent hover:underline hover:font-bold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
