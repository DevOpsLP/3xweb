"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(scrollPos > currentScrollPos && currentScrollPos > 0);
      setShowNavbar(currentScrollPos < 50 || isScrollingUp);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, isScrollingUp]);

  return (
    <nav
      className={`${showNavbar ? "top-0" : "-top-32"
        } py-4 fixed w-full z-20 p-4 transition-all duration-300 ${isScrollingUp
          ? "bg-gray-800 opacity-15 text-white shadow-md"
          : "bg-dark-500 text-white"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="transform transition delay-75 hover:scale-110 lg:text-2xl font-bold text-white">
          <Link href="/">
          <Image
                src="/images/3xlogo.png" // replace with your image path
                alt="Hero Image"
                width={100}
                height={100}
                priority // This ensures the image loads quickly
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex space-x-12 items-center text-2xl ${isScrollingUp ? "text-white" : "text-white"
            }`}
        >
          <Link className="link-button hover:font-bold hover:text-primary-500 py-2" href="/services">
            About us
          </Link>
          <Link className="link-button hover:font-bold hover:text-primary-500 py-2" href="/urnas">
            FAQ
          </Link>
          <Link className="link-button hover:font-bold hover:text-primary-500 py-2" href="/contact">
            Contact
          </Link>

          {/* Sign In and Sign Up buttons */}
          <div className="flex space-x-6 items-center text-xl">
            <Link href="/signin">
              <button className="btn-1 relative font-bold text-white hover:text-primary-500 py-3 md:py-4 px-4 md:px-6 rounded overflow-hidden group hover:bg-transparent transition-all duration-100 ease-in-out">
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                  JOIN NOW
                </span>
                {/* SVG Rectangle for Border Animation */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" viewBox="0 0 110 45" preserveAspectRatio="none">
                  <rect x="2" y="2" width="106" height="41" className="stroke-current" />
                </svg>
              </button>
            </Link>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
