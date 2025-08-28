import React, { useState, useRef, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimationContext } from "../App";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { isPreloaderComplete, registerAnimationTrigger } = useContext(AnimationContext);

  useGSAP(() => {
    if (isPreloaderComplete) {
      runAnimations();
    } else {
      registerAnimationTrigger("header", runAnimations);
    }

    function runAnimations() {
      // Logo animation
      gsap.fromTo(logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: -20,
          rotation: -5
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }
      );

      // Menu button animation
      gsap.fromTo(menuButtonRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotation: 90
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.3
        }
      );

      // Nav links animation
      gsap.fromTo(".nav-link",
        {
          opacity: 0,
          y: -20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }

    // Header background animation on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(headerRef.current, {
          background: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
          duration: 0.3
        });
      } else {
        gsap.to(headerRef.current, {
          background: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          duration: 0.3
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPreloaderComplete]);

  useGSAP(() => {
    if (isOpen) {
      // Menu open animation
      gsap.to(".mobile-nav-link", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      // Menu close animation
      gsap.to(".mobile-nav-link", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <header 
      ref={headerRef}
      className="fixed z-50 top-0 w-full h-[70px] px-[4vw] bg-black/80 backdrop-blur-md text-white flex justify-between items-center border-b border-green-900/30"
    >
      {/* Logo with enhanced styling */}
      <div 
        ref={logoRef}
        className="relative group cursor-pointer"
      >
        <span className="bg-gradient-to-r text-4xl font-bold from-green-400 to-emerald-600 text-transparent bg-clip-text">
            SALMAN
          </span>

        <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-400/10 rounded-full blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      </div>

      {/* Mobile menu button */}
      <div ref={menuButtonRef}>
        {isOpen ? (
          <FaTimes
            className="text-[#10be27] text-[30px] block md:hidden cursor-pointer z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FaBars
            className="text-[#10be27] text-[30px] block md:hidden cursor-pointer z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {/* Desktop Navigation menu */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="main"
          smooth={true}
          duration={500}
          className="nav-link text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="tech-stack"
          smooth={true}
          duration={500}
          className="nav-link text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Skills
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="nav-link text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="nav-link text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="submitform"
          smooth={true}
          duration={500}
          className="nav-link px-6 py-2 rounded-full bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-700/30 hover:border-green-400/50 hover:from-green-800/40 hover:to-emerald-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation menu */}
      <nav
        className={`${
          isOpen 
            ? "flex opacity-100 pointer-events-auto" 
            : "hidden opacity-0 pointer-events-none"
        } md:hidden flex-col absolute top-[70px] left-0 w-full h-screen bg-black/95 backdrop-blur-lg p-4 gap-6 text-white items-center justify-center transition-all duration-300`}
      >
        <Link
          to="main"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link opacity-0 translate-y-5 text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="tech-stack"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link opacity-0 translate-y-5 text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Skills
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="websites"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link opacity-0 translate-y-5 text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link opacity-0 translate-y-5 text-[18px] font-medium text-white hover:text-green-400 cursor-pointer relative group"
        >
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        <Link
          to="submitform"
          smooth={true}
          duration={500}
          onClick={() => setIsOpen(false)}
          className="mobile-nav-link opacity-0 translate-y-5 px-6 py-2 rounded-full bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-700/30 hover:border-green-400/50 hover:from-green-800/40 hover:to-emerald-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
        >
          Contact
        </Link>
      </nav>

      {/* Close menu when clicking outside (mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;