'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Home2Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Guides', href: '#guides' },
  ];

  return (
    <header className="w-full  backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home-2" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-8 md:h-10" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-[#FFFFFF3D] text-black px-4 py-2 rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-[#C7044C] font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Login Button */}
            <button
              className="bg-[#FFFFFF3D] flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm text-gray-900 transition-all duration-200 hover:scale-105"
              style={{
                boxShadow: '0px 0.98px 1.96px 0px #1018280D',
              }}
            >
              Login
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Get Started Button */}
            <button className="px-6 py-2.5 bg-[#C7044C] text-white rounded-lg font-medium text-sm hover:bg-[#a4003d] transition-all duration-200 hover:scale-105 shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#C7044C] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <button
              className="text-gray-700 hover:text-[#C7044C]"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col px-6 py-6 space-y-1 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#C7044C] hover:bg-gray-50 font-medium text-base py-3 px-4 rounded-lg transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 px-6 py-6 border-t border-gray-100">
            {/* Login Button - Mobile */}
            <button
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium text-sm text-gray-900 transition-all duration-200"
              style={{
                background: '#FFFFFF3D',
                boxShadow: '0px 0.98px 1.96px 0px #1018280D',
                border: '1px solid #E5E7EB',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Login
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Get Started Button - Mobile */}
            <button
              className="w-full px-6 py-3 bg-[#C7044C] text-white rounded-lg font-medium text-sm hover:bg-[#a4003d] transition-all duration-200 shadow-md"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home2Header;

