import React from "react";

const skillsData = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  librariesAndFrameworks: [
    "React",
    "NextJS",
    "Express",
    "Fast Api",
    "HonoJs (Serverless)",
    "NodeJs",
    "React Native",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Jest",
    "Cypress",
    "React Query",
    "GraphQL",
    "Redux",
    "Recoil",
  ],
  databasesAndORMs: [
    "MongoDB",
    "Postgres",
    "SqlAlchemy",
    "Redis",
    "Alembic",
    "MySQL",
    "Prisma",
    "PyScopG2",
  ],
  toolsAndPlatforms: [
    "GitHub Actions",
    "Serverless",
    "ESLint",
    "AWS S3",
    "AWS EC2",
    "AWS CloudFront",
    "Azure VM",
    "Docker",
    "Mapbox",
  ],
};

const Skills = () => {
  return (
    <div className=" p-6 text-white ">
      <div className="">
        <h1 className="text-5xl font-bold mb-4">Skills</h1>
        <div className="w-25 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>
      {/* Languages Section */}
      <div className="mb-5  border-b border-[#374151] py-2 mt-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-400">Languages</h2>
        <p className="text-white">{skillsData.languages.join(", ")}</p>
      </div>

      {/* Libraries & Frameworks Section */}
      <div className="mb-5 border-b border-[#374151] py-2">
        <h2 className="text-xl font-semibold mb-2 text-gray-400">
          Libraries & Frameworks
        </h2>
        <p>{skillsData.librariesAndFrameworks.join(", ")}</p>
      </div>

      {/* Databases & ORMs Section */}
      <div className="mb-5 border-b border-[#374151] py-2">
        <h2 className="text-xl font-semibold mb-2 text-gray-400">
          Databases & ORMs
        </h2>
        <p>{skillsData.databasesAndORMs.join(", ")}</p>
      </div>

      {/* Tools & Platforms Section */}
      <div className="mb-5  border-b border-[#374151] py-2">
        <h2 className="text-xl font-semibold mb-2 text-gray-400">
          Tools & Platforms
        </h2>
        <p>{skillsData.toolsAndPlatforms.join(", ")}</p>
      </div>
    </div>
  );
};

export default Skills;
