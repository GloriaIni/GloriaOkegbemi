"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed z-20 w-full flex items-center px-4 lg:px-28 xl:h-[100px] backdrop-blur-sm transition-colors duration-300 ${isScrolled ? 'bg-black/90' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-y-6 py-6 lg:py-8">
          {/* Logo */}
          <Link href={'/'} id="#home">
            <div className="text-gray-500 text-2xl lg:text-3xl font-bold cursor-pointer">
              <span className="text-gray-50 underline">gloria</span>okegbemi
            </div>
          </Link>

          <div className="hidden lg:flex">
            <Nav />
          </div>

          <li className="hidden lg:flex">
              <a
                href="/docs/GLORIA INIOLUWA OKEGBEMI.pdf"
                className="block py-2 px-4 text-gray-200 border border-gray-200 rounded hover:bg-gray-200 hover:text-gray-900 hover:font-semibold transition-all duration-200 cursor-pointer "
                download={"GLORIA INIOLUWA OKEGBEMI.pdf"}
              >
                Resume
              </a>
            </li>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden">
            <Mobilenav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
