import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../services/userAPI";
import { LuEyeOff, LuUser2, LuEye, LuMail, LuKeyRound } from "react-icons/lu";
import toast from "react-hot-toast";
import { usePasswordToggler } from "../hooks/usePasswordToggler";

function Signup() {
  const { register, handleSubmit } = useForm();

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
        navigate("/app", { replace: true });
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary to-primary">
      <div className="flex flex-col w-full max-w-md gap-4 p-8 shadow-2xl bg-base-300/25 shadow-base-100/20 rounded-xl backdrop-blur-2xl">
        <h1 className="text-2xl font-bold text-center">Register Now !</h1>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label className="flex items-center justify-center p-0 rounded-lg input input-primary">
            <div className="flex items-center h-full px-3 text-lg w-1/10 text-primary">
              <LuUser2 />
            </div>
            <input
              type="text"
              className="w-full rounded-r-lg input"
              placeholder="username"
              {...register("username", { required: true })}
            />
          </label>
          <label className="flex items-center justify-center p-0 rounded-lg input input-primary">
            <div className="flex items-center h-full px-3 text-lg w-1/10 text-primary">
              <LuMail />
            </div>
            <input
              type="email"
              className="w-full rounded-r-lg input"
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
          </label>
          <label className="flex items-center justify-center p-0 rounded-lg input input-primary">
            <div className="flex items-center h-full px-3 text-lg w-1/10 text-primary">
              <LuKeyRound />
            </div>
            <input
              type={type}
              className="w-full input"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
            <label className="p-3 swap w-1/10 text-primary">
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
            className="w-full btn btn-primary hover:ring-1 hover:shadow-md hover:shadow-primary"
          >
            Signin
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="p-0 btn btn-link text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
