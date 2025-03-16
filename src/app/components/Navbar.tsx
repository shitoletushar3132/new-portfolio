import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  ChevronRight,
} from "lucide-react";

import TS_Logo from "../../assets/TS_Logo.jpg";
import Image from "next/image";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`mx-auto max-w-[55rem] px-4 sm:px-6 lg:px-8 transition-all duration-300 Border rounded-2xl `}
        >
          <div className="flex items-center justify-between h-16  bg-black px-3 rounded-lg md:backdrop-blur-xl md:bg-black/50 ">
            {/* Logo */}
            <div className="flex-shrink-0 ">
              <a href="#" className="flex items-center space-x-2">
                <Image
                  src={TS_Logo}
                  alt="ts logo"
                  className="w-18 h-14 object-cover"
                />
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Tushar <span className="text-red-600">*</span>
                </span> */}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 text-slate-400 hover:text-slate-100 transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Hire me
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-center rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
