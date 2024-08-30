import { useForm } from "react-hook-form";
import { login } from "../services/userAPI";
import BG2 from "../assets/image.png";
import { LuEye, LuEyeOff, LuKeyRound, LuMail } from "react-icons/lu";
import toast from "react-hot-toast";
import { usePasswordToggler } from "../hooks/usePasswordToggler";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const { type, handlePasswordVisibility } = usePasswordToggler();
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
    } catch {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center w-full h-screen">
      {/* Image de fond */}
      <div className="relative flex w-1/2 h-full">
        <img
          src={BG2}
          className="object-cover w-full h-full carousel-item after"
        />
      </div>
      {/* Formulaire de connexion */}
      <div className="flex flex-col items-center justify-center w-2/3 gap-8 bg-base-100">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-black">Welcome back! </h1>
          <h6 className="text-sm font-semibold">
            Organise your life in a few clicks
          </h6>
        </div>

        <div className="flex flex-col items-center gap-3">
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-row items-center justify-around gap-2 input input-bordered">
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
            <label className="flex items-center gap-2 input input-bordered">
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
        <div className="flex flex-row items-center gap-2">
          <p>Don&apos;t you have a account?</p>
          <Link
            to={"/signup"}
            className="p-0 btn btn-link text-secondary hover:text-primary"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
