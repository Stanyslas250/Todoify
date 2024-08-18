import React, { useState, useEffect } from "react";
import {
  LuArrowBigRight,
  LuArrowRightToLine,
  LuGithub,
  LuLogIn,
  LuMoonStar,
  LuRegex,
  LuSun,
} from "react-icons/lu";
import { useThemeToggler } from "../hooks/useThemeToggler";
import { Link, NavLink } from "react-router-dom";

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
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            src="../../public/Todoify.svg"
            className="h-1/2 hidden lg:block"
          />
          Todoify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-1">
          <a
            href="http://github.com/stanyslas250"
            className="btn btn-square text-xl text-primary"
          >
            <LuGithub />
          </a>
          <label className="swap swap-rotate btn btn-square btn-primary rounded-lg">
            <input
              type="checkbox"
              className="theme-controller"
              onClick={toggle}
            />
            <LuMoonStar className="swap-on text-xl" />
            <LuSun className="swap-off text-xl" />
          </label>

          <div className="divider divider-horizontal divider-primary"></div>
          <Link className="btn btn-outline btn-primary" to={"/signup"}>
            Open your account
          </Link>
          <Link className="btn btn-primary flex items-center" to={"/login"}>
            Signin
            <LuArrowRightToLine />
          </Link>
        </div>
      </div>
    </div>
  );
}
