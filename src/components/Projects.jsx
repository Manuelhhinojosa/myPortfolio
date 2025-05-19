import React from "react";
import { PROJECTS } from "../constants";
import { p } from "framer-motion/client";

const Projects = () => {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">Projects</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.imgSrc}
                alt="Project image"
                className="h-auto w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 top-0 m-8 p-8 text-white backdrop-blur-md bg-black/50 rounded-lg flex flex-col justify-center items-center overflow-hidden overflow-y-scroll md:justify-start lg:justify-start">
                <h3 className="text-2xl text-center">{project.title}</h3>
                <p className="text-justify"> {project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
