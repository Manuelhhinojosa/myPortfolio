import React from "react";
import { EXPERIENCES } from "../constants";

const Work = () => {
  return (
    <section id="experience">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">
        Work Experience
      </h2>
      <div className="mx-auto max-w-6xl">
        {EXPERIENCES.map((experience, id) => (
          <div key={id} className="mx-4 mb-20">
            <h2 className="font-medium lg:text-2xl">{experience.company}</h2>
            <div className="flex justify-between">
              <p className="py-4 tracking-wide lg:text-xl">{experience.role}</p>
              <p className="py-4 lg:text-xl">{experience.year}</p>
            </div>
            <p className="font=sans text-gray-400">{experience.description}</p>
            <p className="font=sans text-gray-400">{experience.description2}</p>
            <p className="font=sans text-gray-400">{experience.description3}</p>
            <p className="font=sans text-gray-400">{experience.description4}</p>
            <p className="font=sans text-gray-400">{experience.description5}</p>
            <p className="font=sans text-gray-400">{experience.description6}</p>
            <p className="font=sans text-gray-400">{experience.description7}</p>
            <p className="font=sans text-gray-400">{experience.description8}</p>
            <p className="font=sans text-gray-400">{experience.description9}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
