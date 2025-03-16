import React from "react";
import appNestLogo from "../../assets/appNestLogo.png";
import sprintofyLogo from "../../assets/sprintofyLogo.png";
import Image from "next/image";

const experience = [
  {
    title: "Full Stack Developer",
    company: "AppNest Technology Pvt Ltd",
    duration: "Feb 2025 - Mar 2025",
    workWith: [
      "React Native",
      "React",
      "Nodejs",
      "Tailwind",
      "Redux ToolKit",
      "MongoDB",
      "Context Api",
      "Express",
      "MVC",
      "Api",
      "Postman",
      "Figma",
    ],
    logo: appNestLogo,
  },
  {
    title: "Full Stack Engineer",
    company: "Sprintofy Technology ",
    duration: "Sep 2024 - Nov 2024",
    workWith: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Elstar UI",
      "Tailwind",
      "Api",
      "Postman",
    ],
    logo: sprintofyLogo,
  },
];

const Experience = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-5xl font-bold mb-2">Work Experience</h1>
        <div className="w-30 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>

      <p className="text-gray-400 mb-6">
        All my professional experiences as a developer!
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full border-l-2 border-gray-600"></div>
        {experience.map((item, index) => (
          <div key={index} className="relative pl-8 mb-6">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-200 border-2 border-gray-200 rounded-full"></div>
            <div className="p-4 rounded-lg border-[0.1px] border-[#374151] hover:border-2 hover:border-gray-600 cursor-pointer">
              <div className="flex items-center mb-2">
                <Image
                  alt="Company logo"
                  className="w-6 h-6 mr-2"
                  height="24"
                  src={item.logo}
                  width="24"
                />
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-building mr-2"></i>
                <span>{item.company}</span>
                <i className="fas fa-calendar-alt ml-4 mr-2"></i>
                <span>{item.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.workWith.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
