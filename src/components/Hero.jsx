// react
import React from "react";
// icons
import { LuImport } from "react-icons/lu";
// assets
import manuel from "../assets/manuel.jpg";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold">
          Manuel
          <br />
          Hinojosa
        </h1>
        <div className="mt-8 ">
          <a
            href="https://manuelhhcv.netlify.app/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center rounded-xl bg-lime-300 p2 px-3 font-sans font-medium text-black hover:bg-lime-400"
          >
            <span>resume.pdf</span>
            <LuImport className="ml-2" />
          </a>
        </div>
        <div className="w-full">
          <img
            src={manuel}
            alt="HeroSectionImage"
            className="mt-8 h-96 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
