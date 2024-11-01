"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export const navData = [
  { 
    name: "Home", 
    path: "#home"
   },
  {
     name: "About Me",
      path: "#aboutme" 
    },
 
  { 
    name: "Skills", 
    path: "#skills"
   },
  {
     name: "Projects", 
     path: "#projects"
     },

  { 
    name: "Services", 
    path: "#services" 
  },
  {
     name: "Contact me",
      path: "#contact" 
    },
];

const Nav = () => {
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navData.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActivePath(link.path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="hidden lg:flex flex-row items-center justify-center">
      <div className="flex items-center justify-center text-[17px] gap-x-4">
        {navData.map((link, index) => (
          <Link
            className={`${activePath === link.path ? "text-gray-100 font-semibold rounded bg-gray-400/20" : ""} text-gray-300 font-normal relative flex items-center justify-center group hover:underline transition-all duration-300`}
            href={link.path}
            key={index}
            scroll={false} 
          >
            <div className="py-2 px-3">{link.name}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
