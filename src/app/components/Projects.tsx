import React from "react";
import DSA from "../../assets/portfolio/DSA.jpg";
import installNode from "../../assets/portfolio/installNode.jpg";
import wanderLust from "../../assets/portfolio/wanderLust.png";
import fiftyDay from "../../assets/portfolio/FiftyDays.jpg";
import reactWeather from "../../assets/portfolio/weatherApp.png";
import mern from "../../assets/portfolio/mern.png";
import currencyConvetor from "../../assets/portfolio/currencyConvertor.png";
import pilgrim from "../../assets/portfolio/pilgrim.png";
import Ecommerce from "../../assets/portfolio/E-commerce.png";
import ChatApp from "../../assets/portfolio/chat-App.png";
import saveNote from "../../assets/portfolio/notes.png";
import youtube from "../../assets/portfolio/youtube.jpeg";
import devTinder from "../../assets/portfolio/devTinder.png";
import easysave from "../../assets/portfolio/easysave.png";
import SkillLink from "../../assets/portfolio/SkillLink.png";
import SpringLogo from "../../assets/portfolio/Spring-Logo.png";
import { Github, Link, ExternalLink } from "lucide-react";
import Image from "next/image";

const portfolios = [
  {
    id: 16,
    src: SpringLogo,
    title: "Spring Projects",
    demo: "https://github.com/shitoletushar3132/learning-spring-core-mvc-boot",
    code: "https://github.com/shitoletushar3132/learning-spring-core-mvc-boot",
    description:
      "Built multiple projects to gain hands-on experience and learn the full Spring ecosystem, including Spring Core, Spring MVC, Spring Boot, Spring Data JPA, and Spring Microservices.",
  },
  {
    id: 15,
    src: SkillLink,
    title: "Skill Link",
    demo: "https://servicediscovery-kr3f.onrender.com/",
    code: "https://github.com/servicediscoveryy",
    description:
      "ServiceDiscovery is an innovative platform that connects " +
      "service seekers with skilled individuals, empowering ordinary people to showcase their talents and offer services to a broader audience.",
  },
  {
    id: 13,
    src: easysave,
    title: "Easy Save",
    demo: "https://easysave.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/easysave",
    description:
      "A personal Cloud Storge Where Store photos, Videos, Doc, any thing.",
  },
  {
    id: 12,
    src: devTinder,
    title: "Dev Tinder",
    demo: "https://devmatch.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/DevTinder",
    description: "A Tinder-like app for developers to match and network.",
  },
  {
    id: 11,
    src: saveNote,
    title: "Save Notes",
    demo: "https://savenote.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/NoteApp_React",
    description: "A note-taking app to save and manage notes easily.",
  },
  {
    id: 14,
    src: Ecommerce,
    title: "ShopSmart",
    demo: "https://shopsmart.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/MERN_ECOMMERCE",
    description: "An e-commerce app for online shopping.",
  },
  {
    id: 9,
    src: ChatApp,
    title: "Chat App",
    demo: "https://chatsimply.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/chat-app",
    description: "A simple real-time chat application.",
  },
  {
    id: 10,
    src: youtube,
    title: "FuncTube",
    demo: "https://youtube-03.vercel.app/",
    code: "https://github.com/shitoletushar3132/Youtube",
    description: "A YouTube clone to watch and share videos.",
  },
  {
    id: 1,
    src: wanderLust,
    title: "WanderLust (Airbud)",
    demo: "https://wanderlustproject-2f9p.onrender.com/listings",
    code: "https://github.com/shitoletushar3132/WanderLustProject/tree/main",
    description: "A travel app to explore and book listings.",
  },
  {
    id: 2,
    src: fiftyDay,
    title: "50 Day 50 Project",
    demo: "https://webprojects.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/web-projects",
    description: "A collection of 50 small web projects.",
  },
  {
    id: 8,
    src: pilgrim,
    title: "Pilgrim Journey",
    demo: "https://pilgrimjourney.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/MERN_PROJECTS/blob/main/pilgrim-website",
    description: "A website for tracking pilgrim journeys.",
  },
  {
    id: 3,
    src: reactWeather,
    title: "Weather App",
    demo: "https://weatherdashborad.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/MERN_PROJECTS/tree/main/Weather-app",
    description: "A weather app to display weather data.",
  },
  {
    id: 7,
    src: currencyConvetor,
    title: "Currency Converter",
    demo: "https://pilgrimjourney.tusharshitole.site",
    code: "https://github.com/shitoletushar3132/MERN_PROJECTS/tree/main/currencyConvertor",
    description: "An app to convert currencies easily.",
  },
  {
    id: 4,
    src: installNode,
    title: "Node.js Server with Authentication",
    demo: "https://github.com/shitoletushar3132/Web-development/tree/main/project%20contact%20management",
    code: "https://github.com/shitoletushar3132/Web-development/tree/main/project%20contact%20management",
    description: "A Node.js server with authentication and contact management.",
  },
  {
    id: 5,
    src: DSA,
    title: "Data Structures and Algorithms",
    demo: "https://github.com/shitoletushar3132/DSA",
    code: "https://github.com/shitoletushar3132/DSA",
    description: "A repository of algorithms and data structures.",
  },
  {
    id: 6,
    src: mern,
    title: "MERN Development",
    demo: "https://github.com/shitoletushar3132/Web-development",
    code: "https://github.com/shitoletushar3132/Web-development",
    description: "A collection of MERN stack projects.",
  },
];

const Projects = () => {
  const handleDemoClick = (e: React.MouseEvent, demoLink: string) => {
    e.stopPropagation();
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (e: React.MouseEvent, codeLink: string) => {
    e.stopPropagation();
    window.open(codeLink, "_blank");
  };

  return (
    <div className="p-6">
      <div className="mb-12">
        <h1 className="font-bold text-5xl mb-4">My Projects</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-4"></div>
        <p className="text-gray-400 text-lg">
          A showcase of my development journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolios.map((project) => (
          <div
            key={project.id}
            className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button
                  onClick={(e) => handleDemoClick(e, project.demo)}
                  className="p-2 bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={(e) => handleCodeClick(e, project.code)}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                  title="View Code"
                >
                  <Github className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Link className="w-5 h-5 text-emerald-400" />
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
