"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-yellow-500 p-2 transition-transform sticky top-0 shadow-xl ${
          isNavbarVisible ? "" : "hidden-navbar"
        }`}
      >
        <div className=" flex items-center justify-between flex-wrap p-2   ">
          <div className="flex items-center flex-shrink-0 text-white mr-6 gap-3">
            <span className="pl-1 text-2xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none text-black font-normal">
              Top One Burgers
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-teal-400 hover:text-white hover:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <div className="text-md text lg:flex-grow">
              <Link
                href={"/"}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-black mr-4"
              >
                Inicio
              </Link>
              <Link
                href={"/shop"}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                hover:text-black mr-4"
              >
                Menú
              </Link>
              <Link
                href="https://wa.me/3755390616"
                target="_blank"
                rel="noreferrer"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200
                hover:text-black"
              >
                Contacto
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Nav;
