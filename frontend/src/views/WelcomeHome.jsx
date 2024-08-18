import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function WelcomeHome() {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Navbar */}
      <Navbar className="navbar px-5 sticky top-0 backdrop-blur-md bg-base-300/30" />
      {/* Hero */}
      <HeroSection className="flex flex-col justify-evenly items-center bg-base-200 min-h-screen" />

      {/* section */}
      <section id="more_about_us" className="bg-red-900 min-h-screen">
        Hello
      </section>
    </div>
  );
}

export default WelcomeHome;
