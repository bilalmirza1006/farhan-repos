'use client';
import React, { useState } from 'react';
import Image1 from '@/public/home-2/success-1.jpg';
import Image2 from '@/public/home-2/success-2.jpg';
import Image3 from '@/public/home-2/success-3.jpg';
import Button from '../../ui/Button';
import LandingButton from '../../ui/LandingButton';
import Link from 'next/link';

const SuccessSection = () => {
  const [tooltip, setTooltip] = useState({
    show: false,
    text: '',
    x: 0,
    y: 0,
  });

  const tooltipTexts = {
    1: 'Michael Explains Why Us?',
    2: 'Sarah Explains Why Us?',
    3: 'Alexa Explains Why Us?',
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
    <section className="bg-[#F5F8FF] py-[100px] px-5">
      <section className="flex flex-col max-w-[1000px] mx-auto gap-20 items-center ">
        <div className="max-w-[700px] text-center mx-auto flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)]">
            From Start to Success — <br />
            All in One Place
          </h3>
          <p className="text-Lighttext text-base">
            Step-by-step guidance, all-in-one support — study abroad made easy.{' '}
          </p>
        </div>
        <section className="grid grid-cols-1  md:grid-cols-3 success-card-wrapper gap-10 lg:gap-1">
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-5 left-5 z-3 text-[var(--bg-primary-color)]">
              How it works
            </h4>
            <div
              className="img-wrap relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Image1.src}
                alt="success-1"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {tooltip.show && tooltip.text === tooltipTexts[1] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                    transform: 'translate(0, 0)',
                  }}
                >
                  {tooltip.text} 
                </div>
              )}
            </div>
          </article>
          <article className="relative">
            <h4 className="w-full text-center text-2xl font-semibold absolute -top-5  z-3 text-primary-text">
              What's Included
            </h4>
            <div
              className="img-wrap relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Image2.src}
                alt="success-1"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {tooltip.show && tooltip.text === tooltipTexts[2] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                    transform: 'translate(0, 0)',
                  }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          </article>
          <article className="relative">
            <h4 className="text-2xl font-semibold absolute -top-5 right-5 z-3 text-[var(--bg-primary-color)]">
              Why Us?
            </h4>
            <div
              className="img-wrap relative cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={Image3.src}
                alt="success-1"
                className="w-full rounded-xl h-[400px] object-cover"
              />
              {tooltip.show && tooltip.text === tooltipTexts[3] && (
                <div
                  className="absolute bg-white p-2 rounded-full border border-gray-800 text-sm text-gray-800 max-w-[250px] pointer-events-none z-50"
                  style={{
                    left: `${tooltip.x + 15}px`,
                    top: `${tooltip.y + 15}px`,
                    transform: 'translate(0, 0)',
                  }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          </article>
        </section>
        <Link href="/">  <LandingButton text="Get Started" /></Link>
        {/* <Button text="Get Started" bg="bg-white" color="text-black" /> */}
      </section>
    </section>
  );
};

export default SuccessSection;
