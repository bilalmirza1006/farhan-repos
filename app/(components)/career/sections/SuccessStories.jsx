import React from 'react';
// import Image1 from '@/public/home-2/success-1.jpg';

const SuccessStories = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white text-center">
      {/* Heading */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Success Stories</h2>
        <p className="text-gray-500">
          Hear from students who transformed their careers with
          <br />
          <span className="text-pink-600 font-semibold">Get2Uni</span>
        </p>
      </div>

      {/* Image Card */}
      <div className="relative mt-10 group vid-btn">
        <div className="img-wrap">
        <img
          src={'/home-2/success-1.jpg'}
          alt="Student"
          className="w-64 h-80 object-cover rounded-2xl shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        </div>

        {/* Speech bubble (hidden by default, shown on hover) */}
        <div className="absolute bottom-6 right-[-50px] bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shadow-md flex items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <span>Alexa Explain Success Story</span>
          <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white drop-shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
