'use client';
import React, { useState } from "react";
import Image1 from "@/public/home-2/success-1.jpg";
import Image2 from "@/public/home-2/success-3.jpg";

const UniDreams = () => {
  const [tooltip, setTooltip] = useState({
    show: false,
    text: '',
    x: 0,
    y: 0,
  });

  const tooltipTexts = {
    1: 'Michael Explains Success Story',
    2: 'Alexa Explains Success Story',
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
    <section className="py-[100px] px-5 max-w-[1440px] mx-auto flex flex-col gap-10">
      <div className="max-w-[600px] text-center mx-auto flex flex-col gap-3">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)]">1,000+ University Dreams Realized – Yours Is Next</h3>
        <p className="text-Lighttext text-base">Join thousands of students we've guided to their dream universities and start your journey today.</p>
      </div>
      <section className="flex uni-dream-card-wrapper justify-center gap-5">
        <article className="relative max-w-[400px]">
          <div 
            className="img-wrap relative cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={Image1.src} alt="success-1" className="w-full rounded-xl h-[400px] object-cover" />
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
        <article className="relative max-w-[400px]">
          <div 
            className="img-wrap relative cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={Image2.src} alt="success-2" className="w-full rounded-xl h-[400px] object-cover" />
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
      </section>
    </section>
  );
};

export default UniDreams;
