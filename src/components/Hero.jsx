import React, { useEffect, useRef, useContext } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Typed from "typed.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimationContext } from "../App";

const Hero = () => {
  const el = useRef(null);
  const heroSection = useRef(null);
  const { isPreloaderComplete, registerAnimationTrigger } = useContext(AnimationContext);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["CODER", "FRONTEND DEVELOPER", "WEB DESIGNER"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useGSAP(() => {
    if (isPreloaderComplete) {
      runAnimations();
    } else {
      registerAnimationTrigger("hero", runAnimations);
    }

    function runAnimations() {
      // Create a master timeline
      const masterTL = gsap.timeline();

      // Animate the profile image with enhanced effects
      masterTL.fromTo("#heroImg", 
        {
          opacity: 0,
          scale: 0.8,
          rotation: -10,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.7)",
          boxShadow: "0 0 0px rgba(16, 190, 39, 0.5)"
        }
      );

      // Add a glowing animation to the image border
      masterTL.to("#heroImg", {
        boxShadow: "0 0 25px rgba(16, 190, 39, 0.8)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, "<+=0.5");
      masterTL.to("#heroImg", {
        duration: 0.3,
        x:0,
        ease: "sine.inOut"
      }, "<+=0.5");

      masterTL.fromTo("#heroH1", 
        {
          opacity: 0,
          y: 80,
          skewY: 10,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out"
        }
      );

      masterTL.fromTo("#heroH2", 
        {
          opacity: 0,
          y: -50,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        },
        "<+=0.3"
      );

      masterTL.fromTo("#heroP", 
        {
          opacity: 0,
          y: 30,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        },
        "<+=0.2"
      );

      masterTL.fromTo(".icon-container", 
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "<+=0.3"
      );

      masterTL.to(".icon-container", {
        y: -5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      }, "<+=0.5");

      masterTL.to(".icon-border", {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "none"
      }, "<");

      masterTL.fromTo("#heroButtons a", 
        {
          opacity: 0,
          y: 50,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "<+=0.4"
      );

      masterTL.to("#heroButtons button", {
        boxShadow: "0 5px 15px rgba(16, 190, 39, 0.4)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, "<+=0.5");

      masterTL.to(".btn-border", {
        rotation: 360,
        duration: 6,
        repeat: -1,
        ease: "none"
      }, "<");
    }
  }, [isPreloaderComplete]);

  return (
    <section
      ref={heroSection}
      id="main"
      className="relative bg-gradient-to-b from-black to-gray-900 flex overflow-hidden flex-col md:flex-row justify-start items-center px-[2vw] min-h-screen w-full pt-[70px]"
      style={{ marginTop: 0 }}
    >
      <div className="hero-blob-1 absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-green-900/20 to-transparent rounded-full filter blur-3xl"></div>
      <div className="hero-blob-2 absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-green-800/15 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="w-full flex justify-center items-center h-full z-10 py-8">
        <div
          id="heroImg"
          className="relative w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-full overflow-hidden transition duration-500 z-10"
          style={{
            border: "3px solid transparent",
            background: "linear-gradient(45deg, #0a0a0a, #0a0a0a) padding-box, linear-gradient(45deg, #10be27, #043a0b, #10be27) border-box",
            backgroundSize: "200% 200%",
          }}
        >
          <img
            src="/images/salmanprofile.webp"
            alt="Salman"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-white gap-4 h-full text-center md:text-left z-10 pb-8">
        <h1 id="heroH1" className="text-[28px] font-semibold lg:text-[50px] px-4">
          Hey I'm{" "}
          <span className="font-bold bg-gradient-to-r from-[#10be27] via-[#0c991f] to-green-400 text-transparent bg-clip-text">
            SALMAN
          </span>{" "}
          HANIF
        </h1>
        <h2 id="heroH2" className="text-[4vw] md:text-[2vw] px-4">
          I'm a{" "}
          <span
            ref={el}
            className="font-semibold bg-gradient-to-r from-[#10be27] to-green-400 text-transparent bg-clip-text"
          />
        </h2>

        <p id="heroP" className="text-[15px] lg:text-[20px] text-center mx-4 max-w-2xl">
          I am Frontend Developer passionate about building fast, user-friendly
          and visually appealing websites.
        </p>

        <div
          id="heroIcons"
          className="flex items-center justify-center gap-4 py-4"
        >
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
              className="icon-container relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group bg-black rounded-full border-2 border-green-600 hover:bg-green-600 transition-all duration-300"
            >
              <div className="text-green-400 group-hover:text-white transition-colors duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        <div id="heroButtons" className="flex gap-6 justify-center flex-wrap">
          <a href="#submitform" className="relative group">
            <div className="btn-border absolute -inset-1 bg-gradient-to-r from-[#10be27] to-[#043a0b] rounded-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-8 cursor-pointer py-3 bg-gradient-to-r from-[#10be27] to-[#0c991f] text-white font-bold rounded-lg hover:-translate-y-1 transition-all duration-300 shadow-lg z-10">
              Let's Talk
            </button>
          </a>
          <a
            href="\CV\Salman Hanif Frontend Resume .pdf"
            download="Salman-Hanif-CV"
            className="relative group"
          >
            <div className="btn-border absolute -inset-1 bg-gradient-to-r from-[#10be27] to-[#043a0b] rounded-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-8 cursor-pointer py-3 bg-black border-2 border-transparent text-[#10be27] font-bold rounded-lg hover:bg-[#10be27] hover:text-white transition-all duration-300 shadow-lg z-10">
              Download CV
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        #heroImg {
          animation: gradientMove 3s ease infinite;
        }
        
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .icon-border {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;