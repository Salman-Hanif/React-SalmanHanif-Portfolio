import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 top-0 w-full h-[70px] px-[4vw] py-[2vw] bg-black text-white flex justify-between items-center">
     <p
  className="hover:scale-110 transition-transform duration-300 cursor-pointer"
>
  <img className="w-[70px] " src="/images/SalmanLogoGreen.webp" alt="LOGO" srcset="" />
</p>


      <FaBars
        className="text-[#10be27] text-[30px] block md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-[70px] right-0 md:right-auto bg-black/80 md:bg-transparent backdrop-blur-md border-l-2 md:border-none border-green-600 rounded-bl-xl p-4 md:p-0 gap-5 text-white md:items-center`}
      >
        <Link
          to="main"
          onClick={() => setIsOpen(false)}
          className="text-[15px] md:text-[20px] font-medium hover:text-green-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="websites"
          onClick={() => setIsOpen(false)}
          className="text-[15px] md:text-[20px] font-medium hover:text-green-500 cursor-pointer"
        >
          My Work
        </Link>
        <Link
          to="services"
          onClick={() => setIsOpen(false)}
          className="text-[15px] md:text-[20px] font-medium hover:text-green-500 cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="submitform"
          onClick={() => setIsOpen(false)}
          className="text-[15px] md:text-[20px] font-medium hover:text-green-500 cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
