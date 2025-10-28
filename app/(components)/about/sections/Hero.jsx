import React from 'react';
import Image from 'next/image';
import heroImage from '@/public/about/hero-bg.png';
import BlurText from '../../animation/blurtext/BlurText';

const Hero = () => {
  return (
    <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Students studying abroad"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          <BlurText
            text="Your Gateway to Global Education"
            className="inline-block mr-3"
            animateBy="words"
            direction="top"
            delay={100}
          />
        </h1>
        <p className=" text-white/90 max-w-2xl">
          At Get2Uni, we simplify global education by helping students find the right universities,
          courses, and countries — all in one place.
        </p>
      </div>
    </section>
  );
};

export default Hero;
