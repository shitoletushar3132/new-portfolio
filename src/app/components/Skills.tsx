import React from "react";

const skillsData = {
  mernStack: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    frontend: [
      "React",
      "NextJS",
      "React Native",
      "Redux",
      "Recoil",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
    backend: ["NodeJS", "Express", "GraphQL", "HonoJs (Serverless)", "FastAPI"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    tools: [
      "Git & GitHub",
      "GitHub Actions",
      "Docker",
      "AWS S3",
      "AWS EC2",
      "AWS CloudFront",
      "Serverless",
      "Mapbox",
      "ESLint",
    ],
  },
  javaStack: {
  languages: [
    "Java (SE & EE)",
    "SQL",
    "Object-Oriented Programming (OOP)",
    "Multithreading & Concurrency",
    "JVM Internals"
  ],
  frameworks: [
    "Spring Core",
    "Spring MVC",
    "Spring Boot",
    "Spring Data JPA",
    "Spring Security",
    "Spring Microservices (Spring Cloud)",
    "Hibernate / JPA",
    "RESTful API Development"
  ],
  databases: [
    "MySQL",
    "PostgreSQL",
    "Oracle DB",
    "MongoDB",
    "Redis",
    "SQL Tuning & Optimization"
  ],
  tools: [
    "Maven",
    "Gradle",
    "IntelliJ IDEA / Eclipse",
    "Git & GitHub",
    "Docker",
    "Jenkins / CI-CD",
    "AWS EC2 & S3",
    "Azure VM",
    "Unit Testing (JUnit, Mockito)",
    "Logging & Monitoring (Log4j, SLF4J)"
  ]
}

};

const Skills = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-5xl font-bold mb-4">Skills</h1>
      <div className="w-25 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-8"></div>

      {/* MERN Stack */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-emerald-400">
          MERN Stack
        </h2>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Languages</h3>
          <p>{skillsData.mernStack.languages.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Frontend</h3>
          <p>{skillsData.mernStack.frontend.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Backend</h3>
          <p>{skillsData.mernStack.backend.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Databases</h3>
          <p>{skillsData.mernStack.databases.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">
            Tools & Platforms
          </h3>
          <p>{skillsData.mernStack.tools.join(", ")}</p>
        </div>
      </div>

      {/* Java Stack */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">
          Java Stack
        </h2>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Languages</h3>
          <p>{skillsData.javaStack.languages.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Frameworks</h3>
          <p>{skillsData.javaStack.frameworks.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">Databases</h3>
          <p>{skillsData.javaStack.databases.join(", ")}</p>
        </div>

        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-400">
            Tools & Platforms
          </h3>
          <p>{skillsData.javaStack.tools.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
