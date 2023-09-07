import React from "react";
import Lottie from "react-lottie";
import animationData from "../animation/studyanimation.json";
import Michigan from "../Images/Michigan.png";
import Duke from "../Images/Duke.png";
import Google from "../Images/Google.png";
import johnhopkins from "../Images/johnhopkins.png";
import Illinois from "../Images/Illinois.png";
import Courses from "./Courses";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true to start playing the animation when the component mounts
    animationData: animationData, // Your animation file imported above
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

const Home = () => {
  return (
    <div className="h-full w-full md:mb-40">
      <div className="flex flex-row py-16 px-36 bg-gray-100 items-center">
        <div className="flex flex-col space-y-3">
          <p className="text-6xl text-blue-500 font-bold">
            CourseEasy<sub className="text-xl">Plus</sub>
          </p>
          <br />
          <br />
          <p className="text-2xl font-light text-gray-600">
            Unlimited access to 7,000+ world-class courses, hands-on projects,
            and job-ready certificate programs—all included in your subscription
          </p>
          <br /> <br />
          <br />
          <p className="font-bold text-black text-sm">
            ₹4,878/month, cancel anytime
          </p>
          <button className="p-3 bg-blue-700 w-fit">
            <p className="font-bold text-white">Start a 7-Day Free Trial</p>
          </button>
          <button className="p-1 w-fit">
            <p className="font-bold text-blue-600">
              or ₹32,990/year with 14-day money-back guarantee
            </p>
          </button>
        </div>
        <div>
          <LottieAnimation />
        </div>
      </div>
      <div className="flex flex-col items-center mt-4  divide-y-2 border-b-2">
        <p className="text-3xl font-semibold text-gray-600">
          Learn from 275+ leading universities and companies with Coursera Plus
        </p>
        <div className=" flex flex-row space-x-11 p-4 ">
          <img src={Illinois} alt="Illinois" width={160} className="p-4" />
          <img src={Google} alt="Illinois" width={160} className="p-4" />
          <img src={Michigan} alt="Illinois" width={160} className="p-4" />
          <img src={Duke} alt="Illinois" width={160} className="p-4" />
          <img src={johnhopkins} alt="Illinois" width={160} className="p-4" />
        </div>
      </div>
      <div className="flex flex-col items-center">
      <p className="font-semibold text-3xl p-4">Invest in your professional goals with Coursera Plus</p>
      <p className="text-gray-500 text-center p-3">
      Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera,<br/> taught by top instructors from leading universities and companies.
      </p>
      <Courses/>
      </div>
    </div>
  );
};

export default Home;
