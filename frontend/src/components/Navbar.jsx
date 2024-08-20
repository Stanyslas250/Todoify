import {
  LuArrowRightToLine,
  LuGithub,
  LuMoonStar,
  LuSun,
} from "react-icons/lu";
import { useThemeToggler } from "../hooks/useThemeToggler";
import { Link } from "react-router-dom";

export default function Navbar({ className }) {
  // Toogle theme
  const { toggle } = useThemeToggler(true);

  return (
    <div className={className}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li className="gap-3 mt-3">
              <Link className="btn btn-outline btn-primary" to={"/signup"}>
                Open your account
              </Link>
              <Link className="flex items-center btn btn-primary" to={"/login"}>
                Signin
                <LuArrowRightToLine />
              </Link>
            </li>
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">
          <img
            src="../../public/Todoify.svg"
            className="hidden h-1/2 lg:block"
          />
          Todoify
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 4</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex invisible gap-1 lg:visible">
          <a
            href="http://github.com/stanyslas250"
            className="text-xl btn btn-square text-primary "
          >
            <LuGithub />
          </a>
          <label className="rounded-lg swap swap-rotate btn btn-square btn-primary">
            <input
              type="checkbox"
              className="theme-controller"
              onClick={toggle}
            />
            <LuMoonStar className="text-xl swap-on" />
            <LuSun className="text-xl swap-off" />
          </label>

          <div className="divider divider-horizontal divider-primary"></div>
          <Link className="btn btn-outline btn-primary" to={"/signup"}>
            Open your account
          </Link>
          <Link className="flex items-center btn btn-primary" to={"/login"}>
            Signin
            <LuArrowRightToLine />
          </Link>
        </div>
      </div>
    </div>
  );
}
