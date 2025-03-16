import React from "react";
import { Code2, Brain, Rocket, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="font-bold text-5xl mb-4 ">About Me</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=500&auto=format&fit=crop"
              alt="Programming Setup"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-2/3 space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="text-emerald-400 font-semibold">
                Tushar Shitole
              </span>
              , a passionate Full Stack Developer with a focus on the MERN stack
              (MongoDB, Express, React, Node.js).
            </p>

            <p className="leading-relaxed">
              My journey into software development started during my college
              years, where I discovered my interest in programming. Initially, I
              explored basic HTML, CSS, and JavaScript, which sparked my
              curiosity to dive deeper into web technologies.
            </p>

            <p className="leading-relaxed">
              Over time, I gained proficiency in building full-scale
              applications, and I fell in love with the challenge of creating
              scalable, efficient solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">
                Technical Expertise
              </h3>
            </div>
            <p className="text-gray-300">
              Proficient in modern web technologies and best practices, with a
              strong foundation in the MERN stack.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                Problem Solver
              </h3>
            </div>
            <p className="text-gray-300">
              Passionate about finding elegant solutions to complex problems and
              creating efficient, scalable applications.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">
                Always Learning
              </h3>
            </div>
            <p className="text-gray-300">
              Continuously expanding knowledge and staying updated with the
              latest technologies and industry trends.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="text-gray-300">
              <p className="font-semibold">
                Bachelor of Engineering in Computer Science
              </p>
              <p>SPPU University, Pune</p>
              <p>2021 - 2025</p>
              <p>CGPA: 8.7/10</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-gray-700">
          <p className="text-lg text-center text-gray-200 leading-relaxed">
            "I enjoy combining my love for problem-solving with technology to
            build user-centric applications that deliver exceptional
            experiences. I'm always learning and expanding my knowledge, and my
            goal is to continue developing innovative solutions while growing as
            a developer."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
