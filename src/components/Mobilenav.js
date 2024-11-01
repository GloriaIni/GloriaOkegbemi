"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Mobilenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden relative">
      <button 
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="flex items-center justify-center text-gray-800 text-2xl p-2 rounded hover:bg-teal-200 transition"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div 
        role="menu" 
        className={`absolute top-0 right-0 bottom-0 bg-teal-500 text-white transition-all duration-300 ${isOpen ? 'w-full opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}
      >
        <div className="flex flex-col p-4">
          <div onClick={closeMenu} className="flex items-center gap-4 p-3 cursor-pointer hover:bg-teal-400 transition">
            <FaTimes />
            <p className="font-semibold">Close Menu</p>
          </div>

          <ul className="flex flex-col space-y-2">
            <li onClick={closeMenu} className="py-2 px-4 rounded hover:bg-teal-400 transition cursor-pointer">Home</li>
            <li onClick={closeMenu} className="py-2 px-4 rounded hover:bg-teal-400 transition cursor-pointer">About</li>
            <li onClick={closeMenu} className="py-2 px-4 rounded hover:bg-teal-400 transition cursor-pointer">Services</li>
            <li onClick={closeMenu} className="py-2 px-4 rounded hover:bg-teal-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
