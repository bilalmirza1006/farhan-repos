'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
import LandingHeader from '../ui/LandingHeader';

const Home2Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/'); // 👈 Redirect to /about page
  };
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'FAQs', href: '#whatnext' },
    { name: 'Guides', href: '#exploreuni' },
    { name: 'Career', href: '/career' },
  ];

  return (
    <header className="w-full  backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/home-2" className="flex items-center">
              <img src="/main-logo.png" alt="Logo" className="h-8 md:h-10" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 bg-[#FFFFFF3D] text-black px-4 py-2 rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-primarycolor  font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
              <Link href="https://portal.get2uni.com/login">
                <Button
                  text="Login"
                  rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
                  bg="bg-[#FFFFFF3D]"
                  color="text-Primarytext"
                  cn="py-2.5 px-6 rounded-lg text-sm hover:scale-105 transition-all duration-200"
                  style={{
                    boxShadow: '0px 0.98px 1.96px 0px #1018280D',
                }}
              />
            </Link>

            <Link href="https://portal.get2uni.com/signup">
              <Button
                text="Get Started"
                bg="bg-[#C7044C]"
                color="text-white"
                cn="py-2.5 px-6 rounded-lg text-sm hover:bg-[#a4003d] hover:scale-105 transition-all duration-200 shadow-md"
              />
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-primarycolor  transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full min-h-screen">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src="/main-logo.png" alt="Logo" className="h-8" />
            <button
              className="text-gray-700 hover:text-primarycolor "
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 space-y-1 flex-grow bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primarycolor  hover:bg-gray-50 font-medium text-base py-3 px-4 rounded-lg transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-6 py-6 border-t border-gray-100 bg-white">
          <Link href="https://portal.get2uni.com/login">
                <Button
                  text="Login"
                  rightIcon={<ArrowRight className="w-4 h-4 text-black" />}
                  bg="bg-[#FFFFFF3D]"
                  color="text-Primarytext"
                  cn="py-2.5 px-6 rounded-lg text-sm hover:scale-105 transition-all duration-200"
                  style={{
                    boxShadow: '0px 0.98px 1.96px 0px #1018280D',
                }}
              />
            </Link>

            <Link href="https://portal.get2uni.com/signup">
              <Button
                text="Get Started"
                bg="bg-[#C7044C]"
                color="text-white"
                cn="py-2.5 px-6 rounded-lg text-sm hover:bg-[#a4003d] hover:scale-105 transition-all duration-200 shadow-md"
              />
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Home2Header;
