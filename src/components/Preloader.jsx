import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const preloaderRef = useRef(null);

  useGSAP(() => {
    if (isComplete) {
      // Animate out the preloader
      const exitTL = gsap.timeline({
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
          onComplete(); // Notify parent that preloader is complete
        }
      });
      
      exitTL.to(".preloader-content", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }).to(preloaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.2
      }, 0);
      
      return;
    }

    // Initial animation
    const tl = gsap.timeline();
    
    // Animate logo
    tl.fromTo(".preloader-logo",
      {
        scale: 0.5,
        rotation: -180,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );
    
    // Animate text
    tl.fromTo(".preloader-text",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5"
    );
    
    // Animate progress bar container
    tl.fromTo(".progress-container",
      {
        width: 0,
        opacity: 0
      },
      {
        width: "100%",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }
    );
    
    // Animate orbiting circles
    tl.to(".orbit-circle-1", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
      transformOrigin: "center"
    }, 0);
    
    tl.to(".orbit-circle-2", {
      rotation: -360,
      duration: 6,
      repeat: -1,
      ease: "none",
      transformOrigin: "center"
    }, 0);
    
    tl.to(".orbit-circle-3", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
      transformOrigin: "center"
    }, 0);
    
    // Background elements animation
    gsap.to(".preloader-blob-1", {
      x: 30,
      y: -20,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    gsap.to(".preloader-blob-2", {
      x: -30,
      y: 20,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });
  }, [isComplete, onComplete]);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="preloader" 
      ref={preloaderRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900"
    >
      {/* Animated background elements */}
      <div className="preloader-blob-1 absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
      <div className="preloader-blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="preloader-content relative z-10 flex flex-col items-center justify-center">
        {/* Animated orbiting circles */}
        <div className="relative mb-8 w-40 h-40">
          <div className="orbit-circle-1 absolute inset-0 border-2 border-green-500/30 rounded-full w-24 h-24 mx-auto"></div>
          <div className="orbit-circle-2 absolute inset-0 border-2 border-emerald-500/30 rounded-full w-32 h-32 mx-auto"></div>
          <div className="orbit-circle-3 absolute inset-0 border-2 border-green-400/20 rounded-full w-40 h-40 mx-auto"></div>
          
          {/* Logo */}
          <div className="preloader-logo w-20 overflow-hidden h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20 mx-auto">
            {/* <span className="text-white text-2xl font-bold">S</span> */}
            <img src="/images/SalmanLogoGreen.webp" alt="" srcset="" />
          </div>
        </div>
        
        {/* Text */}
        <h2 className="preloader-text text-2xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Salman Hanif
          </span>
        </h2>
        
        {/* Progress bar */}
        <div className="progress-container w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Progress percentage */}
        <p className="text-gray-400 text-sm">
          Loading... {Math.round(progress)}%
        </p>
        
        {/* Loading dots animation */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
}

export default Preloader;