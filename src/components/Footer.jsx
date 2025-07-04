import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="text-white pt-12 pb-6 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Me */}
          <div className="mb-8">
            <h3 className="text-[#04b30f] text-xl font-semibold mb-4 pb-2 border-b border-[#04b30f] inline-block">
              About Me
            </h3>
            <p className="mb-4">
              I'm a passionate designer & developer creating beautiful,
              functional digital experiences.
            </p>
            <div className="flex space-x-4 gap-1.5">
              <a
                href="https://www.instagram.com/salman_hanifff?igsh=YThyYjZ5cDU2bHVu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#04b30f] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="http://www.linkedin.com/in/salman-hanif-774713300/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#04b30f] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/Salman-Hanif"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#04b30f] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://wa.me/923122711434"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#04b30f] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-[#04b30f] text-xl font-semibold mb-4 pb-2 border-b border-[#04b30f] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#main" className="hover:text-[#04b30f] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#websites" className="hover:text-[#04b30f] transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#04b30f] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#form" className="hover:text-[#04b30f] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-[#04b30f] text-xl font-semibold mb-4 pb-2 border-b border-[#04b30f] inline-block">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-[#04b30f] transition-colors duration-300">Web Development</li>
              <li className="hover:text-[#04b30f] transition-colors duration-300">Responsive Design</li>
              <li className="hover:text-[#04b30f] transition-colors duration-300">React Development</li>
              <li className="hover:text-[#04b30f] transition-colors duration-300">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h3 className="text-[#04b30f] text-xl font-semibold mb-4 pb-2 border-b border-[#04b30f] inline-block">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 mt-0.5 text-[#04b30f]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Memon Goth Malir, Karachi Pakistan</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#04b30f]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 312 2711464</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-[#04b30f]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>salmanhanif44444@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 SalmanHanif Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
