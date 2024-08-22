import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { LuMoveRight, LuTarget } from "react-icons/lu";
import { faqData, whyChooseUsData } from "../utils/welcomePageData";
import AccordionItems from "../components/AccordionItems";
import Feature from "../components/Feature";

import TestimonialSection from "../components/testimonialSection";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import BentoElement from "../components/BentoElement";
function WelcomeHome() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar className="relative px-5 navbar bg-base-200/30" />
      {/* Hero */}
      <HeroSection className="flex flex-col items-center h-screen justify-evenly bg-base-200" />
      {/* section 1*/}
      <section
        id="more_about_us"
        className="flex flex-col w-full px-5 py-10 text-neutral-content sm:px-20 lg:flex-row lg:items-center bg-neutral"
      >
        <div className="grid lg:w-1/2 justify-items-center">
          <h1 className="static text-3xl font-bold leading-relaxed lg:text-4xl lg:w-2/3">
            Todoify Helps You Increase Your Daily Productivity
            <LuTarget className="inline-block ml-3" />
          </h1>
        </div>
        <div className="gap-2 lg:w-1/2 lg:h-full lg:p-20">
          <p className="my-5">
            We Are Focused On Creating Products, Services And Processes That Are
            Not Only Innovative But Also With The Highest Standards Of
            Excellence.
          </p>
          <button className="btn btn-primary">How It Works?</button>
        </div>
      </section>
      {/* section 2 */}
      <section
        id="features"
        className="flex flex-col items-center w-full h-full gap-10 px-5 py-10 sm:px-20 lg:flex-row"
      >
        <div className="relative flex flex-col justify-center mx-auto lg:w-1/3 text-start">
          <h2 className="block w-full text-3xl font-bold text-transparent bg-gradient-to-b from-primary to-base-300 bg-clip-text sm:text-4xl">
            How we stand out in world
          </h2>
          <p className="w-full max-w-xl mx-auto my-4 font-medium leading-relaxed tracking-wide text-gray-400 bg-transparent">
            Offering unique features and benefits that are tailored to your
            needs.
          </p>
          <button className="btn btn-primary hover:bg-primary/30">
            Create your account today
            <LuMoveRight className="text-xl" />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-2 lg:w-1/2">
          {whyChooseUsData.map((feature, index) => (
            <div key={index}>
              <Feature
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </section>
      {/* section 3 */}
      <section id="testimonial" className="bg-neutral">
        <TestimonialSection />
      </section>

      {/* Some data section */}

      <section className="h-full px-5 py-10 bg-base-200 sm:px-20">
        <div className="flex flex-col justify-center h-full gap-2 lg:content-center lg:gap-4 lg:grid lg:grid-cols-5">
          <BentoElement
            className="lg:col-span-4 bg-primary"
            title="300K+ Users"
            description="Users actively managing their tasks on a daily basis."
          />
          <BentoElement
            className="lg:col-span-1 bg-secondary"
            title="100% Free!"
            description="Forever"
          />
          <BentoElement
            className="lg:col-span-2 bg-neutral-content"
            title="1.2M"
            description="Total tasks completed by our users across the platform."
          />
          <BentoElement
            className="lg:col-span-3 bg-accent"
            title="10+"
            description="Our users are spread across more than 50 countries.s"
          />
        </div>
      </section>

      {/* section 4 */}
      <section
        id="faq"
        className="flex flex-col items-center w-full h-screen gap-10 px-5 py-10 sm:px-20 lg:flex-row bg-base-100 lg:justify-around"
      >
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-6xl font-bold">FAQ</h2>
          <h5 className="text-xl font-normal text-start">
            Answers to some questions you might <br /> have.
          </h5>
        </div>

        <div className="flex flex-col gap-5 lg:flex-col lg:w-1/2">
          {faqData.map((item, index) => (
           <div key={index}> 
           <AccordionItems
              question={item.question}
              answer={item.answer}
            /></div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 footer bg-neutral text-neutral-content">
        <aside>
          <a className="text-xl btn btn-ghost">
            <img
              src="../../public/Todoify.svg"
              className="hidden h-1/2 lg:block"
            />
            Todoify
          </a>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <RiTwitterXLine size={24} />
            </a>
            <a>
              <FaGithub size={24} />
            </a>
            <a>
              <FaFacebookF size={24} />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="p-4 footer footer-center bg-base-200 text-base-content">
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
