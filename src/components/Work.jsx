import React, { useContext } from "react";
import { OpenWorkStore } from "../ContextStore/OpenWorkStore";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Work() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const workTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        // markers:true,
        start: "top 80%",
        scrub: true,
        end: "60% top",
      },
    });
    workTL.from("#work h2", {
      opacity: 0,
      y: 50,
      duration: 0.3,
    });
    workTL.from("#websites .website", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
    });
  });

  const { getwebname } = useContext(OpenWorkStore);

  return (
    <div id="work">
      <h2 className="text-white text-3xl text-center md:text-4xl mb-8 underline decoration-[#10be27]">
        MY WORK
      </h2>
      <section
        id="websites"
        className="sectiontwo2 px-4 justify-center p-0 m-0 relative"
      >
        <div className="website flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("portfolio")}
              className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
            >
              <img
                src="/images/portfolio.webp"
                alt="Salman Hanif Portflio"
                className="max-w-[400px] w-full rounded-2xl relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>

          <div className="w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              Personal Porfolio
            </h3>

            <p className="text-justify text-sm md:text-base mt-2">
              A personal portfolio website built using React and Tailwind CSS.
              It showcases my skills, projects, and contact information in a
              clean, responsive, and modern layout. Designed and coded from
              scratch to reflect my identity as a frontend developer.
            </p>
          </div>
        </div>
        <div className="website flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              Todo Application
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A responsive Todo app built with React, Tailwind CSS, and React
              Icons. It allows users to add, edit, delete, and complete tasks.
              Todos are stored in the browser using localStorage, ensuring they
              persist even after refreshing the page.
            </p>
          </div>

          <div className="h-[1px] left-1/2 right-1/4 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("todoapp")}
              className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
            >
              <img
                src="/images/TodoApp.webp"
                alt="todo application"
                className="max-w-[400px] rounded-2xl w-full mr-auto relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>
        </div>
        <div className="website flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("ahsan")}
              className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
            >
              <img
                src="/images/ahsan.webp"
                alt="Ahsan Medical Complex"
                className="max-w-[400px] w-full rounded-2xl relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>

          <div className="w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              Ahsan Medical Complex
            </h3>

            <p className="text-justify text-sm md:text-base mt-2">
              A modern and responsive frontend design created for Ahsan Medical
              Complex, focusing on seamless user experience and clean medical
              aesthetics. The layout ensures easy navigation for patients and
              visitors, while maintaining a professional and trustworthy look.
            </p>
          </div>
        </div>
        <div className="website flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              NewsHub
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A fully functional news application built using real-time APIs,
              delivering the latest headlines and articles across various
              categories. The application ensures a smooth, user-friendly
              experience with an intuitive and responsive design.
            </p>
          </div>

          <div className="h-[1px] left-1/2 right-1/4 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("newshub")}
              className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
            >
              <img
                src="/images/news.webp"
                alt="NewsHub"
                className="max-w-[400px] rounded-2xl w-full mr-auto relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>
        </div>
        <div className="website flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="h-[1px] left-1/4 right-1/2 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("ecommerce")}
              className="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
            >
              <img
                src="/images/ecommerce.webp"
                alt="EcommerceWebsite"
                className="max-w-[400px] rounded-2xl w-full mr-auto relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>

          <div className="w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              Ecommerce Website
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A visually appealing and user-centric frontend design for an
              e-commerce website, developed during my internship at Developers
              Hub. The design focuses on product showcasing, smooth navigation,
              and a modern shopping experience.
            </p>
          </div>
        </div>
        <div className="website flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#04b30f] font-bold text-2xl md:text-4xl">
              The Smashers
            </h3>
            <p className="text-justify text-sm md:text-base mt-2">
              A bold and energetic gym website developed for The Smashers Gym,
              featuring a dynamic and motivational design. The frontend
              highlights training programs, membership details, and contact
              sections with an emphasis on performance and strength.
            </p>
          </div>

          <div className="h-[1px] left-1/2 right-1/4 bg-[#10be27] absolute top-1/2 hidden sm:block" />
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffffff] absolute left-1/2 -translate-x-1/2 bg-[#111] z-1 hover:scale-110 ease-in-out duration-100 hidden sm:block" />

          <Link
            to="/work"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div
              onClick={() => getwebname("smashers")}
              className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
            >
              <img
                src="/images/smashers.webp"
                alt="The Smashers"
                className="max-w-[400px] rounded-2xl w-full mr-auto relative z-1 drop-shadow-[0_0px_60px_#0e52189f]"
              />
            </div>
          </Link>
        </div>
        <div className="w-[2px] hidden sm:block bg-[#10be27] absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
}

export default Work;
