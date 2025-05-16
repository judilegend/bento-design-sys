"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  // Animation d'entrée du navbar
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Animation des éléments du menu
    const menuItems = navbarRef.current.querySelectorAll(".menu-item");
    tl.fromTo(
      menuItems,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
      "-=0.3"
    );

    // Animation du logo
    const logo = navbarRef.current.querySelector(".logo-container");
    tl.fromTo(
      logo,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5 },
      "-=0.5"
    );

    // Animation des boutons
    const buttons = navbarRef.current.querySelectorAll(".nav-button");
    tl.fromTo(
      buttons,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
      "-=0.3"
    );

    // Détection du scroll pour changer l'apparence du navbar
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation du menu mobile
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo et nom */}
          <div className="flex items-center logo-container">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple to-purple/80 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                <span className="text-lg">SB</span>
              </div>
              <span className="ml-2.5 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple to-purple/80">
                SocialBoost
              </span>
            </Link>
          </div>

          {/* Menu de navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative px-5 py-1.5 rounded-full bg-gray-100/70">
              <div className="flex space-x-1">
                {[
                  { id: "dashboard", label: "Dashboard" },
                  { id: "calendar", label: "Calendar" },
                  { id: "analytics", label: "Analytics" },
                  { id: "settings", label: "Settings" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`menu-item relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeItem === item.id
                        ? "text-purple"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {activeItem === item.id && (
                      <span className="absolute inset-0 bg-purple/10 rounded-full -z-10"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Boutons d'action - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="nav-button relative overflow-hidden bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 group">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </span>
            </button>

            <button className="nav-button relative overflow-hidden bg-purple text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg group">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Post
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple/80 to-purple scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                className="nav-button flex items-center space-x-2 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow to-yellow/70 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-medium text-gray-800">JP</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          {[
            { id: "dashboard", label: "Dashboard" },
            { id: "calendar", label: "Calendar" },
            { id: "analytics", label: "Analytics" },
            { id: "settings", label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeItem === item.id
                  ? "bg-purple/10 text-purple"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pt-4 pb-3 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center px-4 py-2">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow to-yellow/70 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-800">JP</span>
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                John Doe
              </div>
              <div className="text-sm font-medium text-gray-500">
                john@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <Link
              href="#"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Your Profile
            </Link>
            <Link
              href="#"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Settings
            </Link>
            <Link
              href="#"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-red-600 hover:bg-red-50"
            >
              Sign out
            </Link>
          </div>
        </div>

        <div className="px-4 py-3 bg-gray-50">
          <button className="w-full bg-purple text-white py-2.5 px-4 rounded-lg text-base font-medium hover:bg-opacity-90 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Post
          </button>
        </div>
      </div>

      {/* Indicateur de progression de défilement */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100">
        <div
          className="h-full bg-purple"
          style={{
            width: `${
              typeof window !== "undefined"
                ? (window.scrollY /
                    (document.documentElement.scrollHeight -
                      document.documentElement.clientHeight)) *
                  100
                : 0
            }%`,
          }}
        ></div>
      </div>
    </nav>
  );
}
