 import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useContext } from "react";
import { AnimationContext } from "../App";

function TechStack() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const { isPreloaderComplete, registerAnimationTrigger } = useContext(AnimationContext);

  // Your technology stack data
  const technologies = [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next.js", icon: "nextjs", color: "#000000" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "#007ACC" },
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "GSAP", icon: "gsap", color: "#88CE02" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
    { name: "Firebase", icon: "firebase", color: "#FFCA28" },
  ];

  // Duplicate the array for seamless looping
  const duplicatedTechs = [...technologies, ...technologies];

  useGSAP(() => {
    if (isPreloaderComplete) {
      runAnimations();
    } else {
      registerAnimationTrigger("techstack", runAnimations);
    }

    function runAnimations() {
      // Section title animation
      gsap.fromTo("#techStackHeading", 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#techStackHeading",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Infinite horizontal animation for the slider
      const sliderWidth = sliderRef.current.scrollWidth / 2;
      
      gsap.to(sliderRef.current, {
        x: -sliderWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % sliderWidth)
        }
      });

      // Individual tech item animations
      gsap.utils.toArray(".tech-item").forEach((item, i) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            y: 50,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            delay: i * 0.1
          }
        );

        // Hover animation for each tech item
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl.to(item, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
        
        item.addEventListener("mouseenter", () => hoverTl.play());
        item.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      // Background elements animation
      gsap.to(".tech-blob-1", {
        x: 20,
        y: -10,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".tech-blob-2", {
        x: -20,
        y: 10,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 3
      });
    }
  }, [isPreloaderComplete]);

  // Function to render technology icon
  const renderTechIcon = (tech) => {
    return (
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold mb-3 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
      >
        {tech.name.slice(0, 1)}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  return (
    <section id="tech-stack" ref={sectionRef} className="relative py-20 px-4 md:px-8 lg:px-16  bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="tech-blob-1 absolute top-20 left-10 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl"></div>
      <div className="tech-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 id="techStackHeading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </h2>

        {/* Technology Slider */}
        <div className="relative overflow-hidden mb-16">
          <div 
            ref={sliderRef}
            className="flex whitespace-nowrap"
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="tech-item inline-flex flex-col items-center mx-4 p-6 bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700 hover:border-green-400/30 transition-all duration-300 group"
              >
                {renderTechIcon(tech)}
                <span className="text-white font-medium text-sm group-hover:text-green-400 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        </div>

        {/* Technology categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
              Styling
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(4, 7).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(7).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-item {
          flex: 0 0 auto;
          width: 150px;
        }
        
        /* Animation for the slider */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default TechStack;