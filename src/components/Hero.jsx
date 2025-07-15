import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["CODER", "FRONTEND DEVELOPER", "WEB DESIGNER"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="main"
      className="bg-black flex flex-col md:flex-row justify-start items-center px-[2vw] h-screen mt-[70px] w-full"
    >
      <div className="w-full flex justify-center items-center h-full">
        <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] border-[5px] border-[#10be27] rounded-full overflow-hidden transition duration-500 hover:border-white hover:shadow-[0_0_25px_#04b30f] hover:-translate-y-1">
          <img
            src="\images\salmanprofile.webp"
            alt="Salman"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <div className="w-full flex flex-col items-center justify-center text-white gap-4 h-full text-center md:text-left">
        <h1 className="text-[28px] font-semibold lg:text-[50px] ">
          Hey I'm{" "}
          <span className="font-bold bg-gradient-to-r from-[#10be27] to-green-400 text-transparent bg-clip-text">
            SALMAN
          </span>{" "}
          HANIF
        </h1>
        <h2 className="text-[4vw] md:text-[2vw]">
          I'm a{" "}
          <span
            ref={el}
            className="font-semibold bg-gradient-to-r from-[#10be27] to-green-400 text-transparent bg-clip-text"
          />
        </h2>

        <p className="text-[15px] lg:text-[20px] text-center mx-4">
          I am Frontend Developer passionate about building fast, user-friendly
          and visually appealing websites.
        </p>

        <div className="flex items-center justify-center gap-4 py-4">
          <a
            href="https://www.instagram.com/salman_hanifff?igsh=YThyYjZ5cDU2bHVu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-[#10be27] text-[#10be27] flex items-center justify-center hover:scale-110 hover:text-white hover:bg-[#10be27] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="http://www.linkedin.com/in/salman-hanif-774713300/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-[#10be27] text-[#10be27] flex items-center justify-center hover:scale-110 hover:text-white hover:bg-[#10be27] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Salman-Hanif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-[#10be27] text-[#10be27] flex items-center justify-center hover:scale-110 hover:text-white hover:bg-[#10be27] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/923122711434"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-[#10be27] text-[#10be27] flex items-center justify-center hover:scale-110 hover:text-white hover:bg-[#10be27] transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="#submitform">
            <button className="px-6 cursor-pointer py-2 bg-[#10be27] text-white font-bold rounded hover:-translate-y-1 hover:shadow-[0_0_25px_#04b30f] transition">
              Let's Talk
            </button>
          </a>
          <a href="\CV\Salman Hanif Frontend Resume .pdf" download="Salman-Hanif-CV">
            <button className="px-6 cursor-pointer py-2 bg-[#10be27] text-white font-bold rounded hover:-translate-y-1 hover:shadow-[0_0_25px_#04b30f] transition">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
