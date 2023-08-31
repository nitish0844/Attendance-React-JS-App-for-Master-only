/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //Add fixed to float over the header
    <nav className="flex p-4 bg-Tiger-black justify-end text-white md:justify-end md:pl-11 z-20">
      <div className="md:hidden">
        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className={`block text-white hover:text-white focus:text-white focus:outline-none transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          {isOpen ? (
            <FiX className="h-6 w-6 fill-current z-50 cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="flex h-6 w-6 fill-current cursor-pointer" />
          )}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-60 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {isOpen && (
          <ul className="mt-2 fixed top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center self-center z-50 bg-Tiger-black space-y-4 w-full">
            <li>
              <a className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
                Attendence
              </a>
            </li>
            <li>
              <a className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
                Gallery
              </a>
            </li>
            <li>
              <a className="rounded-lg text-white py-2 px-4 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* MD screen components */}

      <ul className="hidden md:flex space-x-8">
        <li>
          <a className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
            Attendance
          </a>
        </li>
        <li>
          <a className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
            Gallery
          </a>
        </li>
        <li>
          <a className="bg-TigerColor rounded-lg text-black py-2 px-2 md:py-2 md:px-4 text-sm md:text-base md:font-semibold cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
