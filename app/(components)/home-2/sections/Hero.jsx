'use client';

import React, { useEffect, useRef, useState } from 'react';
import Button from '@/app/(components)/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './textRotate.css'; // 👈 make sure this file is created
import LandingButton from '../../ui/LandingButton';
import { useRouter } from 'next/navigation';
import BlurText from '../../animation/blurtext/BlurText';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Rotating texts
  const texts = [
    'Alex is a Real Get2Uni Member',
    'Alex Got Admission!',
    'Join Get2Uni Today!',
  ];

  // Scroll animation (existing)  const router = useRouter();

  const handleClick = () => {
    router.push('/'); // 👈 Redirect to /about page
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        scale: 0.9,
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        ease: 'none',
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="min-h-screen bg-white">
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-start overflow-hidden origin-top"
        style={{ transformOrigin: 'top center' }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home-2/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20">
          <div className="text-white max-w-2xl flex flex-col gap-6 items-start">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <BlurText
                text="No More Stress,"
                className="inline-block mr-2"
                animateBy="words"
                direction="top"
                delay={10}
              />
              <BlurText
                text="just progress"
                className="inline-block mr-3"
                animateBy="words"
                direction="top"
                delay={10}
              />
              {/* No More Stress, <br /> just progress */}
            </h1>

            {/* Rotating Text */}
            <div className="relative h-10 overflow-hidden text-lg md:text-xl font-medium">
              <div className="text-rotate">
                <span className="text-rotate-sr-only">{texts[index]}</span>
                <span className="text-rotate-word">
                  <span
                    key={index}
                    className="text-rotate-element animate-rotateWord"
                  >
                    {texts[index]}
                  </span>
                </span>
              </div>
            </div>

            {/* Button */}
            {/* <Button
              text="Get Started"
              bg="bg-white"
              color="text-black"
              cn="hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            /> */}
            <LandingButton onClick={handleClick} text="Get Started" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
