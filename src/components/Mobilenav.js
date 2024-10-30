"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Mobilenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='lg:hidden relative'>
      <button 
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className='flex items-center justify-center text-gray-100 text-2xl'
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute h-full left-0 bg-gray-800 text-white w-full mt-2 rounded-md shadow-lg">
          <ul className="flex flex-col p-2">
            <li className="py-2 px-4 hover:bg-gray-700">Home</li>
            <li className="py-2 px-4 hover:bg-gray-700">About</li>
            <li className="py-2 px-4 hover:bg-gray-700">Services</li>
            <li className="py-2 px-4 hover:bg-gray-700">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mobilenav;
