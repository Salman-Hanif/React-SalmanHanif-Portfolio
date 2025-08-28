import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaArrowUp } from "react-icons/fa";

function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const footerRef = useRef(null);

  useGSAP(() => {
    // Footer section animation
    gsap.fromTo("#footer", 
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#footer",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Staggered animation for footer columns
    gsap.utils.toArray(".footer-column").forEach((column, i) => {
      gsap.fromTo(column,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.2
        }
      );
    });

    // Social icons animation
    gsap.utils.toArray(".social-icon").forEach((icon, i) => {
      gsap.fromTo(icon,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.1
        }
      );
    });

    // Back to top button animation
    gsap.fromTo("#back-to-top",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#back-to-top",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Background elements animation
    gsap.to(".footer-blob-1", {
      x: 20,
      y: -10,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".footer-blob-2", {
      x: -20,
      y: 10,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3
    });

    // Hover animations for social icons
    gsap.utils.toArray(".social-icon").forEach(icon => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(icon, {
        y: -5,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      icon.addEventListener("mouseenter", () => hoverTl.play());
      icon.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Back to top button hover animation
    const backToTopTl = gsap.timeline({ paused: true });
    backToTopTl.to("#back-to-top", {
      y: -5,
      boxShadow: "0 10px 25px rgba(4, 179, 15, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });
    
    document.getElementById("back-to-top")?.addEventListener("mouseenter", () => backToTopTl.play());
    document.getElementById("back-to-top")?.addEventListener("mouseleave", () => backToTopTl.reverse());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" ref={footerRef} className="relative pt-20 pb-10 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="footer-blob-1 absolute top-20 left-10 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl"></div>
      <div className="footer-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Me */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                About Me
              </span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer & designer creating beautiful, functional digital experiences that make an impact.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <FaInstagram className="text-xl" />, href: "https://www.instagram.com/salman_hanifff?igsh=YThyYjZ5cDU2bHVu" },
                { icon: <FaLinkedin className="text-xl" />, href: "http://www.linkedin.com/in/salman-hanif-774713300/" },
                { icon: <FaGithub className="text-xl" />, href: "https://github.com/Salman-Hanif" },
                { icon: <FaWhatsapp className="text-xl" />, href: "https://wa.me/923122711434" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-12 h-12 rounded-xl bg-gray-800 hover:bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {["Home", "Projects", "Services", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                Services
              </span>
            </h3>
            <ul className="space-y-3">
              {["Web Development", "React Development", "Responsive Design", "SEO Optimization"].map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                Contact
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Memon Goth Malir, Karachi Pakistan</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300">+92 312 2711434</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300">salmanhanif44444@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Salman Hanif Portfolio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;