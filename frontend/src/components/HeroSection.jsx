import React from "react";
import { ButtonRotateBorder } from "../components/Button";
import { TextAnimatedDecoration } from "../components/TextDecoration";
import { LuChevronsDown } from "react-icons/lu";

export default function HeroSection({ className }) {
  return (
    <div className={className}>
      <div className="prose text-center">
        <h1 className="text-5xl font-bold">
          Unlock Your Full Potential With{" "}
          <TextAnimatedDecoration>Todoify</TextAnimatedDecoration>.
        </h1>
        <p className="py-6">
          With our website, you'll have access to a Wide range of tools and
          resources designed to help you increase your productivity and achieve
          your goals.
        </p>{" "}
        <label className="input input-bordered flex items-center gap-2 h-fit p-2">
          <input
            type="text"
            className="grow p-2"
            placeholder="Enter Email Address"
          />
          <ButtonRotateBorder>Get Started</ButtonRotateBorder>
        </label>
        <div className="flex flex-col gap-6 items-center p-6">
          {" "}
          <span className="font-semibold">⭐⭐⭐⭐⭐ 4,9 by Trustpiolot</span>
          <a href="#more_about_us">
            <LuChevronsDown size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}
