import React, { useState } from "react";
import {
  Github,
  Linkedin,
  MessageSquare,
  Send,
  User,
  Mail,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-6">
        <h1 className="pb-2  text-center text-5xl font-bold">Contact Us</h1>
        <div className="w-25 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
      </div>
      <div className="text-white flex items-center justify-center mb-10">
        <div className="w-full max-w-xl p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mb-8 text-gray-300 leading-relaxed">
            I&apos;m always open to exploring new collaborations and exciting
            opportunities. Whether it&apos;s a project idea, a job opportunity,
            or simply a chance to connect, feel free to reach out!
          </p>

          <div className="flex space-x-6 mb-8 justify-center">
            <a
              href="https://github.com/shitoletushar3132"
              target="_blank"
              className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shitoletushar3132/"
              target="_blank"
              className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <div className="flex items-center bg-gray-700/50 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <User className="w-5 h-5 ml-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="flex items-center bg-gray-700/50 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="w-5 h-5 ml-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="flex bg-gray-700/50 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <MessageSquare className="w-5 h-5 ml-3 mt-3 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-3 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none min-h-[120px]"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            or email me at{" "}
            <a
              href="mailto:shitoletushar3132@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              shitoletushar3132@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
