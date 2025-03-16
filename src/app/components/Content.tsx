import React from "react";
import Profile from "./Profile";
import Github from "./Github";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const Content = () => {
  return (
    <div className="mt-28 Border rounded-2xl px-4 sm:px-6 lg:px-8 py-4">
      <section id="home">
        <Profile />
      </section>
      <section id="github">
        <Github />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default Content;
