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
    <header className={`fixed z-20 w-full flex items-center px-5 lg:px-28 xl:h-[120px] backdrop-blur-sm transition-colors duration-300 ${isScrolled ? 'bg-gray-950' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-y-6 py-4 lg:py-8">
          {/* Logo */}
          <Link href={'/'} id="#home">
            <div className="text-gray-500 text-2xl lg:text-3xl font-bold cursor-pointer">
              <span className="text-gray-50 underline">gloria</span>okegbemi
            </div>
          </Link>

          <div className="hidden lg:flex">
            <Nav />
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <Mobilenav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
