import React, { useContext, useRef } from "react";
import { OpenWorkStore } from "../ContextStore/OpenWorkStore";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Work() {
  gsap.registerPlugin(ScrollTrigger);
  const { getwebname } = useContext(OpenWorkStore);
  const sectionRef = useRef(null);
  
  // Sample work data
  const workItems = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A personal portfolio website built using React and Tailwind CSS. It showcases my skills, projects, and contact information in a clean, responsive, and modern layout. Designed and coded from scratch to reflect my identity as a frontend developer.",
      image: "/images/portfolio.webp",
      category: "portfolio",
      tags: ["React", "Tailwind CSS", "GSAP"]
    },
    {
      id: 2,
      title: "Todo Application",
      description: "A responsive Todo app built with React, Tailwind CSS, and React Icons. It allows users to add, edit, delete, and complete tasks. Todos are stored in the browser using localStorage, ensuring they persist even after refreshing the page.",
      image: "/images/TodoApp.webp",
      category: "todoapp",
      tags: ["React", "LocalStorage", "Responsive"]
    },
    {
      id: 3,
      title: "Ahsan Medical Complex",
      description: "A modern and responsive frontend design created for Ahsan Medical Complex, focusing on seamless user experience and clean medical aesthetics. The layout ensures easy navigation for patients and visitors, while maintaining a professional and trustworthy look.",
      image: "/images/ahsan.webp",
      category: "ahsan",
      tags: ["Medical", "UI/UX", "Responsive"]
    },
    {
      id: 4,
      title: "NewsHub",
      description: "A fully functional news application built using real-time APIs, delivering the latest headlines and articles across various categories. The application ensures a smooth, user-friendly experience with an intuitive and responsive design.",
      image: "/images/news.webp",
      category: "newshub",
      tags: ["API Integration", "News", "React"]
    },
    {
      id: 5,
      title: "Ecommerce Website",
      description: "A visually appealing and user-centric frontend design for an e-commerce website, developed during my internship at Developers Hub. The design focuses on product showcasing, smooth navigation, and a modern shopping experience.",
      image: "/images/ecommerce.webp",
      category: "ecommerce",
      tags: ["E-commerce", "UI Design", "Internship"]
    },
    {
      id: 6,
      title: "The Smashers",
      description: "A bold and energetic gym website developed for The Smashers Gym, featuring a dynamic and motivational design. The frontend highlights training programs, membership details, and contact sections with an emphasis on performance and strength.",
      image: "/images/smashers.webp",
      category: "smashers",
      tags: ["Gym", "Motivational", "Dynamic Design"]
    }
  ];

  useGSAP(() => {
    // Section title animation
    gsap.fromTo("#work h2", 
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
          trigger: "#work h2",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Work items animation
    gsap.utils.toArray(".work-item").forEach((item, i) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            markers: false
          },
          delay: i * 0.1
        }
      );
    });

    // Image hover effects
    gsap.utils.toArray(".work-image").forEach(image => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(image, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      }).to(".work-overlay", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
      
      image.addEventListener("mouseenter", () => hoverTl.play());
      image.addEventListener("mouseleave", () => hoverTl.reverse());
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-green-900/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-green-800/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Featured Work
          </span>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div 
              key={item.id}
              className="work-item group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <Link 
                to="/work" 
                onClick={() => getwebname(item.category)}
                className="block relative overflow-hidden"
              >
                <div className="work-image-container relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="work-image w-full h-48 object-cover transition-transform duration-500"
                  />
                  <div className="work-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded-full border border-green-800/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-green-400 text-sm font-medium group-hover:underline">
                      View Project
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 text-green-400 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-green-500/0 group-hover:border-green-500/30 transition-all duration-500 pointer-events-none"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Link
            to="/work"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group"
          >
            View All Projects
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div> */}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .work-item {
          transform: translateY(50px);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Work;