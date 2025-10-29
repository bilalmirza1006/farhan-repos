import React from "react";
import Image from "@/public/home-2/success-2.jpg";
import Bubble from "../ui/Bubble";

const WhatNext = () => {
  const leftBubbles = [
    { text: "How do I enroll in Get 2 Uni?", left: 90, rotate: 0 },
    { text: "How do I enroll in Get 2 Uni?", left: 40, rotate: 3 },
    { text: "What if I'm unsure about my domain choice?", left: 80, rotate: -2 },
    { text: "What makes Get 2 Uni different from other career programs?", left: 0, rotate: 2 },
  ];

  const rightBubbles = [
    { text: "How do I enroll in Get 2 Uni?", left: 40, rotate: 3 },
    { text: "What if I'm unsure about my domain choice?", left: 20, rotate: -2 },
    { text: "What makes Get 2 Uni different from other career programs?", left: 0, rotate: 2 },
    { text: "How do I enroll in Get 2 Uni?", left: 90, rotate: 0 },
  ];

  return (
    <section className="bg-[#F5F8FF] py-12 md:py-20 lg:py-[100px] px-5 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-10 lg:gap-12">
      {/* Header */}
      <div className="max-w-[600px] text-center mx-auto flex flex-col gap-3 md:gap-4">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--heading)] leading-tight">
          What Happens Next <br className="hidden sm:block" />
          (and How We Guide You)
        </h3>
      </div>

      <div className="max-w-[1440px] mx-auto w-full">
        <div className="hidden xl:flex justify-center gap-6 items-center">
          <div className="relative w-full max-w-[400px] flex flex-col gap-3 items-start justify-center">
            {leftBubbles.map((bubble, index) => (
              <Bubble key={`left-${index}`} text={bubble.text} left={bubble.left} rotate={bubble.rotate} />
            ))}
          </div>

          <div className="w-full max-w-[500px] flex-shrink-0">
            <img src={Image.src} alt="Student success story" className="w-full rounded-lg h-full min-h-[400px] object-cover shadow-lg" />
          </div>

          <div className="relative w-full max-w-[400px] flex flex-col gap-3 items-start justify-center">
            {rightBubbles.map((bubble, index) => (
              <Bubble key={`right-${index}`} text={bubble.text} left={bubble.left} rotate={bubble.rotate} />
            ))}
          </div>
        </div>

        <div className="hidden md:block xl:hidden">
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full max-w-[600px]">
              <img src={Image.src} alt="Student success story" className="w-full rounded-lg h-auto min-h-[400px] object-cover shadow-lg" />
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-[800px]">
              {[...leftBubbles, ...rightBubbles].map((bubble, index) => (
                <Bubble key={`tablet-${index}`} text={bubble.text} left={0} rotate={bubble.rotate} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-full">
              <img src={Image.src} alt="Student success story" className="w-full rounded-lg h-auto min-h-[300px] object-cover shadow-lg" />
            </div>

            <div className="flex flex-col gap-3 w-full">
              {[...leftBubbles, ...rightBubbles].map((bubble, index) => (
                <Bubble key={`mobile-${index}`} text={bubble.text} left={0} rotate={0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNext;
