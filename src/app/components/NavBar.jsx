"use client";

import { Clicker_Script } from "next/font/google";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div
      className={`fixed top-0 left-0 right-0 p-6 z-10 transition-transform ${
        isNavbarVisible ? "" : "hidden-navbar"
      }`}
    >
      <nav class="bg-black flex items-center justify-between flex-wrap p-2 fixed top-0 left-0 right-0  z-10  ">
        <div class="flex items-center flex-shrink-0 text-white mr-6 gap-3">
          <img src="img/logo3.png" className="" width={50} alt="Level Web" />
          <span className=" text-2xl font-bold tracking-tighter sm:text-2xl xl:text-2xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Level Web
          </span>
        </div>
        <div class="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              class="fill-current h-3 w-3"
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
          <div className="text-sm lg:flex-grow">
            <button
              onClick={toggleMenu}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-teal-500 mr-4"
            >
              <Link href="/">Home</Link>
            </button>
            <button
              onClick={toggleMenu}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-teal-500 mr-4"
            >
              <Link href="works">Trabajos</Link>
            </button>
            <button
              onClick={toggleMenu}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-teal-500"
            >
              <Link href="about">Un poco de Mi</Link>
            </button>
          </div>
          <div>
            <Link
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
