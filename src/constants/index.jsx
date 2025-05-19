import { FaGithub, FaLinkedin } from "react-icons/fa6";

import project0 from "../assets/project0.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import api from "../assets/api.webp";
import project4 from "../assets/project4.png";
import project6 from "../assets/project6.png";
import projectM from "../assets/projectM.png";

export const LINKS = [
  { id: "home", name: "Home" },
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " - MERN - MogoDB - MongoDB Atlas - Mongoose - Express JS - React JS - Node JS - REST API creation & integration - Front-end - Back-end - Dev tools (Git, Github) - Hosting services (Netlify, Vercel & Heroku) ";

export const PROJECTS = [
  {
    id: -2,
    schoolProject: false,
    title: "Artist's e-commerce REST API (Back-end)",
    description: "A fully responsive e-commerce site",
    imgSrc: api,
    link: "https://underconstructionmhh.netlify.app",
  },
  {
    id: -1,
    schoolProject: false,
    title: "Artist's e-commerce (Client side)",
    description: "A fully responsive e-commerce site",
    imgSrc: projectM,
    link: "https://underconstructionmhh.netlify.app",
  },
  {
    id: 0,
    schoolProject: false,
    title: "Cafe & Restaurant Website (Front-end)",
    description:
      "A fully responsive website for a local café in Zapopan, built with React, Tailwind CSS, and Framer Motion. The site captures the cozy, community-focused vibe of the café with smooth animations and a clean layout tailored to the client’s vision.",
    imgSrc: project0,
    link: "https://github.com/Manuelhhinojosa/cafeZapopanWebsite",
  },
  {
    id: 1,
    schoolProject: false,
    title: "Portfolio Website for a Content Writer (Front-end)",
    description:
      "Custom portfolio site built for a professional writer using React, TailwindCSS, and Framer Motion. Features include responsive design, smooth animations, and clean, accessible layout.",
    imgSrc: project1,
    link: "https://github.com/Manuelhhinojosa/byron-fast-writer-portfolio-client?tab=readme-ov-file#-overview",
  },
  {
    id: 2,
    title: "Professional portfolio & Blog (Client side)",
    schoolProject: true,
    description:
      "Full-stack MERN blog and portfolio site for a real client, with custom admin-only authentication, full CRUD functionality, Cloudinary media handling, and responsive design using React, Express, MongoDB, SASS, and EmailJS.",
    imgSrc: project2,
    link: "https://github.com/Manuelhhinojosa/mariselaFierroWebsitePersonalBlog",
  },
  {
    id: 3,
    schoolProject: true,
    title: "Professional portfolio & Blog REST API (Back End)",
    description:
      "Custom-built Node.js and Express API for a client’s blog and portfolio, featuring secure auth with bcrypt, full CRUD for posts, Cloudinary media uploads via multer, and MongoDB Atlas for cloud-hosted data storage.",
    imgSrc: api,
    link: "https://github.com/Manuelhhinojosa/mariselaFierroPersonalBlogWebisiteAPI",
  },
  {
    id: 4,
    title: "E-Commerce Platform (Client side in development)",
    schoolProject: true,
    description:
      "Frontend of a custom e-commerce site built with React, Redux, and SASS. Features dynamic cart, Stripe payments, Cloudinary-hosted media, and responsive UI tailored to a real client’s brand.",
    imgSrc: project4,
    link: "https://github.com/Manuelhhinojosa/rigaDesignFrontEnd",
  },
  {
    id: 5,
    title: "E-Commerce Platform (REST API in development)",
    schoolProject: true,
    description:
      "Backend REST API for a custom e-commerce platform, built with Node.js, Express, and MongoDB. Features product and order management, Stripe integration, and secure admin routes. Connected to a live frontend and actively maintained.",
    imgSrc: api,
    link: "https://github.com/Manuelhhinojosa/designStoreE-CommerceBackEnd",
  },
  {
    id: 6,
    title: "Yelpcamp – Full-Stack Campground Review App",
    schoolProject: true,
    description:
      "A full-stack CRUD web app inspired by Yelp, where users can post, edit, and review campgrounds with location mapping via Mapbox. Built with Express, MongoDB, and Passport.js, this project showcases dynamic routing, full user authentication, and interactive map integration.",
    imgSrc: project6,
    link: "https://github.com/Manuelhhinojosa/yelpcamp",
  },
  // {
  //   id: 7,
  //   title: "Weather App – Real-Time Forecast",
  //   description:
  //     "A clean, responsive weather app built with HTML, CSS, and JavaScript that fetches live data from the OpenWeather API. Designed for quick, clutter-free forecasts with dynamic DOM updates and mobile-ready styling — no frameworks, just pure JavaScript and Axios.",
  //   imgSrc: project7,
  //   link: "https://github.com/Manuelhhinojosa/weatherApp",
  // },
  // {
  //   id: 8,
  //   title: "Movie Fight – Head-to-Head Movie Comparison App",
  //   description:
  //     "An interactive app that lets users search and compare two movies side by side using live data from the OMDb API. Built with vanilla JavaScript and Axios, Movie Fight dynamically analyzes stats like box office revenue, awards, and ratings — all in a responsive, fast-loading UI.",
  //   imgSrc: project8,
  //   link: "https://github.com/Manuelhhinojosa/movieFight",
  // },
  // {
  //   id: 9,
  //   title: "Maze Game – Physics-Based Puzzle Adventure",
  //   description:
  //     "A browser-based game built with the Matter.js physics engine, where players navigate through randomly generated mazes. Designed to showcase physics-driven interactions, collision logic, and user-controlled gameplay — all rendered in a smooth, responsive interface.",
  //   imgSrc: project9,
  //   link: "https://github.com/Manuelhhinojosa/mazeApp",
  // },
];

export const ABOUT =
  "I'm a Full Stack Developer focused on the MERN stack (MongoDB, Express.js, React.js, Node.js), with experience building responsive, mobile-first web apps and RESTful APIs. I’ve implemented secure authentication, integrated services like Stripe and Cloudinary, and developed accessible, interactive UIs using React, Redux, TailwindCSS, SASS, and Framer Motion. I enjoy translating client needs into real solutions and have helped improve visibility and sales through user-centered design.";

export const EXPERIENCES = [
  {
    company: "Freelance",
    role: "Full Stack Software Engineer",
    year: "2024 - Present",
    description:
      "+ Delivered and deployed multiple full-stack web applications using the MERN stack, Netlify, Vercel, and Heroku for fast performance and easy updates, integrated rest API services like Stripe, Cloudinary, and EmailJS to streamline workflows.",
    description2:
      "+ Designed mobile-first UIs to match each client’s creative vision, improving usability and content reach.",
    description3: "+ Built secure REST APIs with role-based authentication",
    description4:
      "+ Enabled clients to fully manage their platforms through dynamic CRUD functionality and media uploads, reducing their dependence on developers.",
    description5: "+ Provided post-launch support and troubleshooting.",
  },
  {
    company: "Eat with",
    role: "Event Planner & Experience Designer",
    year: "2016 - 2020",
    description:
      "+ Designed and executed personalized events, emphasizing detailed planning, user- centric design, and customer satisfaction.",
    description2:
      "+ Translate creative concepts into polished, real-world experiences—an approach now central to software delivery.",
  },
  {
    company: "Cochon Gastrobar",
    role: "Restaurant Manager",
    year: "2011 - 2016",
    description:
      "+ Managed operations and led dynamic teams, enhancing processes and delivering timely, high-quality outcomes.",
    description2:
      "+ Developed skills in agile leadership, multitasking, and responsive management applicable in software engineering contexts.",
  },
  {
    company: "Omnilife",
    role: "Event Planner",
    year: "2008 - 2010",
    description:
      "+ Coordinated large-scale corporate events, overseeing logistics, budgets, and timelines.",
    description2:
      "+ Strengthened project planning, management, and execution abilities relevant to managing software development lifecycles.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Manuelhhinojosa",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "linkedin.com/in/manuelhh",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, I'  d love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "mangud.hinojosa@gmail.com",
  phone: "+1 647-287-4494",
  location: "Toronto, Ontario. Canada",
};
