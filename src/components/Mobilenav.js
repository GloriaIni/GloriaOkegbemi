import { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import Link from "next/link";

const Mobilenav = () => {
  const [visible, setVisible] = useState(false);

  const handleLinkClick = () => {
    setVisible(false); 
  };

  return (
    <>
      <div className="w-screen overflow-hidden">
        <div className="flex items-center justify-center text-gray-100 transition pr-1 text-xl">
          <FaBars onClick={() => setVisible(true)} className="cursor-pointer" />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 top-4 h-screen z-40 overflow-x-hidden text-gray-100 bg-black/90 transition-transform duration-300 transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!visible}
      >
        <div className="flex flex-col h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <FaArrowLeft className="text-xl" />
            <p className="text-gray-100">Back</p>
          </div>

          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <Link
                href="/#home"
                onClick={handleLinkClick}
                className="block py-2 px-4 border border-gray-600 rounded hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#aboutme"
                onClick={handleLinkClick}
                className="block py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                onClick={handleLinkClick}
                className="block py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={handleLinkClick}
                className="block py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-600"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <a
                href="\docs\Resume-GLORIA INIOLUWA OKEGBEMI.pdf"
                onClick={handleLinkClick}
                className="block py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-600"
                download={"Resume-GLORIA INIOLUWA OKEGBEMI.pdf"}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
