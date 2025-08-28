import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";

const SubmitForm = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useGSAP(() => {
    // Section title animation
    gsap.fromTo("#formHeading", 
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
          trigger: "#formHeading",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Map animation
    gsap.fromTo("#map", 
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
        rotationY: -15
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#map",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form animation
    gsap.fromTo("#form", 
      {
        opacity: 0,
        x: 100,
        scale: 0.9,
        rotationY: 15
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#form",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Input field animations
    gsap.utils.toArray(".form-input").forEach((input, i) => {
      gsap.fromTo(input,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: input,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Button animation
    gsap.fromTo("#submit-btn",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: "#submit-btn",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Background elements animation
    gsap.to(".contact-blob-1", {
      x: 20,
      y: -10,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".contact-blob-2", {
      x: -20,
      y: 10,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
    
    // Actually submit the form
    e.target.submit();
  }

  return (
    <section
      id="submitform"
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="contact-blob-1 absolute top-20 left-10 w-80 h-80 bg-green-500/5 rounded-full filter blur-3xl"></div>
      <div className="contact-blob-2 absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          id="formHeading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Let's Talk About Work
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div
            id="map"
            className="w-full rounded-3xl overflow-hidden min-h-[500px] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-10"></div>
            <iframe
              className="h-full w-full rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7236.741276949068!2d67.24685790976058!3d24.919440578049326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU1JzExLjgiTiA2N8KwMTQnNTcuMiJF!5e0!3m2!1sen!2s!4v1744178551979!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Form Section */}
          <div
            id="form"
            ref={formRef}
            className="w-full flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl blur-lg group-hover:blur-xl transition duration-500 opacity-70 group-hover:opacity-100"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-3xl p-8 group hover:border-green-400/30 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Get In Touch
                  </h3>
                </div>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl text-green-300">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/salmanhanif44444@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from Portfolio"
                  />

                  <div className="form-input">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300"
                      placeholder="What should I call you?"
                      required
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="form-input">
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    id="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitForm;