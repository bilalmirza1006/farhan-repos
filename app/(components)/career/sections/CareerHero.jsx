import React from 'react';
import BlurText from '../../animation/blurtext/BlurText';
import Button from '../../ui/Button';

function CareerHero() {
  return (
    <div
      style={{
        backgroundImage: "url('/career/background.jpg')", // 👈 Replace with your actual image path
      }}
      className="min-h-[80vh] flex items-center justify-center text-black"
    >
      <div className="flex flex-col items-center justify-center  text-center w-[940px]">
        <div className="mx-14">
          <h1 className="text-3xl md:text-[44px] font-semibold text-primaryheading">
            {/* <BlurText
              text="Get2Uni"
              className="inline-block text-[#C8102E]"
              animateBy="words"
              direction="top"
              delay={150}
            />
            <BlurText
              text=": Your Pathway To a Global IT Career"
              className="inline-block mr-3"
              animateBy="words"
              direction="top"
              delay={150}
            /> */}
            Get2Uni: Your Pathway To a Global IT Career
          </h1>
        </div>
        <div>
          <p className="font-medium text-2xl text-">
            Transform your graduate journey with a structured, AI-driven program that readies you
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
