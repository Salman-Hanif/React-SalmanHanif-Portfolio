import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { OpenWorkStore } from '../ContextStore/OpenWorkStore';
import { IoMdClose } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function OpenWork() {
  const { webName } = useContext(OpenWorkStore);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const projects = {
    portfolio: {
      image: '/images/portfolio.webp',
      url: 'https://salmanhanif-portfolio.vercel.app/',
      title: 'Personal Portfolio',
      description: 'A modern portfolio website built with React and Tailwind CSS showcasing my projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'GSAP']
    },
    todoapp: {
      image: '/images/TodoApp.webp',
      url: 'https://todo-application-mr4y.vercel.app/',
      title: 'Todo Application',
      description: 'A responsive Todo app with CRUD functionality and local storage persistence.',
      technologies: ['React', 'LocalStorage', 'CSS3']
    },
    ahsan: {
      image: '/images/ahsan.webp',
      url: 'https://react-ahsan-medical-complex.vercel.app/',
      title: 'Ahsan Medical Complex',
      description: 'A medical website with modern design and responsive layout for healthcare services.',
      technologies: ['React', 'CSS3', 'Responsive Design']
    },
    ecommerce: {
      image: '/images/ecommerce.webp',
      url: 'https://ecommerce-website-developershub.vercel.app/',
      title: 'Ecommerce Website',
      description: 'A fully responsive e-commerce platform with product listings and shopping cart functionality.',
      technologies: ['React', 'E-commerce', 'UI/UX']
    },
    smashers: {
      image: '/images/smashers.webp',
      url: 'https://example.com/smashers',
      title: 'The Smashers Gym',
      description: 'A fitness website with dynamic design and membership information for a modern gym.',
      technologies: ['React', 'Fitness', 'Dynamic Design']
    },
    newshub: {
      image: '/images/news.webp',
      url: 'https://news-application-two-virid.vercel.app/',
      title: 'NewsHub Application',
      description: 'A news aggregator app with real-time updates and category-based news filtering.',
      technologies: ['React', 'API Integration', 'News']
    }
  };

  const projectKey = webName?.toLowerCase?.();
  const project = projects[projectKey] || projects['portfolio'];

  useGSAP(() => {
    // Background animation
    gsap.fromTo(containerRef.current,
      {
        opacity: 0,
        backgroundColor: 'rgba(12, 12, 12, 0)'
      },
      {
        opacity: 1,
        backgroundColor: 'rgba(12, 12, 12, 0.95)',
        duration: 0.5,
        ease: 'power2.out'
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'back.out(1.7)',
        delay: 0.2
      }
    );

    // Close button animation
    gsap.fromTo('.close-btn',
      {
        opacity: 0,
        rotation: -90,
        scale: 0.5
      },
      {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: 0.4
      }
    );

    // Image animation
    gsap.fromTo('.project-image',
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.6
      }
    );

    // Content details animation
    gsap.fromTo('.project-details',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.8,
        stagger: 0.1
      }
    );
  }, []);

  const handleClose = () => {
    // Animate out before navigating
    const exitTL = gsap.timeline({
      onComplete: () => navigate('/')
    });

    exitTL.to(contentRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.4,
      ease: 'power2.in'
    }).to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, 0);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-[#0c0c0c]/95 backdrop-blur-md z-50 flex items-center justify-center px-4 py-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-green-900/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-green-800/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div 
        ref={contentRef}
        className="relative w-full max-w-4xl lg:max-w-5xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl shadow-green-500/10 p-6 md:p-8 overflow-hidden"
      >
        {/* Close button */}
        <button
          className="close-btn absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-600 text-white rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
          onClick={handleClose}
        >
          <IoMdClose />
        </button>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Project Image */}
          <div className="lg:w-1/2">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover:border-green-500/50 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Live Project →</span>
                </div>
              </div>
            </a>
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="project-details text-2xl md:text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>
            
            <p className="project-details text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="project-details mb-6">
              <h3 className="text-green-400 font-semibold mb-3">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:bg-green-900/30 hover:text-green-300 hover:border-green-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Link */}
            <div className="project-details">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                Visit Live Website
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-500/5 rounded-full filter blur-xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full filter blur-xl"></div>
      </div>
    </div>
  );
}

export default OpenWork;