'use client';
import React from 'react';
import ScrollingMarquee from '../ScrollingMarquee';
import SearchBar from '@/app/(components)/ui/SearchInput';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-white h-[520px] overflow-hidden">
        {/* Background Image */}
        <div
          className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-[44px] font-semibold text-primaryheading">
            Find the Best University <span className="text-[#C8102E]">For You — Instantly</span>
          </h1>
          <p className="text-secondarytext mt-3">
            Find useful information, apply, get visa and even a job all in one place
          </p>

          {/* Search Bar */}
          <div className="mt-10 w-full ">
            <form
              // onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 w-full max-w-7xl bg-white py-3.5 px-4.5 rounded-md shadow-sm mx-auto"
            >
              <div className="flex items-center bg-[#F3F3F3] rounded-md px-3">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  // value={query}
                  // onChange={(e) => setQuery(e.target.value)}
                  placeholder={'Search university by name, program, country'}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-700 text-sm py-4.5"
                />
              </div>
              <button
                type="submit"
                className="bg-[#c8004b] hover:bg-[#a1003e] cursor-pointer text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors duration-200"
              >
                Search now!
              </button>
            </form>
          </div>
        </div>
      </section>
      <ScrollingMarquee />
    </>
  );
};

export default Hero;
