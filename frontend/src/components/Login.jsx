import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { login, getID } from "../api/auth";
import "bootstrap-icons/font/bootstrap-icons.css";
import BG2 from "../assets/images/bg.jpg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Toggle password visibility
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //Login form submission handler
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      await getID();
      navigate("/home");
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
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="input input-bordered flex items-center gap-2">
              <i className="bi-envelope-fill text-current"></i>
              <input
                type="text"
                className="grow"
                placeholder="you@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <i className="bi-key-fill text-current rotate-45"></i>
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <label className="swap">
                <input type="checkbox" onClick={handleClick} />
                <div className="swap-on">
                  <i className="bi bi-eye-slash"></i>
                </div>
                <div className="swap-off">
                  <i className="bi bi-eye"></i>
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
