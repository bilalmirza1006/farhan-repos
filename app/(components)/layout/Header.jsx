// app/(components)/layout/Header.tsx
"use client";

import { Home, Info, LogIn, Menu, MessageCircle, X } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";
import Link from "next/link";

// import { Button } from "@/app/(components)/ui/Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full shadow-sm bg-white border-b border-gray-200 relative">
      <div className="h-[90px] flex items-center justify-between md:justify-around px-4 py-3 md:py-4">
        {/* Left: Logo & Hamburger */}
        <div className="flex items-center  w-full md:justify-center  gap-3 ">
          <button
            className="text-[#C7044C] text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <img src="/logo.png" alt="Logo" className="h-10 md:h-10" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center  w-full justify-center  gap-8">
          <Link
            href="/"
            className="font-roboto font-semibold text-sm leading-5 px-2.5 py-4.5 text-Primarytext hover:bg-[#F7F7F7] hover:rounded-[12px]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-roboto font-semibold text-sm leading-5 px-2.5 py-4.5 text-Primarytext hover:bg-[#F7F7F7] hover:rounded-[12px]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-roboto font-semibold text-sm leading-5 px-2.5 py-4.5 text-Primarytext hover:bg-[#F7F7F7] hover:rounded-[12px]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className=" flex items-center  gap-2  w-full justify-center  md:gap-4">
          <Button
            text="Sign Up"
            bg="bg-none"
            color="text-black"
            cn={
              "hover:underline hover:bg-primarycolor hover:text-white !px-2 md:!px-6 "
            }
          />
          <Button
            text="Login / Register"
            bg="bg-primarycolor "
            color="text-white "
            cn={"!px-2 md:!px-6 "}
          />
          {/* <button className="font-roboto font-medium text-sm leading-5 text-primary hover:underline">Sign up</button>
                    <button className="bg-[#C8102E] text-white px-4 py-2 rounded-md hover:bg-[#a20d26]">
                        Login / Register
                    </button> */}
        </div>
      </div>

      {/* Background Overlay (click to close) */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide-in Mobile Menu (from left) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <img src="/logo.png" alt="Logo" className="h-8" />
          {/* <button
                        className="text-[#C7044C] text-2xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX />
                    </button> */}
        </div>

        <nav className="flex flex-col gap-4 mt-5 ">
          <Link
            href="/"
            className="flex items-center py-4 px-6 gap-6 text-Primarytext font-inter text-lg font-medium leading-5 hover:text-[#C8102E]"
            onClick={() => setMenuOpen(false)}
          >
            <Home className="text-xl" />
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-6 py-4 px-6 text-Primarytext font-inter text-lg font-medium leading-5 hover:text-[#C8102E]"
            onClick={() => setMenuOpen(false)}
          >
            <Info className="text-xl" />
            About Us
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-6 py-4 px-6 text-Primarytext font-inter text-lg font-medium leading-5 hover:text-[#C8102E]"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle className="text-xl" />
            Contact Us
          </Link>
          <a
            href="#"
            className="flex items-center gap-6 py-4 px-6 text-Primarytext font-inter text-lg font-medium leading-5 hover:text-[#C8102E]"
          >
            <LogIn className="text-xl" />
            Login / Register
          </a>
        </nav>

        {/* <div className="flex flex-col gap-2 mt-6 px-6">
                    <button className="text-gray-600 border border-gray-300 py-2 rounded-md hover:text-[#C8102E]">
                        Sign up
                    </button>
                    <button className="bg-[#C8102E] text-white py-2 rounded-md hover:bg-[#a20d26]">
                        Login / Register
                    </button>
                </div> */}
      </div>
    </header>
  );
};
