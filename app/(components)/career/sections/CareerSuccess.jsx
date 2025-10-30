'use client';
import React, { useState } from 'react';
import Image1 from '@/public/home-2/success-1.jpg';
import Image2 from '@/public/home-2/success-2.jpg';
import Image3 from '@/public/home-2/success-3.jpg';
// import Image4 from '@/public/home-2/success-4.png'; // ✅ new image
import Button from '../../ui/Button';
import LandingButton from '../../ui/LandingButton';

const CareerSuccess = () => {
  const [tooltip, setTooltip] = useState({
    show: false,
    text: '',
    x: 0,
    y: 0,
  });

  const tooltipTexts = {
    1: 'Person 1',
    2: 'Person 2',
    3: 'Person 3',
    4: 'Person 4', // ✅ new tooltip
  };

  const handleMouseMove = (e, imageId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      show: true,
      text: tooltipTexts[imageId],
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  return (
    <section id="features" className="bg-[#F5F8FF] py-[60px] px-5">
      <section className="flex flex-col max-w-[1200px] mx-auto gap-20 items-center ">
        <div className="max-w-[700px] text-center mx-auto flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)]">
            GEt 2 UNI: Journey & Map
          </h3>
        </div>

        {/* ✅ updated grid: now 4 columns on large screens */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 success-card-wrapper gap-5 lg:gap-1">
          {/* Image 1 */}
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-8 lg:-top-5 left-5 z-3 text-[var(--bg-primary-color)]">
              Semester1
            </h4>
            <div
              className=" relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={'/home-2/image-1.png'}
                alt="success-1"
                className="w-full rounded-xl h-[400px] object-cover"
              />

              {/* {tooltip.show && tooltip.text === tooltipTexts[1] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                  }}
                >
                  {tooltip.text}
                </div>
              )} */}
            </div>
          </article>

          {/* Image 2 */}
          <article className="relative">
            <h4 className="w-full text-center text-2xl font-semibold absolute -top-8 lg:-top-5 z-3 text-primary-text">
              Semester2
            </h4>
            <div
              className=" relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={'/home-2/image-2.png'}
                alt="success-2"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {/* {tooltip.show && tooltip.text === tooltipTexts[2] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                  }}
                >
                  {tooltip.text}
                </div>
              )} */}
            </div>
          </article>

          {/* Image 3 */}
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-8 lg:-top-5 right-5 z-3 text-primary-text">
              4-Month Internship
            </h4>
            <div
              className=" relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={'/home-2/image-3.png'}
                alt="success-3"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {/* {tooltip.show && tooltip.text === tooltipTexts[3] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                  }}
                >
                  {tooltip.text}
                </div>
              )} */}
            </div>
          </article>

          {/* ✅ Image 4 - New One */}
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-8 lg:-top-5 left-5 z-3  text-[var(--bg-primary-color)]">
              Placement & Beyond
            </h4>
            <div
              className=" relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 4)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={'/home-2/image4.png'}
                alt="success-4"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {/* {tooltip.show && tooltip.text === tooltipTexts[4] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                  }}
                >
                  {tooltip.text}
                </div>
              )} */}
            </div>
          </article>
        </section>

        <LandingButton text="Get Started" bg="bg-white" color="text-black" />
      </section>
    </section>
  );
};

export default CareerSuccess;
