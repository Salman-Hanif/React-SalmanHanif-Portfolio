import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useContext } from "react";
import { AnimationContext } from "../App";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGreensock,
  SiRedux,
  SiGithub,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiFirebase
} from "react-icons/si";

function TechStack() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const { isPreloaderComplete, registerAnimationTrigger } = useContext(AnimationContext);

  // Technology stack data with React Icons
  const technologies = [
    { 
      name: "React", 
      icon: <SiReact size={32} />, 
      color: "#61DAFB",
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs size={32} />, 
      color: "#000000",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript size={32} />, 
      color: "#F7DF1E",
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript size={32} />, 
      color: "#007ACC",
      category: "Frontend"
    },
    { 
      name: "HTML5", 
      icon: <SiHtml5 size={32} />, 
      color: "#E34F26",
      category: "Styles"
    },
    { 
      name: "CSS3", 
      icon: <SiCss3 size={32} />, 
      color: "#1572B6",
      category: "Styles"
    },
    { 
      name: "Sass", 
      icon: <SiSass size={32} />, 
      color: "#CC6699",
      category: "Styles"
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss size={32} />, 
      color: "#06B6D4",
      category: "Styles"
    },
    { 
      name: "GSAP", 
      icon: <SiGreensock size={32} />, 
      color: "#88CE02",
      category: "Tools & Others"
    },
    { 
      name: "Redux", 
      icon: <SiRedux size={32} />, 
      color: "#764ABC",
      category: "Tools & Others"
    },
    { 
      name: "GitHub", 
      icon: <SiGithub size={32} />, 
      color: "#181717",
      category: "Tools & Others"
    },
    // { 
    //   name: "Node.js", 
    //   icon: <SiNodedotjs size={32} />, 
    //   color: "#339933",
    //   category: "Tools & Others"
    // },
    // { 
    //   name: "Git", 
    //   icon: <SiGit size={32} />, 
    //   color: "#F05032",
    //   category: "Tools & Others"
    // },
    // { 
    //   name: "Figma", 
    //   icon: <SiFigma size={32} />, 
    //   color: "#F24E1E",
    //   category: "Tools & Others"
    // },
    // { 
    //   name: "Firebase", 
    //   icon: <SiFirebase size={32} />, 
    //   color: "#FFCA28",
    //   category: "Tools & Others"
    // },
  ];

  // Categorize technologies
  const frontendTechs = technologies.filter(tech => tech.category === "Frontend");
  const stylesTechs = technologies.filter(tech => tech.category === "Styles");
  const toolsTechs = technologies.filter(tech => tech.category === "Tools & Others");

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
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
        style={{ 
          backgroundColor: `${tech.color}20`,
          color: tech.color
        }}
      >
        {tech.icon}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    );
  };

  return (
    <section id="tech-stack" ref={sectionRef} className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
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
          {/* Frontend Technologies */}
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendTechs.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white flex items-center"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  <span className="mr-2" style={{ color: tech.color }}>
                    {React.cloneElement(tech.icon, { size: 16 })}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Styles Technologies */}
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
              Styles
            </h3>
            <div className="flex flex-wrap gap-2">
              {stylesTechs.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white flex items-center"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  <span className="mr-2" style={{ color: tech.color }}>
                    {React.cloneElement(tech.icon, { size: 16 })}
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Others Technologies */}
          <div className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-2">
              {toolsTechs.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-sm transition-all duration-300 hover:bg-gray-700 hover:text-white flex items-center"
                  style={{ borderLeft: `3px solid ${tech.color}` }}
                >
                  <span className="mr-2" style={{ color: tech.color }}>
                    {React.cloneElement(tech.icon, { size: 16 })}
                  </span>
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