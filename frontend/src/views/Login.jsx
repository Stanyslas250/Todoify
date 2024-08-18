import { useForm } from "react-hook-form";
import { login } from "../services/userAPI";
import BG2 from "../assets/image.png";
import { LuEye, LuEyeOff, LuKeyRound, LuMail } from "react-icons/lu";
import toast from "react-hot-toast";
import { usePasswordToggler } from "../hooks/usePasswordToggler";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const { type, handlePasswordVisibility } = usePasswordToggler();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Login form submission handler
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      const toastId = toast.loading("Loading...");
      setTimeout(() => {
        toast.dismiss(toastId);
        toast.success("Logged in successfully!");
        navigate("/app");
      }, 1000);
    } catch (err) {
      setError(err.message);
      toast.error("Invalid credentials");
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
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="input input-bordered flex flex-row items-center justify-around gap-2">
              <LuMail />
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
              <LuKeyRound />
              <input
                type={type}
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <label className="swap">
                <input type="checkbox" onClick={handlePasswordVisibility} />
                <div className="swap-on">
                  <LuEyeOff />
                </div>
                <div className="swap-off">
                  <LuEye />
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
        <div className="flex flex-row gap-2 items-center">
          <p>Don't you have a account?</p>
          <Link
            to={"/signup"}
            className="btn btn-link text-secondary p-0 hover:text-primary"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
