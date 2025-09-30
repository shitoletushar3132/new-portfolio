import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import profilePhoto from "../../assets/profilePhoto.jpg";
import Image from "next/image";
import Banner2 from "../../assets/Banner2.jpeg";

const Profile = () => {

  return (
    <section className="mx-auto">
      <div className="w-full relative mb-24">
        {/* Banner Image */}
        <Image
          src={Banner2}
          alt="Developer workspace"
          loading="lazy"
          className="w-full h-50 object-cover rounded-md shadow-md"
        />

        {/* Profile Photo */}
        <Image
          src={profilePhoto}
          alt="Profile photo"
          className="absolute -bottom-14 left-4 w-28 h-28 rounded-full border-2 border-white shadow-lg object-cover"
        />
      </div>

      <div className="space-y-6">
        {/* Profile Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Tushar Shitole
            <span className="inline-block ml-2 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
              Available for Work
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl">
            Full-Stack Developer | MERN & Java Stack. Building scalable web applications, APIs, and intuitive user interfaces. Passionate about creating efficient solutions using modern technologies.
          </p>
        </div>

        {/* Tech Stack */}
        {/* <div className="mt-4">
          {Object.entries(techStacks).map(([stack, skills]) => (
            <div key={stack} className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-200 mb-2">{stack}</h2>
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
        </div> */}

        {/* Social Links */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/shitoletushar3132"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/shitoletushar3132"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:shitoletushar3132@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://shitoletushar3132.github.io/my-resume/Tushar_Shitole_8767699855.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium">Resume</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mt-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">10+</div>
            <div className="text-sm text-slate-600">Projects</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">2+</div>
            <div className="text-sm text-slate-600">Years Exp.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-slate-900">99%</div>
            <div className="text-sm text-slate-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
