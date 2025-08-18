import React from "react";
import { Code2, Brain, Rocket, GraduationCap } from "lucide-react";
import Image from "next/image";
import about from "../../assets/about.jpeg";

const About = () => {
  const techStacks = {
    "MERN Stack": ["React", "NextJS", "React Native", "NodeJS", "Express", "MongoDB", "PostgreSQL", "Redux", "Recoil", "GraphQL"],
    "Java Stack": ["Java", "Spring Boot", "Spring MVC", "Spring Core", "Hibernate", "JPA", "MySQL", "PostgreSQL", "Redis", "Microservices", "REST API"]
  };

  return (
    <div className="px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="font-bold text-5xl mb-4">About Me</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="md:w-1/3">
            <Image
              src={about}
              alt="Programming Setup"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-2/3 space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Hi, I&apos;m <span className="text-emerald-400 font-semibold">Tushar Shitole</span>, a passionate Full Stack Developer proficient in both the MERN stack and Java stack.
            </p>

            <p className="leading-relaxed">
              My journey started during college, exploring HTML, CSS, and JavaScript, which led me to dive deeper into web technologies. Over time, I mastered building scalable full-stack applications using modern frameworks and tools.
            </p>

            <p className="leading-relaxed">
              I enjoy solving complex problems and designing efficient, user-friendly applications. My goal is to continuously learn and deliver high-quality solutions in diverse technology stacks.
            </p>
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {Object.entries(techStacks).map(([stack, skills]) => (
            <div key={stack} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{stack}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">Technical Expertise</h3>
            </div>
            <p className="text-gray-300">
              Skilled in modern web and backend technologies across multiple stacks, with experience in building scalable, secure, and maintainable applications.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Problem Solver</h3>
            </div>
            <p className="text-gray-300">
              Passionate about designing efficient solutions, optimizing code, and solving complex challenges in web development.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Always Learning</h3>
            </div>
            <p className="text-gray-300">
              Continuously updating my knowledge with new frameworks, tools, and best practices to stay ahead in the industry.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="text-gray-300">
              <p className="font-semibold">Bachelor of Engineering in Computer Science</p>
              <p>SPPU University, Pune</p>
              <p>2021 - 2025</p>
              <p>CGPA: 8.7/10</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-gray-700">
          <p className="text-lg text-center text-gray-200 leading-relaxed">
            &quot;I enjoy combining my love for problem-solving with technology to build impactful applications. I am constantly learning and strive to deliver innovative, high-quality solutions across multiple tech stacks.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
