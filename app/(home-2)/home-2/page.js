'use client';

import React from 'react';

const Home2Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section - Add padding-top to account for fixed header */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Home 2
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Custom layout with unique design
          </p>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Content sections will go here */}
    </div>
  );
};

export default Home2Page;

