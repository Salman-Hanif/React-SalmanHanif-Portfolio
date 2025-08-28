import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Services() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and scalability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["HTML5, CSS3, JavaScript", "Backend Integration", "Database Management"],
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 2,
      title: "React Development",
      description: "Interactive web applications built with React.js for seamless user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ["React.js & Next.js", "State Management", "API Integration"],
      color: "from-blue-400 to-cyan-600"
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Beautiful designs that work perfectly on all devices and screen sizes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Mobile-First Approach", "Cross-Browser Compatibility", "Performance Optimized"],
      color: "from-purple-400 to-pink-600"
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your website.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO Audit"],
      color: "from-amber-400 to-orange-600"
    }
  ];

  useGSAP(() => {
    // Section title animation
    gsap.fromTo("#servicesHeading", 
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
          trigger: "#servicesHeading",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Section paragraph animation
    gsap.fromTo("#servicesPara", 
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
          trigger: "#servicesPara",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Service cards animation
    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: i * 0.2
        }
      );
    });

    // Hover animations for service cards
    gsap.utils.toArray(".service-card").forEach(card => {
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(card, {
        y: -15,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out"
      }).to(".service-icon", {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
      
      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Background elements animation
    gsap.to(".bg-blob-1", {
      x: 30,
      y: -20,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".bg-blob-2", {
      x: -30,
      y: 20,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black
      overflow-hidden">
      {/* Animated background elements */}
      <div className="bg-blob-1 absolute top-10 left-10 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl"></div>
      <div className="bg-blob-2 absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            id="servicesHeading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
              My Services
            </span>
          </h2>
          <p id="servicesPara" className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
            I deliver high-quality digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/30 transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Animated icon container */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 service-icon transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover effect elements */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-green-400/0 via-green-400/0 to-green-400/0 group-hover:from-green-400/10 group-hover:via-emerald-400/5 group-hover:to-green-400/10 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-md"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;