"use client";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const NavbarContext = createContext();

export const useNavbar = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

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
    <NavbarContext.Provider value={{ isNavbarVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};
