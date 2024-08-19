import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { LuTarget } from "react-icons/lu";

function WelcomeHome() {
  return (
    <div className="bg-base-100 min-h-screen ">
      {/* Navbar */}
      <Navbar className="navbar px-5 sticky top-0 backdrop-blur-md bg-base-300/30" />
      {/* Hero */}
      <HeroSection className="flex flex-col justify-evenly items-center bg-base-200 min-h-screen" />

      {/* section 1*/}
      <section id="more_about_us" className="w-screen flex min-h-fit">
        <div className="bg-neutral text-neutral-content flex flex-col grow w-screen items-center lg:flex-row">
          <div className="w-1/2 p-20">
            <h1 className="font-bold leading-relaxed text-4xl static">
              Todoify Helps You <br /> Increase Your Daily <br /> Productivity
              <LuTarget className="inline-block ml-3" />
            </h1>
          </div>
          <div className="w-1/2 p-20 h-full gap-2">
            <p className="my-5">
              We Are Focused On Creating Products, Services And Processes That
              Are Not Only Innovative But Also With The Highest Standards Of
              Excellence.
            </p>
            <button className="btn btn-primary">How It Works?</button>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section>
        <div className="w-screen flex min-h-fit">
          <div className="flex flex-col gap-20 text-center w-screen items-center">
            <h2 className="font-bold text-4xl">Why Choose Todoify?</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                <LuTarget className="inline-block mr-3" />
                <p>Unlimited Tasks</p>
              </div>
              <div className="flex items-center">
                <LuTarget className="inline-block mr-3" />
                <p>Task Prioritization</p>
              </div>
              <div className="flex items-center">
                <LuTarget className="inline-block mr-3" />
                <p>Project Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <span className="italic font-semibold text-primary">
              {" "}
              ASPIRE By Stanyslas
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default WelcomeHome;
