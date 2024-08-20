import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { LuMoveRight, LuTarget } from "react-icons/lu";
import { faqData, whyChooseUsData } from "../utils/welcomePageData";
import AccordionItems from "../components/AccordionItems";
import Feature from "../components/Feature";

function WelcomeHome() {
  return (
    <div className="min-h-screen bg-base-100 ">
      {/* Navbar */}
      <Navbar className="sticky top-0 px-5 navbar backdrop-blur-md bg-base-200/30" />
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
        className="flex flex-col items-center w-full h-screen gap-10 px-5 py-10 sm:px-20 lg:flex-row"
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
            <Feature
              title={feature.title}
              description={feature.description}
              key={index}
            />
          ))}
        </div>
      </section>

      {/* section 3 */}

      {/* section 4 */}

      <section
        id="faq"
        className="flex flex-col items-center w-full h-screen gap-10 px-5 py-10 sm:px-20 lg:flex-row lg:justify-around"
      >
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-6xl font-bold">FAQ</h2>
          <h5 className="text-xl font-normal text-start">
            Answers to some questions you might <br /> have.
          </h5>
        </div>

        <div className="flex flex-col gap-5 lg:flex-col lg:w-1/2">
          {faqData.map((item, index) => (
            <AccordionItems
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 footer footer-center bg-base-300 text-base-content">
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
