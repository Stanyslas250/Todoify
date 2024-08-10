import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { getID, signup } from "../api/auth";
import {
  LuEyeOff,
  LuUser2,
  LuEye,
  LuMail,
  LuKey,
  LuKeyRound,
} from "react-icons/lu";

function Signup() {
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
      await signup(data.username, data.email, data.password);
      await getID();
      navigate("/home");
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
              type={show ? "text" : "password"}
              className="input w-full"
              {...register("password", { required: true })}
            />
            <label className="swap w-1/10 p-3 text-primary">
              <input type="checkbox" onClick={handleClick} />
              <div className="swap-on">
                <LuEye />
              </div>
              <div className="swap-off">
                <LuEyeOff />
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
