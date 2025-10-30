import React from 'react';
import BlurText from '../../animation/blurtext/BlurText';
import Button from '../../ui/Button';

function CareerHero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center text-black overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/career/background.jpg')",
          opacity: 0.33, // only background is faded
        }}
      ></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-[940px]">
        <div className="mx-14">
          <h1 className="text-3xl md:text-[44px] font-semibold text-primaryheading">
            Get2Uni: Your Pathway To a Global IT Career
          </h1>
        </div>
        <div>
          <p className="font-medium text-2xl text-secondarytext">
            Transform your graduate journey with a structured, AI-driven program that readies you
            for real-world IT roles from Semester One.
          </p>
        </div>
        <div className="mt-7">
          <Button text={'Register Now'} />
        </div>
      </div>
    </div>
  );
}

export default CareerHero;
