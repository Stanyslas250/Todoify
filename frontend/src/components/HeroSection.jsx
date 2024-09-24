import React from "react";
import { ButtonRotateBorder } from "../components/Button";
import { TextAnimatedDecoration } from "../components/TextDecoration";
import { LuChevronsDown, LuKeyRound } from "react-icons/lu";

export default function HeroSection({ className }) {
  return (
    <div className={className}>
      <div className="w-11/12 mx-auto prose text-center">
        <h1 className="text-5xl font-bold">
          Unlock Your Full Potential With{" "}
          <TextAnimatedDecoration>Todoify</TextAnimatedDecoration>.
        </h1>
        <p className="py-6">
          With our website, you&apos;ll have access to a Wide range of tools and
          resources designed to help you increase your productivity and achieve
          your goals.
        </p>{" "}
        <label className="items-center hidden gap-2 p-2 input input-primary input-bordered h-fit md:flex">
          <input
            type="text"
            className="p-2 grow"
            placeholder="Enter Email Address"
          />
          <ButtonRotateBorder>Get Started</ButtonRotateBorder>
        </label>
        <input
          type=""
          className="w-11/12 mx-auto input input-bordered input-primary md:hidden"
          placeholder="Enter your Email Address"
        />
        <div className="flex flex-col items-center gap-6 p-6">
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
