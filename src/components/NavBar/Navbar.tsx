"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black opacity-95 text-white sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href={'/'}>
            <h1 className="text-2xl font-bold text-center bg-gradient-to-b from-orange-600 via-white to-green-600 bg-clip-text text-transparent cursor-pointer">
              Mod Narayan Singh
            </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="#home"
              onClick={() => handleScroll("home")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "home"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => handleScroll("about")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "about"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={() => handleScroll("experience")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "experience"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              onClick={() => handleScroll("skills")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "skills"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => handleScroll("projects")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "projects"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={() => handleScroll("contact")}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                activeSection === "contact"
                  ? "text-blue-800"
                  : "hover:text-blue-500 px-3 py-2 text-sm font-medium"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4">
            <Link
              href="#home"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="#experiences"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block text-center py-2 px-3 hover:bg-gray-800"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
