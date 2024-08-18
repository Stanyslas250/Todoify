import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../services/userAPI";
import {
  LuEyeOff,
  LuUser2,
  LuEye,
  LuMail,
  LuKey,
  LuKeyRound,
} from "react-icons/lu";
import toast from "react-hot-toast";
import { usePasswordToggler } from "../hooks/usePasswordToggler";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Toggle password visibility
  const { type, handlePasswordVisibility } = usePasswordToggler();

  //Login form submission handler
  const onSubmit = async (data) => {
    try {
      await signup(data.username, data.email, data.password);
      setTimeout(() => {
        toast.success("Account created successfully!");
        navigate("/app");
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary to-primary">
      <div className="flex flex-col w-full max-w-md p-8 bg-base-300/25 shadow-2xl shadow-base-100/20 rounded-xl gap-4 backdrop-blur-2xl">
        <h1 className="text-2xl font-bold text-center">Register Now !</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <div className="flex w-1/10 px-3 text-primary text-lg h-full items-center">
              <LuUser2 />
            </div>
            <input
              type="text"
              className="input w-full rounded-r-lg"
              placeholder="username"
              {...register("username", { required: true })}
            />
          </label>
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <div className="flex w-1/10 px-3 text-primary text-lg h-full items-center">
              <LuMail />
            </div>
            <input
              type="email"
              className="input w-full rounded-r-lg"
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
          </label>
          <label className="input input-primary flex items-center justify-center p-0 rounded-lg">
            <div className="flex w-1/10 px-3 text-primary text-lg h-full items-center">
              <LuKeyRound />
            </div>
            <input
              type={type}
              className="input w-full"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
            <label className="swap w-1/10 p-3 text-primary">
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
            className="btn w-full btn-primary hover:ring-1 hover:shadow-md hover:shadow-primary"
          >
            Signin
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="btn btn-link text-primary p-0">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
