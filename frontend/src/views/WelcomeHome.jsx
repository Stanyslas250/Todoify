import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { LuTarget } from "react-icons/lu";
import { faqData, whyChooseUsData } from "../utils/welcomePageData";
import AccordionItems from "../components/AccordionItems";
import Feature from "../components/Feature";

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
          <div className="w-1/2 grid justify-items-center">
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

      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-base-100"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-primary to-base-300 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our templates allow for maximum customization. No technical skills
            required – our intuitive design tools let you get the job done
            easily.
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-5 pt-5 lg:flex-row">
          {whyChooseUsData.map((item, index) => (
            <Feature
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* section 3 */}

      <section id="faq" className="w-screen flex min-h-fit p-16">
        <div className="text-center w-full flex flex-row gap-8 justify-around">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-6xl font-bold">FAQ</h2>
            <h5 className="text-xl font-normal text-start">
              Answers to some questions you might <br /> have.
            </h5>
          </div>

          <div className="flex flex-col gap-5 w-1/2">
            {faqData.map((item, index) => (
              <AccordionItems
                question={item.question}
                answer={item.answer}
                key={index}
              />
            ))}
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
